'use client';

import { Printer } from 'lucide-react';

export default function PrintAgreementButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
    >
      <Printer className="w-3.5 h-3.5" />
      <span>Print Agreement</span>
    </button>
  );
}
