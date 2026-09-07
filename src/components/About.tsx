import React from 'react';
import { EDUCATION_DATA, EDUCATION_HISTORY, PERSONAL_INFO } from '../data/portfolioData';
import { MaterialIcon } from './MaterialIcon';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: "code",
      title: "Frontend Craftsmanship",
      description: "Building responsive, pixel-perfect, accessible, and fast web UIs using React, Next.js, TypeScript, and modern CSS systems.",
      color: "from-brand-500/10 to-indigo-500/5 dark:from-brand-500/20 dark:to-indigo-500/5",
      border: "border-slate-200 dark:border-slate-800 hover:border-brand-500/50",
      iconColor: "text-brand-500"
    },
    {
      icon: "layers",
      title: "Full-Stack & Microservices",
      description: "Developing robust backend APIs, JWT-secured endpoints, Prisma/PostgreSQL or MongoDB databases, and decoupled microservices.",
      color: "from-cyan-500/10 to-blue-500/5 dark:from-cyan-500/20 dark:to-blue-500/5",
      border: "border-slate-200 dark:border-slate-800 hover:border-cyan-500/50",
      iconColor: "text-cyan-500"
    },
    {
      icon: "psychology",
      title: "Applied AI & GIS Integration",
      description: "Integrating ML models (Python, Scikit-learn) and interactive Leaflet GIS maps for real-world disaster relief and data-driven solutions.",
      color: "from-purple-500/10 to-pink-500/5 dark:from-purple-500/20 dark:to-pink-500/5",
      border: "border-slate-200 dark:border-slate-800 hover:border-purple-500/50",
      iconColor: "text-purple-500"
    },
    {
      icon: "groups",
      title: "Agile & Team Collaboration",
      description: "Experienced in Scrum sprints, Git/GitHub version control, modular code design, Swagger API contracts, and cross-functional teamwork.",
      color: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/20 dark:to-teal-500/5",
      border: "border-slate-200 dark:border-slate-800 hover:border-emerald-500/50",
      iconColor: "text-emerald-500"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-brand-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-500/30 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            About <span className="gradient-text">Me & Education</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Combining academic rigor at SLIIT with real-world industry frontend engineering experience.
          </p>
        </div>

        {/* Top 3-Column / 2-Column Responsive Layout with Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Photo Card (Col 4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-start gap-5 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-cyanBrand-200/80 dark:border-slate-700/70 shadow-md">
            
            {/* Image Container */}
            <div className="relative w-full flex flex-col items-center">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-4 border-white dark:border-slate-950">
                  <img
                    src="/images/image.png"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Quick Profile Bio strip */}
            <div className="w-full pt-5 border-t border-slate-200 dark:border-slate-800 text-center">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </h4>
              <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">
                BSc. (Hons) IT Undergraduate @ SLIIT
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Skilled in React, Next.js, TypeScript & Full-Stack Development
              </p>
            </div>

          </div>

          {/* About Card (Col 8) */}
          <div className="lg:col-span-8 flex flex-col justify-start p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-cyanBrand-200/80 dark:border-slate-700/70 shadow-md">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                  About Me
                </h3>
              </div>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am currently an undergraduate pursuing a degree in <strong className="text-slate-900 dark:text-white font-semibold">Information Technology</strong>. I have completed a six-month internship as a <strong className="text-brand-600 dark:text-brand-400">Frontend Developer at NextGen CodeX PVT LTD</strong>, where I gained practical experience in developing responsive web applications and working in a collaborative development environment.
                </p>
                <p>
                  In addition to my internship experience, I have academic knowledge of full-stack web development through university coursework and personal projects. I am eager to expand my skills, take on real-world challenges, and learn from experienced professionals.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Education Details */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-roseBrand-100 dark:border-roseBrand-500/20 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-xs">
                <MaterialIcon name="school" className="text-[28px]" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Higher Education
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-medium">
                <MaterialIcon name="calendar_month" className="text-[17px] text-roseBrand-500" />
                {EDUCATION_DATA.period}
              </span>
              <span className="text-xs px-3 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-semibold">
                {EDUCATION_DATA.status}
              </span>
            </div>
          </div>

          <div className="mt-6 divide-y divide-slate-200 dark:divide-slate-800">
            {EDUCATION_HISTORY.map((entry) => (
              <div key={entry.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                <div className="mt-1 h-11 w-11 shrink-0 rounded-xl bg-cyanBrand-50 dark:bg-slate-900/80 border border-cyanBrand-200 dark:border-slate-700 flex items-center justify-center text-brand-600 dark:text-cyanBrand-300">
                  <MaterialIcon name={entry.iconName} className="text-[24px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">
                        {entry.institution}
                      </h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {entry.title}
                      </p>
                    </div>
                    {entry.period && (
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {entry.period}
                      </span>
                    )}
                  </div>
                  {entry.description && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {entry.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-b ${pillar.color} bg-white dark:bg-[#17121d]/60 border ${pillar.border} transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md group`}
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MaterialIcon name={pillar.icon} className={`text-[28px] ${pillar.iconColor}`} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
