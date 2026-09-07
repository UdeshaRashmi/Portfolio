import React from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { MaterialIcon } from './MaterialIcon';

const iconMap: Record<string, string> = {
  BrainCircuit: 'psychology',
  Terminal: 'terminal',
  Layout: 'dashboard_customize',
  Palette: 'palette',
  Briefcase: 'business_center',
  CalendarCheck: 'event_available',
  Cloud: 'cloud',
};

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 md:py-28 relative">
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyanBrand-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyanBrand-50 dark:bg-brand-950/70 border border-cyanBrand-200 dark:border-brand-500/30 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MaterialIcon name="workspace_premium" className="text-[17px] text-cyanBrand-500" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Licenses & <span className="gradient-text">Certifications</span> ({CERTIFICATES.length})
          </h2>
        </div>

        <div className="rounded-2xl bg-white dark:bg-[#17121d]/80 border border-cyanBrand-200/70 dark:border-cyanBrand-500/20 shadow-sm overflow-hidden">
          {CERTIFICATES.map((cert, index) => {
            const iconName = iconMap[cert.iconName] || 'workspace_premium';
            const isAws = cert.issuer.includes('Amazon Web Services');

            return (
              <article
                key={cert.id}
                className={`p-5 sm:p-6 ${index > 0 ? 'border-t border-slate-200 dark:border-slate-800' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 shrink-0 rounded ${isAws ? 'bg-slate-900 text-white' : 'bg-cyanBrand-50 dark:bg-slate-900 text-brand-600 dark:text-cyanBrand-300 border border-cyanBrand-200 dark:border-slate-700'} flex items-center justify-center`}>
                    {isAws ? (
                      <span className="text-lg font-bold tracking-tight">aws</span>
                    ) : (
                      <MaterialIcon name={iconName} className="text-[27px]" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-slate-700 dark:text-slate-300">
                      {cert.issuer}
                    </p>
                    {cert.issued && (
                      <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                        {cert.issued}
                      </p>
                    )}

                    {cert.credentialName && (
                      <div className="mt-5 flex items-center gap-4">
                        <div className="h-14 w-28 shrink-0 rounded-lg border border-cyanBrand-200 dark:border-slate-700 bg-gradient-to-br from-white to-cyanBrand-50 dark:from-slate-900 dark:to-slate-800 p-2 shadow-xs">
                          <div className="h-1.5 w-12 rounded bg-cyanBrand-300" />
                          <div className="mt-2 h-1 w-16 rounded bg-slate-300 dark:bg-slate-600" />
                          <div className="mt-1 h-1 w-10 rounded bg-slate-200 dark:bg-slate-700" />
                          <div className="mt-3 text-right text-[9px] font-bold text-slate-900 dark:text-white">
                            aws
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {cert.credentialName}
                        </p>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-cyanBrand-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-cyanBrand-200/70 dark:border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
