import { DiMongodb, DiMysql } from "react-icons/di";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiVuedotjs,
  SiPostgresql,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiSolidity,
  SiRust,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMaterialdesign,
  SiJest,
  SiMocha,
  SiSqlite
} from "react-icons/si";
import { GrReactjs, GrGraphQl } from "react-icons/gr";

const siteLocalData = {
  cv: {
    url: "https://drive.google.com/file/d/19lc28dqktlUbGd-eKcSwz7ypw9DDGjtL/view?usp=drivesdk",
  },
  author: "Ernest Irabor",
  title: "Ernest Portfolio",
  description: "Ernest Irabor, software engineer portfolio website.",
  avatar: {
    width: "45",
    height: "45",
    src: "/Ernest cartoon.jpg",
    alt: "avatar",
  },
  copyWriteYear: 2023,
  intro:
    "I am a software developer, I build interactive web apps using modern tools.",
  contacts: [
    {
      type: "Phone",
      line: "+2349020951797",
    },
    {
      type: "Whatsapp",
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
  certificates: [
    {
      title: "React.js",
      description: "Pluralsight report on React.js",
      image: {
        width: 680,
        height: 250,
        src: "/pluralsight_reactjs_score.png",
        alt: "pluralsight reactjs report",
      }
    },
    {
      title: "Node.js",
      description: "Pluralsight report on Node.js",
      image: {
        width: 680,
        height: 250,
        src: "/pluralsight_nodejs_score.png",
        alt: "pluralsight nodejs report",
      }
    }
  ],
  tools: [
    { name: "Rust", Icon: SiRust, color: "black" },
    { name: "Solidity", Icon: SiSolidity, color: "black" },
    { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
    { name: "TypeScript", Icon: SiTypescript, color: "blue" },
    { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
    { name: "ExpressJS", Icon: SiExpress, color: "green" },
    { name: "MongoDB", Icon: DiMongodb, color: "green" },
    { name: "MaterialUI", Icon: SiMaterialdesign, color: "#00d" },
    { name: "NextJS", Icon: SiNextdotjs, color: "black" },
    { name: "ReactJS", Icon: GrReactjs, color: "cyan" },
    { name: "VueJS", Icon: SiVuedotjs, color: "green" },
    { name: "MySQL", Icon: DiMysql, color: "blue" },
    { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#00d" },
    { name: "SQLite", Icon: SiSqlite, color: "#00d" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "purple" },
    { name: "TailwindCSS", Icon: SiTailwindcss, color: "cyan" },
    { name: "Jest", Icon: SiJest, color: "#00d" },
    { name: "Mocha", Icon: SiMocha, color: "#00d" },
    { name: "Python", Icon: SiPython, color: "#aa0" },
    { name: "Docker", Icon: SiDocker, color: "#00e" },
  ],
  projects: [
    {
      image: {
        width: 320,
        height: 250,
        src: "/market-square.png",
        alt: "project",
      },
      title: "Market Square",
      summary:
        "Ecommerce web application for service consumers to get access to products and services. ",
      link: {
        live: "https://market-square.vercel.app",
        github: "",
      },
      tools: [
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "MongoDB", Icon: DiMongodb, color: "green" },
        { name: "TailwindCSS", Icon: SiTailwindcss, color: "cyan" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/profitall-home.png",
        alt: "project",
      },
      title: "Profitall",
      summary:
        "Ecommerce web application for service providers to manage their services on the main seller website. Full dashboard with analytics, reports and management on: product catalog, logistics, payment etc.",
      link: {
        live: "https://profitall.vercel.app",
        github: "https://github.com/irabeny89/profitall",
      },
      tools: [
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "MongoDB", Icon: DiMongodb, color: "green" },
        { name: "TailwindCSS", Icon: SiTailwindcss, color: "cyan" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/bodman-home.png",
        alt: "project",
      },
      title: "Bodman",
      summary:
        "Web app that works as a `boardman` for two or more people who want to bet an amount and expect a random winner to be selected and given the total amount.",
      link: {
        live: "https://bodman.vercel.app",
        github: "https://github.com/irabeny89/bodman",
      },
      tools: [
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "TailwindCSS", Icon: SiTailwindcss, color: "cyan" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
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
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "TailwindCSS", Icon: SiTailwindcss, color: "cyan" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
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
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
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
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "TailwindCSS", Icon: SiTailwindcss, color: "cyan" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
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
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
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
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
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
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
        { name: "SQLite", Icon: SiSqlite, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
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
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "GraphQL", Icon: GrGraphQl, color: "crimson" },
        { name: "TailwindCSS", Icon: SiTailwindcss, color: "cyan" },
        { name: "Jest", Icon: SiJest, color: "#00d" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/v-note.png",
        alt: "project",
      },
      title: "V-Note",
      summary: "A note taking app that stores notes securely in the users' local storage. Built purely with VueJS framework.",
      link: {
        live: "http://v-note.vercel.app",
        github: "https://github.com/irabeny89/v-note",
      },
      tools: [
        { name: "VueJS", Icon: SiVuedotjs, color: "green" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
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
      tools: [
        { name: "ReactJS", Icon: GrReactjs, color: "cyan" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "ExpressJS", Icon: SiExpress, color: "green" },
        { name: "MongoDB", Icon: DiMongodb, color: "green" },
        { name: "MaterialUI", Icon: SiMaterialdesign, color: "#00d" }
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/employee-api.png",
        alt: "project",
      },
      title: "Employee API",
      summary: "Employee management API.",
      link: {
        live: "https://crudapi-employee.herokuapp.com/",
        github: "https://github.com/irabeny89/employee-api",
      },
      tools: [
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "ExpressJS", Icon: SiExpress, color: "green" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" },
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/e-note-app.png",
        alt: "project",
      },
      title: "E Note",
      summary: "Note taking web application.",
      link: {
        live: "https://enote-beta.vercel.app/",
        github: "https://github.com/irabeny89/enote",
      },
      tools: [
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "ReactJS", Icon: GrReactjs, color: "cyan" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" }
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/user-dashboard.png",
        alt: "project",
      },
      title: "User Dashboard",
      summary: "Dashboard for users.",
      link: {
        live: "https://user-dashboard-one.vercel.app/",
        github: "https://github.com/irabeny89/user-dashboard",
      },
      tools: [
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" }
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/python_estore_cli.png",
        alt: "project",
      },
      title: "Grossary E-Store CLI",
      summary: "A python Command Line program to manage a grossary store. Features includes products listing, cart management, checkout system, product restocking etc.",
      link: {
        live: "",
        github: "https://github.com/irabeny89/estore-cli",
      },
      tools: [{ name: "Python", Icon: SiPython, color: "#aa0" }],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/superbase.png",
        alt: "project",
      },
      title: "Superbase",
      summary: "A business web app.",
      link: {
        live: "https://superbase.vercel.app/",
        github: "https://github.com/irabeny89/superbase",
      },
      tools: [
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" }
      ],
    },
    {
      image: {
        width: 320,
        height: 250,
        src: "/dcpicker.png",
        alt: "project",
      },
      title: "DC Picker",
      summary: "A guessing game.",
      link: {
        live: "https://dcpicker.vercel.app/",
        github: "https://github.com/irabeny89/dcpicker",
      },
      tools: [
        { name: "NextJS", Icon: SiNextdotjs, color: "black" },
        { name: "TypeScript", Icon: SiTypescript, color: "blue" },
        { name: "JavaScript", Icon: SiJavascript, color: "#aa0" },
        { name: "NodeJS", Icon: SiNodedotjs, color: "green" },
        { name: "Bootstrap", Icon: SiBootstrap, color: "purple" }
      ],
    },
  ],

};

export default siteLocalData;
