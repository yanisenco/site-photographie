import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function LightModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = storedTheme === "dark" || (!storedTheme && prefersDark);

    setIsDarkMode(enabled);
    document.documentElement.classList.toggle("dark", enabled);
    setIsMounted(true);
  }, []);

  const darkModeHandler = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  if (!isMounted) return null;

  return (
    <div className="flex items-center justify-center p-6 transition-colors duration-300">
      <button
        onClick={darkModeHandler}
        type="button"
        aria-label="Toggle dark mode"
        title="Basculer en mode sombre"
        className="relative flex items-center w-16 h-8 bg-gray-200 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 bg-custom-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-8" : "translate-x-0"
          }`}
        />
        <IoSunny className={`text-xs ${isDarkMode ? "text-yellow" : "text-orange"} z-10 ml-1`} />
        <IoMoon className="text-xs  text-blue z-10 ml-auto mr-1" />
      </button>
    </div>
  );
}
