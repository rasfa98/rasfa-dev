"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");

    setIsDark(isDark);
  }, []);

  const handleToggle = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      setIsDark(true);
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
