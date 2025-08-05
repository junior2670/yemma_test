import Navbar from "@/app/components/Hom_composant/Navbarre"
import Hero from "@/app/components/Recruteur/Hero"
import Footer from "@/app/components/Hom_composant/Footer"
import TextImageSwitcher from "@/app/components/Recruteur/NosServices"
import TextImageSwitcherA from "@/app/components/Recruteur/Avantage"
export default function RecruteurPage(){
    

    return (
        <>
           <Navbar/>
            <Hero/>
            <TextImageSwitcher/>
            <TextImageSwitcherA/>
            <Footer/>
        </>
    )
}