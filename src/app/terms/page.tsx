import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description: 'Terms and conditions governing use of NAVYORA STUDIO services and website.',
};

export default function TermsPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badge="LEGAL TERMS"
        title="Terms &"
        titleAccent="Conditions."
        description="Standard terms of service governing usage of NAVYORA STUDIO digital products and web assets."
        centered
      />

      <div className="rounded-3xl bg-[#0F0F16]/90 border border-white/10 p-8 sm:p-12 space-y-8 text-sm text-slate-300 leading-relaxed font-normal">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">1. Overview</h3>
          <p>By accessing navyora.tech or engaging our studio for web development, backend engineering, design, or cybersecurity services, you agree to comply with these Terms & Conditions.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">2. Acceptable Use</h3>
          <p>You agree not to misuse our digital assets, attempt unauthorized server intrusion, or copy proprietary design code without written consent.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">3. Service Contracts</h3>
          <p>All active agency service engagements are further governed by our detailed <Link href="/client-agreement" className="text-cyan-400 underline">Client Agreement & Policies</Link>.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">4. Governing Law</h3>
          <p>These terms shall be governed by and construed in accordance with applicable commercial laws and digital trade regulations.</p>
        </div>
      </div>
    </div>
  );
}
