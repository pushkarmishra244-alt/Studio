import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { useBooking } from "../../providers/CalendlyProvider";

export function Navbar() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsThemeDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsThemeDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isThemeDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsThemeDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsThemeDark(true);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Showcase", href: "#showcase" },
    { label: "Features", href: "#features" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 md:px-8">
        <div className="max-w-7xl mx-auto rounded-full glass-surface shadow-md flex items-center justify-between px-6 py-3.5 transition-all duration-300">
          {/* Brand Logo */}
          <a
            href="#"
            className="font-mono text-sm font-semibold tracking-wider flex items-center gap-1.5 focus:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-zinc-950 dark:text-white">EXPERIENCE</span>
            <span className="text-zinc-400 dark:text-zinc-600 font-light">//</span>
            <span className="text-zinc-500 dark:text-zinc-400 font-medium">STUDIO</span>
          </a>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-7">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-sans font-medium tracking-wide uppercase text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-zinc-200/50 hover:bg-zinc-100/30 dark:border-zinc-800/40 dark:hover:bg-zinc-800/30 text-zinc-600 dark:text-zinc-400 cursor-pointer transitions-colors duration-200"
              aria-label="Toggle visual theme"
            >
              {isThemeDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Book consultation CTA */}
            <button
              onClick={openBooking}
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-900 border border-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:border-white font-mono text-[10px] uppercase font-bold tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer shadow-sm"
            >
              <span>Book Session</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/40 text-zinc-600 dark:text-zinc-400 cursor-pointer"
              aria-label="Toggle visual theme"
            >
              {isThemeDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/40 text-zinc-900 dark:text-zinc-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-Over */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-zinc-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-card-bg-custom border-l border-zinc-200/50 dark:border-zinc-800/50 flex flex-col justify-between p-8 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Panel */}
          <div className="space-y-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-muted-custom">NAVIGATION</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:text-accent p-3 rounded-xl border border-transparent hover:border-zinc-200/40 dark:hover:border-zinc-800/30 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 active:scale-[0.98] transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Panel Actions */}
          <div className="space-y-6">
            <div className="border-t border-zinc-200/60 dark:border-zinc-800/65 pt-6" />
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-mono text-xs uppercase font-bold tracking-widest cursor-pointer shadow-lg active:scale-[0.99] transition-transform"
            >
              <span>Schedule Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
