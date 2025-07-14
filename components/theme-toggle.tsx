"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="fixed top-4 right-4 z-50 px-3 py-2 rounded bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white shadow border border-slate-300 dark:border-slate-600 transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
