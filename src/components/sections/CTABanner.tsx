'use client';

import Button from '@/components/ui/Button';
import { Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="py-20 relative bg-[#08080C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-r from-blue-950/60 via-[#0E0E18] to-purple-950/60 border border-blue-500/30 shadow-2xl text-center"
        >
          {/* Radial Glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              READY TO BUILD?
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto mb-4">
            HAVE AN IDEA WORTH{' '}
            <span className="text-gradient-accent underline decoration-cyan-400/40">
              BUILDING?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed mb-8">
            Let’s turn your idea into a fast, secure, and modern digital platform built for growth.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="glow" size="lg">
              Start a Project
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to Us
            </Button>
          </div>

          {/* Trust Footnote */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Guaranteed 24-Hour Engineer Response Time</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
