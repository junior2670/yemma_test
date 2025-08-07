import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Hook personnalisé pour l'animation du compteur
const useCounter = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isActive) return

    const increment = (end - start) / (duration / 16)
    let current = start
    
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isActive, end, duration, start])

  return { count, startCounting: () => setIsActive(true) }
}

export default function Statistique() {
  const Nbreprequalif: number = 8000
  const Satisfaction: number = 98
  const MissionSucces: number = 85
  const EntrepriseAccompagne: number = 60

  // Refs pour les animations
  const titleRef = useRef(null)
  const statsRef = useRef(null)
  
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })

  // Compteurs animés
  const counter1 = useCounter(Nbreprequalif, 2500, 0)
  const counter2 = useCounter(Satisfaction, 2000, 0)
  const counter3 = useCounter(MissionSucces, 2000, 0)
  const counter4 = useCounter(EntrepriseAccompagne, 1500, 0)

  // Déclencher les compteurs quand les stats sont visibles
  useEffect(() => {
    if (isStatsInView) {
      counter1.startCounting()
      counter2.startCounting()
      counter3.startCounting()
      counter4.startCounting()
    }
  }, [isStatsInView])

  return (
    <>
      {/**titre des stat */}
      <div className="space-y-[50px] md:space-y-[100px] mb-[30px] md:mb-[50px] px-4">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-[20px]"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-orange-700/70 text-center">
            Des résultats concrets, une confiance qui grandit.
          </h1>
          <p className="text-[14px] md:text-[15px] text-center max-w-2xl">
            En peu de temps, Yemma-Solutions s'est imposée comme un acteur fiable du recrutement humain et ciblé.
          </p>
        </motion.div>

        {/**stat */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 justify-center text-center"
        >
          {/** statistique 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 md:space-y-5"
          >
            <motion.h1 
              className="text-orange-700/70 text-4xl md:text-5xl "
              initial={{ scale: 0.5 }}
              animate={isStatsInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              +{counter1.count.toLocaleString()}
            </motion.h1>
            <p className="font-bold text-sm md:text-base">Candidats préqualifiés</p>
            <p className="text-xs md:text-sm text-gray-600">dans notre vivier (junior à top management)</p>
          </motion.div>

          {/** statistique 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 md:space-y-5"
          >
            <motion.h1 
              className="text-orange-700/70 text-4xl md:text-5xl "
              initial={{ scale: 0.5 }}
              animate={isStatsInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {counter2.count}%
            </motion.h1>
            <p className="font-bold text-sm md:text-base">Taux de satisfaction</p>
            <p className="text-xs md:text-sm text-gray-600">de nos clients partenaires</p>
          </motion.div>

          {/** statistique 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 md:space-y-5"
          >
            <motion.h1 
              className="text-orange-700/70 text-4xl md:text-5xl "
              initial={{ scale: 0.5 }}
              animate={isStatsInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {counter3.count}%
            </motion.h1>
            <p className="font-bold text-sm md:text-base">Missions de recrutement réussies</p>
            <p className="text-xs md:text-sm text-gray-600">en moins de 30 jours</p>
          </motion.div>

          {/** statistique 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-3 md:space-y-5"
          >
            <motion.h1 
              className="text-orange-700/70 text-4xl md:text-5xl "
              initial={{ scale: 0.5 }}
              animate={isStatsInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              +{counter4.count}
            </motion.h1>
            <p className="font-bold text-sm md:text-base">Entreprises accompagnées</p>
            <p className="text-xs md:text-sm text-gray-600">tous secteurs confondus</p>
          </motion.div>
        </div>
      </div>
    </>
  )
}