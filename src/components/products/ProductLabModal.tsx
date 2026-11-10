import React, { useState } from 'react';
import { X, Sparkles, PenTool, Volume2, Scan, Network, Database, Box, ArrowRight } from 'lucide-react';
import { CopyGenesisDemo } from './CopyGenesisDemo.tsx';
import { AuraVoiceDemo } from './AuraVoiceDemo.tsx';
import { AuraMedVisionDemo } from './AuraMedVisionDemo.tsx';
import { QuantOceanSwarmDemo } from './QuantOceanSwarmDemo.tsx';
import { OceanRagVaultDemo } from './OceanRagVaultDemo.tsx';
import { DeepLogixFleetDemo } from './DeepLogixFleetDemo.tsx';

interface ProductLabModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: string;
  onRequestDeployment?: (productName: string) => void;
}

export const ProductLabModal: React.FC<ProductLabModalProps> = ({
  isOpen,
  onClose,
  initialProductId = 'copygenesis-engine',
  onRequestDeployment,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialProductId);

  // Sync initialProductId when modal opens
  React.useEffect(() => {
    if (initialProductId) {
      setActiveTab(initialProductId);
    }
  }, [initialProductId]);

  if (!isOpen) return null;

  const productTabs = [
    { id: 'copygenesis-engine', name: 'CopyGenesis Pro™', category: 'Copywriting AI', icon: PenTool },
    { id: 'auravoice-telephony', name: 'AuraVoice Core™', category: 'Voice Telephony', icon: Volume2 },
    { id: 'auramed-diagnostic', name: 'AuraMed Vision™', category: 'Computer Vision', icon: Scan },
    { id: 'quantocean-trading', name: 'QuantOcean Swarm™', category: 'Agent Swarm', icon: Network },
    { id: 'oceanrag-vault', name: 'OceanRAG Vault™', category: 'Enterprise RAG', icon: Database },
    { id: 'deeplogix-robotics', name: 'DeepLogix Fleet™', category: 'Robotics Fleet', icon: Box },
  ];

  const currentTabInfo = productTabs.find((p) => p.id === activeTab) || productTabs[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-xl">
      <div className="relative w-full max-w-6xl bg-[#071124] border border-cyan-500/30 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <span>The Ocean Tech Enterprises</span>
                <span className="text-slate-600">·</span>
                <span className="text-teal-300">Live AI Product Lab</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Ready-to-Use Enterprise AI Product Suite
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 transition-colors border border-slate-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Six Product Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none border-b border-slate-800/80">
          {productTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Workspace Body */}
        <div className="flex-1 overflow-y-auto pr-1 pb-4">
          {activeTab === 'copygenesis-engine' && <CopyGenesisDemo />}
          {activeTab === 'auravoice-telephony' && <AuraVoiceDemo />}
          {activeTab === 'auramed-diagnostic' && <AuraMedVisionDemo />}
          {activeTab === 'quantocean-trading' && <QuantOceanSwarmDemo />}
          {activeTab === 'oceanrag-vault' && <OceanRagVaultDemo />}
          {activeTab === 'deeplogix-robotics' && <DeepLogixFleetDemo />}
        </div>

        {/* Modal Bottom Bar: Immediate Deployment CTA */}
        <div className="pt-3 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#071124]">
          <div className="text-xs text-slate-400 font-mono">
            Direct deployment & custom enterprise licensing overseen by{' '}
            <span className="text-cyan-300 font-bold">CEO Muhammad Mubashir Ali</span>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onRequestDeployment) onRequestDeployment(currentTabInfo.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
          >
            <span>Request Custom Deployment for {currentTabInfo.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
