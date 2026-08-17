// MyStrength.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFigma,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiFastapi,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiJsonwebtokens,
    SiFirebase,
    SiTwilio,
    SiPuppeteer,
    SiGit,
    SiGithub,
    SiVercel,
    SiGooglegemini,
} from "react-icons/si";
import {
    FaLaptopCode,
    FaServer,
    FaHandshake,
    FaBolt,
    FaGithub,
    FaRobot,
    FaWhatsapp,
} from "react-icons/fa";

import { SiKotlin } from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";

// Tabbed "strengths" card content — one fixed-height card, three switchable panels
const STRENGTH_TABS = [
    {
        key: "frontend",
        label: "Frontend",
        Icon: FaLaptopCode,
        intro:
            "Building fast, polished UI with clean architecture and delightful user experience.",
        bullets: [
            "Component-driven builds in React & Next.js, styled with Tailwind",
            "Custom animations & micro-interactions with GSAP",
            "Responsive, real-world layouts — not just desktop-first designs",
            "Dark/light theming with persisted user preference",
            "Performance-first: lazy loading, code-splitting, Lighthouse-driven fixes",
        ],
    },
    {
        key: "backend",
        label: "Backend",
        Icon: FaServer,
        intro:
            "Creating reliable backend logic, APIs, and DBMS designed to scale gracefully.",
        bullets: [
            "REST APIs with clean validation & predictable error handling",
            "Schema design & query optimization with Prisma and PostgreSQL/MongoDB",
            "Auth flows built on JWT — sessions, tokens, secure data flow",
            "Deployment-ready services shipped and maintained on Docker/Vercel",
            "Designing data models that scale instead of duct-taping fixes later",
        ],
    },
    {
        key: "ai",
        label: "AI & Automation",
        Icon: FaRobot,
        intro:
            "Integrating Large Language Models and automation into real products, not just demos.",
        bullets: [
            "Built a WhatsApp AI agent with Gemini — real conversation logic, not a wrapper",
            "LLM-powered agents & pipelines using Groq and Gemini AI",
            "Prompt engineering tuned for structured, reliable AI outputs",
            "Workflow automation & bots using Puppeteer",
            "AI tools: resume parsing, chat agents, and pipeline builders",
        ],
    },
];

export default function MyStrength() {
    // refs for the 4 marquee rows
    const r1 = useRef(null);
    const r2 = useRef(null);
    const r3 = useRef(null);
    const r4 = useRef(null);
    const timelinesRef = useRef([]);

    // Strength card: which tab is active + swipe tracking (mobile)
    const [activeTab, setActiveTab] = useState(0);
    const touchStartX = useRef(null);
    const panelRef = useRef(null);

    const [typedIntro, setTypedIntro] = useState("");

    useEffect(() => {
        const fullText = STRENGTH_TABS[activeTab].intro;
        setTypedIntro("");
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setTypedIntro(fullText.slice(0, i));
            if (i >= fullText.length) clearInterval(interval);
        }, 20);

        return () => clearInterval(interval);
    }, [activeTab]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        const SWIPE_THRESHOLD = 45;

        if (diff > SWIPE_THRESHOLD) {
            // swipe right → previous tab
            setActiveTab((prev) => (prev === 0 ? STRENGTH_TABS.length - 1 : prev - 1));
        } else if (diff < -SWIPE_THRESHOLD) {
            // swipe left → next tab
            setActiveTab((prev) => (prev === STRENGTH_TABS.length - 1 ? 0 : prev + 1));
        }
        touchStartX.current = null;
    };

    // Fade the panel content in whenever the active tab changes
    useEffect(() => {
        if (!panelRef.current) return;
        gsap.fromTo(
            panelRef.current,
            { opacity: 0, y: 6 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
        );
    }, [activeTab]);


    const [lastCommit, setLastCommit] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/ManishMandrai/events/public")
            .then((res) => res.json())
            .then((data) => {
                const pushEvent = Array.isArray(data)
                    ? data.find((e) => e.type === "PushEvent")
                    : null;
                if (pushEvent) setLastCommit(new Date(pushEvent.created_at));
            })
            .catch(() => setLastCommit(null));
    }, []);

    function timeAgo(date) {
        if (!date) return null;
        const seconds = Math.floor((new Date() - date) / 1000);
        const intervals = [
            { label: "year", secs: 31536000 },
            { label: "month", secs: 2592000 },
            { label: "day", secs: 86400 },
            { label: "hour", secs: 3600 },
            { label: "minute", secs: 60 },
        ];
        for (const i of intervals) {
            const count = Math.floor(seconds / i.secs);
            if (count >= 1) return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
        }
        return "just now";
    }

    // skill lists with icons + brand colors — pulled from actual resume stack
    // Row 1 — Languages
    const skillsRow1 = [
        { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { label: "Python", Icon: SiPython, color: "#3776AB" },
    ];

    // Row 2 — Frontend & Design
    const skillsRow2 = [
        { label: "React", Icon: SiReact, color: "#61DAFB" },
        { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
        { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
        { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
        { label: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
    ];

    // Row 3 — Backend & Database
    const skillsRow3 = [
        { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { label: "Express", Icon: SiExpress, color: "#000000" },
        { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
        { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
        { label: "Prisma", Icon: SiPrisma, color: "#6CC0FF" },
    ];

    // Row 4 — AI, Auth & Tooling
    const skillsRow4 = [
        { label: "Gemini AI", Icon: SiGooglegemini, color: "#4285F4" },
        { label: "Groq", Icon: FaBolt, color: "#F55036" },
        { label: "JWT", Icon: SiJsonwebtokens, color: "#000000" },
        { label: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
        { label: "Twilio", Icon: SiTwilio, color: "#F22F46" },
        { label: "Puppeteer", Icon: SiPuppeteer, color: "#40B5A4" },
        { label: "Git", Icon: SiGit, color: "#F05032" },
        { label: "GitHub", Icon: SiGithub, color: "#181717" },
        { label: "Vercel", Icon: SiVercel, color: "#000000" },
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
            animateRow(r4, "rtl", 30); // Row 4 → Right to Left
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            // Kill all animations on cleanup
            timelinesRef.current.forEach((tl) => tl.kill());
            gsap.killTweensOf([r1.current, r2.current, r3.current, r4.current]);
        };
    }, []);

    // Single pill markup with icon (icon colored by brand color)
    const SkillPill = ({ item }) => {
        const { Icon, label, color } = item;
        return (
            <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium whitespace-nowrap"
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
                        <h3 className="text-xl font-semibold mb-4 tracking-wide opacity-80">
                            Tech Stack & Core Tools
                        </h3>

                        {/* top area: four marquee strips */}
                        <div className="space-y-1  mb-2">
                            <DuplicateRow items={skillsRow1} innerRef={r1} />
                            <DuplicateRow items={skillsRow2} innerRef={r2} />
                            <DuplicateRow items={skillsRow3} innerRef={r3} />
                            <DuplicateRow items={skillsRow4} innerRef={r4} />
                        </div>

                        {lastCommit && (
                            <div className="mt-4 flex items-center  gap-2 text-xs text-gray-400">
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span>Last shipped: {timeAgo(lastCommit)}</span>
                            </div>
                        )}

                        <div className="mt-2 flex justify-center">
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=ManishMandrai&theme=transparent&hide_border=true"
                                alt="GitHub Streak"
                                className=" rounded-lg"
                            />
                        </div>



                        <div className="mt-4 flex flex-col items-center gap-3">
                            {/* aesthetic one-liner */}
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                                <span className="tracking-tight">
                                    Open for collaborations & cool ideas
                                </span>
                            </div>

                            {/* premium button */}
                            <a
                                href="mailto:hello@manishai.xyz"
                                className="px-4 py-2 rounded border 
             text-sm 
             shadow-sm hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]
             transition-all duration-300"
                            >
                                Let's Connect →
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: fixed-height tabbed strengths card + small cards below */}
                    <div className="flex flex-col gap-4">
                        {/* Frontend / Backend / AI & Automation — one card, switchable tabs.
                Height never grows no matter how many categories we add later. */}
                        <div
                            className=" overflow-hidden   rounded
  border border-[var(--btn-border)]
  bg-[var(--btn-bg)]
  backdrop-blur-md
  text-[var(--text-primary)]
  shadow-sm hover:shadow-md
  transition-all"
                        >
                            {/* Window chrome dots — unchanged */}
                            <div className="flex items-center gap-2 px-4 pt-3">
                                <span className="w-3 h-3 rounded-full bg-[#FF605C]" />
                                <span className="w-3 h-3 rounded-full bg-[#FFBD44]" />
                                <span className="w-3 h-3 rounded-full bg-[#00CA4E]" />
                            </div>

                            {/* Tab bar — click to switch, same row style as a browser tab strip */}
                            <div 
                            className="flex items-center gap-1 px-3 pt-2 border-b border-[var(--btn-border)] overflow-x-auto scrollbar-hide">
                                {STRENGTH_TABS.map((tab, i) => {
                                    const Icon = tab.Icon;
                                    const isActive = i === activeTab;
                                    return (
                                        <button
                                            key={tab.key}
                                            type="button"
                                            onClick={() => setActiveTab(i)}
                                            className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold whitespace-nowrap rounded-t transition-all border-b-[3px] ${isActive
                                                    ? "border-indigo-500 text-[var(--text-primary)]"
                                                    : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                                }`}
                                        >
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Active panel — swipeable on touch devices, fixed min-height so it never jumps */}
                            <div
                                ref={panelRef}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                                className="p-4 space-y-4 text-sm min-h-[220px]"
                            >
                                {/* <p>{STRENGTH_TABS[activeTab].intro}</p> */}
                                <p>
                                    {typedIntro}
                                    <span className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle animate-pulse" />
                                </p>
                                <ul className="space-y-2">
                                    {STRENGTH_TABS[activeTab].bullets.map((b, i) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <span className="w-2 h-2 rounded-full mt-1 bg-gray-400"></span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* mobile hint, fades away as a subtle affordance */}
                                <p className="sm:hidden text-xs opacity-50 pt-1">
                                    Swipe or tap a tab to switch →
                                </p>
                            </div>
                        </div>

                        {/* GitHub Activity card — contribution heatmap instead of the narrow streak stats */}
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
                                    <FaGithub className="w-6 h-6" />
                                    <span className="text-xl font-bold">GitHub Activity</span>
                                </span>
                            </div>

                            <div className="p-4 flex justify-center overflow-x-auto">
                                <GitHubCalendar
                                    username="ManishMandrai"
                                    colorScheme="dark"
                                    theme={{
                                        dark: ["#1a1a1a", "#39406b", "#4c56a0", "#6366f1", "#818cf8"],
                                        light: ["#f0f0f0", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1"],
                                    }}
                                    fontSize={12}
                                    blockSize={8}
                                    blockMargin={3}
                                />
                            </div>
                        </div>

                        {/* bottom small cards (4 & 5) — unchanged */}
                        <div className="grid grid-cols-2 gap-4 ">
                            <a
                                href="https://wa.me/918435428491?text=Hi%20Manish%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-4 px-3 flex flex-col items-center text-center gap-2
             sm:flex-row sm:items-center sm:text-left
             rounded
             border border-[var(--btn-border)]
             bg-[var(--btn-bg)]
             backdrop-blur-md
             text-[var(--text-primary)]
             shadow-sm hover:shadow-md
             transition-all cursor-pointer"
                                style={{ borderColor: "currentColor" }}
                            >
                                <FaWhatsapp className="text-5xl sm:text-6xl text-[#25D366]" />
                                <div>
                                    <span className="font-bold block">Chat on WhatsApp</span>
                                    <p className="text-sm opacity-80">
                                        Skip the email — message directly, I reply fast.
                                    </p>
                                </div>
                            </a>
                            <div
                            >
                                <a
                                    href="https://developer.android.com/kotlin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-4 px-3 flex flex-col items-center text-center gap-2
             sm:flex-row sm:items-center sm:text-left
             rounded
             border border-[var(--btn-border)]
             bg-[var(--btn-bg)]
             backdrop-blur-md
             text-[var(--text-primary)]
             shadow-sm hover:shadow-md
             transition-all cursor-pointer"
                                    style={{ borderColor: "currentColor" }}
                                >
                                    <SiKotlin className="text-5xl sm:text-6xl text-[#7F52FF]" />
                                    <div>
                                        <span className="font-bold block">Exploring Kotlin</span>
                                        <p className="text-sm opacity-80">
                                            Learning Android dev with Kotlin — early days.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}