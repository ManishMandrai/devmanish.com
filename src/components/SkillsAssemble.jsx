// SkillsAssemble.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiGit,
  SiGithub,
  SiExpress,
  SiNpm,
  SiDocker,
  SiKubernetes,
  SiPrisma,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiHostinger,
  SiOpenai,
  SiGoogle,
  SiFigma,
  SiSass,
  SiJest,
  SiStorybook,
  SiWebpack,
  SiTurborepo,
  SiVitest,
} from "react-icons/si";

import { FaAws, FaNodeJs } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbHexagonLetterS } from "react-icons/tb";

const rows = [
  // Row 1 (11)
  [
    { Icon: SiReact, color: "#61DAFB", label: "React" },
    { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
    { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
    { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
    { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
    { Icon: SiCss3, color: "#1572B6", label: "CSS3" },
    { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
    { Icon: VscCode, color: "#007ACC", label: "VS Code" },
    { Icon: SiVercel, color: "#000000", label: "Vercel" },
    { Icon: SiGit, color: "#F05032", label: "Git" },
    { Icon: SiGithub, color: "#181717", label: "GitHub" },
  ],

  // Row 2 (10)
  [
    { Icon: FaNodeJs, color: "#68A063", label: "Node.js" },
    { Icon: SiExpress, color: "#000000", label: "Express.js" },
    { Icon: SiNpm, color: "#CB3837", label: "npm" },
    { Icon: SiDocker, color: "#2496ED", label: "Docker" },
    { Icon: SiKubernetes, color: "#326CE5", label: "Kubernetes" },
    { Icon: SiPrisma, color: "#0EA5A4", label: "Prisma" },
    { Icon: SiGraphql, color: "#E10098", label: "GraphQL" },
    { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
    { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
    { Icon: SiRedis, color: "#D82C20", label: "Redis" },
  ],

  // Row 3 (9)
  [
    { Icon: FaAws, color: "#FF9900", label: "AWS" },
    { Icon: SiHostinger, color: "#FF6A00", label: "Hostinger" },
    { Icon: SiOpenai, color: "#111827", label: "OpenAI" },
    { Icon: SiGoogle, color: "#4285F4", label: "Google AI" },
    { Icon: SiFigma, color: "#F24E1E", label: "Figma" },
    { Icon: SiSass, color: "#CC6699", label: "Sass" },
    { Icon: SiJest, color: "#C21325", label: "Jest" },
    { Icon: SiStorybook, color: "#FF4785", label: "Storybook" },
    { Icon: SiWebpack, color: "#1C78C0", label: "Webpack" },
    { Icon: SiTurborepo, color: "#EF4444", label: "TurboRepo" },
    { Icon: SiVitest, color: "#6E9F18", label: "Vitest" }


  ],
];

export default function SkillsAssemble() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    
    if (!container || !heading) return;

    // Cleanup previous ScrollTriggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Heading animation
    gsap.fromTo(heading,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Get all icon elements
    const icons = container.querySelectorAll(".skill-icon");
    
    // Set initial state - more dramatic scattering
    icons.forEach((el, i) => {
      // Calculate position based on screen width for better responsiveness
      const maxX = window.innerWidth < 768 ? 200 : 400;
      const maxY = window.innerWidth < 768 ? 150 : 250;
      
      const x = gsap.utils.random(-maxX, maxX);
      const y = gsap.utils.random(-maxY, maxY);
      const r = gsap.utils.random(-45, 45);
      const s = gsap.utils.random(0.3, 0.7);
      const z = Math.floor(gsap.utils.random(0, 5));

      gsap.set(el, {
        x,
        y,
        rotate: r,
        scale: s,
        opacity: 0,
        zIndex: z,
        transformOrigin: "center center",
      });
    });

    // Create a master timeline for the assembly animation
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 20%",
        scrub: 0.8,
        markers: false,
        invalidateOnRefresh: true, // Recalculates on resize
      },
    });

    // Phase 1: Fade in and start moving
    masterTl.to(icons, {
      opacity: 0.3,
      duration: 0.3,
      ease: "power2.in",
    });

    // Phase 2: Assemble with staggered timing
    masterTl.to(icons, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1.1, // Overshoot for bounce effect
      opacity: 0.9,
      duration: 1.2,
      ease: "back.out(1.7)",
      stagger: {
        each: 0.05,
        from: "random",
        grid: "auto",
      },
    }, "-=0.2");

    // Phase 3: Settle to final position
    masterTl.to(icons, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.3");

    // Add subtle continuous breathing effect after assembly
    const breathingTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 30%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    breathingTl.to(icons, {
      y: -3,
      scale: 1.02,
      duration: 2,
      ease: "sine.inOut",
      stagger: {
        each: 0.1,
        from: "center",
        repeat: -1,
        yoyo: true,
      },
    });

    // Cleanup function
    return () => {
      masterTl.kill();
      breathingTl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 select-none ">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <TbHexagonLetterS className="text-2xl text-blue-600 dark:text-blue-400" />
            </div>
            <h2 
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
            >
              Tech Stack & Skills
            </h2>
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <TbHexagonLetterS className="text-2xl text-blue-600 dark:text-blue-400 transform rotate-180" />
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools & technologies I use to craft exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={containerRef}
          className="relative"
          aria-hidden={false}
        >
          {/* Grid lines for visual reference */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-gray-600/30" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent dark:via-gray-600/30" />
          </div>

          {/* Skills Container */}
          <div className="relative flex flex-col items-center justify-center gap-8 md:gap-12">
            {/* Row 1 - 11 icons */}
            <div className="flex flex-wrap justify-center gap-4 ">
              {rows[0].map(({ Icon, color, label }, idx) => (
                <button
                  key={`r1-${idx}`}
                  className="skill-icon group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-2xl  shadow-md hover:shadow-xl transition-shadow duration-300"
                  title={label}
                  aria-label={label}
                  onClick={() => {}}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent dark:from-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      color,
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-xs font-medium rounded-lg whitespace-nowrap">
                      {label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Row 2 - 10 icons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {rows[1].map(({ Icon, color, label }, idx) => (
                <button
                  key={`r2-${idx}`}
                  className="skill-icon group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-2xl  shadow-md hover:shadow-xl transition-shadow duration-300"
                  title={label}
                  aria-label={label}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent dark:from-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      color,
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-xs font-medium rounded-lg whitespace-nowrap">
                      {label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Row 3 - 9 icons */}
            <div className="flex flex-wrap justify-center gap-4 ">
              {rows[2].map(({ Icon, color, label }, idx) => (
                <button
                  key={`r3-${idx}`}
                  className="skill-icon group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-2xl  shadow-md hover:shadow-xl transition-shadow duration-300"
                  title={label}
                  aria-label={label}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent dark:from-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      color,
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-xs font-medium rounded-lg whitespace-nowrap">
                      {label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats/Info Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm md:text-base text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>30+ Technologies</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Full Stack Expertise</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>Continuous Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}