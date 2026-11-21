import React, { useState } from 'react';
import { 
  Building2, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Search, 
  FileText, 
  ArrowRight,
  ExternalLink,
  Bell,
  Scale,
  Award
} from 'lucide-react';
import { CouncilBadge } from './Crest';

export default function InstitutionalDashboard({ onOpenGrievance, onExploreProcesses }) {
  const [trackToken, setTrackToken] = useState('');
  const [trackResult, setTrackResult] = useState(null);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackToken.trim()) return;
    const token = trackToken.trim().toUpperCase();
    setTrackResult({
      token,
      status: "In Active Departmental Routing",
      stage: "Stage 2: Verification by Faculty Advisor & Dean",
      slaHours: "24 Hours Remaining",
      compliance: "Within Prescribed SLA"
    });
  };

  return (
    <section className="bg-kl-ivory py-10 border-b border-kl-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-kl-gold/20 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kl-maroon mb-1">
              <CouncilBadge className="w-4 h-4 text-kl-gold" />
              <span>Student Council Secretariat • Executive Desk</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-kl-maroon-dark">
              Institutional Governance & Administrative Overview
            </h2>
            <p className="text-xs sm:text-sm text-kl-muted-grey mt-0.5">
              Current Academic Year <strong>2026–2027</strong> • Real-time service request metrics and council communications.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Session Status: Active Administrative Session</span>
            </div>
          </div>
        </div>

        {/* 4 Consistent Institutional Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Service Request Overview (4 Cols) */}
          <div className="lg:col-span-4 bg-kl-warm-white rounded-xl p-5 border border-kl-gold/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-kl-gold/15">
                <span className="text-xs font-bold text-kl-maroon uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-kl-gold" />
                  Service Request Overview
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
Demonstration metric
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-kl-ivory rounded-lg border border-kl-gold/20">
                  <span className="text-[10px] text-kl-muted-grey uppercase font-bold block">Active In Routing</span>
                  <span className="text-2xl font-display font-black text-kl-maroon">42</span>
                  <span className="text-[10px] text-kl-muted-grey block mt-0.5">Average Turnaround: 28.4h</span>
                </div>

                <div className="p-3 bg-kl-ivory rounded-lg border border-kl-gold/20">
                  <span className="text-[10px] text-kl-muted-grey uppercase font-bold block">Resolved (2026)</span>
                  <span className="text-2xl font-display font-black text-emerald-700">2,410</span>
                  <span className="text-[10px] text-emerald-700 block mt-0.5">Synthetic pilot record</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-kl-charcoal/90 bg-kl-light-beige/50 p-3 rounded-lg border border-kl-gold/20 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold">Academic SOP Clearance:</span>
                  <strong className="text-emerald-700">98.2%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold">SAC & Club Approvals:</span>
                  <strong className="text-emerald-700">99.1%</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold">Hostel & Outing Gate Passes:</span>
                  <strong className="text-emerald-700">98.0%</strong>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-kl-gold/15 flex items-center justify-between text-xs font-semibold text-kl-maroon">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
Planned turnaround indicator
              </span>
              <button 
                onClick={onExploreProcesses}
                className="text-kl-gold-dark hover:underline font-bold"
              >
                View Catalog →
              </button>
            </div>
          </div>

          {/* Card 2: Important Announcements & Council Communiqués (4 Cols) */}
          <div className="lg:col-span-4 bg-kl-warm-white rounded-xl p-5 border border-kl-gold/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-kl-gold/15">
                <span className="text-xs font-bold text-kl-maroon uppercase tracking-wider flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-kl-gold" />
                  Administrative Updates
                </span>
                <span className="text-[10px] font-mono text-kl-muted-grey">
DEMO/SC/SEC/2026
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-kl-ivory rounded-lg border-l-4 border-l-kl-maroon border border-kl-gold/15">
                  <div className="flex items-center justify-between text-[10px] font-bold text-kl-gold-dark uppercase mb-1">
                    <span>Controller of Examinations</span>
                    <span>14 Nov 2026</span>
                  </div>
                  <h4 className="text-xs font-bold text-kl-charcoal leading-snug">
                    End-Semester Hall Ticket Clearance & Biometric Attendance Verification
                  </h4>
                  <p className="text-[11px] text-kl-muted-grey mt-0.5 line-clamp-2">
                    Admit cards available via SAMVAD 360 starting Dec 01. Complete fee & attendance clearance by Nov 28.
                  </p>
                </div>

                <div className="p-3 bg-kl-ivory rounded-lg border-l-4 border-l-kl-gold border border-kl-gold/15">
                  <div className="flex items-center justify-between text-[10px] font-bold text-kl-gold-dark uppercase mb-1">
                    <span>Student Council Secretariat</span>
                    <span>11 Nov 2026</span>
                  </div>
                  <h4 className="text-xs font-bold text-kl-charcoal leading-snug">
                    Resolution Passed: 24x7 Central Library & Reading Room Operations
                  </h4>
                  <p className="text-[11px] text-kl-muted-grey mt-0.5 line-clamp-2">
                    Automated biometric access enabled throughout the examination month with security supervision.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-kl-gold/15 flex items-center justify-between text-xs text-kl-muted-grey">
              <span>Source and review status shown here</span>
              <span className="text-emerald-700 font-bold">● Official Record</span>
            </div>
          </div>

          {/* Card 3: Quick Docket Status Lookup (4 Cols) */}
          <div className="lg:col-span-4 bg-kl-warm-white rounded-xl p-5 border border-kl-gold/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-kl-gold/15">
                <span className="text-xs font-bold text-kl-maroon uppercase tracking-wider flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-kl-gold" />
                  Application & Docket Tracker
                </span>
                <span className="text-[10px] text-kl-muted-grey font-mono">
                  SOP Real-time
                </span>
              </div>

              <p className="text-xs text-kl-charcoal mb-3">
                Track any university request or ombudsman grievance in the ERP routing pipeline:
              </p>

              <form onSubmit={handleTrackSubmit} className="space-y-2 mb-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={trackToken}
                    onChange={(e) => setTrackToken(e.target.value)}
                    placeholder="Enter Token ID (e.g. KLU-PROC-8841)"
                    className="w-full text-xs font-mono px-3 py-2 bg-kl-light-beige border border-kl-gold/40 rounded-lg text-kl-charcoal focus:outline-none focus:ring-1 focus:ring-kl-maroon"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-kl-maroon text-kl-gold font-bold text-xs rounded-lg hover:bg-kl-maroon-dark transition-colors shrink-0"
                  >
                    Track
                  </button>
                </div>
              </form>

              {trackResult ? (
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs animate-in fade-in">
                  <div className="flex items-center justify-between font-bold text-emerald-900 mb-1">
                    <span className="font-mono">{trackResult.token}</span>
                    <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-800">
                      {trackResult.compliance}
                    </span>
                  </div>
                  <p className="text-emerald-800 text-[11px] mb-1">
                    {trackResult.stage}
                  </p>
                  <span className="text-[10px] text-emerald-700 font-semibold block">
                    Turnaround: {trackResult.slaHours}
                  </span>
                </div>
              ) : (
                <div className="p-3 bg-kl-ivory rounded-lg border border-kl-gold/20 text-xs text-kl-muted-grey">
                  Sample Tokens: <strong className="text-kl-maroon font-mono">KLU-PROC-2026-8841</strong> (OD Pass) or <strong className="text-kl-maroon font-mono">KLU-GRIEV-2026-0419</strong>.
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-kl-gold/15 flex items-center justify-between text-xs">
              <span className="text-kl-muted-grey">Need escalation?</span>
              <button
                onClick={onOpenGrievance}
                className="text-kl-maroon font-bold hover:text-kl-gold-dark transition-colors"
              >
                Ombudsman Desk →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
