import React, { useState } from 'react';
import { 
  KLUUniversityCrest, 
  CouncilBadge 
} from './Crest';
import { 
  Search, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Users, 
  Award,
  ChevronRight,
  Compass
} from 'lucide-react';
import { UNIVERSITY_INFO, UNIVERSITY_PROCESSES } from '../data/portalData';

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

  return (
    <section className="relative overflow-hidden bg-architectural-pattern bg-maroon-pattern text-kl-warm-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b-2 border-kl-gold/40">
      
      {/* Decorative Gold Accent Lines & Geometry */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-kl-gold to-transparent opacity-80" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-kl-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-kl-maroon-royal/30 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Architectural Corner Frames */}
      <div className="hidden lg:block absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-kl-gold/30 pointer-events-none" />
      <div className="hidden lg:block absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-kl-gold/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Institutional Crest Badge */}
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-kl-maroon-dark/90 border border-kl-gold/40 shadow-gold-subtle backdrop-blur-sm mb-6">
            <CouncilBadge className="w-4 h-4 text-kl-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-kl-gold-soft uppercase">
              Official KL University Student Council Digital Platform
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-kl-gold animate-pulse" />
          </div>

          {/* Main Headings */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="hidden md:block w-12 h-[1px] bg-gradient-to-r from-transparent to-kl-gold" />
            <span className="font-display tracking-[0.25em] text-xs sm:text-sm uppercase text-kl-gold font-bold">
              KLEF Deemed to be University
            </span>
            <div className="hidden md:block w-12 h-[1px] bg-gradient-to-l from-transparent to-kl-gold" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-kl-warm-white max-w-4xl leading-[1.1]">
            SAMVAD <span className="text-gold-gradient font-black">360</span>
          </h1>

          <div className="gold-separator w-48 sm:w-64 my-4" />

          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-kl-gold-soft max-w-3xl leading-relaxed italic">
            "{UNIVERSITY_INFO.tagline}"
          </p>

          <p className="mt-4 text-base sm:text-lg text-kl-ivory/85 max-w-2xl leading-relaxed font-normal">
            {UNIVERSITY_INFO.description}
          </p>

          {/* Interactive Live Search Bar */}
          <div className="w-full max-w-2xl mt-8 relative z-20">
            <div className={`relative flex items-center bg-kl-warm-white/95 rounded-xl border-2 transition-all duration-200 shadow-maroon-deep ${
              isFocused ? 'border-kl-gold ring-4 ring-kl-gold/20' : 'border-kl-gold/50'
            }`}>
              <div className="pl-4 pr-2 text-kl-maroon">
                <Search className="w-5 h-5 text-kl-maroon-royal" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 250)}
                placeholder="Search processes (e.g. On-Duty attendance, Hall ticket, Bonafide, Grievance)..."
                className="w-full py-4 pr-4 bg-transparent text-kl-charcoal text-sm sm:text-base placeholder-kl-muted-grey/70 focus:outline-none font-medium"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="mr-3 text-xs font-semibold text-kl-muted-grey hover:text-kl-maroon bg-kl-light-beige px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Live Search Autocomplete Drawer */}
            {isFocused && query.trim() !== '' && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-kl-warm-white rounded-xl shadow-2xl border border-kl-gold/40 overflow-hidden text-left z-30 animate-in fade-in slide-in-from-top-2">
                <div className="p-2.5 bg-kl-light-beige/80 border-b border-kl-gold/20 flex items-center justify-between text-xs font-bold text-kl-maroon">
                  <span>Matched University Procedures</span>
                  <span className="text-kl-muted-grey font-normal">{filteredProcesses.length} results</span>
                </div>
                {filteredProcesses.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {filteredProcesses.map((proc) => (
                      <div
                        key={proc.id}
                        onMouseDown={() => onSelectProcess(proc)}
                        className="p-3.5 hover:bg-kl-ivory cursor-pointer transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold font-mono px-1.5 py-0.5 rounded bg-kl-maroon/10 text-kl-maroon">
                              {proc.code}
                            </span>
                            <h4 className="text-sm font-bold text-kl-charcoal group-hover:text-kl-maroon">
                              {proc.title}
                            </h4>
                          </div>
                          <p className="text-xs text-kl-muted-grey mt-1 line-clamp-1">
                            {proc.summary}
                          </p>
                        </div>
                        <div className="text-right flex items-center gap-2">
                          <span className="text-xs font-semibold text-kl-maroon bg-kl-gold/20 px-2 py-0.5 rounded">
                            {proc.sla}
                          </span>
                          <ChevronRight className="w-4 h-4 text-kl-gold group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-sm text-kl-muted-grey">
                    No exact process matched "{query}". Browse our full catalog below or file an institutional inquiry.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Primary & Secondary Call-to-Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreProcesses}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-kl-gold via-kl-gold to-kl-gold-dark text-kl-maroon-dark font-extrabold text-sm sm:text-base rounded-xl shadow-gold-subtle hover:brightness-110 active:scale-95 transition-all duration-200 border border-kl-gold-soft"
            >
              <span>Explore Processes</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onDiscoverSAC}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-kl-maroon-royal/60 text-kl-gold-soft font-bold text-sm sm:text-base rounded-xl border-2 border-kl-gold/50 hover:bg-kl-maroon-royal hover:text-kl-warm-white hover:border-kl-gold transition-all duration-200 shadow-md backdrop-blur-sm"
            >
              <Compass className="w-4 h-4 text-kl-gold" />
              <span>Discover SAC</span>
            </button>
          </div>

          {/* Quick Institutional Highlights Bar */}
          <div className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-kl-gold/25">
            
            <div className="flex flex-col items-center p-3 rounded-xl bg-kl-maroon-dark/60 border border-kl-gold/20 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 text-kl-gold">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-display font-bold text-xl sm:text-2xl text-kl-warm-white">98.4%</span>
              </div>
              <span className="text-[11px] sm:text-xs text-kl-gold-soft/80 text-center font-medium mt-0.5">
                SLA Compliance Rate
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-kl-maroon-dark/60 border border-kl-gold/20 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 text-kl-gold">
                <Award className="w-4 h-4" />
                <span className="font-display font-bold text-xl sm:text-2xl text-kl-warm-white">NAAC A++</span>
              </div>
              <span className="text-[11px] sm:text-xs text-kl-gold-soft/80 text-center font-medium mt-0.5">
                Highest Grade (3.57 CGPA)
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-kl-maroon-dark/60 border border-kl-gold/20 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 text-kl-gold">
                <Users className="w-4 h-4" />
                <span className="font-display font-bold text-xl sm:text-2xl text-kl-warm-white">18,000+</span>
              </div>
              <span className="text-[11px] sm:text-xs text-kl-gold-soft/80 text-center font-medium mt-0.5">
                Students Connected
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-kl-maroon-dark/60 border border-kl-gold/20 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 text-kl-gold">
                <Sparkles className="w-4 h-4" />
                <span className="font-display font-bold text-xl sm:text-2xl text-kl-warm-white">6 Domains</span>
              </div>
              <span className="text-[11px] sm:text-xs text-kl-gold-soft/80 text-center font-medium mt-0.5">
                SAC Student Verticals
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
