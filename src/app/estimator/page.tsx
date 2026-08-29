import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCostCalculator from '@/components/ui/ProjectCostCalculator';
import CTABanner from '@/components/sections/CTABanner';
import { SITE_CONFIG } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: `Project Cost & Scope Estimator | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description:
    'Calculate live estimated INR budget ranges, delivery schedules, and feature scopes for your web application, cybersecurity audit, or design project.',
};

export default function EstimatorPage() {
  return (
    <div className="py-12 lg:py-20 relative">
      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
        <SectionHeader
          badge="LIVE ESTIMATOR & CALCULATOR"
          title="Instant Project Cost &"
          titleAccent="Scope Estimator."
          description="Select your desired services, features, and timeline to calculate an estimated budget range and delivery schedule in real time."
          centered
        />
      </div>

      {/* Calculator Component Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <ProjectCostCalculator />
      </div>

      <CTABanner />
    </div>
  );
}
