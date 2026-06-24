import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { supabase } from "../lib/supabase";
import { transformProjects } from "../utils/transformProjects";

const TABS = ["All", "Projects", "Freelance", "Experiments"];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from Supabase when component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      setLoading(true);
      
      // Fetch all projects from Supabase
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });
      
      if (error) throw error;
      
      // Transform the data to match component expectations
      const transformedProjects = transformProjects(data);
      setProjects(transformedProjects);
      
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Filter projects based on selected tab
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  // Show loading state
  if (loading) {
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto p-4 text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-neutral-500">Loading projects...</p>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto p-4 text-center">
          <p className="text-red-500">Error loading projects: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto p-4 sm:p-0 ">
        {/* Tabs */}
        <div className="flex items-center w-full gap-3 mb-8 flex-wrap">
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
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                      className="cursor-pointer rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow  
  bg-[var(--btn-bg)]
  backdrop-blur-md
  text-[var(--text-primary)]
  "
                    >
                      {/* thumbnail: prefer first image if available, else fallback */}
                      <div className="w-full h-48 relative overflow-hidden group">
                        {p.media?.[0]?.type === "image" ? (
                          <img
                            src={p.media[0].url}
                            alt={p.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-400"
                          />
                        ) : (
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

                      <div className="p-4 border-t">
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