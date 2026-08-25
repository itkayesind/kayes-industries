import { COMPANY_INFO } from '../data/company';

const fallbackClients = ["Bavelloni", "Bovone", "Bottero", "Biesse", "Schiatti", "Lisec"];

export const ClientMarquee: React.FC = () => {
  const clients = COMPANY_INFO.clients ?? fallbackClients;
  // Duplicate for seamless marquee
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-6 bg-slate-50 border-y border-slate-200 overflow-hidden reveal-on-scroll">
      <div className="relative">
        {/* mask gradient */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10"
          aria-hidden="true"
        />

        <div className="flex items-center">
          {/* Label */}
          <div className="shrink-0 px-6 flex items-center gap-2 border-r border-slate-200 mr-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 whitespace-nowrap">
              Trusted Machine Compatibility
            </span>
          </div>

          {/* Marquee track */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee gap-8 whitespace-nowrap">
              {marqueeItems.map((client, idx) => (
                <span
                  key={`${client}-${idx}`}
                  className="text-sm font-semibold tracking-wide text-slate-700 uppercase"
                >
                  {client}
                  <span className="mx-8 text-slate-300" aria-hidden="true">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default ClientMarquee;
