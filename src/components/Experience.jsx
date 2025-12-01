// src/components/ExperienceSS1.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import experienceData from "../data/ExperienceData";

export default function ExperienceSS1() {
  const [openId, setOpenId] = useState(null);
  const [mobileOpenId, setMobileOpenId] = useState(null);

  return (
    <section className="w-full my-20 ">
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
                    onMouseEnter={() => setOpenId(item.id)}
                    onMouseLeave={() => setOpenId(null)}
                    className="relative"
                  >
                    {/* Row grid: 3 cols (left timeline, content, dates) */}
                    <div className="grid grid-cols-[6rem_minmax(0,1fr)_20rem] items-center gap-6">
                      {/* TIMELINE + DOT area */}
                      <div className="relative h-24 flex items-center justify-center">
                        {/* Dot */}
                        <div className="w-3.5 h-3.5 rounded-full bg-neutral-600 z-10" />
                        {/* short connector line to the content */}
                      </div>

                      {/* CONTENT */}
                      <div className="py-3">
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

                    {/* Hover-expanded description (appears below the row) */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.32, ease: "easeOut" }}
                          className="mt-2"
                        >
                          {/* This container aligns under content+dates columns */}
                          <div className="grid grid-cols-[6rem_minmax(0,1fr)_2rem] gap-10">
                            <div /> {/* empty to keep dot column spacing */}
                            <div
                              className="rounded  p-3 border border-[var(--btn-border)]
                                bg-[var(--btn-bg)]
                                backdrop-blur-md
                                text-[var(--text-primary)]
                                shadow-sm hover:shadow-md
                                transition-"
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
                      )}
                    </AnimatePresence>
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
                className=" border rounded-md  overflow-hidden border-[var(--btn-border)]
                    bg-[var(--btn-bg)]
                    backdrop-blur-md
                    text-[var(--text-primary)]
                    shadow-sm hover:shadow-md
                    transition-all"
              >
                <div className="p-4 flex items-start justify-between gap-4">
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
                      >
                        {item.company}
                      </a>
                      <div className="text-sm ">{item.type}</div>
                      <div className="text-xs ">{item.dates}</div>
                    </div>
                  </div>

                  <button
                    aria-label="toggle"
                    onClick={() => setMobileOpenId(isOpen ? null : item.id)}
                    className="p-2"
                  >
                    <IoChevronDown
                      className={`text-xl transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28 }}
                      className="px-4 pb-4"
                    >
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
