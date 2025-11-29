import React from "react";
import { motion } from "framer-motion";
import Img from "../assets/myappbroker.png";
import matural from "../assets/matural.png";

const experienceData = [
  {
    id: 1,
    company: "MY APP BROKER",
    url: "https://www.myappbroker.com/",
    type: "Freelancer – Full Stack Developer",
    dates: "Jan - Feb 2025",
    description:
      "Built the MyAppBroker platform using React, Firebase and Node — realtime features, clean architecture and performance optimisations.",
    tags: ["React", "JavaScript", "Firebase", "Tailwind"],
    image: Img,
  },
  {
    id: 2,
    company: "Matural.shop",
    url: "https://matural.shop/",
    type: "Founder & Full-Stack Developer",
    dates: "Mar - May 2025",
    description:
      "Launched a production MERN e-commerce with payments, order tracking and real customers. End-to-end ownership from UI to infra.",
    tags: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
    image: matural,
  },
  {
    id: 3,
    company: "BoomXMedia",
    url: "https://www.boomxmedia.com/",
    type: "Frontend Developer",
    dates: "June 2025 - Present",
    description:
      "Shipping responsive, SEO-friendly sites with React & Next. Improved CWV and built email templates for campaigns.",
    tags: ["React", "Next.js", "Tailwind"],
    image:
      "https://res.cloudinary.com/dqky5tir2/image/upload/v1759053289/boomxmedia_2_dwgw9j.jpg",
  },
];

// Motion
const itemAnim = (side = "left") => ({
  initial: { opacity: 0, x: side === "left" ? -140 : 140, y: 20 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.75, ease: "easeOut" },
});

const connectorAnim = (side = "left") => ({
  initial: { opacity: 0, x: side === "left" ? -120 : 120, scaleX: 0 },
  whileInView: { opacity: 1, x: 0, scaleX: 1 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.85, ease: "circOut" },
});

export default function Experience() {
  const items = [...experienceData].slice().reverse();

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-left text-2xl md:text-3xl font-bold mb-16">Work Experience</h2>

        <div className="relative">
          {/* Vertical center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-current" />

          <div className="flex flex-col">
            {items.map((exp, index) => {
              const companyLeft = index % 2 === 0;

              return (
                <div key={exp.id} className="relative mb-8 md:mb-40">
                  {/* Center dot */}
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-current" />
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-start">
                    
                    {/* LEFT column */}
                    <div className="md:flex md:justify-end relative">
                      {/* Branch LEFT */}
                      {companyLeft && (
                        <motion.div
                          {...connectorAnim("left")}
                          className="hidden md:block absolute right-1/2 top-3 h-[3px] w-[40%] bg-current/10 origin-right"
                        />
                      )}

                      {/* Details LEFT (when company is RIGHT) */}
                      {!companyLeft && (
                        <motion.div {...itemAnim("left")} className="md:max-w-[56ch] text-right">
                          <p className="mb-2 leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-3 justify-end">
                            {exp.tags.map((t, i) => (
                              <span key={i} className="text-xs px-3 py-1 rounded border border-current/10">
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Company LEFT */}
                      {companyLeft && (
                        <motion.div {...itemAnim("left")} className="md:max-w-[46ch] text-right pr-6">
                          <a href={exp.url} className="font-semibold text-lg hover:underline" target="_blank" rel="noreferrer">
                            {exp.company}
                          </a>
                          <div className="text-sm opacity-80">{exp.type}</div>
                          <div className="text-xs opacity-60">{exp.dates}</div>
                        </motion.div>
                      )}
                    </div>

                    {/* RIGHT column */}
                    <div className="md:flex md:justify-start relative">

                      {/* Branch RIGHT */}
                      {!companyLeft && (
                        <motion.div
                          {...connectorAnim("right")}
                          className="hidden md:block absolute left-1/2 top-3 h-[3px] w-[40%] bg-current/10 origin-left"
                        />
                      )}

                      {/* Details RIGHT */}
                      {companyLeft && (
                        <motion.div {...itemAnim("right")} className="md:max-w-[56ch] text-left pl-6">
                          <p className="mb-2 leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-3">
                            {exp.tags.map((t, i) => (
                              <span key={i} className="text-xs px-3 py-1 rounded border border-current/10">
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Company RIGHT */}
                      {!companyLeft && (
                        <motion.div {...itemAnim("right")} className="md:max-w-[46ch] text-left pl-6">
                          <a href={exp.url} className="font-semibold text-lg hover:underline" target="_blank" rel="noreferrer">
                            {exp.company}
                          </a>
                          <div className="text-sm opacity-80">{exp.type}</div>
                          <div className="text-xs opacity-60">{exp.dates}</div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden mt-6">
                    <motion.div {...itemAnim("left")}>
                      <div className="flex items-start gap-3">
                        {/* <img src={exp.image} alt="" className="w-12 h-12 rounded object-cover" /> */}
                        <div>
                          <a href={exp.url} className="font-semibold text-base hover:underline" target="_blank" rel="noreferrer">
                            {exp.company}
                          </a>
                          <div className="text-sm opacity-80">{exp.type}</div>
                          <div className="text-xs opacity-60">{exp.dates}</div>
                        </div>
                      </div>

                      <p className="mt-3 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.tags.map((t, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded border border-current/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
