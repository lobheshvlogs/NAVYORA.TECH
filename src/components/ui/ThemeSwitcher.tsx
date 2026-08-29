'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { THEME_OPTIONS, ThemeOption } from '@/lib/data/themes';
import { Palette, Check, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function getSavedTheme(): string {
  if (typeof window === 'undefined') return 'cyber-graphite';
  try {
    const saved = localStorage.getItem('navyora-theme');
    if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }
  return 'cyber-graphite';
}

function subscribeToThemeStorage(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener('navyora-theme-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('navyora-theme-change', callback);
  };
}

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const activeTheme = useSyncExternalStore(
    subscribeToThemeStorage,
    getSavedTheme,
    () => 'cyber-graphite'
  );

  useEffect(() => {
    const match = THEME_OPTIONS.find((t) => t.id === activeTheme);
    if (match) {
      document.documentElement.setAttribute('data-theme', match.id);
      document.documentElement.style.setProperty('--bg-dark', match.bgDark);
      document.documentElement.style.setProperty('--bg-card', match.cardBg);
      document.documentElement.style.setProperty('--accent-primary', match.accentPrimary);
      document.documentElement.style.setProperty('--accent-secondary', match.accentSecondary);
    }
  }, [activeTheme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const selectTheme = (theme: ThemeOption) => {
    try {
      localStorage.setItem('navyora-theme', theme.id);
      window.dispatchEvent(new Event('navyora-theme-change'));
    } catch {
      // Ignore storage error
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0F0F16]/90 border border-white/20 text-xs font-mono text-white shadow-2xl backdrop-blur-xl hover:border-cyan-400/60 hover:scale-105 transition-all"
        aria-label="Change Studio Visual Theme"
      >
        <Palette className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform" />
        <span className="hidden sm:inline font-bold">Theme Style</span>
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      </button>

      {/* Theme Selection Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 right-0 w-80 sm:w-96 p-5 rounded-3xl bg-[#0F0F16]/95 border border-white/15 shadow-2xl backdrop-blur-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Select Visual Style
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {THEME_OPTIONS.map((theme) => {
                const isActive = activeTheme === theme.id;

                return (
                  <button
                    key={theme.id}
                    onClick={() => selectTheme(theme)}
                    className={`w-full p-3.5 rounded-2xl text-left border transition-all flex items-start gap-3 ${
                      isActive
                        ? 'bg-blue-600/20 border-cyan-400 text-white shadow-lg'
                        : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07]'
                    }`}
                  >
                    {/* Theme Swatch Preview */}
                    <div
                      className="w-7 h-7 rounded-xl shrink-0 border border-white/20 flex items-center justify-center shadow-md mt-0.5"
                      style={{ backgroundColor: theme.bgDark }}
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: theme.accentPrimary }}
                      />
                    </div>

                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{theme.name}</span>
                        {isActive && <Check className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <p className="text-[10px] font-mono text-cyan-300">{theme.tag}</p>
                      <p className="text-[11px] text-slate-400 font-normal leading-tight">
                        {theme.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
