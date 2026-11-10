import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/company.ts';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || SERVICES[0].title,
    budget: '$5k - $15k USD',
    timeline: '1 - 2 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [dispatchMethod, setDispatchMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#2dd4bf', '#38bdf8', '#ffffff'],
      });
    } catch {
      // Fallback gracefully
    }

    setSubmitted(true);

    if (dispatchMethod === 'whatsapp') {
      const msg = `Hello Muhammad Mubashir Ali, I am inquiring from The Ocean Tech Enterprises website:%0A%0A- Name: ${encodeURIComponent(formData.name)}%0A- Email: ${encodeURIComponent(formData.email)}%0A- Phone: ${encodeURIComponent(formData.phone)}%0A- Service: ${encodeURIComponent(formData.service)}%0A- Budget: ${encodeURIComponent(formData.budget)}%0A- Timeline: ${encodeURIComponent(formData.timeline)}%0A- Project Brief: ${encodeURIComponent(formData.message || 'Ready for preliminary discussion.')}`;
      window.open(`https://wa.me/923428156086?text=${msg}`, '_blank');
    } else {
      const mailBody = `Hello Muhammad Mubashir Ali,\n\nI am contacting you through The Ocean Tech Enterprises portal regarding an AI engagement:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope & Requirements:\n${formData.message}\n\nLooking forward to speaking with you.\n\nBest regards,\n${formData.name}`;
      window.location.href = `mailto:${COMPANY_INFO.ceo.email}?subject=${encodeURIComponent(
        `AI Enterprise Inquiry - ${formData.service} (${formData.name})`
      )}&body=${encodeURIComponent(mailBody)}`;
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Channels & Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                07. Initiate Engagement
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Schedule Your AI Consultation
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Connect directly with Founder & CEO Muhammad Mubashir Ali to evaluate technical feasibility, model architectures, and production milestones for your enterprise.
              </p>
            </div>

            {/* Direct Executive Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl ocean-glass-card border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={COMPANY_INFO.ceo.photoUrl}
                    alt={COMPANY_INFO.ceo.name}
                    className="w-12 h-12 rounded-xl object-cover object-[center_15%] border border-cyan-400/50 shadow-md shrink-0"
                  />
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase">Founder & CEO</div>
                    <div className="text-base font-bold text-white">{COMPANY_INFO.ceo.name}</div>
                  </div>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <a
                    href={COMPANY_INFO.ceo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>WhatsApp: {COMPANY_INFO.ceo.whatsapp}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.ceo.mobile.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2.5 text-cyan-300 hover:text-cyan-200"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Direct Call: {COMPANY_INFO.ceo.mobile}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.ceo.email}`}
                    className="flex items-center gap-2.5 text-sky-300 hover:text-sky-200"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>Email: {COMPANY_INFO.ceo.email}</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold font-mono">
                  <Clock className="w-4 h-4" />
                  <span>Guaranteed 4-Hour Technical SLA</span>
                </div>
                <div className="flex items-center gap-2 text-teal-300 font-semibold font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mutual NDA Executable Prior to Discovery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="ocean-glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/25 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Consultation Brief Dispatched
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you. Your project brief has been formatted and forwarded to CEO Muhammad Mubashir Ali. We will review your requirements immediately.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 3XX-XXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Primary AI Solution Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Estimated Budget Bracket
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white"
                      >
                        <option value="$3k - $8k USD">$3k - $8k USD (Proof of Concept)</option>
                        <option value="$8k - $20k USD">$8k - $20k USD (Production Startup)</option>
                        <option value="$20k - $50k+ USD">$20k - $50k+ USD (Enterprise Architecture)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Target Deployment Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white"
                      >
                        <option value="Immediate (< 3 Weeks)">Immediate (&lt; 3 Weeks)</option>
                        <option value="1 - 2 Months">1 - 2 Months</option>
                        <option value="Quarterly Roadmap">Quarterly Strategic Roadmap</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Project Objective & Data Context
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current system, dataset types, and expected business outcomes..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500 resize-none"
                    />
                  </div>

                  {/* Dispatch Preference Selector */}
                  <div className="pt-2">
                    <label className="text-xs font-mono text-slate-400 block mb-2">
                      Preferred Instant Dispatch Method:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDispatchMethod('whatsapp')}
                        className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all ${
                          dispatchMethod === 'whatsapp'
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-400/50'
                            : 'bg-slate-900/60 text-slate-400 border-slate-800'
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span>Instant WhatsApp Dispatch</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDispatchMethod('email')}
                        className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all ${
                          dispatchMethod === 'email'
                            ? 'bg-cyan-950/60 text-cyan-300 border-cyan-400/50'
                            : 'bg-slate-900/60 text-slate-400 border-slate-800'
                        }`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Direct Email Dispatch</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
                  >
                    <span>Send Project Proposal Directly to CEO</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
