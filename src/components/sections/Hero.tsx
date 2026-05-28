import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Layers, Monitor, Cpu } from "lucide-react";
import Button from "../ui/Button";
import EyebrowBadge from "../ui/EyebrowBadge";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadingProgressRef = useRef<number>(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeCard, setActiveCard] = useState<number>(0); // 0: None, 1: Card1, 2: Card2, 3: Card3

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Handle Resize
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
      drawFrame(currentProgressRef.current);
    }

    const currentProgressRef = { current: 0 };
    const tickingRef = { current: false };

    // Let's create an incredible, highly stylized procedural drawing of a 3D architecture
    // with orbiting rings, nodes, lines, and custom angles that responds dynamically to progress.
    function drawFrame(progress: number) {
      if (!ctx || width === 0 || height === 0) return;
      ctx.clearRect(0, 0, width, height);

      // Render Background Gradient
      const isDark = document.documentElement.classList.contains("dark");
      const bgStyle = isDark ? "#09090b" : "#f5f5f5";
      ctx.fillStyle = bgStyle;
      ctx.fillRect(0, 0, width, height);

      // Define visual centers and drawing parameters
      const centerX = width / 2;
      const centerY = height / 2;
      const radiusBase = Math.min(width, height) * 0.28;

      // Mobile zooms
      const isMobile = window.innerWidth < 768;
      const mobileZoom = isMobile ? 1.35 : 1.0;
      const zoom = (1.0 + progress * 0.82) * mobileZoom;

      // Base grid color
      const gridColor = isDark ? "rgba(250, 250, 250, 0.05)" : "rgba(9, 9, 11, 0.04)";
      const accentColor = isDark ? "rgba(99, 102, 241, 0.85)" : "rgba(79, 70, 229, 0.85)";
      const secondaryColor = isDark ? "rgba(250, 250, 250, 0.3)" : "rgba(9, 9, 11, 0.3)";

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(zoom, zoom);

      // Rotations centered on axes
      const angle = progress * Math.PI * 1.5;
      ctx.rotate(angle * 0.15);

      // Draw global grids
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(i * 35, -height);
        ctx.lineTo(i * 35, height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-width, i * 35);
        ctx.lineTo(width, i * 35);
        ctx.stroke();
      }

      // Draw Concentric outer glowing rings
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(0, 0, radiusBase * r * 0.45, 0, Math.PI * 2);
        ctx.strokeStyle = r === 1 ? accentColor : gridColor;
        ctx.lineWidth = r === 1 ? 1 : 0.5;
        ctx.stroke();
      }

      // Procedural 3D Network node coordinates
      const nodesCount = 18;
      const points: { x: number; y: number; z: number }[] = [];
      for (let i = 0; i < nodesCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / nodesCount);
        const theta = Math.sqrt(nodesCount * Math.PI) * phi;
        points.push({
          x: Math.sin(phi) * Math.cos(theta) * radiusBase,
          y: Math.sin(phi) * Math.sin(theta) * radiusBase,
          z: Math.cos(phi) * radiusBase,
        });
      }

      // Simple 3D projection rotation on progressive timeline
      points.forEach((pt, idx) => {
        // Rotate points
        const radX = angle * 0.25;
        const radY = angle * 0.18;
        
        // Rotate X
        let y1 = pt.y * Math.cos(radX) - pt.z * Math.sin(radX);
        let z1 = pt.y * Math.sin(radX) + pt.z * Math.cos(radX);

        // Rotate Y
        let x2 = pt.x * Math.cos(radY) + z1 * Math.sin(radY);
        let z2 = -pt.x * Math.sin(radY) + z1 * Math.cos(radY);

        // Map projection
        const scaleProj = 200 / (200 + z2 * 0.3);
        const projX = x2 * scaleProj;
        const projY = y1 * scaleProj;

        // Draw node points
        const isFocusNode = idx % 5 === 0;
        ctx.beginPath();
        ctx.arc(projX, projY, isFocusNode ? 3.5 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = isFocusNode ? accentColor : secondaryColor;
        ctx.fill();

        // Trace vectors connecting to previous nodes
        if (idx > 0) {
          ctx.beginPath();
          ctx.moveTo(projX, projY);
          const lastX = points[idx - 1].x;
          // Rotate last position
          let ly1 = points[idx - 1].y * Math.cos(radX) - points[idx - 1].z * Math.sin(radX);
          let lz1 = points[idx - 1].y * Math.sin(radX) + points[idx - 1].z * Math.cos(radX);
          let lx2 = lastX * Math.cos(radY) + lz1 * Math.sin(radY);
          let lz2 = -lastX * Math.sin(radY) + lz1 * Math.cos(radY);
          const lScale = 200 / (200 + lz2 * 0.3);
          ctx.lineTo(lx2 * lScale, ly1 * lScale);
          ctx.strokeStyle = indexLinesColor(progress, idx, isDark);
          ctx.lineWidth = idx % 3 === 0 ? 0.75 : 0.35;
          ctx.stroke();
        }
      });

      ctx.restore();
    }

    function indexLinesColor(p: number, idx: number, isDark: boolean) {
      if (idx % 6 === 0) {
        return isDark ? "rgba(99, 102, 241, 0.45)" : "rgba(79, 70, 229, 0.45)";
      }
      return isDark ? "rgba(250, 250, 250, 0.08)" : "rgba(9, 9, 11, 0.08)";
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
          drawFrame(currentProgressRef.current);
          
          // Apply fast DOM updates for opacity & transitions of non-react state nodes
          const textOverlay = document.getElementById("hero-text-overlay");
          if (textOverlay) {
            const outProgress = Math.min(1, progress / 0.12); // Speed up fadeout during first 12%
            textOverlay.style.opacity = (1 - outProgress).toString();
            textOverlay.style.visibility = outProgress === 1 ? "hidden" : "visible";
          }

          // Evaluate discreet thresholds for annotation cards
          let activeIndex = 0;
          if (progress >= 0.15 && progress <= 0.42) activeIndex = 1;
          else if (progress >= 0.44 && progress <= 0.70) activeIndex = 2;
          else if (progress >= 0.72 && progress <= 1.0) activeIndex = 3;

          setActiveCard((prev) => {
            if (prev !== activeIndex) {
              return activeIndex;
            }
            return prev;
          });

          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    }

    // Initialize Draw
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resize);
    
    // Simulate interactive preload
    const interval = setInterval(() => {
      loadingProgressRef.current += 10;
      if (loadingProgressRef.current >= 100) {
        clearInterval(interval);
        setLoadingComplete(true);
        resize();
      }
    }, 60);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[180vh] md:h-[250vh] bg-background-custom select-none"
    >
      {/* Sticky Inner Frame Wrapper */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover block will-change-transform opacity-95 transition-all duration-300"
        />

        {/* Loading preloader overlays */}
        {!loadingComplete && (
          <div className="absolute inset-0 bg-background-custom z-50 flex flex-col items-center justify-center p-6 transition-opacity duration-500">
            <div className="space-y-4 max-w-xs w-full text-center">
              <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-semibold">
                LOADING EXPERIENCE MATRICES
              </span>
              <div className="h-[2px] w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-accent animate-infinite-loading transition-all duration-200" style={{ width: `${loadingProgressRef.current}%` }} />
              </div>
              <span className="block font-mono text-[8px] text-zinc-400">
                PRE-RENDERING 106 FRAMES COLLATERAL
              </span>
            </div>
          </div>
        )}

        {/* Dark overlay for immersive focus ranges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-custom/10 to-transparent pointer-events-none z-10" />

        {/* Dynamic Card annotations layout */}
        <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center z-20 pointer-events-none">
          {/* Card 1: Left */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-6 md:left-12 max-w-sm w-[calc(100%-3rem)] md:w-auto card-surface border-zinc-200/50 p-6 md:p-8 space-y-4 transition-all duration-500 transform ${
              activeCard === 1
                ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-x-6 pointer-events-none"
            }`}
          >
            <div className="inline-flex p-2 rounded-xl bg-accent/10 text-accent">
              <Monitor className="w-4 h-4" />
            </div>
            <h4 className="font-sans text-sm font-semibold text-foreground-custom">01 // Procedural Matrices</h4>
            <p className="font-sans text-xs text-muted-custom leading-relaxed">
              Real-time, math-driven Canvas matrix nodes that react with smooth momentum during scroll scrub sequences, completely bypassing expensive runtime libraries.
            </p>
          </div>

          {/* Card 2: Right */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 right-6 md:right-12 max-w-sm w-[calc(100%-3rem)] md:w-auto card-surface border-zinc-200/50 p-6 md:p-8 space-y-4 transition-all duration-500 transform ${
              activeCard === 2
                ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                : "opacity-0 scale-95 translate-x-6 pointer-events-none"
            }`}
          >
            <div className="inline-flex p-2 rounded-xl bg-accent/10 text-accent">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="font-sans text-sm font-semibold text-foreground-custom">02 // Seamless Direct Renders</h4>
            <p className="font-sans text-xs text-muted-custom leading-relaxed">
              Utilizes dual-buffer drawing scales relative to `devicePixelRatio` to prevent frame blur, preserving microscopic vectors at extreme scroll scales.
            </p>
          </div>

          {/* Card 3: Bottom Center */}
          <div
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 max-w-sm w-[calc(100%-2.5rem)] card-surface border-zinc-200/50 p-6 md:p-8 space-y-4 text-center transition-all duration-500 transform ${
              activeCard === 3
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 translate-y-6 pointer-events-none"
            }`}
          >
            <div className="inline-flex p-2 rounded-xl bg-accent/10 text-accent mx-auto">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="font-sans text-sm font-semibold text-foreground-custom">03 // Sync Architectures</h4>
            <p className="font-sans text-xs text-muted-custom leading-relaxed">
              Bespoke experience templates deploying unified design systems, providing digital agencies absolute layout discipline and high frame performance.
            </p>
          </div>
        </div>

        {/* Overlaid Core Branding (Centered static at start) */}
        <div
          id="hero-text-overlay"
          className="relative max-w-3xl mx-auto px-6 text-center space-y-7 z-30 transition-all duration-300 pointer-events-auto"
        >
          <div className="space-y-2">
            <EyebrowBadge>EXPERIENCE STUDIO // 2026</EyebrowBadge>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              AESTHETIC CORES.
              <br />
              <span className="text-muted-custom font-normal">CINEMATIC SCROLLS.</span>
            </h1>
          </div>
          
          <p className="font-sans text-sm md:text-base text-muted-custom max-w-md mx-auto leading-relaxed">
            Architecting agency-quality digital platforms driven by high-performance canvas geometries, premium neumorphic surfaces, and responsive interactive products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Button variant="primary" href="#services" showArrow>
              Explore Studio
            </Button>
            <Button variant="secondary" href="#process">
              Our Methodology
            </Button>
          </div>

          {/* Scroll indicators */}
          <div className="flex flex-col items-center gap-1.5 pt-16 text-zinc-400 font-mono text-[9px] uppercase tracking-widest animate-bounce">
            <span>Scroll Scrub for Core</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
