// src/data/projectData.js

// IMPORT ICONS
import { FaReact, FaNodeJs, FaWhatsapp, FaFilePdf, FaRobot } from "react-icons/fa";
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
    SiFirebase,
    SiTwilio,
    SiFramer,
} from "react-icons/si";

import resumeai1 from "../assets/resumeai1.png";
import resumeai2 from "../assets/resumeai2.png";
import wpai1 from "../assets/wpai1.png";
import wpai2 from "../assets/wpai2.png";

// --------------------------------------------------
// FINAL SORTED PROJECT LIST (NEW → OLD)
// --------------------------------------------------

const projectData = [

    // --------------------------------------------------
    // 0️⃣ WHATSAPP AI AGENT (Newest)
    // --------------------------------------------------
    {
        id: "whatsapp-ai-agent",
        title: "WhatsApp AI Agent",
        category: "Projects",
        description:
            "Built a restaurant AI agent that handles customer queries over WhatsApp using Twilio webhooks and Groq LLM, currently being piloted with a restaurant client. Designed a stateless Express backend to route, process, and respond to real-time WhatsApp messages.",
        skills: [
            { label: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
            { label: "Express", icon: SiExpress, color: "#000000" },
            { label: "Groq AI", icon: FaRobot, color: "#F55036" },
            { label: "Twilio", icon: SiTwilio, color: "#F22F46" },
            { label: "WhatsApp API", icon: FaWhatsapp, color: "#25D366" }
        ],
        media: [
            { type: "image", url: wpai1 },
            { type: "image", url: wpai2 }
        ],
        // liveLink: "",
        github: "https://github.com/ManishMandrai/restaurant-ai-agent",
    },

    // --------------------------------------------------
    // 0.5️⃣ AI RESUME BUILDER
    // --------------------------------------------------
    {
        id: "ai-resume-builder",
        title: "AI Resume Builder",
        category: "Projects",
        description:
            "Built an AI-powered resume tailoring tool that parses uploaded resumes (PDF/DOCX) and rewrites them using Gemini AI. Implemented animated PDF export using React PDF Renderer and Framer Motion.",
        skills: [
            { label: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { label: "Gemini AI", icon: FaRobot, color: "#8E75FF" },
            { label: "PDF Parser", icon: FaFilePdf, color: "#EB3C39" },
            { label: "Framer Motion", icon: SiFramer, color: "#0055FF" },
            { label: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" }
        ],
        media: [
            { type: "image", url: resumeai1 },
            { type: "image", url: resumeai2 }
        ],
        liveLink: "https://github.com/ManishMandrai/restaurant-ai-agent",
        github: "https://github.com/ManishMandrai/resume-tailor",
    },

    // --------------------------------------------------
    // 1️⃣ PORTFOLIO WEBSITE
    // --------------------------------------------------
    {
        id: "portfolio",
        title: "Portfolio ",
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
        liveLink: "https://thebhopalfilmfestival.com",
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
        liveLink: "https://hello-hii-986h.vercel.app/",
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
        title: "Matural.shop",
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
        // github: "https://github.com/ManishMandrai",
        liveLink: "https://matural.shop",
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
            { type: "image", url: "/assets/ecom2.png" }
        ],
        github: "https://github.com/ManishMandrai/Manish.Shoping_App",
        liveLink: "https://manish-shoping-app.vercel.app/",
    },

    // --------------------------------------------------
    // 9️⃣ GEMINI AI BOT (Oldest)
    // --------------------------------------------------
    {
        id: "gemini-bot",
        title: "AI Chat-Bot",
        category: "Projects",
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