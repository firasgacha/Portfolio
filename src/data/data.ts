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

// Hire Me images
import workaholicImg from "../assets/hireMe/workaholic.png";
import communicativeImg from "../assets/hireMe/communicative.png";
import collaborativeImg from "../assets/hireMe/collaborative.png";
import smImg from "../assets/hireMe/sm.png";

const github = "https://github.com/firasgacha/";

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
    name: "Ngnix",
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
];

export const hireRessons = [
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
    title: "Création d'une Infrastructure Docker pour une Application MERN",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    link: github + "Dockerizing-Mern-Application",
    description:
      "Dans ce projet, nous développons une application avec un frontend construit avec React et un backend utilisant Node.js et Express. L'objectif principal est de containeriser ces deux applications et de les déployer dans un environnement Docker unique, permettant ainsi aux différents conteneurs de communiquer efficacement entre eux",
  },
  {
    title: "Système de Gestion de Tickets",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    link: "https://github.com/firasgacha/Tickets-Management-System",
    description:
      "Ce projet est une application de gestion de tickets permettant de suivre l'état d'avancement des tâches au sein d'une équipe. Les tâches sont organisées dans quatre colonnes : To Do, In Progress, Code Review, et Done.",
  },
  {
    title: "Application de Météo",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    link: "https://github.com/firasgacha/Weather-station-app",
    description:
      "Cette application a pour objectif de présenter les statistiques relatives aux températures et aux précipitations.",
  },
];
