/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Megaphone, Globe, Zap } from 'lucide-react';

const YemmaSolutionsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const carouselRef = useRef(null);

  const sectors = [
    {
      id: 1,
      icon: <GraduationCap className="w-12 h-12 text-orange-700/70" />,
      title: "Éducation &",
      subtitle: "Formation",
      description: "Solutions innovantes pour l'apprentissage et le développement des compétences",
      color: "from-orange-500 to-red-500",
      text_color:"orange-700/70"
    },
    {
      id: 2,
      icon: <Megaphone className="w-12 h-12 text-blue-500" />,
      title: "Médias,",
      subtitle: "Communication & Marketing",
      description: "Stratégies créatives pour amplifier votre message et toucher votre audience",
      color: "from-blue-500 to-purple-500",
      text_color:"black"

    },
    {
      id: 3,
      icon: <Globe className="w-12 h-12 text-green-700" />,
      title: "ONG &",
      subtitle: "Organisations internationales",
      description: "Accompagnement des missions humanitaires et des projets de développement",
      color: "from-green-500 to-teal-500",
     text_color:"green-700/70"

    },
    {
      id: 4,
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Énergies",
      subtitle: "renouvelables & Environnement",
      description: "Solutions durables pour un avenir énergétique responsable",
      color: "",
      text_color:"orange-700/70"
    },
    {
      id: 5,
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Énergies",
      subtitle: "renouvelables & Environnement",
      description: "Solutions durables pour un avenir énergétique responsable",
      color: "",
      text_color:"orange-500"
    }
    ,{
      id: 6,
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Énergies",
      subtitle: "renouvelables & Environnement",
      description: "Solutions durables pour un avenir énergétique responsable",
      color: "",
      text_color:"orange-500"
    }
  ];

  // Animation au chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer pour les animations au scroll
  
  // Auto-play carousel
  //tant que isAutoPlaying vrai  le carousel defile chaques 4s  
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sectors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, sectors.length]);

//fonction de navigation 

//pour aller  à la slide suivante 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sectors.length);
    setIsAutoPlaying(false);
  };
//revient à la slide precédente 
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sectors.length) % sectors.length);
    setIsAutoPlaying(false);
  };
// permet d'aller à une slide precise
  const goToSlide = (index:number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className=" bg-white relative overflow-hidden">
      {/* Particules d'animation de fond */}
      <div className="absolute inset-0 ">
        <div className="absolute top-10 left-10 w-2 h-2 bg-orange-300 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-5 h-2 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-orange-700 rounded-full animate-bounce animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header avec animations */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className={`text-4xl md:text-5xl font-bold text-orange-700/70 mb-8 transition-all duration-1200 delay-200 ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Tous les talents, pour tous les secteurs.
          </h1>
          <p className={`text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Chez <span className='text-green-950/75 font-bold  text-xl '> Yemma</span>-<span className="text-orange-700/70 font-bold ">Solutions</span>, nous croyons que chaque entreprise mérite des profils alignés avec sa vision quels que soient son domaine ou sa taille.
          </p>
          <p className={`text-md md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Nous accompagnons des entreprises publiques, privées, locales ou internationales dans les secteurs suivants :
          </p>
        </div>

        {/* Carousel Container avec animations */}
        <div 
          ref={carouselRef}
          className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-800 ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Main Carousel */}
          <div className="relative  rounded-lg ">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sectors.map((sector, index) => (
                <div key={sector.id} className="w-full  flex-shrink-0 px-4">
                  <div className={`bg-white rounded-lg p-8 md:p-12 border-2 border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-green-100 
                   
                  }`}>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className={`w-24 h-24 ${sector.color} flex items-center justify-center  transition-all duration-500 hover:scale-110 hover:rotate-3`}>
                          {sector.icon}  
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-2 transition-all duration-300 text-${sector.text_color} `}>
                          {sector.title}
                        </h3>
                        <h4 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4 transition-all duration-300">
                          {sector.subtitle} 
                        </h4>
                        <p className="text-gray-700 text-lg leading-relaxed transition-all duration-300">
                          {sector.description}  
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows avec animations */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:scale-110 hover:-translate-x-1"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300 hover:scale-110 hover:translate-x-1"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator avec animations */}
          <div className={`flex justify-center mt-8 space-x-3 transition-all duration-1000 delay-1000 ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {sectors.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide 
                    ? 'bg-orange-700/70 w-8 animate-pulse' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar avec animations */}
        {/**  <div className={`mt-6 bg-gray-200 rounded-full h-1 overflow-hidden transition-all duration-1000 delay-1200 ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 animate-pulse"
              style={{ width: `${((currentSlide + 1) / sectors.length) * 100}%` }}
            />
          </div> */} 
        </div>

        {/* Auto-play Toggle avec animation */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-1400 ${
          hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-500 hover:text-gray-700 transition-all duration-300 text-sm hover:scale-105"
          >
            {isAutoPlaying ? 'Play' : 'Auto-play'}
          </button>
        </div>
      </div>

      {/* Styles CSS pour les animations personnalisées */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-floatUp {
          animation: floatUp 1s ease-out;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Parallax effect for background elements */
        .parallax {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default YemmaSolutionsCarousel;