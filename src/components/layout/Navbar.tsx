'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import { Menu, X, ArrowUpRight, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#08080C]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-blue-950/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#08080C] rounded-[7px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="leading-tight font-extrabold tracking-widest text-white text-lg">
                  {SITE_CONFIG.brandName}
                  <span className="text-cyan-400 font-light">.{SITE_CONFIG.brandSuffix}</span>
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 backdrop-blur-md">
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/40 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT CTA BUTTON */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-[#08080C]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl shadow-blue-950/40"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 px-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5" />
                <span>Navigation</span>
              </div>
              <nav className="flex flex-col gap-2">
                {SITE_CONFIG.navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href));

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl border transition-all ${
                        isActive
                          ? 'bg-blue-600/20 border-blue-500/50 text-white font-bold'
                          : 'bg-white/2 border-white/5 text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white shadow-lg text-sm uppercase tracking-wider"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-xs text-slate-500 font-mono">
                  {SITE_CONFIG.contact.availability}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
