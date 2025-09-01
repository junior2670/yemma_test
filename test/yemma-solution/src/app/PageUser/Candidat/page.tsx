import Navbar from "@/app/components/Hom_composant/Navbarre";
import Hero from "@/app/components/Candidat/Hero";
import  FeatureCards from "@/app/components/Candidat/Avantage"
import Secteur from "@/app/components/Candidat/Secteur";
import Footer from "@/app/components/Hom_composant/Footer";
export default function Candidat(){

    return(
         <>
         <div className="bg-white">
            <Navbar/>
            <Hero/>
            <FeatureCards/>
            <Secteur/>
            <Footer/>
         </div>
         </>
    )
}