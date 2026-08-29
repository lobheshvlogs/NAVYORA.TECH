import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/sections/CTABanner';
import { ABOUT_DATA } from '@/lib/data/about';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import { ShieldCheck, Cpu, Code, Sparkles, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: `About Our Technology Studio & Philosophy | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description:
    'Learn about NAVYORA STUDIO, our engineering philosophy, cybersecurity standards, full-stack capabilities, and team milestones.',
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20 relative">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <SectionHeader
          badge={ABOUT_DATA.hero.badge}
          title={ABOUT_DATA.hero.headline}
          description={ABOUT_DATA.hero.description}
          centered
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24 relative z-10">
        {/* PHILOSOPHY SECTION */}
        <div className="rounded-3xl border border-white/10 p-8 sm:p-14 bg-[#0F0F16]/90 shadow-2xl backdrop-blur-xl">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              {ABOUT_DATA.philosophy.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {ABOUT_DATA.philosophy.headline}
            </h2>
            <blockquote className="p-4 rounded-xl bg-blue-950/40 border-l-4 border-blue-500 text-lg font-medium text-blue-200 italic font-mono">
              &ldquo;{ABOUT_DATA.philosophy.quote}&rdquo;
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {ABOUT_DATA.philosophy.points.map((pt, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/3 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>{pt.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERTISE MATRIX */}
        <div className="space-y-8">
          <SectionHeader
            badge="ENGINEERING CAPABILITIES"
            title="Our Technical & Creative"
            titleAccent="Expertise."
            description="A comprehensive matrix of technologies, frameworks, and security disciplines we master."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.expertise.map((exp, eIdx) => (
              <div
                key={eIdx}
                className="p-6 rounded-2xl bg-[#0F0F16]/90 border border-white/10 space-y-4 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400">
                  {eIdx === 0 ? (
                    <Code className="w-5 h-5" />
                  ) : eIdx === 1 ? (
                    <Cpu className="w-5 h-5" />
                  ) : eIdx === 2 ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-white">{exp.category}</h3>

                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  {exp.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* MILESTONES TIMELINE */}
        <div className="rounded-3xl border border-white/10 p-8 sm:p-14 bg-[#0F0F16]/90 shadow-2xl">
          <SectionHeader
            badge="STUDIO EVOLUTION"
            title="Journey & Key"
            titleAccent="Milestones."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.milestones.map((m, mIdx) => (
              <div key={mIdx} className="p-6 rounded-2xl bg-white/3 border border-white/10 space-y-3">
                <span className="text-2xl font-bold font-mono text-cyan-400">{m.year}</span>
                <h3 className="text-base font-bold text-white">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CORE OPERATING PRINCIPLES */}
        <div className="rounded-3xl border border-white/10 p-8 sm:p-12 bg-linear-to-r from-blue-950/30 via-[#0F0F16]/90 to-cyan-950/30 shadow-xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            FOUNDATIONAL STANDARDS
          </span>
          <h3 className="text-2xl font-bold text-white">How We Guarantee Client Success</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {ABOUT_DATA.principles.map((pr, pIdx) => (
              <div key={pIdx} className="p-4 rounded-xl bg-white/3 border border-white/10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-xs font-mono text-slate-200">{pr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
