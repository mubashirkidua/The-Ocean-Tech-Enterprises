import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/company.ts';
import { ArrowUpRight, X, CheckCircle, Code, Sparkles, Layers, Box, Globe, ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectSolution?: (solutionName: string) => void;
  onLaunchDemo?: (productId: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectSolution, onLaunchDemo }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Products & Deployments' },
    { id: 'web', label: 'Full-Stack Web Deployments', match: 'web-deployments' },
    { id: 'copy', label: 'AI Copywriting', match: 'ai-copywriting' },
    { id: 'voice', label: 'Voice AI Telephony', match: 'conversational-voice' },
    { id: 'vision', label: 'Computer Vision', match: 'computer-vision' },
    { id: 'agents', label: 'Autonomous Swarms', match: 'autonomous-agents' },
    { id: 'rag', label: 'Generative AI & RAG', match: 'generative-ai-llm' },
  ];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === 'all') return true;
    const cat = filterCategories.find((c) => c.id === activeFilter);
    return cat ? study.relatedServiceId === cat.match : true;
  });

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase flex items-center gap-2">
            <Box className="w-3.5 h-3.5" />
            <span>04. Ready-to-Deploy Products & Client Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Flagship AI Products & Deployable Solutions
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Every service we offer is backed by proven, ready-to-deploy enterprise software products and production architectures. Clients can license, customize, and deploy these solutions directly into their infrastructure.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="ocean-glass-card rounded-2xl overflow-hidden border border-cyan-500/15 hover:border-cyan-500/40 transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Visual Frame */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (study.id === 'the-ocean-perfumes-study') {
                      target.src = '/assets/ocean_perfumes_mockup.jpg';
                    } else if (study.id === 'the-ocean-watches-study') {
                      target.src = '/assets/ocean_watches_mockup.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071124] via-transparent to-transparent opacity-80" />

                {/* Product Badge Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{study.productBadge || 'Enterprise Solution'}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded border border-cyan-500/20 truncate">
                  Service: {study.relatedServiceTitle || study.clientSector}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs font-medium text-teal-300 mb-3 font-mono">
                    {study.headline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {study.summary}
                  </p>

                  {/* Direct Live URL Display if available */}
                  {study.liveDemoUrl && (
                    <a
                      href={study.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 px-3 py-2 rounded-xl border border-cyan-500/30 mb-4 transition-all group/link"
                      title="Open deployed application on Vercel"
                    >
                      <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
                      <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">Live Vercel:</span>
                      <span className="truncate underline decoration-cyan-400/40 text-slate-200 group-hover/link:text-cyan-200">
                        {study.liveDemoUrl}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 ml-auto shrink-0 text-cyan-400" />
                    </a>
                  )}

                  {/* Quantitative Proof Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-xl bg-slate-950/60 border border-slate-800 mb-6">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm sm:text-base font-extrabold font-mono text-cyan-300 tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[9.5px] text-slate-400 uppercase tracking-tight mt-0.5 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {study.liveDemoUrl ? (
                      <a
                        href={study.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-white hover:to-emerald-300 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Visit Live Site (Vercel) ↗</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          if (onLaunchDemo) {
                            onLaunchDemo(study.id);
                          }
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5 fill-current" />
                        <span>Launch Live Product</span>
                      </button>
                    )}

                    <button
                      onClick={() => setSelectedCase(study)}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors"
                      title="Inspect Architecture Blueprint"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                    <span>Enterprise License Available</span>
                    <button
                      onClick={() => {
                        if (onSelectSolution) {
                          onSelectSolution(study.relatedServiceTitle || study.title);
                        }
                      }}
                      className="text-cyan-400 hover:underline"
                    >
                      Deploy Solution &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Deep Dive Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#081329] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>{selectedCase.productBadge}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedCase.relatedServiceTitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {selectedCase.title}
            </h3>
            <p className="text-sm font-medium text-teal-300 mb-6 font-mono">
              {selectedCase.headline}
            </p>

            <div className="rounded-xl overflow-hidden mb-6 aspect-video max-h-72 border border-slate-800">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20 mb-6">
              {selectedCase.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold font-mono text-cyan-300 tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 uppercase mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* In-Depth Breakdown */}
            <div className="space-y-4 text-sm leading-relaxed mb-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-1">Problem / Market Need:</h4>
                <p className="text-slate-300">{selectedCase.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 mb-1">The Ocean Tech Architecture:</h4>
                <p className="text-slate-300">{selectedCase.solution}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-teal-400 mb-1">Measurable Business Impact:</h4>
                <p className="text-slate-300">{selectedCase.impact}</p>
              </div>
            </div>

            {/* Tech Stack & Action */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-400">Deployed Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => {
                    const id = selectedCase.id;
                    setSelectedCase(null);
                    if (onLaunchDemo) onLaunchDemo(id);
                  }}
                  className="px-4 py-2.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-400 text-cyan-200 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Interactive Tool</span>
                </button>

                <button
                  onClick={() => {
                    const title = selectedCase.relatedServiceTitle || selectedCase.title;
                    setSelectedCase(null);
                    if (onSelectSolution) onSelectSolution(title);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/20"
                >
                  Request Custom Deployment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
