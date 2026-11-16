import React, { useState } from 'react';
import { 
  KLUUniversityCrest, 
  CouncilBadge 
} from './Crest';
import { 
  Search, 
  User, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  Bell, 
  Sparkles,
  LayoutDashboard,
  Building2,
  FileText,
  LifeBuoy
} from 'lucide-react';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  userRole, 
  setUserRole, 
  onOpenAuth, 
  onOpenGrievance,
  searchQuery,
  setSearchQuery,
  onSearchFocus
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'processes', label: 'Explore Processes' },
    { id: 'sac', label: 'Student Activity Center' },
    { id: 'clubs', label: 'Clubs & Activities' },
    { id: 'knowledge', label: 'Knowledge Centre' },
    { id: 'directory', label: 'Official Resources' },
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-kl-maroon-dark border-b border-kl-gold/30 shadow-maroon-deep transition-all duration-200">
      {/* Top Institutional Notification Banner */}
      <div className="bg-kl-maroon-subtle/90 text-kl-gold-soft text-[11px] border-b border-kl-gold/15 py-1 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1 font-bold text-kl-gold">
              <ShieldCheck className="w-3.5 h-3.5 text-kl-gold" />
              Official Portal
            </span>
            <span className="text-kl-gold/40">•</span>
            <span>Koneru Lakshmaiah Education Foundation (KL Deemed to be University)</span>
            <span className="text-kl-gold/40">•</span>
            <span className="text-kl-gold-soft/80">NAAC A++ (3.57 CGPA) • Category-I Autonomy</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenGrievance} 
              className="hover:text-kl-gold transition-colors flex items-center gap-1 font-medium underline underline-offset-2"
            >
              <LifeBuoy className="w-3.5 h-3.5" />
              File SAMVAD Grievance
            </button>
            <span className="text-kl-gold/40">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-kl-gold/80">Role:</span>
              <span className="bg-kl-maroon-royal text-kl-gold px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-kl-gold/30">
                {userRole === 'student' ? 'Student' : 'Council Admin'}
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
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="relative p-1 bg-gradient-to-b from-kl-maroon to-kl-maroon-dark rounded-lg border border-kl-gold/50 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <KLUUniversityCrest className="w-11 h-11" variant="gold" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl tracking-wider text-kl-warm-white">
                  SAMVAD <span className="text-kl-gold font-black">360</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-kl-gold/20 text-kl-gold-soft border border-kl-gold/40 rounded">
                  Student Council
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-kl-gold-soft/80 -mt-0.5">
                K L Deemed to be University • Institutional Digital Gateway
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
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 relative ${
                    isActive 
                      ? 'text-kl-gold bg-kl-maroon-royal/60 shadow-sm font-semibold' 
                      : 'text-kl-warm-white/90 hover:text-kl-gold hover:bg-kl-maroon-royal/30'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-kl-gold-soft via-kl-gold to-kl-gold-dark rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons / Portal Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Direct Dashboard Switcher */}
            <button
              onClick={() => handleNavClick(userRole === 'student' ? 'student-dashboard' : 'admin-dashboard')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 shadow-sm ${
                currentView.includes('dashboard')
                  ? 'bg-kl-gold text-kl-maroon-dark border-kl-gold shadow-gold-subtle'
                  : 'bg-kl-maroon-royal/70 text-kl-gold-soft border-kl-gold/40 hover:bg-kl-maroon-royal hover:text-kl-warm-white hover:border-kl-gold'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>{userRole === 'student' ? 'My Portal' : 'Admin Console'}</span>
            </button>

            {/* Login / Auth Button */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-kl-gold via-kl-gold to-kl-gold-dark text-kl-maroon-dark font-bold text-xs rounded-lg shadow-gold-subtle hover:brightness-105 active:scale-95 transition-all duration-150"
            >
              <User className="w-3.5 h-3.5" />
              <span>{userRole === 'student' ? '2300031900' : 'Council Officer'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-kl-gold-soft hover:text-kl-gold hover:bg-kl-maroon-royal/50 rounded-lg transition-colors border border-kl-gold/30"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-kl-maroon-dark border-b border-kl-gold/30 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          <div className="p-3 bg-kl-maroon/60 rounded-lg border border-kl-gold/20 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CouncilBadge className="w-5 h-5" />
              <span className="text-xs font-semibold text-kl-gold">KL Student Council Portal</span>
            </div>
            <button
              onClick={() => {
                setUserRole(userRole === 'student' ? 'admin' : 'student');
              }}
              className="text-[11px] text-kl-gold-soft underline"
            >
              Switch to {userRole === 'student' ? 'Admin' : 'Student'}
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentView === link.id
                    ? 'bg-kl-maroon text-kl-gold font-bold border-l-4 border-kl-gold'
                    : 'text-kl-warm-white hover:bg-kl-maroon/40 hover:text-kl-gold'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-kl-gold/60" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-kl-gold/20 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick(userRole === 'student' ? 'student-dashboard' : 'admin-dashboard')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-kl-maroon border border-kl-gold/40 text-kl-gold font-bold text-sm"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{userRole === 'student' ? 'Open Student Portal' : 'Open Admin Console'}</span>
            </button>

            <button
              onClick={() => {
                onOpenAuth();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-kl-gold text-kl-maroon-dark font-bold text-sm"
            >
              <User className="w-4 h-4" />
              <span>Single Sign-On / Switch Profile</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
