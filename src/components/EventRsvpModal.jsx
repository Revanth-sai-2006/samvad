import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, CheckCircle, Ticket, Sparkles } from 'lucide-react';
import { KLUUniversityCrest, CouncilBadge } from './Crest';

export default function EventRsvpModal({ event, onClose, onRsvpSuccess }) {
  const [studentId, setStudentId] = useState('2300031900');
  const [studentName, setStudentName] = useState('K. Varun Teja');
  const [category, setCategory] = useState('Individual Participant');
  const [registered, setRegistered] = useState(false);
  const [passNumber, setPassNumber] = useState('');

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const pass = `SAC-${event.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassNumber(pass);
    setRegistered(true);
    if (onRsvpSuccess) {
      onRsvpSuccess({
        eventId: event.id,
        eventTitle: event.title,
        passNumber: pass,
        studentName,
        studentId
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-kl-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        className="bg-kl-warm-white w-full max-w-lg rounded-2xl shadow-2xl border-2 border-kl-gold/40 overflow-hidden animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#42101f] via-[#5a0f2e] to-[#42101f] text-white p-6 border-b border-[#c9a24b]/40 relative">
          <button 
            onClick={onClose}
            aria-label="Close event window"
            className="absolute top-3 right-3 z-20 w-11 h-11 flex items-center justify-center text-[#e6cf8f] hover:text-white bg-[#2a0614]/70 hover:bg-[#2a0614] rounded-full border border-[#c9a24b]/50"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <CouncilBadge className="w-4 h-4 text-kl-gold" />
            <span className="text-xs font-bold text-[#e6cf8f] uppercase tracking-wider">
              Official SAC Event Registration
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-display font-bold text-kl-warm-white pr-6">
            {event.title}
          </h3>

          <div className="flex items-center gap-2 text-xs text-[#f7f1e3] mt-2">
            <span className="bg-kl-gold/20 text-kl-gold px-2 py-0.5 rounded font-semibold border border-kl-gold/30">
              {event.domain}
            </span>
            <span>•</span>
            <span>{event.dates}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {registered ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-display font-bold text-kl-maroon-dark mb-1">
                RSVP & Delegate Pass Confirmed
              </h4>
              <p className="text-xs text-kl-charcoal/80 mb-4 max-w-xs mx-auto">
                Present this pass at the SAC Check-in Desk or scan at the entry gate.
              </p>

              {/* Pass Card */}
              <div className="p-4 bg-kl-ivory rounded-xl border-2 border-dashed border-kl-gold text-left space-y-2 mb-6">
                <div className="flex items-center justify-between border-b border-kl-gold/30 pb-2">
                  <span className="text-[11px] font-bold text-kl-maroon uppercase">KL Student Activity Center</span>
                  <span className="text-[10px] font-mono font-bold bg-kl-maroon text-kl-gold px-1.5 py-0.5 rounded">
                    VERIFIED PASS
                  </span>
                </div>
                <div className="text-xs">
                  <span className="text-kl-muted-grey block">Delegate Name:</span>
                  <span className="font-bold text-kl-charcoal">{studentName} ({studentId})</span>
                </div>
                <div className="text-xs">
                  <span className="text-kl-muted-grey block">Digital Access Token:</span>
                  <span className="font-mono font-bold text-kl-maroon text-sm select-all">{passNumber}</span>
                </div>
                <div className="text-[11px] text-kl-muted-grey pt-1">
                  Venue: {event.venue}
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-kl-maroon text-kl-gold font-bold text-xs rounded-lg hover:bg-kl-maroon-dark"
              >
                Close / Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-kl-ivory rounded-xl border border-kl-gold/25 text-xs text-kl-charcoal space-y-1">
                <div className="flex items-center gap-1.5 text-kl-maroon font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-kl-gold-dark" />
                  <span>{event.dates}</span>
                </div>
                <div className="flex items-center gap-1.5 text-kl-muted-grey">
                  <MapPin className="w-3.5 h-3.5 text-kl-maroon" />
                  <span>{event.venue}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-kl-charcoal block mb-1">University ID</label>
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                    className="w-full text-xs font-mono p-2.5 bg-gray-50 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-kl-charcoal block mb-1">Student Full Name</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                    className="w-full text-xs p-2.5 bg-gray-50 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-kl-charcoal block mb-1">Participation Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal"
                >
                  <option value="Individual Participant">Individual Participant / Attendee</option>
                  <option value="Registered Club Contingent">Registered Club Contingent</option>
                  <option value="Competitive Team Lead">Competitive Team Lead</option>
                  <option value="Student Volunteer">Student Volunteer Squad</option>
                </select>
              </div>

              <p className="text-[11px] text-kl-muted-grey italic">
                * Eligible attendees receive automatic On-Duty (OD) recommendation through SAC portal.
              </p>

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
                  className="px-6 py-2 bg-kl-maroon text-kl-gold font-bold text-xs rounded-lg hover:bg-kl-maroon-dark transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Confirm Registration</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
