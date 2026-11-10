import React, { useState } from 'react';
import { X, Send, MessageSquare, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO, SERVICES } from '../data/company.ts';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || SERVICES[0].title);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent, via: 'whatsapp' | 'email') => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#00f0ff', '#2dd4bf', '#ffffff'],
      });
    } catch {
      // fallback
    }

    setSubmitted(true);

    if (via === 'whatsapp') {
      const msg = `Hello Muhammad Mubashir Ali, I would like to schedule an AI consultation for The Ocean Tech Enterprises:%0A%0A- Name: ${encodeURIComponent(name)}%0A- Email: ${encodeURIComponent(email)}%0A- Phone: ${encodeURIComponent(phone)}%0A- Service: ${encodeURIComponent(service)}%0A- Notes: ${encodeURIComponent(notes || 'Ready to discuss schedule.')}`;
      window.open(`https://wa.me/923428156086?text=${msg}`, '_blank');
    } else {
      const mailBody = `Hello Muhammad Mubashir Ali,\n\nI would like to request an AI advisory consultation:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Focus: ${service}\nNotes: ${notes}\n\nBest regards,\n${name}`;
      window.location.href = `mailto:${COMPANY_INFO.ceo.email}?subject=${encodeURIComponent(
        `Consultation Request - ${service} (${name})`
      )}&body=${encodeURIComponent(mailBody)}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#081329] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Consultation Request Dispatched</h3>
            <p className="text-xs text-slate-300">
              Muhammad Mubashir Ali has received your message. You will be contacted promptly to finalize the meeting time.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.ceo.photoUrl}
                alt={COMPANY_INFO.ceo.name}
                className="w-12 h-12 rounded-xl object-cover object-[center_15%] border border-cyan-400/50 shadow-md shrink-0"
              />
              <div>
                <div className="text-xs font-mono text-cyan-400">
                  Executive Discovery Call
                </div>
                <h3 className="text-xl font-bold text-white">Schedule 1-on-1 AI Consultation</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Directly with CEO Muhammad Mubashir Ali
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tariq Khan"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tariq@enterprise.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 3XX-XXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Required AI Domain</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Brief Notes / Preferred Time</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any specific questions or preferred consultation hours..."
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={(e) => handleSubmit(e, 'whatsapp')}
                disabled={!name || !email || !phone}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Confirm via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleSubmit(e, 'email')}
                disabled={!name || !email || !phone}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl ocean-glass hover:bg-cyan-950/40 text-cyan-300 font-semibold text-xs border border-cyan-500/30 transition-all disabled:opacity-50"
              >
                <Mail className="w-4 h-4" />
                <span>Confirm via Email</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
