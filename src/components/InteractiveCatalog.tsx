import React, { useState, useEffect } from 'react';
import { CATALOG_PRODUCTS, type ProductItem } from '../data/catalog';
import { Search, Sparkles, MessageSquare, Download, Check, Eye, X } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const InteractiveCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Sync from URL: ?category=glass | ?family=diamond-wheels | ?q= | hash
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    const fam = params.get('family');
    const q = params.get('q') || params.get('search') || params.get('query');
    const validCats = ['all', 'glass', 'semiconductor', 'toolroom', 'abrasives'];
    if (cat && validCats.includes(cat)) {
      setSelectedCategory(cat);
    } else if (fam) {
      const familyToCategory: Record<string, string> = {
        'diamond-wheels': 'glass',
        drills: 'glass',
        grinding: 'glass',
        polishing: 'glass',
        'resin-wheels': 'toolroom',
        custom: 'semiconductor',
      };
      const mapped = familyToCategory[fam];
      if (mapped) setSelectedCategory(mapped);
    }
    if (q) setSearchQuery(q);
    // legacy hash support: #glass, #diamond-wheels, etc.
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash && validCats.includes(hash)) setSelectedCategory(hash);
    else if (hash) {
      const familyToCategory2: Record<string, string> = {
        'diamond-wheels': 'glass',
        drills: 'glass',
        grinding: 'glass',
        polishing: 'glass',
        'resin-wheels': 'toolroom',
        custom: 'semiconductor',
        architecture: 'glass',
        automotive: 'glass',
        watch: 'semiconductor',
      };
      const mapped2 = familyToCategory2[hash];
      if (mapped2) setSelectedCategory(mapped2);
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All Tooling' },
    { id: 'glass', name: 'Glass Industry' },
    { id: 'semiconductor', name: 'Semiconductor (R&D)' },
    { id: 'toolroom', name: 'Toolroom & Resin' },
    { id: 'abrasives', name: 'Diamond Powders' },
  ];

  const filteredProducts = CATALOG_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.shapes && product.shapes.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))) ||
      (product.targetSectors && product.targetSectors.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  const flagshipProduct = CATALOG_PRODUCTS[0];

  const handleInquire = (product: ProductItem) => {
    const text = encodeURIComponent(
      `Hello KAYES INDUSTRIES PVT LTD, I would like to inquire about specifications and pricing for: ${product.name} (Category: ${product.categoryName}).`
    );
    window.open(`https://wa.me/919150025540?text=${text}`, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalProduct(null);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [activeModalProduct]);

  useEffect(() => {
    if (activeModalProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProduct]);

  return (
    <section id="catalog" className="py-16 sm:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle clean dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-on-scroll">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-px bg-slate-400"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
                Standard &amp; Custom Tooling Matrix
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-brand">
              Interactive Product Catalogue
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed font-sans">
              Explore our precision diamond grinding wheels, core drills, router profile tools, and polishers manufactured under rigorous ISO standards for extreme durability.
            </p>
          </div>

          {/* Quick PDF Catalogue Download Link */}
          <div className="mt-4 md:mt-0 flex-shrink-0">
            <a
              href="/catalog.pdf"
              download="Kayes-Catalogue.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF9F6] border border-slate-300 text-xs font-semibold text-slate-900 hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <Download className="w-4 h-4 text-slate-700" />
              <span>Full PDF (4.2 MB)</span>
            </a>
          </div>
        </div>

        {/* Toolbar: Category Filter & Search */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-10 reveal-on-scroll">
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={selectedCategory === cat.id}
                aria-label={`Filter ${cat.name}`}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-corporate-900 text-white border-corporate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat.id === 'semiconductor' && <Sparkles className="w-3 h-3 text-amber-500 mr-1 inline" />}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search profile, diamond grit, tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">
          
          {/* Flagship Hero Bento Tile (Light Theme) */}
          {selectedCategory === 'all' && !searchQuery && (
            <div className="md:col-span-2 lg:col-span-2 bg-[#FAF9F6] text-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-300/80 shadow-md relative overflow-hidden flex flex-col justify-between group">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-900 text-[11px] font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Flagship Tooling &bull; Continuous Sintered</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {flagshipProduct.pageRef}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-4">
                  <div className="sm:col-span-7 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold font-brand tracking-wide text-slate-950">
                      {flagshipProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {flagshipProduct.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {flagshipProduct.shapes?.map((shape, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white text-slate-800 text-[11px] font-mono border border-slate-200 shadow-2xs">
                          {shape}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-5 relative">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 p-3 flex items-center justify-center shadow-2xs">
                      <img
                        src={flagshipProduct.image}
                        alt={flagshipProduct.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="text-xs text-slate-500 font-mono">
                  Machine Compatibility: Bavelloni, Bottero, Intermac, Bovone
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <LiquidButton
                    onClick={() => setActiveModalProduct(flagshipProduct)}
                    variant="outline"
                    size="sm"
                    className="text-slate-800 border-slate-300 hover:bg-white cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specifications</span>
                  </LiquidButton>
                  <LiquidButton
                    onClick={() => handleInquire(flagshipProduct)}
                    size="sm"
                    className="text-slate-950 font-bold cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Tool</span>
                  </LiquidButton>
                </div>
              </div>
            </div>
          )}

          {/* Regular Catalog Cards */}
          {filteredProducts.map((product, index) => {
            if (selectedCategory === 'all' && !searchQuery && index === 0) return null;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-white/90 backdrop-blur-xs text-slate-900 border border-slate-200 shadow-2xs">
                        {product.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 font-brand group-hover:text-slate-950 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
                      {product.summary}
                    </p>

                    {/* Specs Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.shapes?.slice(0, 3).map((shape, i) => (
                        <span key={i} className="text-[10px] font-mono bg-[#FAF9F6] text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {shape}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-2">
                  <LiquidButton
                    onClick={() => handleInquire(product)}
                    size="sm"
                    className="flex-1 text-slate-950 font-semibold cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </LiquidButton>

                  <LiquidButton
                    onClick={() => setActiveModalProduct(product)}
                    variant="outline"
                    size="sm"
                    className="px-3 text-slate-700 hover:text-slate-950 border-slate-200 cursor-pointer"
                    title="View Technical Specifications"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </LiquidButton>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Technical Spec Modal */}
      {activeModalProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProduct.name}
          onClick={() => setActiveModalProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] flex flex-col"
          >
            
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  {activeModalProduct.categoryName} &bull; {activeModalProduct.pageRef}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-brand">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                aria-label="Close dialog"
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-brand mb-2">
                  Technical Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  {activeModalProduct.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-brand mb-2">
                  Key Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProduct.specs.map((spec, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#FAF9F6] border border-slate-200 text-xs font-mono text-slate-800 space-y-0.5">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">{spec.label}</div>
                      <div className="font-semibold text-slate-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
              <a
                href={(() => {
                  const m = activeModalProduct.pageRef?.match(/(\d+)/);
                  const n = m ? m[1] : "3";
                  return `/images/catalog/page_${n}.jpg`;
                })()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-slate-700" />
                <span>View Spec Sheet</span>
              </a>
              <button
                onClick={() => {
                  try {
                    localStorage.setItem('kayes_prefill_product', JSON.stringify(activeModalProduct));
                  } catch {}
                  setActiveModalProduct(null);
                  setTimeout(() => {
                    document.getElementById('inquiry')?.scrollIntoView({behavior:'smooth'});
                  }, 50);
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-xs font-bold text-slate-900 hover:bg-slate-200 transition-colors w-full sm:w-auto cursor-pointer"
              >
                <span>Add to RFQ</span>
              </button>
              <LiquidButton
                onClick={() => handleInquire(activeModalProduct)}
                size="lg"
                className="w-full sm:flex-1 text-slate-950 font-bold cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Quotation via WhatsApp</span>
              </LiquidButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
