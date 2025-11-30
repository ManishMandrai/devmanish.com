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
  //   SiAmazonaws,
  SiCloudflare,
} from "react-icons/si";
import { FaLaptopCode, FaServer, FaHandshake, FaBolt } from "react-icons/fa";
import useGitHubStats from "../hooks/useGitHubStats";

export default function MyStrength() {

  // refs for the 3 marquee rows
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);

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

    const totalWidth = el.scrollWidth / 2; // width of one copy

    gsap.killTweensOf(el);

    gsap.to(el, {
      x: direction === "ltr" ? -totalWidth : totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(el, { x: 0 }); // reset CLEANLY each loop
      },
    });
  };
  useEffect(() => {
    animateRow(r1, "ltr", 22); // Row 1 → Left to Right
    animateRow(r2, "rtl", 28); // Row 2 → Right to Left
    animateRow(r3, "ltr", 24); // Row 3 → Left to Right

    return () => {
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

  // Duplicate helper: render 2 copies to allow continuous motion
  const DuplicateRow = ({ items, innerRef }) => (
    <div className="overflow-hidden w-full py-2">
      <div
        ref={innerRef}
        className="flex gap-4 items-center"
        style={{ width: "max-content" }}
      >
        {/* first copy */}
        <div className="flex gap-4">
          {items.map((it, i) => (
            <SkillPill key={`a-${i}-${it.label}`} item={it} />
          ))}
        </div>

        {/* second copy (duplicate) */}
        <div className="flex gap-4">
          {items.map((it, i) => (
            <SkillPill key={`b-${i}-${it.label}`} item={it} />
          ))}
        </div>
      </div>
    </div>
  );

  

  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 opacity-90">
  My Engineering Strengths
</h2>

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

            {/* intentionally leave bottom area empty (per your request) */}
            <div className="mt-20 flex justify-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=ManishMandrai&theme=transparent&hide_border=true"
                alt="GitHub Streak"
                className="shadow-lg shadow-black/20 dark:shadow-white/5 rounded-lg"
                // className="w-full max-w-lg"
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
