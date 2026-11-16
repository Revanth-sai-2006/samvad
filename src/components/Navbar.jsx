import React, { useState } from 'react';
import { 
  KLUUniversityCrest, 
  CouncilBadge 
} from './Crest';
import { 
  User, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  LifeBuoy,
  LayoutDashboard,
  Building2,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  userRole, 
  setUserRole, 
  onOpenAuth, 
  onOpenGrievance
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'processes', label: 'Service Directory' },
    { id: 'sac', label: 'Student Activity Center' },
    { id: 'clubs', label: 'Council & Clubs' },
    { id: 'knowledge', label: 'Knowledge Centre' },
    { id: 'directory', label: 'Official Directory' },
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-kl-maroon-deep/95 backdrop-blur-md border-b border-kl-gold/30 shadow-maroon-deep transition-all duration-200">
      
      {/* Top Institutional Bar */}
      <div className="bg-kl-maroon-dark text-kl-gold-soft text-[11px] border-b border-kl-gold/15 py-1 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-kl-gold">
              <ShieldCheck className="w-3.5 h-3.5 text-kl-gold" />
              Official Portal
            </span>
            <span className="text-kl-gold/30">•</span>
            <span className="text-kl-ivory/90">Koneru Lakshmaiah Education Foundation (KL Deemed to be University)</span>
            <span className="text-kl-gold/30">•</span>
            <span className="text-kl-gold-soft/80 font-medium">NAAC A++ (3.57 CGPA) • Category-I Autonomy by UGC</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenGrievance} 
              className="hover:text-kl-gold transition-colors flex items-center gap-1.5 font-medium underline underline-offset-2"
            >
              <LifeBuoy className="w-3.5 h-3.5 text-kl-gold" />
              <span>SAMVAD Ombudsman Desk</span>
            </button>
            <span className="text-kl-gold/30">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-kl-gold-soft/70">Session:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                2026–27 Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand & Crest Identification */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-1 bg-kl-maroon-burgundy/80 rounded-lg border border-kl-gold/45 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <KLUUniversityCrest className="w-10 h-10" variant="gold" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl tracking-wider text-kl-warm-white">
                  SAMVAD <span className="text-kl-gold font-black">360</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-bold tracking-widest uppercase bg-kl-gold/15 text-kl-gold border border-kl-gold/40 rounded">
                  Student Council
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-kl-gold-soft/80 -mt-0.5">
                KLEF Deemed to be University • Student Council Secretariat
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 relative ${
                    isActive 
                      ? 'text-kl-gold bg-kl-maroon-burgundy/80 shadow-xs font-bold border border-kl-gold/30' 
                      : 'text-kl-ivory/85 hover:text-kl-gold hover:bg-kl-maroon-burgundy/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons / Portal Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Admin Console Navigation Button */}
            <button
              onClick={() => handleNavClick('admin-dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-150 ${
                currentView === 'admin-dashboard'
                  ? 'bg-kl-gold text-kl-maroon-dark border-kl-gold font-bold shadow-gold-subtle'
                  : 'bg-kl-maroon-burgundy/70 text-kl-gold-soft border-kl-gold/35 hover:bg-kl-maroon-burgundy hover:text-kl-warm-white hover:border-kl-gold'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-kl-gold" />
              <span>Admin Console</span>
            </button>

            {/* Council Officer / Profile Menu */}
            <div className="relative">
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-kl-gold via-kl-gold to-kl-gold-dark text-kl-maroon-dark font-bold text-xs rounded-lg shadow-gold-subtle hover:brightness-105 active:scale-95 transition-all border border-kl-gold-soft/60"
              >
                <div className="w-4 h-4 rounded-full bg-kl-maroon-dark text-kl-gold text-[9px] font-bold flex items-center justify-center">
                  {userRole === 'student' ? 'ST' : 'CO'}
                </div>
                <span>{userRole === 'student' ? '2300031900' : 'Council Officer'}</span>
              </button>
            </div>

          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-kl-gold-soft hover:text-kl-gold hover:bg-kl-maroon-burgundy/50 rounded-lg transition-colors border border-kl-gold/30"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-kl-maroon-dark border-b border-kl-gold/30 px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="p-3 bg-kl-maroon-burgundy/80 rounded-lg border border-kl-gold/25 mb-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <CouncilBadge className="w-4 h-4" />
              <span className="font-semibold text-kl-gold">Operating Role: {userRole === 'student' ? 'Student' : 'Council Admin'}</span>
            </div>
            <button
              onClick={() => {
                setUserRole(userRole === 'student' ? 'admin' : 'student');
              }}
              className="text-[11px] text-kl-gold-soft underline font-semibold"
            >
              Switch Role
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                  currentView === link.id
                    ? 'bg-kl-maroon text-kl-gold font-bold border-l-4 border-kl-gold'
                    : 'text-kl-warm-white hover:bg-kl-maroon/40 hover:text-kl-gold'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-kl-gold/60" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-kl-gold/20 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('admin-dashboard')}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-kl-maroon-burgundy border border-kl-gold/40 text-kl-gold font-bold text-xs"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Open Admin Console</span>
            </button>

            <button
              onClick={() => {
                onOpenAuth();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-kl-gold text-kl-maroon-dark font-bold text-xs"
            >
              <User className="w-3.5 h-3.5" />
              <span>Authentication / Profile Menu</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
