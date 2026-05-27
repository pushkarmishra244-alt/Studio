import React from "react";
import { MoveUpRight, Cpu, Compass, HardDrive } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

export function CoreServices() {
  const techStack = ["React 19 Core", "Tailwind CSS v4", "CANVAS STACK", "GPU ACCELERATORS"];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-background-custom overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header Column */}
        <AnimatedSection className="max-w-xl space-y-4">
          <EyebrowBadge>CORE COMPETENCIES</EyebrowBadge>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground-custom leading-tight">
            HIGH-FIDELITY SERVICES.
            <br />
            <span className="text-muted-custom font-normal">UNCOMPROMISED ARCHITECTURE.</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-muted-custom leading-relaxed max-w-sm">
            We operate at the convergence of micro-precision design, 3D Canvas engineering, and robust local persistence.
          </p>
        </AnimatedSection>

        {/* Asymmetrical Layout Grid */}
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Interactive Engineering (Spans 2 columns on desktop) */}
          <AnimatedItem className="md:col-span-2 group relative card-surface p-5 sm:p-8 md:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] md:min-h-[380px] hover:shadow-lg dark:hover:shadow-black/40 overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-accent/[0.03] dark:bg-accent/[0.05] blur-2xl group-hover:bg-accent/[0.07] transition-all duration-500" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl border border-zinc-200/50 dark:border-zinc-850 dark:bg-zinc-950/40 text-accent">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] tracking-wider text-zinc-400">01 // ENGINEERING</span>
              </div>
              
              <div className="space-y-3 max-w-lg">
                <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground-custom">
                  Interactive Canvas & 3D Web Mechanics
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted-custom leading-relaxed">
                  Building bespoke scroll-scrubbed camera timelines and modular canvas wrappers. We draw mathematically perfect shapes using high-performance graphic contexts, optimizing frames for crisp 120Hz displays.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span key={tech} className="font-mono text-[8px] sm:text-[9px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 py-1 px-2.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#process" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-foreground-custom hover:text-accent transition-colors group/link cursor-pointer">
                <span>Core Spec</span>
                <MoveUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </AnimatedItem>

          {/* Card 2: Brand systems (Spans 1 column on desktop) */}
          <AnimatedItem className="group relative card-surface p-5 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] md:min-h-[380px] hover:shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl border border-zinc-200/50 dark:border-zinc-850 dark:bg-zinc-950/40 text-accent">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] tracking-wider text-zinc-400">02 // AESTHETICS</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground-custom">
                  Clinical Brand & Space Identities
                </h3>
                <p className="font-sans text-xs text-muted-custom leading-relaxed">
                  Restrained, Swiss-modern typographic grids paired with delicate, high-contrast layouts. We build visuals shaped by strict architectural proportions.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <span className="font-mono text-[9px] uppercase tracking-wide text-zinc-400 block mb-1">DESIGN LANGUAGE</span>
              <span className="font-sans text-xs text-foreground-custom font-medium block">Swiss Editorial Grid // 20px margins</span>
            </div>
          </AnimatedItem>

          {/* Card 3: Deep Architecture (Spans 3 columns on desktop for scale) */}
          <AnimatedItem className="md:col-span-3 group relative card-surface p-5 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-lg dark:hover:shadow-black/40 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent/[0.02] dark:bg-accent/[0.04] blur-3xl group-hover:bg-accent/[0.06] transition-all duration-500" />
            
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl border border-zinc-200/50 dark:border-zinc-850 dark:bg-zinc-950/40 text-accent">
                  <HardDrive className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] tracking-wider text-zinc-400">03 // STABILITY</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground-custom">
                  Scalable Production Architectures
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted-custom leading-relaxed">
                  We write pristine full-stack code, implementing secure proxy gateways, API integrations, and client caching mechanisms. No shortcuts, no compromises — everything is configured to sustain production loads seamlessly.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col justify-center gap-1.5 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/40 dark:border-zinc-800/30 max-w-xs w-full card-surface-nested">
              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 block border-b border-zinc-200 dark:border-zinc-800 pb-1.5 mb-2">SYS PARAMETERS</span>
              <div className="space-y-1 font-mono text-[9px] text-zinc-500 dark:text-zinc-400">
                <div className="flex justify-between"><span>DPR RESOLUTION:</span><span className="text-foreground-custom font-semibold">2x Native</span></div>
                <div className="flex justify-between"><span>COMPRESSION:</span><span className="text-foreground-custom font-semibold">WebP Level 80</span></div>
                <div className="flex justify-between"><span>LATENCY BIAS:</span><span className="text-foreground-custom font-semibold">Zero-State Caching</span></div>
              </div>
            </div>
          </AnimatedItem>

        </AnimatedSection>
      </div>
    </section>
  );
}

export default CoreServices;
