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
} from "react-icons/si";

// ✔ ALWAYS WORKING
import { FaAws, FaNodeJs } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

/*
  Layout:
   - Row 1: 11 icons
   - Row 2: 10 icons
   - Row 3: 9 icons
  Colors are tuned to resemble official brand colours. Adjust color values below if you want different hues.
*/

const rows = [
  // Row 1 (11)
  [
    { Icon: SiReact, color: "#61DAFB", label: "React" },
    { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
    { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
    { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
    { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
    { Icon: SiCss3, color: "#1572B6", label: "CSS3" },
    { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
        { Icon: VscCode, color: "#007ACC", label: "VS Code" },        // FIXED
    // { Icon: SiVisualstudiocode, color: "#007ACC", label: "VS Code" },
    { Icon: SiVercel, color: "#000000", label: "Vercel" },
    { Icon: SiGit, color: "#F05032", label: "Git" },
    { Icon: SiGithub, color: "#181717", label: "GitHub" },
  ],

  // Row 2 (10)
  [
    
    { Icon: FaNodeJs, color: "#68A063", label: "Node.js" },       // FIXED
    // { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
    { Icon: SiExpress, color: "#000000", label: "Express" },
    { Icon: SiNpm, color: "#CB3837", label: "npm" },
    { Icon: SiDocker, color: "#2496ED", label: "Docker" },
    { Icon: SiKubernetes, color: "#326CE5", label: "Kubernetes" },
    { Icon: SiPrisma, color: "#0EA5A4", label: "Prisma" },
    { Icon: SiGraphql, color: "#E10098", label: "GraphQL" },
    { Icon: SiPostgresql, color: "#336791", label: "Postgres" },
    { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
    { Icon: SiRedis, color: "#D82C20", label: "Redis" },
  ],

  // Row 3 (9)
  [
    // { Icon: SiAmazonaws, color: "#FF9900", label: "AWS" },
      { Icon: FaAws, color: "#FF9900", label: "AWS" },   
    { Icon: SiHostinger, color: "#FF6A00", label: "Hostinger" },
    { Icon: SiOpenai, color: "#111827", label: "OpenAI / GPT" },
    { Icon: SiGoogle, color: "#4285F4", label: "Google / Gemini" },
    { Icon: SiFigma, color: "#F24E1E", label: "Figma" },
    { Icon: SiSass, color: "#CC6699", label: "Sass" },
    { Icon: SiJest, color: "#C21325", label: "Jest" },
    { Icon: SiStorybook, color: "#FF4785", label: "Storybook" },
    { Icon: SiWebpack, color: "#1C78C0", label: "Webpack" },
  ],
];

export default function SkillsAssemble() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = container.querySelectorAll(".skill-icon");

    // Reset any previous GSAP ScrollTriggers on this component (useful in HMR/dev)
    ScrollTrigger.getAll().forEach((t) => {
      if (t && t.trigger && container.contains(t.trigger)) t.kill();
    });

    // initial scattered positions with subtle z-depth
    icons.forEach((el, i) => {
      const x = gsap.utils.random(-320, 320);
      const y = gsap.utils.random(-220, 220);
      const r = gsap.utils.random(-40, 40);
      const s = gsap.utils.random(0.6, 0.9);
      const z = Math.floor(gsap.utils.random(0, 10));

      gsap.set(el, {
        x,
        y,
        rotate: r,
        scale: s,
        opacity: 0.25,
        zIndex: z,
      });
    });

    // Create a timeline that scrubs with scroll — more aesthetic pop and settle
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%", // when top of container hits 85% of viewport
        end: "top 20%",
        scrub: 0.7,
        // markers: true, // enable if you want to debug positions
      },
    });

    // Step 1: float toward center with subtle elasticity and stagger (bouncy assemble)
    tl.to(
      icons,
      {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1.02, // slight overshoot
        opacity: 0.95,
        duration: 1,
        ease: "power3.out",
        stagger: {
          amount: 0.9,
          from: "center",
        },
      },
      0
    );

    // Step 2: settle to final scale with small bounce (gives a tactile feel)
    tl.to(
      icons,
      {
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.6)",
        stagger: {
          amount: 0.6,
          from: "center",
        },
      },
      ">-0.2"
    );

    // subtle small tilt for depth (very small, keeps icons from looking too flat)
    tl.to(
      icons,
      {
        rotate: 0,
        duration: 0.6,
        ease: "sine.out",
        stagger: {
          each: 0.02,
          from: "center",
        },
      },
      "<"
    );

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t && t.trigger && container.contains(t.trigger)) t.kill();
      });
    };
  }, []);

  return (
    <section className="w-full flex justify-center mt-20 select-none px-4">
      <div
        ref={containerRef}
        className="max-w-6xl w-full flex flex-col gap-6 items-center"
        aria-hidden={false}
      >
        {/* Row 1 - 11 */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {rows[0].map(({ Icon, color, label }, idx) => (
            <button
              key={`r1-${idx}`}
              className="skill-icon flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl shadow-lg"
              style={{
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.06)",
                // keep background transparent so theme drives background
              }}
              title={label}
              aria-label={label}
              onClick={() => {}}
            >
              <Icon
                style={{
                  color,
                  width: "3rem",
                  height: "3rem",
                }}
              />
            </button>
          ))}
        </div>

        {/* Row 2 - 10 */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {rows[1].map(({ Icon, color, label }, idx) => (
            <button
              key={`r2-${idx}`}
              className="skill-icon flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl shadow-lg"
              style={{
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
              title={label}
              aria-label={label}
            >
              <Icon
                style={{
                  color,
                  width: "3rem",
                  height: "3rem",
                }}
              />
            </button>
          ))}
        </div>

        {/* Row 3 - 9 */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {rows[2].map(({ Icon, color, label }, idx) => (
            <button
              key={`r3-${idx}`}
              className="skill-icon flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl shadow-lg"
              style={{
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
              title={label}
              aria-label={label}
            >
              <Icon
                style={{
                  color,
                  width: "3rem",
                  height: "3rem",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Inline styles for hover/glow — you can move to your CSS/Tailwind config */}
      <style jsx>{`
        .skill-icon {
          transition: transform 180ms cubic-bezier(0.2, 0.9, 0.2, 1),
            box-shadow 180ms ease, background-color 180ms ease;
          will-change: transform, opacity;
        }
        .skill-icon:hover {
          transform: translateY(-6px) scale(1.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        /* small responsive scaling for tighter screens */
        @media (max-width: 420px) {
          .skill-icon {
            width: 3rem !important;
            height: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
