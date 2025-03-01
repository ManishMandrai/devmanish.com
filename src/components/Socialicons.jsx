import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://leetcode.com/u/manishmandrai/", icon: SiLeetcode, color: "#FFA116" },
  { href: "https://x.com/ManishKumar3114?t=FqKTO6rQ9LfDA2gsHWiwaQ&s=09", icon: FaXTwitter, color: "#000000" },
  { href: "https://www.linkedin.com/in/manish-kumar-mandrai/", icon: CiLinkedin, color: "#0077B5" },
  { href: "https://github.com/ManishMandrai", icon: FaGithub, color: "#181717" },
];

const Socialicons = () => (
  <div className="flex justify-center mt-10 space-x-6">
    {socialLinks.map(({ href, icon: Icon, color }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-white transition-colors duration-300 hover:scale-110"
        style={{ "--hover-color": color }}
      >
        <Icon className="h-7 w-7  hover:text-[var(--hover-color)]" />
      </a>
    ))}
  </div>
);

export default Socialicons;
