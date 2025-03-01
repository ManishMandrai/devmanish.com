import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import MyStrength from "../components/MyStrength";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
    
      <Hero />
      <Skills />
      <MyStrength/>
      <Experience/>
      {/* <Testimonials/> */}
      <Projects/>
      <Contact/>
    </>
  );
}

export default Home;
