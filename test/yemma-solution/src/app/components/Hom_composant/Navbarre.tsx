'use client'

import Image from "next/image";
import { useState } from "react";
export default function Navbar(){
 
const [menuOpen,setMenuOpen]=useState(false)

    return(
//barre de navigation
    <>
        <div className=" shadow-md z-50 fixed top-0 right-0 left-0 bg-white ">
          <div className=" flex justify-between h-10 h-[79px] mx-[50px] items-center max-md:h-[50px] max-md:mx-[20px]"> 
             {/*LOGO*/}
                <div>
                    <a href="">
                        {/* loop*/}
                        <div>
                          
                        </div>
                       <Image 
                        src="/image/yemma_logo.png" 
                        alt="logo" 
                        width={200} 
                        height={200}  className=" max-md:w-[150px] z-0"/>
                       
                    </a>
                </div>
            {/*liens*/}
                <div className="flex">
                     <Image 
                            src="/icone/menu.png" 
                            alt="burger" 
                            width={30} 
                            height={15}
                            onClick={() => setMenuOpen(true)} 
                            className="hidden max-md:block hover:bg-slate-100 cursor-pointer p-[2px] rounded-md"
                            />
                 
                    <div className="flex space-x-4 max-md:hidden">
                            
                        <a href="" className="flex  items-center border border-slate-100 p-[7px] px-[25px] rounded-3xl  space-x-3 hover:bg-gray-100 ">
                            <p className="text-2xl">+</p>
                            <p className="font-bold">Candidat</p>
                        </a>
                        <a href="" className="flex items-center p-[7px]  px-[20px] rounded-3xl font-bold bg-orange-700 opacity-70 text-white space-x-2 hover:bg-orange-700/80"> 
                            <Image 
                                src="/icone/sortie.png" 
                                alt="sortie" 
                                width={25} 
                                height={25} 
                                />
                            <p className="">Recruteur</p>
                        </a>
                          
                    </div>
                </div>
           </div>
         

        </div>
    
    {/* BACKDROP */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

     {/* MENU CACHÉ */}
      <div
        className={`fixed top-0 left-0 w-[319px] h-screen bg-white shadow-xl z-50 transition-all duration-500 ${
          menuOpen ? "ml-0" : "ml-[-350px]"
        }`}
      >
            <div className="flex items-center space-x-[100px]">
                <div >
                    <a href="">
                        <Image 
                            src="/image/yemma_logo.png" 
                            alt="logo" 
                            width={180} 
                            height={200}  className=" max-md:w-[150px]"/>
                    </a>
                 </div>
                 <div className="cursor-pointer">
                    <Image 
                        src="/icone/exit.png" 
                        alt="logo" 
                        width={35} 
                        height={35}  
                        onClick={() => setMenuOpen(false)}
                        />
                </div>
            </div>
            <div className="flex justify-center w-full">
                <a href="" className="flex space-x-[15px] justify-center items-center border w-[295px] bg-orange-800 opacity-72 text-white rounded-[10px] p-[3px] hover:bg-orange-700">
                    <p className="text-[25px]">+</p>
                    <p className="font-bold " >Candidat</p>
                </a>
            </div>
            <div className="flex justify-center w-full ">
                <a href="" className="flex space-x-[15px] justify-center items-center border w-[295px] opacity-72 font-bold rounded-[10px] p-[8px] border border-gray-400 mt-[10px] hover:bg-gray-200">
                    <Image 
                        src="/icone/exitb.png" 
                        alt="sortie" 
                        width={25} 
                        height={25} 
                        />
                    <p>Recruteur</p>
                </a>
           </div>
        </div>
    </>    
    );
}