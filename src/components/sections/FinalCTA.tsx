import React from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";
import CpuArchitecture from "../ui/CpuArchitecture";
import { useBooking } from "../../providers/CalendlyProvider";

export function FinalCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="py-24 md:py-32 bg-background-custom relative overflow-hidden text-foreground-custom border-t border-zinc-200/40 dark:border-zinc-800/20">
      
      {/* Background glow node meshes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-accent/3 dark:bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Content panel */}
        <AnimatedSection className="space-y-8 text-left">
          <div className="space-y-4">
            <EyebrowBadge>COMMISSION PORTAL</EyebrowBadge>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-foreground-custom">
              COMPILE YOUR
              <br />
              <span className="text-muted-custom font-normal">DIGITAL PORTAL.</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-muted-custom leading-relaxed max-w-sm">
              Launch a bespoke workspace calibration. Connect our experience engineers with your product coordinates to secure continuous 120Hz canvas alignments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            <button
              onClick={openBooking}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-900 dark:hover:bg-zinc-100 font-mono text-xs uppercase font-bold tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl"
            >
              <span>Design Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#faq"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-zinc-200/50 dark:border-zinc-800/40 text-muted-custom hover:text-foreground-custom font-sans text-xs uppercase font-semibold tracking-wide cursor-pointer transition-colors"
            >
              System Operations
            </a>
          </div>
        </AnimatedSection>

        {/* Right: CPU Circuit Visualization */}
        <AnimatedSection className="flex justify-center md:justify-end">
          <div className="relative group p-1.5 rounded-[28px] card-surface shadow-2xl hover:scale-[1.01] transition-all duration-500">
            <CpuArchitecture />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

export default FinalCTA;
