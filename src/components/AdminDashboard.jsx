import React, { useState } from 'react';
import { 
  KLUUniversityCrest, 
  CouncilBadge 
} from './Crest';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Building2, 
  Filter, 
  Search, 
  Check, 
  RotateCcw, 
  ArrowUpRight, 
  ShieldAlert,
  ArrowRight,
  Sparkles,
  BarChart3,
  FileCheck
} from 'lucide-react';
import { SAMPLE_ADMIN_KPI } from '../data/portalData';

export default function AdminDashboard({ onBackHome }) {
  const [activeTab, setActiveTab] = useState('queue'); // 'queue' | 'analytics' | 'departments'
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('all');

  const [queueItems, setQueueItems] = useState([
    {
      id: "KLU-PROC-2026-9041",
      title: "On-Duty (OD) Attendance Approval (Hackathon Delegation)",
      department: "Student Activity Center",
      applicant: "T. Harsha (2300031120)",
      priority: "Normal",
      appliedDate: "Today, 10:14 AM",
      slaHoursLeft: 34,
      status: "Pending Action"
    },
    {
      id: "KLU-GRIEV-2026-0814",
      title: "Hostel Block E Wi-Fi Latency during Placement Assessments",
      department: "Hostels & Residential",
      applicant: "Confidential Student Voice",
      priority: "High",
      appliedDate: "Yesterday, 04:30 PM",
      slaHoursLeft: 18,
      status: "Under Investigation"
    },
    {
      id: "KLU-PROC-2026-8994",
      title: "Bonafide Study Certificate for German Visa Processing",
      department: "Registrar Office",
      applicant: "N. Sai Rakesh (2200030512)",
      priority: "Normal",
      appliedDate: "Yesterday, 02:15 PM",
      slaHoursLeft: 8,
      status: "Verification Stage"
    },
    {
      id: "KLU-PROC-2026-8911",
      title: "Auditorium Booking & Audio-Visual Requisition (Samskruthi Promo)",
      department: "Student Activity Center",
      applicant: "Focus Club Lead (2300031900)",
      priority: "High",
      appliedDate: "15 Nov 2026",
      slaHoursLeft: 2,
      status: "Awaiting Dean Signature"
    },
    {
      id: "KLU-GRIEV-2026-0792",
      title: "Continuous Evaluation Marks Mismatch in Data Structures Course",
      department: "Academic Affairs",
      applicant: "P. Sneha (2400030219)",
      priority: "Urgent",
      appliedDate: "14 Nov 2026",
      slaHoursLeft: 12,
      status: "Panel Scrutiny"
    }
  ]);

  const handleAction = (id, newStatus) => {
    setQueueItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    }));
  };

  const filteredQueue = queueItems.filter(item => {
    const matchesDept = filterDept === 'all' || item.department.toLowerCase().includes(filterDept.toLowerCase());
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-kl-ivory flex flex-col md:flex-row">
      
      {/* Deep Maroon Sidebar */}
      <aside className="w-full md:w-64 bg-kl-maroon-dark text-kl-warm-white flex-shrink-0 border-r border-kl-gold/30 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="p-6 border-b border-kl-gold/20 flex items-center gap-3">
            <CouncilBadge className="w-10 h-10" />
            <div>
              <span className="font-display font-bold text-lg text-kl-warm-white block leading-tight">
                SAMVAD <span className="text-kl-gold">360</span>
              </span>
              <span className="text-[10px] text-kl-gold-soft uppercase tracking-wider font-semibold">
                Council Executive Console
              </span>
            </div>
          </div>

          {/* Admin Officer Profile */}
          <div className="p-5 border-b border-kl-gold/15 bg-kl-maroon/60">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-kl-gold text-kl-maroon-dark font-display font-bold text-sm flex items-center justify-center border border-kl-gold-soft">
                CO
              </div>
              <div>
                <span className="text-xs font-bold text-kl-warm-white block truncate">
                  Council Secretariat
                </span>
                <span className="text-[11px] font-mono text-kl-gold block">
                  KLEF-ADM-880
                </span>
              </div>
            </div>
            <p className="text-[10px] text-kl-ivory/70">
              Student Ombudsman & Dean Liaison Desk
            </p>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1.5">
            {[
              { id: 'queue', label: 'Actionable Inquiries', icon: FileCheck, count: queueItems.length },
              { id: 'analytics', label: 'SLA Analytics', icon: BarChart3 },
              { id: 'departments', label: 'Department Efficiency', icon: Building2 }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-kl-gold text-kl-maroon-dark font-bold shadow-gold-subtle'
                      : 'text-kl-ivory/80 hover:bg-kl-maroon hover:text-kl-gold'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== undefined && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-kl-maroon text-kl-gold' : 'bg-kl-maroon-royal text-kl-gold-soft'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-kl-gold/20">
          <button
            onClick={onBackHome}
            className="w-full text-center text-[11px] text-kl-gold-soft/70 hover:text-kl-warm-white py-1 block"
          >
            ← Exit to Public Portal
          </button>
        </div>
      </aside>

      {/* Main Administrative Content Area */}
      <main className="flex-1 bg-kl-warm-white p-6 sm:p-8 overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-kl-gold/25 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-kl-gold-dark uppercase tracking-widest mb-1">
              <Building2 className="w-4 h-4" />
              <span>Administrative Oversight & Ombudsman Workflow</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-kl-maroon-dark">
              Council Executive Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-kl-muted-grey mt-0.5">
              Review institutional petitions, enforce 72-hour SLAs, and validate departmental certifications.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              ERP Core Online
            </span>
          </div>
        </div>

        {/* Elegant KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="bg-kl-ivory p-4 rounded-xl border border-kl-gold/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-kl-muted-grey uppercase">Pending Petitions</span>
              <span className="text-xs font-bold text-kl-maroon bg-kl-gold/20 px-1.5 py-0.5 rounded">Real-time</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-black text-kl-maroon-dark">
                {queueItems.filter(i => i.status !== 'Approved' && i.status !== 'Resolved').length}
              </span>
              <span className="text-xs text-kl-muted-grey">active tickets</span>
            </div>
          </div>

          <div className="bg-kl-ivory p-4 rounded-xl border border-kl-gold/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-kl-muted-grey uppercase">Avg SLA Turnaround</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-black text-kl-charcoal">
                {SAMPLE_ADMIN_KPI.averageResolutionHrs}
              </span>
              <span className="text-xs text-emerald-700 font-semibold">Hours (Target: &lt;48h)</span>
            </div>
          </div>

          <div className="bg-kl-ivory p-4 rounded-xl border border-kl-gold/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-kl-muted-grey uppercase">SLA Compliance</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-black text-emerald-700">
                {SAMPLE_ADMIN_KPI.slaComplianceRate}
              </span>
              <span className="text-xs text-kl-muted-grey">Across All Deans</span>
            </div>
          </div>

          <div className="bg-kl-ivory p-4 rounded-xl border border-kl-gold/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-kl-muted-grey uppercase">Ombudsman Escalations</span>
              <AlertTriangle className="w-4 h-4 text-amber-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-black text-amber-700">
                {SAMPLE_ADMIN_KPI.activeGrievances}
              </span>
              <span className="text-xs text-amber-800 font-semibold">Protected Dockets</span>
            </div>
          </div>

        </div>

        {/* TAB 1: ACTIONABLE QUEUE */}
        {activeTab === 'queue' && (
          <div className="space-y-4">
            
            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-kl-ivory p-3.5 rounded-xl border border-kl-gold/30">
              <div className="relative w-full sm:w-80">
                <Search className="w-3.5 h-3.5 text-kl-maroon absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter queue by applicant, token, or title..."
                  className="w-full pl-9 pr-3 py-1.5 bg-white border border-kl-gold/40 rounded-lg text-xs text-kl-charcoal focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-semibold text-kl-muted-grey">Department:</span>
                <select
                  value={filterDept}
                  onChange={(e) => setFilterDept(e.target.value)}
                  className="text-xs p-1.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal"
                >
                  <option value="all">All Departments</option>
                  <option value="Student Activity">SAC</option>
                  <option value="Hostel">Hostels</option>
                  <option value="Registrar">Registrar</option>
                  <option value="Academic">Academics</option>
                </select>
              </div>
            </div>

            {/* Professional Administrative Table */}
            <div className="bg-kl-warm-white rounded-2xl border border-kl-gold/30 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-kl-light-beige/70 text-kl-maroon uppercase tracking-wider font-bold border-b border-kl-gold/20">
                    <tr>
                      <th className="p-4">Docket ID</th>
                      <th className="p-4">Subject & Purpose</th>
                      <th className="p-4">Applicant</th>
                      <th className="p-4">SLA Clock</th>
                      <th className="p-4">Current Status</th>
                      <th className="p-4 text-right">Executive Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredQueue.map((item) => (
                      <tr key={item.id} className="hover:bg-kl-ivory/60 transition-colors">
                        <td className="p-4 font-mono font-bold text-kl-maroon">
                          {item.id}
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-kl-charcoal block line-clamp-1">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-kl-muted-grey block mt-0.5">
                            {item.department} • {item.appliedDate}
                          </span>
                        </td>
                        <td className="p-4 text-kl-charcoal font-medium">
                          {item.applicant}
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1 font-semibold ${
                            item.slaHoursLeft < 10 ? 'text-red-600' : 'text-kl-charcoal'
                          }`}>
                            <Clock className="w-3.5 h-3.5" />
                            {item.slaHoursLeft}h remaining
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.status === 'Approved'
                              ? 'bg-emerald-100 text-emerald-800'
                              : item.status.includes('Dean')
                              ? 'bg-purple-100 text-purple-900'
                              : 'bg-amber-100 text-amber-900'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {item.status !== 'Approved' ? (
                              <>
                                <button
                                  onClick={() => handleAction(item.id, 'Approved')}
                                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded transition-colors"
                                  title="Validate & Approve"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={() => handleAction(item.id, 'Escalated to Dean')}
                                  className="px-2.5 py-1 bg-kl-maroon hover:bg-kl-maroon-dark text-kl-gold font-bold text-[11px] rounded transition-colors"
                                  title="Escalate to Dean"
                                >
                                  Escalate
                                </button>
                              </>
                            ) : (
                              <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> Endorsed
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ANALYTICS & CHARTS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-kl-ivory p-6 rounded-2xl border border-kl-gold/30">
              <h3 className="text-base font-bold text-kl-maroon-dark mb-1">
                Turnaround Efficiency by Department
              </h3>
              <p className="text-xs text-kl-muted-grey mb-6">
                Monthly average SLA fulfillment percentages against university benchmarks.
              </p>

              <div className="space-y-4">
                {SAMPLE_ADMIN_KPI.departmentStats.map((dept, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-kl-charcoal">
                      <span>{dept.name}</span>
                      <span className="text-emerald-700">{dept.compliance} Compliance ({dept.resolved} resolved)</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-kl-maroon to-kl-maroon-royal rounded-full"
                        style={{ width: dept.compliance }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DEPARTMENTS */}
        {activeTab === 'departments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAMPLE_ADMIN_KPI.departmentStats.map((dept, idx) => (
              <div key={idx} className="bg-kl-ivory p-5 rounded-2xl border border-kl-gold/30 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-kl-maroon-dark">{dept.name}</h4>
                  <div className="grid grid-cols-2 gap-3 my-3 text-xs">
                    <div className="p-2.5 bg-white rounded-lg border border-kl-gold/20">
                      <span className="text-kl-muted-grey block">Active Inquiries</span>
                      <span className="text-lg font-bold text-amber-700">{dept.pending}</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-kl-gold/20">
                      <span className="text-kl-muted-grey block">Resolved Year-to-Date</span>
                      <span className="text-lg font-bold text-emerald-700">{dept.resolved}</span>
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-kl-gold-dark font-semibold pt-2 border-t border-kl-gold/15">
                  Designated Officer: In Regular Oversight
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
