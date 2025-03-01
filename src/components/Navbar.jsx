import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/hsinam.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Socialicons from "./Socialicons";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full z-50 border-b py-1 border-white/20 md:bg-transparent b">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="MANISH"
              className="w-48 transition-transform" // Fixed size for all screens
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/about"
              className=" px-3 py-2 rounded-md text-sm  font-medium transition-all hover:scale-105"
            >
              About
            </NavLink>
            <NavLink
              to="/testimonials"
              className="px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/hireme"
              className=" px-6 py-2 bg-[#e50914] text-white text-sm font-semibold rounded-lg "
            >
              Hire Me
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-8 w-8" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="fixed inset-0 " onClick={() => setIsOpen(false)} />
        <div className="relative w-4/5 max-w-[85%] bg-black h-full ">
          <div className=" border-b border-white/20">
            <NavLink to="/" className="flex items-center">
              <img
                src={Logo}
                alt="MANISH"
                className="w-52 p-[13.4px] transition-transform h" 
              />
            </NavLink>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <NavLink
              to="/about"
              className=" px-3 py-2 rounded-md   text-gray-200 font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/testimonials"
              className="px-3 py-2 rounded-md text-gray-200 font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/HireMe"
             className=" px-6 py-2 bg-[#e50914] text-center max-w-[160px]  text-sm font-semibold rounded-lg "
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </NavLink>
          </div>
              <div className="mt-75">
                <Socialicons/>
              </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;