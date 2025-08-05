'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { img } from 'framer-motion/client'

const textOptions = [
  { 
    label: 'Accès à notre vivier de talents',
    image: '/image/image1.svg',
    description: "Parcourez notre base de profils évalués et filtrés par expertise, niveau d'expérience, secteur et localisation"
  },
  { 
    label: 'Service de chasse de profils rares',
    image: '/image/image2.svg',
    description: 'Confiez-nous votre besoin, nous activons notre réseau local et international pour vous trouver le bon talent, discret et aligné'
  },
  { 
    label: 'Recrutement sur mesure ',
    image: '/image/image3.svg',
    description: "Besoin d'un accompagnement clé en main  Nous gérons pour vous toute la phase de sourcing, préqualification, entretiens, shortlist."
  },
 
  { 
    label: "Intégration de vos offres d'emploi",
    image: '/image/image3.svg',
    description: 'Publiez directement vos offres sur votre espace pour matcher les bons profils'
  },
]



export default function TextImageSwitcher() {
  /**hooks pour le style et l'apparution d'image */
  const [currentImage, setCurrentImage] = useState(textOptions[0].image)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  
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

  // Effet pour la rotation automatique
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = prevIndex === null ? 1 : (prevIndex + 1) % textOptions.length;
        setCurrentImage(textOptions[nextIndex].image);
        return nextIndex;
      });
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleItemClick = (item, index) => {
    setCurrentImage(item.image);
    setActiveIndex(index);
    setIsPaused(true);
    
    // Reprendre la rotation automatique après 6 secondes
    setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  return (
    <div ref={ref} className='mb-[100px] relative'>
       {/* Particules d'animation de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-15 left-15 w-2 h-2 bg-orange-300 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-orange-700 rounded-full animate-bounce animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
      </div>
      
      {/** titre */}
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='mt-[30px] md:mt-[50px] mb-[30px] md:mb-[50px]'
      >
          <div className='flex flex-col items-center space-y-[20px] md:space-y-[30px] px-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-orange-700/70 mb-8 transition-all duration-1200 delay-200 text-center'>Nos services</h1>
            <p className='text-sm sm:text-base md:text-xl text-center font-bold max-w-4xl'>Une solution, plusieurs leviers pour recruter.</p>
          </div>
      </motion.div>

    {/** info pour le format desktop et tablette  */}
     <div className="mt-[20px] text-center space-y-4 flex flex-col lg:flex-row hidden md:flex justify-center items-center lg:items-start lg:space-x-[30px] xl:space-x-[50px] px-4 lg:px-8">
            {/* Image */}
            <motion.div 
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-auto flex justify-center mb-6 lg:mb-0 lg:flex-shrink-0"
            >
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  initial={{ opacity: 0.7, y: 80, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  alt="Image animée"
                  className="md:w-80 lg:w-[600px] h-auto max-w-full"
                />
            </motion.div>

            {/* Buttons */}
            <motion.div 
              ref={buttonsRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isButtonsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4 w-full lg:w-[500px] max-w-md lg:max-w-none lg:flex-shrink-0"
            >
              {textOptions.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isButtonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleItemClick(item, index)}
                  className={`px-3 md:px-4 py-3 md:py-2 space-y-[15px] md:space-y-[20px] cursor-pointer flex flex-col items-start transition-all duration-500 hover:bg-slate-50/50 hover:border-l-[5px] hover:bg-gray-100/50 border-orange-700/70 text-left w-full rounded-r-lg ${
                    activeIndex === index 
                      ? 'border-l-[5px] shadow-lg transform translate-x-2' 
                      : 'hover:shadow-md'
                  }`}
                >
                  <motion.p 
                    className={`font-bold text-sm md:text-base lg:text-lg transition-colors duration-300 ${
                      activeIndex === index ? 'text-orange-700' : 'text-orange-700/70'
                    }`}
                    animate={activeIndex === index ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.p>
                  <motion.p 
                    className={`text-xs md:text-sm lg:text-base transition-all duration-300 leading-relaxed ${
                      activeIndex === index ? 'text-black font-medium' : 'text-black-600'
                    }`}
                    animate={activeIndex === index ? { opacity: [0.8, 1] } : { opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.button>
              ))}
            </motion.div>
      </div>

      {/**  info pour le format mobile  */}
      <div className='block md:hidden px-4'>
            {textOptions.map((item, index) => (
               <div key={index} className='flex flex-col items-center mb-8 last:mb-0'>
                 <div className='w-full flex justify-center mb-4'>
                    <motion.img
                      src={item.image}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      alt="Image animée"
                      className="w-full max-w-xs sm:max-w-sm h-auto"
                    />
                 </div>
                 <div className='space-y-3 sm:space-y-4 flex flex-col items-center text-center w-full max-w-md'>
                    <p className='text-orange-700/70 font-bold text-base sm:text-lg'>{item.label}</p>
                    <p className='text-sm sm:text-base leading-relaxed px-2'>{item.description}</p>
                 </div>
               </div>
              ))}
      </div>
    </div>
  )
}