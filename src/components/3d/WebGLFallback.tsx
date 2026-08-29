'use client';

import { Zap, Shield, Cpu, Globe, Server, Palette } from 'lucide-react';

const NODES = [
  { icon: Globe, label: 'Web Dev', color: 'text-blue-400', border: 'border-blue-500/40', x: 130, y: 0 },
  { icon: Server, label: 'Backend', color: 'text-indigo-400', border: 'border-indigo-500/40', x: 40, y: 124 },
  { icon: Shield, label: 'Security', color: 'text-cyan-400', border: 'border-cyan-500/40', x: -105, y: 76 },
  { icon: Palette, label: 'UI/UX Design', color: 'text-purple-400', border: 'border-purple-500/40', x: -105, y: -76 },
  { icon: Cpu, label: 'Automation', color: 'text-emerald-400', border: 'border-emerald-500/40', x: 40, y: -124 },
];

export default function WebGLFallback() {
  return (
    <div className="relative w-full h-100 sm:h-120 rounded-3xl border border-white/10 bg-linear-to-b from-[#0F0F1A] to-[#08080C] p-6 overflow-hidden flex items-center justify-center shadow-2xl">
      {/* Background Tech Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      {/* Central Pulsing Tech Core */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-linear-to-tr from-blue-600/30 via-purple-600/30 to-cyan-500/30 border border-blue-500/50 shadow-2xl shadow-blue-500/20 animate-pulse">
          <div className="w-16 h-16 rounded-full bg-[#08080C] border border-blue-400/60 flex items-center justify-center">
            <Zap className="w-8 h-8 text-cyan-400 animate-bounce" />
          </div>
        </div>
        <p className="mt-4 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          NAVYORA DIGITAL CORE
        </p>
      </div>

      {/* Orbiting Satellite Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {NODES.map((node, i) => {
          const IconComponent = node.icon;
          const xFormatted = node.x >= 0 ? `+ ${node.x}px` : `- ${Math.abs(node.x)}px`;
          const yFormatted = node.y >= 0 ? `+ ${node.y}px` : `- ${Math.abs(node.y)}px`;

          return (
            <div
              key={node.label}
              className="absolute left-1/2 top-1/2 transition-transform duration-700"
              style={{
                transform: `translate(calc(-50% ${xFormatted}), calc(-50% ${yFormatted}))`,
              }}
            >
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0B12]/90 border ${node.border} shadow-lg backdrop-blur-md animate-float`}
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <IconComponent className={`w-3.5 h-3.5 ${node.color}`} />
                <span className="text-xs font-mono text-slate-200">{node.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

