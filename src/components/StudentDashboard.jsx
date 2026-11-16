import React, { useState } from 'react';
import { 
  KLUUniversityCrest, 
  CouncilBadge 
} from './Crest';
import { 
  LayoutDashboard, 
  FileText, 
  Clock, 
  Sparkles, 
  LifeBuoy, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Calendar, 
  Plus, 
  ArrowRight, 
  Download, 
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function StudentDashboard({ 
  applications, 
  onExploreProcesses, 
  onOpenGrievance, 
  onBackHome 
}) {
  const [activeTab, setActiveTab] = useState('applications'); // 'applications' | 'clubs' | 'passes' | 'profile'
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredApps = applications.filter(app => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'approved') return app.status.toLowerCase().includes('approved');
    if (filterStatus === 'progress') return app.status.toLowerCase().includes('progress');
    if (filterStatus === 'review') return app.status.toLowerCase().includes('review');
    return true;
  });

  return (
    <div className="min-h-screen bg-kl-ivory flex flex-col md:flex-row">
      
      {/* Deep Maroon Sidebar */}
      <aside className="w-full md:w-64 bg-kl-maroon-dark text-kl-warm-white flex-shrink-0 border-r border-kl-gold/30 flex flex-col justify-between">
        <div>
          {/* Sidebar Header */}
          <div className="p-6 border-b border-kl-gold/20 flex items-center gap-3">
            <KLUUniversityCrest className="w-10 h-10" variant="gold" />
            <div>
              <span className="font-display font-bold text-lg text-kl-warm-white block leading-tight">
                SAMVAD <span className="text-kl-gold">360</span>
              </span>
              <span className="text-[10px] text-kl-gold-soft uppercase tracking-wider font-semibold">
                Student Self-Service
              </span>
            </div>
          </div>

          {/* Student Mini Profile */}
          <div className="p-5 border-b border-kl-gold/15 bg-kl-maroon/60">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-kl-gold text-kl-maroon-dark font-display font-bold text-sm flex items-center justify-center border border-kl-gold-soft">
                VT
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-bold text-kl-warm-white block truncate">
                  K. Varun Teja
                </span>
                <span className="text-[11px] font-mono text-kl-gold block truncate">
                  2300031900
                </span>
              </div>
            </div>
            <div className="text-[10px] text-kl-ivory/70 space-y-0.5">
              <p>B.Tech CSE • Sem 6</p>
              <p className="text-kl-gold-soft">Green Fields Campus, Vaddeswaram</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {[
              { id: 'applications', label: 'My Applications', icon: FileText, count: applications.length },
              { id: 'clubs', label: 'My SAC Clubs', icon: Sparkles, count: 2 },
              { id: 'passes', label: 'Event Passes', icon: Calendar, count: 1 },
              { id: 'profile', label: 'Academic Standing', icon: Award }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-kl-gold text-kl-maroon-dark font-bold shadow-gold-subtle'
                      : 'text-kl-ivory/80 hover:bg-kl-maroon hover:text-kl-gold'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-kl-maroon text-kl-gold' : 'bg-kl-maroon-royal text-kl-gold-soft'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-kl-gold/20 space-y-2">
          <button
            onClick={onOpenGrievance}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-kl-maroon-royal border border-kl-gold/30 text-kl-gold text-xs font-bold hover:bg-kl-maroon transition-colors"
          >
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>Escalate to Ombudsman</span>
          </button>

          <button
            onClick={onBackHome}
            className="w-full text-center text-[11px] text-kl-gold-soft/70 hover:text-kl-warm-white py-1 block"
          >
            ← Back to Public Gateway
          </button>
        </div>
      </aside>

      {/* Main Content Area (Warm White & Clean) */}
      <main className="flex-1 bg-kl-warm-white p-6 sm:p-8 overflow-y-auto">
        
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-kl-gold/25 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-kl-gold-dark uppercase tracking-widest mb-1">
              <CouncilBadge className="w-4 h-4" />
              <span>Student Service Desk</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-kl-maroon-dark">
              Student Application Tracker
            </h1>
            <p className="text-xs sm:text-sm text-kl-muted-grey mt-0.5">
              Live status and resolution timelines for all requests registered under your ID.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExploreProcesses}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-kl-gold to-kl-gold-dark text-kl-maroon-dark font-extrabold text-xs rounded-xl shadow-gold-subtle hover:brightness-105 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>New University Request</span>
            </button>
          </div>
        </div>

        {/* KPI Mini Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-kl-ivory p-4 rounded-xl border border-kl-gold/30 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-kl-muted-grey uppercase block">Total Requests</span>
              <span className="text-2xl font-display font-black text-kl-maroon-dark">{applications.length}</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-kl-maroon/10 text-kl-maroon flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-kl-ivory p-4 rounded-xl border border-kl-gold/30 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-kl-muted-grey uppercase block">In Active Routing</span>
              <span className="text-2xl font-display font-black text-amber-700">
                {applications.filter(a => a.status !== 'Approved').length}
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-kl-ivory p-4 rounded-xl border border-kl-gold/30 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-kl-muted-grey uppercase block">Completed & Approved</span>
              <span className="text-2xl font-display font-black text-emerald-700">
                {applications.filter(a => a.status === 'Approved').length}
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tab 1: Live Applications Table */}
        {activeTab === 'applications' && (
          <div className="space-y-4">
            
            {/* Filter pills */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-kl-muted-grey">Filter:</span>
                {[
                  { id: 'all', label: 'All Requests' },
                  { id: 'progress', label: 'In Progress' },
                  { id: 'review', label: 'Under Review' },
                  { id: 'approved', label: 'Approved' }
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setFilterStatus(f.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      filterStatus === f.id
                        ? 'bg-kl-maroon text-kl-gold'
                        : 'bg-kl-light-beige text-kl-charcoal hover:bg-kl-gold/20'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="bg-kl-warm-white rounded-2xl border border-kl-gold/30 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-kl-light-beige/70 text-kl-maroon uppercase tracking-wider font-bold border-b border-kl-gold/20">
                    <tr>
                      <th className="p-4">Tracking Token</th>
                      <th className="p-4">Process / Petition</th>
                      <th className="p-4">Department</th>
                      <th className="p-4">Current Stage</th>
                      <th className="p-4">Turnaround SLA</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredApps.map((app) => (
                      <tr key={app.id} className="hover:bg-kl-ivory/60 transition-colors">
                        <td className="p-4 font-mono font-bold text-kl-maroon">
                          {app.id}
                        </td>
                        <td className="p-4 font-bold text-kl-charcoal">
                          {app.processTitle}
                          <span className="block text-[11px] font-normal text-kl-muted-grey mt-0.5">
                            Applied: {app.appliedDate}
                          </span>
                        </td>
                        <td className="p-4 text-kl-charcoal">
                          {app.department}
                        </td>
                        <td className="p-4 font-medium text-kl-charcoal">
                          {app.currentStage}
                        </td>
                        <td className="p-4 text-kl-muted-grey">
                          {app.slaRemaining}
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            app.status === 'Approved'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : app.status === 'Under Review'
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-blue-100 text-blue-900 border border-blue-300'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Clubs */}
        {activeTab === 'clubs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-kl-ivory p-6 rounded-2xl border border-kl-gold/30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-kl-gold-dark block mb-1">
                Technology Vertical
              </span>
              <h3 className="text-lg font-bold text-kl-maroon-dark mb-1">Focus Club</h3>
              <p className="text-xs text-kl-muted-grey mb-4">
                Active Member • Web Architecture Team • Joined August 2025
              </p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-kl-gold/20">
                <span className="text-emerald-700 font-bold">● Active Standing</span>
                <span className="text-kl-maroon font-semibold">Next Meet: Saturday 3 PM</span>
              </div>
            </div>

            <div className="bg-kl-ivory p-6 rounded-2xl border border-kl-gold/30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-kl-gold-dark block mb-1">
                Technology Vertical
              </span>
              <h3 className="text-lg font-bold text-kl-maroon-dark mb-1">KLU Robotics Club</h3>
              <p className="text-xs text-kl-muted-grey mb-4">
                Drone Systems Squad • Joined September 2025
              </p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-kl-gold/20">
                <span className="text-emerald-700 font-bold">● Active Standing</span>
                <span className="text-kl-maroon font-semibold">Next Meet: Wednesday 4 PM</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Passes */}
        {activeTab === 'passes' && (
          <div className="max-w-md bg-kl-ivory p-6 rounded-2xl border-2 border-dashed border-kl-gold">
            <div className="flex items-center justify-between border-b border-kl-gold/20 pb-3 mb-3">
              <span className="text-xs font-bold text-kl-maroon uppercase">SAMSKRUTHI 2026</span>
              <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                DELEGATE ACCESS
              </span>
            </div>
            <p className="text-xs text-kl-charcoal font-semibold mb-1">
              National Cultural Fest • All-Arena Delegate Pass
            </p>
            <p className="text-xs text-kl-muted-grey mb-3">
              K. Varun Teja (2300031900) • Open Air Theatre
            </p>
            <div className="p-3 bg-white rounded-lg border border-kl-gold/30 text-center font-mono font-bold text-kl-maroon text-sm">
              SAC-EVT-01-9481
            </div>
          </div>
        )}

        {/* Tab 4: Profile Standing */}
        {activeTab === 'profile' && (
          <div className="bg-kl-ivory p-6 rounded-2xl border border-kl-gold/30 max-w-lg space-y-4">
            <h3 className="text-base font-bold text-kl-maroon-dark">Official Academic Standing</h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-kl-gold/20">
                <span className="text-kl-muted-grey block">Cumulative CGPA</span>
                <span className="text-lg font-bold text-emerald-700">9.24 / 10.0</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-kl-gold/20">
                <span className="text-kl-muted-grey block">Biometric Attendance</span>
                <span className="text-lg font-bold text-kl-maroon">88.6%</span>
              </div>
            </div>
            <p className="text-xs text-kl-muted-grey">
              Eligible for all university examinations, merit scholarships, and outstation hackathon OD sanctions.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}
