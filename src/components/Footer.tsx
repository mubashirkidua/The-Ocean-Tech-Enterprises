import React from 'react';
import { Logo } from './Logo.tsx';
import { COMPANY_INFO } from '../data/company.ts';
import { ArrowUp, Mail, Phone, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cyan-500/15 bg-[#03060f] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="text-xs font-mono text-cyan-400">
              Founder & CEO: {COMPANY_INFO.ceo.name}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  AI Capabilities
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                  AI Products & Solutions
                </a>
              </li>
              <li>
                <a href="#web-deployments" className="hover:text-cyan-400 transition-colors">
                  Live Web Deployments
                </a>
              </li>
              <li>
                <a href="#playground" className="hover:text-cyan-400 transition-colors">
                  Cognitive Sandbox Demo
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-cyan-400 transition-colors">
                  Project Scope Estimator
                </a>
              </li>
              <li>
                <a href="#ceo" className="hover:text-cyan-400 transition-colors">
                  Founder & CEO Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider mb-4">
              AI Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Domain-Trained LLMs</li>
              <li>Autonomous Multi-Agent Swarms</li>
              <li>Edge Computer Vision</li>
              <li>Multilingual Voice AI</li>
              <li>AI Copywriting & Conversion Funnels</li>
              <li>Predictive Algorithmic Engines</li>
              <li>Air-Gapped AI Deployments</li>
            </ul>
          </div>

          {/* Executive Contact Channels */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider mb-4">
              Executive Lines
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              <li>
                <a
                  href={COMPANY_INFO.ceo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: {COMPANY_INFO.ceo.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.ceo.mobile.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Mobile: {COMPANY_INFO.ceo.mobile}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.ceo.email}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{COMPANY_INFO.ceo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Security & Privacy Compliant</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
