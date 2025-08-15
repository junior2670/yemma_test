import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Mobile_carousel from '../ui/Mobile_carousel'
import { textOptions1 } from '@/app/data'

export default function TextImageSwitcher() {
  /**hooks pour le style et l'apparution d'image */
  const [currentImage, setCurrentImage] = useState(textOptions1[0].image)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  // Refs pour les animations au scroll
  const ref = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const buttonsRef = useRef(null)
  
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const isImageInView = useInView(imageRef, { once: true, margin: "-50px" })
  const isButtonsInView = useInView(buttonsRef, { once: true, margin: "-50px" })

  /**permet au hover de s'afficher sur la première info */
  useEffect(() => {
    setActiveIndex(0);
  }, [])

  return (
    <div ref={ref} className='mb-[50px] bg-white'>
      {/** titre */}
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='mt-[30px] md:mt-[50px] mb-[30px] md:mb-[50px] mb-[50px] '
      >
          <div className='flex flex-col items-center space-y-[20px] md:space-y-[30px] px-4'>
            <h1 className='font-bold text-4xl md:text-5xl text-center text-black'>Ce qui nous rend différents</h1>
            <p className='text-base md:text-lg text-center text-black'>Pourquoi choisir Yemma-Solutions ?</p>
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
              {textOptions1.map((item, index) => (
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
                  <p className='text-sm md:text-base text-black'>{item.description}</p>
                </motion.button>
              ))}
            </motion.div>
      </div>
      {/**  info pour le format mobile  */}
      {/* <div className='md:hidden' >
            {textOptions1.map((item, index) => (
            
                 <div
                 key={item.label}
                  className='flex flex-col items-center '>
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
                   
              ))}
      </div> */}
      <Mobile_carousel/>

    </div>
  )
}