// src/data/experienceData.js

import myab from "../assets/myab.png";
import boomx from "../assets/boomx.jpg";
import matural from "../assets/logomatural.png";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import {
    FaNodeJs,
} from "react-icons/fa";

import {
    SiMongodb,
    SiCloudinary,
    SiExpress,
    SiJavascript,
} from "react-icons/si";
import { SiFirebase } from "react-icons/si";



const experienceData = [
    {
        id: 1,
        company: "BoomXMedia",
        url: "https://boomxmedia.com",
        type: "Frontend Developer",
        dates: "June 2025 - Present",
        description:
            "Building high-performing, SEO-optimized UIs with React & Next.js. Improved Core Web Vitals and shipped email templates used in production campaigns.",
        tags: [
            { label: "React", icon: FaReact, color: "#61DAFB" },
            { label: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { label: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
            { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        ],
        logo: boomx,
    },

    {
        id: 2,
        company: "Matural.shop",
        url: "https://matural.shop",
        type: "Founder & Full-Stack Developer",
        dates: "Mar 2025 - May 2025",
        description:
            "Designed, developed and deployed a full MERN e-commerce system with payments, authentication, product management, order lifecycle, and cloud media.",
        tags: [
            { label: "React", icon: FaReact, color: "#61DAFB" },
            { label: "Node.js", icon: FaNodeJs, color: "#53A848" },
            { label: "MongoDB", icon: SiMongodb, color: "#4FAA41" },
            { label: "Cloudinary", icon: SiCloudinary, color: "#1DA1F2" },
        ],
        logo: matural,
    },

    {
        id: 3,
        company: "MY APP BROKER",
        url: "https://myappbroker.com",
        type: "Freelancer – Full Stack Developer",
        dates: "Jan 2025 - Feb 2025",
        description:
            "Developed a full-stack marketplace platform using React and Firebase with realtime updates, optimized UI, and secure backend functions.",
        tags: [
            { label: "React", icon: FaReact, color: "#61DAFB" },
            { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { label: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
            { label: "Express.js", icon: SiExpress, color: "#000000" },
        ],
        logo: myab,
    },
];

export default experienceData;
