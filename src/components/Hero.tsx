import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  MapPin, 
  GraduationCap,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumeAsHTML } from '../utils/downloadResume';

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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-600/15 dark:bg-brand-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/15 dark:bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

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
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <GraduationCap className="w-4 h-4 text-brand-500" />
                <span>Final-Year IT Undergraduate @ SLIIT</span>
              </span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Open to Work</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Typing Subheading (NO wavy underline, clean developer gradient) */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                I build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-600 to-cyan-500 dark:from-brand-400 dark:via-purple-400 dark:to-cyan-400 font-mono font-bold">
                  {displayText}
                </span>
                <span className="animate-pulse text-brand-500 font-bold ml-0.5">|</span>
              </span>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Final-year IT undergraduate at <strong className="text-slate-900 dark:text-white font-semibold">SLIIT</strong> with industry internship experience at <strong className="text-brand-600 dark:text-brand-400">NextGen CodeX</strong>. Skilled in engineering fast, scalable, and responsive web applications using <span className="text-brand-700 dark:text-cyan-300 font-mono text-sm bg-brand-50 dark:bg-slate-800 px-1.5 py-0.5 rounded">React.js</span>, <span className="text-brand-700 dark:text-cyan-300 font-mono text-sm bg-brand-50 dark:bg-slate-800 px-1.5 py-0.5 rounded">Next.js</span>, <span className="text-brand-700 dark:text-cyan-300 font-mono text-sm bg-brand-50 dark:bg-slate-800 px-1.5 py-0.5 rounded">TypeScript</span>, and modern full-stack systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 via-purple-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={downloadResumeAsHTML}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/50 hover:bg-brand-100 dark:hover:bg-brand-900/60 border border-brand-200 dark:border-brand-800/80 transition-all backdrop-blur-md w-full sm:w-auto shadow-xs"
              >
                <Download className="w-4 h-4 text-brand-500" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
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
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 hover:shadow-sm transition-all hover:scale-110"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.email}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-400 hover:shadow-sm transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Available for Internship & Associate Roles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-brand-500/30 via-purple-500/20 to-cyan-500/30 shadow-2xl shadow-brand-950/40">
              
              {/* Terminal Window Card */}
              <div className="rounded-xl bg-slate-900 dark:bg-[#0d121f] border border-slate-800 p-5 backdrop-blur-xl text-xs font-mono text-slate-300 shadow-inner">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
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
                    <span className="text-emerald-400 font-bold">"Ready to make an impact"</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Quick Interactive Terminal Banner */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Clean Architecture</span>
                  </div>
                  <div className="flex items-center gap-1 text-brand-400">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>ES6+ / TS 5.x</span>
                  </div>
                </div>

              </div>

              {/* Floating Pill Badges around card */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>4th Year Research Ongoing</span>
              </div>

              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-brand-900/90 border border-brand-500/50 shadow-xl backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold text-brand-200">
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
              className="p-4 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:border-brand-500/40 transition-all group shadow-xs hover:shadow-md"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono font-medium mb-1">
                {stat.label}
              </p>
              <p className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


