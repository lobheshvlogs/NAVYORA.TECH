import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon = true,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 interactive-hover';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-[1.02]',
    secondary:
      'bg-white/10 text-white border border-white/15 hover:bg-white/15 hover:border-white/30 backdrop-blur-md',
    outline:
      'bg-transparent text-slate-300 border border-white/20 hover:text-white hover:border-blue-500/60 hover:bg-blue-600/10',
    glow:
      'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-[1.03]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  const { type = 'button', ...restProps } = props;

  return (
    <button type={type} className={`group ${combinedClasses}`} {...restProps}>
      {content}
    </button>
  );
}
