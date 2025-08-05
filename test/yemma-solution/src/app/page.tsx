
'use client'
import Navbar from "./components/Hom_composant/Navbarre";
import Hero from "./components/Hom_composant/Hero";
import YemmaSolutionsCarousel from "./components/Hom_composant/carousel";
import RecruitmentLanding from "./components/Hom_composant/profile_section";
import SectInscription from "./components/Hom_composant/section_inscription";
import TextImageSwitcher from "./components/Hom_composant/PointFort";
import Statistique from "./components/Hom_composant/Statistique";
import Footer from "./components/Hom_composant/Footer";
export default function Home() {
  return (
    <div className="">
         <Navbar/>
         <Hero/> 
         <YemmaSolutionsCarousel/>
         <RecruitmentLanding/>
         <TextImageSwitcher/>
          <Statistique/>
         <SectInscription/>
          <Footer/>
    </div>
  );
}
