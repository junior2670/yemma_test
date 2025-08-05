'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Buttons } from '../ui/Button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
const textOptions = [
  { 
    label: 'Base de profils vérifiés',
    image: '/image/image1.svg',
    color:'',
    description: 'Gain de temps dans le processus de recrutement',
    sous_desc:"Recevez directement des profils ciblés et validés. Moins de tri, moins d'entretiens inutiles, plus de résultats."
  },
  { 
          
    label: 'Chasse de talents  sur mesure',
    image: '/image/image2.svg',
    description: "Réduction du taux d'échec à l'embauche",
    sous_desc:"Nos profils sont préqualifiés et évalués en amont, ce qui limite les erreurs de casting et assure une meilleure intégration. Recrutez juste, du premier coup."
  },
  { 
    label: 'Plateforme intuitive & fluide ',
    image: '/image/image3.svg',
    color:'',
    description: 'Tarification adaptée à votre structurets',
    sous_desc:"TPE, PME ou grand groupe ? Nos offres s'ajustent à votre taille et à vos besoins. Payez juste, recrutez mieux."
  },
  { 
    label: 'Diversité inclusion ',
    image: '/image/image4.svg',
    color:'',
    description: 'Profils inclusifs, compétents et alignés à vos valeurs',
    sous_desc:"Nous valorisons la diversité, sans compromis sur les compétences. Chaque talent proposé partage vos exigences et votre vision."
  },
  { 
    label: 'Approche humaine',
    image: '/image/image3.svg',
    color:'',
    description: 'Accompagnement humain, réactif et confidentiel',
    sous_desc:"Un interlocuteur dédié, des réponses rapides et un traitement discret de vos besoins. On vous suit de près, sans en faire trop"
  },
]



export default function TextImageSwitcherA() {
  /** hooks pour le style et l'apparution d'image */
  const [currentImage, setCurrentImage] = useState(textOptions[0].image);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [sous_Desc, setSous_Desc]= useState(textOptions[0].sous_desc);
  const [currentSlide, setCurrentSlide] = useState(0);
  

  // Refs pour les animations au scroll
  const ref = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);
  const Sous_descRef= useRef(null);
  const TextavFooterRef=useRef(null);
  const TextavFooterRef1=useRef(null);

  //hooks pour la gestion des apparition dans la vue 
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-50px" });
  const isButtonsInView = useInView(buttonsRef, { once: true, margin: "-50px" });
  const isSous_descView= useInView(Sous_descRef,{once:true, margin:"-50px"});
  const isText_View= useInView(TextavFooterRef,{once:true, margin:"-70px"});
  type Service = {
  label: string;
  image: string;
  description: string;
  sous_desc:string;
};
  /** permet au hover de s'afficher sur la première info */
  useEffect(() => {
    setActiveIndex(0);
  }, [])

  // Effet pour la rotation automatique
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      //fonction de mise à jour d"etat du prev au next pour faire la rotation animé
      setActiveIndex(prevIndex => {
        const nextIndex = prevIndex === null ? 1 : (prevIndex + 1) % textOptions.length;
        setCurrentImage(textOptions[nextIndex].image);
        setSous_Desc(textOptions[nextIndex].sous_desc);
        return nextIndex;
      });
    }, 7000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleItemClick = (item:Service, index:number) => {
    setCurrentImage(item.image);
    setActiveIndex(index);
    setSous_Desc(item.sous_desc);
    setIsPaused(true);
    
    // Reprendre la rotation automatique après 6 secondes
    setTimeout(() => {
      setIsPaused(false);
    }, 7000);
  
  };

  return (
    <div ref={ref} className='mb-[50px] relative'>
      {/** titre */}
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='mt-[30px] md:mt-[50px] mb-[30px] md:mb-[50px] bg-slate-50/50 py-25 relative'
      >
          {/**bulle animé */}
        <div className="absolute inset-0">
                    <div className="absolute top-15 left-15 w-15 h-15 max-sm:w-5 max-sm:h-5 bg-orange-300 max-sm:left-1 rounded-full animate-bounce"></div>
                    <div className="absolute top-25 right-20 w-15 h-15 bg-green-300 max-sm:w-5 max-sm:h-5  max-sm:right-2 rounded-full animate-ping"></div>
                  </div>
          <div className='flex flex-col items-center space-y-[20px] md:space-y-[30px] px-4'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-700/70 mb-8 transition-all duration-1200 delay-200 text-center leading-tight'>
              Pourquoi choisir{' '}
               <span className=''>Yemma</span>-<span className=''>Solutions</span>
               ?
            </h1>
            <p className='text-sm sm:text-base md:text-xl text-center font-bold max-w-4xl'>Un  partenaire, pas juste un prestataire.</p>
          </div>
      </motion.div>

      {/** info pour le format desktop et tablette  */}
      <div className="mt-[20px] text-center space-y-4 hidden lg:block px-4 md:px-6 lg:px-8">
          {/* Layout tablette en colonne, desktop en ligne */}
          <div className='flex flex-col  lg:flex-row justify-center items-center lg:items-start space-y-8 md:space-y-12 lg:space-y-0 lg:space-x-16 xl:space-x-[150px]'>
              
              {/* Buttons */}
              <motion.div  
                ref={buttonsRef}
                initial={{ opacity: 0, x: 50 }}
                animate={isButtonsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col justify-center gap-3 md:gap-4 lg:gap-6 w-full max-w-2xl md:max-w-3xl lg:max-w-none lg:w-auto order-2 lg:order-1"
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
                          className={`px-4 md:px-6 lg:px-4   py-3 md:py-4 lg:py-2 space-y-[12px] md:space-y-[16px] lg:space-y-[20px] cursor-pointer 
                            flex flex-col items-start transition-all duration-500 hover:bg-slate-50/50 
                            hover:border-l-[2px] shadow-lg hover:bg-gray-100/50 border-orange-700/70 border-t-5 text-left 
                              rounded ${
                              activeIndex === index 
                              ? 'border shadow-lg hover:shadow-lg transform translate-x-2 scale-[1.02] md:scale-105 lg:scale-105' 
                              : 'hover:shadow-md'
                          }`}
                          >
                          <motion.p 
                              className={ `font-bold text-center text-base md:text-lg lg:text-lg text-orange-700/70 transition-colors duration-300 ${
                              activeIndex === index ? 'text-orange-700' : 'hover:text-gray-700'
                              }` } 
                              animate={activeIndex === index ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                              transition= {{ duration: 0.3 }}
                          >
                              {item.label}
                          </motion.p>
                          <motion.p 
                              className={`text-sm md:text-base lg:text-base text-center transition-all duration-300 leading-relaxed ${
                              activeIndex === index ? 'text-black-700' : 'text-black hover:text-gray-700'
                              }`}
                              animate={activeIndex === index ? { opacity: [0.8, 1] } : { opacity: 0.8 }}
                              transition={{ duration: 0.3 }}
                          >
                              {item.description}
                          </motion.p>
            </motion.button>
            ))}
           </motion.div>
                      
                       {/*div de l'Image */}
                <motion.div
                    ref={imageRef}
                    initial={{ opacity: 0, x: -50, y: -50 }}
                    animate={isImageInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center justify-center w-full md:w-full lg:w-[600px] flex-shrink-0 order-1 lg:order-2"
                  >
                    {/* Image */}
                    <motion.img
                      key={currentImage}
                      src={currentImage}
                      initial={{ opacity: 0.5, x: -88, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      alt="Image animée"
                      className="w-full md:w-[500px] lg:w-[500px] h-auto max-w-full"
                    />
                    
                    {/* Description ou sous description */}
                    <motion.p
                      key= {sous_Desc}
                      initial = {{ opacity: 0, y: 80, scale: 0.95 }}
                      animate = {isSous_descView ? { opacity: 0, x: -50 } : { opacity: 1, y: 0, scale: 1 }}
                      transition = {{ duration: 1, ease: "easeOut" }}
                      className = "border w-full md:w-[500px] lg:w-[500px] h-auto bg-orange-100/10 font-bold rounded-r-lg  rounded-l-lg border-l-orange-500 border-l-7 p-4 md:p-5 lg:p-4 text-center mt-6 md:mt-8 lg:mt-10 text-sm md:text-base lg:text-base leading-relaxed"
                    >
                      {sous_Desc}
                    </motion.p>
              </motion.div>
             </div>

                    {/** section avant le footer */}
                <motion.div
                 ref={TextavFooterRef}    
                   initial={{ opacity:0 , x:-80 , y:-50}}
                    animate={ isText_View ? {  opacity:1, x:0 ,y:0 }:{ opacity:1 , y:0, scale:0.7   }}
                    transition={{duration: 1, ease:'easeOut'}}
                    className='space-y-[20px] md:space-y-[25px] lg:space-y-[35px] mt-[60px] md:mt-[80px] lg:mt-[100px] px-4 md:px-6 lg:px-8 text-center'
                    >
                      <p className='font-bold text-lg md:text-xl lg:text-3xl text-green-700/70'>Prêt à recruter autrement ?</p>
                      <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-[275] leading-relaxed max-w-3xl md:max-w-4xl lg:max-w-4xl mx-auto'>
                        Accédez dès maintenant à notre vivier de talents ou confiez-nous 
                        votre besoin en recrutement.
                      </h1>
                      <div className="pt-2 md:pt-4">
                        <Link href="#">
                           <Buttons label="Essayez maintenant" className="p-3 px-4 cursor-pointer text-sm md:text-base"/>
                        </Link>
                      </div>
                  </motion.div> 
        </div>
        
        {/**  info pour le format mobile  */}
        <div className='block lg:hidden px-4 relative'>
            {/* Container du slider */}
            <div className='overflow-hidden rounded-lg'>
              <div 
                className='flex transition-transform duration-700 ease-in-out'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {textOptions.map((item, index) => (
                  <div key={index} className='w-full flex-shrink-0 px-2'>
                    <div className='flex flex-col items-center'>
                      <div className='w-full flex justify-center mb-4'>
                        <motion.img
                          src={item.image}
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1 }}
                          alt="Image animée"
                          className="w-full max-w-xs sm:max-w-sm h-auto rounded-lg "
                        />
                      </div>
                      <div className='space-y-3 sm:space-y-4 flex flex-col items-center text-center w-full max-w-md'>
                        <p className='text-orange-700/70 font-bold text-base sm:text-lg'>{item.label}</p>
                        <p className='text-sm sm:text-base leading-relaxed px-2'>{item.description}</p>
                        <p className='text-xs sm:text-sm leading-relaxed px-2 text-gray-600 bg-orange-50/50 p-3 rounded border-l-4 border-orange-300'>
                          {item.sous_desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={() => setCurrentSlide(prev => prev > 0 ? prev - 1 : textOptions.length - 1)}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 animate-bounce cursor-pointer'
              disabled={textOptions.length <= 1}
            >
              <ChevronLeft className='w-5 h-5 text-orange-700' />
            </button>

            <button
              onClick={() => setCurrentSlide(prev => prev < textOptions.length - 1 ? prev + 1 : 0)}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 animate-bounce cursor-pointer'
              disabled={textOptions.length <= 1}
            >
              <ChevronRight className='w-5 h-5 text-orange-700' />
            </button>

            {/* Indicateurs de pagination */}
            <div className='flex justify-center mt-4 space-x-2'>
              {textOptions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    index === currentSlide 
                      ? 'bg-orange-700/70 w-6' 
                      : 'bg-gray-300/70 hover:bg-orange-500'
                  }`}
                />
              ))}
            </div>
          </div>
{/** Section avant le footer  */}
           <motion.div
                 ref={TextavFooterRef1}    
                   initial={{ opacity:0 , x:-80 , y:-50}}
                    animate={ isText_View ? {  opacity:1, x:0 ,y:0 }:{ opacity:1 ,x:0, y:0, scale:0.7   }}
                    transition={{duration: 1, ease:'easeOut'}}
                    className='space-y-[20px] lg:hidden block md:space-y-[25px] lg:space-y-[35px] mt-[60px] md:mt-[80px] lg:mt-[100px] px-4 md:px-6 lg:px-8 text-center'
                    >
                <p className='font-bold text-lg md:text-xl lg:text-2xl text-green-700/70'>Prêt à recruter autrement ?</p>
                <h1 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-[275] leading-relaxed max-w-3xl md:max-w-4xl lg:max-w-4xl mx-auto'>
                  Accédez dès maintenant à notre vivier de talents ou confiez-nous 
                  votre besoin en recrutement.
                </h1>
                <div className="pt-2 md:pt-4">
                  <Link href="#">
                      <Buttons label="Essayez maintenant" className="p-3 px-4 cursor-pointer text-sm md:text-base"/>
                  </Link>
                </div>
        </motion.div> 
    </div>
  )
}