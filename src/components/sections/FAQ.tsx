import React, { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "../ui/AnimatedSection";
import EyebrowBadge from "../ui/EyebrowBadge";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is a pre-rendered frame sequence and how does it compare to standard WebGL?",
      answer: "A pre-rendered sequence pre-compiles high-end camera movements, lights, and geometry textures into optimized vector frames. Instead of forcing mobile CPUs to compute bulky raw shaders in WebGL in real-time, we draw these frames directly onto a Canvas wrapper at exact scroll steps, maximizing graphics fidelity while bypassing runtime stuttering.",
    },
    {
      question: "How does the Canvas rendering keep drawings sharp on high-definition retina viewports?",
      answer: "We query the browser's native `devicePixelRatio` (up to a safe limit of 2x) and buffer-scale our canvas dimensions proportionately on resize. Combined with cover-fit rendering logic, this ensures every vector line holds clinical pixel sharpness instead of looking scaled or blurred on high DPI displays.",
    },
    {
      question: "Does the rapid scroll-scrub loop impact device battery or CPU cycles?",
      answer: "No. Our scroll engine is engineered with strict optimization patterns. We throttle calculations inside of `requestAnimationFrame` and skip local React state updates on scroll ticks, writing direct DOM updates instead. This ensures scrolling holds a consistent, smooth 60+ FPS without draining CPU cycles.",
    },
    {
      question: "How easily can I swap the procedurally rendered fallback scenes with static image sequences?",
      answer: "The layout sections contain a unified preloading array that maps sequence frames under `/public/frames/` out of the box. Simply supply your exported JPG assets in that partition, and the preloader will automatically transition from procedural fallback drawing to static frame sequences.",
    },
    {
      question: "Is there a custom fallback implemented for browsers requesting reduced motion?",
      answer: "Yes. Our visual structure detects standard `prefers-reduced-motion` browser preferences. If a user has reduced motion turned on, we skip scroll-scrubbed canvas timeline scales, rendering a stationary, high-fidelity frame still while preserving full access to our layout structures, cards, and CTA flows.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-background-custom relative overflow-hidden text-foreground-custom">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <AnimatedSection className="text-center space-y-4 max-w-xl mx-auto">
          <EyebrowBadge>COMMON ANSWERS</EyebrowBadge>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            ACCESSED STRATEGIES.
            <br />
            <span className="text-muted-custom font-normal">SPECIFICATIONS RESOLVED.</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-muted-custom leading-relaxed">
            Examine our high-level architectural constraints and deployment mechanics.
          </p>
        </AnimatedSection>

        {/* FAQ Accordion Lists */}
        <AnimatedSection className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={i}
                className="card-surface p-5 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-accent">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-foreground-custom">
                      {f.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    >
                      <div className="border-t border-zinc-100 dark:border-zinc-800/60 mt-4 pt-4">
                        <p className="font-sans text-xs text-muted-custom leading-relaxed pl-7">
                          {f.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatedSection>

      </div>
    </section>
  );
}

export default FAQ;
