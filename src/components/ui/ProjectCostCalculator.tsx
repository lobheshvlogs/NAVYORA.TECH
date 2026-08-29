'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  IndianRupee,
  Plus,
  Minus,
  Sliders,
  TrendingUp,
  RotateCcw,
} from 'lucide-react';

const CORE_SERVICES = [
  { id: 'web-dev', title: 'Custom Website', basePrice: 25000, weeks: 2 },
  { id: 'web-app', title: 'Full-Stack Web App', basePrice: 60000, weeks: 4 },
  { id: 'backend', title: 'Backend & APIs', basePrice: 40000, weeks: 3 },
  { id: 'cybersecurity', title: 'Cybersecurity Audit', basePrice: 20000, weeks: 1 },
  { id: 'ui-ux', title: 'UI/UX Design System', basePrice: 30000, weeks: 2 },
  { id: 'automation', title: 'Custom Automation', basePrice: 35000, weeks: 2 },
];

const ADDONS = [
  { id: 'auth', title: 'User Auth & Role Management', price: 8000 },
  { id: 'dashboard', title: 'Custom Admin Dashboard', price: 15000 },
  { id: 'webgl', title: 'Interactive 3D / WebGL Graphics', price: 12000 },
  { id: 'payments', title: 'Payment Gateway (UPI / Cards)', price: 7000 },
  { id: 'websockets', title: 'Real-Time WebSockets Sync', price: 10000 },
  { id: 'seo', title: 'Advanced SEO & Analytics Package', price: 6000 },
];

const TIMELINE_SPEEDS = [
  { id: 'standard', title: 'Standard Schedule', multiplier: 1.0, label: 'Normal Pace' },
  { id: 'fast', title: 'Accelerated Delivery', multiplier: 1.25, label: '25% Faster' },
  { id: 'rush', title: 'Rush Priority', multiplier: 1.5, label: 'Maximum Speed' },
];

const BUDGET_PRESETS = [
  { label: '₹6K Lowest / Starter', value: 6000 },
  { label: '₹15K Essential', value: 15000 },
  { label: '₹25K Standard', value: 25000 },
  { label: '₹50K Growth', value: 50000 },
  { label: '₹1 Lakh Pro', value: 100000 },
  { label: '₹2.5 Lakh Scale', value: 250000 },
  { label: '₹5 Lakh Enterprise', value: 500000 },
];

const MIN_BUDGET = 6000;
const MAX_BUDGET = 500000;
const STEP_AMOUNT = 1000;

export default function ProjectCostCalculator() {
  const [selectedService, setSelectedService] = useState<string>('web-app');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['auth', 'dashboard']);
  const [selectedSpeed, setSelectedSpeed] = useState<string>('standard');
  const [customBudgetAdjustment, setCustomBudgetAdjustment] = useState<number>(0);
  const [customTargetBudget, setCustomTargetBudget] = useState<number>(85000);
  const [isManualBudgetMode, setIsManualBudgetMode] = useState<boolean>(false);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Base calculation from features
  const baseObj = CORE_SERVICES.find((s) => s.id === selectedService) || CORE_SERVICES[1];
  const addonsTotal = selectedAddons.reduce((sum, aId) => {
    const item = ADDONS.find((a) => a.id === aId);
    return sum + (item ? item.price : 0);
  }, 0);

  const speedObj = TIMELINE_SPEEDS.find((sp) => sp.id === selectedSpeed) || TIMELINE_SPEEDS[0];

  const calculatedBase = Math.round((baseObj.basePrice + addonsTotal) * speedObj.multiplier);
  
  // Total estimate incorporating the Money Control Bar with strict bounds
  const rawMin = isManualBudgetMode
    ? customTargetBudget
    : calculatedBase + customBudgetAdjustment;
  const finalMin = Math.min(MAX_BUDGET, Math.max(MIN_BUDGET, Math.round(Number.isFinite(rawMin) ? rawMin : MIN_BUDGET)));
  const finalMax = Math.min(
    Math.round(MAX_BUDGET * 1.3),
    Math.round(finalMin * (isManualBudgetMode ? 1.2 : 1.25))
  );

  const estimatedWeeks = Math.max(1, Math.round(baseObj.weeks / (speedObj.multiplier || 1)));

  // Increment & Decrement handlers with strict boundary protection
  const handleIncrease = (amount = STEP_AMOUNT) => {
    if (isManualBudgetMode) {
      setCustomTargetBudget((prev) => Math.min(MAX_BUDGET, Math.max(MIN_BUDGET, prev + amount)));
    } else {
      setCustomBudgetAdjustment((prev) => {
        const potential = calculatedBase + (prev + amount);
        return potential <= MAX_BUDGET ? prev + amount : MAX_BUDGET - calculatedBase;
      });
    }
  };

  const handleDecrease = (amount = STEP_AMOUNT) => {
    if (isManualBudgetMode) {
      setCustomTargetBudget((prev) => Math.max(MIN_BUDGET, Math.min(MAX_BUDGET, prev - amount)));
    } else {
      setCustomBudgetAdjustment((prev) => {
        const potential = calculatedBase + (prev - amount);
        return potential >= MIN_BUDGET ? prev - amount : MIN_BUDGET - calculatedBase;
      });
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (Number.isFinite(val)) {
      setIsManualBudgetMode(true);
      setCustomTargetBudget(Math.min(MAX_BUDGET, Math.max(MIN_BUDGET, val)));
    }
  };

  const resetAdjustment = () => {
    setCustomBudgetAdjustment(0);
    setIsManualBudgetMode(false);
    setCustomTargetBudget(calculatedBase);
  };

  return (
    <div className="rounded-3xl bg-[#0F0F16]/95 border border-blue-500/30 p-6 sm:p-12 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          <Calculator className="w-4 h-4 text-blue-400" />
          <span>INTERACTIVE ESTIMATOR & BUDGET CONTROLLER</span>
        </div>
        {(customBudgetAdjustment !== 0 || isManualBudgetMode) && (
          <button
            type="button"
            onClick={resetAdjustment}
            className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset to Auto-Calculate</span>
          </button>
        )}
      </div>

      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Project Cost & Scope Calculator</h3>
      <p className="text-sm text-slate-300 mb-8 max-w-2xl font-normal">
        Select your required architecture, toggle addons, and fine-tune your target investment using the interactive money control bar.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT SELECTION CONTROLS */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Primary Service */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 font-bold">
              1. Select Primary Service Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {CORE_SERVICES.map((srv) => (
                <button
                  type="button"
                  key={srv.id}
                  onClick={() => {
                    setSelectedService(srv.id);
                    setIsManualBudgetMode(false);
                  }}
                  className={`p-3 rounded-2xl text-left border transition-all text-xs font-mono ${
                    selectedService === srv.id
                      ? 'bg-blue-600/20 border-cyan-400 text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span className="block font-bold text-white mb-1">{srv.title}</span>
                  <span className="text-[10px] text-cyan-300">₹{srv.basePrice.toLocaleString('en-IN')} base</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Optional Feature Addons */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 font-bold">
              2. Select Optional Features & Addons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    type="button"
                    key={addon.id}
                    onClick={() => {
                      toggleAddon(addon.id);
                      setIsManualBudgetMode(false);
                    }}
                    className={`p-3 rounded-2xl text-left border transition-all flex items-center justify-between text-xs font-mono ${
                      isSelected
                        ? 'bg-blue-600/30 border-blue-400 text-white'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-cyan-400 border-cyan-400 text-black' : 'border-white/20'}`}>
                        {isSelected && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <span className="truncate">{addon.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0">+₹{addon.price.toLocaleString('en-IN')}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Delivery Speed */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 font-bold">
              3. Desired Delivery Speed
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {TIMELINE_SPEEDS.map((sp) => (
                <button
                  type="button"
                  key={sp.id}
                  onClick={() => {
                    setSelectedSpeed(sp.id);
                    setIsManualBudgetMode(false);
                  }}
                  className={`p-3 rounded-2xl text-center border transition-all text-xs font-mono ${
                    selectedSpeed === sp.id
                      ? 'bg-blue-600 text-white font-bold border-cyan-400'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span className="block font-bold">{sp.title}</span>
                  <span className="text-[10px] text-cyan-300">{sp.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. MONEY CONTROL BAR (INCREASE / DECREASE & SLIDER) */}
          <div className="p-5 rounded-2xl bg-[#12121E] border border-cyan-500/30 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  4. Money Control Bar (Custom Budget Range)
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Step: ±₹1,000 (Lowest: ₹6,000)
              </span>
            </div>

            {/* Stepper Buttons and Live Value Display */}
            <div className="flex items-center justify-between gap-3 bg-black/40 border border-white/10 rounded-2xl p-3">
              <button
                type="button"
                onClick={() => handleDecrease(1000)}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-red-500/20 text-slate-200 hover:text-red-400 border border-white/10 hover:border-red-500/40 transition-all active:scale-95 shadow-md"
                aria-label="Decrease budget by 1000 INR"
                title="Decrease by ₹1,000"
              >
                <Minus className="w-5 h-5" />
              </button>

              <div className="text-center flex-1">
                <div className="flex items-center justify-center gap-1 font-mono text-xl sm:text-2xl font-extrabold text-cyan-300">
                  <IndianRupee className="w-5 h-5 text-cyan-400" />
                  <span>{finalMin.toLocaleString('en-IN')}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {isManualBudgetMode ? 'Custom Target Budget' : 'Auto-Calculated + Adjusted'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleIncrease(1000)}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-green-500/20 text-slate-200 hover:text-green-400 border border-white/10 hover:border-green-500/40 transition-all active:scale-95 shadow-md"
                aria-label="Increase budget by 1000 INR"
                title="Increase by ₹1,000"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Range Slider Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span className="text-cyan-300 font-bold">₹6,000 (Lowest Min)</span>
                <span className="text-cyan-400 font-bold">Slide to fine-tune</span>
                <span>₹5,00,000 (Max)</span>
              </div>
              <input
                id="budget-range-slider"
                type="range"
                min={MIN_BUDGET}
                max={MAX_BUDGET}
                step={STEP_AMOUNT}
                value={finalMin}
                onChange={handleSliderChange}
                aria-label="Target project budget in Indian Rupees (INR)"
                aria-valuemin={MIN_BUDGET}
                aria-valuemax={MAX_BUDGET}
                aria-valuenow={finalMin}
                className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Quick Preset Chips */}
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                Quick Preset Targets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {BUDGET_PRESETS.map((preset) => (
                  <button
                    type="button"
                    key={preset.value}
                    onClick={() => {
                      setIsManualBudgetMode(true);
                      setCustomTargetBudget(preset.value);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                      finalMin === preset.value
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LIVE ESTIMATE SUMMARY CARD */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl p-6 bg-gradient-to-b from-[#141424] to-[#0A0A10] border border-cyan-500/30 space-y-6 shadow-2xl h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-slate-400 uppercase">Estimated Budget</span>
                <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  LIVE CALCULATION
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-extrabold font-mono text-white">
                  <IndianRupee className="w-6 h-6 text-cyan-400 shrink-0" />
                  <span>{finalMin.toLocaleString('en-IN')}</span>
                  <span className="text-slate-500 text-lg font-normal">-</span>
                  <span>₹{finalMax.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">Estimated total INR (Indian Rupees) investment</p>
              </div>

              {/* Delivery Timeline Pill */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Estimated Delivery</span>
                </div>
                <span className="font-bold text-cyan-300">{estimatedWeeks} Weeks</span>
              </div>

              {/* Included Scope Summary */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Included Package Summary:
                </span>
                <ul className="space-y-1 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{baseObj.title} Base Architecture</span>
                  </li>
                  {selectedAddons.map((aId) => {
                    const add = ADDONS.find((a) => a.id === aId);
                    return add ? (
                      <li key={aId} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{add.title}</span>
                      </li>
                    ) : null;
                  })}
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>100% Cybersecurity Hardening</span>
                  </li>
                  {customBudgetAdjustment !== 0 && (
                    <li className="flex items-center gap-2 text-cyan-400">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        Custom adjustment: {customBudgetAdjustment > 0 ? '+' : ''}₹
                        {customBudgetAdjustment.toLocaleString('en-IN')}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Transfer to Intake Button */}
            <div className="pt-4 border-t border-white/10">
              <Link
                href={`/contact?service=${encodeURIComponent(baseObj.title)}&budget=${encodeURIComponent(`₹${finalMin.toLocaleString('en-IN')} - ₹${finalMax.toLocaleString('en-IN')}`)}&timeline=${encodeURIComponent(`${estimatedWeeks} Weeks`)}`}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Export Estimate to Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
