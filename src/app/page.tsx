import HeroSection from '@/components/sections/HeroSection';
import TechMarquee from '@/components/sections/TechMarquee';
import ServicesGrid from '@/components/sections/ServicesGrid';
import FeaturedWork from '@/components/sections/FeaturedWork';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import TechEcosystemSection from '@/components/sections/TechEcosystemSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ProjectCostCalculator from '@/components/ui/ProjectCostCalculator';
import ClientAgreementSection from '@/components/sections/ClientAgreementSection';
import FAQSection from '@/components/sections/FAQSection';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <ServicesGrid />
      
      {/* Home Page Interactive Cost Estimator Section */}
      <section id="estimator" className="py-20 relative bg-[#08080C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ProjectCostCalculator />
        </div>
      </section>

      <FeaturedWork />
      <ProcessTimeline />
      <TechEcosystemSection />
      <WhyUsSection />
      <ClientAgreementSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
