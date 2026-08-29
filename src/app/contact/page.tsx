import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/contact/ContactForm';
import FAQSection from '@/components/sections/FAQSection';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import { Mail, ShieldCheck, Clock, FileText, ArrowRight } from 'lucide-react';

const LinkedInIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92M7.85 18.5V10.13H5.06v8.37h2.79z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const metadata: Metadata = {
  title: `Start a Project & Contact Studio | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  description:
    'Start a new project with NAVYORA.TECH. Submit your web development, backend, cybersecurity, UI/UX, or automation requirements for a 24-hour scope consultation.',
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20 relative">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <SectionHeader
          badge="START A PROJECT"
          title="Let’s Build Something Powerful"
          titleAccent="Together."
          description="Have a web application, cybersecurity audit, UI/UX redesign, or custom software requirement? Tell us about your goals."
          centered
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 relative z-10">
        {/* LEFT DIRECT CONTACT DETAILS & AGREEMENT LINK */}
        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-3xl border border-white/10 p-8 bg-[#0F0F16]/90 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white">Direct Communication</h3>
            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              We work directly with founders, product teams, and businesses worldwide. Reach out directly via Email, LinkedIn, or Instagram.
            </p>

            <div className="space-y-3.5 pt-2">
              {/* EMAIL */}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-600/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Email Us</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate block">{SITE_CONFIG.contact.email}</span>
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/company/navyora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-600/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Connect on LinkedIn</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate block">linkedin.com/company/navyora</span>
                </div>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/navyora.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-600/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-600/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Follow on Instagram</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-300 transition-colors truncate block">@navyora.tech</span>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Response Time: Sub-24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Strict Non-Disclosure Agreement (NDA) Safe</span>
              </div>
            </div>
          </div>

          {/* DEDICATED LEGAL AGREEMENT CALLOUT CARD */}
          <div className="rounded-3xl border border-blue-500/30 p-8 bg-linear-to-r from-blue-950/40 via-[#0F0F16] to-purple-950/40 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              <FileText className="w-4 h-4" />
              <span>TRANSPARENT CLIENT TERMS</span>
            </div>
            <h4 className="text-lg font-bold text-white">Review Our Client Agreement</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              All project proposals and milestone engagements with NAVYORA.TECH are governed by our standard 38-clause Client Agreement.
            </p>
            <Link
              href="/client-agreement"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-white transition-colors pt-1"
            >
              <span>Read Client Agreement & Policies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Social Channels */}
          <div className="rounded-3xl border border-white/10 p-8 bg-[#0F0F16]/90 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Studio Social Profiles
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {SITE_CONFIG.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <span className="block font-bold text-white">{s.name}</span>
                  <span className="text-[10px] text-slate-500">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT MULTI-STEP INTAKE FORM */}
        <div className="lg:col-span-7">
          <Suspense fallback={<div className="p-8 sm:p-12 rounded-3xl bg-[#0F0F16]/90 border border-white/10 animate-pulse h-150" />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>

      <FAQSection />
    </div>
  );
}
