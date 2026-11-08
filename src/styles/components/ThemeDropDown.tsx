"use client";

import { ChevronDown, Sun, MoonStar, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const THEME_OPTIONS = [
  {
    value: "light",
    label: "Light",
		icon: (
		<Sun
			size={18}
			className={`shrink-0 transition-transform duration-200`}
		/>
    ),
  },
  {
    value: "dark",
    label: "Dark",
    icon: (<MoonStar
			size={18}
			className={`shrink-0 transition-transform duration-200`}
		/>
    ),
  },
  {
    value: "system",
    label: "System",
    icon: (
      <Monitor
			size={18}
			className={`shrink-0 transition-transform duration-200`}
		/>
    ),
  },
];

const emptySubscribe = () => () => {};

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-40 rounded-md bg-zinc-200 dark:bg-zinc-800 animate-pulse" />;
  }

  const activeOption = THEME_OPTIONS.find((opt) => opt.value === theme) || THEME_OPTIONS[2];

  return (
    <div ref={dropdownRef} className="relative px-[0px]">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex items-center justify-between gap-2 w-40 h-[44px] px-3 rounded-md bg-white dark:bg-background text-primary-foreground text-sm hover:bg-zinc-50 dark:hover:bg-[#3f3d66] font-lexendgiga tracking-[-0.1em] transition-colors"
      >
        <span className="flex items-center gap-2">
          {activeOption.icon}
          <span>{activeOption.label}</span>
        </span>
        {/* Animated Chevron */}
		<ChevronDown
			size={18}
			className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
		/>
      </button>

      {/* Animated Dropdown Menu */}
      <div
        className={`absolute right-0 mt-1.5 w-40 origin-top rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-background shadow-lg z-50 transition-all duration-200 ease-out ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 scale-90 -translate-y-2 pointer-events-none invisible"
        }`}
      >
        {THEME_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => {
              setTheme(option.value);
              setIsOpen(false);
            }}
            className={`flex items-center gap-2 w-full px-3 py-1.5 text-left text-sm transition-colors font-lexendgiga tracking-[-0.1em] ${
              theme === option.value
                ? "bg-zinc-100 dark:bg-[#3f3d66] text-zinc-950 dark:text-white font-medium"
                : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
            }`}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
