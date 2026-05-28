import React from "react";
import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const socialItems = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  const resources = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#showcase" },
    { name: "Features", href: "#features" },
    { name: "Methodology", href: "#process" },
  ];

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-custom text-foreground-custom border-t border-zinc-200/50 dark:border-zinc-800/20 py-12 md:py-16 selection:bg-accent selection:text-white relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Top Segment */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          
          {/* Logo Brand Segment */}
          <div className="space-y-4 max-w-xs">
            <a
              href="#"
              onClick={handleBackToTop}
              className="font-mono text-sm font-semibold tracking-wider flex items-center gap-1.5 focus:outline-none"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span>EXPERIENCE</span>
              <span className="text-zinc-400 font-light">//</span>
              <span className="text-zinc-500 font-medium">STUDIO</span>
            </a>
            <p className="font-sans text-[11px] text-muted-custom leading-relaxed">
              Architecting state-of-the-art interactive systems, GPU-driven timelines, and clinical neumorphic design interfaces.
            </p>
          </div>

          {/* Quick links Index Column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-xs">
            <div className="space-y-3">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-zinc-400">STRUCTURE</span>
              <div className="flex flex-col gap-2">
                {resources.map((res) => (
                  <a
                    key={res.name}
                    href={res.href}
                    className="text-zinc-500 hover:text-foreground-custom transition-colors font-medium"
                  >
                    {res.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-zinc-400">COORDINATES</span>
              <div className="space-y-1 font-mono text-[10px] text-zinc-500">
                <span className="block">40.7128° N</span>
                <span className="block">74.0060° W</span>
                <span className="block">GMT // New York</span>
              </div>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-zinc-400">NETWORKS</span>
              <div className="flex gap-2">
                {socialItems.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/40 hover:bg-zinc-100/30 dark:hover:bg-zinc-800/30 text-zinc-500 hover:text-accent transition-all cursor-pointer"
                      aria-label={`Explore our profile on ${soc.label}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider lines */}
        <div className="border-t border-zinc-200/60 dark:border-zinc-800/40" />

        {/* Bottom copyright segment */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div className="text-center sm:text-left">
            <span>© 2026 Pushkar Mishra. All rights reserved.</span>
          </div>

          <button
            onClick={handleBackToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/40 text-muted-custom hover:text-foreground-custom cursor-pointer transition-colors"
            title="Elevate back to index"
          >
            <span>ELEVATE TO INDEX</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
