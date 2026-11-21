import React, { useState } from 'react';
import { 
  X, 
  User, 
  ShieldCheck, 
  Key, 
  Building2, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { KLUUniversityCrest, CouncilBadge } from './Crest';

export default function AuthModal({ userRole, setUserRole, onClose }) {
  const [selectedRole, setSelectedRole] = useState(userRole);
  const [campus, setCampus] = useState('vaddeswaram');
  const [studentId, setStudentId] = useState(userRole === 'student' ? '2300031900' : 'KLEF-ADM-880');
  const [password, setPassword] = useState('••••••••••••');

  const handleApply = (e) => {
    e.preventDefault();
    setUserRole(selectedRole);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-kl-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        className="bg-kl-warm-white w-full max-w-md rounded-2xl shadow-2xl border-2 border-kl-gold/40 overflow-hidden animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#42101f] via-[#5a0f2e] to-[#42101f] text-white p-6 border-b border-[#c9a24b]/40 text-center relative">
          <button 
            onClick={onClose}
            aria-label="Close authentication window"
            className="absolute top-3 right-3 z-20 w-11 h-11 flex items-center justify-center text-[#e6cf8f] hover:text-white bg-[#2a0614]/70 hover:bg-[#2a0614] rounded-full border border-[#c9a24b]/50"
          >
            <X className="w-5 h-5" />
          </button>

          <KLUUniversityCrest className="w-12 h-12 mx-auto mb-2" variant="gold" />
          <h3 className="font-display font-bold text-xl text-kl-warm-white">
            KL Institutional Single Sign-On
          </h3>
          <p className="text-xs text-[#e6cf8f] mt-0.5">
            SAMVAD 360 University Authentication Service
          </p>
        </div>

        {/* Body */}
        <form onSubmit={handleApply} className="p-6 space-y-4">
          
          {/* Role Selector Tabs */}
          <div>
            <label className="text-xs font-bold text-kl-charcoal block mb-1.5">
              Select Operating Persona:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedRole('student');
                  setStudentId('2300031900');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedRole === 'student'
                    ? 'bg-kl-maroon text-kl-gold border-kl-gold shadow-sm'
                    : 'bg-kl-light-beige text-kl-charcoal border-kl-gold/30 hover:border-kl-gold'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <User className="w-4 h-4" />
                  {selectedRole === 'student' && <Check className="w-4 h-4 text-kl-gold" />}
                </div>
                <span className="text-xs font-bold block">Student Portal</span>
                <span className="text-[10px] opacity-80 block">ID: 2300031900</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedRole('admin');
                  setStudentId('KLEF-ADM-880');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedRole === 'admin'
                    ? 'bg-kl-maroon text-kl-gold border-kl-gold shadow-sm'
                    : 'bg-kl-light-beige text-kl-charcoal border-kl-gold/30 hover:border-kl-gold'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <CouncilBadge className="w-4 h-4" />
                  {selectedRole === 'admin' && <Check className="w-4 h-4 text-kl-gold" />}
                </div>
                <span className="text-xs font-bold block">Council Admin</span>
                <span className="text-[10px] opacity-80 block">Ombudsman & Deans</span>
              </button>
            </div>
          </div>

          {/* Campus Selector */}
          <div>
            <label className="text-xs font-bold text-kl-charcoal block mb-1">Campus Jurisdiction</label>
            <select
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
              className="w-full text-xs p-2.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal"
            >
              <option value="vaddeswaram">Green Fields Campus, Vaddeswaram (AP)</option>
              <option value="hyderabad">Aziznagar Campus, Hyderabad (Telangana)</option>
            </select>
          </div>

          {/* Credentials */}
          <div>
            <label className="text-xs font-bold text-kl-charcoal block mb-1">
              Institutional User ID
            </label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              className="w-full text-xs font-mono p-2.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-kl-charcoal block mb-1">
              Single Sign-On Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-xs p-2.5 bg-white border border-kl-gold/40 rounded-lg text-kl-charcoal"
            />
          </div>

          <div className="p-3 bg-kl-ivory rounded-xl border border-kl-gold/25 text-[11px] text-kl-muted-grey flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Authenticated with KL University Central LDAP & ERP Identity Provider.</span>
          </div>

          <div className="pt-2 flex justify-end gap-3 border-t border-kl-gold/20">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-kl-charcoal hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-kl-maroon text-kl-gold font-bold text-xs rounded-lg hover:bg-kl-maroon-dark transition-all flex items-center gap-1.5 shadow-md"
            >
              <span>Authenticate Persona</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
