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
  HeartHandshake, 
  ArrowUp,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onNavigate, onOpenGrievance }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c040d] text-[#f7f1e3] border-t-2 border-[#c9a24b]/40 relative">
      
      {/* Top Gold Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a24b] to-transparent" />

      {/* Emergency Helpline Strip */}
      <div className="bg-[#2a0614] border-b border-[#c9a24b]/20 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#c9a24b]">
            <ShieldCheck className="w-4 h-4 text-[#c9a24b]" />
            <span className="font-bold uppercase tracking-wider">Campus Emergency & Safety Helplines:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-[#e8dccb]">
            <span>Anti-Ragging Squad (24x7): <strong className="text-white">1800-425-4566</strong></span>
            <span>Women's Forum Cell: <strong className="text-white">+91 8645 350200</strong></span>
            <span>Campus Health Center: <strong className="text-white">Ext: 1108</strong></span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: University & Council Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <KLUUniversityCrest className="w-12 h-12" variant="gold" />
              <div>
                <span className="font-logo font-bold text-2xl text-white tracking-wide block">
                  SAMVAD <span className="text-[#c9a24b]">360</span>
                </span>
                <span className="text-[11px] font-semibold text-[#e6cf8f] uppercase tracking-widest block">
                  KL Deemed to be University
                </span>
              </div>
            </div>

            <p className="text-xs text-[#e8dccb] leading-relaxed pr-6">
              The official, unified student activity and governance portal of Koneru Lakshmaiah Education Foundation. 
              Fostering student leadership across 26 registered SAC clubs, verified procedures, and council representations.
            </p>

            <div className="pt-2 text-[11px] text-[#d9c9b8] space-y-1">
              <p className="font-semibold text-[#c9a24b]">
                ★ NAAC A++ Accredited (3.57 CGPA) • Category-I UGC Autonomy
              </p>
              <p>NIRF Ranked Among India's Top 35 Universities</p>
            </div>

            {/* Social Media Links with Inline SVGs */}
            <div className="pt-3 flex items-center gap-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-[#2a0614] border border-[#c9a24b]/40 text-[#c9a24b] flex items-center justify-center hover:bg-[#c9a24b] hover:text-[#2a0614] transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-[#2a0614] border border-[#c9a24b]/40 text-[#c9a24b] flex items-center justify-center hover:bg-[#c9a24b] hover:text-[#2a0614] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-[#2a0614] border border-[#c9a24b]/40 text-[#c9a24b] flex items-center justify-center hover:bg-[#c9a24b] hover:text-[#2a0614] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-[#2a0614] border border-[#c9a24b]/40 text-[#c9a24b] flex items-center justify-center hover:bg-[#c9a24b] hover:text-[#2a0614] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a24b] mb-4 border-b border-[#c9a24b]/20 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#f7f1e3]/85">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#c9a24b] transition-colors">
                  Home Gateway
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('processes')} className="hover:text-[#c9a24b] transition-colors">
                  Service Directory & SOPs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sac')} className="hover:text-[#c9a24b] transition-colors">
                  Student Activity Center (SAC)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('clubs')} className="hover:text-[#c9a24b] transition-colors">
                  26 Official SAC Clubs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('directory')} className="hover:text-[#c9a24b] transition-colors">
                  Official Directory & Deans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('knowledge')} className="hover:text-[#c9a24b] transition-colors">
                  Knowledge Centre & Acts
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Student Redressal & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a24b] mb-4 border-b border-[#c9a24b]/20 pb-1">
              Contact & Redressal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#f7f1e3]/85">
              <li>
                <button onClick={onOpenGrievance} className="hover:text-[#e6cf8f] transition-colors flex items-center gap-1.5 text-[#c9a24b] font-semibold">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  File SAMVAD Grievance
                </button>
              </li>
              <li className="flex items-center gap-2 text-[#e8dccb]">
                <Mail className="w-3.5 h-3.5 text-[#c9a24b] shrink-0" />
                <span>samvad@kluniversity.in</span>
              </li>
              <li className="flex items-center gap-2 text-[#e8dccb]">
                <Phone className="w-3.5 h-3.5 text-[#c9a24b] shrink-0" />
                <span>+91 8645 350200</span>
              </li>
              <li className="text-[11px] text-[#d9c9b8] pt-1">
                SAC Secretariat Office: R&D Block Ground Floor, Vaddeswaram
              </li>
            </ul>
          </div>

          {/* Column 5: Campuses & Address */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a24b] mb-4 border-b border-[#c9a24b]/20 pb-1">
              University Campuses
            </h4>
            <div className="space-y-3.5 text-xs text-[#f7f1e3]/85">
              <div>
                <strong className="text-[#c9a24b] block">Green Fields Campus (AP)</strong>
                <p className="text-[11px] text-[#e8dccb]">
                  Vaddeswaram, Guntur District, Near Vijayawada - 522302
                </p>
              </div>
              <div>
                <strong className="text-[#c9a24b] block">Hyderabad Campus (TS)</strong>
                <p className="text-[11px] text-[#e8dccb]">
                  Aziznagar, Moinabad Road, Hyderabad - 500075
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Last Updated Note */}
        <div className="mt-12 pt-8 border-t border-[#c9a24b]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d9c9b8]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Koneru Lakshmaiah Education Foundation. All Rights Reserved.
            </p>
            <span className="hidden sm:inline text-[#c9a24b]/40">•</span>
            <p className="text-[#e6cf8f] font-medium">
              Last updated: November 2026 (Active Session 2026-27)
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2a0614] rounded-lg text-[#c9a24b] hover:text-white border border-[#c9a24b]/40 hover:border-[#c9a24b] transition-all duration-200"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
