import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import { Zap, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

const LinkedInIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92M7.85 18.5V10.13H5.06v8.37h2.79z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#050508] text-slate-400 border-t border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#08080C] rounded-[7px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold tracking-wider text-white">
                {SITE_CONFIG.brandName}
                <span className="text-cyan-400 font-light">.{SITE_CONFIG.brandSuffix}</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              NAVYORA.TECH builds high-performance web applications, scalable backend systems, cybersecurity hardening, UI/UX designs, and custom software.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Cybersecurity & Enterprise Grade Engineering</span>
            </div>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CAPABILITIES COLUMN */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Backend & APIs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  UI/UX & Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL & POLICIES COLUMN */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Legal & Trust
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/client-agreement" className="hover:text-cyan-400 transition-colors">
                  Client Agreement
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-cyan-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-cyan-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT COLUMN */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Connect
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="truncate">{SITE_CONFIG.contact.email}</span>
              </a>
              <p className="text-xs text-slate-500 font-mono">
                {SITE_CONFIG.contact.availability}
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                aria-label="Send Email"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-600/20 transition-all"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/navyora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-600/20 transition-all"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/navyora.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-600/20 transition-all"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT STRIP */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 {SITE_CONFIG.brandName} {SITE_CONFIG.brandSuffix}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/client-agreement" className="hover:text-cyan-400">
              Client Agreement v2.4
            </Link>
            <span>WCAG 2.1 Accessible</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
