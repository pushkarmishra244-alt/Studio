import React from "react";
import { Layers, Zap, Eye, Sliders } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";
import { OrbitingOrb, TypewriterPanel, Cube3D, WorkflowVisualizer } from "../ui/NeumorphicAssets";

export function BentoFeatures() {
  return (
    <section id="features" className="py-24 md:py-32 bg-background-custom relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-xl space-y-4">
          <EyebrowBadge>BENTO SHOWCASE</EyebrowBadge>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-foreground-custom leading-tight">
            INSTRUMENT PANELS.
            <br />
            <span className="text-muted-custom font-normal">CLINICAL PRECISION SYSTEMS.</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-muted-custom leading-relaxed max-w-sm">
            Observe the active micro-widgets driving our experience modules under high DPI stress conditions.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Bento Card 1: Interactive terminal block (Span 2 on desktop) */}
          <AnimatedItem className="md:col-span-2 group card-surface p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:shadow-lg justify-between items-stretch overflow-hidden">
            <div className="space-y-6 flex flex-col justify-between max-w-xs">
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                  <Sliders className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-sans text-lg font-bold tracking-tight text-foreground-custom">
                  Interactive Core Optimizer
                </h3>
              </div>
              <p className="font-sans text-xs text-muted-custom leading-relaxed">
                A live, diagnostic command pipeline executing procedural coordinates and buffer cycles in real-time, delivering microsecond responses.
              </p>
              <div className="font-mono text-[9px] text-zinc-400">
                <span>MODULE // TERMINAL_BASH_V2</span>
              </div>
            </div>

            {/* Terminal visual asset */}
            <div className="flex-1 min-h-[190px]">
              <TypewriterPanel />
            </div>
          </AnimatedItem>

          {/* Bento Card 2: Workflow Pipeline (Span 1 on desktop) */}
          <AnimatedItem className="group card-surface p-6 md:p-8 flex flex-col hover:shadow-lg justify-between items-stretch">
            <div className="space-y-4 mb-4">
              <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                <Zap className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-sans text-lg font-bold tracking-tight text-foreground-custom">
                Workflow Sync
              </h3>
            </div>
            
            {/* Visual pipeline asset */}
            <div className="my-2">
              <WorkflowVisualizer />
            </div>

            <p className="font-sans text-xs text-muted-custom leading-relaxed mt-4">
              Automated compilation cycles syncing conceptual wireframes directly to live deployed canvas streams.
            </p>
          </AnimatedItem>

          {/* Bento Card 3: Orbiting satellite (Span 1 on desktop) */}
          <AnimatedItem className="group card-surface p-6 md:p-8 flex flex-col hover:shadow-lg justify-between items-stretch">
            <div className="space-y-4 mb-4">
              <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                <Eye className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-sans text-lg font-bold tracking-tight text-foreground-custom">
                Orbiting Matrices
              </h3>
            </div>

            {/* Orbiting orb visual asset */}
            <div className="my-2">
              <OrbitingOrb />
            </div>

            <p className="font-sans text-xs text-muted-custom leading-relaxed mt-4">
              Continuous gravitational orbit tracking showing consistent radial alignments on complex layout anchors.
            </p>
          </AnimatedItem>

          {/* Bento Card 4: CSS 3D Cube (Span 2 on desktop) */}
          <AnimatedItem className="md:col-span-2 group card-surface p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:shadow-lg justify-between items-stretch overflow-hidden">
            {/* Cube visual asset */}
            <div className="flex-1 flex items-center justify-center min-h-[190px]">
              <Cube3D />
            </div>

            <div className="space-y-6 flex flex-col justify-between max-w-xs">
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                  <Layers className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-sans text-lg font-bold tracking-tight text-foreground-custom">
                  3D Matrix Transform
                </h3>
              </div>
              <p className="font-sans text-xs text-muted-custom leading-relaxed">
                Utilizes hardware-accelerated CSS perspective matrices rotating and scaling along 3 axes natively inside the viewport layout context.
              </p>
              <div className="font-mono text-[9px] text-zinc-400">
                <span>MATRIX // RENDER_MATRIX_3D</span>
              </div>
            </div>
          </AnimatedItem>

        </AnimatedSection>
      </div>
    </section>
  );
}

export default BentoFeatures;
