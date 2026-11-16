import React from 'react';
import { 
  Search, 
  FileCheck2, 
  GitPullRequest, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discover & Check SOPs",
      subtitle: "Transparent Prerequisites",
      desc: "Search over 45+ institutional procedures with clearly published checklists, eligibility criteria, and regulatory deadlines.",
      icon: Search
    },
    {
      num: "02",
      title: "Submit Digital Requisition",
      subtitle: "Verified Documentation",
      desc: "Fill standardized online forms, attach event brochures or payment receipts, and authenticate via your student single sign-on.",
      icon: FileCheck2
    },
    {
      num: "03",
      title: "Multi-Tier ERP Routing",
      subtitle: "Guaranteed Turnaround SLA",
      desc: "Requests are auto-dispatched to faculty advisors, departmental heads, and respective university deans with real-time escalation timers.",
      icon: GitPullRequest
    },
    {
      num: "04",
      title: "Cryptographic Issuance",
      subtitle: "Digital Seals & QR Verification",
      desc: "Download verified hall tickets, certificates with tamper-proof QR codes, or verify attendance credit directly on your student portal.",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 bg-kl-ivory border-b border-kl-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kl-maroon/10 border border-kl-gold/30 text-kl-maroon text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-kl-gold-dark" />
            <span>Institutional Governance Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-kl-maroon-dark">
            How SAMVAD 360 Works
          </h2>

          <div className="gold-separator w-24 mx-auto my-3" />

          <p className="text-sm sm:text-base text-kl-charcoal/80 leading-relaxed">
            Eliminating bureaucracy, queue delays, and paper trails through a structured, student-first digital governance framework.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((st, index) => {
            const Icon = st.icon;
            return (
              <div 
                key={st.num}
                className="bg-kl-warm-white rounded-2xl p-6 border border-kl-gold/30 hover:border-kl-gold hover:shadow-premium transition-all duration-200 relative group flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-kl-maroon/10 border border-kl-maroon/20 text-kl-maroon flex items-center justify-center group-hover:bg-kl-maroon group-hover:text-kl-gold transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-black text-2xl text-kl-gold/50 group-hover:text-kl-gold transition-colors">
                    {st.num}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-kl-gold-dark block mb-1">
                    {st.subtitle}
                  </span>
                  
                  <h3 className="text-lg font-bold text-kl-charcoal group-hover:text-kl-maroon transition-colors mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-kl-muted-grey leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-kl-gold/15 flex items-center gap-1.5 text-[11px] font-semibold text-kl-maroon">
                  <Clock className="w-3.5 h-3.5 text-kl-gold-dark" />
                  <span>Integrated with ERP & SAC Core</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-maroon-pattern text-kl-warm-white p-6 sm:p-8 rounded-2xl border-2 border-kl-gold/40 shadow-maroon-deep flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-kl-gold uppercase tracking-wider block mb-1">
              Need Direct Redressal or Escalation?
            </span>
            <h4 className="text-xl font-display font-bold text-kl-warm-white">
              Student Ombudsman & Confidential Grievance Line
            </h4>
            <p className="text-xs text-kl-gold-soft mt-1 max-w-xl">
              Any matter unsolved beyond its prescribed SLA is systematically escalated to the Dean of Student Affairs and University Ombudsman.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs text-kl-gold-soft hidden sm:block">72-Hour SLA Rule</span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
}
