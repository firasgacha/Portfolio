// Technologies images
import reactImg from "../assets/technologies/react.png";
import tsImg from "../assets/technologies/ts.png";
import dockerImg from "../assets/technologies/docker.png";
import jsImg from "../assets/technologies/js.png";
import laravelImg from "../assets/technologies/laravel.png";
import mongoImg from "../assets/technologies/mongo.png";
import ngnixImg from "../assets/technologies/ngnix.png";
import twImg from "../assets/technologies/tw.png";
import graphqlImg from "../assets/technologies/graphql.png";
import nodeImg from "../assets/technologies/node.png";
import vueImg from "../assets/technologies/vue.png";
import postgresImg from "../assets/technologies/postgres.png";
import redisImg from "../assets/technologies/redis.png";
import gitImg from "../assets/technologies/git.png";
import linuxImg from "../assets/technologies/linux.png";
import apiImg from "../assets/technologies/api.png";
import expressImg from "../assets/technologies/express.png";
import htmlImg from "../assets/technologies/html.png";
import cssImg from "../assets/technologies/css.png";
import githubImg from "../assets/technologies/github.png";
import cicdImg from "../assets/technologies/cicd.png";
import sentryImg from "../assets/technologies/sentry.png";
import kargoImg from "../assets/technologies/kargo.png";
import argoImg from "../assets/technologies/argo.png";
import lensImg from "../assets/technologies/lens.png";
import jenkinsImg from "../assets/technologies/jenkins.png";
import gitlabImg from "../assets/technologies/gitlab.png";
import elasticsearchImg from "../assets/technologies/elasticsearch.png";

// Hire Me images
import workaholicImg from "../assets/hireMe/workaholic.png";
import communicativeImg from "../assets/hireMe/communicative.png";
import collaborativeImg from "../assets/hireMe/collaborative.png";
import smImg from "../assets/hireMe/sm.png";

// Work Experience images
import blocksiImg from "../assets/work/blocksi.png";
import happisoImg from "../assets/work/happiso.png";
import babackImg from "../assets/work/baback.png";
import espritImg from "../assets/work/esprit.png";
import devNullImg from "../assets/work/devNull.png";
import unfraundedImg from "../assets/work/unfrauded.png";
import coroplasteImg from "../assets/work/coroplaste.png";
import tunisairImg from "../assets/work/tunisair.png";

export const github = "https://github.com/firasgacha/";

export const technologies = [
  {
    name: "React",
    image: reactImg,
  },
  {
    name: "TypeScript",
    image: tsImg,
  },
  {
    name: "Docker",
    image: dockerImg,
  },
  {
    name: "JavaScript",
    image: jsImg,
  },
  {
    name: "Laravel",
    image: laravelImg,
  },
  {
    name: "MongoDB",
    image: mongoImg,
  },
  {
    name: "Nginx",
    image: ngnixImg,
  },
  {
    name: "Tailwind CSS",
    image: twImg,
  },
  {
    name: "GraphQL",
    image: graphqlImg,
  },
  {
    name: "Node.js",
    image: nodeImg,
  },
  {
    name: "Vue.js",
    image: vueImg,
  },
  {
    name: "PostgreSQL",
    image: postgresImg,
  },
  {
    name: "Redis",
    image: redisImg,
  },
  {
    name: "Git",
    image: gitImg,
  },
  {
    name: "Linux",
    image: linuxImg,
  },
  {
    name: "API",
    image: apiImg,
  },
  {
    name: "Express.js",
    image: expressImg,
  },
  {
    name: "HTML",
    image: htmlImg,
  },
  {
    name: "CSS",
    image: cssImg,
  },
  {
    name: "GitHub",
    image: githubImg,
  },
  {
    name: "CI/CD",
    image: cicdImg,
  },
  {
    name: "Sentry",
    image: sentryImg,
  },
  {
    name: "Kargo",
    image: kargoImg,
  },
  {
    name: "Argo",
    image: argoImg,
  },
  {
    name: "Lens",
    image: lensImg,
  },
  {
    name: "Jenkins",
    image: jenkinsImg,
  },
  {
    name: "GitLab",
    image: gitlabImg,
  },
  {
    name: "Elasticsearch",
    image: elasticsearchImg,
  },
];

export const hireReasons = [
  {
    title: "Workaholic",
    image: workaholicImg,
    description: "Deadlines don't chase me, I stay ahead of them.",
  },
  {
    title: "Communicative",
    image: communicativeImg,
    description: "I balance speaking and listening for clear communication.",
  },
  {
    title: "Collaborative",
    image: collaborativeImg,
    description:
      "Collaboration is the key to success, teamwork turns vision into reality.",
  },
  {
    title: "Self Motivated",
    image: smImg,
    description: "I take proactive steps to accomplish my goals.",
  },
];

export const projectsList = [
  {
    id: "nitrofx",
    stack: [
      "React 19",
      "React Router 7",
      "Vite 8",
      "@livekit/components-react",
      "Node.js 26",
      "Express 5",
      "TypeScript",
      "MongoDB",
      "LiveKit SFU",
      "Docker Compose",
      "JWT",
      "Zod",
    ],
  },
  {
    id: "blocksiAttendance",
    stack: [
      "React",
      "Vite",
      "Node.js 22",
      "Express",
      "Slack Bolt",
      "MongoDB",
      "Slack OAuth 2.0",
      "WebSockets",
      "Docker",
    ],
  },
  {
    id: "civiqueprep",
    stack: [
      "React 19",
      "TypeScript",
      "Vite 7",
      "i18next",
      "CSS Custom Properties",
      "EmailJS",
      "Web App Manifest",
      "Service Worker",
    ],
  },
  {
    id: "histocar",
    stack: [
      "Flutter",
      "Dart",
      "JSON storage",
      "Android SAF",
      "Local Notifications",
      "Google Drive",
      "Dropbox",
    ],
  },
] as const;

export const experiences = [
  {
    id: "blocksi",
    company: "BLOCKSI Inc",
    image: blocksiImg,
    role: "fullStackDeveloper",
    type: "cdi",
    dates: "11/2024 - Present",
    location: "Valbonne, Provence-Alpes-Côte d'Azur, France",
    responsibilities: {
      fr: [
        "Pilotage du cycle complet de développement de fonctionnalités centrées sur l'expérience utilisateur, garantissant des interfaces intuitives et ergonomiques adaptées aux besoins du secteur éducatif.",
        "Intégration et optimisation de modèles de langage (LLM) en étroite collaboration avec les équipes Data Science pour enrichir et transformer l'expérience d'apprentissage.",
        "Optimisation de l'infrastructure applicative : gestion de conteneurs Kubernetes, configuration Redis, et amélioration des performances en synergie avec les équipes DevOps.",
        "Mise en œuvre de pipelines CI/CD via Jenkins et supervision proactive des configurations cluster avec Lens pour assurer la fiabilité des déploiements.",
        "Développement d'une extension Google Chrome sur mesure répondant aux besoins spécifiques des enseignants et facilitant leur workflow quotidien.",
        "Maîtrise du développement d'extensions Chrome avec un environnement React + TypeScript et un bundler Vite.",
        "Déploiement, maintenance et configuration de l'interconnexion entre systèmes NVIDIA DGX-SPARK pour des environnements de calcul haute performance.",
        "Expertise en collaboration interdisciplinaire, coordonnant les efforts entre équipes techniques pour livrer des solutions robustes, scalables et alignées sur les objectifs métier.",
      ],
      en: [
        "Led the complete development cycle of user experience-focused features, ensuring intuitive and ergonomic interfaces tailored to the education sector's needs.",
        "Integrated and optimized Large Language Models (LLM) in close collaboration with Data Science teams to enhance and transform the learning experience.",
        "Optimized application infrastructure: Kubernetes container management, Redis configuration, and performance improvements in synergy with DevOps teams.",
        "Implemented CI/CD pipelines via Jenkins and proactive cluster configuration monitoring with Lens to ensure deployment reliability.",
        "Developed a custom Google Chrome extension tailored to teachers' specific needs, facilitating their daily workflow.",
        "Mastered Chrome extension development with a React + TypeScript environment and Vite bundler.",
        "Deployment, maintenance, and configuration of interconnection between NVIDIA DGX-SPARK systems for high-performance computing environments.",
        "Expertise in interdisciplinary collaboration, coordinating efforts between technical teams to deliver robust, scalable solutions aligned with business objectives.",
      ],
    },
    technologies: ["React", "TypeScript", "Vite", "Kubernetes", "Redis", "Jenkins", "LLM", "Chrome Extension", "NVIDIA DGX-SPARK"],
  },
  {
    id: "happiso",
    company: "HAPPISO",
    image: happisoImg,
    role: "fullStackDeveloper",
    type: "cdi",
    dates: "07/2023 - 11/2024",
    location: "Metz, Grand Est, France",
    responsibilities: {
      fr: [
        "Concevoir et personnaliser des modèles et des composants répondant précisément aux exigences spécifiques de nos clients, afin de garantir une adéquation parfaite entre leurs besoins et nos solutions.",
        "Effectuer une analyse minutieuse du code pour identifier les points d'amélioration et offrir des recommandations visant à élever la qualité du code à des niveaux optimaux.",
        "Contribuer activement à l'optimisation et à la gestion rigoureuse de la comptabilité dans toutes ses dimensions, en veillant à ce que chaque aspect soit parfaitement aligné sur les normes les plus élevées.",
        "Établir des connexions fluides avec des interfaces de programmation d'applications (API) externes, telles que Chorus Pro, afin de garantir une intégration transparente et efficace de nos solutions dans l'écosystème technologique de nos clients.",
        "Innover en proposant des solutions avant-gardistes pour surmonter les défis techniques les plus complexes, tout en assurant une communication claire et concise des résultats obtenus aux différentes parties prenantes impliquées dans le processus.",
      ],
      en: [
        "Designed and customized models and components precisely meeting our clients' specific requirements, ensuring perfect alignment between their needs and our solutions.",
        "Conducted thorough code analysis to identify improvement areas and offered recommendations to elevate code quality to optimal levels.",
        "Actively contributed to optimization and rigorous accounting management in all its dimensions, ensuring every aspect is perfectly aligned with the highest standards.",
        "Established seamless connections with external API interfaces, such as Chorus Pro, to ensure transparent and efficient integration of our solutions into our clients' technological ecosystem.",
        "Innovated by proposing cutting-edge solutions to overcome the most complex technical challenges while ensuring clear and concise communication of results to various stakeholders involved in the process.",
      ],
    },
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Redis"],
  },
  {
    id: "baback",
    company: "Baback",
    image: babackImg,
    role: "fullStackDeveloper",
    type: "internship",
    dates: "01/2023 - 07/2023",
    location: "Strasbourg, Grand Est, France",
    responsibilities: {
      fr: [
        "Mise en œuvre de la dernière version de l'API Shopify pour une intégration fluide.",
        "Réalisation d'une intégration complète avec Zendesk et l'implémentation de Webhooks pour une communication transparente.",
        "Intégration réussie de services de transport majeurs tels que DHL, Mondial-Relay, et UPS.",
        "Création d'une interface de gestion des facturations, simplifiant ainsi le processus pour nos clients.",
        "Conception et développement de composants web sur mesure pour répondre aux besoins spécifiques du projet.",
        "Engagement constant envers l'optimisation de la satisfaction client à travers des améliorations continues.",
        "Gestion efficace des bases de données pour stocker les informations essentielles utilisées par la solution de gestion de retour Baback.",
        "Responsabilité de la gestion des mises à jour de contenu et des packages logiciels pour assurer une expérience utilisateur optimale.",
        "Assurer la compatibilité multiplateforme et une prise en charge impeccable des navigateurs sur divers dispositifs utilisés par nos clients.",
        "Réalisation de tests rigoureux et d'analyses de qualité pour garantir le bon fonctionnement des sites web et des applications.",
      ],
      en: [
        "Implemented the latest version of the Shopify API for seamless integration.",
        "Completed full integration with Zendesk and implemented Webhooks for transparent communication.",
        "Successfully integrated major transport services such as DHL, Mondial-Relay, and UPS.",
        "Created a billing management interface, simplifying the process for our clients.",
        "Designed and developed custom web components to meet the project's specific needs.",
        "Committed to optimizing customer satisfaction through continuous improvements.",
        "Efficiently managed databases to store essential information used by the Baback return management solution.",
        "Responsible for content updates and software packages to ensure optimal user experience.",
        "Ensured cross-platform compatibility and impeccable browser support across various devices used by our clients.",
        "Conducted rigorous testing and quality analysis to guarantee proper functioning of websites and applications.",
      ],
    },
    technologies: ["Shopify API", "Zendesk", "Webhooks", "DHL", "UPS", "PostgreSQL", "MySQL"],
  },
  {
    id: "esprit",
    company: "ESPRIT",
    image: espritImg,
    role: "fullStackDeveloper",
    type: "internship",
    dates: "07/2022 - 09/2022",
    location: "Ariana Governorate, Tunisia",
    responsibilities: {
      fr: [
        "Concevoir et développer une interface utilisateur conviviale pour la plateforme médicale en ligne.",
        "Concevoir la structure d'un système de gestion de dossiers médicaux.",
        "Élaboration et création de composants web.",
      ],
      en: [
        "Designed and developed a user-friendly interface for the online medical platform.",
        "Designed the structure of a medical records management system.",
        "Developed and created web components.",
      ],
    },
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "oby-digital",
    company: "OBY Digital",
    image: undefined,
    role: "webDeveloper",
    type: "freelance",
    dates: "02/2022 - 05/2022",
    location: "Paris, France",
    responsibilities: {
      fr: [
        "Intégration d'un modèle back-office.",
        "Implémentation de l'interface administrateur.",
      ],
      en: [
        "Integrated a back-office model.",
        "Implemented the administrator interface.",
      ],
    },
    technologies: ["React", "Node.js"],
  },
  {
    id: "dev-null",
    company: "Dev Null Productions",
    image: devNullImg,
    role: "fullStackDeveloper",
    type: "internship",
    dates: "06/2021 - 09/2021",
    location: "New York, États-Unis (Remote)",
    responsibilities: {
      fr: [
        "Implémenter des tests JavaScript.",
        "Gérer la maintenance de la plateforme en assurant sa continuité opérationnelle.",
        "Implémenter de nouvelles fonctionnalités orientées utilisateurs afin d'améliorer l'expérience globale sur la plateforme.",
      ],
      en: [
        "Implemented JavaScript tests.",
        "Managed platform maintenance ensuring operational continuity.",
        "Implemented new user-oriented features to improve the overall experience on the platform.",
      ],
    },
    technologies: ["JavaScript", "React", "Node.js"],
  },
  {
    id: "unfraunded",
    company: "UnFrauded",
    image: unfraundedImg,
    role: "webDeveloper",
    type: "internship",
    dates: "02/2020 - 06/2020",
    location: "Gouvernorat de Tunis, Tunisia",
    responsibilities: {
      fr: [
        "Implémenter une interface web utilisateur.",
        "Extraire les données de différents sites web.",
      ],
      en: [
        "Implemented a user web interface.",
        "Extracted data from various websites.",
      ],
    },
    technologies: ["Python", "Beautiful Soup", "Flask", "PostgreSQL"],
  },
  {
    id: "coroplast",
    company: "Coroplast Fritz Müller GmbH & Co. KG",
    image: coroplasteImg,
    role: "itTechnician",
    type: "internship",
    dates: "07/2019 - 07/2019",
    location: "Gouvernorat de Nabeul, Tunisia",
    responsibilities: {
      fr: [
        "Préparer les processus des différents départements de l'entreprise.",
        "Logiciels utilisés : Microsoft Visio, CAO, SAP.",
      ],
      en: [
        "Prepared processes for various company departments.",
        "Software used: Microsoft Visio, CAO, SAP.",
      ],
    },
    technologies: ["Microsoft Visio", "CAO", "SAP"],
  },
  {
    id: "tunisair",
    company: "TUNISAIR",
    image: tunisairImg,
    role: "itTechnician",
    type: "internship",
    dates: "07/2018 - 07/2018",
    location: "Gouvernorat de Tunis, Tunisia",
    responsibilities: {
      fr: [
        "Gestion du serveur.",
        "Maintenance informatique.",
        "Installer des systèmes d'exploitation et des logiciels de sécurité (Kaspersky, Windows 7/10).",
      ],
      en: [
        "Server management.",
        "IT maintenance.",
        "Installed operating systems and security software (Kaspersky, Windows 7/10).",
      ],
    },
    technologies: ["Windows Server", "Kaspersky", "Networking"],
  },
];
