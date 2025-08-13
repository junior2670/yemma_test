import Image from "next/image"
import { SecteurCards } from "@/app/data"
import { Buttons } from "../ui/Button"
export default function Secteur(){
   
    return(
         <>
            <div className="flex">
                <div>
                    <Image
                        src="/image/secteur.png"
                        alt= "illustration d'un homme et d'une femme noir communicant à traver un télephone"
                        width={100}
                        height={100}
                        className=""
                     
                        />
               </div>
                <div>
                    {SecteurCards.map((card, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-4 items-center text-center gap-6 
                            }`}
                        >
                            
                            <p>{card.titre}</p>
                            <p>{card.desc}</p>
                    </div>
                    ))}
                </div>

            </div>
            <div>
                <h1>Besoin d’aide ?</h1>
                <p>
                   Notre équipe est là pour vous accompagner. Contactez-nous directement par <br />
                   WhatsApp, email ou via le formulaire de contact. <br/>
                   Nous croyons en un accompagnement humain, bienveillant et sur mesure.
                    </p>
                <Buttons className=" " label="Rejoignez Nous"/>
            </div>
         </>
    )
}