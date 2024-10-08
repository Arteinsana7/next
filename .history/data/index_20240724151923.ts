// import { url } from "inspector";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Créativité, Réflexivité ",
      description: "et persévérance",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/computer-1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Flexible & Ouverte à des opportunités à l'international",
      description: "Je suis Polyglotte",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Mes Stacks",
      description: "Apprentissage continu ",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "Background.png",
    },
    {
      id: 4,
      title: "Riche d'expérience dans la communication & marketing",
      description: "Excellent relationnel",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Formée chez\nAda Tech School",
      description: "École inclusive & apprentissage par projets",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/image_Ada_W.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Contactez-moi",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "YouTube Clone",
      des: "Plateforme de streaming. Appel API avec React et RapidAPI",
      img: "/P3_YOUTUBE.png",
      iconLists: ["/re.svg","rapidapi-icon.svg", "material-ui-1.svg" ],
      link: "https://youtubeclone55.netlify.app",
    },
    {
      id: 2,
      title: "Squisse",
      des: "Application mobile pour Android: Modèle Vue Contrôleur",
      img: "/Urbanspots-App_3.png",
      iconLists: ["/kotlin.svg", "/spring.svg"],
      link: "https://github.com/adatechschool/projet-collectif-mobile-les-zencas",
    },
    {
      id: 3,
      title: "OnMeuble ",
      des: "Site e-commerce : Création d'une Rest API. Profil utilisateur, operations CRUD",
      img: "/OnMeuble.png",
      iconLists: ["/re.svg", "/expressjs-icon_w.png","/node-js.svg"],
      link: "https://github.com/adatechschool/onmeuble",
    },
    
    {
      id: 4,
      title: "D-reader",
      des: "Extention Navigateur pour Chrome. Modification de Police de caractères",
      img: "/D-read.png",
      iconLists: ["/lua.svg"],
      link: "https://github.com/Arteinsana7/Zappel-Philipp",
    },
    {
      id: 5,
      title: "The Daily Space.",
      des: "Appel API de la NASA. Une image de l'espace par jour",
      img: "/daily.png",
      iconLists: ["/file-type-js-official.svg","/html5.svg","/file-type-css.svg"],
      link: "https://quanghung0.github.io/The-Daily-Space/planetes.html",
    },
    {
      id: 6,
      title: "Zappel-Phillip",
      des: "Application mobile pour iOS : chronomètre, calendrier, notifications",
      img: "/ZAPP.png",
      iconLists: ["/swift.svg","/file-type-xcode.svg"],
      link: "https://github.com/Arteinsana7/Zappel-Philipp",
    },
  ];
  
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Chargée de Communication & Événementielle.",
      desc: "Planification événementielle, gestion de projet & mise en avant des produits via les réseaux sociaux et newsletters",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Responsable de ventes et marketing digitale",
      desc: "Analyse de données de vente, stratégies & campagnes en ligne",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Assistante à la réalisation de films",
      desc: "Logistique, organisation et planning d'un tournage. Régie, management et gestion d'imprévus",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Graphiste Freelance",
      desc: "Conception - Maquettes - Direction Artistique. Études du marché, tendances & positionnement",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
 

  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/Arteinsana7?tab=repositories"
    },
    {
      id: 2,
      img: "/link.svg",
      url:"https://www.linkedin.com/in/eliana-yepez/"
    },
  ];