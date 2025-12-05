import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import MyStrength from "../components/MyStrength";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
// import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state && location.state.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);

      // small delay so layout is ready
      setTimeout(() => {
        const target = document.getElementById(scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);

      // clear state so it doesn't keep re-scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Skills />
      <MyStrength />

      <div id="experience">
        <Experience />
      </div>

      {/* <Testimonials/> */}

      <div id="projects">
        <ProjectsSection />
      </div>

      <Contact />
    </>
  );
}

export default Home;
