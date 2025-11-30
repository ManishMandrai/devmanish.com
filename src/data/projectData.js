// src/data/projectData.js
const projectData = [
  {
    id: "chat-app",
    title: " Chat App",
    category: "Projects",
    description:
      "A full-stack real-time chat platform built using Next.js, TypeScript, Convex, and Stream SDK—supporting instant messaging, channel management, live video calls, authentication via Clerk, and a fully responsive UI with Tailwind CSS.",
    skills: ["Next.js", "TypeScript", "Convex", "Stream SDK", "Clerk", "Tailwind CSS"],
    media: [
      { type: "video", url: "https://www.youtube.com/watch?v=VIDEO_ID_CHAT" }, // replace VIDEO_ID_CHAT
      { type: "image", url: "/assets/chat-1.png" },
      { type: "image", url: "/assets/chat-2.png" },
    ],
    liveLink: "https://hello-hii-chat-app.vercel.app/",
    github: "https://github.com/ManishMandrai/hello-hii",
  },

  {
    id: "mearn-shop",
    title: "Ecommerce App",
    category: "Projects",
    description:
      "A dynamic and responsive e-commerce application built with the MERN stack. Includes auth, product management, shopping cart, payments and order tracking.",
    skills: ["React.js", "Node", "MongoDB"],
    media: [
      { type: "video", url: "https://www.youtube.com/watch?v=uPTxeoC_MuM" },
      { type: "image", url: "/assets/shop-1.png" },
      { type: "image", url: "/assets/shop-2.png" },
    ],
    liveLink: "https://manish-shoping-app.vercel.app/",
    github: "https://github.com/ManishMandrai/Manish.Shoping_App",
  },

  {
    id: "gemini-clone",
    title: "AI Chatbot",
    category: "Experiments",
    description:
      "An intelligent AI chatbot powered by Gemini, built using React. Provides real-time context-aware responses and a smooth conversational UI.",
    skills: ["React.js", "AI", "Tailwind"],
    media: [
      { type: "video", url: "https://www.youtube.com/watch?v=eezNM5SQpeo" },
      { type: "image", url: "/assets/gemini-1.png" },
      { type: "image", url: "/assets/gemini-2.png" },
    ],
    liveLink: "https://gemini-clone-ashen-three.vercel.app/",
    github: "https://github.com/ManishMandrai/gemini-clone",
  },

  {
    id: "chrome-ext",
    title: "Chrome Exstn",
    category: "Freelance",
    description:
      "Random Password Generator Chrome extension built with React. Lightweight, customizable, and secure password generation.",
    skills: ["React", "Tailwind", "HTML"],
    media: [
      { type: "video", url: "https://www.youtube.com/watch?v=rp2ePB8gKYw" },
      { type: "image", url: "/assets/ext-1.png" },
      { type: "image", url: "/assets/ext-2.png" },
    ],
    github: "https://github.com/ManishMandrai/Password-Generator-Extension",
  },
];

export default projectData;
