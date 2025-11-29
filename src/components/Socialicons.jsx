import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://leetcode.com/u/manishmandrai/", icon: SiLeetcode, color: "#FFA116", label: "LeetCode" },
  { href: "https://x.com/ManishKumar3114?t=FqKTO6rQ9LfDA2gsHWiwaQ&s=09", icon: FaXTwitter, color: "#000000", label: "X / Twitter" },
  { href: "https://www.linkedin.com/in/manish-kumar-mandrai/", icon: CiLinkedin, color: "#0077B5", label: "LinkedIn" },
  { href: "https://github.com/ManishMandrai", icon: FaGithub, color: "#181717", label: "GitHub" },
];

const Socialicons = () => (
  <div className="social-icons mt-10" role="navigation" aria-label="social links">
    {socialLinks.map(({ href, icon: Icon, color, label }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="cursor-pointer"
        // set the hover color as a CSS variable; React accepts kebab-case vars via style
        style={{ "--hover-color": color }}
      >
        {/* svg color is controlled by CSS (color: var(--icon-color)) */}
        <Icon className="h-7 w-7" />
      </a>
    ))}
  </div>
);

export default Socialicons;
