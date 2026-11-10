import React from 'react';
import { TECH_RADAR, WORKFLOW_STEPS } from '../data/company.ts';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10 bg-[#050a16]/70 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            06. Engineering Foundation & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            High-Performance AI Technology Radar
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            We architect solutions across the most resilient, high-throughput machine learning frameworks, vector indices, and GPU-accelerated runtimes.
          </p>
        </div>

        {/* 4-Column Tech Radar Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TECH_RADAR.map((category) => (
            <div
              key={category.category}
              className="ocean-glass-card p-6 rounded-2xl border border-cyan-500/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/15">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-100">{item.name}</span>
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/20">
                          {item.tier}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Engineering Execution Lifecycle */}
        <div className="pt-10 border-t border-slate-800">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="text-xs font-mono text-teal-400 uppercase tracking-wider">
              Methodology & Delivery Protocol
            </div>
            <h3 className="text-2xl font-bold text-white">
              How We Engineer & Deploy Enterprise AI
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((wf) => (
              <div
                key={wf.step}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-colors relative group"
              >
                <div className="text-2xl font-extrabold font-mono text-cyan-400/80 mb-3 group-hover:text-cyan-300 transition-colors">
                  {wf.step}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{wf.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
