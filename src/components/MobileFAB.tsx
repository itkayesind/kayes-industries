import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const MobileFAB: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('brand-hero');
    const threshold = hero ? hero.offsetHeight * 0.9 : window.innerHeight * 0.9;
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <a
        href={COMPANY_INFO.contacts.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-2xl bg-corporate-900 hover:bg-corporate-800 text-white shadow-xl flex items-center justify-center transition-colors border border-corporate-800"
      >
        <span className="absolute inset-0 rounded-2xl bg-corporate-900/15 animate-pulse" aria-hidden="true" />
        <MessageCircle className="w-6 h-6 relative" />
      </a>
    </div>
  );
};
