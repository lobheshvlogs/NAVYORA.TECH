import Button from '@/components/ui/Button';
import { ShieldAlert, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-blue-600/15 blur-[150px] rounded-full" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        {/* Error Code Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-mono font-bold tracking-widest uppercase shadow-lg shadow-red-950/50">
          <ShieldAlert className="w-4 h-4" />
          <span>HTTP 404 — RESOURCE NOT FOUND</span>
        </div>

        {/* Glitch 404 Headline */}
        <h1 className="text-7xl sm:text-9xl font-extrabold text-white tracking-tighter font-mono">
          40<span className="text-gradient-accent">4</span>
        </h1>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Digital Route Offline
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-md mx-auto">
            The requested page endpoint does not exist or has been relocated within our technology studio architecture.
          </p>
        </div>

        {/* Code Console Visual */}
        <div className="p-4 rounded-2xl bg-[#0F0F16] border border-white/10 text-left font-mono text-xs text-slate-400 space-y-1">
          <div className="flex items-center gap-2 text-slate-500 pb-2 border-b border-white/5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>system_status.log</span>
          </div>
          <p className="text-red-400">[ERROR]: Target route failed DNS & page resolution.</p>
          <p className="text-cyan-400">[INFO]: Standard redirect protocols ready.</p>
        </div>

        {/* Recovery Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button href="/" variant="primary" size="md">
            Return To Home
          </Button>
          <Button href="/work" variant="outline" size="md">
            Explore Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
