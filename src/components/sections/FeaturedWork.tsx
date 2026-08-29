'use client';

import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { PROJECTS_DATA } from '@/lib/data/projects';
import { ArrowUpRight, CheckCircle, Cpu, Shield, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 relative bg-[#050508] overflow-hidden">
      {/* Ambient Radial Lights */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-indigo-600/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="FEATURED CASE STUDIES"
            title="Selected"
            titleAccent="Work."
            description="Real ideas. Real systems. Real digital experiences."
          />
          <Button href="/work" variant="outline" size="md">
            View All Projects
          </Button>
        </div>

        {/* Cinematic Case Studies List */}
        <div className="space-y-16">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl border border-white/10 bg-[#0F0F16]/80 p-8 sm:p-12 overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
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

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
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
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* RIGHT 3D / VISUAL MOCKUP PREVIEW */}
                <div className="lg:col-span-6">
                  <div
                    className="relative w-full h-[320px] sm:h-[380px] rounded-2xl p-6 overflow-hidden flex flex-col justify-between border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                    style={{ background: project.heroImage }}
                  >
                    {/* Top Decorative Tech Bar */}
                    <div className="flex items-center justify-between text-xs font-mono text-white/80 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span>SYSTEM LIVE</span>
                      </div>
                      <span>{project.year}</span>
                    </div>

                    {/* Central 3D Platform Mockup Representation */}
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
                      <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                      <p className="text-xs text-slate-300 font-mono">{project.subtitle}</p>
                    </div>

                    {/* Bottom Tech Outcome Metric */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                      <span>PERFORMANCE TARGET</span>
                      <span className="text-cyan-400 font-bold">100% PRODUCTION READY</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
