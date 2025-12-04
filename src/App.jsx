import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HireMe from "./pages/HireMe";
import SmokeCursor from "./components/Smoke";
import SparkleBackground from "./components/Sparkle"; // Import the Sparkle B
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Certificate from "./pages/Certificate";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    
    <div className="min-h-screen flex flex-col">
      {/* <SparkleBackground /> */}
      {/* Navbar at the top */}
      <header>
        <Navbar />
        {/* <SmokeCursor/> */}
      </header>

      {/* Main content grows to push the footer down */}
      <main className="flex-grow">
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hireme" element={<HireMe />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          {/* <Route path="/certificate" element={<Certificate />} /> */}
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
