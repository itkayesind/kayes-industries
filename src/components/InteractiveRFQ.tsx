import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { MessageSquare, Mail, MapPin } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const InteractiveRFQ: React.FC = () => {
  const [productType, setProductType] = useState('Pencil Edging Wheels (Glass)');
  const [shape, setShape] = useState('1FF6Y');
  const [dimensions, setDimensions] = useState('175mm OD x 50mm Bore');
  const [material, setMaterial] = useState('Architectural Glass');
  const [quantity, setQuantity] = useState('10');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello KAYES INDUSTRIES PVT LTD,\n\nRFQ Inquirer: ${name || 'Procurement'} (${company || 'Company'})\nPhone: ${phone}\nEmail: ${email}\n\nTool Classification: ${productType}\nISO Shape: ${shape}\nDimensions: ${dimensions}\nTarget Material: ${material}\nRequisition Quantity: ${quantity}\nNotes/Specs: ${notes || 'Standard tolerances'}`;
    window.open(`https://wa.me/919841279658?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleEmail = () => {
    const msg = `Hello KAYES INDUSTRIES PVT LTD,\n\nRFQ Inquirer: ${name || 'Procurement'} (${company || 'Company'})\nPhone: ${phone}\nEmail: ${email}\n\nTool Classification: ${productType}\nISO Shape: ${shape}\nDimensions: ${dimensions}\nTarget Material: ${material}\nRequisition Quantity: ${quantity}\nNotes/Specs: ${notes || 'Standard tolerances'}`;
    const subject = encodeURIComponent(`Tooling RFQ Requisition - ${company || name || 'Industrial Client'}`);
    window.location.href = `mailto:kn@kayesind.com,sales@kayesind.com?subject=${subject}&body=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="inquiry" className="py-24 bg-[#FAF9F6] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle ambient glow */}
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-50/80 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-px bg-slate-400"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
              Commercial &amp; Technical Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-brand">
            Request for Quotation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed">
            Submit your tooling dimensions, glass sector, or semiconductor/ceramic specifications for engineering review and quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inquiry Form with Scroll Reveal */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs reveal-on-scroll reveal-delay-1">
            <form onSubmit={handleWhatsApp} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Tool Classification
                  </label>
                  <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 font-medium transition-colors"
                  >
                    <option value="Pencil Edging Wheels (Glass)">Pencil Edging Wheels (Glass)</option>
                    <option value="Sintered Glass Core Drill Bits">Sintered Glass Core Drill Bits</option>
                    <option value="Glass Edge Polishing Wheels (BD-8 / 10S40)">Glass Edge Polishing Wheels (BD-8 / 10S40)</option>
                    <option value="Solar & Flat Glass Slitting Wheels">Solar &amp; Flat Glass Slitting Wheels</option>
                    <option value="Watch Glass & Sapphire Grinding Cups">Watch Glass &amp; Sapphire Grinding Cups</option>
                    <option value="Semiconductor Wafer Dicing Blades (R&D)">Semiconductor Wafer Dicing Blades (R&amp;D)</option>
                    <option value="Technical Ceramic Grinding Wheels (R&D)">Technical Ceramic Grinding Wheels (R&amp;D)</option>
                    <option value="Resin Bonded Toolroom Wheels (11V9/12A2)">Resin Bonded Toolroom Wheels (11V9/12A2)</option>
                    <option value="Diamond Dressing Tools">Diamond Dressing Tools</option>
                    <option value="Heavy Saws & Core Drills">Heavy Saws &amp; Core Drills</option>
                    <option value="Diamond Powders & Lapping Pastes">Diamond Powders &amp; Lapping Pastes</option>
                    <option value="Custom Engineered Special Tooling">Custom Engineered Special Tooling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Wheel Profile / Shape Code
                  </label>
                  <input
                    type="text"
                    value={shape}
                    onChange={(e) => setShape(e.target.value)}
                    placeholder="e.g. 1FF6Y, 11V9, 6A2, 1A1"
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 font-mono transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Dimensions (OD x Bore x W)
                  </label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="e.g. 150 x 22 x 10 mm"
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Target Sector / Material
                  </label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 font-medium transition-colors"
                  >
                    <option value="Architectural Glass">Architectural Glass</option>
                    <option value="Automotive Glass">Automotive Glass</option>
                    <option value="Watch Glass & Sapphire">Watch Glass &amp; Sapphire</option>
                    <option value="Scientific & Lab Glassware">Scientific &amp; Lab Glassware</option>
                    <option value="Glass Bottles & Containers">Glass Bottles &amp; Containers</option>
                    <option value="Appliance Glass">Appliance Glass</option>
                    <option value="Solar Photovoltaic Glass">Solar Photovoltaic Glass</option>
                    <option value="Semiconductor Silicon Wafers">Semiconductor Silicon Wafers</option>
                    <option value="Technical Ceramics (Alumina/Zirconia)">Technical Ceramics (Alumina/Zirconia)</option>
                    <option value="Tungsten Carbide Toolroom">Tungsten Carbide Toolroom</option>
                    <option value="Granite & Natural Stone">Granite &amp; Natural Stone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Requisition Quantity
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 10 pcs"
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 font-mono transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contact Name"
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company / Firm"
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@company.com"
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98412 79658"
                    className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-sans">
                  Additional Notes / Tolerances / Spindle Specs
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specify feed speed, machine model (Bavelloni, Bottero, CNC), or tolerance parameters..."
                  className="w-full text-xs bg-[#FAF9F6] border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-slate-400 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <LiquidButton
                  type="submit"
                  size="lg"
                  className="flex-1 py-3.5 px-4 rounded-xl text-xs font-semibold bg-slate-950 hover:bg-slate-800 text-white transition-all flex items-center justify-center gap-2 tracking-wide shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 9841279658)</span>
                </LiquidButton>

                <LiquidButton
                  type="button"
                  onClick={handleEmail}
                  size="lg"
                  className="flex-1 py-3.5 px-4 rounded-xl text-xs font-semibold bg-white/80 hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Send via Email</span>
                </LiquidButton>
              </div>

            </form>
          </div>

          {/* Plant & Contact Information Card with Scroll Reveal */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xs reveal-on-scroll reveal-delay-2">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-brand">
                Registered Plant &amp; Office
              </h3>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="font-brand tracking-wide">KAYES INDUSTRIES PVT LTD</strong><br />
                  {COMPANY_INFO.address.full}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-brand">
                Direct Telephones &amp; WhatsApp
              </h4>
              <div className="space-y-1.5 text-xs text-slate-700 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Mobile / WhatsApp:</span>
                  <a href={`tel:${COMPANY_INFO.contacts.mobile}`} className="font-bold text-slate-900 hover:underline">
                    {COMPANY_INFO.contacts.mobile}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Office Phone 1:</span>
                  <span>{COMPANY_INFO.contacts.phoneOffice1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Office Phone 2:</span>
                  <span>{COMPANY_INFO.contacts.phoneOffice2}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Office Phone 3:</span>
                  <span>{COMPANY_INFO.contacts.phoneOffice3}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Fax Line:</span>
                  <span>{COMPANY_INFO.contacts.fax}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-brand">
                Official Email Addresses
              </h4>
              <div className="space-y-1 text-xs font-mono">
                {COMPANY_INFO.contacts.emails.map((e) => (
                  <a
                    key={e}
                    href={`mailto:${e}`}
                    className="block text-slate-700 hover:text-slate-900 hover:underline"
                  >
                    {e}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Web: <a href="http://www.kayesind.com" className="text-slate-800 font-semibold hover:underline">www.kayesind.com</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
