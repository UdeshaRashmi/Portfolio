import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, PROJECTS, SKILL_CATEGORIES, CERTIFICATES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white">
      
      {/* Backdrop */}
      <div className="fixed inset-0 print:hidden" onClick={onClose} />

      {/* Resume Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 shadow-2xl rounded-3xl p-6 sm:p-10 z-10 my-8 overflow-hidden print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <h3 className="text-lg font-display font-bold text-white">
              Official Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors shadow-md shadow-brand-600/30"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="space-y-8 text-slate-200 print:text-slate-900">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800 print:border-slate-300">
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-brand-400 print:text-indigo-700 mt-1">
              Final-Year Information Technology Undergraduate @ SLIIT | Frontend & Full-Stack Developer
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-3 text-xs sm:text-sm text-slate-400 print:text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400 print:text-black" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-purple-400 print:text-black" />
                github.com/UdeshaRashmi
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                linkedin.com/in/udesha-rashmi
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-400 print:text-indigo-700 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400 print:bg-indigo-700" />
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-400 print:text-indigo-700 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 print:bg-slate-50 print:border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="font-bold text-white print:text-black text-sm sm:text-base">
                  {EDUCATION_DATA.degree}
                </h3>
                <span className="text-xs font-mono text-cyan-400 print:text-slate-700 font-semibold">
                  {EDUCATION_DATA.period}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-300 print:text-indigo-600 font-medium">
                {EDUCATION_DATA.institution}
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300 print:text-slate-700 list-disc list-inside">
                {EDUCATION_DATA.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-400 print:text-indigo-700 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 print:bg-slate-50 print:border-slate-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <div>
                      <h3 className="font-bold text-white print:text-black text-sm sm:text-base">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-300 print:text-indigo-600 font-medium">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-700">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2.5 space-y-1 text-xs text-slate-300 print:text-slate-700 list-disc list-inside">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-700/60 print:bg-slate-200 text-slate-300 print:text-slate-800 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Highlights */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-400 print:text-indigo-700 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Key Software Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-800/30 border border-slate-700/50 print:bg-slate-50 print:border-slate-300">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xs sm:text-sm text-white print:text-black">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] font-mono text-brand-300 print:text-indigo-600">
                      {proj.badge || proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                    {proj.description}
                  </p>
                  <p className="text-[11px] text-slate-400 print:text-slate-600 font-mono mt-1">
                    <strong>Tech:</strong> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-400 print:text-indigo-700 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-2.5 rounded-xl bg-slate-800/30 border border-slate-700/40 print:bg-slate-50 print:border-slate-300">
                  <strong className="text-white print:text-black">{cat.title}:</strong>{' '}
                  <span className="text-slate-300 print:text-slate-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certificates */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-400 print:text-indigo-700 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-xl bg-slate-800/30 border border-slate-700/40 print:bg-slate-50 print:border-slate-300">
                  <p className="font-semibold text-white print:text-black">{cert.title}</p>
                  <p className="text-[11px] text-brand-300 print:text-indigo-600">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
