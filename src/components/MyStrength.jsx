// MyStrength.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  SiTailwindcss,
  SiFigma,
  SiNotion,
  SiMarkdown,
  SiNextdotjs,
  SiPrisma,
  SiSupabase,
  SiGnubash,
  SiGhost,
  SiGithub,
  SiDocker,
  SiPython,
  SiCloudflare,
} from "react-icons/si";
import {
  FaLaptopCode,
  FaServer,
  FaHandshake,
  FaBolt,
  FaGithub,
} from "react-icons/fa";

export default function MyStrength() {
  // refs for the 3 marquee rows
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const timelinesRef = useRef([]);

  // skill lists with icons + brand colors
  // Row 1
  const skillsRow1 = [
    { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
    { label: "Notion", Icon: SiNotion, color: "#000000" },
    { label: "Markdown", Icon: SiMarkdown, color: "#000000" },
    { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  ];

  // Row 2
  const skillsRow2 = [
    { label: "Prisma", Icon: SiPrisma, color: "#6CC0FF" },
    { label: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
    { label: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
  ];

  // Row 3
  const skillsRow3 = [
    { label: "Bash", Icon: SiGnubash, color: "#4EAA25" },
    { label: "Ghost", Icon: SiGhost, color: "#000000" },
    { label: "GitHub", Icon: SiGithub, color: "#181717" },
    { label: "Docker", Icon: SiDocker, color: "#2496ED" },
    { label: "Python", Icon: SiPython, color: "#3776AB" },
  ];

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
      timelinesRef.current.forEach((tl) => tl.kill());
      timelinesRef.current = [];

      // Animate rows with correct directions
      animateRow(r1, "ltr", 22); // Row 1 → Left to Right
      animateRow(r2, "rtl", 28); // Row 2 → Right to Left
      animateRow(r3, "ltr", 24); // Row 3 → Left to Right
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      // Kill all animations on cleanup
      timelinesRef.current.forEach((tl) => tl.kill());
      gsap.killTweensOf([r1.current, r2.current, r3.current]);
    };
  }, []);

  // Single pill markup with icon (icon colored by brand color)
  const SkillPill = ({ item }) => {
    const { Icon, label, color } = item;
    return (
      <div
        className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border text-sm font-medium whitespace-nowrap"
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
    <section className="w-full p-4 sm:p-0 ">
      <div className="max-w-6xl mx-auto">
        {/* grid with items-stretch so both columns have equal height (right side determines height) */}
        <div className="grid grid-cols-1 md:grid-cols-[0.43fr_0.57fr] gap-4 items-stretch">
          {/* LEFT: Skill box (same total height as right) */}
          <div
            className="  p-6 md:p-8 relative overflow-hidden min-h-[600px] md:min-h-ful
              rounded
  border border-[var(--btn-border)]
  bg-[var(--btn-bg)]
  backdrop-blur-md
  text-[var(--text-primary)]
  shadow-sm hover:shadow-md
  transition-all"
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

            <div className="mt-12 flex justify-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=ManishMandrai&theme=transparent&hide_border=true"
                alt="GitHub Streak"
                className=" rounded-lg"
              />
            </div>

            <div className="mt-12 flex flex-col items-center gap-3">
              {/* aesthetic one-liner */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                <span className="tracking-tight">
                  Open for collaborations & cool ideas
                </span>
              </div>

              {/* premium button */}
              <a
                href="mailto:manishkumarmandrai@gmail.com"
                className="px-4 py-2 rounded border 
               
               text-sm 
               shadow-sm hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]
               transition-all duration-300"
              >
                Let's Connect →
              </a>
            </div>
          </div>

          {/* RIGHT: stacked cards (their total height will determine the grid row height) */}
          <div className="flex flex-col gap-4">
            {/* Frontend card */}
            <div
              className=" overflow-hidden   rounded
  border border-[var(--btn-border)]
  bg-[var(--btn-bg)]
  backdrop-blur-md
  text-[var(--text-primary)]
  shadow-sm hover:shadow-md
  transition-all"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b ">
                <span className="w-3 h-3 rounded-full bg-[#FF605C]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD44]" />
                <span className="w-3 h-3 rounded-full bg-[#00CA4E]" />
                <span className="ml-3 flex items-center gap-2 font-medium">
                  <FaLaptopCode className="w-8 h-8" />
                  <span className="text-xl font-bold">Frontend</span>
                </span>
              </div>

              <div className="p-4 space-y-4 text-sm">
                <p>
                  Building fast, polished interfaces with clean architecture and
                  delightful user experience.
                </p>

                <ul className="space-y-2">
                  {[
                    "Modern UI engineering with React & Next.js",
                    "Responsive layouts with real-world usability",
                    "State, routing & performance optimization",
                    "Micro-interactions & smooth animations",
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
            <div
              className="rounded  overflow-hidden   
                    border border-[var(--btn-border)]
                    bg-[var(--btn-bg)]
                    backdrop-blur-md
                    text-[var(--text-primary)]
                    shadow-sm hover:shadow-md
                    transition-all"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b ">
                <span className="w-3 h-3 rounded-full bg-[#FF605C]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD44]" />
                <span className="w-3 h-3 rounded-full bg-[#00CA4E]" />
                <span className="ml-3 flex items-center gap-2 font-medium">
                  <FaServer className="w-6 h-6" />
                  <span className="text-xl font-bold">Backend Systems</span>
                </span>
              </div>

              <div className="p-4 space-y-4 text-sm">
                <p>
                  Creating reliable backend logic, APIs, and data models
                  designed to scale gracefully.
                </p>
                <ul className="space-y-2">
                  {[
                    "REST APIs with clean validation layers",
                    "Database modeling & query optimization",
                    "Auth, sessions & secure data flow",
                    "Deployment-ready, maintainable services",
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
            <div className="grid grid-cols-2 gap-4 ">
              <div
                className="py-4 px-3 flex flex-col gap-2   rounded
                    border border-[var(--btn-border)]
                    bg-[var(--btn-bg)]
                    backdrop-blur-md
                    text-[var(--text-primary)]
                    shadow-sm hover:shadow-md
                    transition-all"
                style={{ borderColor: "currentColor" }}
              >
                <div className="flex items-center gap-3">
                  <FaHandshake className="text-7xl hidden sm:block " />
                  <div>
                    <FaHandshake className="text-5xl sm:hidden" />

                    <span className=" font-bold">Open for Collabs </span>
                    <p className="text-sm opacity-80">
                      Open to collaborating on meaningful, high-impact products.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className=" py-4 px-3 backdrop-blur-md  flex flex-col gap-2   rounded 
                    border border-[var(--btn-border)]
                    bg-[var(--btn-bg)]
                    text-[var(--text-primary)]
                    shadow-sm hover:shadow-md
                    transition-all"
                style={{ borderColor: "currentColor" }}
              >
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/ManishMandrai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-5xl hidden sm:block cursor-pointer" />
                  </a>
                  <div>
                    {/* { href: "https://github.com/ManishMandrai", icon: FaGithub, color: "#181717", label: "GitHub" }, */}
                    <a
                      href="https://github.com/ManishMandrai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-4xl mt-1 sm:mt-0 sm:hidden cursor-pointer" />
                    </a>

                    <span className="font-bold mt-3 sm:mt-0 ">
                      Work in Progress{" "}
                    </span>
                    <p className="text-sm opacity-80">
                      Currently crafting a tool click to explore what I’m
                      working on.
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
