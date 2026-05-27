import React, { useState, useEffect } from "react";
import { Terminal, Database, Server, RefreshCw } from "lucide-react";

// 1. Orbiting Orb Asset
export function OrbitingOrb() {
  return (
    <div className="relative w-full aspect-square max-w-[240px] mx-auto flex items-center justify-center card-surface-inset rounded-3xl overflow-hidden select-none">
      <div className="absolute w-[140px] h-[140px] rounded-full border border-dashed border-zinc-200 dark:border-zinc-800 animate-spin-slow" style={{ animationDuration: '25s' }} />
      <div className="absolute w-[100px] h-[100px] rounded-full border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-center">
        {/* Core glowing sphere */}
        <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shadow-lg">
          <div className="w-4 h-4 rounded-full bg-accent" />
        </div>
      </div>

      {/* Actual Orbit Satellite */}
      <div 
        className="absolute w-[140px] h-[140px] animate-spin"
        style={{ animationDuration: '8s', animationTimingFunction: 'linear' }}
      >
        <div className="absolute -top-1.5 left-1/2 -ml-1.5 w-3 h-3 rounded-full bg-accent border-2 border-card-bg-custom shadow-md" />
      </div>

      <div className="absolute bottom-3 text-center w-full font-mono text-[8px] uppercase tracking-widest text-zinc-400">
        <span>CONCENTRIC ORBIT // 12.8ms</span>
      </div>
    </div>
  );
}

// 2. Typewriter Panel Terminal
export function TypewriterPanel() {
  const [lines, setLines] = useState<string[]>(["> INITIALIZING DESIGN STRATEGY..."]);
  const terminalMessages = [
    "> FETCHING SCHEMA CORES... OK",
    "> COMPILING PRE-RENDERED TIMELINE...",
    "> SYNCING CANVAS MATRICES [DPR = 2x]",
    "> GENERATING NEUMORPHIC CONTEXTS...",
    "> OPTIMIZING 106 RENDERING FRAMES...",
    "> ENGAGING CINEMATIC MOTION LOOPS...",
    "> ENGINE EXECUTING AT 60 FPS.",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLines((prev) => {
        const next = [...prev, terminalMessages[index]];
        if (next.length > 5) next.shift();
        return next;
      });
      index = (index + 1) % terminalMessages.length;
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full card-surface-inset rounded-2xl p-4 font-mono text-[10px] text-zinc-600 dark:text-zinc-400 flex flex-col justify-between overflow-hidden relative select-none">
      <div className="flex items-center justify-between border-b border-zinc-200/50 dark:border-zinc-800/40 pb-2 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-1 text-[8px] text-zinc-400">
          <Terminal className="w-2.5 h-2.5" />
          <span>BASH (CORE-OPT)</span>
        </div>
      </div>
      <div className="flex-1 space-y-2 select-text font-mono">
        {lines.map((ln, i) => (
          <div key={i} className={`whitespace-nowrap transition-all duration-300 ${i === lines.length - 1 ? "text-accent font-semibold" : "opacity-85"}`}>
            {ln}
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Interactive Rotating CSS 3D Cube
export function Cube3D() {
  const [rotX, setRotX] = useState(-20);
  const [rotY, setRotY] = useState(35);

  useEffect(() => {
    const handleInterval = () => {
      setRotX((prev) => prev + 0.5);
      setRotY((prev) => prev + 0.8);
    };
    const id = setInterval(handleInterval, 40);
    return () => clearInterval(id);
  }, []);

  const faceStyle = "absolute w-12 h-12 bg-card-bg-custom/85 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center font-mono text-[9px] text-accent";

  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto flex items-center justify-center card-surface-inset rounded-3xl overflow-hidden pointer-events-none select-none">
      <div className="perspective-[500px]">
        <div 
          className="relative w-12 h-12 transform-style-3d transition-transform duration-75"
          style={{ transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)` }}
        >
          {/* Cube Faces */}
          <div className={`${faceStyle}`} style={{ transform: "rotateY(0deg) translateZ(24px)" }}>Z+</div>
          <div className={`${faceStyle}`} style={{ transform: "rotateY(180deg) translateZ(24px)" }}>Z-</div>
          <div className={`${faceStyle}`} style={{ transform: "rotateY(90deg) translateZ(24px)" }}>X+</div>
          <div className={`${faceStyle}`} style={{ transform: "rotateY(-90deg) translateZ(24px)" }}>X-</div>
          <div className={`${faceStyle}`} style={{ transform: "rotateX(90deg) translateZ(24px)" }}>Y+</div>
          <div className={`${faceStyle}`} style={{ transform: "rotateX(-90deg) translateZ(24px)" }}>Y-</div>
        </div>
      </div>
      <div className="absolute bottom-2 text-[8px] font-mono uppercase tracking-widest text-zinc-400">
        <span>CSS 3D MATRIX ENGINE</span>
      </div>
    </div>
  );
}

// 4. Workflow Pipeline Visualizer
export function WorkflowVisualizer() {
  const [currentActive, setCurrentActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentActive((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const steps = [
    { label: "Concept", icon: Database },
    { label: "Compile", icon: RefreshCw },
    { label: "Deploy", icon: Server },
  ];

  return (
    <div className="w-full card-surface-inset rounded-2xl p-4 flex flex-col justify-between aspect-[1.15] select-none">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase font-bold tracking-widest text-zinc-400">PIPELINE FLOW</span>
        <span className="font-mono text-[8px] uppercase tracking-wider text-accent border border-accent/15 px-1.5 py-0.5 rounded">AUTO-SYNC</span>
      </div>

      <div className="flex items-center justify-between relative px-2 py-4">
        {/* Connection pipeline line */}
        <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-zinc-200 dark:bg-zinc-850 -translate-y-1/2 z-0" />
        
        {steps.map((st, i) => {
          const Icon = st.icon;
          const isActive = currentActive === i;
          return (
            <div key={st.label} className="relative z-10 flex flex-col items-center gap-1.5">
              <div 
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 border ${
                  isActive 
                    ? "bg-accent text-white shadow-md border-accent scale-105" 
                    : "bg-card-bg-custom text-zinc-400 border-zinc-200/50 dark:border-zinc-800/40"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "animate-spin" : ""}`} style={{ animationDuration: isActive && i === 1 ? '5s' : '0s' }} />
              </div>
              <span className={`font-mono text-[8px] uppercase tracking-wider ${isActive ? "text-accent font-bold" : "text-zinc-400"}`}>
                {st.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400 border-t border-zinc-200/50 dark:border-zinc-800/40 pt-2">
        <span>SYS STATUS</span>
        <span className="text-green-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
          <span>NOMINAL</span>
        </span>
      </div>
    </div>
  );
}
