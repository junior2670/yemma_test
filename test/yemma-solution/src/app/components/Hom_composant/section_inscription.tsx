
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export default function SectInscription() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
        className="flex  justify-center bg-white"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-[50px] w-[1200px] justify-center items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
            className="space-y-20 mt-[50px] text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-black">
              Inscrivez-vous en <br /> quelques clics.
            </h1>
            <div className="flex flex-col text-white space-y-[20px] items-center lg:items-start">
              <a href="" className="bg-orange-700/70 text-center w-[300px] p-[10px] rounded-md">
                Prêt à rencontrer les bons profils ?
              </a>
              <a href="" className="bg-orange-700/70 text-center w-[350px] p-[10px] rounded-md">
                Prêt à rejoindre les bonnes entreprises ?
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 10 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
            }}
          >
            <Image
              src="/image/stat.svg"
              alt="image vitrine"
              width={550}
              height={550}
              className="h-auto "
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
