import React, { useState } from 'react';
import { Calculator, Clock, Cpu, MessageSquare, Mail, Check, Layers, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.ts';

export const ProjectEstimator: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('genai');
  const [scale, setScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['vectordb', 'guardrails']);

  const projectTypes = [
    { id: 'genai', name: 'Custom LLM & Private RAG', baseWeeks: 3, baseCost: 3500 },
    { id: 'agents', name: 'Autonomous Agent Swarm', baseWeeks: 3, baseCost: 3800 },
    { id: 'vision', name: 'Computer Vision & Edge Perception', baseWeeks: 4, baseCost: 4500 },
    { id: 'voice', name: 'Conversational Voice AI Bot', baseWeeks: 3, baseCost: 3200 },
    { id: 'copywriting', name: 'AI Copywriting & Growth Engines', baseWeeks: 2, baseCost: 1800 },
    { id: 'fullstack', name: 'Full AI SaaS Platform & 3D UI', baseWeeks: 5, baseCost: 5500 },
  ];

  const scaleMultipliers = {
    mvp: { label: 'Startup MVP', multiplier: 1.0, weeksAdd: 0, tag: 'Fast-Track Proof of Concept' },
    growth: { label: 'Scale & High Concurrency', multiplier: 1.4, weeksAdd: 1, tag: 'Production Hardened' },
    enterprise: { label: 'Mission-Critical Enterprise', multiplier: 2.0, weeksAdd: 3, tag: 'Air-Gapped & High Compliance' },
  };

  const addonsList = [
    { id: 'vectordb', name: 'High-Throughput Vector DB (Qdrant / Pinecone)', weeks: 0.5, cost: 600 },
    { id: 'guardrails', name: 'Adversarial Prompt & Jailbreak Defense', weeks: 0.5, cost: 700 },
    { id: 'edge', name: 'Edge GPU / TensorRT Optimization', weeks: 1.0, cost: 1200 },
    { id: 'telephony', name: 'Direct Telephony / WhatsApp API Bridge', weeks: 0.5, cost: 800 },
    { id: 'monitoring', name: 'MLOps Continuous Telemetry & Drift Detection', weeks: 1.0, cost: 950 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const currentProject = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const currentScale = scaleMultipliers[scale];

  const addonsWeeks = selectedAddons.reduce((acc, id) => {
    const addon = addonsList.find((a) => a.id === id);
    return acc + (addon ? addon.weeks : 0);
  }, 0);

  const addonsCost = selectedAddons.reduce((acc, id) => {
    const addon = addonsList.find((a) => a.id === id);
    return acc + (addon ? addon.cost : 0);
  }, 0);

  const totalWeeks = Math.ceil(currentProject.baseWeeks + currentScale.weeksAdd + addonsWeeks);
  const totalCostEstimate = Math.round(currentProject.baseCost * currentScale.multiplier + addonsCost);

  // WhatsApp & Email pre-formatted text
  const scopeSummaryText = `Hello Muhammad Mubashir Ali, I configured an AI project scope on The Ocean Tech Enterprises website:%0A%0A- Project: ${currentProject.name}%0A- Scale: ${currentScale.label}%0A- Estimated Timeline: ${totalWeeks} Weeks%0A- Addons: ${selectedAddons.join(', ')}%0A- Estimated Budget: ~$${totalCostEstimate} USD%0A%0AI would like to schedule a formal discovery consultation.`;
  const whatsappUrl = `https://wa.me/923428156086?text=${scopeSummaryText}`;
  const mailtoUrl = `mailto:${COMPANY_INFO.ceo.email}?subject=${encodeURIComponent(
    `AI Project Scope Proposal - ${currentProject.name}`
  )}&body=${encodeURIComponent(
    `Hello Muhammad Mubashir Ali,\n\nI created an AI project configuration on The Ocean Tech Enterprises portal:\n\nProject Architecture: ${currentProject.name}\nScale: ${currentScale.label}\nEstimated Timeline: ${totalWeeks} Weeks\nAddons: ${selectedAddons.join(', ')}\nEstimated Scope: ~$${totalCostEstimate} USD\n\nPlease let me know when we can schedule an initial technical discussion.\n\nBest regards,`
  )}`;

  return (
    <section id="estimator" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            03. AI Project Scope & Architecture Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Calculate Your AI Implementation Scope
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Configure your technical requirements to generate an instant timeline and architecture profile. Export directly to CEO Muhammad Mubashir Ali for immediate evaluation.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div className="ocean-glass-card p-6 rounded-2xl border border-cyan-500/15">
              <label className="text-xs font-mono uppercase text-cyan-400 block mb-3">
                1. Select Core AI Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setProjectType(pt.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      projectType === pt.id
                        ? 'border-cyan-400 bg-cyan-950/40 text-white shadow-md shadow-cyan-500/15'
                        : 'border-slate-800 bg-slate-900/40 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="text-sm font-semibold mb-0.5">{pt.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Baseline: ~{pt.baseWeeks} Weeks
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Deployment Scale */}
            <div className="ocean-glass-card p-6 rounded-2xl border border-cyan-500/15">
              <label className="text-xs font-mono uppercase text-cyan-400 block mb-3">
                2. Deployment Tier & Concurrency
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {(['mvp', 'growth', 'enterprise'] as const).map((sc) => {
                  const item = scaleMultipliers[sc];
                  return (
                    <button
                      key={sc}
                      onClick={() => setScale(sc)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        scale === sc
                          ? 'border-teal-400 bg-teal-950/40 text-white shadow-md shadow-teal-500/15'
                          : 'border-slate-800 bg-slate-900/40 text-slate-300 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold mb-1">{item.label}</div>
                      <div className="text-[10px] text-slate-400 leading-tight">
                        {item.tag}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Architecture Modules & Addons */}
            <div className="ocean-glass-card p-6 rounded-2xl border border-cyan-500/15">
              <label className="text-xs font-mono uppercase text-cyan-400 block mb-3">
                3. High-Security & Cognitive Addons
              </label>
              <div className="space-y-2">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? 'border-cyan-500/40 bg-cyan-950/20 text-white'
                          : 'border-slate-800 bg-slate-900/20 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border text-slate-950 ${
                            isChecked ? 'bg-cyan-400 border-cyan-400' : 'border-slate-700'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400">
                        +{addon.weeks} wks
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Scope Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="ocean-glass-card p-7 rounded-2xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-6">
                <div>
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    Engineering Specification
                  </div>
                  <h3 className="text-xl font-bold text-white">Project Scope Summary</h3>
                </div>
                <Calculator className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Estimated Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Estimated Timeline</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                    {totalWeeks} <span className="text-xs font-normal text-slate-400">Weeks</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <Cpu className="w-3.5 h-3.5 text-teal-400" />
                    <span>Estimated Scope</span>
                  </div>
                  <div className="text-2xl font-extrabold text-cyan-300 font-mono tabular-nums">
                    ${totalCostEstimate.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-slate-400">USD</span>
                  </div>
                </div>
              </div>

              {/* Breakdown Details */}
              <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Architecture:</span>
                  <span className="font-semibold text-white">{currentProject.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Infrastructure Tier:</span>
                  <span className="font-semibold text-white">{currentScale.label}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Active Addon Modules:</span>
                  <span className="font-mono text-cyan-400">{selectedAddons.length} Selected</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Technical Lead:</span>
                  <span className="text-teal-300 font-medium">Muhammad Mubashir Ali</span>
                </div>
              </div>

              {/* Action Buttons: Direct to CEO */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Scope to CEO on WhatsApp</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl ocean-glass hover:bg-cyan-950/40 text-cyan-300 hover:text-white font-medium text-xs border border-cyan-500/30 transition-all active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Formal Scope Proposal</span>
                </a>
              </div>

              <div className="text-[10px] text-center text-slate-500 mt-4">
                Guaranteed response within 4 hours directly from the founding executive team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
