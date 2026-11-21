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
  LayoutDashboard
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
    <header className="sticky top-0 z-40 bg-[#2a0614]/95 backdrop-blur-md border-b border-[#c9a24b]/30 shadow-[0_4px_20px_rgba(42,6,20,0.5)] transition-all duration-200">
      
      {/* Merged Slim Top Utility Strip */}
      <div className="bg-[#1c040d] text-[#e6cf8f] text-[11px] border-b border-[#c9a24b]/20 py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-[#c9a24b]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c9a24b]" />
              Official Portal
            </span>
            <span className="text-[#c9a24b]/40">•</span>
            <span className="text-[#f7f1e3]/85">KL Deemed to be University</span>
            <span className="text-[#c9a24b]/40">•</span>
            <span className="text-[#e6cf8f]/90 font-medium">NAAC A++ (3.57 CGPA)</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenGrievance} 
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium underline underline-offset-2"
            >
              <LifeBuoy className="w-3.5 h-3.5 text-[#c9a24b]" />
              <span>Grievance Redressal</span>
            </button>
            <span className="text-[#c9a24b]/40">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-bold">Session 2026–27 Active</span>
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
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="p-1 bg-[#5a0f2e]/60 rounded-lg border border-[#c9a24b]/45 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <KLUUniversityCrest className="w-10 h-10" variant="gold" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-logo font-bold text-2xl tracking-wider text-white">
                  SAMVAD <span className="text-[#c9a24b] font-black">360</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-bold tracking-widest uppercase bg-[#c9a24b]/15 text-[#e6cf8f] border border-[#c9a24b]/40 rounded">
                  Student Council
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-[#e6cf8f]/80 -mt-0.5">
                KLEF Deemed to be University • Student Council Secretariat
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Single-line labels, no wrapping, gold underline on active) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-2 text-xs xl:text-[13px] font-semibold whitespace-nowrap tracking-wide transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#c9a24b] font-bold' 
                      : 'text-[#f7f1e3]/85 hover:text-[#e6cf8f]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#c9a24b] rounded-full transition-all duration-200" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons (Visually separated from nav links) */}
          <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-[#c9a24b]/30 shrink-0">
            
            {/* Admin Console Navigation Button */}
            <button
              onClick={() => handleNavClick('admin-dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-150 ${
                currentView === 'admin-dashboard'
                  ? 'bg-[#c9a24b] text-[#2a0614] border-[#c9a24b] font-bold shadow-sm'
                  : 'bg-[#5a0f2e]/60 text-[#e6cf8f] border-[#c9a24b]/40 hover:bg-[#5a0f2e] hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#c9a24b]" />
              <span>Admin Console</span>
            </button>

            {/* Student ID / Officer Chip */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#e6cf8f] via-[#c9a24b] to-[#a88338] text-[#2a0614] font-bold text-xs rounded-lg hover:brightness-105 active:scale-95 transition-all border border-[#e6cf8f]/60 shadow-sm"
            >
              <div className="w-4 h-4 rounded-full bg-[#2a0614] text-[#c9a24b] text-[9px] font-bold flex items-center justify-center">
                {userRole === 'student' ? 'ST' : 'CO'}
              </div>
              <span>{userRole === 'student' ? '2300031900' : 'Council Officer'}</span>
            </button>

          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e6cf8f] hover:text-white hover:bg-[#5a0f2e]/50 rounded-lg transition-colors border border-[#c9a24b]/30"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2a0614] border-b border-[#c9a24b]/30 px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="p-3 bg-[#5a0f2e]/60 rounded-lg border border-[#c9a24b]/25 mb-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <CouncilBadge className="w-4 h-4" />
              <span className="font-semibold text-[#e6cf8f]">Role: {userRole === 'student' ? 'Student' : 'Council Admin'}</span>
            </div>
            <button
              onClick={() => {
                setUserRole(userRole === 'student' ? 'admin' : 'student');
              }}
              className="text-[11px] text-[#c9a24b] underline font-semibold"
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
                    ? 'bg-[#5a0f2e] text-[#c9a24b] font-bold border-l-4 border-[#c9a24b]'
                    : 'text-[#f7f1e3] hover:bg-[#5a0f2e]/40 hover:text-[#c9a24b]'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#c9a24b]/60" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#c9a24b]/20 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('admin-dashboard')}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#5a0f2e] border border-[#c9a24b]/40 text-[#e6cf8f] font-bold text-xs"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#c9a24b]" />
              <span>Open Admin Console</span>
            </button>

            <button
              onClick={() => {
                onOpenAuth();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#c9a24b] text-[#2a0614] font-bold text-xs"
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
