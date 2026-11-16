import React, { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  CheckCircle, 
  AlertCircle, 
  Lock, 
  Send, 
  EyeOff, 
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import { CouncilBadge } from './Crest';

export default function GrievanceModal({ onClose, onGrievanceSubmitted }) {
  const [category, setCategory] = useState('Academic & Curriculum');
  const [anonymous, setAnonymous] = useState(false);
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [urgency, setUrgency] = useState('Standard (72h SLA)');
  const [submittedId, setSubmittedId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = `KLU-GRIEV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedId(token);
    if (onGrievanceSubmitted) {
      onGrievanceSubmitted({
        id: token,
        processTitle: subject,
        appliedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        status: 'Under Review',
        currentStage: 'Council Ombudsman Docket Assignment',
        slaRemaining: '72 Hours',
        department: `Grievance: ${category}`,
        applicant: anonymous ? 'Anonymous Student Voice' : 'K. Varun Teja (2300031900)'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-kl-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-kl-warm-white w-full max-w-xl rounded-2xl shadow-2xl border-2 border-kl-gold/40 overflow-hidden animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-maroon-pattern text-kl-warm-white p-6 border-b border-kl-gold/30 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-kl-gold-soft hover:text-kl-warm-white p-1 rounded-lg hover:bg-kl-maroon/50"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <CouncilBadge className="w-4 h-4 text-kl-gold" />
            <span className="text-xs font-bold text-kl-gold-soft uppercase tracking-wider">
              Student Ombudsman Escalation Portal
            </span>
          </div>

          <h3 className="text-xl font-display font-bold text-kl-warm-white">
            SAMVAD 360 Grievance Redressal
          </h3>

          <p className="text-xs text-kl-ivory/80 mt-1">
            Protected by KL University Zero-Retaliation Policy & SDG 16 Ethical Standards.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submittedId ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h4 className="text-xl font-display font-bold text-emerald-950 mb-1">
                Grievance Formally Docketed
              </h4>

              <p className="text-xs text-emerald-700 max-w-sm mx-auto mb-5 leading-relaxed">
                Your petition is submitted directly to the Student Ombudsman Desk. Initial response is guaranteed within 72 hours.
              </p>

              <div className="p-4 bg-kl-ivory rounded-xl border-2 border-dashed border-kl-gold inline-block mb-6">
                <span className="text-[10px] font-bold text-kl-muted-grey uppercase block mb-1">
                  Confidential Escalation Docket ID
                </span>
                <span className="text-lg font-mono font-bold text-kl-maroon select-all">{submittedId}</span>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-kl-maroon text-kl-gold font-bold text-xs rounded-xl hover:bg-kl-maroon-dark"
                >
                  Close & Track on Dashboard
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Anonymous Toggle Banner */}
              <div className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                anonymous 
                  ? 'bg-amber-50 border-amber-300 text-amber-900' 
                  : 'bg-kl-ivory border-kl-gold/30 text-kl-charcoal'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    anonymous ? 'bg-amber-200 text-amber-800' : 'bg-kl-maroon/10 text-kl-maroon'
                  }`}>
                    {anonymous ? <EyeOff className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold block">
                      {anonymous ? "Anonymous Submission Mode" : "Verified Student Submission"}
                    </span>
                    <span className="text-[10px] text-kl-muted-grey block">
                      {anonymous ? "Your ID & identity will be cryptographically masked" : "Authenticated as K. Varun Teja (2300031900)"}
                    </span>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={anonymous} 
                    onChange={(e) => setAnonymous(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-kl-maroon"></div>
                </label>
              </div>

              {/* Category & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-kl-charcoal block mb-1">Grievance Domain</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal focus:ring-1 focus:ring-kl-maroon"
                  >
                    <option value="Academic & Curriculum">Academic & Curriculum</option>
                    <option value="Examinations & Evaluation">Examinations & Evaluation</option>
                    <option value="Hostel & Food Quality">Hostel, Mess & Amenities</option>
                    <option value="Campus Infrastructure & Wi-Fi">Campus Infrastructure & Wi-Fi</option>
                    <option value="Student Clubs & SAC">Student Clubs & SAC Funding</option>
                    <option value="Harassment & Ragging Redressal">Harassment / Code of Conduct</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-kl-charcoal block mb-1">Resolution SLA Tier</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal focus:ring-1 focus:ring-kl-maroon"
                  >
                    <option value="Standard (72h SLA)">Standard SLA (Under 72 Hours)</option>
                    <option value="Urgent Examination Hold (24h)">Urgent Examination Hold (24 Hours)</option>
                    <option value="Safety & Emergency (Immediate)">Safety & Emergency (Immediate Escalation)</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-bold text-kl-charcoal block mb-1">
                  Subject / Summary of Concern <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Discrepancy in continuous assessment marks or Hostel Wi-Fi downtime"
                  className="w-full text-xs p-2.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal focus:ring-1 focus:ring-kl-maroon"
                />
              </div>

              {/* Details */}
              <div>
                <label className="text-xs font-bold text-kl-charcoal block mb-1">
                  Comprehensive Incident Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Provide precise dates, times, course codes, block numbers, or staff interactions relevant to this grievance..."
                  className="w-full text-xs p-2.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal focus:ring-1 focus:ring-kl-maroon"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-kl-muted-grey bg-kl-light-beige/50 p-2.5 rounded-lg border border-kl-gold/20">
                <ShieldAlert className="w-4 h-4 text-kl-maroon shrink-0" />
                <span>Submissions are encrypted and reviewed by the Student Ombudsman committee.</span>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-kl-gold/20">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-kl-charcoal hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-kl-maroon text-kl-gold font-bold text-xs rounded-lg hover:bg-kl-maroon-dark transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit to Ombudsman</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
