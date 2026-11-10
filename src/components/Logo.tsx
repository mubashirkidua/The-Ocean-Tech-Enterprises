import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-18 h-18',
  }[size];

  const mainTextClass = {
    sm: 'text-sm tracking-[0.18em]',
    md: 'text-base tracking-[0.2em]',
    lg: 'text-xl tracking-[0.22em]',
    xl: 'text-2xl tracking-[0.25em]',
  }[size];

  const subTextClass = {
    sm: 'text-[8.5px] tracking-[0.38em]',
    md: 'text-[9.5px] tracking-[0.42em]',
    lg: 'text-[11.5px] tracking-[0.45em]',
    xl: 'text-[13px] tracking-[0.5em]',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Luxury Oceanic Diamond Crest Insignia */}
      <div className={`relative ${iconDimensions} shrink-0 transition-all duration-500 group-hover:scale-105`}>
        {/* Ambient Holographic Glow */}
        <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md group-hover:bg-cyan-400/35 transition-colors" />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-[0_0_16px_rgba(0,240,255,0.45)]"
          aria-label="The Ocean Tech Enterprises Luxury Insignia"
        >
          <defs>
            <linearGradient id="luxuryGoldCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#67e8f9" />
              <stop offset="70%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>

            <linearGradient id="luxuryPlatinum" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="30%" stopColor="#ffffff" />
              <stop offset="75%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>

            <radialGradient id="luxuryCoreLight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#a5f3fc" />
              <stop offset="80%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#0369a1" />
            </radialGradient>

            <filter id="luxuryGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Faceted Geometric Diamond Shield */}
          <polygon
            points="50,2 88,20 98,60 74,96 26,96 2,60 12,20"
            stroke="url(#luxuryPlatinum)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.9"
          />

          {/* Inner Golden Hairline Inset */}
          <polygon
            points="50,10 80,24 88,56 68,86 32,86 12,56 20,24"
            stroke="#fef3c7"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            opacity="0.45"
            fill="none"
          />

          {/* Luxury Hydrodynamic Tidal Wave Crest (Ocean Intelligence) */}
          <path
            d="M 24 66 C 30 76, 46 80, 62 72 C 78 64, 84 46, 74 32 C 66 20, 48 18, 38 28 C 28 36, 30 50, 42 56 C 52 61, 62 53, 58 42 C 55 35, 45 35, 42 42"
            stroke="url(#luxuryGoldCyan)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Precision Neural Node Constellation */}
          <circle cx="50" cy="2" r="2.4" fill="#ffffff" filter="url(#luxuryGlow)" />
          <circle cx="88" cy="20" r="2.4" fill="#67e8f9" />
          <circle cx="98" cy="60" r="2.4" fill="#00f0ff" />
          <circle cx="74" cy="96" r="2.4" fill="#38bdf8" />
          <circle cx="26" cy="96" r="2.4" fill="#fef3c7" />
          <circle cx="2" cy="60" r="2.4" fill="#00f0ff" />
          <circle cx="12" cy="20" r="2.4" fill="#67e8f9" />

          {/* Central Sovereign Quantum Core */}
          <circle cx="50" cy="48" r="5" fill="url(#luxuryCoreLight)" filter="url(#luxuryGlow)" />
          <circle cx="50" cy="48" r="1.8" fill="#ffffff" />
        </svg>
      </div>

      {/* Luxury Typography: "THE OCEAN TECH ENTERPRISES" */}
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-['Cinzel',serif] font-bold text-white group-hover:text-cyan-200 transition-colors uppercase ${mainTextClass}`}
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                textShadow: '0 0 20px rgba(0,240,255,0.25)',
              }}
            >
              The Ocean Tech
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-[1px] w-3 bg-gradient-to-r from-cyan-400 to-transparent" />
            <span
              className={`font-sans font-semibold uppercase text-cyan-300/90 ${subTextClass}`}
              style={{ letterSpacing: '0.45em' }}
            >
              ENTERPRISES
            </span>
            <div className="h-[1px] w-3 bg-gradient-to-l from-cyan-400 to-transparent" />
          </div>
        </div>
      )}
    </div>
  );
};
