import React from 'react';
import { 
  Building, 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { OFFICIAL_DIRECTORY } from '../data/portalData';

export default function OfficialDirectory() {
  return (
    <section id="directory" className="py-16 bg-kl-warm-white border-b border-kl-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kl-maroon/10 border border-kl-gold/30 text-kl-maroon text-xs font-bold uppercase tracking-widest mb-3">
            <Building className="w-3.5 h-3.5 text-kl-gold-dark" />
            <span>Institutional Leadership & Deans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-kl-maroon-dark">
            Official Information Directory
          </h2>

          <div className="gold-separator w-24 mx-auto my-3" />

          <p className="text-sm sm:text-base text-kl-charcoal/80 leading-relaxed">
            Contact numbers, physical office suites, and designated administrative authorities across KL University campuses.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_DIRECTORY.map((contact, idx) => (
            <div
              key={idx}
              className="bg-kl-ivory/80 rounded-2xl p-6 border border-kl-gold/30 hover:border-kl-gold hover:shadow-premium transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-kl-maroon bg-kl-warm-white px-2.5 py-1 rounded border border-kl-gold/25 inline-block mb-3">
                  {contact.title}
                </span>

                <h3 className="text-lg font-display font-bold text-kl-charcoal mb-3">
                  {contact.name}
                </h3>

                <div className="space-y-2.5 text-xs text-kl-charcoal/90">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-kl-maroon shrink-0 mt-0.5" />
                    <span>{contact.office}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-kl-gold-dark shrink-0" />
                    <span className="font-mono text-kl-maroon select-all">{contact.email}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-kl-charcoal">{contact.extension}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-kl-muted-grey shrink-0" />
                    <span className="text-kl-muted-grey">{contact.hours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-kl-gold/20 flex items-center justify-between text-[11px] font-semibold text-kl-maroon">
                <span>Official Channel</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
