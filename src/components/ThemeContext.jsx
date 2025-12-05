// context/ThemeContext.jsx
import { createContext, useContext } from "react";
import useThemeHook from "../hooks/useThemeHook";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeData = useThemeHook(); // your existing logic

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
