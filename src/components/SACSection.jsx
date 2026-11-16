import React, { useState } from 'react';
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
  ExternalLink
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

  return (
    <section id="sac" className="py-20 bg-architectural-pattern bg-maroon-pattern text-kl-warm-white relative overflow-hidden border-b-2 border-kl-gold/40">
      
      {/* Background Glows & Lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-kl-gold to-transparent opacity-80" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-kl-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-kl-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kl-maroon-dark border border-kl-gold/40 text-kl-gold text-xs font-bold uppercase tracking-widest mb-3 shadow-gold-subtle">
            <CouncilBadge className="w-4 h-4" />
            <span>Student Activity Center • Council Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-kl-warm-white tracking-tight">
            The Heart of Student Leadership
          </h2>

          <div className="gold-separator w-32 mx-auto my-4" />

          <p className="text-base sm:text-lg text-kl-gold-soft/90 leading-relaxed font-normal">
            Empowering over 18,000 students across 6 diverse verticals, 40+ professional clubs, and student-governed democratic bodies at KL University.
          </p>

          {/* Sub Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'domains', label: '1. Six SAC Domains & Clubs' },
              { id: 'events', label: '2. Flagship Events & RSVP' },
              { id: 'council', label: '3. Council Executive Roster' },
              { id: 'resources', label: '4. Activity Guidelines & SOPs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  activeTab === tab.id
                    ? 'bg-kl-gold text-kl-maroon-dark border-kl-gold shadow-gold-subtle'
                    : 'bg-kl-maroon-dark/70 text-kl-gold-soft border-kl-gold/30 hover:border-kl-gold hover:text-kl-warm-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: DOMAINS & CLUBS */}
        {activeTab === 'domains' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Domain Selector Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SAC_VERTICALS.map((vert) => {
                const Icon = domainIcons[vert.icon] || Sparkles;
                const isSelected = activeVertical.id === vert.id;
                return (
                  <button
                    key={vert.id}
                    onClick={() => setActiveVertical(vert)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-kl-gold text-kl-maroon-dark border-kl-gold shadow-lg scale-105'
                        : 'bg-kl-maroon-dark/60 text-kl-warm-white border-kl-gold/30 hover:border-kl-gold/60 hover:bg-kl-maroon-dark'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-kl-maroon-dark' : 'text-kl-gold'}`} />
                    <div>
                      <span className="text-xs font-bold block leading-tight">{vert.name}</span>
                      <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-kl-maroon-royal' : 'text-kl-gold-soft/70'}`}>
                        {vert.clubsCount} Clubs
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Spotlight Panel */}
            <div className="bg-kl-maroon-dark/90 rounded-2xl border-2 border-kl-gold/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-kl-gold/25">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-kl-gold uppercase tracking-wider">
                      Domain Spotlight
                    </span>
                    <span className="text-kl-gold/40">•</span>
                    <span className="text-xs text-kl-gold-soft">{activeVertical.membersCount} Active Members</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-kl-warm-white">
                    {activeVertical.name}
                  </h3>
                  <p className="text-sm text-kl-gold-soft mt-1 max-w-2xl">
                    {activeVertical.tagline}
                  </p>
                </div>

                <div className="p-3.5 bg-kl-maroon/70 rounded-xl border border-kl-gold/30 flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-kl-gold text-kl-maroon-dark font-bold flex items-center justify-center font-display text-base">
                    {activeVertical.leadName.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-kl-warm-white block">{activeVertical.leadName}</span>
                    <span className="text-[11px] text-kl-gold">{activeVertical.leadRole}</span>
                  </div>
                </div>
              </div>

              {/* Clubs Roster Grid */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-kl-gold mb-4">
                  Premier Clubs under {activeVertical.name}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {activeVertical.clubs.map((club, idx) => (
                    <div 
                      key={idx}
                      className="bg-kl-maroon/50 rounded-xl p-4 border border-kl-gold/25 hover:border-kl-gold hover:bg-kl-maroon/80 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-kl-warm-white group-hover:text-kl-gold transition-colors">
                          {club.name}
                        </span>
                        <span className="text-[10px] font-bold bg-kl-gold/20 text-kl-gold px-1.5 py-0.5 rounded">
                          ★ {club.rating}
                        </span>
                      </div>
                      <p className="text-xs text-kl-gold-soft/80 mb-3 min-h-[32px] line-clamp-2">
                        {club.focus}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-kl-gold-soft/70 pt-2 border-t border-kl-gold/15">
                        <span>{club.members} students</span>
                        <span className="font-semibold text-kl-gold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Join Club <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EVENTS & RSVP */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {SAC_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-kl-maroon-dark/90 rounded-2xl border-2 border-kl-gold/40 p-6 flex flex-col justify-between hover:border-kl-gold hover:shadow-2xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold bg-kl-gold text-kl-maroon-dark px-2 py-0.5 rounded">
                      {event.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-kl-warm-white mb-2 leading-snug">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-kl-gold-soft/90 mb-4 bg-kl-maroon/60 p-3 rounded-lg border border-kl-gold/20">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-kl-gold" />
                      <span>{event.dates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-kl-gold" />
                      <span>{event.expectedFootfall}</span>
                    </div>
                  </div>

                  <p className="text-xs text-kl-ivory/80 leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-kl-gold/20">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full py-2.5 bg-gradient-to-r from-kl-gold to-kl-gold-dark text-kl-maroon-dark font-extrabold text-xs rounded-xl shadow-gold-subtle hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Get Delegate Pass / RSVP</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: COUNCIL EXECUTIVE ROSTER */}
        {activeTab === 'council' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {STUDENT_COUNCIL_ROSTER.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-kl-maroon-dark/85 rounded-2xl border-2 border-kl-gold/30 p-6 flex flex-col justify-between hover:border-kl-gold transition-all"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-kl-gold to-kl-gold-dark text-kl-maroon-dark font-display font-bold text-xl flex items-center justify-center mb-4 border-2 border-kl-warm-white/40 shadow-md">
                    {leader.name.charAt(0)}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-kl-gold bg-kl-maroon/60 px-2 py-0.5 rounded border border-kl-gold/30 inline-block mb-1.5">
                    {leader.badge}
                  </span>

                  <h3 className="text-lg font-display font-bold text-kl-warm-white">
                    {leader.name}
                  </h3>

                  <span className="text-xs text-kl-gold-soft font-semibold block mb-0.5">
                    {leader.role}
                  </span>

                  <span className="text-[11px] text-kl-ivory/70 block mb-3">
                    {leader.branch} • {leader.year}
                  </span>

                  <p className="text-xs italic text-kl-gold-soft/85 leading-relaxed bg-kl-maroon/40 p-3 rounded-lg border border-kl-gold/15">
                    "{leader.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-kl-gold/20 text-center">
                  <span className="text-[11px] font-semibold text-kl-gold">
                    KL Student Council • 2026-2027
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: RESOURCES & ACTIVITY GUIDELINES */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="bg-kl-maroon-dark/90 p-6 rounded-2xl border border-kl-gold/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-kl-maroon text-kl-gold flex items-center justify-center mb-4 border border-kl-gold/30">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-kl-warm-white mb-1">
                  How to Host an Event at KL
                </h3>
                <p className="text-xs text-kl-gold-soft/80 leading-relaxed mb-4">
                  Step-by-step checklist for auditorium bookings, audio-visual technical requisitions, faculty advisor sign-offs, and security passes.
                </p>
              </div>
              <button
                onClick={() => onLaunchService('club-event')}
                className="w-full py-2 bg-kl-maroon-royal border border-kl-gold text-kl-gold text-xs font-bold rounded-lg hover:bg-kl-gold hover:text-kl-maroon-dark transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Initiate Event Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-kl-maroon-dark/90 p-6 rounded-2xl border border-kl-gold/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-kl-maroon text-kl-gold flex items-center justify-center mb-4 border border-kl-gold/30">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-kl-warm-white mb-1">
                  SAC Official Club Rulebook 2026
                </h3>
                <p className="text-xs text-kl-gold-soft/80 leading-relaxed mb-4">
                  Governing statutes for student election procedures, financial ledger audits, sponsorship regulations, and brand identity standards.
                </p>
              </div>
              <button 
                onClick={() => alert("Downloading Official SAC Rulebook 2026-27 (PDF)")}
                className="w-full py-2 bg-kl-maroon-royal border border-kl-gold text-kl-gold text-xs font-bold rounded-lg hover:bg-kl-gold hover:text-kl-maroon-dark transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Rulebook (PDF)</span>
              </button>
            </div>

            <div className="bg-kl-maroon-dark/90 p-6 rounded-2xl border border-kl-gold/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-kl-maroon text-kl-gold flex items-center justify-center mb-4 border border-kl-gold/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-kl-warm-white mb-1">
                  On-Duty (OD) Attendance Policy
                </h3>
                <p className="text-xs text-kl-gold-soft/80 leading-relaxed mb-4">
                  Everything you need to know about attendance credits for hackathons, inter-university competitions, and student council obligations.
                </p>
              </div>
              <button
                onClick={() => onLaunchService('od-approval')}
                className="w-full py-2 bg-kl-gold text-kl-maroon-dark text-xs font-bold rounded-lg hover:brightness-110 transition-colors flex items-center justify-center gap-1.5"
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
