import React, { useState } from 'react';
import {
  projectAutonomousLogistics,
  projectFintechSwarm,
  projectMedicalVision,
} from '../assets/images/index.ts';
import { Play, CheckCircle2, Cpu, Eye, Network, Search, Layers, RefreshCw } from 'lucide-react';

export const AiPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'agent' | 'rag'>('vision');

  // Vision State
  const [visionScenario, setVisionScenario] = useState<'medical' | 'industrial' | 'robotics'>('medical');
  const [showOverlays, setShowOverlays] = useState(true);

  // Agent Swarm State
  const [agentStep, setAgentStep] = useState<number>(3);
  const [isSimulatingAgent, setIsSimulatingAgent] = useState(false);

  // RAG Query State
  const [selectedQuery, setSelectedQuery] = useState(
    'What are the compliance guardrails for automated financial transactions?'
  );

  const runAgentSimulation = () => {
    setIsSimulatingAgent(true);
    setAgentStep(0);
    const intervals = [600, 1200, 1800, 2400];
    intervals.forEach((delay, idx) => {
      setTimeout(() => {
        setAgentStep(idx + 1);
        if (idx === intervals.length - 1) {
          setIsSimulatingAgent(false);
        }
      }, delay);
    });
  };

  return (
    <section id="playground" className="py-24 relative z-10 bg-[#060c18]/60 border-y border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            02. Live AI Systems Demonstration
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Interactive Cognitive Sandbox
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Experience the foundational engines engineered by The Ocean Tech Enterprises. Test real-time visual neural inference, autonomous swarm workflows, and semantic knowledge retrieval.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/80 rounded-xl border border-cyan-500/20 max-w-fit mb-8">
          <button
            onClick={() => setActiveTab('vision')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'vision'
                ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-200 border border-cyan-400/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Neural Computer Vision</span>
          </button>

          <button
            onClick={() => setActiveTab('agent')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'agent'
                ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-200 border border-cyan-400/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Autonomous Swarm Execution</span>
          </button>

          <button
            onClick={() => setActiveTab('rag')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'rag'
                ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-200 border border-cyan-400/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Enterprise Semantic RAG</span>
          </button>
        </div>

        {/* Sandbox Content Container */}
        <div className="ocean-glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/20 shadow-2xl">
          {/* TAB 1: COMPUTER VISION */}
          {activeTab === 'vision' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">Inference Engine v10.4</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Spatial Perception & Bounding Mesh
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Our edge-optimized models perform sub-25ms multi-class segmentation, bounding tensor estimation, and defect classification.
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-mono text-slate-400 block uppercase">
                    Select Visual Domain:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'medical', label: 'Biomedical Scan' },
                      { id: 'industrial', label: 'Circuit Defect' },
                      { id: 'robotics', label: 'Lidar Stream' },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setVisionScenario(s.id as any)}
                        className={`p-2.5 rounded-lg text-xs font-medium text-center border transition-all ${
                          visionScenario === s.id
                            ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/50'
                            : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                  <span className="text-slate-300 font-medium">Neural Bounding Overlay</span>
                  <button
                    onClick={() => setShowOverlays(!showOverlays)}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      showOverlays ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {showOverlays ? 'ENABLED' : 'DISABLED'}
                  </button>
                </div>

                {/* Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                    <div className="text-xs text-slate-500 font-mono">LATENCY</div>
                    <div className="text-sm font-bold text-cyan-300 font-mono">18.4ms</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                    <div className="text-xs text-slate-500 font-mono">CONFIDENCE</div>
                    <div className="text-sm font-bold text-teal-300 font-mono">99.4%</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                    <div className="text-xs text-slate-500 font-mono">FRAME RATE</div>
                    <div className="text-sm font-bold text-sky-300 font-mono">60 FPS</div>
                  </div>
                </div>
              </div>

              {/* Viewport Column */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-950 aspect-video flex items-center justify-center group shadow-2xl">
                  {/* Background contextual visual */}
                  <img
                    src={
                      visionScenario === 'medical'
                        ? projectMedicalVision
                        : visionScenario === 'industrial'
                        ? projectAutonomousLogistics
                        : projectFintechSwarm
                    }
                    alt="Neural Vision Feed"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* High-tech HUD scanning line */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse top-1/3 shadow-[0_0_15px_#00f0ff]" />

                  {/* Real-time Bounding Boxes Overlay */}
                  {showOverlays && (
                    <div className="absolute inset-0 pointer-events-none p-6">
                      {visionScenario === 'medical' && (
                        <>
                          <div className="absolute top-[26%] left-[32%] w-[34%] h-[44%] border-2 border-cyan-400 rounded-lg bg-cyan-400/10 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            <span className="absolute -top-5 left-0 px-2 py-0.5 bg-cyan-400 text-slate-950 font-mono text-[9.5px] font-bold rounded-t">
                              CARDIOPULMONARY_MATRIX: 99.4%
                            </span>
                          </div>
                          <div className="absolute top-[42%] right-[24%] w-[16%] h-[20%] border border-teal-300 rounded bg-teal-400/10">
                            <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-teal-400 text-slate-950 font-mono text-[9px] font-bold rounded-t">
                              TISSUE_NODULE_ROI: 97.8%
                            </span>
                          </div>
                        </>
                      )}

                      {visionScenario === 'industrial' && (
                        <>
                          <div className="absolute top-[35%] left-[20%] w-[25%] h-[42%] border-2 border-teal-400 rounded bg-teal-400/10">
                            <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-teal-400 text-slate-950 font-mono text-[10px] font-bold rounded-t">
                              ROBOTIC_CARRIER_04: 98.6%
                            </span>
                          </div>
                          <div className="absolute bottom-[20%] right-[30%] w-[20%] h-[30%] border border-cyan-400 rounded bg-cyan-400/10">
                            <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-cyan-400 text-slate-950 font-mono text-[9px] font-bold rounded-t">
                              PAYLOAD_SECURED: 99.7%
                            </span>
                          </div>
                        </>
                      )}

                      {visionScenario === 'robotics' && (
                        <div className="absolute top-[30%] left-[25%] w-[50%] h-[45%] border-2 border-sky-400 rounded bg-sky-400/10">
                          <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-sky-400 text-slate-950 font-mono text-[10px] font-bold rounded-t">
                            QUANT_GRAPH_CLUSTER: 99.1%
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Corner Reticles */}
                  <div className="absolute top-3 left-3 font-mono text-[10px] text-cyan-300 bg-slate-950/70 px-2 py-0.5 rounded border border-cyan-500/30">
                    LIVE_INFERENCE // 2048x1536
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-[10px] text-teal-300 bg-slate-950/70 px-2 py-0.5 rounded border border-teal-500/30">
                    TENSORRT_ACCELERATED
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AGENT SWARM SIMULATOR */}
          {activeTab === 'agent' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Multi-Agent Autonomous Orchestration
                  </h3>
                  <p className="text-sm text-slate-300">
                    Simulate how decentralized cognitive agents plan, tool-call, verify, and execute an enterprise mandate.
                  </p>
                </div>
                <button
                  onClick={runAgentSimulation}
                  disabled={isSimulatingAgent}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {isSimulatingAgent ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Swarm Orchestrating...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Execute Swarm Run</span>
                    </>
                  )}
                </button>
              </div>

              {/* Swarm Step Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  {
                    step: 1,
                    role: 'Lead Planner Agent',
                    task: 'Deconstruct mandate into atomic sub-goals and assign deterministic validation criteria.',
                  },
                  {
                    step: 2,
                    role: 'Vector Retriever Agent',
                    task: 'Query hybrid Qdrant embeddings to extract relevant contractual policies and historical limits.',
                  },
                  {
                    step: 3,
                    role: 'Risk Verification Agent',
                    task: 'Perform adversarial red-team check, calculate liquidity exposure, and evaluate guardrails.',
                  },
                  {
                    step: 4,
                    role: 'Execution & Settlement Agent',
                    task: 'Invoke authenticated API webhooks and return verifiable cryptographic audit receipt.',
                  },
                ].map((s) => {
                  const isDone = agentStep >= s.step;
                  const isCurrent = agentStep === s.step && isSimulatingAgent;
                  return (
                    <div
                      key={s.step}
                      className={`p-4 rounded-xl border transition-all ${
                        isCurrent
                          ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/20'
                          : isDone
                          ? 'border-teal-500/30 bg-slate-900/50'
                          : 'border-slate-800 bg-slate-950/40 opacity-40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-cyan-400">STAGE 0{s.step}</span>
                        {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                      </div>
                      <div className="text-sm font-semibold text-white mb-1">{s.role}</div>
                      <div className="text-xs text-slate-300 leading-relaxed">{s.task}</div>
                    </div>
                  );
                })}
              </div>

              {/* Console Output Block */}
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20 font-mono text-xs text-slate-300 space-y-1">
                <div className="text-cyan-400">[ORCHESTRATOR] Swarm State: ACTIVE · 4 Agents Synced · Zero Hallucination Guardrail Active</div>
                <div className="text-slate-400">&gt; Subtask 1 verified in 42ms. Output: Plan graph generated.</div>
                <div className="text-slate-400">&gt; Subtask 2 verified in 78ms. Output: 8 high-density embeddings matched.</div>
                <div className="text-teal-300">&gt; Subtask 3 verified in 31ms. Output: Risk delta 0.002% below enterprise threshold.</div>
                <div className="text-cyan-300">&gt; Final Execution: Success. Response emitted with 99.8% confidence.</div>
              </div>
            </div>
          )}

          {/* TAB 3: ENTERPRISE RAG SANDBOX */}
          {activeTab === 'rag' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Enterprise Semantic Knowledge Retrieval (RAG)
                </h3>
                <p className="text-sm text-slate-300">
                  Select or test how proprietary enterprise documents are parsed, indexed into high-dimensional vectors, and synthesized into grounded answers.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 block uppercase">
                  Select Enterprise Query:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'What are the compliance guardrails for automated financial transactions?',
                    'How does the multimodal vision pipeline handle low-light industrial anomalies?',
                    'What is the failover protocol during regional cloud latency spikes?',
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => setSelectedQuery(q)}
                      className={`text-xs px-3 py-2 rounded-lg text-left transition-all ${
                        selectedQuery === q
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/40'
                          : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      "{q}"
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Retrieved Document Chunks */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Retrieved Vector Chunks (Qdrant Cosine Similarity: 0.942)
                  </div>
                  <div className="space-y-2 text-xs text-slate-300 font-mono">
                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                      <span className="text-teal-400">[DOC_SEC_4.2]:</span> All algorithmic trade routing mandates deterministic pre-trade risk checks, max slippage bounding within 15bps, and immediate human escalation for variance &gt; 2.5%.
                    </div>
                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                      <span className="text-teal-400">[POLICY_REG_8]:</span> Autonomous execution is certified only when dual-node cryptographic consensus is recorded across hot-standby servers.
                    </div>
                  </div>
                </div>

                {/* Synthesized Response */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-500/20 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-teal-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Grounded Neural Synthesis (Zero Hallucination Verified)
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Automated financial transactions operate under mandatory pre-trade risk verification with a maximum permissible slippage of 15 basis points. Variance exceeding 2.5% triggers automatic failover and human escalation, while all transactions require dual-node cryptographic consensus.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Source Citations: 2 Documents Verified</span>
                    <span className="text-cyan-400">Inference: 142ms</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
