import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact';
  className?: string;
  theme?: 'dark' | 'light';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  theme = 'light'
}) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none min-w-0 ${className}`}>
      {/* K logo webp straight from Leslin - no custom SVG */}
      <div className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0 rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-black'}`}>
        <img
          src="/images/brand/kayes-cropped-logo.webp"
          alt="KAYES Diamond Tools"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
          <span className={`text-base sm:text-xl font-bold tracking-[0.08em] font-brand ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            KAYES
          </span>
          <span className={`text-[10px] sm:text-xs font-semibold tracking-[0.18em] font-brand truncate ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
            INDUSTRIES
          </span>
        </div>
        {variant === 'full' && (
          <span className={`text-[10px] font-medium tracking-normal mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Diamond Tools &amp; Superabrasives
          </span>
        )}
      </div>
    </div>
  );
};
