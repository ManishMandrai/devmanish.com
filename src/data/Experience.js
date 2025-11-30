// src/data/experienceData.js

import myab from "../assets/myab.png";
import boomx from "../assets/boomx.jpg";
import matural from "../assets/logomatural.png";

const experienceData = [
  {
    id: 1,
    company: "BoomXMedia",
    url: "https://boomxmedia.com",
    type: "Frontend Developer",
    dates: "June 2025 - Present",
    description:
      "Shipping responsive, SEO-friendly sites with React & Next. Improved CWV and built email templates for campaigns.",
    tags: ["React", "Next.js", "Tailwind"],
    logo: boomx,
  },
  {
    id: 2,
    company: "Matural.shop",
    url: "https://matural.shop",
    type: "Founder & Full-Stack Developer",
    dates: "Mar 2025 - May 2025",
    description:
      "Launched a production MERN e-commerce with payments, order tracking and real customers. Full end-to-end ownership from UI to infra.",
    tags: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
    logo: matural,
  },
  {
    id: 3,
    company: "MY APP BROKER",
    url: "https://myappbroker.com",
    type: "Freelancer – Full Stack Developer",
    dates: "Jan 2025 - Feb 2025",
    description:
      "Built the MyAppBroker platform using React, Firebase and Node — realtime features, clean architecture and performance optimisations.",
    tags: ["React", "JavaScript", "Firebase", "Tailwind"],
    logo: myab,
  },
];

export default experienceData;
