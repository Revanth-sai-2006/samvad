import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Building, 
  MapPin, 
  FileCheck, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Send, 
  ShieldCheck, 
  FileText,
  UserCheck,
  Download
} from 'lucide-react';
import { KLUUniversityCrest } from './Crest';

export default function ProcessModal({ process, onClose, onInitiateApplication }) {
  const [activeTab, setActiveTab] = useState('workflow'); // 'workflow' | 'apply'
  const [formData, setFormData] = useState({
    studentId: '2300031900',
    studentName: 'K. Varun Teja',
    department: 'Computer Science & Engineering',
    semester: 'Semester 6',
    reason: '',
    attachedDocName: ''
  });
  const [submittedId, setSubmittedId] = useState(null);

  if (!process) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `KLU-PROC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedId(generatedId);
    if (onInitiateApplication) {
      onInitiateApplication({
        id: generatedId,
        processTitle: process.title,
        appliedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        status: 'In Progress',
        currentStage: `Stage 1: ${process.workflow[0]?.action || 'Departmental Review'}`,
        slaRemaining: process.sla,
        department: process.department,
        applicant: `${formData.studentName} (${formData.studentId})`
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-kl-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        className="bg-kl-warm-white w-full max-w-3xl max-h-[calc(100vh-2rem)] rounded-2xl shadow-2xl border-2 border-kl-gold/40 overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Institutional Header */}
        <div className="bg-gradient-to-r from-[#42101f] via-[#5a0f2e] to-[#42101f] text-white p-6 border-b border-[#c9a24b]/40 relative shrink-0">
          <button 
            onClick={onClose}
            aria-label="Close process window"
            className="absolute top-3 right-3 z-20 w-11 h-11 flex items-center justify-center text-[#e6cf8f] hover:text-white bg-[#2a0614]/70 hover:bg-[#2a0614] rounded-full border border-[#c9a24b]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-kl-maroon-dark text-kl-gold border border-kl-gold/40">
              {process.code}
            </span>
            <span className="text-xs text-[#e6cf8f] font-medium">
              Official University Standard Operating Procedure
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-display font-bold text-white pr-16">
            {process.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#f7f1e3]">
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-kl-gold" />
              {process.department}
            </span>
            <span className="text-kl-gold/40">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-kl-gold" />
              Planned SLA: <strong className="text-[#e6cf8f]">{process.sla}</strong>
            </span>
          </div>

          {/* Modal Tabs */}
          <div className="flex items-center gap-2 mt-5 border-t border-kl-gold/20 pt-4">
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'workflow'
                  ? 'bg-kl-gold text-kl-maroon-dark shadow-sm'
                  : 'text-[#e6cf8f] hover:bg-white/10'
              }`}
            >
              1. Procedure & Workflow Details
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'apply'
                  ? 'bg-kl-gold text-kl-maroon-dark shadow-sm'
                  : 'text-[#e6cf8f] hover:bg-white/10'
              }`}
            >
              2. Digital Request Initiation
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 min-h-0 overflow-y-auto">
          {activeTab === 'workflow' ? (
            <div className="space-y-6">
              
              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-kl-maroon mb-1">
                  Purpose & Scope
                </h4>
                <p className="text-sm text-kl-charcoal leading-relaxed bg-kl-ivory p-4 rounded-xl border border-kl-gold/25">
                  {process.summary}
                </p>
              </div>

              {/* Two Column: Prerequisites & Documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-kl-warm-white p-4 rounded-xl border border-kl-gold/30 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-kl-maroon mb-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Eligibility & Prerequisites</span>
                  </div>
                  <ul className="space-y-2 text-xs text-kl-charcoal">
                    {process.prerequisites.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-kl-gold mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-kl-warm-white p-4 rounded-xl border border-kl-gold/30 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-kl-maroon mb-2.5">
                    <FileCheck className="w-4 h-4 text-kl-gold-dark" />
                    <span>Required Supporting Documents</span>
                  </div>
                  <ul className="space-y-2 text-xs text-kl-charcoal">
                    {process.documentsRequired.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-kl-maroon mt-1 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Step-by-Step Institutional Workflow */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-kl-maroon">
                    Multi-Tier Governance Workflow
                  </h4>
                  <span className="text-[11px] text-kl-muted-grey">Total SLA: {process.sla}</span>
                </div>

                <div className="relative border-l-2 border-kl-gold/40 pl-5 ml-3 space-y-5">
                  {process.workflow.map((st) => (
                    <div key={st.step} className="relative">
                      {/* Step Marker */}
                      <div className="absolute -left-[27px] top-0.5 w-5 h-5 rounded-full bg-kl-maroon text-kl-gold text-[10px] font-bold flex items-center justify-center border-2 border-kl-gold">
                        {st.step}
                      </div>

                      <div className="bg-kl-light-beige/50 p-3 rounded-lg border border-kl-gold/20">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-kl-maroon">{st.role}</span>
                          <span className="text-[11px] font-semibold text-kl-gold-dark bg-kl-warm-white px-2 py-0.5 rounded border border-kl-gold/30">
                            {st.duration}
                          </span>
                        </div>
                        <p className="text-xs text-kl-charcoal">
                          {st.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsible Authority & Location */}
              <div className="p-4 bg-kl-maroon/5 rounded-xl border border-kl-maroon/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-kl-maroon block">Responsible Institutional Authority</span>
                  <span className="text-kl-charcoal font-medium">{process.authority}</span>
                </div>
                <div className="flex items-center gap-1.5 text-kl-muted-grey">
                  <MapPin className="w-3.5 h-3.5 text-kl-maroon" />
                  <span>{process.location}</span>
                </div>
              </div>

            </div>
          ) : (
            <div>
              {submittedId ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border-2 border-emerald-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-emerald-900 mb-1">
                    Application Successfully Registered
                  </h3>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto mb-4">
                    Your request has entered the official KL University ERP routing pipeline. Track live progress in your Student Portal.
                  </p>
                  
                  <div className="inline-block bg-white p-4 rounded-xl border border-emerald-200 shadow-sm mb-6">
                    <span className="text-[11px] font-bold text-gray-500 uppercase block mb-1">Official Tracking Token</span>
                    <span className="text-lg font-mono font-bold text-kl-maroon select-all">{submittedId}</span>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 bg-kl-maroon text-kl-gold font-bold text-xs rounded-lg hover:bg-kl-maroon-dark transition-colors"
                    >
                      Done / Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-kl-ivory p-3.5 rounded-xl border border-kl-gold/30 mb-4">
                    <span className="text-xs font-bold text-kl-maroon block mb-1">Applying for:</span>
                    <span className="text-sm font-bold text-kl-charcoal">{process.title}</span>
                    <span className="text-xs text-kl-muted-grey block mt-0.5">SOP Code: {process.code} • Turnaround: {process.sla}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-kl-charcoal block mb-1">Student University ID</label>
                      <input 
                        type="text" 
                        readOnly 
                        value={formData.studentId}
                        className="w-full text-xs font-mono bg-gray-100 border border-gray-300 rounded-lg p-2.5 text-gray-700 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-kl-charcoal block mb-1">Student Full Name</label>
                      <input 
                        type="text" 
                        readOnly 
                        value={formData.studentName}
                        className="w-full text-xs bg-gray-100 border border-gray-300 rounded-lg p-2.5 text-gray-700 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-kl-charcoal block mb-1">Department / Branch</label>
                      <input 
                        type="text" 
                        readOnly 
                        value={formData.department}
                        className="w-full text-xs bg-gray-100 border border-gray-300 rounded-lg p-2.5 text-gray-700 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-kl-charcoal block mb-1">Current Standing</label>
                      <input 
                        type="text" 
                        readOnly 
                        value={formData.semester}
                        className="w-full text-xs bg-gray-100 border border-gray-300 rounded-lg p-2.5 text-gray-700 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-kl-charcoal block mb-1">
                      Statement of Request & Justification <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Specify event details, target institution, destination or explanation for this request..."
                      className="w-full text-xs p-3 rounded-lg border border-kl-gold/40 focus:outline-none focus:ring-2 focus:ring-kl-maroon/30 text-kl-charcoal"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-kl-charcoal block mb-1">
                      Attach Required Documentation (PDF / Images)
                    </label>
                    <div className="border-2 border-dashed border-kl-gold/40 rounded-xl p-4 text-center bg-kl-light-beige/30 hover:bg-kl-light-beige/60 transition-colors">
                      <FileText className="w-6 h-6 text-kl-maroon mx-auto mb-1" />
                      <span className="text-xs text-kl-charcoal font-medium block">
                        {formData.attachedDocName || "Click to browse or drop files here"}
                      </span>
                      <span className="text-[10px] text-kl-muted-grey">
                        Supporting approval letters, brochures, or receipts up to 10MB
                      </span>
                      <input 
                        type="file" 
                        onChange={(e) => setFormData({ ...formData, attachedDocName: e.target.files[0]?.name || '' })}
                        className="mt-2 text-xs text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-kl-maroon file:text-kl-gold hover:file:bg-kl-maroon-dark cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      By submitting, I solemnly certify that the information provided is accurate and complies with the KL University Code of Conduct. Misrepresentation will be escalated to the Student Disciplinary Committee.
                    </span>
                  </div>

                  <div className="flex justify-end gap-3 pt-3 border-t border-kl-gold/20">
                    <button
                      type="button"
                      onClick={() => setActiveTab('workflow')}
                      className="px-4 py-2.5 text-xs font-semibold text-kl-charcoal hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      Back to Workflow
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gradient-to-r from-kl-maroon to-kl-maroon-royal text-kl-gold font-bold text-xs rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Official Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Persistent Modal Footer */}
        <div className="shrink-0 bg-kl-light-beige/90 p-4 border-t border-kl-gold/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-kl-muted-grey">
              Need assistance? Contact <strong className="text-kl-maroon">{process.department}</strong>
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-kl-charcoal hover:bg-kl-light-beige rounded-lg"
              >
                Close
              </button>
              {activeTab === 'workflow' && (
                <button
                  onClick={() => setActiveTab('apply')}
                  className="w-full sm:w-auto px-5 py-2 bg-kl-maroon text-kl-gold font-bold text-xs rounded-lg hover:bg-kl-maroon-dark transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Initiate This Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
