import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero-experience', title: 'ÉCLAT INTRO' },
  { id: 'anatomy', title: 'THE ANATOMY' },
  { id: 'olfactory-accord', title: 'OLFACTORY ACCORD' },
  { id: 'signature-product', title: 'SIGNATURE FLACON' },
  { id: 'collection', title: 'LA COLLECTION' },
  { id: 'ritual', title: 'SCENT RITUAL' },
  { id: 'manifesto', title: 'MAISON MANIFESTO' }
];

export default function ProgressIndicator() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let bestMatch = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!bestMatch || entry.intersectionRatio > bestMatch.intersectionRatio) {
            bestMatch = entry;
          }
        }
      });
      
      if (bestMatch) {
        const index = sections.findIndex(s => s.id === bestMatch.target.id);
        if (index !== -1) setActiveSection(index);
      }
    }, { threshold: [0.1, 0.3, 0.5], rootMargin: '-10% 0px -10% 0px' });

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentNum = String(activeSection + 1).padStart(2, '0');
  const totalNum = String(sections.length).padStart(2, '0');
  const currentTitle = sections[activeSection].title;

  return (
    <div className="hidden xl:flex fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-6 drop-shadow-md bg-noir-950/40 backdrop-blur-md px-3 py-8 rounded-full border border-champagne-500/10">
      <span className="text-[9px] tracking-[0.3em] uppercase text-champagne-400/90 [writing-mode:vertical-rl] rotate-180 drop-shadow-md">
        {currentNum} / {totalNum} — {currentTitle}
      </span>
      <div className="w-[1px] h-24 bg-champagne-500/20 relative overflow-hidden rounded-full">
        <div 
          className="w-full bg-champagne-400 transition-all duration-700 ease-in-out" 
          style={{ height: `${((activeSection + 1) / sections.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
