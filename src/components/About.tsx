import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Code, 
  Layers, 
  Users, 
  BrainCircuit, 
  CheckCircle, 
  BookOpen,
  Calendar,
  Building
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code,
      title: "Frontend Craftsmanship",
      description: "Building responsive, pixel-perfect, accessible, and fast web UIs using React, Next.js, TypeScript, and modern CSS systems.",
      color: "from-brand-500/20 to-purple-500/5",
      border: "hover:border-brand-500/50",
      iconColor: "text-brand-400"
    },
    {
      icon: Layers,
      title: "Full-Stack & Microservices",
      description: "Developing robust backend APIs, JWT-secured endpoints, Prisma/PostgreSQL or MongoDB databases, and decoupled microservices.",
      color: "from-cyan-500/20 to-blue-500/5",
      border: "hover:border-cyan-500/50",
      iconColor: "text-cyan-400"
    },
    {
      icon: BrainCircuit,
      title: "Applied AI & GIS Integration",
      description: "Integrating ML models (Python, Scikit-learn) and interactive Leaflet GIS maps for real-world disaster relief and data-driven solutions.",
      color: "from-rose-500/20 to-pink-500/5",
      border: "hover:border-rose-500/50",
      iconColor: "text-rose-400"
    },
    {
      icon: Users,
      title: "Agile & Team Collaboration",
      description: "Experienced in Scrum sprints, Git/GitHub version control, modular code design, Swagger API contracts, and cross-functional teamwork.",
      color: "from-emerald-500/20 to-teal-500/5",
      border: "hover:border-emerald-500/50",
      iconColor: "text-emerald-400"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-brand-700/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-950/70 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            About <span className="gradient-text">Me & Education</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            A passionate engineer combining academic excellence at SLIIT with real-world industry frontend experience.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Bio & Story Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2.5">
                <span>Who I Am</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 font-mono">
                  Final-Year Undergraduate
                </span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white">Udesha Rashmi</strong>, a final-year Information Technology undergraduate studying at <strong className="text-brand-300">SLIIT (Sri Lanka Institute of Information Technology)</strong>.
                </p>
                <p>
                  Throughout my academic and professional journey, I have cultivated deep expertise in crafting user-centered web applications. During my internship as a <strong>Frontend Developer at NextGen CodeX PVT LTD</strong>, I architected reusable UI components, polished cross-platform responsivity, and accelerated sprint cycles within Agile pipelines.
                </p>
                <p>
                  My technical toolkit extends beyond the frontend: I build end-to-end full-stack systems with <strong>Node.js, NestJS, Express, FastAPI, PostgreSQL, and MongoDB</strong>, while also exploring distributed microservices and applied Machine Learning models.
                </p>
                <p className="text-slate-200 font-medium pt-2">
                  🎯 I am actively seeking <span className="text-brand-400">Internship or Associate-level opportunities</span> in Software Engineering, Frontend Development, Full-Stack Development, or Web Application Development where I can contribute and continuously grow.
                </p>
              </div>

              {/* Quick Checklist */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>React.js & Next.js Ecosystem</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>TypeScript & Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-Stack REST & Microservices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Agile / Scrum Sprint Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education at SLIIT Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-brand-500/20 backdrop-blur-md shadow-xl relative overflow-hidden">
              
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 w-28 h-28 bg-brand-500/10 rounded-full blur-2xl" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-600/20 border border-brand-500/40 flex items-center justify-center text-brand-400 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-400">
                    Academic Background
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">
                    SLIIT
                  </h3>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-bold text-slate-100">
                  {EDUCATION_DATA.degree}
                </h4>
                <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-1">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EDUCATION_DATA.institution}</span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {EDUCATION_DATA.period}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-800/50 text-emerald-400 font-medium">
                    {EDUCATION_DATA.status}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-3 border-t border-slate-800">
                {EDUCATION_DATA.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-brand-400 mt-1 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Research Badge Callout */}
              <div className="mt-6 p-3.5 rounded-xl bg-brand-950/50 border border-brand-600/30 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                <p className="text-xs text-brand-200">
                  <strong className="text-white">4th Year Research:</strong> Post-Flood Rescue and Ration Distribution Platform with Machine Learning & Leaflet GIS.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-b ${pillar.color} bg-slate-900/40 border border-slate-800/80 ${pillar.border} transition-all duration-300 hover:-translate-y-1.5 shadow-lg group`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
