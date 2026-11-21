import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstitutionalDashboard from './components/InstitutionalDashboard';
import QuickServices from './components/QuickServices';
import ProcessCatalog from './components/ProcessCatalog';
import HowItWorks from './components/HowItWorks';
import OfficialDirectory from './components/OfficialDirectory';
import VerifiedUpdates from './components/VerifiedUpdates';
import SDG16Commitment from './components/SDG16Commitment';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import GrievanceModal from './components/GrievanceModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { KLUUniversityCrest } from './components/Crest';

import { 
  UNIVERSITY_PROCESSES, 
  SAMPLE_STUDENT_APPLICATIONS 
} from './data/portalData';

export default function App() {
  const [isCinematicLoading, setIsCinematicLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'processes' | 'sac' | 'clubs' | 'knowledge' | 'directory' | 'student-dashboard' | 'admin-dashboard'
  const [userRole, setUserRole] = useState('student'); // 'student' | 'admin'
  const [applications, setApplications] = useState(SAMPLE_STUDENT_APPLICATIONS);

  // Modal States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isGrievanceOpen, setIsGrievanceOpen] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduceMotion ? 700 : 2200;
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      setIsCinematicLoading(false);
      document.body.style.overflow = '';
    }, duration);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  // Notification Toast
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Handlers
  const handleLaunchService = (serviceId) => {
    if (serviceId === 'grievance-voice') {
      setIsGrievanceOpen(true);
      return;
    }

    const matched = UNIVERSITY_PROCESSES.find(p => 
      (serviceId === 'od-approval' && p.id === 'proc-01') ||
      (serviceId === 'hall-ticket' && p.id === 'proc-02') ||
      (serviceId === 'bonafide-cert' && p.id === 'proc-03') ||
      (serviceId === 'club-event' && p.id === 'proc-04') ||
      (serviceId === 'hostel-pass' && p.id === 'proc-06') ||
      (serviceId === 're-eval' && p.id === 'proc-07') ||
      (serviceId === 'fee-scholarship' && p.id === 'proc-08')
    );

    if (matched) {
      setSelectedProcess(matched);
    } else {
      setSelectedProcess(UNIVERSITY_PROCESSES[0]);
    }
  };

  const handleInitiateApplication = (newApp) => {
    setApplications(prev => [newApp, ...prev]);
    showToast(`Application successfully registered! Tracking Token: ${newApp.id}`);
  };

  const handleGrievanceSubmitted = (newGriev) => {
    setApplications(prev => [newGriev, ...prev]);
    showToast(`Grievance docketed under 72h SLA! Docket: ${newGriev.id}`);
  };

  const handleRsvpSuccess = (rsvpData) => {
    showToast(`RSVP Confirmed for ${rsvpData.eventTitle}! Pass: ${rsvpData.passNumber}`);
  };

  return (
    <div className="min-h-screen bg-[#f7f1e3] text-[#1c1216] flex flex-col font-sans selection:bg-[#5a0f2e] selection:text-[#e6cf8f]">
      {isCinematicLoading && (
        <div className="cinematic-loader" role="status" aria-label="Loading SAMVAD 360">
          <div className="cinematic-loader__glow" />
          <div className="cinematic-loader__orbit cinematic-loader__orbit--outer">
            <span className="cinematic-loader__dot" />
          </div>
          <div className="cinematic-loader__orbit cinematic-loader__orbit--middle">
            <span className="cinematic-loader__dot cinematic-loader__dot--reverse" />
          </div>
          <div className="cinematic-loader__crest">
            <KLUUniversityCrest className="w-24 h-24 sm:w-28 sm:h-28" variant="gold" />
          </div>
          <div className="cinematic-loader__brand">
            <span>SAMVAD</span>
            <strong>360</strong>
          </div>
          <p>Official Process Navigator</p>
          <div className="cinematic-loader__progress"><span /></div>
        </div>
      )}
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#2a0614] text-white px-5 py-3.5 rounded-xl border border-[#c9a24b] shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-[#c9a24b] hover:text-white ml-2 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Primary Global Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        userRole={userRole}
        setUserRole={setUserRole}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenGrievance={() => setIsGrievanceOpen(true)}
      />

      {/* Institutional review and content-freshness notice */}
      <div className="glass-panel bg-[#ede4d3]/85 border-b border-[#c9a24b]/30 px-4 py-2 text-[11px] text-[#5c4e52]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p>
            <strong className="text-[#5a0f2e]">Review status:</strong> Demonstration data — institution and service-owner approval required before real use.
          </p>
          <p className="font-semibold">
            Content version 1.0 • 19 October 2026 • Owner: Pending institutional assignment
          </p>
        </div>
      </div>

      {/* Official Institutional Breadcrumb on Inner Pages */}
      {currentView !== 'home' && !currentView.includes('dashboard') && (
        <div className="bg-[#ede4d3] border-b border-[#c9a24b]/30 py-2.5 px-4 text-[13px] text-[#5c4e52] shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentView('home')} 
                className="text-[#5a0f2e] font-bold hover:underline flex items-center gap-1"
              >
                <span>Home</span>
              </button>
              <span className="text-[#c9a24b] font-bold">/</span>
              <span className="text-[#1c1216] font-bold">
                {currentView === 'processes' && 'University Procedure & Service Directory'}
                {currentView === 'directory' && 'Official Information Directory & Deans'}
                {currentView === 'knowledge' && 'Council Knowledge Centre & Regulations'}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[12px] text-[#5a0f2e] font-medium">
              <span>KL Deemed to be University</span>
              <span className="text-[#c9a24b]">●</span>
              <span className="font-bold text-[#5a0f2e]">NAAC A++ Accredited</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Views Container */}
      <div className="flex-1">
        {currentView === 'home' && (
          <main>
            {/* 1. Hero Section (Solid deep maroon, 4 animated counters, search, SOPs) */}
            <Hero
              onExploreProcesses={() => {
                const el = document.getElementById('processes');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setCurrentView('processes');
              }}
              onDiscoverSAC={() => window.location.assign('https://sac.kluniversity.in')}
              onSelectProcess={(proc) => setSelectedProcess(proc)}
            />

            {/* 2. Institutional Dashboard Overview (Executive Desk, Session Status) */}
            <InstitutionalDashboard 
              onOpenGrievance={() => setIsGrievanceOpen(true)}
              onExploreProcesses={() => {
                const el = document.getElementById('processes');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setCurrentView('processes');
              }}
            />

            {/* 3. Frequently Accessed Services */}
            <QuickServices onLaunchService={handleLaunchService} />

            {/* 4. Explore by Category / Full Process Catalog Preview */}
            <ProcessCatalog
              onSelectProcess={(proc) => setSelectedProcess(proc)}
              selectedProcess={selectedProcess}
              onCloseModal={() => setSelectedProcess(null)}
              onInitiateApplication={handleInitiateApplication}
            />

            {/* 5. How SAMVAD 360 Works */}
            <HowItWorks />

            {/* 7. Official Information Directory & Deans */}
            <OfficialDirectory />

            {/* 8. Latest Verified Updates & Council Communiqués */}
            <VerifiedUpdates />

            {/* 9. UN SDG 16 Institutional Commitment */}
            <SDG16Commitment onOpenGrievance={() => setIsGrievanceOpen(true)} />
          </main>
        )}

        {currentView === 'processes' && (
          <div className="py-8">
            <ProcessCatalog
              onSelectProcess={(proc) => setSelectedProcess(proc)}
              selectedProcess={selectedProcess}
              onCloseModal={() => setSelectedProcess(null)}
              onInitiateApplication={handleInitiateApplication}
            />
          </div>
        )}

        {currentView === 'directory' && (
          <div className="py-8">
            <OfficialDirectory />
          </div>
        )}

        {currentView === 'knowledge' && (
          <div className="py-8">
            <HowItWorks />
            <SDG16Commitment onOpenGrievance={() => setIsGrievanceOpen(true)} />
          </div>
        )}

        {currentView === 'student-dashboard' && (
          <StudentDashboard
            userRole={userRole}
            applications={applications}
            onOpenGrievance={() => setIsGrievanceOpen(true)}
            onExploreProcesses={() => setCurrentView('processes')}
          />
        )}

        {currentView === 'admin-dashboard' && (
          <AdminDashboard
            userRole={userRole}
            applications={applications}
            onOpenGrievance={() => setIsGrievanceOpen(true)}
          />
        )}
      </div>

      {/* Global Modals */}
      {isAuthOpen && (
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          userRole={userRole}
          setUserRole={setUserRole}
        />
      )}

      {isGrievanceOpen && (
        <GrievanceModal
          isOpen={isGrievanceOpen}
          onClose={() => setIsGrievanceOpen(false)}
          onSubmitSuccess={handleGrievanceSubmitted}
        />
      )}

      {/* Primary Global Institutional Footer */}
      <Footer
        onNavigate={(viewId) => setCurrentView(viewId)}
        onOpenGrievance={() => setIsGrievanceOpen(true)}
      />

    </div>
  );
}
