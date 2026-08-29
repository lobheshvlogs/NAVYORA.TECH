import { SITE_CONFIG } from '@/lib/data/siteConfig';

export default function TechMarquee() {
  // Multiply array for seamless infinite marquee loop
  const techItems = [...SITE_CONFIG.technologies, ...SITE_CONFIG.technologies, ...SITE_CONFIG.technologies];

  return (
    <section className="py-8 bg-[#050508] border-y border-white/10 overflow-hidden relative">
      {/* Fade Gradients at Edges */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-8 animate-marquee">
        {techItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md shrink-0 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
              {tech.name}
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
