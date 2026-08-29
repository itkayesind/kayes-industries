import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { MessageSquare, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';

export const InteractiveRFQ: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Architectural Flat Glass');
  const [selectedProfile, setSelectedProfile] = useState<string>('1FF6Y (Continuous Double Pencil)');
  const [machinery, setMachinery] = useState<string>('CNC Double Edger / Bavelloni');
  const [dimensions, setDimensions] = useState<string>('Standard 150mm x 22mm Bore');
  const [quantity, setQuantity] = useState<string>('5 - 10 Units');
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [companyWebsite, setCompanyWebsite] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; company?: string; contact?: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    try {
      const prefill = localStorage.getItem("kayes_prefill_product");
      if (prefill) {
        setSelectedProfile(prefill);
        setStep(2);
        // keep it for a single use; clear so refresh doesn't re-trigger
        // localStorage.removeItem("kayes_prefill_product");
      }
    } catch {
      // ignore - localStorage unavailable (SSR)
    }
  }, []);

  const materials = [
    { id: 'flat', label: 'Architectural & Float Glass' },
    { id: 'auto', label: 'Automotive Windshield & Sidelites' },
    { id: 'precision', label: 'Sapphire & Watch Crystals' },
    { id: 'ceramics', label: 'Technical Ceramics & Alumina' },
    { id: 'wafer', label: 'Semiconductor Silicon Wafers' },
  ];

  const profileOptions = [
    '1FF6Y (Continuous Double Pencil)',
    '11V9 (Tapered Flaring Cup)',
    '6A2 (Straight Face Grinding Cup)',
    '1A1 (Straight Peripheral Grinding)',
    '14A1 (Tapered Beveling Peripheral)',
    'Core Drill / Milling Router Bit',
    'Custom Tool Profile (As Per CAD/Drawing)',
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // honeypot — if filled, treat as spam and abort
    if (companyWebsite.trim()) return;
    const newErrors: { name?: string; company?: string; contact?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!company.trim()) newErrors.company = "Company is required.";
    if (!contact.trim()) newErrors.contact = "Contact is required.";
    else if (!/^\+?[0-9\s-]{10,}$/.test(contact.trim())) newErrors.contact = "Enter a valid phone number (at least 10 digits).";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    const waNumber = COMPANY_INFO.contacts.mobile.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `*INDUSTRIAL TOOL REQUISITION - KAYES INDUSTRIES*\n\n` +
      `*Client:* ${name || 'Procurement Officer'}\n` +
      `*Company:* ${company || 'Industrial Buyer'}\n` +
      `*Contact:* ${contact || 'N/A'}\n\n` +
      `*Workpiece Material:* ${selectedMaterial}\n` +
      `*Wheel Profile / Type:* ${selectedProfile}\n` +
      `*Machinery / Spindle:* ${machinery}\n` +
      `*Dimensions (D x T x H):* ${dimensions}\n` +
      `*Required Quantity:* ${quantity}\n\n` +
      `Please provide formal quotation with delivery lead time.`
    );
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    // scroll submitted banner into view
    setTimeout(() => {
      document.getElementById("rfq-submitted-banner")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Quotation Request: ${selectedProfile} for ${selectedMaterial}`);
    const body = encodeURIComponent(
      `Dear KAYES Industries Sales Desk,\n\n` +
      `We request a formal quotation for the following diamond tooling specifications:\n\n` +
      `Workpiece Material: ${selectedMaterial}\n` +
      `Wheel Profile: ${selectedProfile}\n` +
      `Machine / Spindle: ${machinery}\n` +
      `Dimensions (D x T x H): ${dimensions}\n` +
      `Quantity: ${quantity}\n\n` +
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Contact Phone: ${contact}\n\n` +
      `Regards,\n${name || 'Procurement Team'}`
    );
    window.location.href = `mailto:kn@kayesind.com?cc=kayesind@gmail.com&subject=${subject}&body=${body}`;
  };

  return (
    <section id="inquiry" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-px bg-slate-400"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 font-brand">
              Instant Requisition &bull; Factory Dispatch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-brand">
            Interactive RFQ Configurator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed font-sans">
            Specify your workpiece substrate, wheel geometry, and machine spindle parameters to generate an instant technical requisition directly to our Chennai manufacturing desk.
          </p>
        </div>

        {/* 3-Step Visual Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal-on-scroll">
          
          {/* Main Configurator Form (8 Columns) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-8">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 transition-colors cursor-pointer ${
                    step === 1 ? 'text-slate-950 border-b-2 border-slate-950' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  01. Workpiece
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 transition-colors cursor-pointer ${
                    step === 2 ? 'text-slate-950 border-b-2 border-slate-950' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  02. Tool Specs
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className={`text-xs font-mono font-bold uppercase tracking-wider pb-1 transition-colors cursor-pointer ${
                    step === 3 ? 'text-slate-950 border-b-2 border-slate-950' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  03. Dispatch
                </button>
              </div>

              <span className="text-[11px] font-mono text-cyan-800 font-semibold hidden sm:inline">
                Direct Engineering Review
              </span>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              {/* Stepper progress indicator: Details -> Contact -> Review */}
              {(() => {
                const detailsComplete = Boolean(selectedMaterial.trim() && selectedProfile.trim() && machinery.trim());
                const contactComplete = Boolean(name.trim() && company.trim() && contact.trim() && !errors.name && !errors.company && !errors.contact);
                const reviewComplete = Boolean(dimensions.trim() && quantity.trim());
                return (
                  <div className="flex items-center gap-2 mb-6" aria-label="RFQ progress">
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-8 h-1 rounded ${detailsComplete ? "bg-slate-900" : "bg-slate-200"}`} />
                      <span className="text-xs font-medium tracking-wide text-slate-600">Details</span>
                    </div>
                    <span className="text-slate-300 text-xs mb-4" aria-hidden="true">→</span>
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-8 h-1 rounded ${contactComplete ? "bg-slate-900" : "bg-slate-200"}`} />
                      <span className="text-xs font-medium tracking-wide text-slate-600">Contact</span>
                    </div>
                    <span className="text-slate-300 text-xs mb-4" aria-hidden="true">→</span>
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-8 h-1 rounded ${reviewComplete ? "bg-slate-900" : "bg-slate-200"}`} />
                      <span className="text-xs font-medium tracking-wide text-slate-600">Review</span>
                    </div>
                  </div>
                );
              })()}
              
              {/* Step 1: Workpiece Substrate */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-brand">
                    Select Workpiece Substrate
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {materials.map((mat) => (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setSelectedMaterial(mat.label)}
                        className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                          selectedMaterial === mat.label
                            ? 'bg-slate-950 border-slate-950 text-white shadow-md'
                            : 'bg-[#FAF9F6] border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs font-semibold">{mat.label}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <LiquidButton
                      type="button"
                      onClick={() => setStep(2)}
                      size="lg"
                      className="text-slate-950 font-semibold cursor-pointer"
                    >
                      <span>Proceed to Tool Specs</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </LiquidButton>
                  </div>
                </div>
              )}

              {/* Step 2: Tool Shape & Machine Spindle */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-brand mb-2">
                      Wheel Profile / Tool Geometry
                    </label>
                    <select
                      value={selectedProfile}
                      onChange={(e) => setSelectedProfile(e.target.value)}
                      className="w-full p-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none font-mono"
                    >
                      {profileOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-brand mb-1.5">
                        Machine Brand / Model
                      </label>
                      <input
                        type="text"
                        value={machinery}
                        onChange={(e) => setMachinery(e.target.value)}
                        placeholder="e.g. Bavelloni, Bottero, Intermac, Manual"
                        className="w-full p-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-brand mb-1.5">
                        Dimensions (D x T x H Bore)
                      </label>
                      <input
                        type="text"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        placeholder="e.g. 150mm x 22mm Bore"
                        className="w-full p-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <LiquidButton
                      type="button"
                      onClick={() => setStep(3)}
                      size="lg"
                      className="text-slate-950 font-semibold cursor-pointer"
                    >
                      <span>Proceed to Dispatch Contact</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </LiquidButton>
                  </div>
                </div>
              )}

              {/* Step 3: Client Details & Dispatch */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-brand mb-1.5">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar"
                        aria-invalid={!!errors.name}
                        className="w-full p-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1" role="alert">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-brand mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Precision Glass Ltd"
                        aria-invalid={!!errors.company}
                        className="w-full p-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                      />
                      {errors.company && <p className="text-xs text-red-600 mt-1" role="alert">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-brand mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        inputMode="tel"
                        pattern="[0-9+\s-]*"
                        aria-label="Contact phone or email"
                        aria-invalid={!!errors.contact}
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="+91 98400 00000"
                        className="w-full p-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none font-mono"
                      />
                      {errors.contact && <p className="text-xs text-red-600 mt-1" role="alert">{errors.contact}</p>}
                    </div>
                  </div>

                  {/* honeypot — hidden from users, visible to bots */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="companyWebsite">Website</label>
                    <input
                      type="text"
                      id="companyWebsite"
                      name="companyWebsite"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-brand mb-1.5">
                      Batch Quantity / Timeline
                    </label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 10 Units / Immediate Dispatch"
                      className="w-full p-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none font-mono"
                    />
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <LiquidButton
                      type="submit"
                      size="lg"
                      className="w-full sm:flex-1 text-slate-950 font-bold cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Requisition via WhatsApp</span>
                    </LiquidButton>

                    <LiquidButton
                      type="button"
                      onClick={handleEmailSubmit}
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto text-slate-700 hover:text-slate-950 border-slate-300 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </LiquidButton>
                  </div>

                  {submitted && (
                    <div id="rfq-submitted-banner" role="status" className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-800">
                      Requisition sent — our Chennai desk will respond shortly via WhatsApp.
                    </div>
                  )}
                </div>
              )}
            </form>

          </div>

          {/* Live Summary Ticket (4 Columns - Light Theme) */}
          <div className="lg:col-span-4 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-[11px] font-mono text-slate-900 uppercase tracking-wider font-bold">
                Live Requisition Ticket
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Direct Dispatch
              </span>
            </div>

            <div className="space-y-3.5 text-xs font-mono">
              <div className="space-y-1 p-2.5 rounded-xl bg-[#FAF9F6] border border-slate-100">
                <span className="text-slate-400 uppercase text-[10px] block">Workpiece Material:</span>
                <div className="text-slate-900 font-semibold">{selectedMaterial}</div>
              </div>

              <div className="space-y-1 p-2.5 rounded-xl bg-[#FAF9F6] border border-slate-100">
                <span className="text-slate-400 uppercase text-[10px] block">Profile Geometry:</span>
                <div className="text-cyan-900 font-semibold">{selectedProfile}</div>
              </div>

              <div className="space-y-1 p-2.5 rounded-xl bg-[#FAF9F6] border border-slate-100">
                <span className="text-slate-400 uppercase text-[10px] block">Machinery:</span>
                <div className="text-slate-700">{machinery}</div>
              </div>

              <div className="space-y-1 p-2.5 rounded-xl bg-[#FAF9F6] border border-slate-100">
                <span className="text-slate-400 uppercase text-[10px] block">Dimensions:</span>
                <div className="text-slate-700">{dimensions}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-600 font-sans">
              <div className="flex items-center gap-2 text-slate-900">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span className="font-semibold">{COMPANY_INFO.certification} Plant</span>
              </div>
              <p className="leading-relaxed text-slate-500">
                Registered Plant: Chennai, India. Direct factory dispatch with custom bonding matrix engineering.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
