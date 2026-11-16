import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstitutionalDashboard from './components/InstitutionalDashboard';
import QuickServices from './components/QuickServices';
import ProcessCatalog from './components/ProcessCatalog';
import SACSection from './components/SACSection';
import HowItWorks from './components/HowItWorks';
import OfficialDirectory from './components/OfficialDirectory';
import VerifiedUpdates from './components/VerifiedUpdates';
import SDG16Commitment from './components/SDG16Commitment';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import GrievanceModal from './components/GrievanceModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

import { 
  UNIVERSITY_PROCESSES, 
  SAMPLE_STUDENT_APPLICATIONS 
} from './data/portalData';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'processes' | 'sac' | 'clubs' | 'knowledge' | 'directory' | 'student-dashboard' | 'admin-dashboard'
  const [userRole, setUserRole] = useState('student'); // 'student' | 'admin'
  const [applications, setApplications] = useState(SAMPLE_STUDENT_APPLICATIONS);

  // Modal States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isGrievanceOpen, setIsGrievanceOpen] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState(null);

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

    // Map serviceId to process or open relevant process modal
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
    <div className="min-h-screen bg-kl-ivory text-kl-charcoal flex flex-col font-sans selection:bg-kl-maroon selection:text-kl-gold">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-kl-maroon-dark text-kl-warm-white px-5 py-3.5 rounded-xl border-2 border-kl-gold shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-kl-gold hover:text-kl-warm-white ml-2 text-xs font-bold"
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

      {/* Main Views Container */}
      <div className="flex-1">
        {currentView === 'home' && (
          <main>
            {/* 1. Hero Section */}
            <Hero
              onExploreProcesses={() => {
                const el = document.getElementById('processes');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setCurrentView('processes');
              }}
              onDiscoverSAC={() => {
                const el = document.getElementById('sac');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setCurrentView('sac');
              }}
              onSelectProcess={(proc) => setSelectedProcess(proc)}
            />

            {/* 2. Institutional Dashboard Overview (Executive Desk, Session Status, Updates) */}
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

            {/* 3. Explore by Category / Full Process Catalog Preview */}
            <ProcessCatalog
              onSelectProcess={(proc) => setSelectedProcess(proc)}
              selectedProcess={selectedProcess}
              onCloseModal={() => setSelectedProcess(null)}
              onInitiateApplication={handleInitiateApplication}
            />

            {/* 4. How SAMVAD 360 Works */}
            <HowItWorks />

            {/* 5. Student Activity Center (SAC) & Student Council Spotlight */}
            <SACSection
              onLaunchService={handleLaunchService}
              onRsvpSuccess={handleRsvpSuccess}
            />

            {/* 6. Official Information Directory & Deans */}
            <OfficialDirectory />

            {/* 7. Latest Verified Updates & Council Communiqués */}
            <VerifiedUpdates />

            {/* 8. UN SDG 16 Institutional Commitment */}
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

        {(currentView === 'sac' || currentView === 'clubs') && (
          <div>
            <SACSection
              onLaunchService={handleLaunchService}
              onRsvpSuccess={handleRsvpSuccess}
            />
          </div>
        )}

        {currentView === 'directory' && (
          <div className="py-8">
            <OfficialDirectory />
          </div>
        )}

        {currentView === 'knowledge' && (
          <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-kl-maroon uppercase tracking-widest block mb-1">
                Student Council Knowledge Base
              </span>
              <h2 className="text-3xl font-display font-bold text-kl-maroon-dark">
                University Regulations & FAQs
              </h2>
              <div className="gold-separator w-24 mx-auto my-3" />
            </div>

            <div className="space-y-4">
              <div className="bg-kl-warm-white p-5 rounded-xl border border-kl-gold/30">
                <h3 className="text-base font-bold text-kl-charcoal mb-2">
                  What is the minimum attendance requirement for End-Semester examinations?
                </h3>
                <p className="text-xs sm:text-sm text-kl-muted-grey leading-relaxed">
                  KL University mandates a strict minimum of 75% aggregate attendance. Students with verified medical grounds or official On-Duty (OD) participation through the Student Activity Center (SAC) may be granted condonation down to 65% subject to approval by the Dean (Academics).
                </p>
              </div>

              <div className="bg-kl-warm-white p-5 rounded-xl border border-kl-gold/30">
                <h3 className="text-base font-bold text-kl-charcoal mb-2">
                  How does the SAMVAD 360 72-Hour Grievance SLA work?
                </h3>
                <p className="text-xs sm:text-sm text-kl-muted-grey leading-relaxed">
                  Every petition docketed via SAMVAD 360 is tracked by an automated timer. If the respondent department does not register an official preliminary response within 72 hours, the matter is automatically flagged to the Hon'ble Student Ombudsman and Dean of Student Affairs for direct intervention.
                </p>
              </div>

              <div className="bg-kl-warm-white p-5 rounded-xl border border-kl-gold/30">
                <h3 className="text-base font-bold text-kl-charcoal mb-2">
                  How can student clubs apply for event funding and venue reservations?
                </h3>
                <p className="text-xs sm:text-sm text-kl-muted-grey leading-relaxed">
                  Club leads must submit an event proposal along with an itemized budget signed by their Faculty Advisor at least 5 working days before the scheduled date via the SAC Event Approval SOP.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentView === 'student-dashboard' && (
          <StudentDashboard
            applications={applications}
            onExploreProcesses={() => setCurrentView('processes')}
            onOpenGrievance={() => setIsGrievanceOpen(true)}
            onBackHome={() => setCurrentView('home')}
          />
        )}

        {currentView === 'admin-dashboard' && (
          <AdminDashboard
            onBackHome={() => setCurrentView('home')}
          />
        )}
      </div>

      {/* Global Footer (shown on public views) */}
      {!currentView.includes('dashboard') && (
        <Footer
          onNavigate={(viewId) => {
            setCurrentView(viewId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenGrievance={() => setIsGrievanceOpen(true)}
        />
      )}

      {/* Global Modals */}
      {isAuthOpen && (
        <AuthModal
          userRole={userRole}
          setUserRole={setUserRole}
          onClose={() => setIsAuthOpen(false)}
        />
      )}

      {isGrievanceOpen && (
        <GrievanceModal
          onClose={() => setIsGrievanceOpen(false)}
          onGrievanceSubmitted={handleGrievanceSubmitted}
        />
      )}

    </div>
  );
}
