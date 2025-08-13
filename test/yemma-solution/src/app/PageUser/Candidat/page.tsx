import Navbar from "@/app/components/Hom_composant/Navbarre";
import Hero from "@/app/components/Candidat/Hero";
import  FeatureCards from "@/app/components/Candidat/Avantage"
import Secteur from "@/app/components/Candidat/Secteur";
export default function Candidat(){

    return(
         <>
         <Navbar/>
         <Hero/>
         <FeatureCards/>
         <Secteur/>
         </>
    )
}