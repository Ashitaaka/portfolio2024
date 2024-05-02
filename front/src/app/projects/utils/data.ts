export type Project = {
  id: number;
  title: string;
  subtitle: string;
  images: Images;
  client: string;
  year: string;
  type: string;
  description: string;
  githubLink: string;
  demoLink: string;
  stack: string[];
  backgroundColor: string;
  color: string;
};

export type Images = {
  thumbnail: string;
  picture: string;
};

const projectDatas: Project[] = [
  {
    id: 1,
    title: "Speech",
    subtitle: "Social network",
    images: {
      thumbnail: "/thumbnails/speech_thumb.jpg",
      picture: "/pictures/speech_motion.mp4",
    },
    client: "School",
    year: "2023",
    type: "Training",
    description:
      "Premier projet d'école qui reprend le fonctionnement d'un réseau social. Le challenge était d'apprendre à séparer les composants en différents fichiers",
    demoLink: "https://ashitaaka.github.io/Speech-app/",
    githubLink: "https://github.com/Ashitaaka/Speech-app",
    stack: ["Javascript", "HTML 5", "CSS 3", "Git"],
    backgroundColor: "#4c4c72",
    color: "#beb6cc",
  },
  {
    id: 2,
    title: "To-Do-List",
    subtitle: "Organisation App",
    images: {
      thumbnail: "/thumbnails/todolist_thumb.jpg",
      picture: "/pictures/todolist_motion.mp4",
    },
    client: "Personnal",
    year: "2023",
    type: "Training",
    description:
      "Projet personnel de création d’une Todolist en javascript vanilla avec stockage des données en LocalStorage",
    demoLink: "https://ashitaaka.github.io/Todolist/",
    githubLink: "https://github.com/Ashitaaka/Todolist",
    stack: ["Javascript", "HTML 5", "CSS 3"],
    backgroundColor: "#C4C2B2",
    color: "#73715D",
  },
  {
    id: 3,
    title: "Emmaüs",
    subtitle: "Mobile estimation App",
    images: {
      thumbnail: "/thumbnails/emmaus_thumb.jpg",
      picture: "/pictures/emmaus_motion.mp4",
    },
    client: "School",
    year: "2023",
    type: "Hackathon",
    description:
      "Projet d'école codée en 24h lors d'un Hackathon pour le client 'Emmaüs'. La demande client était de développer un algorithme qui estime le prix de vente des téléphones issus de dons, en fonction de leurs caractéristiques techniques et des critères/prix qui nous ont été fournis.",
    demoLink: "",
    githubLink: "",
    stack: [
      "React JS",
      "Node JS",
      "Express JS",
      "API",
      "SQL",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Git",
    ],
    backgroundColor: "#F7F7FF",
    color: "#7171B3",
  },
  {
    id: 4,
    title: "Undefined",
    subtitle: "Travel App",
    images: {
      thumbnail: "/thumbnails/undefined_thumb.jpg",
      picture: "/pictures/undefined_motion.mp4",
    },
    client: "School",
    year: "2023",
    type: "Hackathon",
    description:
      "Projet d'école codée en 24h pour un Hackathon sur le thème des 'vacances'. L'application permet à l'utilisateur de choisir un pays, une ville ainsi que des dates et lui retourne la liste des évènements ayant lieu à cet endroit durant la période choisie",
    demoLink: "https://undefined-ashitaaka.vercel.app/",
    githubLink: "https://github.com/Ashitaaka/undefined",
    stack: ["React JS", "API", "Javascript", "HTML 5", "CSS 3", "Git"],
    backgroundColor: "#8d9596",
    color: "#eff7f5",
  },
  {
    id: 5,
    title: "Taakase",
    subtitle: "Font tester",
    images: {
      thumbnail: "/thumbnails/taakase_thumb.jpg",
      picture: "/pictures/taakase_motion.mp4",
    },
    client: "School",
    year: "2023",
    type: "Training",
    description:
      "Gestionnaire de typographies, pour répértorier, visualiser et tester des fonts. Parfois, lorsque l'on a trop de fonts sur son ordinateur, on en oublierait presque que certaines existent! Voici donc un outil très utile pour ne plus passer à côté de ses fonts favories",
    demoLink: "",
    githubLink: "https://github.com/WildCodeSchool/2023-02-js-btz-spotcast",
    stack: [
      "React JS",
      "Node JS",
      "Express JS",
      "API",
      "SQL",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Git",
    ],
    backgroundColor: "#F2F3F3",
    color: "#1D2022",
  },
  {
    id: 6,
    title: "Spotcast",
    subtitle: "Surf App",
    images: {
      thumbnail: "/thumbnails/spotcast_thumb.jpg",
      picture: "/pictures/spotcast_motion.mp4",
    },
    client: "School",
    year: "2023",
    type: "Training",
    description:
      "Application de prévisions des conditions de surf selon un spot choisi. Possibilité de personnaliser son dashboard et de déplacer les différents widgets.",
    demoLink: "",
    githubLink: "https://github.com/WildCodeSchool/2023-02-js-btz-spotcast",
    stack: [
      "React JS",
      "Node JS",
      "Express JS",
      "API",
      "SQL",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Git",
    ],
    backgroundColor: "#446963",
    color: "#afcfc4",
  },
];

export default projectDatas;
