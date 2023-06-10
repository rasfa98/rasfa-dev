"use client";

import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const handleToggle = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button onClick={handleToggle} className="text-2xl">
      <FaMoon className="hidden dark:block" />
      <FaSun className="block dark:hidden" />
    </button>
  );
};

export default ThemeToggle;
