'use client';

import { useState, FormEvent } from 'react';
import { AGREEMENT_VERSION } from '@/lib/data/clientAgreement';
import { CheckCircle2, ShieldCheck, Lock, ArrowRight } from 'lucide-react';

export default function DigitalAcceptanceForm() {
  const [checkedAgreement, setCheckedAgreement] = useState(false);
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);
  const [checkedRefund, setCheckedRefund] = useState(false);

  const [formData, setFormData] = useState({
    clientName: '',
    company: '',
    email: '',
    projectName: '',
    signature: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Check if all requirements are satisfied
  const isFormValid =
    checkedAgreement &&
    checkedTerms &&
    checkedPrivacy &&
    checkedRefund &&
    formData.clientName.trim().length > 0 &&
    formData.email.includes('@') &&
    formData.projectName.trim().length > 0 &&
    formData.signature.trim().length > 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setSubmitted(true);
    }
  };

  return (
    <div id="acceptance-section" className="scroll-mt-28 rounded-3xl bg-[#0F0F16]/95 border border-blue-500/30 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
        <ShieldCheck className="w-4 h-4" />
        <span>LEGAL ACKNOWLEDGEMENT</span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Ready to Start?</h3>
      <p className="text-sm text-slate-300 mb-8">
        Please review the agreement carefully before approving your project.
      </p>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-blue-950/40 border border-cyan-400/50 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-300">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-white">Agreement Digital Signature Recorded</h4>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you, <span className="font-bold text-white">{formData.clientName}</span>. Your digital acceptance for project <span className="font-bold text-cyan-300">{formData.projectName}</span> under version <span className="font-mono text-slate-200">{AGREEMENT_VERSION.version}</span> has been logged.
          </p>
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-400 max-w-md mx-auto text-left space-y-1">
            <p>Signature: {formData.signature}</p>
            <p>Status: VERIFIED & ACTIVE</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* UNCHECKED CHECKBOXES */}
          <div className="space-y-3 p-5 rounded-2xl bg-white/2 border border-white/10">
            <label htmlFor="chk-agreement" className="flex items-start gap-3 cursor-pointer group">
              <input
                id="chk-agreement"
                type="checkbox"
                checked={checkedAgreement}
                onChange={(e) => setCheckedAgreement(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs text-slate-200 group-hover:text-white transition-colors">
                I have read and agree to the Client Service Agreement. *
              </span>
            </label>

            <label htmlFor="chk-terms" className="flex items-start gap-3 cursor-pointer group">
              <input
                id="chk-terms"
                type="checkbox"
                checked={checkedTerms}
                onChange={(e) => setCheckedTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs text-slate-200 group-hover:text-white transition-colors">
                I have read and agree to the Terms & Conditions. *
              </span>
            </label>

            <label htmlFor="chk-privacy" className="flex items-start gap-3 cursor-pointer group">
              <input
                id="chk-privacy"
                type="checkbox"
                checked={checkedPrivacy}
                onChange={(e) => setCheckedPrivacy(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs text-slate-200 group-hover:text-white transition-colors">
                I have read the Privacy Policy. *
              </span>
            </label>

            <label htmlFor="chk-refund" className="flex items-start gap-3 cursor-pointer group">
              <input
                id="chk-refund"
                type="checkbox"
                checked={checkedRefund}
                onChange={(e) => setCheckedRefund(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs text-slate-200 group-hover:text-white transition-colors">
                I have reviewed the Refund & Cancellation Policy. *
              </span>
            </label>
          </div>

          {/* CLIENT INPUT FIELDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="client-full-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Client Full Name *
              </label>
              <input
                id="client-full-name"
                type="text"
                required
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="client-company-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Company / Organization
              </label>
              <input
                id="client-company-name"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Apex Innovations"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="client-email-addr" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address *
              </label>
              <input
                id="client-email-addr"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@apex.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="client-project-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Project Name *
              </label>
              <input
                id="client-project-name"
                type="text"
                required
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                placeholder="e.g. Apex Web Platform Build"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* READ-ONLY AUTO-FILLED METADATA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white/2 border border-white/5 text-xs font-mono text-slate-400">
            <div>
              <span>Agreement Version: </span>
              <span className="text-cyan-400 font-bold">{AGREEMENT_VERSION.version}</span>
            </div>
            <div>
              <span>Execution Jurisdiction: </span>
              <span className="text-white font-bold">{AGREEMENT_VERSION.jurisdiction}</span>
            </div>
          </div>

          {/* DIGITAL SIGNATURE STRING */}
          <div>
            <label htmlFor="client-dig-signature" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Digital Signature / Type Full Name *
            </label>
            <input
              id="client-dig-signature"
              type="text"
              required
              value={formData.signature}
              onChange={(e) => setFormData({ ...formData, signature: e.target.value })}
              placeholder="Type your full legal name as digital signature..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-300 placeholder-slate-500 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ACCEPTANCE BUTTON */}
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {!isFormValid ? (
              <>
                <Lock className="w-4 h-4" />
                <span>Complete Requirements To Accept</span>
              </>
            ) : (
              <>
                <span>Accept & Continue</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
