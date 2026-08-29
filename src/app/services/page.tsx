import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import ProjectCostCalculator from '@/components/ui/ProjectCostCalculator';
import CTABanner from '@/components/sections/CTABanner';
import { SERVICES_DATA } from '@/lib/data/services';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import {
  Globe,
  Server,
  ShieldCheck,
  Palette,
  TrendingUp,
  Sparkles,
  Cpu,
  CheckCircle,
  LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Our Digital Services & Technical Capabilities | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description:
    'Explore our 7 core technology offerings across Web Development, Backend Systems, Cybersecurity Audits, UI/UX Design, Digital Advertising, Graphic Design, and Custom Automation.',
};

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Server,
  ShieldCheck,
  Palette,
  TrendingUp,
  Sparkles,
  Cpu,
};

export default function ServicesPage() {
  return (
    <div className="py-12 lg:py-20 relative">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <SectionHeader
          badge="EXPANDED SERVICES CATALOG"
          title="Engineering Solutions Built For"
          titleAccent="Scale & Impact."
          description="A detailed architectural breakdown of our 7 specialized digital capabilities, workflows, technology stacks, and deliverables."
          centered
        />
      </div>

      {/* Services Breakdown List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {SERVICES_DATA.map((service) => {
          const IconComp = iconMap[service.iconName] || Globe;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-[#0F0F16]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Header Info Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-extrabold font-mono text-cyan-400">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {service.fullDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button href="/contact" variant="primary" size="md">
                      Start {service.title} Project
                    </Button>
                  </div>
                </div>

                {/* Capabilities & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="p-6 rounded-2xl bg-white/2 border border-white/10">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-4 flex items-center gap-2 font-bold">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>What Is Included / Deliverables</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="p-6 rounded-2xl bg-white/2 border border-white/10">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-4 font-bold">
                      Execution Workflow
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.workflowSteps.map((wf) => (
                        <div key={wf.step} className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-cyan-400">
                              [{wf.step}]
                            </span>
                            <span className="text-xs font-bold text-white">{wf.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-400">{wf.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* INTERACTIVE COST CALCULATOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <ProjectCostCalculator />
      </div>

      <CTABanner />
    </div>
  );
}
