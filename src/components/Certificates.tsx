import React from 'react';
import { 
  Award, 
  BrainCircuit, 
  Terminal, 
  Layout, 
  Palette, 
  Briefcase, 
  CalendarCheck,
  ShieldCheck
} from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    BrainCircuit,
    Terminal,
    Layout,
    Palette,
    Briefcase,
    CalendarCheck,
  };

  return (
    <section id="certificates" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-700/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Accreditations & Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Verified <span className="gradient-text">Certificates</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Formal certifications earned from premier Sri Lankan universities and institutions in AI, Web Engineering, and Project Management.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => {
            const IconComponent = iconMap[cert.iconName] || Award;

            return (
              <div
                key={cert.id}
                className="group relative p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top color gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor}`} />

                <div>
                  
                  {/* Top Row: Icon and Verified Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-slate-300 mb-4 flex items-center gap-1.5">
                    <span className="text-slate-500">Issuer:</span>
                    <span className="text-brand-300">{cert.issuer}</span>
                  </p>

                </div>

                {/* Bottom Skills */}
                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Competencies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/90 text-slate-300 border border-slate-700/50"
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
