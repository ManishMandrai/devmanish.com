import React, { useState } from "react";
import manish from "../assets/hsinam.png";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import HireMe from "../pages/HireMe";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [location, setLocation] = useState("23.192171, 79.994028");

  return (
    <footer className="border-t border-white/50 pt-10 pb-2">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* flex flex-col min-h-screen text-white p-8 max-w-screen-md mx-auto */}
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <img
            src={manish}
            alt="Logo"
            className="w-48 hover:scale-105 transition-transform"
          />

          <div className="flex space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-white hover:text-blue-700 transition-colors duration-300" // LinkedIn blue
              href="https://www.linkedin.com/in/manish-kumar-mandrai/"
            >
              <CiLinkedin className="w-6.5 h-6.5 md:w-8 md:h-8" />{" "}
              {/* Reduced size to 80% */}
            </a>

            <a
              href="https://x.com/ManishKumar3114?t=FqKTO6rQ9LfDA2gsHWiwaQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000]" // Twitter (X) black
            >
              <FaXTwitter className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center lg:items-center space-y-4 text-center">
          <h4 className=" font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/about" className="font-medium">
                About
              </Link>
            </li>
            <li>
              <Link to="/Testimonials" className="font-medium">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/hireme" className=" font-medium">
                Hire Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center lg:items-end space-y-4">
          <div className="w-28 h-[2px]  sm:hidden bg-black"></div>
          <button
            className="text-sm px-4 py-2 rounded-full border-2 border-[#ffffff] hover:bg-[#000000] transition duration-200"
            onMouseOver={() => setLocation("Jabalpur (India)")}
            onMouseOut={() => setLocation("23°11'33.9\"N 79°59'38.6\"E")}
            style={{
              width: "240px", // Fixed width to prevent size change
              minHeight: "40px", // Ensure minimum height stays
            }}
          >
            {location}
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 pb-0 mb-0 text-center text-gray-400">
        <div className="text-[12px]">
          © {currentYear} Manish Kumar. All Rights Reserved.
        </div>
        <div className="text-[12px]">Developed with ❤️ by Manish</div>
      </div>
    </footer>
  );
};

export default Footer;
