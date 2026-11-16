import React from 'react';
import { 
  KLUUniversityCrest, 
  CouncilBadge 
} from './Crest';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/portalData';

export default function Footer({ onNavigate, onOpenGrievance }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-kl-maroon-dark text-kl-ivory border-t-2 border-kl-gold/40 relative">
      
      {/* Top Gold Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-kl-gold to-transparent" />

      {/* Emergency Helpline Bar */}
      <div className="bg-kl-maroon-subtle/90 border-b border-kl-gold/15 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-kl-gold">
            <ShieldCheck className="w-4 h-4 text-kl-gold" />
            <span className="font-bold uppercase tracking-wider">Campus Emergency & Safety Helplines:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-kl-gold-soft">
            <span>Anti-Ragging Squad (24x7): <strong className="text-kl-warm-white">1800-425-4566</strong></span>
            <span>Women's Forum Cell: <strong className="text-kl-warm-white">+91 8645 350200</strong></span>
            <span>Campus Health Center: <strong className="text-kl-warm-white">Ext: 1108</strong></span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: University & Council Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <KLUUniversityCrest className="w-12 h-12" variant="gold" />
              <div>
                <span className="font-display font-extrabold text-2xl text-kl-warm-white tracking-wide block">
                  SAMVAD <span className="text-kl-gold">360</span>
                </span>
                <span className="text-[11px] font-semibold text-kl-gold-soft uppercase tracking-widest block">
                  KL University Student Council
                </span>
              </div>
            </div>

            <p className="text-xs text-kl-gold-soft/80 leading-relaxed pr-6">
              The official, unified digital governance portal of Koneru Lakshmaiah Education Foundation (Deemed to be University). Designed to uphold student leadership, procedural transparency, and institutional excellence.
            </p>

            <div className="pt-2 text-[11px] text-kl-ivory/70 space-y-1">
              <p className="font-semibold text-kl-gold">
                ★ NAAC A++ Accredited (3.57 CGPA) • Category-I Autonomy by UGC
              </p>
              <p>NIRF Ranked Among India's Top 35 Universities</p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-kl-gold mb-4 border-b border-kl-gold/20 pb-1">
              Portal Navigation
            </h4>
            <ul className="space-y-2 text-xs text-kl-ivory/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-kl-gold transition-colors">
                  Home Gateway
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('processes')} className="hover:text-kl-gold transition-colors">
                  Explore University Processes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sac')} className="hover:text-kl-gold transition-colors">
                  Student Activity Center (SAC)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('clubs')} className="hover:text-kl-gold transition-colors">
                  Clubs & Domains
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('directory')} className="hover:text-kl-gold transition-colors">
                  Official Directory & Deans
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Student Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-kl-gold mb-4 border-b border-kl-gold/20 pb-1">
              Student Voice & Redressal
            </h4>
            <ul className="space-y-2 text-xs text-kl-ivory/80">
              <li>
                <button onClick={onOpenGrievance} className="hover:text-kl-gold transition-colors flex items-center gap-1 text-kl-gold font-semibold">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  File SAMVAD Grievance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('student-dashboard')} className="hover:text-kl-gold transition-colors">
                  Student Application Tracker
                </button>
              </li>
              <li>
                <span className="text-kl-ivory/60">SLA Accountability Guarantee</span>
              </li>
              <li>
                <span className="text-kl-ivory/60">Zero Retaliation Protocol</span>
              </li>
              <li>
                <span className="text-kl-ivory/60">UN SDG 16 Commitment</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Campuses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-kl-gold mb-4 border-b border-kl-gold/20 pb-1">
              University Campuses
            </h4>
            <div className="space-y-3 text-xs text-kl-ivory/80">
              <div>
                <strong className="text-kl-gold block">Green Fields Campus (AP)</strong>
                <p className="text-[11px] text-kl-gold-soft/70">
                  Vaddeswaram, Guntur District, Near Vijayawada - 522302
                </p>
              </div>
              <div>
                <strong className="text-kl-gold block">Hyderabad Campus (TS)</strong>
                <p className="text-[11px] text-kl-gold-soft/70">
                  Aziznagar, Moinabad Road, Hyderabad - 500075
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Council Credits */}
        <div className="mt-12 pt-8 border-t border-kl-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-kl-gold-soft/70">
          <p>
            © {new Date().getFullYear()} Koneru Lakshmaiah Education Foundation. All Rights Reserved. Maintained by KL University Student Council Digital Transformation Team.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-kl-maroon rounded-lg text-kl-gold hover:text-kl-warm-white border border-kl-gold/30 hover:border-kl-gold transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
