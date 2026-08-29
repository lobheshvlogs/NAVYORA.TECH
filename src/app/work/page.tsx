import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/sections/CTABanner';
import { PROJECTS_DATA } from '@/lib/data/projects';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import { ArrowUpRight, CheckCircle, Smartphone, Cpu, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: `Our Selected Work & Engineering Portfolio | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description:
    'Explore our portfolio of high-performance digital platforms including PARCO (Smart QR Parking), INSTACAMPUS (Campus Platform), and Custom Digital Solutions.',
};

export default function WorkPage() {
  return (
    <div className="py-12 lg:py-20 relative">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-purple-600/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <SectionHeader
          badge="OUR PORTFOLIO"
          title="Selected Work & Case"
          titleAccent="Studies."
          description="Explore how we turn complex ideas into high-performing, scalable, and secure digital platforms."
          centered
        />
      </div>

      {/* Case Studies Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={project.slug}
            className="group relative rounded-3xl border border-white/10 bg-[#0F0F16]/90 p-8 sm:p-12 overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* LEFT CONTENT COLUMN */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                    {project.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {project.shortDescription}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {project.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="pt-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* RIGHT 3D MOCKUP PREVIEW */}
              <div className="lg:col-span-6">
                <div
                  className="relative w-full h-80 sm:h-100 rounded-2xl p-6 overflow-hidden flex flex-col justify-between border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ background: project.heroImage }}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-white/80 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>{project.clientCategory}</span>
                    </div>
                    <span>{project.year}</span>
                  </div>

                  <div className="my-auto flex flex-col items-center justify-center text-center p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 shadow-lg">
                      {index === 0 ? (
                        <Smartphone className="w-7 h-7 text-cyan-300" />
                      ) : index === 1 ? (
                        <Cpu className="w-7 h-7 text-purple-300" />
                      ) : (
                        <Shield className="w-7 h-7 text-blue-300" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-slate-300 font-mono">{project.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <span>TIMELINE</span>
                    <span className="text-cyan-400 font-bold">{project.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTABanner />
    </div>
  );
}
