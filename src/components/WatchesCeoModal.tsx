import React, { useState } from 'react';
import {
  X,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  Sparkles,
  Copy,
  Check,
  Code2
} from 'lucide-react';

interface WatchesCeoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WatchesCeoModal: React.FC<WatchesCeoModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showCodeHelp, setShowCodeHelp] = useState(false);

  if (!isOpen) return null;

  const htmlReplacementCode = `<!-- Replace line 46 in your about.html: -->
<!-- OLD (Cartoon SVG): -->
<!-- <img src="assets/svg/ceo.svg" ...> -->

<!-- NEW (Real CEO Photo): -->
<div class="portrait-frame">
  <img 
    src="ceo.jpg" 
    alt="Portrait of Muhammad Mubashir Ali, Founder and CEO of The Ocean Watches" 
    loading="lazy" 
    width="480" 
    height="540" 
    style="width: 100%; aspect-ratio: 1/1; object-fit: cover; object-position: top center; border-radius: inherit;"
  >
</div>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(htmlReplacementCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#02050e]/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-5xl my-auto bg-gradient-to-b from-[#0a1122] via-[#070c18] to-[#040810] border border-amber-500/40 rounded-3xl shadow-[0_0_60px_rgba(232,196,104,0.15)] flex flex-col overflow-hidden max-h-[92vh]">
        {/* Top Gold & Cyan Ambient Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0c1426] border-b border-amber-500/20 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                The Ocean Watches · Executive Profile
              </span>
              <p className="text-xs text-slate-400 hidden sm:block">
                the-ocean-1-watches-landing-page-1.vercel.app/about.html
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCodeHelp(!showCodeHelp)}
              className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-mono inline-flex items-center gap-1.5 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Vercel about.html Code</span>
            </button>
            <a
              href="https://the-ocean-1-watches-landing-page-1.vercel.app/about.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Open Deployed Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto space-y-8">
          {/* Vercel Update Instructions Banner if toggled */}
          {showCodeHelp && (
            <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-200 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  How to update about.html on GitHub & Vercel
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 rounded bg-amber-400 text-slate-950 font-bold text-[11px] inline-flex items-center gap-1 hover:bg-amber-300 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Snippet!' : 'Copy Code'}</span>
                </button>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Apne GitHub repository <strong>(The Ocean Watches)</strong> mein <code className="text-amber-300 px-1 py-0.5 bg-slate-900 rounded font-mono">about.html</code> open karein. Line 46 par jahan cartoon SVG <code className="text-rose-300">&lt;img src="assets/svg/ceo.svg" ...&gt;</code> tha, uski jagah <code className="text-emerald-300">ceo.jpg</code> add karein:
              </p>
              <pre className="p-3 bg-slate-950/90 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto whitespace-pre leading-relaxed">
                {htmlReplacementCode}
              </pre>
            </div>
          )}

          {/* Profile Hero Layout matching the screenshot exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column with Golden Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-[340px]">
                {/* Ambient Golden Glow Behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-yellow-400/20 to-cyan-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all" />

                {/* Golden Portrait Outer Ring */}
                <div className="relative p-3 sm:p-4 rounded-3xl sm:rounded-full bg-gradient-to-tr from-amber-500/80 via-yellow-400/60 to-cyan-400/80 shadow-[0_0_40px_rgba(232,196,104,0.3)]">
                  <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-full border-2 border-amber-300/60 bg-slate-950">
                    <img
                      src="/ceo.jpg"
                      alt="Portrait of Muhammad Mubashir Ali, Founder and CEO of The Ocean Watches"
                      className="w-full h-full object-cover object-top filter saturate-105 group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = '/assets/ceo_mubashir_ali.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Badge (9+ Years Leading) */}
                <div className="absolute -bottom-3 -right-2 sm:right-0 px-4 py-2 rounded-xl bg-slate-950/90 border border-amber-400/50 backdrop-blur-md shadow-xl text-center">
                  <div className="text-xl font-display font-extrabold text-amber-300 leading-none">
                    9+
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
                    Years Leading
                  </div>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-400 text-slate-300 text-xs sm:text-sm italic font-serif leading-relaxed text-center sm:text-left w-full max-w-[340px]">
                "A luxury watch is not about telling time — it is about <strong className="text-amber-300 not-italic">telling your story</strong>."
              </div>
            </div>

            {/* Profile Copy & Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>The Visionary · Haute Horlogerie</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                  Muhammad Mubashir Ali
                </h2>

                <div className="text-sm sm:text-base font-mono uppercase tracking-widest text-amber-400 font-semibold mt-1">
                  Founder &amp; CEO — The Ocean Watches
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  Muhammad Mubashir Ali founded <strong>The Ocean Watches</strong> with a conviction that luxury should
                  be <strong className="text-white">honest</strong> — built on trust, not just price tags. Under his leadership,
                  the house grew from a single inspired sketch into a collection worn by over a thousand collectors across the world.
                </p>

                <p>
                  A relentless advocate for <strong className="text-cyan-300">innovation</strong>, he pairs Swiss-grade
                  engineering with ocean-born design language. But his deepest passion remains{' '}
                  <strong className="text-amber-300">craftsmanship</strong> — personally reviewing every prototype,
                  visiting every workshop, and answering every customer personally on WhatsApp.
                </p>

                <p>
                  Mubashir believes a brand is only as timeless as the trust it earns. That is why each Ocean watch carries his promise:{' '}
                  <strong className="text-white">
                    uncompromising quality, lifetime care, and a relationship that never expires
                  </strong>.
                </p>
              </div>

              {/* Contact Cards Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Email Card */}
                <a
                  href="mailto:alimuhammd98573@gmail.com"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <Mail className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-amber-300">
                      Email
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-200 truncate group-hover:text-white">
                    alimuhammd98573@gmail.com
                  </div>
                </a>

                {/* Mobile Phone Card */}
                <a
                  href="tel:+923232930657"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <Phone className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-amber-300">
                      Mobile
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-200 truncate group-hover:text-white">
                    0323-2930657
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/923428156086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-400/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-emerald-300">
                      WhatsApp
                    </span>
                  </div>
                  <div className="text-xs font-mono text-emerald-300 truncate group-hover:text-emerald-200">
                    0342-8156086
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                <a
                  href="https://wa.me/923428156086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-white hover:to-amber-200 text-slate-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="mailto:alimuhammd98573@gmail.com"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-xs font-medium inline-flex items-center gap-2 transition-all active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href="https://the-ocean-1-watches-landing-page-1.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-medium inline-flex items-center gap-2 transition-all active:scale-95 ml-auto"
                >
                  <span>Open Watches Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
