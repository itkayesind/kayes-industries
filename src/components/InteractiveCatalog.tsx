import React, { useState, useMemo } from 'react';
import { CATALOG_PRODUCTS, type ProductItem } from '../data/catalog';
import { Search, X, MessageSquare, Check, Sparkles } from 'lucide-react';

export const InteractiveCatalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Tooling' },
    { id: 'glass', label: 'Glass Industry' },
    { id: 'semiconductor', label: 'Semiconductor & Ceramic (R&D)' },
    { id: 'toolroom', label: 'Toolroom & Precision' },
    { id: 'abrasives', label: 'Diamond Powders' }
  ];

  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((prod) => {
      const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
      const matchesSearch = 
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (prod.shapes && prod.shapes.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (prod.targetSectors && prod.targetSectors.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleInquire = (product: ProductItem) => {
    const text = encodeURIComponent(
      `Hello KAYES INDUSTRIES PVT LTD, I would like to inquire about specifications and pricing for: ${product.name}.`
    );
    window.open(`https://wa.me/919841279658?text=${text}`, '_blank');
  };

  return (
    <section id="catalog" className="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-slate-100/60 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-px bg-slate-400"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
              Engineered Product Catalogue
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-brand">
            Product Directory
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed">
            Formulations engineered for high-precision glass processing, advanced ceramic fabrication, and semiconductor micro-machining.
          </p>
        </div>

        {/* Filter Controls Bar with Scroll Reveal */}
        <div className="bg-[#FAF9F6] rounded-2xl border border-slate-200/90 p-4 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between shadow-2xs reveal-on-scroll">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs scale-102'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat.id === 'semiconductor' && <Sparkles className="w-3 h-3 text-amber-400" />}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, ISO shapes, grits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className={`corporate-card rounded-2xl overflow-hidden flex flex-col justify-between bg-white shadow-2xs border-slate-200/90 group reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[16/10] bg-slate-100 border-b border-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/95 text-slate-800 border border-slate-200 shadow-2xs backdrop-blur-xs">
                    {product.pageRef}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] block mb-1 font-brand">
                    {product.categoryName}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug font-sans group-hover:text-slate-800 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {product.summary}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 mb-4 text-xs text-slate-700">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Target Sectors / Shapes Tags */}
                  {product.targetSectors && (
                    <div className="pt-3.5 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
                      {product.targetSectors.map((sector) => (
                        <span key={sector} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-700">
                          {sector}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center gap-2.5">
                <button
                  onClick={() => handleInquire(product)}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-all flex items-center justify-center gap-2 tracking-wide btn-luxury cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire WhatsApp</span>
                </button>

                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  Specs
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details with Luxury Scale Animation */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative animate-brand-reveal">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] font-brand">
                  {activeModalProduct.categoryName} &bull; {activeModalProduct.pageRef}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 font-brand">
                  {activeModalProduct.name}
                </h3>
              </div>

              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-5 border border-slate-200">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {activeModalProduct.summary}
              </p>

              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-brand">Technical Specifications:</h4>
                <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 text-xs">
                  {activeModalProduct.specs.map((sp) => (
                    <div key={sp.label} className="p-3 flex justify-between bg-slate-50/40">
                      <span className="text-slate-500">{sp.label}</span>
                      <span className="font-semibold text-slate-800 text-right">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleInquire(activeModalProduct)}
                  className="w-full py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 tracking-wide btn-luxury cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry (+91 9841279658)</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
