import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { SITE_CONFIG } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: `Cookie Policy | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description: 'Learn how NAVYORA STUDIO uses cookies.',
};

export default function CookiePolicyPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badge="COOKIE SETTINGS"
        title="Cookie"
        titleAccent="Policy."
        description="Understanding how cookies are used to optimize site performance."
        centered
      />

      <div className="rounded-3xl bg-[#0F0F16]/90 border border-white/10 p-8 sm:p-12 space-y-8 text-sm text-slate-300 leading-relaxed font-normal">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">1. What Are Cookies?</h3>
          <p>Cookies are small text files stored on your device when visiting websites to improve user experience, session state, and layout preferences.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">2. How We Use Cookies</h3>
          <p>We use essential cookies to remember layout dark-mode preferences, smooth scrolling performance state, and secure form submissions.</p>
        </div>
      </div>
    </div>
  );
}
