import React, { useState } from 'react';
import { 
  CouncilBadge 
} from './Crest';
import { 
  Search, 
  ArrowRight, 
  Clock, 
  ChevronRight,
  Compass,
  FileCheck2,
  Sparkles,
  ShieldCheck
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

  const quickSOPs = [
    { label: "On-Duty (OD) Attendance", id: "proc-01" },
    { label: "Hall Ticket Clearance", id: "proc-02" },
    { label: "Bonafide Certificate", id: "proc-03" },
    { label: "Hostel Outing Pass", id: "proc-06" },
    { label: "Grievance Redressal", id: "proc-05" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-kl-maroon-dark via-kl-maroon-burgundy to-kl-maroon-deep text-kl-warm-white border-b border-kl-gold/30">
      
      {/* Refined Subtle Architectural Guilloche Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C5A052 1px, transparent 1px), radial-gradient(#C5A052 1px, #280612 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      {/* Subtle Gold Corner Accents */}
      <div className="hidden lg:block absolute top-6 left-8 w-12 h-12 border-t border-l border-kl-gold/25 pointer-events-none" />
      <div className="hidden lg:block absolute top-6 right-8 w-12 h-12 border-t border-r border-kl-gold/25 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 text-center">
        
        {/* Official Secretariat Identification */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kl-maroon-dark/95 border border-kl-gold/40 text-kl-gold text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
          <CouncilBadge className="w-3.5 h-3.5 text-kl-gold" />
          <span>KLEF Deemed to be University • Student Council Secretariat</span>
        </div>

        {/* Primary Visual Focus: SAMVAD 360 */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-kl-warm-white tracking-tight leading-none mb-3">
          SAMVAD <span className="text-gold-gradient font-black">360</span>
        </h1>

        {/* Delicate Gold Separator */}
        <div className="gold-separator w-36 sm:w-48 mx-auto my-3 opacity-80" />

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-serif italic text-kl-gold-soft font-medium max-w-2xl mx-auto mb-3">
          "{UNIVERSITY_INFO.tagline}"
        </p>

        {/* Improved Paragraph Width & Readability */}
        <p className="text-xs sm:text-sm text-kl-ivory/85 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
          A unified digital gateway to navigate university processes, discover student services, and connect with the right institutional resources under the governance of the KL University Student Council.
        </p>

        {/* Accessible Search Field with Autocomplete */}
        <div className="w-full max-w-2xl mx-auto relative z-20 mb-6">
          <div className={`relative flex items-center bg-kl-warm-white rounded-xl border-2 transition-all shadow-md ${
            isFocused ? 'border-kl-gold ring-3 ring-kl-gold/20' : 'border-kl-gold/45'
          }`}>
            <div className="pl-4 pr-2 text-kl-maroon-deep">
              <Search className="w-4 h-4 text-kl-maroon-deep" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 250)}
              placeholder="Search university procedures (e.g. On-Duty attendance, Hall ticket, Bonafide)..."
              className="w-full py-3.5 pr-4 text-xs sm:text-sm text-kl-charcoal placeholder-kl-muted-grey/70 bg-transparent focus:outline-none font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="mr-3 text-xs font-bold text-kl-muted-grey hover:text-kl-maroon-deep bg-kl-light-beige px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Autocomplete Drawer */}
          {isFocused && query.trim() !== '' && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-kl-warm-white rounded-xl shadow-2xl border border-kl-gold/40 overflow-hidden text-left z-30 animate-in fade-in slide-in-from-top-2">
              <div className="p-2.5 bg-kl-light-beige border-b border-kl-gold/20 flex items-center justify-between text-xs font-bold text-kl-maroon-deep">
                <span>Matched Procedures ({filteredProcesses.length})</span>
                <span className="text-kl-muted-grey font-normal text-[11px]">Click to view SOP & requirements</span>
              </div>
              {filteredProcesses.length > 0 ? (
                <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
                  {filteredProcesses.map((proc) => (
                    <div
                      key={proc.id}
                      onMouseDown={() => onSelectProcess(proc)}
                      className="p-3 hover:bg-kl-ivory cursor-pointer transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-kl-maroon-deep/10 text-kl-maroon-deep">
                            {proc.code}
                          </span>
                          <span className="text-xs font-bold text-kl-charcoal group-hover:text-kl-maroon-deep">
                            {proc.title}
                          </span>
                        </div>
                        <span className="text-[11px] text-kl-muted-grey block mt-0.5 line-clamp-1">
                          {proc.department}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-kl-maroon-deep bg-kl-gold/20 px-2 py-0.5 rounded shrink-0">
                        SLA: {proc.sla}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-5 text-center text-xs text-kl-muted-grey">
                  No direct procedure match for "{query}". Try searching by department or keyword.
                </div>
              )}
            </div>
          )}

          {/* Quick Filter SOP Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-xs font-semibold text-kl-gold-soft mr-1">Trending Services:</span>
            {quickSOPs.map((sop) => (
              <button
                key={sop.id}
                onClick={() => {
                  const matched = UNIVERSITY_PROCESSES.find(p => p.id === sop.id);
                  if (matched) onSelectProcess(matched);
                }}
                className="text-xs px-2.5 py-1 rounded-md bg-kl-maroon-dark/80 hover:bg-kl-gold hover:text-kl-maroon-dark text-kl-gold-soft border border-kl-gold/30 transition-all font-medium"
              >
                {sop.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onExploreProcesses}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-kl-gold via-kl-gold to-kl-gold-dark text-kl-maroon-dark font-extrabold text-xs sm:text-sm rounded-lg shadow-gold-subtle hover:brightness-105 active:scale-95 transition-all border border-kl-gold-soft"
          >
            <span>Explore Service Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onDiscoverSAC}
            className="inline-flex items-center gap-2 px-5 py-3 bg-kl-maroon-burgundy/80 text-kl-gold-soft font-bold text-xs sm:text-sm rounded-lg border border-kl-gold/40 hover:bg-kl-maroon-burgundy hover:text-kl-warm-white hover:border-kl-gold transition-all"
          >
            <Compass className="w-4 h-4 text-kl-gold" />
            <span>Discover SAC & Clubs</span>
          </button>
        </div>

      </div>
    </section>
  );
}
