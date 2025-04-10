import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Apply saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      <Sun className={`h-5 w-5 transition-all ${theme === "dark" ? "rotate-0 scale-0" : "rotate-0 scale-100"}`} />
      <Moon className={`absolute top-2 left-2 h-5 w-5 transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
    </button>
  );
}
