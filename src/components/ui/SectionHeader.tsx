interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleAccent,
  description,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`space-y-4 max-w-3xl ${
        centered ? 'mx-auto text-center' : ''
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
        {title}{' '}
        {titleAccent && (
          <span className="text-gradient-accent">{titleAccent}</span>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
