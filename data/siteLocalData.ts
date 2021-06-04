const siteLocalData = {
  title: "Ernest Portfolio",
  avatar: {
    width: "35",
    height: "35",
    src: "/Ernest cartoon.jpg",
    alt: "avatar",
  },
  intro: "I am a software developer, I build frontend and backend apps using:",
  tools: [
    "JavaScript",
    "TypeScript",
    "Nodejs",
    "Nextjs",
    "Reactjs",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "PostgreSQL",
  ],
  projects: [
    {
      image: {
        width: "320",
        height: "250",
        src: "/happen-social.png",
        alt: "project",
      },
      title: "Happen Social",
      summary: "Social media app with follow/unfollow, news feeds, posts etc.",
      link: {
        live: "http://happen.herokuapp.com",
        github: "https://irabeny89/mern-social-happen",
      },
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/e-note-app.png",
        alt: "project",
      },
      title: "E Note",
      summary: "Browser Local storage note app with full CRUD functions.",
      link: {
        live: "https://enote-beta.vercel.app/",
        github: "https://irabeny89/enote",
      },
    },
    {
      image: {
        width: "320",
        height: "250",
        src: "/express-notesapp.png",
        alt: "project",
      },
      title: "Server Note",
      summary: "Server note app with full API CRUD functions.",
      link: {
        live: "https://servernoteapp.herokuapp.com/",
        github: "https://irabeny89/servernotes",
      },
    },
  ],
  contacts: [
    { type: "Phone & Whatsapp", line: "+2349020951797" },
    { type: "Email", line: "irabeny89@gmail.com" },
    {
      type: "Linkedin",
      line: "https://linkedin.com/in/ernest-irabor-085486183",
    },
    { type: "Github", line: "https://github.com/irabeny89" },
  ],
  cv: {
    url: "https://drive.google.com/file/d/1a6XM-o_fZBNH1Eq17aOm9ySb5ygGabT-/view?usp=sharing",
  },
};

export default siteLocalData;
