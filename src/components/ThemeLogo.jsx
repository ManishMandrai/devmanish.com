// components/ThemeLogo.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useThemeHook";

import LogoDark from "../assets/logow.svg"; // white logo
import LogoLight from "../assets/logob.svg"; // black logo

const ThemeLogo = ({ className = "w-40" }) => {
  const { theme } = useTheme();

  return (
    <NavLink to="/" className="flex items-center">
      <img
        key={theme} // 🔥 FORCES RE-RENDER
        src={theme == "dark" ?  LogoLight : LogoDark}
        className={`${className} transition-all`}
      />
    </NavLink>
  );
};

export default ThemeLogo;
