import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";

import useTheme from "../hooks/useTheme";
import LogoDark from "../assets/logow.png";
import LogoLight from "../assets/logob.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full z-50 border-b py-2 md:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-14">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={theme === "dark" ? LogoDark : LogoLight}
              alt="MANISH"
              className="w-40 transition-all"
            />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/about" className="hover:opacity-70 transition">About</NavLink>
            <NavLink to="/testimonials" className="hover:opacity-70 transition">Testimonials</NavLink>

            <NavLink
              to="/hireme"
              className="px-6 py-2 bg-[#e50914] text-white text-sm font-semibold rounded-lg"
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
                flex items-center gap-4 
                px-4 py-2 rounded-full
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
        <div className="fixed inset-0 z-40 md:hidden">
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

              <NavLink to="/testimonials" onClick={() => setIsOpen(false)}>
                Testimonials
              </NavLink>

              <NavLink
                to="/hireme"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-[#e50914] text-white rounded-lg font-semibold mx-auto"
              >
                Hire Me
              </NavLink>
            </div>

            <div className="mt-6 flex justify-center">
              {/* Add social icons if needed */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
