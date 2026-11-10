import React, { useState } from 'react';
import {
  X,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Copy,
  Check,
  Code2,
  FolderPlus
} from 'lucide-react';

interface PerfumesCeoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PerfumesCeoModal: React.FC<PerfumesCeoModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showCodeHelp, setShowCodeHelp] = useState(true);
  const [userPhoto, setUserPhoto] = useState<string>('/ceo.jpg');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) setUserPhoto(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const nextJsSnippet = `{/* Next.js 16 / React 19 CEO Photo Tag */}
{/* 1. Ensure file is placed at /public/ceo.jpg in your GitHub repo */}
{/* 2. In your CEO / About page component: */}

<div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-teal-300 to-amber-300 shadow-2xl">
  <img 
    src="/ceo.jpg" 
    alt="Muhammad Mubashir Ali - Founder & CEO of The Ocean Perfumes" 
    className="w-full h-full object-cover object-top rounded-full border-2 border-slate-900"
    loading="lazy"
  />
</div>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(nextJsSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#02050e]/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-5xl my-auto bg-gradient-to-b from-[#0a1424] via-[#070e1c] to-[#040812] border border-cyan-500/40 rounded-3xl shadow-[0_0_60px_rgba(0,240,255,0.18)] flex flex-col overflow-hidden max-h-[92vh]">
        {/* Top Gold & Cyan Oceanic Ambient Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0a1628] border-b border-cyan-500/20 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                The Ocean Perfumes · Founder &amp; CEO Profile
              </span>
              <p className="text-xs text-slate-400 hidden sm:block">
                perfumes-landing-page-bgjf.vercel.app/ceo · Next.js 16
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCodeHelp(!showCodeHelp)}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 text-xs font-mono inline-flex items-center gap-1.5 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Next.js Step-by-Step Code</span>
            </button>
            <a
              href="https://perfumes-landing-page-bgjf.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Open Perfumes Site</span>
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
          {/* GitHub / Next.js Setup Instructions Banner */}
          {showCodeHelp && (
            <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-200 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  GitHub &amp; Next.js 16 Me CEO Picture Add Karne Ka Tareeqa
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 rounded bg-cyan-400 text-slate-950 font-bold text-[11px] inline-flex items-center gap-1 hover:bg-cyan-300 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Code Copied!' : 'Copy Next.js Code'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 leading-relaxed pt-1">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                  <div className="font-mono text-cyan-300 font-bold flex items-center gap-1.5 text-[11px]">
                    <FolderPlus className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Step 1: Public Folder me Upload Karein</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    GitHub repo <strong>(The Ocean Perfumes)</strong> open karein. Next.js projects me images hamesha <code className="text-amber-300 px-1 py-0.5 bg-slate-900 rounded font-mono">public/</code> folder me rakhi jati hain. Wahan <code className="text-emerald-300 font-mono font-bold">ceo.jpg</code> upload kar ke commit karein.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                  <div className="font-mono text-teal-300 font-bold flex items-center gap-1.5 text-[11px]">
                    <Code2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>Step 2: Component Code me Tag Lagayein</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Apne about/ceo component file mein jahan cartoon ya placeholder avatar hai, wahan <code className="text-cyan-300 font-mono">&lt;img src="/ceo.jpg" ... /&gt;</code> lagayein. (Note: Next.js me path seedha <code className="text-amber-300 font-mono">/ceo.jpg</code> likha jata hai).
                  </p>
                </div>
              </div>

              <pre className="p-3 bg-slate-950/95 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto whitespace-pre leading-relaxed">
                {nextJsSnippet}
              </pre>
            </div>
          )}

          {/* Profile Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column with Oceanic Aqua & Golden Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-[340px]">
                {/* Ambient Oceanic Glow Behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/25 via-teal-400/20 to-amber-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all" />

                {/* Aqua Portrait Outer Ring */}
                <div className="relative p-3 sm:p-4 rounded-3xl sm:rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-amber-400 shadow-[0_0_40px_rgba(0,240,255,0.3)]">
                  <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-full border-2 border-cyan-300/60 bg-slate-950">
                    <img
                      src={userPhoto}
                      alt="Portrait of Muhammad Mubashir Ali, Founder and CEO of The Ocean Perfumes"
                      className="w-full h-full object-cover object-top filter saturate-105 group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = '/assets/ceo_mubashir_ali.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleUploadPhoto}
                      className="hidden"
                    />

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/85 hover:bg-cyan-400 text-cyan-300 hover:text-slate-950 border border-cyan-400/50 text-[10px] font-mono tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all active:scale-95"
                    >
                      <span>📷 Add / Change Photo</span>
                    </button>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-2 sm:right-0 px-4 py-2 rounded-xl bg-slate-950/90 border border-cyan-400/50 backdrop-blur-md shadow-xl text-center">
                  <div className="text-xl font-display font-extrabold text-cyan-300 leading-none">
                    Next.js 16
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
                    Full-Stack Brand
                  </div>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="mt-8 p-4 rounded-xl bg-cyan-950/40 border-l-4 border-cyan-400 text-slate-300 text-xs sm:text-sm italic font-serif leading-relaxed text-center sm:text-left w-full max-w-[340px]">
                "A luxury perfume is an invisible signature — crafted from the depths of oceanic majesty to linger with timeless poise."
              </div>
            </div>

            {/* Profile Copy & Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>The Visionary · Haute Parfumerie &amp; Niche Fragrances</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                  Muhammad Mubashir Ali
                </h2>

                <div className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold mt-1">
                  Founder &amp; CEO — The Ocean Perfumes
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  Muhammad Mubashir Ali founded <strong>The Ocean Perfumes</strong> with a singular creative obsession: to blend high-altitude Swiss olfactory essences with raw, captivating oceanic notes — creating fragrances that evoke the mysterious depths and sunlit crests of the world's grandest seas.
                </p>

                <p>
                  Architected on modern <strong className="text-cyan-300">Next.js 16</strong> and <strong className="text-teal-300">Tailwind CSS v4</strong>, the brand brings tactile luxury to the digital space, pairing an intuitive shopping journey with dual-payment flexibility (Credit Card &amp; Cash on Delivery) and real-time inventory precision.
                </p>

                <p>
                  Every extrait de parfum in the house is formulated under his direct creative guidance, guaranteeing <strong className="text-white">uncompromised sillage, enduring longevity, and pure artisanal distinction</strong>.
                </p>
              </div>

              {/* Contact Cards Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* Email Card */}
                <a
                  href="mailto:alimuhammd98573@gmail.com"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Mail className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-cyan-300">
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
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Phone className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-cyan-300">
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
                  href="https://wa.me/923428156086?text=Hello%20Muhammad%20Mubashir%20Ali,%20I%20would%20like%20to%20discuss%20The%20Ocean%20Perfumes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 hover:from-white hover:to-cyan-200 text-slate-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
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
                  href="https://perfumes-landing-page-bgjf.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-medium inline-flex items-center gap-2 transition-all active:scale-95 ml-auto"
                >
                  <span>Open Perfumes Store</span>
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
