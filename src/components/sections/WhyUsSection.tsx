'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import {
  Code2,
  Cpu,
  ShieldAlert,
  Sparkles,
  Layers,
  TrendingUp,
  Zap,
  Heart,
} from 'lucide-react';
import { motion } from 'framer-motion';

const WHY_US_ITEMS = [
  {
    title: 'Custom Solutions',
    description: '100% custom code built for your needs. Zero generic templates.',
    icon: Code2,
    color: 'text-blue-400',
  },
  {
    title: 'Modern Tech Stack',
    description: 'Built with Next.js, React 19, TypeScript, and cloud servers.',
    icon: Cpu,
    color: 'text-indigo-400',
  },
  {
    title: 'Security First',
    description: 'Protected against attacks with code hardening and secure headers.',
    icon: ShieldAlert,
    color: 'text-cyan-400',
  },
  {
    title: 'Modern UI/UX Design',
    description: 'Clean aesthetics and user flows that command client trust.',
    icon: Sparkles,
    color: 'text-purple-400',
  },
  {
    title: 'End-to-End Delivery',
    description: 'From initial design wireframes to live launch and support.',
    icon: Layers,
    color: 'text-emerald-400',
  },
  {
    title: 'Built For Growth',
    description: 'Scalable architecture ready to support thousands of users.',
    icon: TrendingUp,
    color: 'text-amber-400',
  },
  {
    title: 'Fast Page Speeds',
    description: 'Optimized for instant page loads and zero lag.',
    icon: Zap,
    color: 'text-sky-400',
  },
  {
    title: 'Mobile First & Accessible',
    description: 'Works perfectly across smartphones, tablets, and computers.',
    icon: Heart,
    color: 'text-pink-400',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 relative bg-[#08080C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="WHY CHOOSE US"
          title="Not Just Another"
          titleAccent="Agency."
          description="We combine engineering quality, cybersecurity defense, and modern design into one simple solution."
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US_ITEMS.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group p-5 rounded-2xl bg-[#0F0F16]/90 border border-white/10 hover:border-blue-500/40 hover:bg-[#141420] transition-all duration-300 shadow-md"
              >
                <div className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color} mb-3 group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
