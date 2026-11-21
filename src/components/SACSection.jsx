import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Music, 
  Trophy, 
  HeartHandshake, 
  BookOpen, 
  Rocket, 
  Users, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Download, 
  Ticket,
  ChevronRight,
  Compass,
  FileCheck2,
  CheckCircle2,
  Star
} from 'lucide-react';
import { 
  SAC_VERTICALS, 
  SAC_EVENTS, 
  STUDENT_COUNCIL_ROSTER 
} from '../data/portalData';
import { CouncilBadge } from './Crest';
import EventRsvpModal from './EventRsvpModal';

const domainIcons = {
  Cpu,
  Music,
  Trophy,
  HeartHandshake,
  BookOpen,
  Rocket
};

export default function SACSection({ onLaunchService, onRsvpSuccess }) {
  const [activeVertical, setActiveVertical] = useState(SAC_VERTICALS[0]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('domains'); // 'domains' | 'events' | 'council' | 'resources'
  const [isDomainLoading, setIsDomainLoading] = useState(false);
  const [joinedClubs, setJoinedClubs] = useState({});

  const handleSelectDomain = (vert) => {
    if (vert.id === activeVertical.id) return;
    setIsDomainLoading(true);
    setActiveVertical(vert);
    setTimeout(() => {
      setIsDomainLoading(false);
    }, 280);
  };

  const handleJoinClub = (clubName) => {
    setJoinedClubs(prev => ({ ...prev, [clubName]: true }));
  };

  return (
    <section 
      id="sac" 
      className="py-20 text-white relative overflow-hidden border-b border-[#c9a24b]/30"
      style={{
        background: 'linear-gradient(180deg, #2a0614 0%, #380a1e 50%, #2a0614 100%)'
      }}
    >
      {/* Subtle background watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#c9a24b 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a0614] border border-[#c9a24b]/40 text-[#e6cf8f] text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <CouncilBadge className="w-4 h-4 text-[#c9a24b]" />
            <span>Student Activity Center (SAC) Ecosystem</span>
          </div>

          <h2 
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            26 Clubs. 5 Domains. <br className="hidden sm:inline" />
            <span className="text-[#e6cf8f] italic font-normal">Student Leadership in Action</span>
          </h2>

          <div className="w-32 h-[2px] mx-auto my-4 bg-gradient-to-r from-transparent via-[#c9a24b] to-transparent opacity-90" />

          <p className="text-base sm:text-lg text-[#e8dccb] leading-relaxed font-normal">
            KL Deemed to be University’s Student Activity Center brings together technical innovators, 
            cultural artists, community leaders, and athletes across accredited verticals.
          </p>

          {/* Sub Navigation Tabs as Refined Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {[
              { id: 'domains', label: '1. Domains & 26 Clubs' },
              { id: 'events', label: '2. Flagship Events & RSVP' },
              { id: 'council', label: '3. Council Executive Roster' },
              { id: 'resources', label: '4. Club Guidelines & SOPs' }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#c9a24b] text-[#2a0614] border-[#c9a24b] font-bold shadow-md transform scale-[1.02]'
                      : 'bg-[#2a0614]/70 text-[#f7f1e3] border-[#c9a24b]/30 hover:border-[#c9a24b] hover:text-[#e6cf8f]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            TAB 1: DOMAINS & CLUBS
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === 'domains' && (
          <div className="space-y-8 motion-fade-up">
            
            {/* Domain Cards Grid (1px gold border ~30%, hover translateY(-4px), soft gold glow) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {SAC_VERTICALS.map((vert) => {
                const Icon = domainIcons[vert.icon] || Sparkles;
                const isSelected = activeVertical.id === vert.id;
                return (
                  <button
                    key={vert.id}
                    onClick={() => handleSelectDomain(vert)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                      isSelected
                        ? 'domain-card-selected'
                        : 'domain-card'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon className={`w-7 h-7 ${isSelected ? 'text-[#e6cf8f]' : 'text-[#c9a24b]'}`} />
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#c9a24b]/20 text-[#e6cf8f]">
                        {vert.clubsCount}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs sm:text-sm font-bold block leading-tight text-white">
                        {vert.name}
                      </span>
                      <span className="text-[11px] block mt-1 font-medium text-[#e6cf8f]/90">
                        {vert.membersCount}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Spotlight Panel */}
            <div className="bg-[#2a0614]/90 rounded-2xl border border-[#c9a24b]/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#c9a24b]/20">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#c9a24b] uppercase tracking-wider">
                      Domain Spotlight
                    </span>
                    <span className="text-[#c9a24b]/40">•</span>
                    <span className="text-xs font-semibold text-[#e6cf8f]">{activeVertical.membersCount} Active Members</span>
                  </div>
                  <h3 
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {activeVertical.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#e8dccb] mt-1.5 max-w-2xl leading-relaxed">
                    {activeVertical.tagline}
                  </p>
                </div>

                <div className="p-3.5 bg-[#5a0f2e]/50 rounded-xl border border-[#c9a24b]/30 flex items-center gap-3.5 shrink-0">
                  <div 
                    className="w-12 h-12 rounded-full bg-[#c9a24b] text-[#2a0614] font-bold flex items-center justify-center text-lg shadow-sm"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {activeVertical.leadName.charAt(0)}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">{activeVertical.leadName}</span>
                    <span className="text-xs font-medium text-[#e6cf8f]">{activeVertical.leadRole}</span>
                  </div>
                </div>
              </div>

              {/* Clubs Roster Grid with Skeleton Loading State */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#e6cf8f]">
                    Clubs under {activeVertical.name}
                  </h4>
                  <span className="text-xs text-[#d9c9b8]">
                    Showing verified university-registered student bodies
                  </span>
                </div>

                {isDomainLoading ? (
                  /* Skeleton Loading State */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="p-5 rounded-xl border border-[#c9a24b]/20 bg-[#2a0614]/60 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="skeleton w-10 h-10 rounded-xl" />
                          <div className="skeleton w-14 h-5 rounded-full" />
                        </div>
                        <div className="skeleton w-3/4 h-5 rounded" />
                        <div className="skeleton w-full h-8 rounded" />
                        <div className="flex justify-between pt-2 border-t border-[#c9a24b]/10">
                          <div className="skeleton w-20 h-4 rounded" />
                          <div className="skeleton w-14 h-7 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Verified Club Cards */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {activeVertical.clubs.map((club, idx) => {
                      const isJoined = joinedClubs[club.name];
                      return (
                        <div 
                          key={idx}
                          className="club-card p-5 group focus-within:ring-2 focus-within:ring-[#c9a24b]"
                        >
                          <div>
                            {/* Card Header: Club Initials Badge & Rating */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-10 h-10 rounded-xl bg-[#5a0f2e] border border-[#c9a24b]/40 text-[#e6cf8f] font-bold font-logo flex items-center justify-center text-sm shadow-sm group-hover:border-[#c9a24b] transition-colors">
                                {club.name.slice(0, 2).toUpperCase()}
                              </div>
                              <span className="text-xs font-bold bg-[#c9a24b]/20 text-[#e6cf8f] border border-[#c9a24b]/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Star className="w-3 h-3 text-[#c9a24b] fill-[#c9a24b]" />
                                {club.rating}
                              </span>
                            </div>

                            {/* Club Name */}
                            <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-[#e6cf8f] transition-colors mb-1.5">
                              {club.name}
                            </h5>

                            {/* 2-line Description */}
                            <p className="text-xs text-[#e8dccb] leading-relaxed line-clamp-2 min-h-[34px] mb-4">
                              {club.focus}
                            </p>
                          </div>

                          {/* Card Footer: Members & Join Button */}
                          <div className="flex items-center justify-between pt-3 border-t border-[#c9a24b]/20 text-xs">
                            <span className="text-xs text-[#d9c9b8] flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-[#c9a24b]" />
                              {club.members} students
                            </span>

                            <button
                              onClick={() => handleJoinClub(club.name)}
                              disabled={isJoined}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c9a24b] ${
                                isJoined
                                  ? 'bg-emerald-600/80 text-white cursor-default flex items-center gap-1'
                                  : 'bg-[#c9a24b] text-[#2a0614] hover:bg-[#e6cf8f] active:scale-95'
                              }`}
                            >
                              {isJoined ? (
                                <>
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>Joined</span>
                                </>
                              ) : (
                                <span>Join</span>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════
            TAB 2: EVENTS & RSVP
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 motion-fade-up">
            {SAC_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-[#2a0614]/90 rounded-2xl border border-[#c9a24b]/40 p-6 flex flex-col justify-between hover:border-[#c9a24b] hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold bg-[#c9a24b] text-[#2a0614] px-2 py-0.5 rounded">
                      {event.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {event.status}
                    </span>
                  </div>

                  <h3 
                    className="text-lg font-bold text-white mb-2 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-[#e6cf8f] mb-4 bg-[#5a0f2e]/40 p-3 rounded-lg border border-[#c9a24b]/20">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#c9a24b]" />
                      <span>{event.dates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#c9a24b]" />
                      <span>{event.expectedFootfall}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#e8dccb] leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c9a24b]/20">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="btn-gold-primary w-full text-xs"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Get Delegate Pass / RSVP</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════
            TAB 3: COUNCIL EXECUTIVE ROSTER
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === 'council' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 motion-fade-up">
            {STUDENT_COUNCIL_ROSTER.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-[#2a0614]/85 rounded-2xl border border-[#c9a24b]/30 p-6 flex flex-col justify-between hover:border-[#c9a24b] transition-all duration-300"
              >
                <div>
                  <div 
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e6cf8f] to-[#c9a24b] text-[#2a0614] font-bold text-xl flex items-center justify-center mb-4 border-2 border-white/40 shadow-md"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {leader.name.charAt(0)}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e6cf8f] bg-[#5a0f2e]/60 px-2 py-0.5 rounded border border-[#c9a24b]/30 inline-block mb-1.5">
                    {leader.badge}
                  </span>

                  <h3 
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {leader.name}
                  </h3>

                  <span className="text-xs text-[#e6cf8f] font-semibold block mb-0.5">
                    {leader.role}
                  </span>

                  <span className="text-[11px] text-[#d9c9b8] block mb-3">
                    {leader.branch} • {leader.year}
                  </span>

                  <p className="text-xs italic text-[#e8dccb] leading-relaxed bg-[#5a0f2e]/40 p-3 rounded-lg border border-[#c9a24b]/15">
                    "{leader.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#c9a24b]/20 text-center">
                  <span className="text-[11px] font-semibold text-[#c9a24b]">
                    KL Student Council • 2026-2027
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════
            TAB 4: RESOURCES & ACTIVITY GUIDELINES
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 motion-fade-up">
            <div className="bg-[#2a0614]/90 p-6 rounded-2xl border border-[#c9a24b]/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5a0f2e] text-[#e6cf8f] flex items-center justify-center mb-4 border border-[#c9a24b]/30">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  How to Host an Event at KL
                </h3>
                <p className="text-xs text-[#e8dccb] leading-relaxed mb-4">
                  Step-by-step checklist for auditorium bookings, audio-visual technical requisitions, faculty advisor sign-offs, and security passes.
                </p>
              </div>
              <button
                onClick={() => onLaunchService('club-event')}
                className="btn-maroon-secondary w-full text-xs"
              >
                <span>Initiate Event Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-[#2a0614]/90 p-6 rounded-2xl border border-[#c9a24b]/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5a0f2e] text-[#e6cf8f] flex items-center justify-center mb-4 border border-[#c9a24b]/30">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  SAC Official Club Rulebook 2026
                </h3>
                <p className="text-xs text-[#e8dccb] leading-relaxed mb-4">
                  Governing statutes for student election procedures, financial ledger audits, sponsorship regulations, and brand identity standards.
                </p>
              </div>
              <button 
                onClick={() => alert("Downloading Official SAC Rulebook 2026-27 (PDF)")}
                className="btn-maroon-secondary w-full text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Rulebook (PDF)</span>
              </button>
            </div>

            <div className="bg-[#2a0614]/90 p-6 rounded-2xl border border-[#c9a24b]/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#5a0f2e] text-[#e6cf8f] flex items-center justify-center mb-4 border border-[#c9a24b]/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  On-Duty (OD) Attendance Policy
                </h3>
                <p className="text-xs text-[#e8dccb] leading-relaxed mb-4">
                  Everything you need to know about attendance credits for hackathons, inter-university competitions, and student council obligations.
                </p>
              </div>
              <button
                onClick={() => onLaunchService('od-approval')}
                className="btn-gold-primary w-full text-xs"
              >
                <span>Apply for OD Attendance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Render Event RSVP Modal */}
      {selectedEvent && (
        <EventRsvpModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRsvpSuccess={onRsvpSuccess}
        />
      )}
    </section>
  );
}
