import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  BadgeCheck,
  Shield,
  Download,
  Calendar,
  Quote,
  Copy,
  Check,
  ExternalLink,
  X,
  Sparkles,
  Award,
  Globe2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';

interface CeoSpotlightProps {
  onScheduleMeeting?: () => void;
}

export const CeoSpotlight: React.FC<CeoSpotlightProps> = ({ onScheduleMeeting }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${COMPANY_INFO.ceo.name}
ORG:${COMPANY_INFO.name}
TITLE:${COMPANY_INFO.ceo.role}
TEL;TYPE=CELL:${COMPANY_INFO.ceo.mobile}
TEL;TYPE=WHATSAPP:${COMPANY_INFO.ceo.whatsapp}
EMAIL;TYPE=INTERNET:${COMPANY_INFO.ceo.email}
NOTE:Founder & CEO of The Ocean Tech Enterprises - Enterprise AI & Cognitive Systems
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Muhammad_Mubashir_Ali_OceanTech_CEO.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="ceo" className="py-24 relative z-10 scroll-mt-20">
      <div id="leadership" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>05. Executive Leadership & Founder Office</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Meet the Founder & Chief Executive
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            The Ocean Tech Enterprises is spearheaded by Muhammad Mubashir Ali, directing specialized AI engineering, autonomous cognitive architectures, and turnkey digital platforms.
          </p>
        </div>

        {/* CEO Spotlight Showcase Card */}
        <div className="ocean-glass-card rounded-3xl p-8 sm:p-10 lg:p-12 border border-cyan-500/25 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* CEO Photo Frame (4 Columns) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                onClick={() => setIsDossierOpen(true)}
                className="relative group w-full max-w-sm cursor-pointer"
                title="Click to view full Executive Profile & Vision"
              >
                {/* 3D Holographic Border Framing */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-500 rounded-2xl blur-md opacity-40 group-hover:opacity-85 transition duration-500" />

                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-400/40 aspect-square shadow-2xl">
                  {/* Verified CEO Image with User's Asset */}
                  <img
                    src={COMPANY_INFO.ceo.photoUrl}
                    alt={COMPANY_INFO.ceo.name}
                    className="w-full h-full object-cover object-[center_12%] filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.endsWith('/ceo.jpg')) {
                        target.src = '/ceo.jpg';
                      } else {
                        target.src = '/assets/ceo_mubashir_ali.jpg';
                      }
                    }}
                  />

                  {/* Gradient Overlay for Sleek Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/80 via-transparent to-transparent opacity-60" />

                  {/* Click to Enlarge Overlay Badge on Hover */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 text-[10px] font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    <span>Expand Profile</span>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-cyan-400 fill-cyan-400/20 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">
                          {COMPANY_INFO.ceo.name}
                        </div>
                        <div className="text-[10px] text-cyan-300 font-mono">
                          Verified Founder & CEO
                        </div>
                      </div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Available for Enterprise Consultation" />
                  </div>
                </div>
              </div>

              {/* Action Buttons Below Photo */}
              <div className="mt-5 flex flex-wrap gap-2 justify-center w-full max-w-sm">
                <button
                  onClick={() => setIsDossierOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 rounded-lg border border-cyan-500/40 transition-all active:scale-95 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Full CEO Profile</span>
                </button>
                <button
                  onClick={downloadVCard}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/70 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-all active:scale-95 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save vCard</span>
                </button>
              </div>
            </div>

            {/* CEO Profile & Direct Communication Channels (7 Columns) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Shield className="w-4 h-4" />
                  <span>The Ocean Tech Enterprises · Executive Office</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-1">
                  {COMPANY_INFO.ceo.name}
                </h3>
                <p className="text-sm font-semibold text-teal-300 font-mono">
                  {COMPANY_INFO.ceo.role}
                </p>
              </div>

              {/* Bio & Vision */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {COMPANY_INFO.ceo.bio}
              </p>

              {/* Founder Quote Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20 relative">
                <Quote className="w-6 h-6 text-cyan-400/30 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed pr-6">
                  "{COMPANY_INFO.ceo.quote}"
                </p>
                <div className="mt-2 text-[11px] font-mono text-cyan-400">
                  — Muhammad Mubashir Ali, Founder
                </div>
              </div>

              {/* Direct CEO Contact Channels */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Direct Executive Communication Lines:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp Channel */}
                  <a
                    href={COMPANY_INFO.ceo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-4 h-4 fill-current" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">WhatsApp</div>
                        <div className="text-xs font-bold text-white font-mono group-hover:text-emerald-300">
                          {COMPANY_INFO.ceo.whatsapp}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">Chat &rarr;</span>
                  </a>

                  {/* Phone Call Channel */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 transition-all group">
                    <a
                      href={`tel:${COMPANY_INFO.ceo.mobile.replace(/[^0-9]/g, '')}`}
                      className="flex items-center gap-3 flex-1"
                    >
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Direct Mobile</div>
                        <div className="text-xs font-bold text-white font-mono group-hover:text-cyan-300">
                          {COMPANY_INFO.ceo.mobile}
                        </div>
                      </div>
                    </a>
                    <button
                      onClick={() => copyToClipboard(COMPANY_INFO.ceo.mobile, 'mobile')}
                      className="p-1.5 text-slate-400 hover:text-white"
                      title="Copy Mobile Number"
                    >
                      {copiedField === 'mobile' ? (
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Email Channel */}
                  <div className="sm:col-span-2 flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 transition-all group">
                    <a
                      href={`mailto:${COMPANY_INFO.ceo.email}`}
                      className="flex items-center gap-3 flex-1 truncate"
                    >
                      <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Executive Email</div>
                        <div className="text-xs font-bold text-white font-mono truncate group-hover:text-cyan-300">
                          {COMPANY_INFO.ceo.email}
                        </div>
                      </div>
                    </a>
                    <button
                      onClick={() => copyToClipboard(COMPANY_INFO.ceo.email, 'email')}
                      className="p-1.5 text-slate-400 hover:text-white shrink-0 ml-2"
                      title="Copy Email Address"
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onScheduleMeeting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Direct Advisory Call with CEO</span>
                </button>
                <button
                  onClick={() => setIsDossierOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 border border-cyan-500/35 text-cyan-300 hover:text-white hover:bg-cyan-950/50 text-xs font-mono transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Executive Dossier & Vision</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Dedicated CEO Profile & Executive Dossier Modal */}
      {isDossierOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setIsDossierOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#081329] via-[#050c1c] to-[#030712] border border-cyan-500/40 rounded-3xl shadow-[0_0_80px_rgba(0,240,255,0.25)] p-6 sm:p-8 md:p-10 z-10">
            {/* Header / Close button */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-cyan-500/20">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                  The Ocean Tech Enterprises · Executive Dossier
                </span>
              </div>
              <button
                onClick={() => setIsDossierOpen(false)}
                className="p-2 rounded-xl border border-slate-700 bg-slate-900/80 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
                aria-label="Close CEO Profile"
              >
                <X className="w-5 h-5 text-cyan-300" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: High-Res CEO Photo Frame */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl bg-slate-950 w-full max-w-sm aspect-square">
                  <img
                    src={COMPANY_INFO.ceo.photoUrl}
                    alt={COMPANY_INFO.ceo.name}
                    className="w-full h-full object-cover object-[center_12%] filter contrast-[1.03]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/ceo.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {COMPANY_INFO.ceo.name}
                      </div>
                      <div className="text-[10px] text-cyan-300 font-mono">
                        Verified Founder & CEO
                      </div>
                    </div>
                    <BadgeCheck className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                  </div>
                </div>

                {/* Quick vCard Button */}
                <button
                  onClick={downloadVCard}
                  className="mt-4 w-full max-w-sm inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900/60 rounded-xl border border-cyan-500/40 transition-all active:scale-95 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CEO Contact Card (.vcf)</span>
                </button>
              </div>

              {/* Right Column: Full Details & Direct Channels */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Founder & Chief Executive Officer</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                    {COMPANY_INFO.ceo.name}
                  </h3>
                  <p className="text-xs font-mono text-teal-300 mt-0.5">
                    {COMPANY_INFO.ceo.title}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/25 relative">
                  <Quote className="w-5 h-5 text-cyan-400/30 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed pr-6">
                    "{COMPANY_INFO.ceo.quote}"
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    {COMPANY_INFO.ceo.bio}
                  </p>
                  <p className="text-slate-400">
                    Oversees core architectural direction across custom enterprise LLM training, autonomous multi-agent swarm deployments, high-precision computer vision algorithms, and turnkey modern web applications.
                  </p>
                </div>

                {/* Communication channels */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Direct Contact Channels:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={COMPANY_INFO.ceo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/40 text-xs transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="text-[9px] font-mono text-slate-400 uppercase">WhatsApp</div>
                          <div className="font-mono text-white font-semibold">{COMPANY_INFO.ceo.whatsapp}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-emerald-400" />
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.ceo.mobile.replace(/[^0-9]/g, '')}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 text-xs transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="text-[9px] font-mono text-slate-400 uppercase">Direct Mobile</div>
                          <div className="font-mono text-white font-semibold">{COMPANY_INFO.ceo.mobile}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400">Call &rarr;</span>
                    </a>

                    <div className="sm:col-span-2 flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                      <div className="flex items-center gap-2.5 truncate">
                        <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                        <div className="truncate">
                          <div className="text-[9px] font-mono text-slate-400 uppercase">Executive Email</div>
                          <div className="font-mono text-white font-semibold truncate">{COMPANY_INFO.ceo.email}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(COMPANY_INFO.ceo.email, 'modal-email')}
                        className="px-2.5 py-1 text-[10px] font-mono text-cyan-300 hover:text-white bg-cyan-950/50 rounded border border-cyan-500/30 shrink-0 ml-2"
                      >
                        {copiedField === 'modal-email' ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setIsDossierOpen(false);
                      if (onScheduleMeeting) onScheduleMeeting();
                    }}
                    className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Executive Advisory Meeting</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
