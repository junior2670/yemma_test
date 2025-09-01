"use client"

import Image from "next/image"
import { SecteurCards } from "@/app/data"
import { Buttons } from "../ui/Button"
import { motion } from "framer-motion"
import { Variants } from "framer-motion"
export default function Secteur() {
  // Animations variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants:Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const imageVariants:Variants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return ( 
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        className="flex flex-col items-center space-y-5 mb-12 sm:mb-16 lg:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center max-w-4xl"
          variants={itemVariants}
        >
          <span className="text-orange-700/70">À qui s'adresse</span>{" "}
          <span className="text-gray-800">notre plateforme ?</span>
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 text-center"
          variants={itemVariants}
        >
          Nous accompagnons tous les profils
        </motion.p>
      </motion.div>

      {/* Main Content Section */}
      <motion.div 
        className="mb-12 sm:mb-16 lg:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="lg:flex lg:gap-8 xl:gap-12">
          {/* Image Section - Fixed position on large screens */}
          <motion.div 
            className="lg:w-96 xl:w-[450px] lg:flex-shrink-0 mb-8 lg:mb-0"
            variants={imageVariants}
          >
            <div className="relative w-full aspect-[20/26]
            
            rounded-2xl overflow-hidden  hover:shadow-xl transition-shadow duration-300 sticky lg:top-8">
              <Image 
                src="/image/secteur.png"
                alt="Illustration d'un homme et d'une femme noir communicant à travers un téléphone"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
          </motion.div>

          {/* Cards Section - Flows around image */}
          <motion.div 
            className="lg:flex-1"
            variants={containerVariants}
          >
            <div className="columns-1 sm:columns-2 lg:columns-1 xl:columns-2 gap-6 space-y-6">
              {SecteurCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-orange-200 group break-inside-avoid mb-6"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <h3 className="font-bold text-lg sm:text-xl text-orange-700/70 group-hover:text-orange-700 transition-colors duration-300">
                      {card.titre}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div 
        className="text-center rounded-2xl p-8 sm:p-12 lg:p-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-orange-700/70"
          variants={itemVariants}
        >
          Besoin d'aide ?
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Notre équipe est là pour vous accompagner. Contactez-nous directement par{" "}
          <span className="font-medium text-orange-700/80">WhatsApp</span>, {" "}
          <span className="font-medium text-orange-700/80">email</span> ou via le{" "}
          <span className="font-medium text-orange-700/80">formulaire de contact</span>.
          <br className="hidden sm:block" />
          Nous croyons en un accompagnement humain, bienveillant et sur mesure.
        </motion.p>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Buttons 
            className="bg-orange-700/70 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg" 
            label="Rejoignez-nous"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}