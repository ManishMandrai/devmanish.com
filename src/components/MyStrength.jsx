// MyStrength.jsx
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiGit,
  SiGithub,
  SiPostman,
  SiCloudinary,
  SiHostinger,
  SiStreamlit,
  SiCplusplus
} from "react-icons/si";
import { FiCopy } from "react-icons/fi";

import { FaLaptopCode, FaServer, FaHandshake, FaBolt } from "react-icons/fa";

export default function MyStrength() {
  // refs for the 3 marquee rows
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const timelinesRef = useRef([]);

  // skill lists with icons + brand colors
  // --- Row 1 (Frontend Core) ---
  const skillsRow1 = [
    { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
    { label: "CSS3", Icon: SiCss3, color: "#1572B6" },
    { label: "React.js", Icon: SiReact, color: "#61DAFB" },
    { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { label: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
    { label: "GSAP", Icon: SiGreensock, color: "#88CE02" },
  ];

  // --- Row 2 (Backend + DB) ---
  const skillsRow2 = [
    { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { label: "Express.js", Icon: SiExpress, color: "#000000" },
    { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { label: "Prisma", Icon: SiPrisma, color: "#6CC0FF" },
    { label: "Neon", Icon: SiPostgresql, color: "#336791" },
    { label: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { label: "Convex", Icon: SiVercel, color: "#000000" }, // closest icon
    { label: "JWT", Icon: FaServer, color: "#4A90E2" },
  ];

  // --- Row 3 (Dev Tools, Hosting & Others) ---
  const skillsRow3 = [
    { label: "Git", Icon: SiGit, color: "#F05032" },
    { label: "GitHub", Icon: SiGithub, color: "#181717" },
    { label: "Postman", Icon: SiPostman, color: "#FF6C37" },
    { label: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
    { label: "Vercel", Icon: SiVercel, color: "#000000" },
    { label: "Hostinger", Icon: SiHostinger, color: "#6747FF" },
    { label: "Stream", Icon: SiStreamlit, color: "#FF4B4B" }, // closest icon
    { label: "C++", Icon: SiCplusplus, color: "#00599C" },
  ];
const [copied, setCopied] = useState(false);

const handleCopy = () => {
  const email = "manishkumarmandrai@gmail.com";
  navigator.clipboard.writeText(email);

  setCopied(true);
  setTimeout(() => setCopied(false), 1200);
};


  const animateRow = (ref, direction = "ltr", speed = 40) => {
    const el = ref.current;
    if (!el) return;

    // Clear any existing animations
    gsap.killTweensOf(el);

    // Get the total width of one set of items
    const firstChild = el.firstElementChild;
    const totalWidth = firstChild ? firstChild.offsetWidth : 0;

    // Set initial position based on direction
    const startX = direction === "ltr" ? 0 : -totalWidth;
    const endX = direction === "ltr" ? -totalWidth : 0;

    // Set initial position
    gsap.set(el, { x: startX });

    // Create the animation with seamless infinite loop
    const tl = gsap.timeline({ repeat: -1 });

    // Animate to end position
    tl.to(el, {
      x: endX,
      duration: speed,
      ease: "none",
      // When the animation repeats, it will seamlessly continue
      // because we're not resetting the position
    });

    // Store timeline for cleanup
    timelinesRef.current.push(tl);
  };

  useEffect(() => {
    // Start animations after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      // Clear any existing timelines
      timelinesRef.current.forEach(tl => tl.kill());
      timelinesRef.current = [];

      // Animate rows with correct directions
      animateRow(r1, "ltr", 22); // Row 1 → Left to Right
      animateRow(r2, "rtl", 28); // Row 2 → Right to Left
      animateRow(r3, "ltr", 24); // Row 3 → Left to Right
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      // Kill all animations on cleanup
      timelinesRef.current.forEach(tl => tl.kill());
      gsap.killTweensOf([r1.current, r2.current, r3.current]);
    };
  }, []);

  // Single pill markup with icon (icon colored by brand color)
  const SkillPill = ({ item }) => {
    const { Icon, label, color } = item;
    return (
      <div
        className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border text-[12px] font-thin whitespace-nowrap"
        style={{
          borderColor: "currentColor",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <Icon style={{ color: color, minWidth: 18, minHeight: 18 }} />
        <span>{label}</span>
      </div>
    );
  };

  // Duplicate helper: render 3 copies for better seamless looping
  const DuplicateRow = ({ items, innerRef }) => (
    <div className="overflow-hidden w-full py-2">
      <div
        ref={innerRef}
        className="flex gap-4 items-center"
        style={{ width: "max-content" }}
      >
        {/* Render 3 copies for smoother continuous motion */}
        {[...Array(3)].map((_, copyIndex) => (
          <div key={copyIndex} className="flex gap-4">
            {items.map((it, i) => (
              <SkillPill key={`${copyIndex}-${i}-${it.label}`} item={it} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  // The rest of your component remains the same...
  return (
    <section className="w-full ">
      <div className="max-w-6xl mx-auto">
        {/* grid with items-stretch so both columns have equal height (right side determines height) */}
        <div className="grid grid-cols-1 md:grid-cols-[0.43fr_0.57fr] gap-4 items-stretch">
          {/* LEFT: Skill box (same total height as right) */}
          <div
            className="rounded-lg border p-6 md:p-8 relative overflow-hidden min-h-[600px] md:min-h-full"
            style={{ borderColor: "currentColor" }}
          >
            <h3 className="text-xl font-semibold mb-6 tracking-wide opacity-80">
              Tech Stack & Core Tools
            </h3>

            {/* top area: three marquee strips */}
            <div className="space-y-4">
              <DuplicateRow items={skillsRow1} innerRef={r1} />
              <DuplicateRow items={skillsRow2} innerRef={r2} />
              <DuplicateRow items={skillsRow3} innerRef={r3} />
            </div>
            <div className="mt-4 flex justify-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=ManishMandrai&theme=transparent&hide_border=true"
                alt="GitHub Streak"
                className="shadow-lg shadow-black/20 dark:shadow-white/5 rounded-lg"
              />
            </div>

            {/* subtle ambient radial behind (theme-adaptive) */}
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-[0.06]"
              style={{
                background:
                  "radial-gradient(circle, currentColor, transparent)",
              }}
            />
            <div className="mt-10 flex flex-col items-center gap-3 relative">
              {/* small toast */}
              {copied && (
                <div className="absolute -top-10 px-3 py-1 text-xs rounded-lg 
      bg-green-600 text-white shadow-md animate-fade-in">
                  Email copied!
                </div>
              )}

              {/* status line */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_3px_rgba(34,197,94,0.7)]"></span>
                <span className="tracking-tight">Available for exciting collaborations</span>
              </div>

              {/* copy button */}
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/10
      bg-white/60 dark:bg-white/50 backdrop-blur-md flex items-center gap-2
      text-sm text-[#777] dark:text-gray-100 shadow-sm
      hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]
      transition-all duration-300 active:scale-95"
              >
                Say Hello <FiCopy className="text-lg" />
              </button>
            </div>


          </div>

          {/* RIGHT: stacked cards (their total height will determine the grid row height) */}
          <div className="flex flex-col gap-4">
            {/* Frontend card */}
            <div className="rounded-lg border-1 backdrop-blur-md overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b ">
                <span className="w-3 h-3 rounded-full bg-[#FF605C]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD44]" />
                <span className="w-3 h-3 rounded-full bg-[#00CA4E]" />
                <span className="ml-3 flex items-center gap-2 font-medium">
                  <FaLaptopCode className="w-4 h-4" />
                  Frontend Engineering
                </span>
              </div>

              <div className="p-6 space-y-4 text-sm">
                <p>
                  Crafting clean, interactive, scalable interfaces using modern
                  component architecture.
                </p>

                <ul className="space-y-2">
                  {[
                    "Component-driven UI (React, Next.js)",
                    "Responsive layouts with real-world UX",
                    "SSR, routing & state management",
                    "Smooth animations & micro-interactions",
                  ].map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full mt-1 bg-gray-400"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Backend card */}
            <div className="rounded-lg border backdrop-blur-md overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b ">
                <span className="w-3 h-3 rounded-full bg-[#FF605C]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD44]" />
                <span className="w-3 h-3 rounded-full bg-[#00CA4E]" />
                <span className="ml-3 flex items-center gap-2 font-medium">
                  <FaServer className="w-6 h-6" />
                  Backend Systems
                </span>
              </div>

              <div className="p-6 space-y-4 text-sm">
                <p>
                  Designing durable server logic, APIs, and integrations that
                  scale with traffic and product needs.
                </p>

                <ul className="space-y-2">
                  {[
                    "REST APIs, auth & validation",
                    "Database modeling & optimization",
                    "Deployment-ready backend logic",
                    "Secure & reliable architecture",
                  ].map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full mt-1 bg-gray-400"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* bottom small cards (4 & 5) */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-lg border p-5 backdrop-blur-md  flex flex-col gap-2"
                style={{ borderColor: "currentColor" }}
              >
                <div className="flex items-center gap-3">
                  <FaHandshake className="text-xl" />
                  <div>
                    <p className="font-semibold">Let's work together</p>
                    <p className="text-sm opacity-80">
                      Available for freelance & full-time
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg border p-5 backdrop-blur-md  flex flex-col gap-2"
                style={{ borderColor: "currentColor" }}
              >
                <div className="flex items-center gap-3">
                  <FaBolt className="text-xl" />
                  <div>
                    <p className="font-semibold">Currently Building</p>
                    <p className="text-sm opacity-80">
                      A SaaS application improving workflow automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}