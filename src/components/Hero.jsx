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
  Compass,
  FileCheck2,
  Lock,
  ArrowUpRight,
  Send,
  Building,
  HelpCircle
} from 'lucide-react';
import { UNIVERSITY_INFO, UNIVERSITY_PROCESSES } from '../data/portalData';

export default function Hero({ onExploreProcesses, onDiscoverSAC, onSelectProcess }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [trackToken, setTrackToken] = useState('');
  const [trackResult, setTrackResult] = useState(null);

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

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackToken.trim()) return;
    const cleanToken = trackToken.trim().toUpperCase();
    setTrackResult({
      token: cleanToken,
      status: "In Active Routing",
      stage: "Stage 2: Departmental Dean Endorsement",
      sla: "28 Hours Remaining"
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-kl-maroon-dark via-[#4d1324] to-kl-maroon-dark text-kl-warm-white border-b-2 border-kl-gold/40">
      
      {/* Refined Institutional Guilloche / Architectural Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C5A15A 1px, transparent 1px), radial-gradient(#C5A15A 1px, #42101F 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      {/* Decorative Heritage Corner Flourishes */}
      <div className="hidden xl:block absolute top-6 left-6 w-12 h-12 border-t border-l border-kl-gold/30 pointer-events-none" />
      <div className="hidden xl:block absolute top-6 right-6 w-12 h-12 border-t border-r border-kl-gold/30 pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        
        {/* Two-Column Institutional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Main Institutional Identity & Process Finder (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Official University Identification Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kl-maroon-dark/95 border border-kl-gold/40 text-kl-gold text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm">
                <CouncilBadge className="w-3.5 h-3.5 text-kl-gold" />
                <span>KLEF Deemed to be University • Student Council Secretariat</span>
              </div>

              <div className="flex items-baseline gap-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-kl-warm-white tracking-tight leading-tight">
                  SAMVAD <span className="text-gold-gradient font-black">360</span>
                </h1>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-kl-gold/15 text-kl-gold border border-kl-gold/30">
                  v2.6 Official
                </span>
              </div>

              {/* Dignified Motto */}
              <p className="mt-2 text-base sm:text-lg font-serif italic text-kl-gold-soft font-medium">
                "Your University. Your Processes. Your Voice."
              </p>

              {/* Official Portal Charter */}
              <p className="mt-3 text-xs sm:text-sm text-kl-ivory/85 leading-relaxed max-w-xl">
                The centralized digital governance and administrative public infrastructure of the <strong>KL University Student Council</strong>. Navigate institutional standard operating procedures, track clearance requisitions, and access university services with transparent SLA accountability.
              </p>
            </div>

            {/* Official Process Search Hub */}
            <div className="bg-kl-maroon/60 rounded-xl p-4 border border-kl-gold/35 shadow-lg backdrop-blur-sm relative z-20">
              <label className="text-xs font-bold text-kl-gold uppercase tracking-wider block mb-2 flex items-center justify-between">
                <span>University Procedure & Service Directory</span>
                <span className="text-[10px] text-kl-gold-soft/70 lowercase font-normal">SLA tracked & ERP integrated</span>
              </label>

              <div className="relative">
                <div className={`flex items-center bg-kl-warm-white rounded-lg border transition-all ${
                  isFocused ? 'border-kl-gold ring-2 ring-kl-gold/30' : 'border-kl-gold/40'
                }`}>
                  <div className="pl-3.5 pr-2 text-kl-maroon">
                    <Search className="w-4 h-4 text-kl-maroon" />
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 250)}
                    placeholder="Search procedure (e.g. On-Duty attendance, Hall ticket clearance, Bonafide)..."
                    className="w-full py-2.5 pr-3 text-xs sm:text-sm text-kl-charcoal placeholder-kl-muted-grey/70 bg-transparent focus:outline-none font-medium"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="mr-2 text-[10px] font-bold text-kl-muted-grey hover:text-kl-maroon bg-kl-light-beige px-2 py-0.5 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Autocomplete Drawer */}
                {isFocused && query.trim() !== '' && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-kl-warm-white rounded-xl shadow-2xl border border-kl-gold/40 overflow-hidden text-left z-30 animate-in fade-in slide-in-from-top-1">
                    <div className="p-2 bg-kl-light-beige text-[11px] font-bold text-kl-maroon border-b border-kl-gold/20 flex items-center justify-between">
                      <span>Matched Procedures ({filteredProcesses.length})</span>
                      <span className="text-[10px] text-kl-muted-grey font-normal">Click to view SOP & apply</span>
                    </div>
                    {filteredProcesses.length > 0 ? (
                      <div className="divide-y divide-gray-100 max-h-56 overflow-y-auto">
                        {filteredProcesses.map((proc) => (
                          <div
                            key={proc.id}
                            onMouseDown={() => onSelectProcess(proc)}
                            className="p-3 hover:bg-kl-ivory cursor-pointer transition-colors flex items-center justify-between group text-xs"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono font-bold text-[10px] px-1.5 py-0.2 bg-kl-maroon/10 text-kl-maroon rounded">
                                  {proc.code}
                                </span>
                                <span className="font-bold text-kl-charcoal group-hover:text-kl-maroon">
                                  {proc.title}
                                </span>
                              </div>
                              <span className="text-[11px] text-kl-muted-grey block mt-0.5 line-clamp-1">
                                {proc.department}
                              </span>
                            </div>
                            <span className="text-[11px] font-semibold text-kl-maroon bg-kl-gold/20 px-2 py-0.5 rounded shrink-0">
                              {proc.sla}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-xs text-kl-muted-grey">
                        No official procedure found for "{query}". Try browsing the full directory below.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Quick SOP Chips */}
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-kl-gold-soft font-semibold mr-1">Frequent:</span>
                {quickSOPs.map((sop) => (
                  <button
                    key={sop.id}
                    onClick={() => {
                      const matched = UNIVERSITY_PROCESSES.find(p => p.id === sop.id);
                      if (matched) onSelectProcess(matched);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded bg-kl-maroon-dark/90 hover:bg-kl-gold hover:text-kl-maroon-dark text-kl-gold-soft border border-kl-gold/30 transition-all font-medium"
                  >
                    {sop.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExploreProcesses}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-kl-gold via-kl-gold to-kl-gold-dark text-kl-maroon-dark font-extrabold text-xs sm:text-sm rounded-lg shadow-gold-subtle hover:brightness-105 active:scale-95 transition-all border border-kl-gold-soft"
              >
                <span>Explore All 14+ University SOPs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDiscoverSAC}
                className="inline-flex items-center gap-2 px-5 py-3 bg-kl-maroon-dark/80 text-kl-gold-soft font-bold text-xs sm:text-sm rounded-lg border border-kl-gold/40 hover:bg-kl-maroon hover:text-kl-warm-white hover:border-kl-gold transition-all"
              >
                <Compass className="w-4 h-4 text-kl-gold" />
                <span>Student Activity Center (SAC)</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Official Student Council Bulletin & Docket Tracker Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-kl-maroon-dark/95 rounded-2xl border-2 border-kl-gold/40 shadow-2xl p-5 sm:p-6 backdrop-blur-md relative overflow-hidden">
              
              {/* Subtle Crest Watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <KLUUniversityCrest className="w-48 h-48" variant="gold" />
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-kl-gold/25">
                <div className="flex items-center gap-2.5">
                  <KLUUniversityCrest className="w-8 h-8" variant="gold" />
                  <div>
                    <span className="text-xs font-bold text-kl-warm-white block font-display tracking-wide">
                      Student Council Secretariat
                    </span>
                    <span className="text-[10px] text-kl-gold block font-mono">
                      KLEF Executive Desk • 2026-27
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Session Active</span>
                </div>
              </div>

              {/* Institutional Commitments List */}
              <div className="py-4 space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-kl-maroon/40 border border-kl-gold/15">
                  <Clock className="w-4 h-4 text-kl-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-kl-gold block text-[11px] uppercase tracking-wide">
                      72-Hour Grievance SLA Escalation
                    </strong>
                    <span className="text-kl-ivory/80 text-[11px] leading-tight block">
                      Direct escalation to University Ombudsman & Dean (Student Affairs).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-kl-maroon/40 border border-kl-gold/15">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-kl-warm-white block text-[11px] uppercase tracking-wide">
                      Zero-Retaliation Policy
                    </strong>
                    <span className="text-kl-ivory/80 text-[11px] leading-tight block">
                      Encrypted anonymous filing protected under UN SDG 16 statutes.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-kl-maroon/40 border border-kl-gold/15">
                  <CheckCircle2 className="w-4 h-4 text-kl-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-kl-warm-white block text-[11px] uppercase tracking-wide">
                      Biometric ERP Attendance Credit
                    </strong>
                    <span className="text-kl-ivory/80 text-[11px] leading-tight block">
                      Approved ODs credit directly to classroom attendance ledgers.
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast Track Token Input */}
              <div className="pt-3 border-t border-kl-gold/25">
                <span className="text-[10px] font-bold uppercase tracking-wider text-kl-gold block mb-1.5">
                  Quick Docket & Application Status Lookup
                </span>
                
                <form onSubmit={handleTrackSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={trackToken}
                    onChange={(e) => setTrackToken(e.target.value)}
                    placeholder="Enter Token (e.g. KLU-PROC-8841)"
                    className="w-full text-xs font-mono px-3 py-2 bg-kl-maroon/80 border border-kl-gold/40 rounded-lg text-kl-warm-white placeholder-kl-gold-soft/50 focus:outline-none focus:border-kl-gold"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-kl-gold text-kl-maroon-dark font-bold text-xs rounded-lg hover:brightness-110 shrink-0 transition-colors"
                  >
                    Track
                  </button>
                </form>

                {trackResult && (
                  <div className="mt-2.5 p-2.5 bg-kl-maroon/80 rounded-lg border border-kl-gold/30 text-xs animate-in fade-in">
                    <div className="flex items-center justify-between text-[11px] font-bold text-kl-gold mb-1">
                      <span>Token: {trackResult.token}</span>
                      <span className="text-emerald-400 font-semibold">{trackResult.status}</span>
                    </div>
                    <p className="text-[11px] text-kl-warm-white">
                      Current: {trackResult.stage}
                    </p>
                    <span className="text-[10px] text-kl-gold-soft/80 block mt-0.5">
                      Turnaround Clock: {trackResult.sla}
                    </span>
                  </div>
                )}
              </div>

              {/* Quick Contacts Footer */}
              <div className="mt-4 pt-3 border-t border-kl-gold/20 flex items-center justify-between text-[10px] text-kl-gold-soft/80">
                <span>SAC Building, Room 104</span>
                <span className="text-kl-gold font-bold">Ext: 1102 / 1250</span>
              </div>

            </div>
          </div>

        </div>

        {/* Refined Bottom Metric Ribbon (Replacing the bulky bottom chips) */}
        <div className="mt-10 pt-6 border-t border-kl-gold/25 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          
          <div className="p-2 border-r border-kl-gold/15 last:border-r-0">
            <span className="font-display font-black text-xl sm:text-2xl text-kl-gold block">
              98.4%
            </span>
            <span className="text-[11px] text-kl-gold-soft/80 uppercase tracking-wider font-semibold">
              SLA Resolution Rate
            </span>
          </div>

          <div className="p-2 border-r border-kl-gold/15 last:border-r-0">
            <span className="font-display font-black text-xl sm:text-2xl text-kl-warm-white block">
              NAAC A++
            </span>
            <span className="text-[11px] text-kl-gold-soft/80 uppercase tracking-wider font-semibold">
              3.57 CGPA Highest Grade
            </span>
          </div>

          <div className="p-2 border-r border-kl-gold/15 last:border-r-0">
            <span className="font-display font-black text-xl sm:text-2xl text-kl-warm-white block">
              18,000+
            </span>
            <span className="text-[11px] text-kl-gold-soft/80 uppercase tracking-wider font-semibold">
              Students Connected
            </span>
          </div>

          <div className="p-2">
            <span className="font-display font-black text-xl sm:text-2xl text-kl-gold block">
              6 Verticals
            </span>
            <span className="text-[11px] text-kl-gold-soft/80 uppercase tracking-wider font-semibold">
              Student Activity Center
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
