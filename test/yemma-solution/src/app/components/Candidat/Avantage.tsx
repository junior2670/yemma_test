'use client'
import Image from "next/image";
import { cards } from "@/app/data";
import { motion } from "framer-motion";
import { Variants } from 'framer-motion';
export default function FeatureCards() {
  // Variants pour le container principal
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Variants pour le header
  const headerVariants:Variants = {
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Variants pour les cartes
  const cardVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Variants pour les images
  const imageVariants:Variants  = {
    hidden: (isReversed:boolean) => ({
      opacity: 0,
      x: isReversed ? 40 : -40,
      scale: 0.8,
      rotateY: isReversed ? -15 : 15
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Variants pour le texte
  const textVariants:Variants = {
    hidden: (isReversed:boolean) => ({
      opacity: 0,
      x: isReversed ? -40 : 40,
      y: 20
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Variants pour la barre de séparation
  const separatorVariants:Variants= {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: 64, 
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      width: 96,
      backgroundColor: "rgba(194, 65, 12, 0.6)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Header avec animation */}
        <motion.div 
          variants={headerVariants}
          className="flex flex-col items-center text-center leading-[1.7] space-y-6 mb-16"
        >
          <motion.h1 
            className="text-4xl max-sm:text-3xl md:text-5xl font-bold text-orange-700/70"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Pourquoi rejoindre <br />Yemma-Solutions ?
          </motion.h1>
          
          <motion.p 
            className="text-xl leading-[1.7] text-gray-700  max-sm:text-[15px] max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Nous ne cherchons pas uniquement des diplômes ou de l'expérience.
            Nous valorisons les compétences réelles, la motivation, les valeurs
            humaines, et les parcours authentiques.
          </motion.p>
          
          <motion.p 
            className="font-bold text-lg text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            En rejoignant notre vivier de talents, vous aurez :
          </motion.p>
        </motion.div>

        {/* Cards avec animations */}
        <div className="space-y-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div
                className={`flex items-center gap-8 md:gap-12 ${
                  card.ordre ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
                }`}
              >
                {/* Image Container */}
                <motion.div 
                  variants={imageVariants}
                  custom={!card.ordre}
                  className="flex-1"
                >
                  <motion.div 
                    className="relative rounded-2xl"
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <div className="aspect-[4/3] relative">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="w-[500px] h-[500px]"
                      >
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className=""
                          sizes=""
                        />
                      </motion.div>
                      
                      {/* Overlay avec animation */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text Container */}
                <motion.div 
                  variants={textVariants}
                  custom={!card.ordre}
                  className="flex-1"
                >
                  <div className="text-center md:text-left space-y-4 p-6">
                    <motion.h3 
                      className="text-xl md:text-2xl text-orange-700/70 font-bold leading-snug text-gray-800"
                    
                    >
                      {card.title}
                    </motion.h3>
                    
                    {/* Barre de séparation animée */}
                    <motion.div 
                      className="h-1 bg-orange-700/30 mx-auto md:mx-0"
                      variants={separatorVariants}
                      whileHover="hover"
                    />
                    
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        color: "rgba(55, 65, 81, 1)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {card.desc}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}