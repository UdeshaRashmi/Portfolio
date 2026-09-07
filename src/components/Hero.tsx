import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Sparkles, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  MapPin, 
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = [
    "Frontend Developer",
    "Full-Stack Developer",
    "React & Next.js Engineer",
    "IT Undergraduate @ SLIIT",
    "UI/UX Driven Problem Solver"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/60 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-inner shadow-brand-500/10 mb-6 hover:border-brand-400/50 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-400" />
                <span>Final-Year IT Undergraduate @ SLIIT</span>
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">Open to Work</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Typing Subheading */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
                I build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-400 to-indigo-300 font-mono font-bold underline decoration-brand-500/40 decoration-wavy underline-offset-4">
                  {displayText}
                </span>
                <span className="animate-pulse text-brand-400 font-bold ml-0.5">|</span>
              </span>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-300 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Final-year IT undergraduate at <strong className="text-white">SLIIT</strong> with industry internship experience at <strong className="text-brand-300">NextGen CodeX</strong>. Specialized in building fast, scalable, and responsive web applications using <span className="text-cyan-300 font-mono text-sm">React.js</span>, <span className="text-cyan-300 font-mono text-sm">Next.js</span>, <span className="text-cyan-300 font-mono text-sm">TypeScript</span>, and full-stack cloud ecosystems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-brand-500/50 transition-all backdrop-blur-md w-full sm:w-auto shadow-sm"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 border border-transparent hover:border-slate-700 transition-all w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location Quick Bar */}
            <div className="flex items-center flex-wrap gap-6 pt-6 border-t border-slate-800/80 w-full text-slate-400 text-sm">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-brand-500/60 hover:bg-brand-950/40 transition-all hover:scale-110"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/60 hover:bg-cyan-950/40 transition-all hover:scale-110"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.email}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-rose-500/60 hover:bg-rose-950/40 transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Available for Internship & Associate Roles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal & Tech Visual */}
          <div className="lg:col-span-5 relative">
            {/* Outer Decorative Gradient Border Card */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-brand-500/30 via-slate-800/40 to-cyan-500/30 shadow-2xl shadow-brand-950/80">
              
              {/* Terminal Window Card */}
              <div className="rounded-xl bg-[#0d121f] border border-slate-800 p-5 backdrop-blur-xl text-xs font-mono text-slate-300 shadow-inner">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-brand-400" />
                    <span>developer.profile.ts</span>
                  </div>
                  <span className="text-[10px] text-brand-400 font-semibold px-2 py-0.5 rounded bg-brand-950/60 border border-brand-800/50">
                    TypeScript
                  </span>
                </div>

                {/* Code Body */}
                <div className="space-y-2 leading-relaxed">
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">candidate</span>: <span className="text-yellow-300">SoftwareEngineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">education:</span> &#123;
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-400">institute:</span> <span className="text-emerald-300">"SLIIT"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-400">degree:</span> <span className="text-emerald-300">"BSc. (Hons) IT (Final Year)"</span>,
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4">
                    <span className="text-slate-400">experience:</span> <span className="text-amber-300">"Frontend Dev Intern @ NextGen CodeX"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                  </p>
                  <p className="pl-8 text-brand-300">
                    "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "NestJS", "FastAPI"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">mindset:</span> [
                  </p>
                  <p className="pl-8 text-cyan-300">
                    "Agile/Scrum", "Clean Code", "High Performance", "Continuous Learner"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-400 font-bold">"Ready to make an impact 🚀"</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Quick Interactive Terminal Banner */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Clean Architecture Verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-brand-400">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>ES6+ / TS 5.x</span>
                  </div>
                </div>

              </div>

              {/* Floating Pill Badges around card */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-white animate-bounce-slow">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>4th Year Research Ongoing</span>
              </div>

              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-brand-900/90 border border-brand-500/50 shadow-xl backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold text-brand-200">
                <Sparkles className="w-3.5 h-3.5 text-brand-300" />
                <span>NextGen CodeX Alum</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Quick Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:border-brand-500/40 transition-all group"
            >
              <p className="text-xs text-slate-400 uppercase tracking-wider font-mono font-medium mb-1">
                {stat.label}
              </p>
              <p className="text-base sm:text-lg font-display font-bold text-white group-hover:text-brand-300 transition-colors">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
