import React, { useEffect, useRef, useState } from "react";
import { MoveRight, ArrowUpRight, FolderGit, Cpu, Disc, Database, Sparkles } from "lucide-react";
import { useBooking } from "../../providers/CalendlyProvider";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  tech: string[];
}

export function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeProj, setActiveProj] = useState<number>(0); // 0: None, 1-5: Projs
  const [showCta, setShowCta] = useState(false);
  const { openBooking } = useBooking();

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Aether Spatial",
      category: "3D DIGITAL TWIN",
      desc: "An immersive, GPU-compiled spatial layout editor mapping microscopic mechanical architectures dynamically inside the canvas.",
      icon: Cpu,
      tech: ["WebGL Core", "Three.js Matrix", "Procedural Paths"],
    },
    {
      id: 2,
      title: "Vertex Core Modeler",
      category: "INTERACTIVE TOPOLOGY",
      desc: "A physics-driven node grid mapping complex structural neural clusters with direct user interaction and zero viewport latency.",
      icon: Database,
      tech: ["Dual Buffer Canvas", "Force-Directed Math", "JSON Coordinates"],
    },
    {
      id: 3,
      title: "Helios Grid Simulator",
      category: "ASTRONOMICAL PHYSICS",
      desc: "Procedural orbital vector maps tracking high-resolution solar magnetic anomalies and radiation matrices in real-time.",
      icon: Disc,
      tech: ["Raw Canvas Context", "Coordinate Projection", "DPR 2x Opt"],
    },
    {
      id: 4,
      title: "Synapse Gateway",
      category: "NETWORK SPECS",
      desc: "Live visualizer illustrating deep server latency lanes, routing pathways, and network telemetry via glowing SVG meshes.",
      icon: Sparkles,
      tech: ["SVG Paths Keyframes", "Spring Transitions", "LocalStorage State"],
    },
    {
      id: 5,
      title: "Atlas Quantum Suite",
      category: "QUANTUM INSTRUMENTS",
      desc: "A refined Swiss-modern cockpit monitoring atomic qubits and thermodynamic noise thresholds in heavy cryogenic nodes.",
      icon: FolderGit,
      tech: ["Geist Mono styling", "Minimalist layout", "Neumorphic dials"],
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      drawTunnel(currentProgressRef.current);
    }

    const currentProgressRef = { current: 0 };
    const tickingRef = { current: false };

    // Advanced, highly stylized 3D wireframe perspective tunnel which zooms and bends towards a vanishing point.
    function drawTunnel(progress: number) {
      if (!ctx || width === 0 || height === 0) return;
      
      // Force dark backgrounds for Projects Showcase section to enhance cinematic cosmic focus
      ctx.fillStyle = "#0c0c0e";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle starry space dust
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      for (let i = 0; i < 45; i++) {
        // Seeded RNG-like placements that remain static relative to progress
        const seedX = Math.sin(i * 442) * centerX * 1.5;
        const seedY = Math.cos(i * 181) * centerY * 1.5;
        const seedZ = ((i * 12 + progress * 50) % 100) / 100; // Moving depth stars
        
        const starX = centerX + seedX * seedZ;
        const starY = centerY + seedY * seedZ;
        const starSize = (1 - seedZ) * 2;
        
        if (starX > 0 && starX < width && starY > 0 && starY < height) {
          ctx.beginPath();
          ctx.arc(starX, starY, Math.max(0.5, starSize), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Pre-calculate concentric tunnel grids
      const ringCount = 14;
      const accentColor = "rgba(99, 102, 241, 0.4)";
      const depthColor = "rgba(255, 255, 255, 0.04)";

      ctx.save();
      ctx.translate(centerX, centerY);

      // S-curve slight camera bending as you travel deeper
      const bendX = Math.sin(progress * Math.PI * 2) * 45;
      const bendY = Math.cos(progress * Math.PI * 2.5) * 25;

      for (let i = 0; i < ringCount; i++) {
        // Map individual concentric ring's depth sequence
        const ringProgress = ((i / ringCount + progress) % 1.0);
        const radius = Math.pow(ringProgress, 2.5) * Math.max(width, height) * 0.9;
        
        if (radius < 5) continue;

        // Draw concentric rect coordinates representing the tunnel walls
        ctx.strokeStyle = ringProgress > 0.85 ? "rgba(99, 102, 241, " + (1 - ringProgress) * 0.9 + ")" : depthColor;
        ctx.lineWidth = 0.5 + ringProgress * 1.5;

        ctx.beginPath();
        // Dislocate centers to mimic cinematic camera tracking moves
        const offsetMultiplier = 1 - ringProgress;
        const oX = bendX * offsetMultiplier;
        const oY = bendY * offsetMultiplier;

        ctx.rect(oX - radius / 2, oY - radius / 2, radius, radius);
        ctx.stroke();

        // Connect tunnel corners towards perspective center
        if (i % 3 === 0) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
          ctx.beginPath();
          ctx.moveTo(oX - radius / 2, oY - radius / 2);
          ctx.lineTo(0, 0);
          ctx.moveTo(oX + radius / 2, oY - radius / 2);
          ctx.lineTo(0, 0);
          ctx.stroke();
        }
      }

      ctx.restore();
    }

    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollHeight = section.clientHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight));

      currentProgressRef.current = progress;

      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          drawTunnel(currentProgressRef.current);

          // Evaluate active project index bands
          let activeIndex = 0;
          if (progress >= 0.05 && progress < 0.20) activeIndex = 1;
          else if (progress >= 0.20 && progress < 0.35) activeIndex = 2;
          else if (progress >= 0.35 && progress < 0.50) activeIndex = 3;
          else if (progress >= 0.50 && progress < 0.65) activeIndex = 4;
          else if (progress >= 0.65 && progress < 0.80) activeIndex = 5;

          setActiveProj(activeIndex);

          // Evaluates bottom CTA visibility zone
          setShowCta(progress >= 0.80);

          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative w-full h-[220vh] md:h-[300vh] bg-zinc-950 text-white overflow-clip select-none"
    >
      {/* Sticky Inner Frame */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover block will-change-transform opacity-95"
        />

        {/* Cinematic dark lens grids overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none z-10" />

        {/* Dynamic Project slide displays */}
        <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-start z-20 pointer-events-none">
          <div className="relative max-w-lg w-full">
            {projects.map((proj) => {
              const Icon = proj.icon;
              const isActive = activeProj === proj.id;
              return (
                <div
                  key={proj.id}
                  className={`absolute top-1/2 left-0 -translate-y-1/2 w-full glass-surface border-zinc-850 bg-zinc-950/70 p-8 rounded-3xl space-y-5 transition-all duration-500 transform ${
                    isActive
                      ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-x-8 pointer-events-none"
                  }`}
                >
                  {/* Category and Icon badge */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      {proj.category}
                    </span>
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>

                  <div className="space-y-2">
                    <span className="block font-mono text-[10px] text-zinc-500">PROJECT // 0{proj.id}</span>
                    <h3 className="font-sans text-2xl font-extrabold tracking-tight text-white leading-none">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[8px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA slide overlay overlay (appears near end of progress) */}
        <div
          className={`absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-zinc-950/80 backdrop-blur-md transition-all duration-700 ${
            showCta ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="max-w-md text-center space-y-6">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-accent">GO HIGHER</span>
            <div className="space-y-2">
              <h3 className="font-sans text-3xl font-extrabold tracking-tight text-white leading-tight">
                LAUNCH YOUR PORTAL.
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
                Secure a strategic booking with our design team. Let's engineer high-frequency client experience networks natively inside your workspace.
              </p>
            </div>
            <div>
              <button
                onClick={openBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-mono text-xs uppercase font-bold tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[99] transition-all shadow-xl"
              >
                <span>Book Free Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;
