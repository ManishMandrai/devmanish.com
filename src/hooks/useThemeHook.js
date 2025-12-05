import { useEffect, useState, useCallback } from "react";

/**
 * useTheme - robust theme hook
 * - checks localStorage
 * - falls back to system preference
 * - toggles html class 'light'/'dark' (Tailwind class-based dark mode)
 * - optionally updates <meta name="theme-color">
 */
export default function useTheme() {
  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;

      // prefer system setting if no saved preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    } catch (e) {
      // ignore localStorage errors
    }
    return "light";
  };

  const [theme, setThemeState] = useState(getInitialTheme);

  // update DOM when theme changes
  useEffect(() => {
    const root = document.documentElement;

    // remove both to ensure clean swap
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    try {
      localStorage.setItem("theme", theme);
    } catch (e) { /* ignore */ }

    // update mobile theme color meta tag if present
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue("--theme-meta").trim() || (theme === "dark" ? "#0d0d0d" : "#fafafa"));
  }, [theme]);

  // Listen to system preference changes and auto-switch *only if* user hasn't explicitly saved a preference
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;

    const handleChange = (e) => {
      try {
        const saved = localStorage.getItem("theme");
        // only auto-change if no saved preference
        if (saved !== "light" && saved !== "dark") {
          setThemeState(e.matches ? "dark" : "light");
        }
      } catch (err) { /* ignore */ }
    };

    mq.addEventListener ? mq.addEventListener("change", handleChange) : mq.addListener(handleChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handleChange) : mq.removeListener(handleChange);
    };
  }, []);

  // exposed setter that also accepts 'toggle'
  const setTheme = useCallback((value) => {
    if (value === "toggle") {
      setThemeState((t) => (t === "dark" ? "light" : "dark"));
    } else if (value === "light" || value === "dark") {
      setThemeState(value);
    } else {
      console.warn("useTheme: setTheme expects 'light' | 'dark' | 'toggle'");
    }
  }, []);

  // convenient toggle function
  const toggleTheme = useCallback(() => setTheme("toggle"), [setTheme]);

  return { theme, setTheme, toggleTheme };
}
