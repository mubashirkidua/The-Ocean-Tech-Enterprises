import React, { useState } from 'react';
import { Copy, Check, Sparkles, RefreshCw, PenTool, ArrowRight, Zap, BookOpen } from 'lucide-react';

export const CopyGenesisDemo: React.FC = () => {
  const [copyType, setCopyType] = useState<'landing' | 'ad' | 'email' | 'seo'>('landing');
  const [brandName, setBrandName] = useState('Nexus Retail');
  const [targetAudience, setTargetAudience] = useState('D2C E-Commerce Brand Owners');
  const [coreBenefit, setCoreBenefit] = useState('Automate customer support with AI and reduce refund rates by 40%');
  const [tone, setTone] = useState<'authoritative' | 'persuasive' | 'luxury' | 'bold'>('persuasive');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Generated copy outputs state
  const [outputs, setOutputs] = useState([
    {
      framework: 'Pain-Agitate-Solution (PAS)',
      headline: 'Stop Burning Ad Spend on Slow Support. Turn Inquiries Into Revenue in 30 Seconds.',
      body: `Every minute a shopper waits for an email reply, your conversion rate plummets by 14%. ${brandName} bridges the gap with autonomous, human-grade AI agents that resolve 85% of tier-1 support tickets instantly. While your competitors sleep, your store provides instantaneous, empathetic assistance that turns hesitant browsers into lifetime buyers.`,
      cta: 'Claim Your Free AI Support Audit',
      lift: '+34% Conversion Lift',
    },
    {
      framework: 'Before-After-Bridge (BAB)',
      headline: 'Scale to 10,000 Orders a Day Without Hiring Another Support Rep.',
      body: `Before ${brandName}: Backlogged support queues, frustrated shoppers, and thousands lost to churn. After ${brandName}: Flawless multilingual resolution in sub-400ms across WhatsApp, email, and live chat. The bridge: Our custom-trained neural model integrates directly with Shopify and Zendesk in under 48 hours.`,
      cta: 'Deploy Nexus AI Today',
      lift: '+48% Customer Retention',
    },
    {
      framework: 'Direct-Response Hook & Story',
      headline: 'What If Your Best Salesperson Never Took a Day Off?',
      body: `Imagine an assistant that knows your complete product catalog, understands 12 languages, and recommends the exact accessory right when your shopper is ready to check out. ${brandName} is not a chatbot—it is an autonomous sales engine engineered to ${coreBenefit.toLowerCase()}.`,
      cta: 'Explore Live Store Demo',
      lift: '+2.8x Average Order Value',
    },
  ]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Dynamic generation based on user inputs
      if (copyType === 'ad') {
        setOutputs([
          {
            framework: 'High-Impact Meta / Google Ad Hook',
            headline: `The Secret 7-Figure Brands Use to ${coreBenefit}`,
            body: `Tired of burning budget on customer churn? ${brandName} gives ${targetAudience} an unfair advantage. Instant setup, zero code required. See why 500+ leaders made the switch this quarter.`,
            cta: 'Claim 30-Day Risk-Free Trial',
            lift: '+62% Lower CPA',
          },
          {
            framework: 'Direct Challenge Ad',
            headline: `Is Your Support Team Still Typing Answers Manually?`,
            body: `Your competitors are resolving tickets in 18 seconds with ${brandName}. Save 25+ hours every week and ${coreBenefit.toLowerCase()}. Click below to calculate your savings.`,
            cta: 'Calculate Your ROI &rarr;',
            lift: '+41% Click-Through Rate',
          },
          {
            framework: 'Urgency & Proof Ad Hook',
            headline: `We Helped ${targetAudience} Cut Support Costs in Half. Here's How:`,
            body: `No more training temporary staff during peak sales seasons. ${brandName} deploys in 20 minutes and guarantees 99.4% factual accuracy across all client chats.`,
            cta: 'Get Started with ${brandName}',
            lift: '+3.1x Return on Ad Spend',
          },
        ]);
      } else if (copyType === 'email') {
        setOutputs([
          {
            framework: 'Cold Outreach Executive Hook',
            headline: `Quick question regarding ${targetAudience}'s operational margins`,
            body: `Hi [First Name],\n\nI noticed your team is scaling fast. Most leaders in your space tell us that managing customer ticket spikes eats up to 35% of their working hours.\n\nWe engineered ${brandName} to ${coreBenefit.toLowerCase()}.\n\nWould you be against a 4-minute demo this Thursday?`,
            cta: 'Book 5-Minute Intro Call',
            lift: '+38% Cold Email Reply Rate',
          },
          {
            framework: 'Value-First Teardown',
            headline: `3 bottlenecks eating into your conversions this month`,
            body: `Hi [First Name],\n\nWe audited top stores in your niche and found a recurring 22% cart abandonment rate caused by unanswered sizing and checkout queries.\n\n${brandName} fixes this automatically by answering customer questions in real-time before they bounce.`,
            cta: 'View Free Audit Report',
            lift: '+54% Open Rate',
          },
          {
            framework: 'Short Casual Re-engagement',
            headline: `Thought of you when looking at ${coreBenefit}`,
            body: `Hi [First Name], saw your latest product update. Are you guys currently automating your customer support or still handling it in-house?\n\nWe just helped a similar brand achieve ${coreBenefit.toLowerCase()} in under 3 weeks. Let me know if you want the breakdown.`,
            cta: 'Send Me The Breakdown',
            lift: '+44% Positive Response',
          },
        ]);
      } else {
        setOutputs([
          {
            framework: 'Pain-Agitate-Solution (PAS)',
            headline: `Stop Burning Margin. ${brandName} Helps ${targetAudience} Win.`,
            body: `Every minute a prospect waits, trust fades. ${brandName} bridges the gap with autonomous, human-grade intelligence tailored to ${coreBenefit.toLowerCase()}. Experience 24/7 conversion excellence.`,
            cta: 'Start Free AI Trial',
            lift: '+42% Conversion Lift',
          },
          {
            framework: 'Hero Value Matrix',
            headline: `The Definitive AI System for ${targetAudience}`,
            body: `Engineered specifically to ${coreBenefit.toLowerCase()}. Built with enterprise-grade security, instant vector search, and seamless CRM integrations.`,
            cta: 'Schedule Consultation',
            lift: '+55% Lead Capture',
          },
          {
            framework: 'Direct Social Proof Architecture',
            headline: `How Market Leaders Automate Their Growth with ${brandName}`,
            body: `Over 45 enterprise deployments trust our fine-tuned copy engine to generate reliable sales messaging that consistently outperforms human benchmarks.`,
            cta: 'View Case Study',
            lift: '+3.4x ROI',
          },
        ]);
      }
      setIsGenerating(false);
    }, 600);
  };

  const copyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Product Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900/60 border border-cyan-500/25">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <PenTool className="w-4 h-4" />
            <span>CopyGenesis Pro™ Live Engine</span>
            <span className="text-slate-500">·</span>
            <span className="text-teal-300">Model: Gemini 2.5 + Custom LoRA</span>
          </div>
          <h4 className="text-lg font-bold text-white">
            High-Converting AI Copywriting Studio
          </h4>
          <p className="text-xs text-slate-300">
            Generate conversion-optimized sales letters, landing page copy, and direct-response ad variations in seconds.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs border border-cyan-500/30">
            Active Version: 3.2.0
          </span>
        </div>
      </div>

      {/* Input Parameters Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
          <div className="text-xs font-mono uppercase text-cyan-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Parameters</span>
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1">Format Category</label>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'landing', label: 'Sales Landing Page' },
                { id: 'ad', label: 'Paid Social Ads' },
                { id: 'email', label: 'Outreach Email' },
                { id: 'seo', label: 'SEO Article Hook' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCopyType(t.id as any)}
                  className={`py-2 px-2.5 rounded-lg text-xs font-medium text-left border transition-all ${
                    copyType === t.id
                      ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/50'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1">Company / Brand Name</label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1">Target Ideal Customer Profile</label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1">Core Value Proposition / Problem</label>
            <textarea
              rows={2}
              value={coreBenefit}
              onChange={(e) => setCoreBenefit(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1">Brand Voice & Persona</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as any)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none"
            >
              <option value="persuasive">Direct Response & Persuasive (High Conversion)</option>
              <option value="luxury">Luxury & Haute Enterprise (Cinematic)</option>
              <option value="authoritative">Authoritative B2B & Technical</option>
              <option value="bold">Bold & Disruptive</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:from-cyan-300 hover:to-teal-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-95 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Synthesizing Copy Matrices...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 fill-current" />
                <span>Generate Conversion Copy Variations</span>
              </>
            )}
          </button>
        </div>

        {/* Generated Output Showcase */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase">
              Live Generated Variations ({outputs.length})
            </span>
            <span className="text-[11px] font-mono text-teal-300 flex items-center gap-1">
              <Zap className="w-3 h-3 text-cyan-400" />
              Trained on Direct Response Formulas
            </span>
          </div>

          <div className="space-y-4">
            {outputs.map((out, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {out.framework}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {out.lift}
                    </span>
                  </div>

                  <button
                    onClick={() => copyText(`${out.headline}\n\n${out.body}\n\n[CTA]: ${out.cta}`, idx)}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                    title="Copy full copy package"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        <span className="text-teal-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <h5 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {out.headline}
                </h5>

                <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                  {out.body}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500">
                    Primary CTA: <span className="text-cyan-300 font-semibold">{out.cta}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Grade: 7.2 (High Readability)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
