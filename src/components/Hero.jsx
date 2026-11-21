import React, { useState, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  Compass,
  Sparkles,
  Zap,
  Calendar,
  Users,
  Award,
  Layers
} from 'lucide-react';
import { UNIVERSITY_INFO, UNIVERSITY_PROCESSES } from '../data/portalData';

// Animated Counter Component
function AnimatedCounter({ end, duration = 1200, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(end);
      return;
    }

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Hero({ onExploreProcesses, onDiscoverSAC, onSelectProcess }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredProcesses = query.trim() === ''
    ? []
    : UNIVERSITY_PROCESSES.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.department.toLowerCase().includes(query.toLowerCase()) ||
        p.code.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);

  const quickSOPs = [
    { label: "On-Duty Attendance", id: "proc-01" },
    { label: "Hall Ticket Clearance", id: "proc-02" },
    { label: "Bonafide Certificate", id: "proc-03" },
    { label: "Hostel Outing Pass", id: "proc-06" },
    { label: "Grievance Redressal", id: "proc-05" }
  ];

  return (
    <section 
      className="relative overflow-hidden text-[#1c1216] min-h-[90vh] flex flex-col justify-center border-b border-[#c9a24b]/30"
      style={{
        background: 'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201, 162, 75, 0.15) 0%, transparent 70%), linear-gradient(180deg, #fdfbf7 0%, #f7f2e7 55%, #efe8d8 100%)'
      }}
    >
      {/* ═════════════════════════════════════════════════════════════
          SUBTLE INSTITUTIONAL WATERMARK BACKGROUND
          ═════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Subtle geometric dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: 'radial-gradient(#c9a24b 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Large Institutional Watermark Seal in Background */}
        <svg 
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[650px] h-[650px] opacity-[0.07] text-[#c9a24b] pointer-events-none" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="100,25 165,65 165,135 100,175 35,135 35,65" stroke="currentColor" strokeWidth="2" />
          <text x="100" y="112" fontFamily="'Cinzel', serif" fontSize="48" fontWeight="bold" fill="currentColor" textAnchor="middle">KL</text>
        </svg>

        {/* Subtle Architectural Silhouette Outline */}
        <svg 
          className="absolute bottom-0 inset-x-0 w-full h-[280px] opacity-[0.12] text-[#8c6d23]" 
          viewBox="0 0 1440 280" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3">
            <line x1="0" y1="260" x2="1440" y2="260" strokeWidth="1.5" strokeDasharray="none" opacity="0.5" />
            <line x1="0" y1="230" x2="1440" y2="230" opacity="0.3" />
            <path d="M640 260 V120 H680 V80 H710 V40 H730 V80 H760 V120 H800 V260" strokeWidth="1.5" strokeDasharray="none" />
            <path d="M685 80 C685 55, 755 55, 755 80" strokeWidth="1.5" strokeDasharray="none" />
            <line x1="720" y1="40" x2="720" y2="15" strokeWidth="2" strokeDasharray="none" />
            <path d="M300 260 V150 H480 V180 H620 V260" strokeWidth="1.2" strokeDasharray="none" />
            <path d="M820 260 V180 H960 V150 H1140 V260" strokeWidth="1.2" strokeDasharray="none" />
          </g>
        </svg>
      </div>

      {/* Top subtle gold divider line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a24b]/40 to-transparent" />

      {/* ═════════════════════════════════════════════════════════════
          MAIN HERO CONTENT
          ═════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col items-center text-center">
        
        {/* Accreditation & Session Badge */}
        <div className="motion-fade-up inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c9a24b]/45 bg-white/90 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[#5a0f2e] font-bold">KLEF Deemed to be University</span>
          <span className="text-[#c9a24b]">•</span>
          <span className="text-[#4a3f44] font-semibold">NAAC A++ Accredited</span>
        </div>

        {/* Logo Text: SAMVAD 360 in Cinzel */}
        <div className="motion-fade-up mb-2">
          <span 
            className="font-logo text-xs sm:text-sm font-bold tracking-[0.24em] text-[#8c6d23] uppercase block"
          >
            Official Student Activity Portal
          </span>
        </div>

        {/* Large Headline (Authoritative, Stately Academic Typography) */}
        <div className="motion-fade-up mb-3 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2a0614] leading-[1.15] font-display">
            26 Clubs. 5 Domains. <br className="hidden sm:inline" />
            <span className="text-[#5a0f2e]">One Campus Community.</span>
          </h1>
        </div>

        {/* Gold Separator Bar */}
        <div className="w-32 sm:w-44 h-[2px] mx-auto my-3 bg-gradient-to-r from-transparent via-[#c9a24b] to-transparent opacity-85" />

        {/* Short Subtitle / Editorial Tagline */}
        <div className="motion-fade-up mb-3">
          <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide text-[#5c4e52]">
            "{UNIVERSITY_INFO.tagline}"
          </p>
        </div>

        {/* Description */}
        <div className="motion-fade-up max-w-2xl mx-auto mb-8 text-sm sm:text-base text-[#4a3f44] leading-relaxed font-normal">
          <p>
            The unified student portal of KL Deemed to be University for SAC club governance, 
            flagship campus events, leadership councils, and verified university procedures.
          </p>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            PRIMARY & SECONDARY ACTION BUTTONS
            ═════════════════════════════════════════════════════════════ */}
        <div className="motion-fade-up flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onDiscoverSAC}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5a0f2e] hover:bg-[#3a081c] text-white text-sm font-bold rounded-xl border border-[#7a1a42] shadow-[0_4px_14px_rgba(90,15,46,0.25)] hover:shadow-[0_6px_20px_rgba(90,15,46,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#e6cf8f]" />
            <span>Explore Clubs</span>
            <ArrowRight className="w-4 h-4 text-[#e6cf8f]" />
          </button>

          <button
            onClick={onDiscoverSAC}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-[#faf5eb] text-[#5a0f2e] text-sm font-bold rounded-xl border-2 border-[#5a0f2e]/30 hover:border-[#5a0f2e] shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#5a0f2e]" />
            <span>Upcoming Events</span>
          </button>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            WHITE SEARCH BAR WITH REAL-TIME SOP AUTOCOMPLETE
            ═════════════════════════════════════════════════════════════ */}
        <div className="w-full max-w-2xl mx-auto relative z-30 mb-11">
          <div 
            className={`rounded-2xl transition-all duration-300 ${
              isFocused ? 'ring-2 ring-[#c9a24b] shadow-[0_8px_30px_rgba(201,162,75,0.3)]' : 'shadow-[0_8px_24px_rgba(42,6,20,0.06)]'
            }`}
          >
            <div className="relative flex items-center bg-white rounded-2xl border-2 border-[#c9a24b]/40 px-3 py-1.5">
              <div className="p-2 text-[#5a0f2e] shrink-0">
                <Search className="w-5 h-5 text-[#5a0f2e]" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 260)}
                placeholder="Search procedures or clubs (e.g. On-Duty attendance, Hall ticket, Vachas, FOCUS)..."
                className="w-full py-2.5 px-2 text-sm text-[#1c1216] placeholder-[#5c4e52]/70 bg-transparent focus:outline-none font-medium"
              />
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="px-2.5 py-1 text-xs font-bold text-[#5a0f2e] bg-[#f7f1e3] hover:bg-[#c9a24b]/30 rounded-md transition-colors"
                >
                  Clear
                </button>
              ) : (
                <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-gray-100 text-[10px] font-mono text-gray-500 border border-gray-200">
                  <span>⌘</span><span>K</span>
                </div>
              )}
            </div>
          </div>

          {/* Autocomplete Dropdown Panel */}
          {isFocused && query.trim() !== '' && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white/98 rounded-2xl border-2 border-[#c9a24b]/50 shadow-2xl overflow-hidden text-left z-40 animate-fade-in backdrop-blur-xl">
              <div className="p-3 bg-[#faf5ec] border-b border-[#c9a24b]/25 flex items-center justify-between text-xs font-bold text-[#5a0f2e]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#c9a24b]" />
                  Matched SOPs & Services ({filteredProcesses.length})
                </span>
                <span className="text-[#5c4e52] font-normal text-[11px]">Click to view verified checklist</span>
              </div>
              {filteredProcesses.length > 0 ? (
                <div className="divide-y divide-[#c9a24b]/15 max-h-64 overflow-y-auto">
                  {filteredProcesses.map((proc) => (
                    <div
                      key={proc.id}
                      onMouseDown={() => onSelectProcess(proc)}
                      className="p-3.5 hover:bg-[#faf5ec] cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#5a0f2e]/10 text-[#5a0f2e] border border-[#5a0f2e]/20">
                            {proc.code}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#1c1216] group-hover:text-[#5a0f2e] transition-colors">
                            {proc.title}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#5c4e52] block mt-1">
                          {proc.department} • {proc.location}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#5a0f2e] bg-[#c9a24b]/20 px-2.5 py-1 rounded-md shrink-0 border border-[#c9a24b]/40">
                        SLA: {proc.sla}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-5 text-center text-xs text-[#5c4e52]">
                  No direct procedure match for "{query}". Try browsing the category catalog below.
                </div>
              )}
            </div>
          )}

          {/* Quick-Access Trending SOP Chips */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-xs font-semibold text-[#5a0f2e] mr-1 flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#c9a24b]" />
              Frequently Accessed:
            </span>
            {quickSOPs.map((sop) => (
              <button
                key={sop.id}
                onClick={() => {
                  const matched = UNIVERSITY_PROCESSES.find(p => p.id === sop.id);
                  if (matched) onSelectProcess(matched);
                }}
                className="text-xs px-3 py-1 rounded-full border border-[#c9a24b]/60 text-[#5a0f2e] bg-white/80 hover:bg-[#5a0f2e] hover:text-[#f7f1e3] hover:border-[#5a0f2e] shadow-sm transition-all duration-200 font-medium cursor-pointer"
              >
                {sop.label}
              </button>
            ))}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            4 ANIMATED COUNTERS (Clubs, Members, Events, Domains)
            ═════════════════════════════════════════════════════════════ */}
        <div className="w-full max-w-4xl mx-auto rounded-2xl p-6 border-2 border-[#c9a24b]/35 bg-white/90 backdrop-blur-md shadow-[0_12px_36px_rgba(42,6,20,0.06)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#c9a24b]/25">
            
            {/* Counter 1: Clubs */}
            <div className="pt-2 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#5a0f2e] font-display">
                <AnimatedCounter end={26} suffix="+" />
              </span>
              <span className="text-xs text-[#1c1216] font-bold block mt-1 uppercase tracking-wider">
                Official SAC Clubs
              </span>
              <span className="text-[11px] text-[#5c4e52] block mt-0.5 font-medium">
                5 Specialized Domains
              </span>
            </div>

            {/* Counter 2: Members */}
            <div className="pt-4 md:pt-0 md:pl-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#5a0f2e] font-display">
                <AnimatedCounter end={8500} suffix="+" />
              </span>
              <span className="text-xs text-[#1c1216] font-bold block mt-1 uppercase tracking-wider">
                Active Student Members
              </span>
              <span className="text-[11px] text-[#5c4e52] block mt-0.5 font-medium">
                Across All Departments
              </span>
            </div>

            {/* Counter 3: Events */}
            <div className="pt-4 md:pt-0 md:pl-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#5a0f2e] font-display">
                <AnimatedCounter end={166} suffix="+" />
              </span>
              <span className="text-xs text-[#1c1216] font-bold block mt-1 uppercase tracking-wider">
                Activities & Events
              </span>
              <span className="text-[11px] text-[#5c4e52] block mt-0.5 font-medium">
                Annual Campus Footfall
              </span>
            </div>

            {/* Counter 4: Domains */}
            <div className="pt-4 md:pt-0 md:pl-4">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#5a0f2e] font-display">
                <AnimatedCounter end={5} suffix="" />
              </span>
              <span className="text-xs text-[#1c1216] font-bold block mt-1 uppercase tracking-wider">
                SAC Verticals
              </span>
              <span className="text-[11px] text-[#5c4e52] block mt-0.5 font-medium">
                TEC • LCH • ESO • HWB • IIE
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Architectural Transition Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a24b]/40 to-transparent" />
    </section>
  );
}
