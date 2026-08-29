'use client';

import { useState, useEffect } from 'react';
import { AGREEMENT_NAV_TOPICS } from '@/lib/data/clientAgreement';
import { Menu, FileText } from 'lucide-react';

export default function AgreementSidebar() {
  const [activeId, setActiveId] = useState<string>(AGREEMENT_NAV_TOPICS[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const topic of AGREEMENT_NAV_TOPICS) {
        const el = document.getElementById(topic.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(topic.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* DESKTOP STICKY SIDEBAR */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-28 p-5 rounded-2xl bg-[#0F0F16]/90 border border-white/10 shadow-xl space-y-4 max-h-[calc(100vh-140px)] overflow-y-auto">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-3">
            <FileText className="w-4 h-4" />
            <span>Agreement Topics</span>
          </div>

          <nav className="space-y-1">
            {AGREEMENT_NAV_TOPICS.map((topic) => {
              const isActive = activeId === topic.id;
              return (
                <button
                  type="button"
                  key={topic.id}
                  onClick={() => scrollToSection(topic.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/30 text-white font-bold border border-blue-500/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span className="truncate">{topic.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* MOBILE COMPACT NAVIGATOR */}
      <div className="lg:hidden mb-8">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle agreement section navigation"
          className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0F0F16] border border-white/10 text-xs font-mono text-cyan-400 font-bold"
        >
          <div className="flex items-center gap-2">
            <Menu className="w-4 h-4" />
            <span>Jump to Agreement Section</span>
          </div>
          <span>▼</span>
        </button>

        {mobileOpen && (
          <div className="mt-2 p-4 rounded-xl bg-[#0F0F16] border border-white/10 grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {AGREEMENT_NAV_TOPICS.map((topic) => (
              <button
                type="button"
                key={topic.id}
                onClick={() => scrollToSection(topic.id)}
                className="text-left px-3 py-2 rounded-lg text-xs font-mono text-slate-300 bg-white/5 hover:bg-white/10 truncate"
              >
                {topic.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
