import { desc } from "framer-motion/client";

// donnee de la page Recruteur pour les slide vertical
export const textOptions = [
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
//donnee de la page home du composant pointfort
export const textOptions1 = [
  { 
    label: 'Base de profils vérifiés',
    image: '/image/image1.svg',
    description: 'tous nos candidats sont préqualifiés'
  },
  { 
    label: 'Chasse de talents sur mesure',
    image: '/image/image2.svg',
    description: 'pour vos besoin critiques ou internationaux'
  },
  { 
    label: 'Plateforme intuitive & fluide ',
    image: '/image/image3.svg',
    description: 'pensee pour les recruteurs comme pour mes candidats'
  },
  { 
    label: 'Diversité inclusion ',
    image: '/image/image4.svg',
    description: 'pensee pour les recruteurs comme pour mes candidats'
  },
  { 
    label: 'Approche humaine',
    image: '/image/image3.svg',
    description: 'chaque candidature est considérée avec soin'
  },
]
// donnee de la page candidat
export   const cards = [
    {
      img : "/image/profile.png",
      title : "Une fiche profil complète et personnalisée",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro pariatur minima nulla quos, officia deleniti recusandae magni consectetur, facilis est deserunt officiis tenetur quaerat magnam. Voluptates id perferendis nulla quia.",
      ordre:true
    },
    {
      img: "/image/image2.svg",
      title: "Une visibilité auprès d’entreprises locales et internationales",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro pariatur minima nulla quos, officia deleniti recusandae magni consectetur, facilis est deserunt officiis tenetur quaerat magnam. Voluptates id perferendis nulla quia.",
      ordre:false

    },
    {
      img: "/image/success.png",
      title: "Des opportunités adaptées à votre profil et vos aspirations",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro pariatur minima nulla quos, officia deleniti recusandae magni consectetur, facilis est deserunt officiis tenetur quaerat magnam. Voluptates id perferendis nulla quia.",
      ordre:true
    },
    {
      img: "/image/Accompagnement.svg",
      title: "Un accompagnement humain à chaque étape",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro pariatur minima nulla quos, officia deleniti recusandae magni consectetur, facilis est deserunt officiis tenetur quaerat magnam. Voluptates id perferendis nulla quia.",
      ordre:false
    },
  ];
// donnee du composant 
export const SecteurCards=[
  {
    icone:"",
    titre:"Cadres & Top Management",
    desc:"Vous êtes un décideur, un stratège, un leader en quête de nouveaux défis ? Notre plateforme vous connecte à des opportunités à la hauteur de vos ambitions, en toute confidentialité."

  },
   {
    icone:"",
    titre:"Talents expérimentés",
    desc:"Vous avez plusieurs années de pratique et une expertise solide ? Notre plateforme vous aide à valoriser votre parcours et à accéder à des postes alignés avec vos compétences."

  }, {
    icone:"",
    titre:"Agents de maîtrise & techniciens",
    desc:"Vous avez plusieurs années de pratique et une expertise solide ? Notre plateforme vous aide à valoriser votre parcours et à accéder à des postes alignés avec vos compétences."

  }, {
    icone:"",
    titre:"Talents à fort potentiel issus de zones rurales ou peu visibles",
    desc:"Vous avez les compétences, mais pas toujours la vitrine ? Notre plateforme vous donne la visibilité que vous méritez et vous connecte aux bonnes opportunités, où que vous soyez."

  }, {
    icone:"",
    titre:"Expatriés en recherche d’opportunités en Afrique",
    desc:"Vous souhaitez revenir ou vous installer en Afrique ? Notre plateforme vous connecte avec des entreprises locales et internationales à la recherche de profils comme le vôtre."

  }, {
    icone:"",
    titre:"Cadres & Top Management",
    desc:"Vous êtes un décideur, un stratège, un leader en quête de nouveaux défis ? Notre plateforme vous connecte à des opportunités à la hauteur de vos ambitions, en toute confidentialité."

  }, {
    icone:"",
    titre:"Talents issus de la diaspora",
    desc:"Vous êtes un décideur, un stratège, un leader en quête de nouveaux défis ? Notre plateforme vous connecte à des opportunités à la hauteur de vos ambitions, en toute confidentialité."

  }, {
    icone:"",
    titre:"Profils juniors ou reconvertis",
    desc:"Que vous débutiez votre carrière ou changiez de voie, notre plateforme vous aide à trouver des opportunités adaptées à votre niveau et à valoriser votre potentiel."
  },
  {
    icone:"",
    titre:"Jeunes diplômés / Stagiaires",
    desc:"Vous entrez sur le marché du travail ? Notre plateforme vous aide à décrocher votre première expérience en vous connectant à des entreprises prêtes à miser sur votre potentiel."
  }
]
