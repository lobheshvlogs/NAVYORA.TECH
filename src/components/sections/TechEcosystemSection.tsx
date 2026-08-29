'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Server,
  Database,
  Palette,
  Sparkles,
  ShieldCheck,
  Cpu,
  Zap,
  Binary,
  Code2,
  Box,
  Wind,
  Terminal,
  Share2,
  Workflow,
  Activity,
  Boxes,
  Flame,
  Leaf,
  Cloud,
  Package,
  Layout,
  Layers,
  Smartphone,
  PenTool,
  Award,
  Orbit,
  MousePointerClick,
  Play,
  Shapes,
  ShieldAlert,
  Lock,
  Fingerprint,
  Shield,
  CheckCheck,
  Scan,
} from 'lucide-react';

interface TechItem {
  name: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  badgeBg: string;
  badgeBorder: string;
}

interface EcosystemCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  items: TechItem[];
}

const ECOSYSTEM_CATEGORIES: EcosystemCategory[] = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    icon: Globe,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/40',
    description: 'High-velocity, responsive user interfaces engineered with modern frameworks and type safety.',
    items: [
      {
        name: 'React 19',
        tag: 'Component Architecture',
        icon: Cpu,
        iconColor: 'text-cyan-400',
        badgeBg: 'bg-cyan-500/10',
        badgeBorder: 'border-cyan-500/30',
      },
      {
        name: 'Next.js 16',
        tag: 'App Router & SSR',
        icon: Zap,
        iconColor: 'text-white',
        badgeBg: 'bg-white/10',
        badgeBorder: 'border-white/20',
      },
      {
        name: 'TypeScript',
        tag: 'Strict Type Safety',
        icon: Binary,
        iconColor: 'text-blue-400',
        badgeBg: 'bg-blue-500/10',
        badgeBorder: 'border-blue-500/30',
      },
      {
        name: 'JavaScript',
        tag: 'Modern ES6+ Engine',
        icon: Code2,
        iconColor: 'text-amber-400',
        badgeBg: 'bg-amber-500/10',
        badgeBorder: 'border-amber-500/30',
      },
      {
        name: 'Three.js',
        tag: '3D & WebGL Canvas',
        icon: Box,
        iconColor: 'text-purple-400',
        badgeBg: 'bg-purple-500/10',
        badgeBorder: 'border-purple-500/30',
      },
      {
        name: 'Tailwind CSS',
        tag: 'Design System & Utility',
        icon: Wind,
        iconColor: 'text-teal-400',
        badgeBg: 'bg-teal-500/10',
        badgeBorder: 'border-teal-500/30',
      },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    icon: Server,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/40',
    description: 'High-throughput microservices, robust REST/GraphQL APIs, and server-side automation.',
    items: [
      {
        name: 'Node.js',
        tag: 'Async Runtime Engine',
        icon: Server,
        iconColor: 'text-emerald-400',
        badgeBg: 'bg-emerald-500/10',
        badgeBorder: 'border-emerald-500/30',
      },
      {
        name: 'Python',
        tag: 'Automation & Logic',
        icon: Terminal,
        iconColor: 'text-yellow-400',
        badgeBg: 'bg-yellow-500/10',
        badgeBorder: 'border-yellow-500/30',
      },
      {
        name: 'REST APIs',
        tag: 'Secure Data Endpoints',
        icon: Share2,
        iconColor: 'text-indigo-400',
        badgeBg: 'bg-indigo-500/10',
        badgeBorder: 'border-indigo-500/30',
      },
      {
        name: 'GraphQL',
        tag: 'Type-Driven Schemas',
        icon: Workflow,
        iconColor: 'text-pink-400',
        badgeBg: 'bg-pink-500/10',
        badgeBorder: 'border-pink-500/30',
      },
      {
        name: 'WebSockets',
        tag: 'Real-Time Bi-Directional',
        icon: Activity,
        iconColor: 'text-cyan-400',
        badgeBg: 'bg-cyan-500/10',
        badgeBorder: 'border-cyan-500/30',
      },
      {
        name: 'Microservices',
        tag: 'Distributed Architecture',
        icon: Boxes,
        iconColor: 'text-purple-400',
        badgeBg: 'bg-purple-500/10',
        badgeBorder: 'border-purple-500/30',
      },
    ],
  },
  {
    id: 'database-cloud',
    title: 'DATABASE / CLOUD',
    icon: Database,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/40',
    description: 'Resilient cloud infrastructure, ACID-compliant databases, and serverless architectures.',
    items: [
      {
        name: 'Firebase',
        tag: 'Auth, Firestore & Hosting',
        icon: Flame,
        iconColor: 'text-amber-400',
        badgeBg: 'bg-amber-500/10',
        badgeBorder: 'border-amber-500/30',
      },
      {
        name: 'PostgreSQL',
        tag: 'Relational SQL Database',
        icon: Database,
        iconColor: 'text-blue-400',
        badgeBg: 'bg-blue-500/10',
        badgeBorder: 'border-blue-500/30',
      },
      {
        name: 'MongoDB',
        tag: 'Flexible NoSQL Storage',
        icon: Leaf,
        iconColor: 'text-emerald-400',
        badgeBg: 'bg-emerald-500/10',
        badgeBorder: 'border-emerald-500/30',
      },
      {
        name: 'AWS Cloud',
        tag: 'S3, Lambda & CloudFront',
        icon: Cloud,
        iconColor: 'text-orange-400',
        badgeBg: 'bg-orange-500/10',
        badgeBorder: 'border-orange-500/30',
      },
      {
        name: 'Redis',
        tag: 'Sub-Millisecond In-Memory',
        icon: Zap,
        iconColor: 'text-rose-400',
        badgeBg: 'bg-rose-500/10',
        badgeBorder: 'border-rose-500/30',
      },
      {
        name: 'Docker',
        tag: 'Containerized Deployment',
        icon: Package,
        iconColor: 'text-cyan-400',
        badgeBg: 'bg-cyan-500/10',
        badgeBorder: 'border-cyan-500/30',
      },
    ],
  },
  {
    id: 'design',
    title: 'DESIGN & UI/UX',
    icon: Palette,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/40',
    description: 'Human-centered user experiences, pixel-perfect design systems, and bespoke graphic identities.',
    items: [
      {
        name: 'Figma',
        tag: 'UI/UX Prototyping',
        icon: Layout,
        iconColor: 'text-purple-400',
        badgeBg: 'bg-purple-500/10',
        badgeBorder: 'border-purple-500/30',
      },
      {
        name: 'Adobe CC',
        tag: 'Brand Art & Creatives',
        icon: Palette,
        iconColor: 'text-rose-400',
        badgeBg: 'bg-rose-500/10',
        badgeBorder: 'border-rose-500/30',
      },
      {
        name: 'Design Systems',
        tag: 'Reusable Token Library',
        icon: Layers,
        iconColor: 'text-indigo-400',
        badgeBg: 'bg-indigo-500/10',
        badgeBorder: 'border-indigo-500/30',
      },
      {
        name: 'Mobile Prototyping',
        tag: 'Responsive User Journeys',
        icon: Smartphone,
        iconColor: 'text-cyan-400',
        badgeBg: 'bg-cyan-500/10',
        badgeBorder: 'border-cyan-500/30',
      },
      {
        name: 'Vector Art',
        tag: 'Logos & Scalable SVGs',
        icon: PenTool,
        iconColor: 'text-amber-400',
        badgeBg: 'bg-amber-500/10',
        badgeBorder: 'border-amber-500/30',
      },
      {
        name: 'Brand Identity',
        tag: 'Visual Guidelines & Assets',
        icon: Award,
        iconColor: 'text-emerald-400',
        badgeBg: 'bg-emerald-500/10',
        badgeBorder: 'border-emerald-500/30',
      },
    ],
  },
  {
    id: 'creative-tech',
    title: 'CREATIVE TECH',
    icon: Sparkles,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/40',
    description: 'Immersive motion, interactive 3D WebGL scenes, and smooth 60fps micro-animations.',
    items: [
      {
        name: 'GSAP Motion',
        tag: 'Complex Scroll Timelines',
        icon: Sparkles,
        iconColor: 'text-green-400',
        badgeBg: 'bg-green-500/10',
        badgeBorder: 'border-green-500/30',
      },
      {
        name: 'WebGL Shaders',
        tag: 'GPU-Accelerated Graphics',
        icon: Orbit,
        iconColor: 'text-cyan-400',
        badgeBg: 'bg-cyan-500/10',
        badgeBorder: 'border-cyan-500/30',
      },
      {
        name: 'React Three Fiber',
        tag: 'Declarative 3D Canvas',
        icon: Box,
        iconColor: 'text-purple-400',
        badgeBg: 'bg-purple-500/10',
        badgeBorder: 'border-purple-500/30',
      },
      {
        name: 'Lenis Scroll',
        tag: 'Inertial Smooth Physics',
        icon: MousePointerClick,
        iconColor: 'text-blue-400',
        badgeBg: 'bg-blue-500/10',
        badgeBorder: 'border-blue-500/30',
      },
      {
        name: 'Lottie Animations',
        tag: 'Vector Micro-Interactions',
        icon: Play,
        iconColor: 'text-teal-400',
        badgeBg: 'bg-teal-500/10',
        badgeBorder: 'border-teal-500/30',
      },
      {
        name: 'Framer Motion',
        tag: 'Spring-Physics Transitions',
        icon: Shapes,
        iconColor: 'text-pink-400',
        badgeBg: 'bg-pink-500/10',
        badgeBorder: 'border-pink-500/30',
      },
    ],
  },
  {
    id: 'security',
    title: 'CYBERSECURITY',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/40',
    description: 'Zero-trust architecture, OWASP threat mitigation, and enterprise compliance hardening.',
    items: [
      {
        name: 'Security Audits',
        tag: 'Vulnerability Profiling',
        icon: ShieldAlert,
        iconColor: 'text-emerald-400',
        badgeBg: 'bg-emerald-500/10',
        badgeBorder: 'border-emerald-500/30',
      },
      {
        name: 'OWASP Defense',
        tag: 'Injection & XSS Hardening',
        icon: Lock,
        iconColor: 'text-blue-400',
        badgeBg: 'bg-blue-500/10',
        badgeBorder: 'border-blue-500/30',
      },
      {
        name: 'OAuth2 & JWT',
        tag: 'Encrypted Session Tokens',
        icon: Fingerprint,
        iconColor: 'text-indigo-400',
        badgeBg: 'bg-indigo-500/10',
        badgeBorder: 'border-indigo-500/30',
      },
      {
        name: 'Security Headers',
        tag: 'HSTS, CSP & CORS Guard',
        icon: Shield,
        iconColor: 'text-cyan-400',
        badgeBg: 'bg-cyan-500/10',
        badgeBorder: 'border-cyan-500/30',
      },
      {
        name: 'SSL / TLS Config',
        tag: 'Grade-A Transport Cryptography',
        icon: CheckCheck,
        iconColor: 'text-purple-400',
        badgeBg: 'bg-purple-500/10',
        badgeBorder: 'border-purple-500/30',
      },
      {
        name: 'Penetration Testing',
        tag: 'Simulated Attack Defense',
        icon: Scan,
        iconColor: 'text-rose-400',
        badgeBg: 'bg-rose-500/10',
        badgeBorder: 'border-rose-500/30',
      },
    ],
  },
];

export default function TechEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const selectedCategory =
    ECOSYSTEM_CATEGORIES.find((c) => c.id === activeCategory) || ECOSYSTEM_CATEGORIES[0];

  return (
    <section className="py-24 relative bg-[#050508] border-t border-white/10 overflow-hidden">
      {/* Dynamic Background Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-600/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="TECH STACK"
          title="Interactive Technology"
          titleAccent="Ecosystem."
          description="Explore our modular tech stack engineered across modern web, backend, cloud, design, creative motion, and cybersecurity."
          centered
          className="mb-16"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {ECOSYSTEM_CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Visual Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl p-6 sm:p-10 border ${selectedCategory.borderColor} bg-[#0F0F16]/95 shadow-2xl backdrop-blur-xl`}
          >
            {/* Header Description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className={`p-3.5 rounded-2xl ${selectedCategory.bgColor} ${selectedCategory.color} border ${selectedCategory.borderColor} shadow-lg`}>
                  {<selectedCategory.icon className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{selectedCategory.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5 max-w-xl leading-relaxed">{selectedCategory.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Production Standard</span>
              </div>
            </div>

            {/* Individual Tech Nodes Grid with Custom Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory.items.map((item, nIdx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: nIdx * 0.05, duration: 0.25 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/10 hover:border-cyan-400/50 hover:bg-white/6 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 group"
                  >
                    {/* Glowing Icon Frame */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.badgeBg} ${item.badgeBorder} ${item.iconColor} group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <ItemIcon className="w-6 h-6" />
                    </div>

                    {/* Tech Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 font-normal truncate mt-0.5">
                        {item.tag}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
