import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  GitBranch, 
  Zap 
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-cyan-700/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Practical software engineering experience building real-world products in Agile team environments.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-2xl hover:border-cyan-500/40 transition-all group overflow-hidden"
            >
              {/* Subtle gradient strip on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-400 to-indigo-500" />

              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-950 text-brand-300 border border-brand-800/60">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="text-base sm:text-lg font-semibold text-slate-200 mt-1 flex items-center gap-2">
                    <span className="text-cyan-400">{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="py-6 space-y-3.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Key Accomplishments & Impact
                </h4>
                {exp.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies used */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-brand-400" />
                  <span>Tech Stack & Workflow</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-300 border border-slate-700/60 hover:border-cyan-500/50 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Highlight Bar */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/20 to-slate-900 border border-cyan-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Full-Cycle Frontend Delivery</p>
                    <p className="text-[11px] text-slate-400">Collaborated in fast-paced sprints with Git PRs, peer reviews, & design parity</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-cyan-400 font-mono">
                  <GitBranch className="w-3.5 h-3.5" /> Agile Verified
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
