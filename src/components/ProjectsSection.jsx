// src/components/ProjectsSection.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "../data/projectData";
import ProjectModal from "./ProjectModal";

const TABS = ["All", "Projects", "Freelance", "Experiments", "Open Source"];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All") return projectData;
    return projectData.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto p-4 sm:p-0 ">
        {/* Tabs */}
        <div className="flex items-center  w-full gap-3 mb-8 flex-wrap">
          {TABS.map((t, i) => {
            const isActive = t === active;
            const isLast = i === TABS.length - 1;

            return (
              <div key={t} className="flex items-center gap-3">
                <button
                  className={`relative px-1 md:py-2 transition text-xl uppercase
            ${isActive ? "text-blue-600" : ""}
          `}
                  onClick={() => setActive(t)}
                >
                  {t}
                </button>

                {/* Separator */}
                {!isLast && (
                  <span className="text-neutral-400 text-xl font-light">|</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Grid */}
        <div className="relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active} // remount the grid when tab changes so enter/exit animations show as expected
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filtered.map((p) => (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      onClick={() => setSelected(p)}
                      className="cursor-pointer rounded border-b overflow-hidden  shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* thumbnail: prefer first image if available, else fallback to black */}
                      <div className="w-full h-48  relative overflow-hidden group">
                        {p.media?.[0]?.type === "image" ? (
                          <img
                            src={p.media[0].url}
                            alt={p.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-400"
                          />
                        ) : (
                          // if first item is video, try use second image as thumbnail
                          <img
                            src={
                              p.media?.find((m) => m.type === "image")?.url ||
                              "/assets/placeholder.png"
                            }
                            alt={p.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-400"
                          />
                        )}
                        {/* subtle overlay title on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>

                      <div className="p-4">
                        <h5 className="font-semibold">{p.title}</h5>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <ProjectModal
              project={selected}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
