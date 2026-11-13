import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { 
  X, 
  ArrowUpRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  Globe, 
  FlaskConical, 
  Calculator, 
  UserCheck, 
  MessageSquare,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { label: 'Capabilities', href: '#services', icon: Layers, desc: 'Enterprise AI & Custom Engineering' },
    { label: 'AI Products', href: '#portfolio', icon: Cpu, desc: 'Autonomous Cognitive SaaS Suites' },
    { label: 'Web Deployments', href: '#web-deployments', icon: Globe, desc: 'High-Performance Production Apps' },
    { label: 'Live Sandbox', href: '#playground', icon: FlaskConical, desc: 'Interactive LLM & Vision Playground' },
    { label: 'Scope Estimator', href: '#estimator', icon: Calculator, desc: 'Real-time Project Budget & Architecture' },
    { label: 'Founder & CEO', href: '#ceo', icon: UserCheck, desc: 'Muhammad Mubashir Ali - Founder & CEO Profile' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-[100vw] overflow-x-clip z-40 transition-all duration-500 ${
          isScrolled
            ? 'luxury-nav py-3'
            : 'bg-gradient-to-b from-[#040812]/95 via-[#040812]/80 to-transparent py-3.5 sm:py-4 border-b border-cyan-500/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-2 sm:gap-4 min-w-0">
            {/* Zone 1: Luxury Brand wordmark & Logo */}
            <a
              href="#"
              className="flex items-center gap-2 sm:gap-3 whitespace-nowrap shrink-0 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group"
            >
              <Logo size="md" />
            </a>

            {/* Zone 2: Desktop Luxury Navigation Links */}
            <nav className="hidden xl:flex items-center gap-3 2xl:gap-5 text-[11px] 2xl:text-xs uppercase font-medium tracking-[0.05em] 2xl:tracking-[0.09em] text-slate-300 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-300 transition-colors whitespace-nowrap py-1 relative hover:underline underline-offset-8 decoration-cyan-400/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary CTA + Always-Visible 3-Lines Menu Feature */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Primary Consultation Action Button */}
              <button
                onClick={onOpenConsultation}
                className="relative group overflow-hidden inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-[#e0f2fe] via-cyan-300 to-teal-300 hover:from-white hover:to-cyan-200 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] whitespace-nowrap active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <Sparkles className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span className="hidden sm:inline">Schedule AI Call</span>
                <span className="sm:hidden">Schedule</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </button>

              {/* Three Lines (Hamburger Menu) Button - ALWAYS VISIBLE ON ALL SCREENS */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg border border-cyan-500/35 bg-[#061022]/90 hover:bg-cyan-950/60 text-cyan-300 hover:text-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_22px_rgba(0,240,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group cursor-pointer shrink-0"
                aria-label="Toggle navigation menu"
                title="Toggle Executive Menu (3 Lines)"
              >
                {/* Visual 3 Horizontal Lines with sleek cyber styling */}
                <div className="flex flex-col gap-1 w-5 justify-center py-0.5" aria-hidden="true">
                  <span
                    className={`h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-400 to-teal-300 group-hover:from-white group-hover:to-cyan-300 ${
                      menuOpen ? 'w-5 translate-y-1.5 rotate-45' : 'w-5'
                    }`}
                  />
                  <span
                    className={`h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-400 to-teal-300 group-hover:from-white group-hover:to-cyan-300 ${
                      menuOpen ? 'opacity-0 scale-0' : 'w-3.5 self-end'
                    }`}
                  />
                  <span
                    className={`h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-400 to-teal-300 group-hover:from-white group-hover:to-cyan-300 ${
                      menuOpen ? 'w-5 -translate-y-1.5 -rotate-45' : 'w-5'
                    }`}
                  />
                </div>
                <span className="hidden xs:inline sm:inline text-[11px] font-mono uppercase tracking-widest text-slate-200 group-hover:text-white font-semibold">
                  {menuOpen ? 'Close' : 'Menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay when Menu Drawer is Open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Executive Slide-Over Drawer Navigation (Works on ALL screen sizes: Desktop, Tablet & Mobile) */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-[#040916] border-l border-cyan-500/30 z-50 flex flex-col justify-between shadow-[0_0_60px_rgba(0,240,255,0.25)] transition-transform duration-300 ease-out overflow-hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-label="Executive Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-cyan-500/20 flex items-center justify-between bg-gradient-to-b from-[#081329] to-transparent">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400">
              System Directory // 3-Lines Hub
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1.5 rounded-lg border border-cyan-500/30 text-slate-400 hover:text-white hover:bg-cyan-950/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-cyan-300" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-5">
          {/* Quick Branding Note */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <h4 className="text-xs font-semibold text-white tracking-wide uppercase">The Ocean Tech Enterprises</h4>
            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
              Avant-garde AI engineering powerhouse, autonomous cognitive systems & turnkey web deployments.
            </p>
          </div>

          {/* Navigation Links with Icons & Subtitles */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 px-2 mb-2">
              Primary Destinations
            </p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex items-start gap-3.5 p-3 rounded-xl border border-transparent hover:border-cyan-500/30 hover:bg-cyan-950/30 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 uppercase tracking-wider transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 truncate">{link.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Live Production Platforms Shortcut */}
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Client Deployments
              </span>
              <a
                href="#web-deployments"
                onClick={handleLinkClick}
                className="text-[10px] font-mono text-cyan-400 hover:underline"
              >
                View Both &rarr;
              </a>
            </div>
            <div className="space-y-1.5">
              <a
                href="https://real-state-website-kappa-nine.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between text-[11px] text-slate-200 hover:text-cyan-300 transition-colors group"
              >
                <span className="font-semibold truncate">The Ocean Real State</span>
                <span className="text-[10px] font-mono text-emerald-400 shrink-0">Vercel &bull; Firebase</span>
              </a>
              <a
                href="https://interior-designing-website-woad.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between text-[11px] text-slate-200 hover:text-cyan-300 transition-colors group"
              >
                <span className="font-semibold truncate">The Ocean Interiors</span>
                <span className="text-[10px] font-mono text-cyan-400 shrink-0">Vercel &bull; 3D PKR</span>
              </a>
            </div>
          </div>

          {/* Interactive Tools Shortcuts */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-teal-950/30 border border-cyan-500/30">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Quick Tools</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href="#estimator"
                onClick={handleLinkClick}
                className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/20 hover:border-cyan-400 text-center text-[11px] font-medium text-slate-200 hover:text-cyan-300 transition-colors"
              >
                Cost Calculator
              </a>
              <a
                href="#playground"
                onClick={handleLinkClick}
                className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/20 hover:border-cyan-400 text-center text-[11px] font-medium text-slate-200 hover:text-cyan-300 transition-colors"
              >
                AI Sandbox
              </a>
            </div>
          </div>
        </div>

        {/* Drawer Footer with Actions & Direct CEO WhatsApp */}
        <div className="p-5 sm:p-6 border-t border-cyan-500/20 bg-[#030712] space-y-3">
          <button
            onClick={() => {
              setMenuOpen(false);
              if (onOpenConsultation) onOpenConsultation();
            }}
            className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-200 hover:from-white hover:to-cyan-200 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Sparkles className="w-4 h-4 text-slate-900" />
            <span>Schedule Architecture Call</span>
          </button>

          <a
            href={COMPANY_INFO.ceo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 text-xs font-mono text-cyan-300 hover:text-white border border-cyan-500/35 hover:border-cyan-400 rounded-xl bg-cyan-950/30 hover:bg-cyan-950/60 transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span>WhatsApp CEO: {COMPANY_INFO.ceo.whatsapp}</span>
          </a>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
            <span>HQ: Karachi, PK</span>
            <span className="text-cyan-500/70">Online // Latency 24ms</span>
          </div>
        </div>
      </aside>
    </>
  );
};

