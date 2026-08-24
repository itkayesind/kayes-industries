import React, { useState } from 'react';
import { GLOSSARY_TERMS, type GlossaryTerm } from '../data/glossary';
import { BookOpen, Search, ChevronDown, Sparkles, Tag, ArrowRight } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = ['All', 'Abrasives', 'Bonding Systems', 'Machining & Tooling', 'Quality & Standards'];

  const filteredTerms = GLOSSARY_TERMS.filter((term) => {
    const matchesCat = activeCategory === 'All' || term.category === activeCategory;
    const matchesSearch = 
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.shortDef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.fullExplanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="glossary" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-2">
              <span className="w-6 h-px bg-brand-600"></span>
              Superabrasive Knowledge Base
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Industrial Superabrasive Glossary
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mt-3 md:mt-0 leading-relaxed">
            Essential reference terminology covering diamond crystal chemistry, metallurgical matrix bonding, and ISO manufacturing protocols.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search superabrasive terms (e.g. PCD, Concentration, Sintering)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Terms Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map((t, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={t.term}
                className={`border rounded-2xl transition-all ${
                  isExpanded 
                    ? 'bg-slate-50/80 border-slate-300 shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                        {t.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {t.term}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {t.shortDef}
                    </p>
                  </div>

                  <div className={`p-1.5 rounded-lg bg-slate-100 text-slate-500 transition-transform ${isExpanded ? 'rotate-180 bg-slate-200 text-slate-800' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-0 border-t border-slate-200/60 mt-1 space-y-3">
                    <p className="text-xs text-slate-700 leading-relaxed pt-3">
                      {t.fullExplanation}
                    </p>

                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Related:</span>
                      {t.relatedTerms.map((rt) => (
                        <span key={rt} className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                          {rt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
