import React, { useState } from "react";
// import manish from "../assets/logodrk.png";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import HireMe from "../pages/HireMe";
import { FaXTwitter } from "react-icons/fa6";
import LogoDark from "../assets/logow.png";
import LogoLight from "../assets/logob.png";
import useTheme from "../hooks/useTheme";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [location, setLocation] = useState("23.268614, 77.475184");
  const { theme, setTheme } = useTheme();

  
  return (
    <footer className="border-t pt-10 pb-2">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
         <div className="flex flex-col items-center lg:items-start space-y-4">
  <NavLink to="/" className="flex items-center">
    <img
      src={theme === "dark" ? LogoDark : LogoLight}
      alt="MANISH"
      className="w-52 transition-transform"
    />
  </NavLink>
</div>
       
          <div className="flex space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer  hover:text-blue-700 transition-colors duration-300"
              href="https://www.linkedin.com/in/manish-kumar-mandrai/"
            >
              <CiLinkedin className="w-6.5 h-6.5 md:w-8 md:h-8" />
            </a>

            <a
              href="https://x.com/ManishKumar3114?t=FqKTO6rQ9LfDA2gsHWiwaQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000]"
            >
              <FaXTwitter className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center lg:items-center space-y-4 text-center">
          <h4 className="font-semibold mb-4">Quick Links</h4>
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
              <Link to="/hireme" className="font-medium">
                Hire Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center lg:items-end space-y-4">
          <div className="w-28 h-[2px] sm:hidden bg-black"></div>
          <button
            className="text-sm px-4 py-2 rounded border-2 border-[var(--btn-border)]
  bg-[var(--btn-bg)]
  backdrop-blur-md
  text-[var(--text-primary)]
  shadow-sm hover:shadow-md
 transition duration-200"
            onMouseOver={() => setLocation("Bhopal (INDIA)")}
            onMouseOut={() => setLocation("23°16'07.0\"N 77°28'31.0\"E")}
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
      <div className="mt-8 border-t border-gray-700 pt-4 pb-0 mb-0 text-center">
        <div className="text-[12px]">
          © {currentYear} Manish Kumar. All Rights Reserved.
        </div>
        <div className="text-[12px]">Developed with ❤️ by Manish</div>
      </div>
    </footer>
  );
};

export default Footer;
