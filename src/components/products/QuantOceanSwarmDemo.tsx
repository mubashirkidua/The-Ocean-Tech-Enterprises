import React, { useState } from 'react';
import { Network, Play, RefreshCw, CheckCircle2, ShieldCheck, Terminal, ArrowRight, Zap, Database } from 'lucide-react';

export const QuantOceanSwarmDemo: React.FC = () => {
  const [mission, setMission] = useState<'arbitrage' | 'logistics' | 'threat'>('arbitrage');
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeStep, setActiveStep] = useState(4);
  const [agentLogs, setAgentLogs] = useState<string[]>([
    '[INIT] Swarm orchestrator online. 4 specialized cognitive worker agents synced.',
    '[PLANNER-01] Decomposed mandate into 3 deterministic sub-goals with cryptographic validation bounds.',
    '[RETRIEVER-02] Ingested 1,420 streaming order-book depth ticks in 12ms.',
    '[AUDITOR-03] Adversarial guardrail confirmed: Slippage variance 0.014% within permissible threshold.',
    '[SETTLER-04] Atomic multi-leg transaction executed. Cryptographic receipt: 0x8f2a...c914 verified.',
  ]);

  const missions = {
    arbitrage: {
      name: 'High-Frequency Quantitative Cross-Market Arbitrage',
      objective: 'Monitor liquidity imbalance across Binance, Uniswap v3 & Coinbase, executing atomic swaps when spread > 28bps.',
      targetSLA: 'Sub-18ms Execution',
    },
    logistics: {
      name: 'Dynamic Global Supply Chain Disruption Mitigation',
      objective: 'Detect maritime canal congestion, re-allocate 140 container loads to secondary air freight without idle factory halts.',
      targetSLA: '< 45s Orchestration',
    },
    threat: {
      name: 'Automated Cyber Threat & Adversarial Defense Swarm',
      objective: 'Intercept anomalous DDoS vector spikes, synthesize firewall ACL rules, and isolate compromised microservices.',
      targetSLA: 'Real-time Isolation',
    },
  };

  const runSwarm = () => {
    setIsExecuting(true);
    setActiveStep(0);
    setAgentLogs(['[ORCHESTRATOR] Spawning autonomous worker agents...']);

    const steps = [
      { step: 1, log: `[PLANNER-01] Parsing mission "${missions[mission].name}". Generated execution DAG with 4 dependencies.` },
      { step: 2, log: `[RETRIEVER-02] Hybrid vector retrieval active. Matched 8 real-time historical patterns with 99.4% cosine similarity.` },
      { step: 3, log: `[AUDITOR-03] Adversarial risk model passed. Liquidity depth confirmed. Zero regulatory compliance violations.` },
      { step: 4, log: `[SETTLER-04] Mandate completed successfully. Payload dispatched with verifiable hash: 0x${Math.random().toString(16).slice(2, 10)}.` },
    ];

    steps.forEach((s, i) => {
      setTimeout(() => {
        setActiveStep(s.step);
        setAgentLogs((prev) => [...prev, s.log]);
        if (i === steps.length - 1) {
          setIsExecuting(false);
        }
      }, (i + 1) * 750);
    });
  };

  const agents = [
    {
      id: 1,
      name: 'Planner-Alpha',
      role: 'Goal Decomposition & Task Scheduler',
      status: activeStep >= 1 ? 'Task Complete' : 'Waiting',
    },
    {
      id: 2,
      name: 'Retriever-Beta',
      role: 'Vector Ops & Ingestion Engine',
      status: activeStep >= 2 ? 'Task Complete' : activeStep === 1 ? 'Ingesting...' : 'Queued',
    },
    {
      id: 3,
      name: 'Auditor-Gamma',
      role: 'Adversarial Risk & Slippage Gatekeeper',
      status: activeStep >= 3 ? 'Task Complete' : activeStep === 2 ? 'Auditing...' : 'Queued',
    },
    {
      id: 4,
      name: 'Settler-Delta',
      role: 'Atomic API Execution & Receipt Anchor',
      status: activeStep >= 4 ? 'Task Complete' : activeStep === 3 ? 'Executing...' : 'Queued',
    },
  ];

  return (
    <div className="space-y-6 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900/60 border border-cyan-500/25">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Network className="w-4 h-4" />
            <span>QuantOcean Swarm™ Orchestrator</span>
            <span className="text-slate-500">·</span>
            <span className="text-teal-300">LangGraph Multi-Agent Architecture</span>
          </div>
          <h4 className="text-lg font-bold text-white">
            Autonomous Multi-Agent Workflow Swarm
          </h4>
          <p className="text-xs text-slate-300">
            Self-coordinating cognitive agents with deterministic tool-calling, reflection loops, and verifiable audit trails.
          </p>
        </div>

        <button
          onClick={runSwarm}
          disabled={isExecuting}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/25 active:scale-95 disabled:opacity-50"
        >
          {isExecuting ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Agents Coordinating...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Launch Swarm Run</span>
            </>
          )}
        </button>
      </div>

      {/* Mission Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {(['arbitrage', 'logistics', 'threat'] as const).map((m) => (
          <button
            key={m}
            onClick={() => {
              setMission(m);
              if (!isExecuting) runSwarm();
            }}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              mission === m
                ? 'bg-cyan-500/20 border-cyan-400/50 shadow-md shadow-cyan-500/10'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="text-xs font-bold text-white mb-1">{missions[m].name}</div>
            <div className="text-[11px] text-slate-400 line-clamp-2">{missions[m].objective}</div>
          </button>
        ))}
      </div>

      {/* 4 Agent Nodes Visual Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {agents.map((ag) => {
          const isDone = activeStep >= ag.id;
          const isCurrent = activeStep === ag.id - 1 && isExecuting;

          return (
            <div
              key={ag.id}
              className={`p-4 rounded-xl border transition-all ${
                isCurrent
                  ? 'bg-cyan-950/60 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-102'
                  : isDone
                  ? 'bg-slate-900/80 border-teal-500/30'
                  : 'bg-slate-950/40 border-slate-800 opacity-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-cyan-400 font-bold">NODE 0{ag.id}</span>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                ) : isCurrent ? (
                  <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                )}
              </div>
              <div className="text-sm font-bold text-white mb-1">{ag.name}</div>
              <div className="text-[11px] text-slate-400 mb-3">{ag.role}</div>
              <div className="text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/20 inline-block">
                {ag.status}
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Terminal Telemetry Console */}
      <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/25 space-y-2">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Swarm Event Stream (Zero Data Leakage Encrypted)</span>
          </div>
          <span className="text-teal-300">4 Nodes Active</span>
        </div>

        <div className="space-y-1 font-mono text-xs max-h-36 overflow-y-auto">
          {agentLogs.map((log, i) => (
            <div
              key={i}
              className={
                log.includes('SETTLER')
                  ? 'text-emerald-400 font-semibold'
                  : log.includes('AUDITOR')
                  ? 'text-teal-300'
                  : log.includes('PLANNER')
                  ? 'text-cyan-300'
                  : 'text-slate-300'
              }
            >
              &gt; {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
