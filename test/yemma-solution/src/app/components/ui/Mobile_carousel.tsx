'use client'
import { useState } from "react";
import { textOptions } from "@/app/data";
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Mobile_carousel(){


      const [currentSlide, setCurrentSlide] = useState(0);
    
    return(


         <>
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
         </>

    )
}