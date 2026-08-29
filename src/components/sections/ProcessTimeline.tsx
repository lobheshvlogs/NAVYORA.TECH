'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import { Search, Compass, Palette, Code, ShieldCheck, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'We listen to your business goals, target audience, and project requirements.',
    icon: Search,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/40',
  },
  {
    step: '02',
    title: 'Plan & Strategy',
    description: 'We map out the tech stack, page structure, and design direction.',
    icon: Compass,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/40',
  },
  {
    step: '03',
    title: 'Design',
    description: 'We design modern visual layouts and interactive prototypes in Figma.',
    icon: Palette,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
  },
  {
    step: '04',
    title: 'Build',
    description: 'We code clean, fast, custom web pages, databases, and backend APIs.',
    icon: Code,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
  },
  {
    step: '05',
    title: 'Test & Secure',
    description: 'We test for speed, mobile responsiveness, and security hardening.',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
  },
  {
    step: '06',
    title: 'Launch & Support',
    description: 'We publish your site live to cloud servers and provide ongoing support.',
    icon: Rocket,
    color: 'text-blue-500',
    borderColor: 'border-blue-500/50',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 relative bg-[#08080C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="SIMPLE PROCESS"
          title="From Idea To"
          titleAccent="Execution."
          description="A clear, simple 6-step process designed to take your project from concept to live launch."
          centered
          className="mb-16"
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl bg-[#0F0F16]/90 border border-white/10 p-6 hover:border-blue-500/40 hover:bg-[#141420] transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-white/20 group-hover:text-cyan-400 transition-colors">
                    {item.step}
                  </span>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 border ${item.borderColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>STEP {item.step}</span>
                  <span className="text-blue-400">CLEAR WORKFLOW</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
