import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { img } from 'framer-motion/client'

const textOptions = [
  { 
    label: 'Base de profils vérifiés',
    image: '/image/image1.svg',
    description: 'tous nos candidats sont préqualifiés'
  },
  { 
    label: 'Chasse de talents sur mesure',
    image: '/image/image2.svg',
    description: 'pour vos besoin critiques ou internationaux'
  },
  { 
    label: 'Plateforme intuitive & fluide ',
    image: '/image/image3.svg',
    description: 'pensee pour les recruteurs comme pour mes candidats'
  },
  { 
    label: 'Diversité inclusion ',
    image: '/image/image4.svg',
    description: 'pensee pour les recruteurs comme pour mes candidats'
  },
  { 
    label: 'Approche humaine',
    image: '/image/image3.svg',
    description: 'chaque candidature est considérée avec soin'
  },
]

export default function TextImageSwitcher() {
  /**hooks pour le style et l'apparution d'image */
  const [currentImage, setCurrentImage] = useState(textOptions[0].image)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  // Refs pour les animations au scroll
  const ref = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const buttonsRef = useRef(null)
  
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const isImageInView = useInView(imageRef, { once: true, margin: "-50px" })
  const isButtonsInView = useInView(buttonsRef, { once: true, margin: "-50px" })

  /**permet au hover de s'afficher sur la première info */
  useEffect(() => {
    setActiveIndex(0);
  }, [])

  return (
    <div ref={ref} className='mb-[50px]'>
      {/** titre */}
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='mt-[30px] md:mt-[50px] mb-[30px] md:mb-[50px] mb-[50px] '
      >
          <div className='flex flex-col items-center space-y-[20px] md:space-y-[30px] px-4'>
            <h1 className='font-bold text-2xl md:text-4xl text-center'>Ce qui nous rend différents</h1>
            <p className='text-base md:text-lg text-center'>Pourquoi choisir Yemma-Solutions ?</p>
          </div>
      </motion.div>
    {/** info pour le format desktop et tablette  */}
     <div className="mt-[20px] text-center space-y-4 flex flex-col lg:flex-row  max-md:hidden justify-center items-center lg:items-start lg:space-x-[50px] px-4">
            {/* Image */}
            <motion.div 
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-auto flex justify-center mb-6 lg:mb-0"
            >
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  initial={{ opacity: 0.7, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  alt="Image animée"
                  className="md:w-80 lg:w-[600px]  h-auto"
                />
            </motion.div>

            {/* Buttons */}
            <motion.div 
              ref={buttonsRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isButtonsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4 w-full lg:w-auto max-w-md lg:max-w-none"
            >
              {textOptions.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isButtonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setCurrentImage(item.image)
                    setActiveIndex(index)
                  }}
                  className={`px-4 py-3 md:py-2 space-y-[15px] md:space-y-[20px] cursor-pointer flex flex-col items-start transition-all duration-200 hover:bg-slate-50/50 hover:border-l-[5px] hover:bg-gray-100/50 border-orange-700/70 text-left w-full ${
                    activeIndex == index ? ' border-l-[5px] shadow-sm' : ''
                  }`}
                >
                  <p className='text-orange-700/70 font-bold text-base md:text-lg'>{item.label}</p>
                  <p className='text-sm md:text-base'>{item.description}</p>
                </motion.button>
              ))}
            </motion.div>
      </div>
      {/**  info pour le format mobile  */}
      <div className='md:hidden' >
            {textOptions.map((item, index) => (
               <>
                 <div className='flex flex-col items-center '>
                  <div>
                    <motion.img
                      key={currentImage}
                      src={item.image}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      alt="Image animée"
                      className="" />
                   </div>
                      <div
                        key={index}

                        className={` space-y-[15px] md:space-y-[20px] flex flex-col items-center text-left w-full `}
                      >
                        <p className='text-orange-700/70 font-bold text-base md:text-lg'>{item.label}</p>
                        <p className='text-sm md:text-base'>{item.description}</p>
                      </div>
                  </div>
                </>
              ))}
      </div>
    </div>
  )
}