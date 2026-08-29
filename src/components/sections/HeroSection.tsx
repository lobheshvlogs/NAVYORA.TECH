'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroCoreCanvas from '@/components/3d/HeroCoreCanvas';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  ShieldCheck,
  Cpu,
  Palette,
  ArrowRight,
  Sparkles,
  Terminal,
  Zap,
  Activity,
  CheckCircle2,
  Lock,
  Code2,
  Calculator,
} from 'lucide-react';

const ROTATING_WORDS = [
  'Modern Web Apps.',
  'Scalable Backend APIs.',
  'Cybersecurity Hardening.',
  'UI/UX Design Systems.',
  'Business Automation.',
];

const CODE_SNIPPET = `// NAVYORA.TECH Production Architecture
export const studioConfig = {
  stack: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js'],
  security: {
    ssl: 'TLS 1.3 Strict',
    owaspGuard: true,
    cspPolicy: 'Hardened-Strict',
    headers: ['HSTS', 'X-Frame-Deny', 'X-XSS-Protection'],
  },
  performance: {
    coreWebVitals: '99/100',
    edgeLatency: '< 30ms',
    pageLoadSpeed: '0.4s Ultra-Fast',
  },
  pricingFloor: '₹6,000 Starter Tier',
};`;

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'3d' | 'code' | 'telemetry'>('3d');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
      {/* Dynamic Background Radial Lights */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-600/15 via-cyan-600/10 to-transparent blur-[160px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: HIGH-IMPACT HEADLINE & INTERACTIVE CTAS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Operational Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-950/20"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="absolute w-4 h-4 rounded-full bg-cyan-400/40 animate-ping" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-cyan-300">
                AVAILABLE FOR 2026 DIGITAL PROJECTS
              </span>
            </motion.div>

            {/* Dynamic Animated Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              ARCHITECTING HIGH-VELOCITY{' '}
              <span className="block mt-1 min-h-[1.25em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal"
            >
              We engineer custom web applications, scalable backend APIs, zero-trust cybersecurity defenses, and modern UI/UX design systems built for speed and conversion.
            </motion.p>

            {/* Interactive Primary & Secondary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-95"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white transition-all duration-300 shadow-lg active:scale-95 group"
              >
                <Calculator className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Calculate Cost (From ₹6K)</span>
              </Link>
            </motion.div>

            {/* Interactive Capability Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-slate-300"
            >
              <Link
                href="/services"
                className="flex items-center gap-2 bg-white/[0.03] hover:bg-blue-600/20 p-2.5 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all group"
              >
                <Globe className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-slate-200 group-hover:text-white">Web Dev</span>
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 bg-white/[0.03] hover:bg-indigo-600/20 p-2.5 rounded-xl border border-white/10 hover:border-indigo-500/40 transition-all group"
              >
                <Cpu className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-slate-200 group-hover:text-white">Backend</span>
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 bg-white/[0.03] hover:bg-cyan-600/20 p-2.5 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all group"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-slate-200 group-hover:text-white">Security</span>
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 bg-white/[0.03] hover:bg-purple-600/20 p-2.5 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all group"
              >
                <Palette className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-slate-200 group-hover:text-white">UI/UX</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: MULTI-MODE INTERACTIVE CENTERPIECE */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl border border-white/15 bg-[#0C0C14]/95 shadow-2xl backdrop-blur-2xl overflow-hidden">
              
              {/* Interactive Viewport Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Mode Selector Buttons */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setActiveTab('3d')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === '3d'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    <span>3D Core</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'code'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Stack HUD</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'telemetry'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Live Metrics</span>
                  </button>
                </div>
              </div>

              {/* Viewport Content */}
              <div className="relative min-h-[420px] sm:min-h-[460px] flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                  {/* TAB 1: 3D INTERACTIVE CORE */}
                  {activeTab === '3d' && (
                    <motion.div
                      key="3d-tab"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full relative"
                    >
                      <HeroCoreCanvas />
                      
                      {/* Floating Interactive HUD Tags */}
                      <div className="absolute top-4 left-4 z-20 pointer-events-auto">
                        <div className="px-3 py-1.5 rounded-xl bg-black/70 border border-cyan-500/30 backdrop-blur-md flex items-center gap-2 text-xs shadow-lg">
                          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                          <span className="font-bold text-white">Next.js 16 + React 19</span>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 z-20 pointer-events-auto">
                        <div className="px-3 py-1.5 rounded-xl bg-black/70 border border-emerald-500/30 backdrop-blur-md flex items-center gap-2 text-xs shadow-lg">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="font-bold text-white">Zero-Trust Security</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: LIVE CODE & ARCHITECTURE HUD */}
                  {activeTab === 'code' && (
                    <motion.div
                      key="code-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex flex-col justify-between space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                          <Code2 className="w-4 h-4 text-cyan-400" />
                          <span>studioConfig.ts</span>
                        </div>
                        <button
                          onClick={handleCopy}
                          className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-[11px] font-mono text-cyan-300 transition-colors"
                        >
                          {copied ? 'Copied!' : 'Copy Code'}
                        </button>
                      </div>

                      <pre className="text-[11px] sm:text-xs font-mono text-slate-300 bg-black/60 p-4 rounded-xl border border-white/10 overflow-x-auto leading-relaxed max-h-[300px]">
                        <code>{CODE_SNIPPET}</code>
                      </pre>

                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Type Safe & Lint Verified</span>
                        </div>
                        <span className="text-slate-400">Turbopack Enabled</span>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: REAL-TIME TELEMETRY & METRICS */}
                  {activeTab === 'telemetry' && (
                    <motion.div
                      key="telemetry-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Engineering Benchmarks
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          All Systems Optimal
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                          <span className="text-xs text-slate-400 block">Performance Index</span>
                          <span className="text-2xl font-extrabold text-cyan-300">99.8%</span>
                          <span className="text-[10px] text-slate-400">Core Web Vitals Max</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                          <span className="text-xs text-slate-400 block">Security Hardening</span>
                          <span className="text-2xl font-extrabold text-emerald-400">A+ Grade</span>
                          <span className="text-[10px] text-slate-400">OWASP Top 10 Guard</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                          <span className="text-xs text-slate-400 block">Avg Edge Response</span>
                          <span className="text-2xl font-extrabold text-blue-400">&lt; 32ms</span>
                          <span className="text-[10px] text-slate-400">Global Cloud CDN</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                          <span className="text-xs text-slate-400 block">Starter Floor</span>
                          <span className="text-2xl font-extrabold text-purple-400">₹6,000</span>
                          <span className="text-[10px] text-slate-400">Affordable Entry Tiers</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs text-slate-200 font-semibold">100% Client Ownership Guarantee</span>
                        </div>
                        <Link href="/client-agreement" className="text-xs text-cyan-400 hover:underline font-semibold">
                          View Terms
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Telemetry Ticker */}
              <div className="px-4 py-2.5 bg-black/60 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>NAVYORA.TECH CORE ENGINE</span>
                </div>
                <span className="text-cyan-400 font-bold">Interactive Mode Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
