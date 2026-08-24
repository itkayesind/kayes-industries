import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const AssistedSectionNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('brand-hero');
  const [visible, setVisible] = useState(false);

  const sections = [
    { id: 'brand-hero', label: 'Brand' },
    { id: 'industries-overview', label: 'Industries' },
    { id: 'catalog', label: 'Catalog' },
    { id: 'wheel-types', label: 'Wheel Types' },
    { id: 'grit-matrix', label: 'Grit Matrix' },
    { id: 'about', label: 'About' },
    { id: 'inquiry', label: 'RFQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentIndex = sections.findIndex((s) => s.id === activeSection);

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1].id);
    }
  };

  if (!visible) return null;

  return (
    <aside aria-label="Assisted Section Navigation" className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-2xl border border-slate-200 shadow-md animate-fade-in">
      {/* Scroll Up button */}
      <button
        onClick={handlePrev}
        disabled={currentIndex <= 0}
        aria-label="Scroll to previous section"
        className={`p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors ${
          currentIndex <= 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Section Dots */}
      <div className="flex flex-col gap-2.5 py-1.5">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group relative flex items-center justify-center p-1 focus:outline-none cursor-pointer"
              aria-label={`Scroll to ${sec.label}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-6 bg-slate-900'
                    : 'w-2 h-2 bg-slate-300 group-hover:bg-slate-500'
                }`}
              />

              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-xs">
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Scroll Down button */}
      <button
        onClick={handleNext}
        disabled={currentIndex >= sections.length - 1}
        aria-label="Scroll to next section"
        className={`p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors ${
          currentIndex >= sections.length - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </aside>
  );
};
