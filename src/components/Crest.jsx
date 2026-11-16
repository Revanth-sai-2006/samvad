import React from 'react';

export function KLUUniversityCrest({ className = "w-10 h-10", variant = "gold" }) {
  const isGold = variant === "gold";
  const primaryStroke = isGold ? "#C5A15A" : "#641B32";
  const accentFill = isGold ? "#E2CFA5" : "#7A243D";
  const bgFill = isGold ? "#42101F" : "#FAF8F3";
  const textFill = isGold ? "#C5A15A" : "#641B32";

  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Hexagonal Shield */}
      <polygon 
        points="50,6 90,26 90,74 50,94 10,74 10,26" 
        fill={bgFill} 
        stroke={primaryStroke} 
        strokeWidth="3.5"
      />
      {/* Inner Decorative Border */}
      <polygon 
        points="50,12 84,29 84,71 50,88 16,71 16,29" 
        fill="none" 
        stroke={primaryStroke} 
        strokeWidth="1.2" 
        strokeDasharray="3 2"
        opacity="0.8"
      />
      {/* Laurel Leaves left & right */}
      <path 
        d="M26 48 C24 38 32 30 38 28 C34 34 35 44 26 48 Z" 
        fill={accentFill} 
        opacity="0.9"
      />
      <path 
        d="M74 48 C76 38 68 30 62 28 C66 34 65 44 74 48 Z" 
        fill={accentFill} 
        opacity="0.9"
      />
      {/* Central Book / Lamp of Knowledge Motif */}
      <path 
        d="M34 68 C42 64 48 65 50 67 C52 65 58 64 66 68 C64 60 52 57 50 59 C48 57 36 60 34 68 Z" 
        fill={accentFill} 
      />
      {/* Star of Excellence */}
      <polygon 
        points="50,20 52,25 57,25 53,28 55,33 50,30 45,33 47,28 43,25 48,25" 
        fill={accentFill} 
      />
      {/* Institutional Letters */}
      <text 
        x="50" 
        y="50" 
        fontFamily="'Cinzel', serif" 
        fontSize="17" 
        fontWeight="bold" 
        fill={textFill} 
        textAnchor="middle" 
        letterSpacing="1"
      >
        KLU
      </text>
      <text 
        x="50" 
        y="78" 
        fontFamily="'Plus Jakarta Sans', sans-serif" 
        fontSize="6.5" 
        fontWeight="600" 
        fill={primaryStroke} 
        textAnchor="middle" 
        letterSpacing="0.8"
      >
        ESTD. 1980
      </text>
    </svg>
  );
}

export function CouncilBadge({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12 2L3 7V13C3 18.5 6.8 21.7 12 23C17.2 21.7 21 18.5 21 13V7L12 2Z" 
        fill="#641B32" 
        stroke="#C5A15A" 
        strokeWidth="1.8"
      />
      <path 
        d="M12 6L14 10H18L14.8 12.5L16 16.5L12 14L8 16.5L9.2 12.5L6 10H10L12 6Z" 
        fill="#C5A15A"
      />
    </svg>
  );
}
