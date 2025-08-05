"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Variants } from 'framer-motion';

export default function Hero() {
  // Variantes d'animation pour les conteneurs
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  // Variantes pour les éléments de texte
  const textVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Variantes pour l'image
  const imageVariants:Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  // Variantes pour les boutons
  const buttonVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  return (
    <div className="mt-[80px] max-md:mt-[50px] bg-gray-50 flex justify-center items-center min-h-[500px] md:min-h-[579px] px-4 py-6 md:py-8">
      {/** text et lien vers cvthèque */}
      <motion.div 
        className="flex flex-col lg:flex-row justify-center items-center lg:space-x-[80px] xl:space-x-[120px] space-y-6 md:space-y-8 lg:space-y-0 mt-[30px] md:mt-[50px] xl:mt-[0px] mx-4 md:mx-[30px] lg:mx-[50px] max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section texte */}
        <motion.div 
          className="space-y-4 md:space-y-5 lg:space-y-[40px] text-center lg:text-left flex-1 order-2 lg:order-1"
          variants={textVariants}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-[1.2] sm:leading-[1.3] md:leading-[1.3] lg:leading-[1.7] xl:leading-[1.4] font-[550]"
            variants={textVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Yemma-Solutions, là où
            </motion.span>
            <motion.span 
              className="text-orange-700/70 tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <br className="hidden lg:hidden  sm:block"/> les talents prènnent{" "}
            </motion.span>
            <br className="hidden"/>
            <motion.span 
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
             racine
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-sm lg:text-base leading-relaxed md:leading-snug lg:leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0"
            variants={textVariants}
            transition={{ delay: 0.4 }}
          >
            Yemma-Solutions connecte les entreprises à des talents <br className="hidden  xl:block"/>
            qualifiés, alignés et engagés, grâce à une approche inclusive <br className="hidden  xl:block"/>
            du recrutement.
          </motion.p>
          
          {/* BUTTON*/}
          <motion.div 
            className="flex  sm:flex-row  lg:flex-row gap-3 md:gap-2 justify-center lg:justify-start"
            variants={containerVariants}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="" 
              className="text-white max-sm:text-[12px] border bg-orange-700/70 opacity-80 p-3 px-5 text-center whitespace-nowrap hover:opacity-90 transition-opacity w-full sm:w-auto md:w-[200px] lg:w-auto rounded-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Accès à la CVthèque
            </motion.a>
            <motion.a 
              href="" 
              className="text-white max-sm:text-[12px] border bg-orange-700/75 opacity-80 p-3 px-5 text-center whitespace-nowrap hover:opacity-90 transition-opacity w-full sm:w-auto md:w-[200px] lg:w-auto rounded-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Soumettre mon profil
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Section image */}
        <motion.div 
          className="w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0 order-1 lg:order-2"
          variants={imageVariants}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/image/hero.svg"
              alt="sortie"
              width={530}
              height={530}
              className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[530px] h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}