'use client';

import { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, Clock, FileText, Lock, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectPhase {
  step: string;
  title: string;
  status: string;
  date: string;
}

interface ProjectDeliverable {
  title: string;
  size: string;
  date: string;
}

interface ClientProject {
  id: string;
  clientName: string;
  company: string;
  projectName: string;
  startDate: string;
  targetLaunch: string;
  progress: number;
  currentPhase: string;
  assignedEngineer: string;
  techStack: string[];
  phases: ProjectPhase[];
  deliverables: ProjectDeliverable[];
  financials: {
    totalBudget: string;
    depositPaid: string;
    midwayMilestone: string;
    finalPayment: string;
  };
}

// Mock client projects dataset
const MOCK_PROJECTS: Record<string, ClientProject> = {
  'NAVYORA-89X': {
    id: 'NAVYORA-89X',
    clientName: 'Alex Morgan',
    company: 'Apex Innovations',
    projectName: 'Apex Full-Stack Web Platform & API',
    startDate: 'August 1, 2026',
    targetLaunch: 'September 15, 2026',
    progress: 75,
    currentPhase: '04 — Development & Integration',
    assignedEngineer: 'Marcus Vance (Lead Full-Stack)',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    phases: [
      { step: '01', title: 'Discover & Requirements', status: 'completed', date: 'Aug 03' },
      { step: '02', title: 'Architecture & Strategy', status: 'completed', date: 'Aug 08' },
      { step: '03', title: 'UI/UX Design Systems', status: 'completed', date: 'Aug 16' },
      { step: '04', title: 'Development & API Integration', status: 'in-progress', date: 'Active' },
      { step: '05', title: 'Cybersecurity Audit & Testing', status: 'pending', date: 'Sep 05' },
      { step: '06', title: 'Production Launch', status: 'pending', date: 'Sep 15' },
    ],
    deliverables: [
      { title: 'Approved Figma UI Wireframes.fig', size: '24.5 MB', date: 'Aug 16' },
      { title: 'Postman API Specification v1.json', size: '1.2 MB', date: 'Aug 20' },
      { title: 'Database Schema ERD Diagram.pdf', size: '3.8 MB', date: 'Aug 12' },
    ],
    financials: {
      totalBudget: '₹1,75,000 INR',
      depositPaid: '₹87,500 INR (Paid)',
      midwayMilestone: '₹43,750 INR (Paid)',
      finalPayment: '₹43,750 INR (Pending Launch)',
    },
  },
  'PARCO-2026': {
    id: 'PARCO-2026',
    clientName: 'Sarah Jenkins',
    company: 'PARCO Mobility',
    projectName: 'PARCO Smart Vehicle QR & Tracking System',
    startDate: 'June 10, 2026',
    targetLaunch: 'August 20, 2026',
    progress: 100,
    currentPhase: '06 — Live In Production',
    assignedEngineer: 'Elena Rostova (Lead Security)',
    techStack: ['React', 'Firebase', 'GPS Services', 'Mapbox API'],
    phases: [
      { step: '01', title: 'Discover', status: 'completed', date: 'Jun 12' },
      { step: '02', title: 'Strategy', status: 'completed', date: 'Jun 20' },
      { step: '03', title: 'Design', status: 'completed', date: 'Jul 05' },
      { step: '04', title: 'Development', status: 'completed', date: 'Jul 25' },
      { step: '05', title: 'Security Audit', status: 'completed', date: 'Aug 10' },
      { step: '06', title: 'Live Launch', status: 'completed', date: 'Aug 20' },
    ],
    deliverables: [
      { title: 'Production Code Repository.zip', size: '112.4 MB', date: 'Aug 20' },
      { title: 'Security Audit Certificate.pdf', size: '2.1 MB', date: 'Aug 10' },
    ],
    financials: {
      totalBudget: '₹2,50,000 INR',
      depositPaid: '₹1,25,000 INR (Paid)',
      midwayMilestone: '₹62,500 INR (Paid)',
      finalPayment: '₹62,500 INR (Paid)',
    },
  },
};

export default function ClientPortalView() {
  const [searchId, setSearchId] = useState('NAVYORA-89X');
  const [activeProject, setActiveProject] = useState<ClientProject | null>(MOCK_PROJECTS['NAVYORA-89X']);
  const [errorMsg, setErrorMsg] = useState('');
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchId.trim().toUpperCase();
    if (MOCK_PROJECTS[query]) {
      setActiveProject(MOCK_PROJECTS[query]);
      setErrorMsg('');
    } else {
      setErrorMsg(`No active project found for ID "${query}". Try sample ID: "NAVYORA-89X" or "PARCO-2026".`);
    }
  };

  const handleDownload = (fileTitle: string) => {
    setDownloadingFile(fileTitle);
    setTimeout(() => {
      setDownloadingFile(null);
    }, 2500);
  };

  return (
    <div className="space-y-12">
      {/* SEARCH BAR BOX */}
      <div className="rounded-3xl bg-[#0F0F16]/95 border border-blue-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <label htmlFor="portal-project-search" className="sr-only">
              Search Project by ID
            </label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              id="portal-project-search"
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Project ID e.g. NAVYORA-89X..."
              aria-label="Project Tracking Identifier"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white font-mono text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-all shrink-0"
          >
            Track Project Status
          </button>
        </form>

        {errorMsg && (
          <p role="alert" className="mt-3 text-xs font-mono text-red-400">{errorMsg}</p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>Sample Project Tracker Demos: </span>
          <button
            type="button"
            onClick={() => { setSearchId('NAVYORA-89X'); setActiveProject(MOCK_PROJECTS['NAVYORA-89X']); setErrorMsg(''); }}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-300 hover:bg-white/10"
          >
            NAVYORA-89X
          </button>
          <button
            type="button"
            onClick={() => { setSearchId('PARCO-2026'); setActiveProject(MOCK_PROJECTS['PARCO-2026']); setErrorMsg(''); }}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-300 hover:bg-white/10"
          >
            PARCO-2026
          </button>
        </div>
      </div>

      {/* DASHBOARD DISPLAY */}
      {activeProject && (
        <div className="space-y-8">
          {/* HEADER SUMMARY CARD */}
          <div className="rounded-3xl border border-white/10 p-8 bg-[#0F0F16]/90 shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                    {activeProject.id}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Client: {activeProject.clientName} ({activeProject.company})
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProject.projectName}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Overall Progress</span>
                  <span className="text-2xl font-bold font-mono text-cyan-400">{activeProject.progress}%</span>
                </div>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <span>Current Phase: <strong className="text-white">{activeProject.currentPhase}</strong></span>
                <span>Target Launch: {activeProject.targetLaunch}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${activeProject.progress}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 shadow-md"
                />
              </div>
            </div>

            {/* METADATA GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-slate-300">
              <div className="p-4 rounded-2xl bg-white/2 border border-white/10">
                <span className="text-[10px] text-slate-500 block uppercase mb-1">Lead Engineer</span>
                <span className="font-bold text-white">{activeProject.assignedEngineer}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/2 border border-white/10">
                <span className="text-[10px] text-slate-500 block uppercase mb-1">Start Date</span>
                <span className="font-bold text-white">{activeProject.startDate}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/2 border border-white/10">
                <span className="text-[10px] text-slate-500 block uppercase mb-1">Tech Stack</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {activeProject.techStack.map((t: string) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6-STEP MILESTONE TIMELINE */}
          <div className="rounded-3xl border border-white/10 p-8 bg-[#0F0F16]/90 shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>Project Milestone Stepper</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {activeProject.phases.map((phase) => {
                const isCompleted = phase.status === 'completed';
                const isInProgress = phase.status === 'in-progress';

                return (
                  <div
                    key={phase.step}
                    className={`p-4 rounded-2xl border space-y-2 relative transition-all ${
                      isCompleted
                        ? 'bg-blue-950/30 border-blue-500/50 text-white'
                        : isInProgress
                        ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                        : 'bg-white/2 border-white/10 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold">[{phase.step}]</span>
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      ) : isInProgress ? (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      ) : (
                        <Lock className="w-3.5 h-3.5 text-slate-600" />
                      )}
                    </div>

                    <h4 className="text-xs font-bold leading-tight">{phase.title}</h4>
                    <span className="text-[10px] font-mono text-slate-400 block pt-1">{phase.date}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DELIVERABLES & FINANCIALS TWO-COLUMN */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DELIVERABLES VAULT */}
            <div className="rounded-3xl border border-white/10 p-8 bg-[#0F0F16]/90 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span>Deliverables & File Vault</span>
              </h3>

              <div className="space-y-3">
                {activeProject.deliverables.map((file, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-blue-500/40 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono font-bold text-white block">{file.title}</span>
                      <span className="text-[10px] font-mono text-slate-400">{file.size} • Uploaded {file.date}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDownload(file.title)}
                      aria-label={`Download file deliverable ${file.title}`}
                      className="p-2 rounded-xl bg-blue-600/20 border border-blue-500/40 text-cyan-300 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Download className={`w-4 h-4 ${downloadingFile === file.title ? 'animate-bounce text-white' : ''}`} />
                    </button>
                  </div>
                ))}
              </div>
              {downloadingFile && (
                <div role="status" className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Preparing secure delivery of {downloadingFile}...</span>
                </div>
              )}
            </div>

            {/* FINANCIALS & INVOICE STATUS */}
            <div className="rounded-3xl border border-white/10 p-8 bg-[#0F0F16]/90 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                <span>Financial & Invoice Ledger</span>
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">Total Project Value</span>
                  <span className="text-base font-bold text-white">{activeProject.financials.totalBudget}</span>
                </div>

                <div className="p-3 rounded-xl bg-green-950/40 border border-green-500/40 flex items-center justify-between text-green-300">
                  <span>Initial 50% Deposit</span>
                  <span className="font-bold">{activeProject.financials.depositPaid}</span>
                </div>

                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/40 flex items-center justify-between text-blue-300">
                  <span>Midway Milestone 2</span>
                  <span className="font-bold">{activeProject.financials.midwayMilestone}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-slate-300">
                  <span>Final Pre-Launch Balance</span>
                  <span className="font-bold text-cyan-300">{activeProject.financials.finalPayment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
