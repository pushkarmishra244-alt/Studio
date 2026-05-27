import React from "react";

export function CpuArchitecture() {
  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto p-4 flex items-center justify-center card-surface-inset rounded-3xl overflow-hidden group select-none">
      {/* Dynamic Glowing backplate */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute w-[180px] h-[180px] rounded-full bg-accent/5 dark:bg-accent/10 blur-2xl group-hover:bg-accent/15 transition-all duration-700" />

      {/* Modern CPU Grid SVG */}
      <svg
        className="relative w-full h-full text-zinc-300 dark:text-zinc-800"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          .circuit-line {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: circuitDraw 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          }
          .circuit-line-delayed {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: circuitDraw 6s cubic-bezier(0.16, 1, 0.3, 1) infinite 2s;
          }
          .pulse-dot {
            animation: pulseFade 3s infinite;
          }
          @keyframes circuitDraw {
            0% { stroke-dashoffset: 200; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -200; }
          }
          @keyframes pulseFade {
            0%, 100% { opacity: 0.3; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.1); }
          }
        `}</style>

        {/* Outer boundary lines */}
        <rect
          x="40"
          y="40"
          width="120"
          height="120"
          rx="12"
          className="stroke-zinc-300 dark:stroke-zinc-800"
          strokeWidth="1"
        />
        <rect
          x="55"
          y="55"
          width="90"
          height="90"
          rx="6"
          className="stroke-accent/20 dark:stroke-accent/30"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Central Core Die */}
        <rect
          x="75"
          y="75"
          width="50"
          height="50"
          rx="4"
          className="fill-zinc-100 dark:fill-zinc-900 stroke-accent"
          strokeWidth="1.5"
        />

        {/* Core details */}
        <circle cx="100" cy="100" r="14" className="stroke-zinc-300 dark:stroke-zinc-800" strokeWidth="0.75" />
        <circle cx="100" cy="100" r="4" className="fill-accent pulse-dot" />

        {/* North lines */}
        <path d="M100 40V75" className="stroke-accent circuit-line" strokeWidth="1.5" />
        <path d="M85 40V65H75" className="stroke-zinc-400 dark:stroke-zinc-650" strokeWidth="1" />
        <path d="M115 40V65H125" className="stroke-zinc-400 dark:stroke-zinc-650" strokeWidth="1" />

        {/* South lines */}
        <path d="M100 160V125" className="stroke-accent circuit-line-delayed" strokeWidth="1.5" />
        <path d="M85 160V135H75" className="stroke-zinc-400 dark:stroke-zinc-650" strokeWidth="1" />
        <path d="M115 160V135H125" className="stroke-zinc-400 dark:stroke-zinc-650" strokeWidth="1" />

        {/* West lines */}
        <path d="M40 100H75" className="stroke-accent circuit-line" strokeWidth="1.5" />
        <path d="M40 85H65V75" className="stroke-zinc-400 dark:stroke-zinc-650" strokeWidth="1" />
        <path d="M40 115H65V125" className="stroke-zinc-400 dark:stroke-zinc-650" strokeWidth="1" />

        {/* East lines */}
        <path d="M160 100H125" className="stroke-accent circuit-line-delayed" strokeWidth="1.5" />
        <path d="M160 85H135V75" className="stroke-zinc-400 dark:stroke-zinc-650" strokeWidth="1" />
        <path d="M160 115H135V125" className="stroke-zinc-400 dark:stroke-zinc-650" strokeWidth="1" />

        {/* Visual node intersections */}
        <circle cx="100" cy="75" r="2" className="fill-accent" />
        <circle cx="100" cy="125" r="2" className="fill-accent" />
        <circle cx="75" cy="100" r="2" className="fill-accent" />
        <circle cx="125" cy="100" r="2" className="fill-accent" />
      </svg>

      {/* Dynamic Spec Lines overlay */}
      <div className="absolute bottom-3 left-4 font-mono text-[9px] text-zinc-400 flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-accent inline-block" />
        <span>CORE DIE // ACTIVE</span>
      </div>
      <div className="absolute top-3 right-4 font-mono text-[8px] text-zinc-400 tracking-wider">
        <span>STRTX-90</span>
      </div>
    </div>
  );
}

export default CpuArchitecture;
