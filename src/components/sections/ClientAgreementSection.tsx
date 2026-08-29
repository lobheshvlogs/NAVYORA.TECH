'use client';

import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { SUMMARY_CARDS, AGREEMENT_VERSION } from '@/lib/data/clientAgreement';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClientAgreementSection() {
  return (
    <section className="py-20 relative bg-[#050508] border-t border-white/10 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="TRANSPARENT CLIENT POLICIES"
          title="Clear Expectations. Transparent"
          titleAccent="Terms."
          description="We believe in 100% transparency. Review our 10 project rules and 38-clause master agreement before starting."
          centered
          className="mb-14"
        />

        {/* Highlight Summary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SUMMARY_CARDS.slice(0, 4).map((card) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-2xl bg-[#0F0F16]/90 border border-white/10 space-y-2 hover:border-blue-500/40 transition-all"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>{card.number} — {card.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Banner CTA Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0F0F16] to-purple-950/40 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Full Client Service Agreement {AGREEMENT_VERSION.version}</h3>
              <p className="text-xs text-slate-400 font-mono">38 Structured Clauses • Digital Acceptance • Clear Protection</p>
            </div>
          </div>

          <Link
            href="/client-agreement"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2 shrink-0"
          >
            <span>Review Full Client Agreement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
