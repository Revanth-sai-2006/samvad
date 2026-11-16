import React from 'react';
import { 
  CalendarCheck, 
  FileBadge, 
  Award, 
  Home, 
  Sparkles, 
  ShieldAlert, 
  FileText, 
  CreditCard,
  ArrowUpRight,
  Clock,
  Layers
} from 'lucide-react';
import { QUICK_SERVICES } from '../data/portalData';

const iconMap = {
  CalendarCheck,
  FileBadge,
  Award,
  Home,
  Sparkles,
  ShieldAlert,
  FileText,
  CreditCard
};

export default function QuickServices({ onLaunchService }) {
  return (
    <section className="py-16 bg-kl-ivory border-b border-kl-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-kl-gold/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-kl-maroon mb-1">
              <span className="w-2 h-2 rounded-full bg-kl-gold" />
              Direct Student Gateway
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-kl-maroon-dark">
              Frequently Accessed Services
            </h2>
            <p className="text-sm text-kl-muted-grey mt-1">
              Initiate official university procedures with guaranteed SLA tracking and verified routing.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-semibold text-kl-maroon bg-kl-gold/15 px-3 py-1.5 rounded-lg border border-kl-gold/30">
            <Clock className="w-3.5 h-3.5 text-kl-gold-dark" />
            <span>Real-time digital status tracking enabled</span>
          </div>
        </div>

        {/* Quick Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {QUICK_SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Layers;
            return (
              <div
                key={service.id}
                onClick={() => onLaunchService(service.id)}
                className="group relative bg-kl-warm-white rounded-xl p-5 border border-kl-gold/30 hover:border-kl-gold hover:shadow-premium transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                {/* Top Corner Badge for Popular Services */}
                {service.popular && (
                  <span className="absolute -top-2.5 right-4 bg-kl-maroon text-kl-gold text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-kl-gold/40 shadow-xs">
                    High Demand
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-kl-maroon/10 border border-kl-maroon/20 flex items-center justify-center text-kl-maroon group-hover:bg-kl-maroon group-hover:text-kl-gold transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-kl-maroon-royal bg-kl-light-beige px-2 py-1 rounded border border-kl-gold/20 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-kl-gold-dark" />
                      {service.sla}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-kl-gold-dark">
                    {service.category}
                  </span>
                  
                  <h3 className="text-base font-bold text-kl-charcoal group-hover:text-kl-maroon transition-colors mt-0.5 mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-kl-muted-grey line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-kl-gold/15 flex items-center justify-between text-xs font-bold text-kl-maroon group-hover:text-kl-gold-dark">
                  <span>{service.actionText}</span>
                  <div className="w-6 h-6 rounded-full bg-kl-light-beige flex items-center justify-center group-hover:bg-kl-maroon group-hover:text-kl-gold transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
