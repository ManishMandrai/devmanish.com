// src/components/ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import MediaCarousel from "./MediaCarousel";
import { IoClose } from "react-icons/io5";
import { Github, Link2 } from "lucide-react";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* BACKDROP */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* MODAL */}
      <motion.div
        className="
          relative w-full max-w-[1100px] max-h-[92vh]
          sm:p-4
    rounded 
                     overflow-hidden flex flex-col
            border border-[var(--btn-border)]
  bg-[var(--btn-bg)]
  backdrop-blur-md
  text-[var(--text-primary)]
  shadow-sm hover:shadow-md
  transition-all"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
      >
        {/* CLOSE BTN */}
        <button
          className="absolute right-4 top-4 z-20 p-2 bg-white/80 dark:bg-[#2a2a2a99] rounded-md hover:bg-white dark:hover:bg-[#2a2a2a]"
          onClick={onClose}
        >
          <IoClose size={20} />
        </button>

        {/* CONTENT GRID */}
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* LEFT — MEDIA */}
          <div className="w-full md:w-[40%] px-4 py-4 flex items-start justify-center">
            <div className="w-full">
              <MediaCarousel media={project.media} />
            </div>
          </div>

          {/* RIGHT — DETAILS */}
          <div className="w-full md:w-[60%] p-5 overflow-y-auto max-h-[80vh]">
            <h3 className="text-xl md:text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {project.category}
            </p>

            <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* SKILLS WITH ICONS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.skills?.map((s, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-2 rounded
                     dark:bg-white/5 
                    200 dark:border-white/10
                    flex items-center gap-2 

                      border border-[var(--btn-border)]
  bg-[var(--btn-bg)]
  backdrop-blur-md
  text-[var(--text-primary)]
  shadow-sm hover:shadow-md
  transition-all"
                  
                >
                  <s.icon className="text-xl" style={{ color: s.color }} />
                  {s.label}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-5">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
       px-2 py-2 rounded-full
        border border-neutral-300 dark:border-white/20
        hover:bg-neutral-100 dark:hover:bg-white/10
        font-medium 
        flex items-center gap-2
      "
                >
                  <FaLink size={26} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
        px-2 py-2 rounded-full
        border border-neutral-300 dark:border-white/20
        hover:bg-neutral-100 dark:hover:bg-white/10
        font-medium 
        flex items-center gap-2
      "
                >
                  <FaGithub size={26} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
