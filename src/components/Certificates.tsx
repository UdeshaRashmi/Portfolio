import React from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { MaterialIcon } from './MaterialIcon';

export const Certificates: React.FC = () => {
  const iconMap: Record<string, string> = {
    BrainCircuit: 'psychology',
    Terminal: 'terminal',
    Layout: 'dashboard_customize',
    Palette: 'palette',
    Briefcase: 'business_center',
    CalendarCheck: 'event_available',
  };

  return (
    <section id="certificates" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/80 dark:bg-pink-950/70 border border-pink-300 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MaterialIcon name="workspace_premium" className="text-[17px] text-roseBrand-500" />
            <span>Accreditations & Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Verified <span className="gradient-text">Certificates</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Formal certifications earned from premier Sri Lankan universities and institutions in AI, Web Engineering, and Project Management.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => {
            const iconName = iconMap[cert.iconName] || 'workspace_premium';

            return (
              <div
                key={cert.id}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-roseBrand-200/80 dark:border-roseBrand-500/20 hover:border-roseBrand-400 dark:hover:border-roseBrand-400/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Top color gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor}`} />

                <div>
                  
                  {/* Top Row: Icon and Verified Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-slate-800/90 border border-pink-200 dark:border-purple-800 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform shadow-xs">
                      <MaterialIcon name={iconName} className="text-[28px]" />
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/60">
                      <MaterialIcon name="verified" className="text-[17px]" filled />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mb-4 flex items-center gap-1.5">
                    <span className="text-slate-400">Issuer:</span>
                    <span className="text-purple-600 dark:text-pink-300 font-semibold">{cert.issuer}</span>
                  </p>

                </div>

                {/* Bottom Skills */}
                <div className="pt-4 border-t border-pink-100 dark:border-purple-900/40">
                  <p className="text-[11px] font-mono text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Key Competencies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-pink-50 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-pink-200 dark:border-purple-800/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
