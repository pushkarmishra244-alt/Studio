import React from "react";

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a pre-rendered frame sequence and how does it compare to standard WebGL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A pre-rendered sequence pre-compiles high-end camera movements, lights, and geometry textures into optimized vector frames. Instead of forcing mobile CPUs to compute bulky raw shaders in WebGL in real-time, we draw these frames directly onto a Canvas wrapper at exact scroll steps, maximizing graphics fidelity while bypassing runtime stuttering."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Canvas rendering keep drawings sharp on high-definition retina viewports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We query the browser's native devicePixelRatio (up to a safe limit of 2x) and buffer-scale our canvas dimensions proportionately on resize. Combined with cover-fit rendering logic, this ensures every vector line holds clinical pixel sharpness instead of looking scaled or blurred on high DPI displays."
        }
      },
      {
        "@type": "Question",
        "name": "Does the rapid scroll-scrub loop impact device battery or CPU cycles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our scroll engine is engineered with strict optimization patterns. We throttle calculations inside of requestAnimationFrame and skip local React state updates on scroll ticks, writing direct DOM updates instead. This ensures scrolling holds a consistent, smooth 60+ FPS without draining CPU cycles."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default FAQSchema;
