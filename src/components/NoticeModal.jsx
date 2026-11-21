import React from 'react';
import { X, ShieldCheck, Printer, Calendar, Building, FileText, CheckCircle } from 'lucide-react';
import { KLUUniversityCrest, CouncilBadge } from './Crest';

export default function NoticeModal({ notice, onClose }) {
  if (!notice) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-kl-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        className="bg-kl-warm-white w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-kl-gold/40 overflow-hidden animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#42101f] via-[#5a0f2e] to-[#42101f] text-white p-5 border-b border-[#c9a24b]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CouncilBadge className="w-5 h-5 text-kl-gold" />
            <span className="text-xs font-bold text-kl-gold uppercase tracking-wider">
              Official University Notice
            </span>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close notice window"
            className="w-11 h-11 flex items-center justify-center text-[#e6cf8f] hover:text-white bg-[#2a0614]/70 hover:bg-[#2a0614] rounded-full border border-[#c9a24b]/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Letterhead Paper View */}
        <div className="p-8 bg-kl-warm-white">
          {/* Institutional Letterhead */}
          <div className="text-center pb-6 border-b-2 border-kl-maroon/20 mb-6">
            <KLUUniversityCrest className="w-14 h-14 mx-auto mb-2" variant="gold" />
            <h3 className="font-display font-bold text-lg text-kl-maroon-dark uppercase tracking-wide">
              KL Deemed to be University
            </h3>
            <p className="text-[11px] text-kl-muted-grey font-semibold">
              Koneru Lakshmaiah Education Foundation • Green Fields, Vaddeswaram, Guntur (AP)
            </p>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-0.5 rounded bg-kl-light-beige border border-kl-gold/30 text-[10px] font-mono text-kl-maroon font-bold">
              REF NO: {notice.refNo}
            </div>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-between text-xs text-kl-charcoal/80 mb-6 bg-kl-ivory p-3 rounded-lg border border-kl-gold/20">
            <div>
              <span className="text-kl-muted-grey block text-[10px]">ISSUING AUTHORITY</span>
              <strong className="text-kl-maroon">{notice.department}</strong>
            </div>
            <div>
              <span className="text-kl-muted-grey block text-[10px]">DATE OF PUBLICATION</span>
              <strong className="text-kl-charcoal">{notice.date}</strong>
            </div>
            <div>
              <span className="text-kl-muted-grey block text-[10px]">STATUS</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified & Enacted
              </span>
            </div>
          </div>

          {/* Subject & Body */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-display font-bold text-kl-maroon-dark leading-snug">
              SUBJECT: {notice.title}
            </h4>

            <p className="text-xs sm:text-sm text-kl-charcoal leading-relaxed">
              {notice.summary}
            </p>

            <div className="p-4 bg-kl-light-beige/60 rounded-xl border border-kl-gold/25 text-xs text-kl-charcoal space-y-2 mt-4">
              <span className="font-bold text-kl-maroon block">Directive Instructions:</span>
              <p className="text-[11px] text-kl-muted-grey">
                1. All departments, faculty in-charges, and student council domain heads are requested to disseminate this communiqué immediately.
              </p>
              <p className="text-[11px] text-kl-muted-grey">
                2. Non-compliance or unauthorized deviation from this standard procedure will be referred to the Executive Council.
              </p>
            </div>
          </div>

          {/* Signatory & Digital Stamp */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Review and source approval pending</span>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-kl-light-beige text-kl-maroon text-xs font-bold hover:bg-kl-gold hover:text-kl-maroon-dark transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Official Memo</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-kl-light-beige/80 px-6 py-3 border-t border-kl-gold/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-kl-maroon text-kl-gold text-xs font-bold rounded-lg hover:bg-kl-maroon-dark"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
