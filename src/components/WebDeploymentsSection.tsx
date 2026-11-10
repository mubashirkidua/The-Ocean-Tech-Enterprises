import React, { useState } from 'react';
import { WEB_DEPLOYMENTS, WebDeployment } from '../data/company.ts';
import {
  Globe,
  ExternalLink,
  Eye,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  Calculator,
  Shield,
  Zap,
  Cpu
} from 'lucide-react';
import { LiveWebPreviewModal } from './LiveWebPreviewModal.tsx';
import { WatchesCeoModal } from './WatchesCeoModal.tsx';
import { PerfumesCeoModal } from './PerfumesCeoModal.tsx';

interface WebDeploymentsSectionProps {
  onOpenConsultation?: (topic?: string) => void;
}

export const WebDeploymentsSection: React.FC<WebDeploymentsSectionProps> = ({ onOpenConsultation }) => {
  const [activePreview, setActivePreview] = useState<WebDeployment | null>(null);
  const [isWatchesCeoOpen, setIsWatchesCeoOpen] = useState(false);
  const [isPerfumesCeoOpen, setIsPerfumesCeoOpen] = useState(false);

  return (
    <section id="web-deployments" className="py-24 relative z-10 border-t border-cyan-500/10">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            <span>05. Live Full-Stack Web Deployments & Client Platforms</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Production Web Applications & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
              Turnkey Digital Architectures
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            In addition to autonomous AI models, <strong>The Ocean Tech Enterprises</strong> engineers bespoke,
            full-stack web applications and turnkey client architectures. From turnkey architectural 3D budget visualizers
            and real-time Firebase-powered luxury real estate marketplaces to dark glassmorphism haute horlogerie e-commerce suites
            and Next.js 16 luxury perfume platforms with dual card &amp; COD checkouts,
            every platform features high-throughput backends and reactive architectures deployed on global edge networks.
          </p>
        </div>

        {/* Deployments Grid */}
        <div className="space-y-12">
          {WEB_DEPLOYMENTS.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0a1020]/80 to-[#060b16]/95 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden shadow-2xl shadow-cyan-950/20"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
                {/* Visual Preview Column (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  {/* Mockup Image Frame */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-xl group-hover:border-cyan-500/40 transition-colors">
                    {/* Live Badge Overlay */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>{project.status}</span>
                    </div>

                    <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-800/60 text-[10px] uppercase font-mono tracking-wider text-cyan-300">
                      {project.badge || 'Live Production'}
                    </div>

                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (project.id === 'the-ocean-watches') {
                          target.src = '/assets/ocean_watches_mockup.jpg';
                        } else if (project.id === 'the-ocean-perfumes') {
                          target.src = '/assets/ocean_perfumes_mockup.jpg';
                        }
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Founder Badge Overlay if present */}
                    {project.founder && (
                      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-xs shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono uppercase text-cyan-300 font-bold">{project.founder.role}:</span>
                        <span className="text-[11px] font-semibold text-white">{project.founder.name}</span>
                      </div>
                    )}

                    {/* Hover Quick Action */}
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                      <button
                        onClick={() => setActivePreview(project)}
                        className="px-4 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Interactive Preview</span>
                      </button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-xs inline-flex items-center gap-2 hover:bg-slate-800 transition-colors"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-base sm:text-lg font-bold font-mono text-cyan-300">{metric.value}</div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content & Capabilities Column (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Sector: {project.clientSector}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm font-medium text-cyan-200/90 mb-3 font-mono">
                      {project.subtitle}
                    </p>

                    {/* Founder Spotlight tag if specified */}
                    {project.founder && (
                      <div className="mb-4 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-950/50 to-slate-900 border border-cyan-500/30">
                        <img
                          src={project.founder.photoUrl}
                          alt={project.founder.name}
                          className="w-6 h-6 rounded-full object-cover object-top border border-cyan-400/80"
                        />
                        <span className="text-xs text-slate-300">
                          <strong className="text-white font-medium">{project.founder.name}</strong> · <span className="text-cyan-400 font-mono text-[11px]">{project.founder.role}</span>
                        </span>
                      </div>
                    )}

                    {/* Highly Visible Live Vercel Link Box */}
                    <div className="mb-5 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/60 via-cyan-950/50 to-slate-900 border border-emerald-400/30 flex flex-wrap items-center justify-between gap-3 shadow-inner shadow-emerald-950/40">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Globe className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
                        <span className="text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider shrink-0">
                          Live Vercel Link:
                        </span>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-semibold text-cyan-200 hover:text-white underline decoration-cyan-400/60 truncate"
                        >
                          {project.liveUrl}
                        </a>
                      </div>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 text-xs font-extrabold rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 inline-flex items-center gap-1.5 transition-all shadow-sm shadow-emerald-400/20 active:scale-95 shrink-0"
                      >
                        <span>Open Vercel App</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Key Built-In Capabilities Checklist */}
                    <div className="mb-6 space-y-2.5">
                      <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                        Architectural Features & Systems:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.keyFeatures.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60"
                          >
                            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                        Production Technology Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-500/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                    {/* Primary Live Website Link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-white hover:to-cyan-200 text-slate-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Dedicated Founder & CEO Button for The Ocean Watches */}
                    {project.id === 'the-ocean-watches' && (
                      <button
                        onClick={() => setIsWatchesCeoOpen(true)}
                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-600/20 border border-amber-400/60 hover:border-amber-300 text-amber-300 hover:text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2.5 transition-all shadow-md shadow-amber-500/10 active:scale-95 group"
                      >
                        <img
                          src="/ceo.jpg"
                          alt="Muhammad Mubashir Ali"
                          className="w-5 h-5 rounded-full object-cover border border-amber-300 group-hover:scale-110 transition-transform"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/assets/ceo_mubashir_ali.jpg';
                          }}
                        />
                        <span>Founder &amp; CEO Profile</span>
                      </button>
                    )}

                    {/* Dedicated Founder & CEO Button for The Ocean Perfumes */}
                    {project.id === 'the-ocean-perfumes' && (
                      <button
                        onClick={() => setIsPerfumesCeoOpen(true)}
                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-amber-500/20 border border-cyan-400/60 hover:border-cyan-300 text-cyan-300 hover:text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2.5 transition-all shadow-md shadow-cyan-500/10 active:scale-95 group"
                      >
                        <img
                          src="/ceo.jpg"
                          alt="Muhammad Mubashir Ali"
                          className="w-5 h-5 rounded-full object-cover border border-cyan-300 group-hover:scale-110 transition-transform"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/assets/ceo_mubashir_ali.jpg';
                          }}
                        />
                        <span>Founder &amp; CEO Profile</span>
                      </button>
                    )}

                    {/* Interactive Modal Preview */}
                    <button
                      onClick={() => setActivePreview(project)}
                      className="px-5 py-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all active:scale-95"
                    >
                      <Eye className="w-4 h-4" />
                      <span>In-App Device Preview</span>
                    </button>

                    {/* Request Architecture */}
                    <button
                      onClick={() =>
                        onOpenConsultation &&
                        onOpenConsultation(`Full-Stack Web Architecture like ${project.name}`)
                      }
                      className="ml-auto text-xs font-mono text-slate-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Commission Similar Platform</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner: Custom Web & SaaS Development */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900/80 via-cyan-950/30 to-slate-900/80 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Need a Custom Full-Stack Platform or SaaS Application?
            </h3>
            <p className="text-sm text-slate-300">
              The Ocean Tech Enterprises builds bespoke high-performance websites, client portals, 3D configurators, and enterprise software designed to scale effortlessly.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation && onOpenConsultation('Custom Full-Stack Web Platform')}
            className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md shadow-cyan-500/20 active:scale-95 transition-all shrink-0"
          >
            Schedule Technical Consultation
          </button>
        </div>
      </div>

      {/* Interactive Device Preview Modal */}
      <LiveWebPreviewModal
        deployment={activePreview}
        onClose={() => setActivePreview(null)}
      />

      {/* Dedicated Founder & CEO Modal for The Ocean Watches */}
      <WatchesCeoModal
        isOpen={isWatchesCeoOpen}
        onClose={() => setIsWatchesCeoOpen(false)}
      />

      {/* Dedicated Founder & CEO Modal for The Ocean Perfumes */}
      <PerfumesCeoModal
        isOpen={isPerfumesCeoOpen}
        onClose={() => setIsPerfumesCeoOpen(false)}
      />
    </section>
  );
};
