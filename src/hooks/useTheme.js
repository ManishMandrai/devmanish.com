import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"   // ✅ default light
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0c0c0c";
      document.body.style.color = "white";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
