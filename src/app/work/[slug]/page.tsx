import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { PROJECTS_DATA } from '@/lib/data/projects';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Clock,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found | ' + SITE_CONFIG.brandName,
    };
  }

  return {
    title: `${project.title} - ${project.subtitle} | Case Study | ${SITE_CONFIG.brandName}`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params;
  const projectIndex = PROJECTS_DATA.findIndex((p) => p.slug === resolvedParams.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS_DATA[projectIndex];
  const nextProject = PROJECTS_DATA[(projectIndex + 1) % PROJECTS_DATA.length];

  return (
    <article className="py-12 lg:py-20 relative">
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-blue-600/10 blur-[150px] rounded-full" />

      {/* Back Link Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Hero Showcase Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl border border-white/10 p-8 sm:p-14 bg-[#0F0F16]/90 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full">
                CASE STUDY {project.number}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-xl font-medium text-cyan-400 font-mono">
              {project.subtitle}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Key Metadata Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Year: {project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Timeline: {project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Type: {project.clientCategory}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Case Study Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {/* 01. OVERVIEW & CHALLENGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 bg-[#0F0F16]/90 border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>Project Overview</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">{project.fullOverview}</p>
          </div>

          <div className="rounded-3xl p-8 bg-[#0F0F16]/90 border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>The Challenge</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
          </div>
        </div>

        {/* 02. STRATEGY & SOLUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 bg-[#0F0F16]/90 border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Core Strategy</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">{project.strategy}</p>
          </div>

          <div className="rounded-3xl p-8 bg-[#0F0F16]/90 border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span>Engineered Solution</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* 03. KEY FEATURES BREAKDOWN */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#0F0F16]/90 border border-white/10 space-y-8">
          <h2 className="text-2xl font-bold text-white">Core Architectural Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/3 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 04. TECH STACK & SYSTEM ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 rounded-3xl p-8 bg-[#0F0F16]/90 border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white">Technology Stack</h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 rounded-3xl p-8 bg-[#0F0F16]/90 border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white">System Architecture Overview</h2>
            <p className="text-sm text-slate-300 leading-relaxed font-mono">
              {project.architectureOverview}
            </p>
          </div>
        </div>

        {/* 05. SCREENSHOTS & VISUAL SHOWCASE */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Visual Interface Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.screenshots.map((screen, sIdx) => (
              <div
                key={sIdx}
                className={`rounded-2xl p-6 border border-white/10 bg-linear-to-b ${screen.bgGradient} flex flex-col justify-between h-60 shadow-xl`}
              >
                <span className="text-xs font-mono text-cyan-300 uppercase">
                  SCREENSHOT 0{sIdx + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{screen.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 font-normal">{screen.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 06. RESULTS & OUTCOMES */}
        <div className="rounded-3xl p-8 sm:p-12 bg-linear-to-r from-blue-950/40 via-[#0F0F16] to-purple-950/40 border border-blue-500/30 space-y-8">
          <h2 className="text-2xl font-bold text-white">Quantifiable Project Outcomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.resultsAndOutcomes.map((res, rIdx) => (
              <div key={rIdx} className="p-6 rounded-2xl bg-black/40 border border-white/10 text-center space-y-2">
                <span className="text-3xl font-extrabold font-mono text-gradient-accent">
                  {res.metric}
                </span>
                <p className="text-xs text-slate-300 font-mono">{res.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 07. NEXT PROJECT NAVIGATION */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-mono uppercase text-slate-400 hover:text-cyan-400"
          >
            ← View All Work
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 font-bold hover:text-white"
          >
            <span>Next Project: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <CTABanner />
    </article>
  );
}
