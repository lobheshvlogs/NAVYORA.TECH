import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import ClientPortalView from '@/components/portal/ClientPortalView';
import CTABanner from '@/components/sections/CTABanner';
import { SITE_CONFIG } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: `Client Portal & Milestone Tracker | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description:
    'Track live project engineering milestones, access file deliverables, and view invoice status for NAVYORA STUDIO projects.',
};

export default function ClientPortalPage() {
  return (
    <div className="py-12 lg:py-20 relative">
      {/* Ambient Background Lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <SectionHeader
          badge="CLIENT HUB"
          title="Client Portal & Milestone"
          titleAccent="Tracker."
          description="Enter your project ID to view live engineering progress, download file deliverables, and check invoice status."
          centered
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <ClientPortalView />
      </div>

      <CTABanner />
    </div>
  );
}
