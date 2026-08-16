import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTypescript,
    SiNextdotjs,
} from "react-icons/si";
import Socialicons from "./Socialicons";
import TextChange from "./TextChange";
import ThreeLaptop from "./ThreeLaptop";
import { FiBriefcase, FiClock, FiChevronDown } from "react-icons/fi";
import { DownloadIcon, ChatIcon } from "@heroicons/react/outline";
import projectData from "../data/projectData";

// Earliest professional start date (MyAppBroker freelance, Jan 2025).
// Experience badge is computed from this so it never goes stale again.
const CAREER_START = new Date("2025-01-15");

function getYearsOfExperience() {
    const now = new Date();
    const months =
        (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
        (now.getMonth() - CAREER_START.getMonth());
    const years = Math.max(1, Math.floor(months / 12));
    return years;
}

const RESUME_OPTIONS = [
    { label: "General / Full Stack", file: "/Manish_Kumar_Full_Stack_Developer.pdf" },
    { label: "GenAI Developer", file: "/Manish_Kumar_GenAI _Developer.pdf" },
    { label: "Frontend Developer", file: "/Manish_Kumar_Frontend_Developer.pdf" },
    { label: "MERN Stack Developer", file: "/Manish_Kumar_MERN_Stack_Developer.pdf" },
];

const SKILL_STRIP = [
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiReact, label: "React" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiExpress, label: "Express" },
    //   { icon: SiMongodb, label: "MongoDB" },
];

export default function Hero() {
    const headingRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const resumeMenuRef = useRef(null);

    const [resumeOpen, setResumeOpen] = useState(false);

    const name = "MANISH".split("");
    const yearsExp = getYearsOfExperience();
    const projectCount = projectData.length;

    useEffect(() => {
        // Character entrance
        const chars = headingRef.current.querySelectorAll(".char");

        gsap.set(chars, {
            y: 80,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.85,
        });

        gsap.to(chars, {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "back.out(1.6)",
            duration: 0.8,
            stagger: 0.07,
        });

        // Left + right entrance
        gsap.fromTo(
            leftRef.current,
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.15 }
        );
        gsap.fromTo(
            rightRef.current,
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.25 }
        );

        // Description fade word-by-word
        gsap.to(".word", {
            opacity: 1,
            y: -4,
            duration: 0.7,
            stagger: 0.025,
            ease: "power2.out",
            delay: 1.15,
        });

        // Job title subtle fade
        gsap.from(".roleText", {
            opacity: 0,
            x: -20,
            duration: 0.8,
            ease: "power2.out",
            delay: 1,
        });

        // Skill strip fade-in
        gsap.fromTo(
            ".skillChip",
            { opacity: 0, y: 8 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.06,
                ease: "power2.out",
                delay: 1.3,
            }
        );

        // Floating 3D object
        gsap.to(rightRef.current, {
            y: -12,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "ease.inOut",
        });
    }, []);

    // Close resume dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (resumeMenuRef.current && !resumeMenuRef.current.contains(e.target)) {
                setResumeOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const Badges = () => (
        <div className="flex flex-wrap gap-4 sm:gap-8 ">
            {/* PROJECTS BADGE */}
            <div
                className="
        flex flex-col items-center justify-center 
        px-8 py-4
        border-1 rounded
        text-center
          border-[var(--btn-border)]
        bg-[var(--btn-bg)]
        backdrop-blur-md
        text-[var(--text-primary)]
        shadow-sm hover:shadow-md
        transition-all
      "
            >
                {/* Icon (theme adaptive) */}
                <span className="text-2xl ">
                    <FiBriefcase className="text-2xl opacity-80" />
                </span>

                {/* Text */}
                <div className="mt-1 leading-tight">
                    <p className="text-sm opacity-80">{projectCount}+ Projects</p>
                </div>
            </div>

            {/* EXPERIENCE BADGE */}
            <div
                className="
        flex flex-col items-center justify-center rounded py-4
        border-1
        px-8
        text-center    border-[var(--btn-border)]
  bg-[var(--btn-bg)]
  backdrop-blur-md
  text-[var(--text-primary)]
  shadow-sm hover:shadow-md
  transition-all
      "
            >
                <span className="text-2xl opacity-80">
                    <FiClock className="text-2xl opacity-80" />
                </span>

                <div className="mt-1 leading-tight">
                    <p className="text-sm opacity-80">{yearsExp}+ Years Exp.</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="min-h-screen  mt-20 sm:mt-2 flex items-center">
            <style>{`
        .char {
          display: inline-block;
          color: currentColor; /* Theme adaptive */
        }
      `}</style>

            <div className="container mx-auto max-w-6xl p-4 mt-8 sm:p-0 sm:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* LEFT COLUMN */}
                    <div ref={leftRef} className="flex flex-col gap-6">
                        {/* Greeting + Name */}
                        <div className="flex items-center space-x-4">
                            <div>
                                <p className="font-semibold text-lg">Hello, I am</p>

                                <span
                                    ref={headingRef}
                                    className="text-[56px] sm:text-7xl md:text-8xl font-semibold leading-none ml-[-3px] sm:ml-[-5px] overflow-hidden"
                                    style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                    {name.map((c, i) => (
                                        <span key={i} className="char">
                                            {c}
                                        </span>
                                    ))}
                                </span>

                                <div className="mt-2 text-2xl sm:text-3xl font-bold ">
                                    I'm a <TextChange />
                                </div>
                            </div>
                        </div>

                        {/* Availability status */}
                        <div className="flex items-center gap-2 -mt-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <p className="text-sm font-semibold opacity-80">
                                Open to work & freelance projects
                            </p>
                        </div>

                        {/* Description */}
                        <div className="mt-2 max-w-xl">
                            <p
                                className="font-semibold text-lg leading-relaxed "
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "Building products end-to-end — from database to deployment to the person actually using it."
                                            .split(" ")
                                            .map(
                                                (word) =>
                                                    `<span class='word inline-block opacity-0'>${word}</span>`
                                            )
                                            .join(" "),
                                }}
                            />
                        </div>

                        {/* Skill strip — quick-skim tech row, distinct from the detailed Tech Stack section below */}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 max-w-xl">
                            {SKILL_STRIP.map(({ icon: Icon, label }) => (
                                <span
                                    key={label}
                                    className="skillChip flex items-center gap-1.5 text-[var(--text-secondary)] opacity-0 hover:opacity-100 hover:text-[var(--text-primary)] transition-all"
                                    title={label}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="text-xs font-medium">{label}</span>
                                </span>
                            ))}
                        </div>

                        {/* CTAs: Resume (with variant picker) + Let's Talk */}
                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <div className="relative" ref={resumeMenuRef}>
                                <button
                                    type="button"
                                    onClick={() => setResumeOpen((prev) => !prev)}
                                    aria-haspopup="true"
                                    aria-expanded={resumeOpen}
                                    className="
                    px-6 py-3 text-xl font-bold rounded flex items-center gap-3
                    border transition-all
                    bg-[var(--btn-bg)]
                    border-[var(--btn-border)]
                    text-[var(--text-primary)]
                    shadow-sm hover:shadow-md 
                    hover:bg-[var(--surface)]
                    active:scale-95
                      "
                                >
                                    Resume
                                    <FiChevronDown
                                        className={`h-5 w-5 transition-transform ${resumeOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                    {/* <DownloadIcon className="h-8 w-8 text-[var(--accent)]" /> */}
                                </button>

                                {resumeOpen && (
                                    <div
                                        className="
                      absolute left-0 mt-2 w-64 rounded overflow-hidden z-20
                      border border-[var(--btn-border)]
                      bg-[var(--surface)]
                      backdrop-blur-md
                      shadow-md
                    "
                                    >
                                        {RESUME_OPTIONS.map(({ label, file }) => (
                                            <a
                                                key={file}
                                                href={file}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setResumeOpen(false)}
                                                className="
                          block px-4 py-3 text-sm font-semibold
                          text-[var(--text-primary)]
                          hover:bg-[var(--btn-bg)]
                          transition-colors
                        "
                                            >
                                                {label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/hireme"
                                className="
                    px-6 py-3 text-xl font-bold rounded flex items-center gap-3
                    border transition-all
                    bg-[var(--accent)]
                    border-[var(--btn-border)]
                    text-white
                    shadow-sm hover:shadow-md
                    active:scale-95
                      "
                            >
                                Let's Talk
                                <ChatIcon className="h-7 w-7" />
                            </Link>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center sm:justify-start">
                            <Socialicons />
                        </div>
                        <div className="hidden md:flex mt-3 ">
                            <Badges />
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div
                        ref={rightRef}
                        className="flex justify-center items-center relative"
                    >
                        <div className="w-full flex justify-center items-center transition-transform hover:-translate-y-4">
                            <ThreeLaptop />
                        </div>
                    </div>
                    <div className="flex md:hidden mt-6 align-center justify-center">
                        <Badges />
                    </div>
                    {/* STATS — mobile below laptop, desktop below left section */}
                </div>
            </div>
        </section>
    );
}