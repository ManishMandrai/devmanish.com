// // src/data/projectData.js
// const projectData = [
//   {
//     id: "chat-app",
//     title: " Chat App",
//     category: "Projects",
//     description:
//       "A full-stack real-time chat platform built using Next.js, TypeScript, Convex, and Stream SDK—supporting instant messaging, channel management, live video calls, authentication via Clerk, and a fully responsive UI with Tailwind CSS.",
//     skills: ["Next.js", "TypeScript", "Convex", "Stream SDK", "Clerk", "Tailwind CSS"],
//     media: [
//       { type: "video", url: "https://www.youtube.com/watch?v=VIDEO_ID_CHAT" }, // replace VIDEO_ID_CHAT
//       { type: "image", url: "/assets/chat-1.png" },
//       { type: "image", url: "/assets/chat-2.png" },
//     ],
//     liveLink: "https://hello-hii-chat-app.vercel.app/",
//     github: "https://github.com/ManishMandrai/hello-hii",
//   },

//   {
//     id: "mearn-shop",
//     title: "Ecommerce App",
//     category: "Projects",
//     description:
//       "A dynamic and responsive e-commerce application built with the MERN stack. Includes auth, product management, shopping cart, payments and order tracking.",
//     skills: ["React.js", "Node", "MongoDB"],
//     media: [
//       { type: "video", url: "https://www.youtube.com/watch?v=uPTxeoC_MuM" },
//       { type: "image", url: "/assets/shop-1.png" },
//       { type: "image", url: "/assets/shop-2.png" },
//     ],
//     liveLink: "https://manish-shoping-app.vercel.app/",
//     github: "https://github.com/ManishMandrai/Manish.Shoping_App",
//   },

//   {
//     id: "gemini-clone",
//     title: "AI Chatbot",
//     category: "Experiments",
//     description:
//       "An intelligent AI chatbot powered by Gemini, built using React. Provides real-time context-aware responses and a smooth conversational UI.",
//     skills: ["React.js", "AI", "Tailwind"],
//     media: [
//       { type: "video", url: "https://www.youtube.com/watch?v=eezNM5SQpeo" },
//       { type: "image", url: "/assets/gemini-1.png" },
//       { type: "image", url: "/assets/gemini-2.png" },
//     ],
//     liveLink: "https://gemini-clone-ashen-three.vercel.app/",
//     github: "https://github.com/ManishMandrai/gemini-clone",
//   },

//   {
//     id: "chrome-ext",
//     title: "Chrome Exstn",
//     category: "Freelance",
//     description:
//       "Random Password Generator Chrome extension built with React. Lightweight, customizable, and secure password generation.",
//     skills: ["React", "Tailwind", "HTML"],
//     media: [
//       { type: "video", url: "https://www.youtube.com/watch?v=rp2ePB8gKYw" },
//       { type: "image", url: "/assets/ext-1.png" },
//       { type: "image", url: "/assets/ext-2.png" },
//     ],
//     github: "https://github.com/ManishMandrai/Password-Generator-Extension",
//   },
// ];


// export default projectData;



// IMPORT ICONS
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiCloudinary,
  SiExpress,
  SiTypescript,
  SiPuppeteer,
  SiPrisma,
  SiPostgresql,
  SiJavascript,
  SiFirebase
} from "react-icons/si";

// --------------------------------------------------
// FINAL SORTED PROJECT LIST (NEW → OLD)
// --------------------------------------------------

const projectData = [

  // --------------------------------------------------
  // 1️⃣ PORTFOLIO WEBSITE (Newest)
  // --------------------------------------------------
  {
    id: "portfolio",
    title: "Manish.dev – Portfolio Website",
    category: "Projects",
    description:
      "A modern portfolio with theme switching, animations, responsive UI and a clean project showcase.",
    skills: [
      { label: "React", icon: FaReact, color: "#61DAFB" },
      { label: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
      { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
    ],
    media: [
      { type: "image", url: "/assets/dev1.png" },
      { type: "image", url: "/assets/dev2.png" }
    ],
    liveLink: "https://devmanish.com",
    github: "https://github.com/ManishMandrai",
  },

  // --------------------------------------------------
  // 2️⃣ AUTO–APPLIER (Naukri bot)
  // --------------------------------------------------
  {
    id: "auto-applier",
    title: "Naukri Auto-Applier",
    category: "Experiments",
    description:
      "A Puppeteer automation bot that logs into Naukri, detects jobs and automatically applies with smart filters.",
    skills: [
      { label: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { label: "Puppeteer", icon: SiPuppeteer, color: "#00E676" },
      { label: "Automation", icon: SiJavascript, color: "#FF9800" }
    ],
    media: [
      { type: "image", url: "/assets/apply1.png" },
      { type: "image", url: "/assets/apply2.png" }
    ],
    github: "https://github.com/ManishMandrai/naukri-auto-applier",
  },

  // --------------------------------------------------
  // 3️⃣ BHOPAL FILM FESTIVAL
  // --------------------------------------------------
  {
    id: "bhopal-film-fest",
    title: "Bhopal Film Festival Website",
    category: "Freelance",
    description:
      "A clean, responsive website designed for the Bhopal Film Festival with event sections and ticket CTAs.",
    skills: [
      { label: "React", icon: FaReact, color: "#61DAFB" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
    ],
    media: [
      { type: "image", url: "/assets/tbff1.png" },
      { type: "image", url: "/assets/tbff2.png" }
    ],
    liveLink: "https://bhopalfilmfestival.com",
  },

  // --------------------------------------------------
  // 4️⃣ TINYLINK URL Shortener
  // --------------------------------------------------
  {
    id: "tiny-link",
    title: "TinyLink URL Shortener",
    category: "Projects",
    description:
      "A fast and clean URL shortener built using Next.js, Prisma and PostgreSQL with analytics.",
    skills: [
      { label: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { label: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { label: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
    ],
    media: [
      { type: "image", url: "/assets/url1.png" },
      { type: "image", url: "/assets/url2.png" }
    ],
    liveLink: "https://tiny-link-xi-sandy.vercel.app/",
    github: "https://github.com/ManishMandrai/tiny-link",
  },

  // --------------------------------------------------
  // 5️⃣ REALTIME CHAT APP
  // --------------------------------------------------
  {
    id: "chat-app",
    title: "Realtime Chat Platform",
    category: "Projects",
    description:
      "A real-time chat platform with channels, messages, calls and authentication using Next.js and Stream.",
    skills: [
      { label: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" }
    ],
    media: [
      { type: "image", url: "/assets/chat1.png" },
      { type: "image", url: "/assets/chat2.png" }
    ],
    liveLink: "https://hello-hii-chat-app.vercel.app/",
    github: "https://github.com/ManishMandrai/hello-hii",
  },

  // --------------------------------------------------
  // 6️⃣ MATURAL.SHOP
  // --------------------------------------------------
  {
    id: "matural",
    title: "Matural.shop (E-commerce)",
    category: "Experiments",
    description:
      "An early version of my ecommerce platform with product management, checkout flow and order system.",
    skills: [
      { label: "React", icon: FaReact, color: "#61DAFB" },
      { label: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { label: "MongoDB", icon: SiMongodb, color: "#4DB33D" }
    ],
    media: [
      { type: "image", url: "/assets/matural1.png" },
      { type: "image", url: "/assets/matural2.png" }
    ],
    github: "https://github.com/ManishMandrai",
  },

  // --------------------------------------------------
  // 7️⃣ MYAPPBROKER
  // --------------------------------------------------
  {
    id: "myappbroker",
    title: "MyAppBroker Marketplace",
    category: "Freelance",
    description:
      "A SaaS admin dashboard with Firebase realtime database, smooth UI and resource management.",
    skills: [
      { label: "React", icon: FaReact, color: "#61DAFB" },
      { label: "Firebase", icon: SiFirebase, color: "#FFCC30" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" }
    ],
    media: [
      { type: "image", url: "/assets/mab1.png" },
      { type: "image", url: "/assets/mab2.png" }
    ],
    liveLink: "https://myappbroker.com",
  },

  // --------------------------------------------------
  // 8️⃣ E-COMMERCE (MERN)
  // --------------------------------------------------
  {
    id: "ecommerce",
    title: "E-Commerce App",
    category: "Projects",
    description:
      "A full MERN ecommerce app with cart, checkout, payments, admin dashboard and order lifecycle.",
    skills: [
      { label: "React", icon: FaReact, color: "#61DAFB" },
      { label: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { label: "MongoDB", icon: SiMongodb, color: "#4DB33D" }
    ],
    media: [
           { type: "video", url: "https://www.youtube.com/watch?v=uPTxeoC_MuM" },
      { type: "image", url: "/assets/ecom1.png" },
      { type: "image", url: "/assets	ecom2.png" }
    ],
    github: "https://github.com/ManishMandrai/Manish.Shoping_App",
    liveLink: "https://manish-shoping-app.vercel.app/",
  },

  // --------------------------------------------------
  // 9️⃣ GEMINI AI BOT (Oldest)
  // --------------------------------------------------
  {
    id: "gemini-bot",
    title: "Gemini AI Bot",
    category: "Experiments",
    description:
      "An AI chatbot using Gemini API with real-time messaging and a smooth, minimal UI.",
    skills: [
      { label: "React", icon: FaReact, color: "#61DAFB" },
      { label: "AI", icon: SiJavascript, color: "#7C3AED" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" }
    ],
    media: [
      { type: "image", url: "/assets/bot1.png" },
      { type: "image", url: "/assets/bot2.png" }
    ],
    liveLink: "https://gemini-clone-ashen-three.vercel.app/",
    github: "https://github.com/ManishMandrai/gemini-clone",
  },
];

export default projectData;
