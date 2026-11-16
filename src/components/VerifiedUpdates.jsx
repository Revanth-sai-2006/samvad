import React, { useState } from 'react';
import { 
  Bell, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  ExternalLink, 
  Building2,
  FileText
} from 'lucide-react';
import { VERIFIED_UPDATES } from '../data/portalData';
import NoticeModal from './NoticeModal';

export default function VerifiedUpdates() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  return (
    <section className="py-16 bg-kl-ivory border-b border-kl-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-kl-gold/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-kl-maroon mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-kl-gold-dark" />
              <span>Official University Communications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-kl-maroon-dark">
              Latest Verified Updates & Council Communiqués
            </h2>
            <p className="text-sm text-kl-muted-grey mt-1">
              Statutory circulars, academic notifications, and Student Council resolutions.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Digital Registry Authenticated</span>
          </div>
        </div>

        {/* Updates List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_UPDATES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNotice(item)}
              className="bg-kl-warm-white rounded-2xl p-6 border border-kl-gold/30 hover:border-kl-gold hover:shadow-premium transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold bg-kl-light-beige text-kl-maroon px-2 py-0.5 rounded border border-kl-gold/20">
                    {item.refNo}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-kl-maroon text-kl-gold px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-kl-charcoal group-hover:text-kl-maroon transition-colors line-clamp-2 mb-2 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-kl-muted-grey mb-3">
                  <Building2 className="w-3.5 h-3.5 text-kl-maroon shrink-0" />
                  <span className="line-clamp-1">{item.department}</span>
                </div>

                <p className="text-xs text-kl-charcoal/80 line-clamp-3 leading-relaxed bg-kl-ivory/60 p-3 rounded-lg border border-kl-gold/15">
                  {item.summary}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-kl-gold/15 flex items-center justify-between text-xs font-semibold text-kl-maroon">
                <div className="flex items-center gap-1.5 text-kl-muted-grey">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-1 group-hover:text-kl-gold-dark transition-colors font-bold">
                  <span>Read Full Memo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Render Notice Modal */}
      {selectedNotice && (
        <NoticeModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}
    </section>
  );
}
