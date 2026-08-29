import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: `Legal Disclaimer | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description: 'General legal disclaimer regarding website content and technology services.',
};

export default function DisclaimerPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badge="LEGAL NOTICE"
        title="Legal"
        titleAccent="Disclaimer."
        description="Information and guarantees regarding agency digital services."
        centered
      />

      <div className="rounded-3xl bg-[#0F0F16]/90 border border-white/10 p-8 sm:p-12 space-y-8 text-sm text-slate-300 leading-relaxed font-normal">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">1. General Information</h3>
          <p>The information on navyora.tech is provided for general informational purposes. All services are governed by formal signed proposals and client agreements.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">2. Security Disclaimer</h3>
          <p>Cybersecurity audits and website hardening reduce vulnerability risk significantly but cannot guarantee absolute immunity against unknown zero-day cyber threats.</p>
        </div>
      </div>
    </div>
  );
}
