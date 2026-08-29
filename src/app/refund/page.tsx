import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: `Refund & Cancellation Policy | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description: 'Understand deposit, milestone, and project cancellation policies.',
};

export default function RefundPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badge="CANCEL & REFUND RULES"
        title="Refund & Cancellation"
        titleAccent="Policy."
        description="Clear expectations regarding project deposits, milestones, and cancellations."
        centered
      />

      <div className="rounded-3xl bg-[#0F0F16]/90 border border-white/10 p-8 sm:p-12 space-y-8 text-sm text-slate-300 leading-relaxed font-normal">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">1. Deposit Policy</h3>
          <p>Initial project deposits (typically 50%) cover initial asset allocation, wireframing, and code architecture. Deposits are non-refundable once work has commenced.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">2. Milestone Payments</h3>
          <p>Completed project milestones approved by the Client are non-refundable.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">3. Project Cancellation</h3>
          <p>Projects may be cancelled with 7 days written notice. Payment is due for all work hours logged up to the cancellation date as outlined in our <Link href="/client-agreement" className="text-cyan-400 underline">Client Agreement</Link>.</p>
        </div>
      </div>
    </div>
  );
}
