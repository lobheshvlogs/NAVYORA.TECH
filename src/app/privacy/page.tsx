import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description: 'How NAVYORA STUDIO handles and protects your data.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badge="DATA PROTECTION"
        title="Privacy"
        titleAccent="Policy."
        description="We respect your privacy and process data with enterprise-grade security."
        centered
      />

      <div className="rounded-3xl bg-[#0F0F16]/90 border border-white/10 p-8 sm:p-12 space-y-8 text-sm text-slate-300 leading-relaxed font-normal">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">1. Information Collection</h3>
          <p>We collect contact information (name, email, phone number, project details) submitted strictly through our project intake forms to communicate regarding service requests.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">2. Data Security</h3>
          <p>We employ server-side input sanitization, rate limiting, and encrypted HTTPS channels to protect submitted client details. We never sell client data to third parties.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">3. Cookies & Analytics</h3>
          <p>We use minimal analytics cookies to understand site performance. You can disable cookies in your browser settings at any time.</p>
        </div>
      </div>
    </div>
  );
}
