import React from "react";
import { Quote } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

export function TestimonialsStats() {
  const stats = [
    { value: "99.8%", label: "Frame Rendering Stability", desc: "Tested across high-DPI desktop viewports." },
    { value: "<24ms", label: "Interactive Canvas Latency", desc: "Sustained microsecond timeline responses." },
    { value: "14x", label: "Industry Design Coordinates", desc: "Celebrating editorial and aesthetic awards." },
  ];

  const reviews = [
    {
      quote: "Experience Studio engineered a scroll-driven canvas timeline for our product release that drove record user attention. The visual performance on mobile is simply remarkable.",
      author: "Marcus Vance",
      role: "VP of Product, Aether Systems",
    },
    {
      quote: "Absolute typographic discipline and uncompromised code. The neumorphic card structures look clinical and modern across both themes. Strongly recommended for high-end projects.",
      author: "Elena Rostov",
      role: "Creative Director, Vertex Digital",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background-custom relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* Left Column: Stats Dashboard */}
        <AnimatedSection className="space-y-12">
          <div className="space-y-4">
            <EyebrowBadge>VERIFIABLE METRICS</EyebrowBadge>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-foreground-custom leading-tight">
              PROVEN PERFORMANCE.
              <br />
              <span className="text-muted-custom font-normal">MEASURED CORES.</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-muted-custom leading-relaxed max-w-sm">
              We compile our interactive timelines against heavy diagnostic stress conditions to secure zero frame dropouts.
            </p>
          </div>

          <div className="space-y-6">
            {stats.map((st) => (
              <div key={st.label} className="card-surface p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 hover:shadow-md">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-accent shrink-0 tracking-tight">
                  {st.value}
                </div>
                <div className="space-y-1">
                  <span className="font-sans text-xs font-semibold text-foreground-custom block">{st.label}</span>
                  <span className="font-sans text-[11px] text-muted-custom block leading-relaxed">{st.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right Column: Premium Reviews */}
        <AnimatedSection stagger className="space-y-8 md:mt-16">
          <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
            CLIENT ATTESTATIONS
          </span>

          <div className="space-y-6 md:space-y-8">
            {reviews.map((rev) => (
              <AnimatedItem key={rev.author} className="card-surface p-6 md:p-8 space-y-5 hover:shadow-md relative overflow-hidden">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-100 dark:text-zinc-900 pointer-events-none z-0" />
                
                <p className="font-sans text-xs sm:text-sm text-foreground-custom leading-relaxed italic relative z-10">
                  "{rev.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-[10px] font-bold text-accent select-none">
                    {rev.author[0]}
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold text-foreground-custom block">
                      {rev.author}
                    </span>
                    <span className="font-sans text-[10px] text-muted-custom block">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

export default TestimonialsStats;
