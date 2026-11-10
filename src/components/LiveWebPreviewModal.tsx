import React, { useState } from 'react';
import { WebDeployment } from '../data/company.ts';
import {
  X,
  ExternalLink,
  RotateCw,
  Monitor,
  Tablet,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface LiveWebPreviewModalProps {
  deployment: WebDeployment | null;
  onClose: () => void;
}

export const LiveWebPreviewModal: React.FC<LiveWebPreviewModalProps> = ({ deployment, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  if (!deployment) return null;

  const currentUrl = activeUrl || deployment.liveUrl;

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleSwitchUrl = (url: string) => {
    setIsLoading(true);
    setActiveUrl(url);
    setIframeKey((prev) => prev + 1);
  };

  const getDeviceWidthClass = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'w-[390px] h-[750px] max-h-[80vh] shadow-2xl rounded-3xl border-4 border-slate-700';
      case 'tablet':
        return 'w-[768px] h-[800px] max-h-[82vh] shadow-2xl rounded-2xl border-2 border-slate-700';
      default:
        return 'w-full h-[78vh] rounded-b-xl';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#02050e]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-7xl bg-[#090d18] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] flex flex-col overflow-hidden max-h-[96vh]">
        {/* Top Control Bar / Browser Mockup Bar */}
        <div className="px-4 py-3 bg-[#0d1322] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Left: Window Dots & Site Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-800">
              <span className="text-xs font-semibold text-white tracking-wide">{deployment.name}</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                {deployment.status}
              </span>
            </div>
          </div>

          {/* Center: Simulated SSL Address Bar & Page Selector */}
          <div className="flex-1 max-w-xl min-w-[200px] mx-auto flex items-center gap-2 px-3 py-1.5 bg-[#050811] rounded-lg border border-slate-800 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate text-slate-300 font-semibold">{currentUrl}</span>
            <button
              onClick={handleRefresh}
              title="Reload preview"
              className="ml-auto text-slate-500 hover:text-cyan-400 transition-colors shrink-0"
            >
              <RotateCw className="w-3 h-3" />
            </button>
          </div>

          {/* Right: Device Switcher & Actions */}
          <div className="flex items-center gap-2">
            {/* Device Switcher */}
            <div className="hidden lg:flex items-center gap-1 bg-[#050811] p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setDeviceMode('desktop')}
                title="Desktop View"
                className={`p-1.5 rounded-md text-xs transition-colors ${
                  deviceMode === 'desktop' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                title="Tablet View"
                className={`p-1.5 rounded-md text-xs transition-colors ${
                  deviceMode === 'tablet' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                title="Mobile View"
                className={`p-1.5 rounded-md text-xs transition-colors ${
                  deviceMode === 'mobile' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Open in New Tab Button */}
            <a
              href={deployment.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors shadow-sm shadow-cyan-500/20"
            >
              <span>Open Full Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-Banner Information & Route Tabs */}
        <div className="px-4 py-2.5 bg-[#080d19] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 truncate">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">
              Live Preview: <strong className="text-slate-200">{deployment.name}</strong> — {deployment.subtitle}
            </span>
          </div>

          {/* Page Route Tabs if available */}
          {deployment.additionalRoutes && deployment.additionalRoutes.length > 0 ? (
            <div className="flex items-center gap-1.5 bg-[#040710] p-1 rounded-lg border border-slate-800 overflow-x-auto max-w-full">
              {deployment.additionalRoutes.map((route) => {
                const isActive = currentUrl === route.url;
                return (
                  <button
                    key={route.url}
                    onClick={() => handleSwitchUrl(route.url)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors flex items-center gap-1.5 shrink-0 ${
                      isActive
                        ? 'bg-cyan-500/25 text-cyan-200 font-bold border border-cyan-400/50 shadow-sm shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {route.url.includes('about.html') && (
                      <img
                        src="/ceo.jpg"
                        alt="CEO"
                        className="w-3.5 h-3.5 rounded-full object-cover shrink-0"
                      />
                    )}
                    <span>{route.name}</span>
                    {route.badge && (
                      <span className="text-[10px] px-1.5 py-0.2 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30">
                        {route.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : deployment.founderPageUrl ? (
            <div className="flex items-center gap-1.5 bg-[#040710] p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => handleSwitchUrl(deployment.liveUrl)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                  currentUrl === deployment.liveUrl
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Storefront (Home)
              </button>
              <button
                onClick={() => handleSwitchUrl(deployment.founderPageUrl!)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  currentUrl === deployment.founderPageUrl
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-slate-400 hover:text-amber-300'
                }`}
              >
                <img
                  src="/ceo.jpg"
                  alt="CEO"
                  className="w-3.5 h-3.5 rounded-full object-cover"
                />
                <span>CEO Page (about.html)</span>
              </button>
            </div>
          ) : null}

          <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
            Hosting: Vercel Edge • Architecture: The Ocean Tech Enterprises
          </div>
        </div>

        {/* Iframe Viewport Container */}
        <div className="relative flex-1 bg-[#050811] flex items-center justify-center p-2 sm:p-4 overflow-auto min-h-[500px]">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050811]/90 backdrop-blur-sm gap-3">
              <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs font-mono text-cyan-300">Connecting to Live Vercel Edge Deployment...</p>
              <p className="text-[11px] text-slate-500">Loading interactive components and 3D visualizers</p>
            </div>
          )}

          <div className={`transition-all duration-300 overflow-hidden relative bg-white ${getDeviceWidthClass()}`}>
            <iframe
              key={iframeKey}
              src={currentUrl}
              title={deployment.name}
              className="w-full h-full border-none"
              onLoad={() => setIsLoading(false)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="px-4 py-2 bg-[#0d1322] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-mono text-slate-500">Tech Stack:</span>
            {deployment.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={deployment.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 text-xs"
          >
            <span>Launch in Full Tab</span>
            <Maximize2 className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
