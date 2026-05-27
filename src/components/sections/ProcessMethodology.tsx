import React from "react";
import { Search, PenTool, CheckSquare } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

export function ProcessMethodology() {
  const steps = [
    {
      num: "01",
      title: "Cognitive Blueprint",
      desc: "We initiate with strategic workshops, wireframing, and interactive topology specs to align product geometry with your core conversion goals.",
      icon: Search,
      metrics: "Step Duration // 4–10 Working Days",
    },
    {
      num: "02",
      title: "Core Compilation",
      desc: "Our engineers build standard canvas routines and layout matrices, assembling components with strict, pixel-perfect layout disciplines.",
      icon: PenTool,
      metrics: "Continuous Integration // Sandbox Builds",
    },
    {
      num: "03",
      title: "Production Diagnostics",
      desc: "Rigorous performance evaluations across viewports, verifying that frame renders lock to 60+ FPS and that local persistence scripts execute seamlessly.",
      icon: CheckSquare,
      metrics: "Final Deployment // Cloud Run Optimizations",
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-background-custom relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-xl space-y-4">
          <EyebrowBadge>METHODOLOGY PATH</EyebrowBadge>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground-custom leading-tight">
            SYSTEMATIC TRANSITION.
            <br />
            <span className="text-muted-custom font-normal">MEASURED DEPLOYMENTS.</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-muted-custom leading-relaxed max-w-sm">
            We operate with surgical clarity, removing assumptions at every milestone of our creative cycle.
          </p>
        </AnimatedSection>

        {/* Process Timeline Steps */}
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
          
          {/* Subtle line connector through steps */}
          <div className="hidden md:block absolute top-[44px] left-0 w-full h-[1px] bg-zinc-200/60 dark:bg-zinc-800/50 z-0" />

          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <AnimatedItem key={st.num} className="relative z-10 space-y-6">
                
                {/* Visual Connector Header */}
                <div className="flex items-center justify-between">
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-card-bg-custom border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-2xl font-extrabold text-zinc-300 dark:text-zinc-800 tracking-tight">
                    {st.num}
                  </span>
                </div>

                {/* Content Panel */}
                <div className="card-surface p-5 sm:p-8 space-y-4 hover:shadow-md h-[calc(100%-4.5rem)] flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-sans text-base sm:text-lg font-bold tracking-tight text-foreground-custom">
                      {st.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-custom leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
                    <span className="block font-mono text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      {st.metrics}
                    </span>
                  </div>
                </div>

              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ProcessMethodology;
