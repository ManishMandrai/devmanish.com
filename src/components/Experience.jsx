// src/components/ExperienceSS1.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import experienceData from "../data/ExperienceData";

export default function ExperienceSS1() {
  const [openId, setOpenId] = useState(null);
  const [mobileOpenId, setMobileOpenId] = useState(null);

  // Set first item as default open on initial render
  useEffect(() => {
    if (experienceData.length > 0) {
      setOpenId(experienceData[0].id);
      setMobileOpenId(experienceData[0].id);
    }
  }, []);

  return (
    <section className="w-full my-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Work Experience
        </h2>

        {/* Desktop / tablet timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* vertical line: left aligned */}
            <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-neutral-200" />

            <div className="flex flex-col gap-10">
              {experienceData.map((item, idx) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                  >
                    {/* Row grid: 3 cols (left timeline, content, dates) */}
                    <div className="grid grid-cols-[6rem_minmax(0,1fr)_20rem] items-center gap-6">
                      {/* TIMELINE + DOT area */}
                      <div className="relative h-24 flex items-center justify-center">
                        {/* Dot */}
                        <div className="w-3.5 h-3.5 rounded-full bg-neutral-600 z-10" />
                      </div>

                      {/* CONTENT - Clickable area for toggling */}
                      <div 
                        className="py-3 cursor-pointer"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                      >
                        <div className="flex items-center gap-4">
                          {/* optional logo (if present) */}
                          {item.logo && (
                            <img
                              src={item.logo}
                              alt={`${item.company} logo`}
                              className="w-12 h-12 rounded-full object-cover border"
                            />
                          )}
                          <div>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-lg font-semibold hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.company}
                            </a>
                            <div className="text-sm ">{item.type}</div>
                          </div>
                        </div>
                      </div>

                      {/* DATES (right) */}
                      <div className="text-right text-sm pr-6">
                        {item.dates}
                      </div>
                    </div>

                    {/* Expanded description - Always present but animated */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? "auto" : 0
                      }}
                      transition={{ 
                        duration: 0.32, 
                        ease: "easeOut" 
                      }}
                      className="overflow-hidden"
                    >
                      {/* This container aligns under content+dates columns */}
                      <div className="grid grid-cols-[6rem_minmax(0,1fr)_0rem] gap-10">
                        <div /> {/* empty to keep dot column spacing */}
                        <div
                          className="rounded p-3 border border-[var(--btn-border)]
                            bg-[var(--btn-bg)]
                            backdrop-blur-md
                            text-[var(--text-primary)]
                            shadow-sm"
                        >
                          <p className="text-neutral-700 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-3 mt-4 mb-2">
                            {item.tags?.map((t, j) => (
                              <span
                                key={j}
                                className="text-sm px-5 py-2 rounded border border-neutral-200 flex items-center gap-2"
                              >
                                <t.icon
                                  className="text-xl"
                                  style={{ color: t.color }}
                                />
                                {t.label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div /> {/* keep date column aligned */}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile layout: stacked cards + chevron */}
        <div className="md:hidden flex flex-col gap-4">
          {experienceData.map((item) => {
            const isOpen = mobileOpenId === item.id;
            return (
              <div
                key={item.id}
                className="border rounded-md overflow-hidden border-[var(--btn-border)]
                    bg-[var(--btn-bg)]
                    backdrop-blur-md
                    text-[var(--text-primary)]
                    shadow-sm"
              >
                <div 
                  className="p-4 flex items-start justify-between gap-4 cursor-pointer"
                  onClick={() => setMobileOpenId(isOpen ? null : item.id)}
                >
                  <div className="flex items-start gap-3">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <a
                        href={item.url}
                        rel="noreferrer"
                        target="_blank"
                        className="font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.company}
                      </a>
                      <div className="text-sm ">{item.type}</div>
                      <div className="text-xs ">{item.dates}</div>
                    </div>
                  </div>

                  <div className="p-2">
                    <IoChevronDown
                      className={`text-xl transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0
                  }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4">
                    <p className="text-neutral-700 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags?.map((t, j) => (
                        <span
                          key={j}
                          className="text-xs px-5 py-2 rounded border border-neutral-200 flex items-center gap-2"
                        >
                          <t.icon
                            className="text-sm"
                            style={{ color: t.color }}
                          />
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}