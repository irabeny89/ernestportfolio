import { DiMongodb, DiMysql } from "react-icons/di";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiNodedotjs,
  SiSolidity,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMaterialui,
  SiJest,
  SiMocha,
} from "react-icons/si";
import { GrReactjs, GrGraphQl } from "react-icons/gr";

const siteLocalData = {
  author: "Ernest Irabor",
  title: "Ernest Portfolio",
  avatar: {
    width: "45",
    height: "45",
    src: "/Ernest cartoon.jpg",
    alt: "avatar",
  },
  copyWriteYear: 2022,
  intro:
    "I am a software developer, I build interactive web apps using modern tools.",
  tools: [
    { name: "Solidity", Icon: SiSolidity, color: "black" },
    { name: "JavaScript", Icon: SiJavascript, color: "#cc0" },
    { name: "TypeScript", Icon: SiTypescript, color: "blue" },
    { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
    { name: "ExpressJS", Icon: SiExpress, color: "green" },
    { name: "NextJS", Icon: SiNextdotjs, color: "black" },
    { name: "ReactJS", Icon: GrReactjs, color: "cyan" },
    { name: "MongoDB", Icon: DiMongodb, color: "green" },
    { name: "MySQL", Icon: DiMysql, color: "blue" },
    { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#00d" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "purple" },
    { name: "TailwindCSS", Icon: SiTailwindcss, color: "cyan" },
    { name: "MaterialUI", Icon: SiMaterialui, color: "#00d" },
    { name: "Jest", Icon: SiJest, color: "#00d" },
    { name: "Mocha", Icon: SiMocha, color: "#00d" },
  ],
  projects: [
    {
      image: {
        width: "320",
        height: "250",
        src: "/bodman-home.png",
        alt: "project",
      },
      title: "Bodman",
      summary:
        "Web app that works as a `boardman` for two or more people who want to bet an amount and expect a random winner to be selected and given the total amount.",
      link: {
        live: "http://bodman.vercel.app",
        github: "https://github.com/irabeny89/bodman",
      },
      tools: [
        "NextJS",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "GraphQL",
        "TailwindCSS",
        "Jest",
      ],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/ebbs2022.png",
        alt: "project",
      },
      title: "EBBS",
      summary:
        "EBBS(EveryBodyBySell) is an ecommerce web app for sellers and buyers.",
      link: {
        live: "http://ebbs.vercel.app",
        github: "https://github.com/irabeny89/ebbs2022",
      },
      tools: [
        "NextJS",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "GraphQL",
        "TailwindCSS",
        "Jest",
      ],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/movefund.png",
        alt: "project",
      },
      title: "Move Fund",
      summary: "Transfers digital funds from one user to another.",
      link: {
        live: "http://movefund.vercel.app",
        github: "https://github.com/irabeny89/movefund",
      },
      tools: [
        "NextJS",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "GraphQL",
        "MongoDB",
        "Bootstrap",
        "Jest"
      ],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/edoctrans.png",
        alt: "project",
      },
      title: "Edocument Translator",
      summary:
        "Translate texts in document files like .doc/.docx from one language to another.",
      link: {
        live: "http://edoctrans.vercel.app",
        github: "https://github.com/irabeny89/edoctrans",
      },
      tools: [
        "NextJS",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "GraphQL",
        "TailwindCSS",
        "Jest",
      ],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/film-gallery.png",
        alt: "project",
      },
      title: "Film Gallery",
      summary: "Search for your favorite films and get details about them.",
      link: {
        live: "http://film-gallery.vercel.app",
        github: "https://github.com/irabeny89/film-gallery",
      },
      tools: [
        "NextJS",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "GraphQL",
        "Bootstrap",
        "Jest"
      ],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/github-webapp.png",
        alt: "project",
      },
      title: "GitHub Repo Search",
      summary: "Search the Github repositories from text entries.",
      link: {
        live: "http://github-webapp.vercel.app",
        github: "https://github.com/irabeny89/github-webapp",
      },
      tools: [
        "NextJS",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "Bootstrap",
        "Jest"
      ],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/linkshare.png",
        alt: "project",
      },
      title: "Link Share",
      summary: "Share online links to interesting website resources.",
      link: {
        live: "http://linkshare.up.railway.app",
        github: "https://github.com/irabeny89/linkshare",
      },
      tools: [
        "NextJS",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "GraphQL",
        "SQLite",
        "Bootstrap",
        "Jest",
      ],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/sayforme-home.png",
        alt: "project",
      },
      title: "Sayforme",
      summary: "Book a call to your contacts.",
      link: {
        live: "http://sayforme.vercel.app",
        github: "https://github.com/irabeny89/sayforme",
      },
      tools: [
        "NextJS",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "GraphQL",
        "MongoDB",
        "TailwindCSS",
        "Jest"
      ],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/happen-social.png",
        alt: "project",
      },
      title: "Happen Social",
      summary:
        "Social media web application to share posts, follow, unfollow, chat etc.",
      link: {
        live: "http://happen.herokuapp.com",
        github: "https://github.com/irabeny89/mern-social-happen",
      },
      tools: ["ReeactJS", "NodeJS", "ExpressJS", "MongoDB", "MaterialUI"],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/employee-api.png",
        alt: "project",
      },
      title: "Employee API",
      summary: "Employee management API.",
      link: {
        live: "https://crudapi-employee.herokuapp.com/",
        github: "https://github.com/irabeny89/employee-api",
      },
      tools: ["JavaScript", "NodeJS", "ExpressJS", "Bootstrap"],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/e-note-app.png",
        alt: "project",
      },
      title: "E Note",
      summary: "Note taking web application.",
      link: {
        live: "https://enote-beta.vercel.app/",
        github: "https://github.com/irabeny89/enote",
      },
      tools: ["JavaScript", "ReactJS", "NodeJS", "Bootstrap"],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/user-dashboard.png",
        alt: "project",
      },
      title: "User Dashboard",
      summary: "Dashboard for users.",
      link: {
        live: "https://user-dashboard-one.vercel.app/",
        github: "https://github.com/irabeny89/user-dashboard",
      },
      tools: ["JavaScript", "NextJS", "TypeScript", "NodeJS", "Bootstrap"],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/superbase.png",
        alt: "project",
      },
      title: "Superbase",
      summary: "A business web app.",
      link: {
        live: "https://superbase.vercel.app/",
        github: "https://github.com/irabeny89/superbase",
      },
      tools: ["JavaScript", "NextJS", "TypeScript", "NodeJS", "Bootstrap"],
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/dcpicker.png",
        alt: "project",
      },
      title: "DC Picker",
      summary: "A guessing game.",
      link: {
        live: "https://dcpicker.vercel.app/",
        github: "https://github.com/irabeny89/dcpicker",
      },
      tools: ["JavaScript", "Nextjs", "TypeScript", "Nodejs", "Bootstrap"],
    },
  ],
  contacts: [
    {
      type: "Phone & Whatsapp",
      line: "+2349020951797",
    },
    {
      type: "Email",
      line: "irabeny89@gmail.com",
    },
    {
      type: "Linkedin",
      line: "https://linkedin.com/in/ernest-irabor-085486183",
    },
    {
      type: "Github",
      line: "https://github.com/irabeny89",
    },
  ],
  cv: {
    url: "https://drive.google.com/file/d/19lc28dqktlUbGd-eKcSwz7ypw9DDGjtL/view?usp=drivesdk",
  },
};

export default siteLocalData;
