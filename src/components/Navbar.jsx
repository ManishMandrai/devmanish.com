import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";

import useTheme from "../hooks/useThemeHook";
import LogoDark from "../assets/logow.png";
import LogoLight from "../assets/logob.png";
import Socialicons from "./Socialicons";
import ThemeLogo from "./ThemeLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    // navigate to home and tell it which section to scroll to
    navigate("/", { state: { scrollTo: id } });
    setIsOpen(false);
  };

  const linkHoverClasses = `
  relative text-sm font-medium transition-all
  hover:scale-110
  hover:text-transparent hover:bg-clip-text
  hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400
 
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
  after:h-[2px] after:bg-gradient-to-r 
  after:from-fuchsia-500 after:to-cyan-400 after:rounded-full
  after:transition-all after:duration-300 hover:after:w-full
  hover:after:drop-shadow-[0_0_8px_rgba(255,0,255,0.9)]
`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b py-2 ">
      <div className="max-w-7xl mx-auto px-3 sm:px-15">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
        <NavLink to="/" className="flex items-center"> <img src={theme === "dark" ? LogoDark : LogoLight} alt="MANISH" className="w-40 transition-all" /> </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* About (page) */}
            <NavLink to="/about" className={linkHoverClasses}>
              About
            </NavLink>

            {/* Projects (section on home) */}
            <button
              type="button"
              onClick={() => handleSectionClick("projects")}
              className={linkHoverClasses}
            >
              Projects
            </button>

            {/* Experience (section on home) */}
            <button
              type="button"
              onClick={() => handleSectionClick("experience")}
              className={linkHoverClasses}
            >
              Experience
            </button>

            <NavLink
              to="/hireme"
              className="px-6 py-[6px] bg-[#e50914] text-white text-sm font-semibold rounded-lg transform transition-transform hover:scale-[1.1]"
            >
              Hire Me
            </NavLink>

            {/* Theme Switch - Desktop */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:scale-110 transition"
            >
              {theme === "dark" ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Right side for mobile - Floating pill */}
          <div className="md:hidden">
            <div
              className="
                flex items-center gap-2
                px-3 py-1 rounded-full
                bg-white/20 dark:bg-black/20 
                backdrop-blur-md 
                shadow-lg border border-white/10
              "
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="transition active:scale-90"
              >
                {isOpen ? (
                  <XIcon className="h-7 w-7" />
                ) : (
                  <MenuIcon className="h-7 w-7" />
                )}
              </button>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="transition active:scale-90"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-7 w-7 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 inset-0  z-40 md:hidden">
          <div
            className="absolute inset-0 backdrop-blur bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="
              absolute left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-1/2
              w-[70%] max-w-[320px]
              rounded-2xl p-6 py-24 
              shadow-2xl border border-white/10
            "
          >
            <div className="flex flex-col space-y-4 text-center text-lg">
              <NavLink to="/about" onClick={() => setIsOpen(false)}>
                About
              </NavLink>

              <button
                type="button"
                onClick={() => handleSectionClick("projects")}
              >
                Projects
              </button>

              <button
                type="button"
                onClick={() => handleSectionClick("experience")}
              >
                Experience
              </button>

              <NavLink
                to="/hireme"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-[#e50914] text-white rounded-lg font-semibold mx-auto"
              >
                Hire Me
              </NavLink>
            </div>

            {/* Social icons centered at bottom of mobile modal */}
            <div className="mt-16 flex justify-center">
              <Socialicons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
