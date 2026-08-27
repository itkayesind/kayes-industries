import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  images: ImageItem[];
  cols?: string;
  initialVisible?: number;
}

export const LightboxGallery: React.FC<Props> = ({ images, cols = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", initialVisible = 12 }) => {
  const [selected, setSelected] = useState<ImageItem | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, initialVisible);
  const hasMore = images.length > initialVisible;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    if (selected) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <>
      <div className={`grid ${cols} gap-4`}>
        {visibleImages.map((img, i) => (
          <button key={i} onClick={() => setSelected(img)} className="group border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-300 text-left flex flex-col">
            <img src={img.src} alt={img.alt} className="w-full h-28 object-cover group-hover:opacity-90" loading="lazy" />
            {img.caption && (
              <div className="px-2.5 py-2 bg-slate-50 border-t border-slate-200">
                <p className="text-xs font-medium text-slate-800 line-clamp-2 leading-snug">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button onClick={() => setShowAll(!showAll)} className="inline-flex items-center gap-1.5 text-sm font-semibold border border-slate-200 hover:border-slate-300 rounded-xl px-5 h-9 bg-white">
            {showAll ? 'Show less' : `See more (${images.length - initialVisible} more)`} <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} className="w-full max-h-[65vh] object-contain bg-slate-50" />
            {selected.caption && (
              <div className="p-4 bg-white border-t border-slate-200">
                <p className="text-sm font-medium text-slate-900">{selected.caption}</p>
                <p className="text-xs text-slate-500 mt-1">{selected.alt}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
