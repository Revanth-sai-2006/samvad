import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  FileCheck, 
  Clock,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { SDG16_METRICS } from '../data/portalData';
import { CouncilBadge } from './Crest';

export default function SDG16Commitment({ onOpenGrievance }) {
  return (
    <section className="py-20 bg-architectural-pattern bg-maroon-pattern text-kl-warm-white relative overflow-hidden border-b-2 border-kl-gold/40">
      
      {/* Decorative Geometry */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-kl-gold to-transparent opacity-80" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-kl-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kl-maroon-dark border border-kl-gold/40 text-kl-gold text-xs font-bold uppercase tracking-widest mb-3 shadow-gold-subtle">
            <Scale className="w-4 h-4 text-kl-gold" />
            <span>Institutional Governance Benchmark</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-kl-warm-white tracking-tight">
            United Nations SDG 16 Commitment
          </h2>

          <div className="gold-separator w-32 mx-auto my-4" />

          <p className="text-base sm:text-lg text-kl-gold-soft/90 leading-relaxed font-normal">
            <strong>Peace, Justice & Strong Institutions</strong> — KL University upholds verifiable transparency, zero retaliation protection, and democratic student representation.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          
          <div className="bg-kl-maroon-dark/90 p-5 rounded-2xl border border-kl-gold/30 text-center backdrop-blur-sm">
            <span className="text-[11px] font-bold text-kl-gold uppercase tracking-wider block mb-1">
              Transparency Score
            </span>
            <span className="font-display font-black text-3xl sm:text-4xl text-kl-warm-white">
              {SDG16_METRICS.transparencyScore}
            </span>
            <span className="text-xs text-kl-gold-soft/70 block mt-1">Verified Audit Compliance</span>
          </div>

          <div className="bg-kl-maroon-dark/90 p-5 rounded-2xl border border-kl-gold/30 text-center backdrop-blur-sm">
            <span className="text-[11px] font-bold text-kl-gold uppercase tracking-wider block mb-1">
              Average SLA Resolution
            </span>
            <span className="font-display font-black text-3xl sm:text-4xl text-kl-warm-white">
              {SDG16_METRICS.averageSlaResolution}
            </span>
            <span className="text-xs text-kl-gold-soft/70 block mt-1">Grievance Turnaround</span>
          </div>

          <div className="bg-kl-maroon-dark/90 p-5 rounded-2xl border border-kl-gold/30 text-center backdrop-blur-sm">
            <span className="text-[11px] font-bold text-kl-gold uppercase tracking-wider block mb-1">
              Resolved Cases (2026)
            </span>
            <span className="font-display font-black text-3xl sm:text-4xl text-kl-warm-white">
              {SDG16_METRICS.casesResolvedThisYear}
            </span>
            <span className="text-xs text-kl-gold-soft/70 block mt-1">Traceable Dockets (Pilot Target)</span>
          </div>

          <div className="bg-kl-maroon-dark/90 p-5 rounded-2xl border border-kl-gold/30 text-center backdrop-blur-sm">
            <span className="text-[11px] font-bold text-kl-gold uppercase tracking-wider block mb-1">
              Student Representation
            </span>
            <span className="font-display font-black text-3xl sm:text-4xl text-kl-warm-white">
              1 : 60
            </span>
            <span className="text-xs text-kl-gold-soft/70 block mt-1">Council Delegates per Batch</span>
          </div>

        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SDG16_METRICS.commitments.map((com, idx) => (
            <div 
              key={idx}
              className="bg-kl-maroon-dark/80 rounded-2xl p-6 border-2 border-kl-gold/35 flex flex-col justify-between hover:border-kl-gold transition-colors backdrop-blur-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-kl-maroon text-kl-gold flex items-center justify-center mb-4 border border-kl-gold/40">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-kl-warm-white mb-2">
                  {com.title}
                </h3>
                <p className="text-xs text-kl-gold-soft/80 leading-relaxed">
                  {com.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-kl-gold/20 flex items-center justify-between text-[11px] text-kl-gold">
                <span>Institutional Covenant</span>
                <span className="font-bold">Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenGrievance}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-kl-gold to-kl-gold-dark text-kl-maroon-dark font-extrabold text-sm rounded-xl shadow-gold-subtle hover:brightness-110 active:scale-95 transition-all"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Exercise Your Voice • File SAMVAD Grievance</span>
          </button>
        </div>

      </div>
    </section>
  );
}
