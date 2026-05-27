import React from "react";
import SmoothScrollProvider from "./providers/SmoothScrollProvider";
import CalendlyProvider from "./providers/CalendlyProvider";

// Component Sections
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import CoreServices from "./components/sections/CoreServices";
import ProjectsShowcase from "./components/sections/ProjectsShowcase";
import BentoFeatures from "./components/sections/BentoFeatures";
import ProcessMethodology from "./components/sections/ProcessMethodology";
import TestimonialsStats from "./components/sections/TestimonialsStats";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";

// UI elements
import FAQSchema from "./components/sections/FAQSchema";
import CalendlyModal from "./components/ui/CalendlyModal";

export default function App() {
  return (
    <SmoothScrollProvider>
      <CalendlyProvider>
        {/* SEO Structured schema data markup */}
        <FAQSchema />

        {/* Core Layout Structure */}
        <div className="relative min-h-screen bg-background-custom text-foreground-custom antialiased transition-colors duration-300">
          
          {/* Sticky global navigation */}
          <Navbar />

          {/* Landing Composition blocks */}
          <main>
            <Hero />
            <CoreServices />
            <ProjectsShowcase />
            <BentoFeatures />
            <ProcessMethodology />
            <TestimonialsStats />
            <FAQ />
            <FinalCTA />
          </main>

          {/* Understated minimalist Studio footer */}
          <Footer />

          {/* Global Consultation Booking overlay */}
          <CalendlyModal />
        </div>
      </CalendlyProvider>
    </SmoothScrollProvider>
  );
}
