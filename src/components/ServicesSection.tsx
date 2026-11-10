import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/company.ts';
import {
  Cpu,
  Bot,
  Scan,
  Mic,
  TrendingUp,
  Layers,
  ShieldCheck,
  ArrowRight,
  X,
  Check,
  Sparkles,
  Clock,
  Code2,
  PenTool
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-teal-400" />;
      case 'Scan':
        return <Scan className="w-5 h-5 text-sky-400" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-teal-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-300" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            01. Artificial Intelligence Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Comprehensive Enterprise AI Capabilities
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From domain-specific neural language architectures and multi-agent workflow swarms to edge computer vision and real-time predictive engines, The Ocean Tech Enterprises delivers end-to-end cognitive solutions.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`ocean-glass-card p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 border-cyan-500/25 bg-gradient-to-br from-[#0c1c38]/70 to-[#071124]/80' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-cyan-400 mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-1.5 mb-6">
                    {service.capabilities.slice(0, isFeatured ? 4 : 3).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {service.timeline}
                  </span>

                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-200 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Architecture Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#09152b] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>{activeModalService.category}</span>
              <span aria-hidden="true">·</span>
              <span>Architecture Blueprint</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            {/* Core Capabilities */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                System Specifications & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalService.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20 text-[11px] font-mono text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Estimated Delivery Timeline
                </div>
                <div className="text-base font-bold text-white font-mono">
                  {activeModalService.timeline}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Includes discovery, model training, evaluation, and production rollout.
                </div>
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Directly overseen by CEO Muhammad Mubashir Ali
              </span>

              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  if (onSelectService) onSelectService(title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-semibold text-xs hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/20"
              >
                Request Proposal for this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
