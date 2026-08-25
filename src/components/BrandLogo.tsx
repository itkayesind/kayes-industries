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
      {/* Pure Diamond Icon Emblem (No Text) */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-2xs border border-slate-200 p-1">
        <img
          src="/images/brand/kayes-logo-1x1.svg"
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
