'use client';

import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { SERVICES_DATA } from '@/lib/data/services';
import {
  Globe,
  Server,
  ShieldCheck,
  Palette,
  TrendingUp,
  Sparkles,
  Cpu,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Server,
  ShieldCheck,
  Palette,
  TrendingUp,
  Sparkles,
  Cpu,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative bg-[#08080C] overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="OUR CAPABILITIES"
          title="Everything You Need To Build And"
          titleAccent="Grow Digitally."
          description="We combine engineering precision, creative strategy, cybersecurity defense, and digital growth into one unified solution."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-3xl p-8 bg-[#0F0F16]/90 border border-white/10 hover:border-blue-500/40 hover:bg-[#151522] transition-all duration-400 shadow-xl hover:shadow-2xl hover:shadow-blue-950/40"
              >
                {/* Number & Icon Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-white/20 group-hover:text-blue-400/80 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Capabilities Pills */}
                  <div className="space-y-2 mb-8">
                    {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Service CTA Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-white">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="font-mono text-[10px] text-slate-500">{service.number} / 07</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
