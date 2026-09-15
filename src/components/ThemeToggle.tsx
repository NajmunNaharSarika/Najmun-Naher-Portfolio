"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/40 dark:border-slate-700/40 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 shadow-sm hover:border-black dark:hover:border-rose-500/50 hover:shadow-glow transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-rose-500/30"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <FiSun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          ) : (
            <FiMoon className="w-4 h-4 text-black drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
          )}
        </m.div>
      </AnimatePresence>
    </button>
  );
}
