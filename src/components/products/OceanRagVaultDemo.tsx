import React, { useState } from 'react';
import { Database, Search, CheckCircle2, ShieldCheck, Layers, BookOpen, Sparkles, Zap, Lock } from 'lucide-react';

export const OceanRagVaultDemo: React.FC = () => {
  const [vaultTopic, setVaultTopic] = useState<'security' | 'finance' | 'medical'>('security');
  const [vectorEngine, setVectorEngine] = useState<'qdrant' | 'pinecone' | 'pgvector'>('qdrant');
  const [userQuery, setUserQuery] = useState('What are the protocols when an air-gapped system detects unauthorized memory access?');
  const [isSearching, setIsSearching] = useState(false);

  const sampleVaults = {
    security: {
      name: 'Air-Gapped Sovereign Cloud & Security Framework',
      preloadedDocs: 14200,
      queries: [
        'What are the protocols when an air-gapped system detects unauthorized memory access?',
        'How does the token cache enforce zero-retention compliance?',
        'What is the failover policy during regional network drops?',
      ],
      response: {
        answer:
          'Under Section 14.3 of the Sovereign Security Standard, any unauthorized memory access immediately freezes external socket interfaces, rotates ephemeral cryptographic keys in sub-5ms, and creates an immutable cryptographic audit record. Zero plaintext data is retained in volatile memory.',
        citations: [
          { doc: 'AIR_GAP_SPEC_V4_SEC14', score: 0.968, text: 'Immediate socket isolation triggers key shredding across all volatile GPU registers.' },
          { doc: 'CRYPTOGRAPHIC_AUDIT_POL_8', score: 0.942, text: 'Append-only ledger verifies provenance and alerts secondary node administrators.' },
        ],
      },
    },
    finance: {
      name: 'Algorithmic Pre-Trade Risk & Liquidity Limits',
      preloadedDocs: 8900,
      queries: [
        'What is the maximum permissible slippage before an atomic trade halt is triggered?',
        'How are cross-currency liquidity reserves calculated dynamically?',
        'What are the regulatory audit reporting timelines for high-frequency trades?',
      ],
      response: {
        answer:
          'Pre-trade risk boundaries mandate a maximum execution variance of 15 basis points. If order book liquidity depth fails to guarantee settlement within this limit, the smart router redirects flow to secondary pools or safely cancels the unfilled order within 14ms.',
        citations: [
          { doc: 'RISK_GATEWAY_DOC_3.1', score: 0.974, text: 'Slippage bounding enforced at the network interface card level via FPGA.' },
          { doc: 'COMPLIANCE_CIRCULAR_2026', score: 0.928, text: 'All unfilled partial orders auto-expire to protect institutional principal capital.' },
        ],
      },
    },
    medical: {
      name: 'Biomedical Diagnostic AI Validation Protocols',
      preloadedDocs: 22400,
      queries: [
        'What is the minimum verified confidence required before a diagnostic suggestion is flagged to a doctor?',
        'How are DICOM patient identifiers scrubbed prior to model inference?',
        'What is the procedure when model disagreement exceeds 2%?',
      ],
      response: {
        answer:
          'Diagnostic suggestions mandate an ensemble confidence exceeding 98.5% with double-blind radiological review. All DICOM metadata undergoes irreversible de-identification according to HIPAA Safe Harbor guidelines before tensors reach inference workers.',
        citations: [
          { doc: 'CLINICAL_VALIDATION_STD_9', score: 0.982, text: '98.5% confidence baseline required for autonomous preliminary triage notation.' },
          { doc: 'HIPAA_DEID_AUTOMATION_5', score: 0.956, text: 'Zero direct patient identifiers enter GPU memory buffers.' },
        ],
      },
    },
  };

  const currentVault = sampleVaults[vaultTopic];

  const handleSearch = (q?: string) => {
    if (q) setUserQuery(q);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 450);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900/60 border border-cyan-500/25">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Database className="w-4 h-4" />
            <span>OceanRAG Vault™ Private Knowledge Hub</span>
            <span className="text-slate-500">·</span>
            <span className="text-teal-300">100% Air-Gapped Zero-Leakage</span>
          </div>
          <h4 className="text-lg font-bold text-white">
            Enterprise Semantic Vector Retrieval & Citation Studio
          </h4>
          <p className="text-xs text-slate-300">
            Query millions of private enterprise documents with sub-150ms dense vector cosine search and verifiable grounding.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-slate-950 text-cyan-300 font-mono text-xs border border-cyan-500/30 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sovereign Storage Active</span>
          </span>
        </div>
      </div>

      {/* Vault & Engine Configuration */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-mono text-slate-300 block mb-1">Select Active Knowledge Vault</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'security', label: 'Security & Air-Gap' },
              { id: 'finance', label: 'Risk & Pre-Trade' },
              { id: 'medical', label: 'Clinical AI Trials' },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  setVaultTopic(v.id as any);
                  setUserQuery(sampleVaults[v.id as 'security' | 'finance' | 'medical'].queries[0]);
                }}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                  vaultTopic === v.id
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/50'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-mono text-slate-300 block mb-1">Underlying Vector DB Engine</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'qdrant', label: 'Qdrant (Rust)' },
              { id: 'pinecone', label: 'Pinecone Cloud' },
              { id: 'pgvector', label: 'pgvector (Neon)' },
            ].map((eng) => (
              <button
                key={eng.id}
                onClick={() => setVectorEngine(eng.id as any)}
                className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                  vectorEngine === eng.id
                    ? 'bg-teal-500/20 text-teal-200 border-teal-400/50'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {eng.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Query Bar */}
      <div className="space-y-3 p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
        <div>
          <div className="text-[10px] font-mono uppercase text-slate-400 mb-1.5">
            Quick Enterprise Queries (Click to Run):
          </div>
          <div className="flex flex-wrap gap-1.5">
            {currentVault.queries.map((q) => (
              <button
                key={q}
                onClick={() => handleSearch(q)}
                className="text-[11px] px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition-all text-left"
              >
                "{q}"
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <button
            onClick={() => handleSearch()}
            disabled={isSearching}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs hover:from-cyan-300 hover:to-teal-300 transition-all shadow-md active:scale-95 shrink-0"
          >
            {isSearching ? 'Querying Index...' : 'Semantic Search'}
          </button>
        </div>
      </div>

      {/* Results Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Grounded Synthesis */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/70 border border-cyan-500/20 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono uppercase text-teal-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Zero-Hallucination Synthesized Answer
              </span>
              <span className="text-[10px] font-mono text-cyan-300">
                Inference Latency: 42ms
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-sans">
              {currentVault.response.answer}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Grounding Confidence: 99.8%</span>
            <span className="text-teal-300">100% Data Provenance Verified</span>
          </div>
        </div>

        {/* Right: Retrieved Vector Chunks */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-mono uppercase text-cyan-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Retrieved Vector Chunks
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              Cosine Similarity Threshold: &gt; 0.90
            </span>
          </div>

          <div className="space-y-2.5">
            {currentVault.response.citations.map((cite, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-cyan-300 font-bold">[{cite.doc}]</span>
                  <span className="text-teal-400 font-bold">Similarity: {cite.score}</span>
                </div>
                <p className="text-slate-300 text-[11px] font-mono leading-relaxed">
                  "{cite.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
