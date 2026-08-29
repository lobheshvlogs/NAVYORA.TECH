import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import AgreementSidebar from '@/components/legal/AgreementSidebar';
import DigitalAcceptanceForm from '@/components/legal/DigitalAcceptanceForm';
import PrintAgreementButton from '@/components/legal/PrintAgreementButton';
import {
  SUMMARY_CARDS,
  FULL_AGREEMENT_CLAUSES,
  AGREEMENT_VERSION,
} from '@/lib/data/clientAgreement';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: `Client Agreement & Service Policies | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description:
    'Clear expectations, transparent terms, and project rules for working with NAVYORA STUDIO.',
};

export default function ClientAgreementPage() {
  return (
    <div className="py-12 lg:py-20 relative">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
        <SectionHeader
          badge="TRANSPARENT CLIENT POLICIES"
          title="Client Agreement &"
          titleAccent="Policies."
          description="Clear expectations. Transparent terms. Better projects."
          centered
        />

        {/* VERSION CONTROL STRIP */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
          <span>Agreement Version: <strong className="text-cyan-400">{AGREEMENT_VERSION.version}</strong></span>
          <span>•</span>
          <span>Last Updated: {AGREEMENT_VERSION.lastUpdated}</span>
          <span>•</span>
          <span>Effective Date: {AGREEMENT_VERSION.effectiveDate}</span>
        </div>
      </div>

      {/* 10 "BEFORE YOU START" SUMMARY CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="rounded-3xl border border-white/10 bg-[#0F0F16]/90 p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>BEFORE YOU START — TOP SUMMARY</span>
            </div>
            <a
              href="#full-agreement"
              className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-cyan-300 transition-colors"
            >
              <span>Read Full Agreement ↓</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SUMMARY_CARDS.map((card) => (
              <div
                key={card.number}
                className="p-4 rounded-2xl bg-white/2 border border-white/10 space-y-2 hover:border-blue-500/30 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {card.number} — {card.title}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div id="full-agreement" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 mb-20 relative z-10">
        {/* STICKY NAVIGATION SIDEBAR */}
        <AgreementSidebar />

        {/* FULL 38 CLAUSES CONTENT */}
        <div className="flex-1 space-y-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span>Full Master Client Service Agreement</span>
            </h2>
            <PrintAgreementButton />
          </div>

          {FULL_AGREEMENT_CLAUSES.map((clause) => (
            <div
              key={clause.id}
              id={clause.id}
              className="scroll-mt-28 p-6 rounded-2xl bg-[#0F0F16]/70 border border-white/10 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                <span>CLAUSE {clause.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{clause.title}</h3>

              {/* VISUAL CALLOUT BOX IF PRESENT */}
              {clause.callout && (
                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/40 flex items-start gap-3 text-xs font-mono text-blue-200">
                  <AlertTriangle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cyan-400">{clause.callout.type}: </strong>
                    <span>&ldquo;{clause.callout.text}&rdquo;</span>
                  </div>
                </div>
              )}

              <div className="space-y-2 text-sm text-slate-300 leading-relaxed font-normal">
                {clause.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          {/* DIGITAL ACCEPTANCE SECTION */}
          <DigitalAcceptanceForm />

          {/* RELATED LEGAL DOCUMENTS STRIP */}
          <div className="p-6 rounded-2xl bg-white/2 border border-white/10 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Related Legal Documents & Policies
            </h4>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <Link href="/terms" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 hover:bg-white/10">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 hover:bg-white/10">
                Privacy Policy
              </Link>
              <Link href="/refund" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 hover:bg-white/10">
                Refund Policy
              </Link>
              <Link href="/disclaimer" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 hover:bg-white/10">
                Disclaimer
              </Link>
              <Link href="/cookie-policy" className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 hover:bg-white/10">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
