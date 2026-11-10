import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
  Activity,
  Maximize2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  // Interactive 3D Mouse Parallax & Live Core State
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isCorePulsing, setIsCorePulsing] = useState(false);
  const [liveTflops, setLiveTflops] = useState(48.2);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.035);
    setRotateY(x * 0.035);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Subtle live telemetry pulse fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTflops((prev) => +(48.0 + Math.random() * 0.6).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const triggerLivePulse = () => {
    setIsCorePulsing(true);
    setTimeout(() => setIsCorePulsing(false), 1200);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: LEFT SIDE = LIVE AI IMAGE | RIGHT SIDE = LUXURY HERO TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* LEFT SIDE: LIVE AI LUXURY IMAGE CONTAINER */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-lg aspect-[4/3] rounded-3xl p-2 transition-transform duration-200 ease-out perspective-1000 group cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
              onClick={triggerLivePulse}
              title="Click to pulse Live AI Core"
            >
              {/* Layer 1: Luxury Platinum & Oceanic Outer Aura */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400/40 via-teal-300/30 to-[#fef3c7]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Layer 2: Rotating Holographic Reticle Rings (Live Effect) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[112%] h-[112%] rounded-full border border-cyan-400/25 border-dashed animate-spin-slow" />
                <div className="w-[96%] h-[96%] rounded-full border border-teal-300/20 border-dotted animate-spin-reverse" />
                <div
                  className={`w-[125%] h-[125%] rounded-full border border-cyan-400/15 ${
                    isCorePulsing ? 'animate-ping' : 'animate-radar-pulse'
                  }`}
                />
              </div>

              {/* Layer 3: Glassmorphism Image Viewport */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 border border-cyan-400/35 shadow-2xl">
                {/* Generated High-Res Live AI Visual */}
                <img
                  src="/src/assets/images/project_medical_vision_1793217410053.jpg"
                  alt="The Ocean Tech Enterprises Cognitive AI Neural Interface"
                  className={`w-full h-full object-cover filter brightness-100 contrast-105 group-hover:scale-105 transition-all duration-700 ${
                    isCorePulsing ? 'scale-108 brightness-125' : ''
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Scrim for Legibility & Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-[#040812]/20 opacity-70" />

                {/* Live Scanning Laser Line */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_15px_#00f0ff] animate-pulse top-1/2 -translate-y-1/2 pointer-events-none" />

                {/* Top Corner Live Telemetry Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-semibold uppercase tracking-wider">Live Neural Scan Active</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-teal-300 tabular-nums">{liveTflops} TFLOPS</span>
                </div>

                {/* Top Right Luxury Watermark Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-slate-950/70 backdrop-blur-md border border-amber-200/20 text-[9px] font-serif text-amber-100 tracking-[0.2em] uppercase">
                  Cognitive AI Matrix
                </div>

                {/* Bottom Interactive HUD Bar */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/25 text-xs">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-slate-200">
                      Sovereign Model Inference // Sub-20ms
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                    Click to Pulse &rarr;
                  </span>
                </div>

                {/* Corner Metallic Accent Brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
              </div>

              {/* Sub-label Below Live Image */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
                <span>The Ocean Tech Enterprises · Neural Unit</span>
                <span className="text-cyan-400">Interactive 3D Motion</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: LUXURY HERO TEXT CONTENT */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-7 text-left min-w-0 w-full">
            {/* Luxury Metadata Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-cyan-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Haute Artificial Intelligence</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Enterprise Systems</span>
            </div>

            {/* Luxury Company Title & Headline */}
            <div className="space-y-3">
              <h2
                className="text-sm sm:text-base font-serif font-bold text-amber-100/90 tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                The Ocean Tech Enterprises
              </h2>

              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.18] text-balance">
                Navigating the Depths of{' '}
                <span className="text-gradient-cyan block sm:inline">
                  Artificial Intelligence
                </span>
              </h1>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
              {COMPANY_INFO.description}
            </p>

            {/* Responsive Action CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-bold text-slate-950 bg-gradient-to-r from-[#e0f2fe] via-cyan-300 to-teal-300 hover:from-white hover:to-cyan-200 rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
              >
                <span>Schedule AI Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.ceo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-semibold text-slate-200 hover:text-white ocean-glass hover:bg-cyan-950/40 rounded-lg border border-cyan-500/30 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp CEO ({COMPANY_INFO.ceo.whatsapp})</span>
              </a>
            </div>

            {/* Luxury Engineering Pillars */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Private On-Premises LLMs</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Sub-25ms Edge Inference</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Air-Gapped Compliance</span>
              </span>
            </div>
          </div>
        </div>

        {/* Full-width 4-column proof strip below the 2-column hero split */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-cyan-500/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {COMPANY_INFO.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl ocean-glass-card border border-cyan-500/15 text-center hover:border-cyan-500/40 transition-colors group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-300 tracking-tight tabular-nums group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1.5 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
