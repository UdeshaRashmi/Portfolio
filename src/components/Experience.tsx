import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { MaterialIcon } from './MaterialIcon';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-700/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/80 dark:bg-purple-950/70 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MaterialIcon name="business_center" className="text-[17px] text-roseBrand-500" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Practical software engineering experience building real-world products in Agile team environments.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-roseBrand-200/80 dark:border-roseBrand-500/20 backdrop-blur-md shadow-xl hover:border-roseBrand-400 dark:hover:border-roseBrand-400/50 transition-all group overflow-hidden"
            >
              {/* Top Pink-Violet Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600" />

              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-pink-100 dark:border-purple-900/40">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border border-pink-300 dark:border-pink-800">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 mt-1 flex items-center gap-2">
                    <span className="text-pink-600 dark:text-pink-400">{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    <MaterialIcon name="calendar_month" className="text-[17px] text-roseBrand-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <MaterialIcon name="location_on" className="text-[17px] text-rose-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="py-6 space-y-3.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2 flex items-center gap-1.5">
                  <MaterialIcon name="workspace_premium" className="text-[17px] text-roseBrand-500" />
                  <span>Key Accomplishments & Impact</span>
                </h4>
                {exp.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <MaterialIcon name="check_circle" className="text-[18px] text-roseBrand-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" filled />
                    <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies used */}
              <div className="pt-4 border-t border-pink-100 dark:border-purple-900/40">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
                  <MaterialIcon name="layers" className="text-[17px] text-brand-400" />
                  <span>Tech Stack & Workflow</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-pink-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-pink-200 dark:border-purple-800 hover:border-pink-400 dark:hover:border-pink-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Highlight Bar */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 dark:from-purple-950/40 dark:via-[#151024] dark:to-purple-950/40 border border-pink-200 dark:border-purple-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <MaterialIcon name="bolt" className="text-[20px]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Full-Cycle Frontend Delivery</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">Sprint planning, PR reviews, component libraries, and cross-browser quality</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-pink-600 dark:text-pink-400 font-mono font-semibold">
                  <MaterialIcon name="account_tree" className="text-[17px]" /> Agile Teamwork
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
