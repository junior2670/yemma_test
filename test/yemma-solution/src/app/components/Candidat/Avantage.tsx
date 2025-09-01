'use client'
import Image from "next/image";
import { cards } from "@/app/data";
import { motion } from "framer-motion";
import { Variants } from 'framer-motion';

export default function FeatureCards() {
  // Variants pour le container principal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Variants pour le header
  const headerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
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
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
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
  const imageVariants: Variants = {
    hidden: (isReversed: boolean) => ({
      opacity: 0,
      x: isReversed ? 60 : -60,
      scale: 0.8,
      rotateY: isReversed ? -10 : 10
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
  const textVariants: Variants = {
    hidden: (isReversed: boolean) => ({
      opacity: 0,
      x: isReversed ? -40 : 40,
      y: 30
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
  const separatorVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "4rem", 
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      width: "6rem",
      backgroundColor: "rgba(194, 65, 12, 0.7)",
      transition: { duration: 0.3 }
    }
  };

  // Variants pour les éléments du paragraphe
  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Header avec animation améliorée */}
        <motion.div 
          variants={headerVariants}
          className="flex flex-col items-center text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-orange-700/70 leading-tight"
            whileHover={{ 
              scale: 1.02,
              color: "rgba(194, 65, 12, 0.8)",
              transition: { duration: 0.3 }
            }}
          >
            Pourquoi rejoindre{" "}
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-orange-700/70 to-orange-600/60 bg-clip-text text-transparent">
              Yemma-Solutions
            </span> ?
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 max-w-4xl px-4"
            variants={paragraphVariants}
            custom={0.3}
          >
            Nous ne cherchons pas uniquement des{" "}
            <span className="font-medium text-orange-700/60">diplômes</span> ou de l'{" "}
            <span className="font-medium text-orange-700/60">expérience</span>.
            Nous valorisons les{" "}
            <span className="font-medium text-orange-700/60">compétences réelles</span>, la{" "}
            <span className="font-medium text-orange-700/60">motivation</span>, les{" "}
            <span className="font-medium text-orange-700/60">valeurs humaines</span>, et les{" "}
            <span className="font-medium text-orange-700/60">parcours authentiques</span>.
          </motion.p>
          
          <motion.p 
            className="font-bold text-lg sm:text-xl lg:text-2xl text-orange-700/70"
            variants={paragraphVariants}
            custom={0.5}
          >
            En rejoignant notre vivier de talents, vous aurez :
          </motion.p>
        </motion.div>

        {/* Cards avec animations et responsive amélioré */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4 }
              }}
              className="group"
            >
              <div
                className={`flex items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 ${
                  card.ordre 
                    ? "flex-col lg:flex-row" 
                    : "flex-col lg:flex-row-reverse"
                }`}
              >
                {/* Image Container - Responsive amélioré */}
                <motion.div 
                  variants={imageVariants}
                  custom={!card.ordre}
                  className="w-full lg:w-1/2 xl:w-[45%]"
                >
                  <motion.div 
                    className="relative"
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <div className="relative  rounded-2xl lg:rounded-3xl  hover:shadow-xl transition-shadow duration-500">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[4/5] sm:aspect-[16/17] lg:aspect-[4/5] xl:aspect-[16/19]"
                      >
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                        />
                      </motion.div>
                      
                      {/* Overlay avec dégradé orange */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-orange-800/10 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Badge décoratif */}
                      <motion.div
                        className="absolute top-4 right-4 w-3 h-3 bg-orange-700/70 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        whileHover={{ 
                          scale: 1.5,
                          backgroundColor: "rgba(194, 65, 12, 0.9)",
                          transition: { duration: 0.3 }
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text Container - Responsive amélioré */}
                <motion.div 
                  variants={textVariants}
                  custom={!card.ordre}
                  className="w-full lg:w-1/2 xl:w-[55%]"
                >
                  <div className="text-center lg:text-left space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-8">
                    <motion.h3 
                      className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
                      whileHover={{ 
                        color: "rgba(194, 65, 12, 0.8)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <span className="text-orange-700/70">{card.title}</span>
                    </motion.h3>
                    
                    {/* Barre de séparation animée responsive */}
                    <motion.div 
                      className="h-1 bg-orange-700/40 mx-auto lg:mx-0 rounded-full"
                      variants={separatorVariants}
                      whileHover="hover"
                    />
                    
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        color: "rgba(55, 65, 81, 0.9)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {card.desc}
                    </motion.p>

                    {/* Élément décoratif */}
                    <motion.div 
                      className="flex justify-center lg:justify-start mt-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-orange-700/30 rounded-full"
                            whileHover={{ 
                              backgroundColor: "rgba(194, 65, 12, 0.7)",
                              scale: 1.2 
                            }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          />
                        ))}
                      </div>
                    </motion.div>
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