// src/components/ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import MediaCarousel from "./MediaCarousel";
import { IoClose } from "react-icons/io5";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
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
          relative 
          w-full 
          max-w-[1100px] 
          max-h-[92vh]
          bg-white/90 
          backdrop-blur-xl 
          rounded-2xl 
          shadow-2xl 
          overflow-hidden
          flex 
          flex-col
        "
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      >
        {/* Close */}
        <button
          className="absolute right-4 top-4 z-20 p-2 bg-white/80 rounded-md hover:bg-white"
          onClick={onClose}
        >
          <IoClose size={20} />
        </button>

        {/* CONTENT GRID */}
        <div className="flex flex-col md:flex-row w-full h-full">
          
          {/* LEFT (Media) — 40% */}
          <div className="w-full md:w-[40%] px-4 py-2 sm:mt-1 flex items-start justify-center">
            <div className="w-full">
              <MediaCarousel media={project.media} />
            </div>
          </div>

          {/* RIGHT (Description) — 60% */}
          <div className="w-full md:w-[60%] p-4  max-h-[80vh]">
            <h3 className="text-xl md:text-2xl font-semibold">
              {project.title}
            </h3>

            <p className=" text-sm text-neutral-500">{project.category}</p>

            <p className="mt-2 text-neutral-700 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.skills?.map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-black text-white rounded-md"
                >
                  View Live
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border rounded-md hover:bg-neutral-100"
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
