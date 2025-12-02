import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import Socialicons from "./Socialicons";
import TextChange from "./TextChange";
import ThreeLaptop from "./ThreeLaptop";
import { FiBriefcase, FiClock } from "react-icons/fi";
import { DownloadIcon } from "@heroicons/react/outline";

export default function Hero() {
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const name = "MANISH".split("");

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

    // Floating 3D object
    gsap.to(rightRef.current, {
      y: -12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "ease.inOut",
    });
  }, []);
  const Badges = () => (
    <div className="flex flex-wrap gap-4 sm:gap-8 ">
      {/* FREELANCE BADGE */}
      <div
        className="
        flex flex-col items-center justify-center 
        px-11 py-4
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
          <p className="text-sm opacity-80">3+ Dones</p>
        </div>
      </div>

      {/* EXPERIENCE BADGE */}
      <div
        className="
        flex flex-col items-center justify-center rounded py-4
        border-1
        px-10
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
          <p className="text-base font-semibold"></p>
          <p className="text-sm opacity-80">1y Dev Grind</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen mt-16 sm:mt-8 flex items-center">
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
                  className="text-[92px] sm:text-9xl md:text-10xl font-semibold leading-none ml-[-10px] overflow-hidden"
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

            {/* Description */}
            <div className="mt-2 max-w-xl">
              <p
                className="font-semibold text-lg leading-relaxed "
                dangerouslySetInnerHTML={{
                  __html:
                    "Engineering high-performance applications with clean architecture, strong foundations, and resilience baked into every layer"
                      .split(" ")
                      .map(
                        (word) =>
                          `<span class='word inline-block opacity-0'>${word}</span>`
                      )
                      .join(" "),
                }}
              />
            </div>
            <div className="pt-2">
              <a
                href="/Manish_Kumar_Resume.pdf"
                download
                className="
                    px-6 py-3 text-xl font-bold max-w-[180px] rounded flex items-center gap-3
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
                <DownloadIcon className="h-8 w-8 text-[var(--accent)]" />
              </a>
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
