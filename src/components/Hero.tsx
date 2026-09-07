import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumeAsHTML } from '../utils/downloadResume';
import { MaterialIcon } from './MaterialIcon';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-600/15 dark:bg-brand-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-brand-500/10 dark:bg-brand-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyanBrand-500/10 dark:bg-cyanBrand-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#64748b12_1px,transparent_1px),linear-gradient(to_bottom,#64748b12_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f293d18_1px,transparent_1px),linear-gradient(to_bottom,#1f293d18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-500/30 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-xs mb-6 hover:border-brand-400/50 transition-colors">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="flex items-center gap-1.5 font-semibold">
                <MaterialIcon name="school" className="text-[18px] text-brand-500" />
                <span>Final-Year IT Undergraduate @ SLIIT</span>
              </span>
              <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">|</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Open to Work</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <span className="gradient-text">Rashmi</span>
            </h1>

            {/* Headline */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-700 dark:text-slate-200">
                Full Stack Developer & IT Undergraduate
              </h2>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              I build modern, responsive, and user-friendly web experiences with a passion for turning ideas into beautiful digital solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 to-cyanBrand-600 hover:from-brand-500 hover:to-cyanBrand-500 shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View Projects</span>
                <MaterialIcon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={downloadResumeAsHTML}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/50 hover:bg-brand-100 dark:hover:bg-brand-900/60 border border-brand-200 dark:border-brand-800/80 transition-all backdrop-blur-md w-full sm:w-auto shadow-xs"
              >
                <MaterialIcon name="download" className="text-[18px] text-brand-500" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all w-full sm:w-auto"
              >
                <MaterialIcon name="description" className="text-[18px] text-slate-500 dark:text-slate-400" />
                <span>Preview</span>
              </button>
            </div>

            {/* Social Links & Location Quick Bar */}
            <div className="flex items-center flex-wrap gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 w-full text-slate-500 dark:text-slate-400 text-sm">
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-400 hover:shadow-sm transition-all hover:scale-110"
                >
                  <MaterialIcon name="code" className="text-[18px]" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 hover:shadow-sm transition-all hover:scale-110"
                >
                  <MaterialIcon name="work" className="text-[18px]" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.email}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyanBrand-600 dark:hover:text-cyanBrand-400 hover:border-cyanBrand-400 hover:shadow-sm transition-all hover:scale-110"
                >
                  <MaterialIcon name="mail" className="text-[18px]" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                <MaterialIcon name="location_on" className="text-[17px] text-cyanBrand-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <MaterialIcon name="check_circle" className="text-[17px] text-emerald-500" filled />
                <span>Available for Internship & Associate Roles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-brand-500/45 via-cyanBrand-500/25 to-cyan-500/45 shadow-2xl shadow-brand-950/40">
              
              {/* Terminal Window Card */}
              <div className="rounded-xl bg-[#07111f] dark:bg-[#07111f] border border-cyanBrand-500/25 p-5 backdrop-blur-xl text-xs font-mono text-slate-100 shadow-inner">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-sky-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-200">
                    <MaterialIcon name="terminal" className="text-[17px] text-cyanBrand-300" />
                    <span>developer.profile.ts</span>
                  </div>
                  <span className="text-[10px] text-cyanBrand-100 font-semibold px-2 py-0.5 rounded bg-brand-700/40 border border-brand-400/40">
                    TypeScript
                  </span>
                </div>

                {/* Code Body */}
                <div className="space-y-2 leading-relaxed break-words overflow-x-hidden">
                  <p>
                    <span className="text-violet-300">const</span>{' '}
                    <span className="text-cyanBrand-200">candidate</span>: <span className="text-yellow-200">SoftwareEngineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-200">name:</span>{' '}
                    <span className="text-emerald-200">"{PERSONAL_INFO.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-200">education:</span> &#123;
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-200">institute:</span> <span className="text-emerald-200">"SLIIT"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-200">degree:</span> <span className="text-emerald-200">"BSc. (Hons) IT (Final Year)"</span>,
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4">
                    <span className="text-slate-200">experience:</span> <span className="text-amber-200">"Frontend Dev Intern @ NextGen CodeX"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-200">coreStack:</span> [
                  </p>
                  <p className="pl-8 text-cyanBrand-100">
                    "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "FastAPI"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-200">skills:</span> &#123;
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-200">languages:</span> <span className="text-cyanBrand-200">["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "R"]</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-200">frontend:</span> <span className="text-cyanBrand-200">["HTML", "CSS", "React.js", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Tailwind CSS"]</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-200">backend:</span> <span className="text-cyanBrand-200">["Node.js", "Express.js", "NestJS", "Spring Boot", "FastAPI"]</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-200">data:</span> <span className="text-cyanBrand-200">["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "SQLAlchemy", "Hibernate"]</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-200">tools:</span> <span className="text-cyanBrand-200">["Postman", "Swagger", "VS Code", "IntelliJ IDEA", "DBeaver", "Git", "GitHub"]</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-200">concepts:</span> <span className="text-cyanBrand-200">["REST APIs", "JWT Auth", "Microservices", "GIS Mapping", "Agile/Scrum", "SDLC", "OOP"]</span>
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4">
                    <span className="text-slate-200">mindset:</span> [
                  </p>
                  <p className="pl-8 text-cyanBrand-200">
                    "Agile/Scrum", "Clean Code", "High Performance", "Continuous Learner"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-200">status:</span>{' '}
                    <span className="text-emerald-400 font-bold">"Ready to make an impact"</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Quick Interactive Terminal Banner */}
                <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-200">
                  <div className="flex items-center gap-1 text-emerald-400">
                    <MaterialIcon name="check_circle" className="text-[17px]" filled />
                    <span>Clean Architecture</span>
                  </div>
                  <div className="flex items-center gap-1 text-brand-400">
                    <MaterialIcon name="data_object" className="text-[17px]" />
                    <span>ES6+ / TS 5.x</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
