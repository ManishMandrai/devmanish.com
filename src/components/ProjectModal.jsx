// src/components/ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import MediaCarousel from "./MediaCarousel";
import { IoClose } from "react-icons/io5";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* backdrop */}
      <motion.div
        className="absolute inset-0 backdrop-blur-sm bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative w-full md:w-11/12 lg:w-3/4 max-h-[90vh] bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.45 }}
      >
        {/* close */}
        <button
          className="absolute right-4 top-4 z-30 p-2 rounded-md bg-white/70 hover:bg-white"
          onClick={onClose}
          aria-label="close"
        >
          <IoClose size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4">
            <MediaCarousel media={project.media} />
          </div>

          <div className="p-6 overflow-y-auto max-h-[78vh]">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-neutral-600 mb-4">{project.category}</p>

            <p className="leading-relaxed text-neutral-800 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills?.map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white border border-neutral-200"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md bg-black text-white"
                >
                  View Live
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md border"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
