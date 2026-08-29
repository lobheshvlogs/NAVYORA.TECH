'use client';

import { useState, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Website Development',
  'Web Application',
  'Backend Development',
  'Cybersecurity',
  'UI/UX Design',
  'Digital Advertising',
  'Graphic Design',
  'Automation',
  'Custom Software',
  'Other',
];

const BUDGET_OPTIONS = [
  '₹6,000 - ₹25,000 (Starter / Mini)',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  '₹2,50,000+',
];

const TIMELINE_OPTIONS = [
  'Urgent (< 2 weeks)',
  '2 - 4 weeks',
  '1 - 2 months',
  'Flexible timeline',
];

const CONTACT_METHODS = ['Email', 'LinkedIn', 'Instagram'];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service');
  const initialBudget = searchParams.get('budget');
  const initialTimeline = searchParams.get('timeline');

  const [selectedServices, setSelectedServices] = useState<string[]>(() =>
    initialService ? [initialService] : ['Website Development']
  );
  const [budget, setBudget] = useState<string>(() => initialBudget || '₹25,000 - ₹50,000');
  const [timeline, setTimeline] = useState<string>(() => initialTimeline || '2 - 4 weeks');
  const [contactMethod, setContactMethod] = useState<string>('Email');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields (Name, Email, Project Description).');
      return;
    }

    if (selectedServices.length === 0) {
      setStatus('error');
      setErrorMessage('Please select at least one service requirement.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget,
          timeline,
          preferredContactMethod: contactMethod,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', description: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please check your connection and try again.');
    }
  };

  return (
    <div className="rounded-3xl bg-[#0F0F16]/90 border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
      <p className="text-sm text-slate-400 mb-8 font-normal">
        Fill out the inquiry details below to receive a custom scope analysis within 24 hours.
      </p>

      {status === 'success' ? (
        <div className="p-8 rounded-2xl bg-blue-950/40 border border-blue-500/50 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-white">Project Inquiry Received!</h4>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you for reaching out to NAVYORA STUDIO. Our lead engineering team is reviewing your project requirements and will reply via your preferred contact method within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/20 transition-colors"
          >
            Submit Another Project
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* SERVICE SELECTION PILLS */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              1. What Services Do You Need? (Select all that apply) *
            </label>
            <div className="flex flex-wrap gap-2.5">
              {SERVICE_OPTIONS.map((srv) => {
                const isSelected = selectedServices.includes(srv);
                return (
                  <button
                    type="button"
                    key={srv}
                    onClick={() => toggleService(srv)}
                    className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                      isSelected
                        ? 'bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-600/30'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {srv}
                  </button>
                );
              })}
            </div>
          </div>

          {/* BUDGET SELECTOR */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              2. Estimated Project Budget (USD)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {BUDGET_OPTIONS.map((bT) => (
                <button
                  type="button"
                  key={bT}
                  onClick={() => setBudget(bT)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-mono text-center transition-all ${
                    budget === bT
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold border border-cyan-400'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {bT}
                </button>
              ))}
            </div>
          </div>

          {/* TIMELINE SELECTOR */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              3. Desired Timeline
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {TIMELINE_OPTIONS.map((tL) => (
                <button
                  type="button"
                  key={tL}
                  onClick={() => setTimeline(tL)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-mono text-center transition-all ${
                    timeline === tL
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold border border-blue-400'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {tL}
                </button>
              ))}
            </div>
          </div>

          {/* PERSONAL DETAILS FIELDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Company / Brand (Optional)
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Navyora Corp"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Preferred Contact Method
              </label>
              <div className="flex gap-2">
                {CONTACT_METHODS.map((m) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setContactMethod(m)}
                    className={`flex-1 py-3 rounded-xl text-xs font-mono text-center transition-all ${
                      contactMethod === m
                        ? 'bg-blue-600 text-white font-bold border border-blue-400'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT DESCRIPTION */}
          <div>
            <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Project Description & Requirements *
            </label>
            <textarea
              id="description"
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your project goals, technical requirements, target audience, or desired features..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* ERROR ALERT */}
          {status === 'error' && (
            <div role="alert" aria-live="assertive" className="flex items-center gap-3 p-4 rounded-xl bg-red-950/50 border border-red-500/50 text-red-300 text-xs font-mono">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
