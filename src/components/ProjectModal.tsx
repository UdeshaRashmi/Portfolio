import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop Click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0f172a] border border-slate-700/80 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
        
        {/* Top Glow bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-cyan-400 to-indigo-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-950 text-brand-300 border border-brand-800/60 font-mono">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono">
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-mono text-slate-400">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Overview */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Project Overview</span>
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* In-depth Engineering Highlights */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture & Key Implementation Details</span>
          </h4>
          <div className="space-y-2.5">
            {project.detailedPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-brand-400" />
            <span>Technologies & Tools Applied</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 flex-wrap gap-3">
          <div className="text-xs text-slate-400 font-mono">
            Role: <span className="text-brand-300 font-semibold">{project.role || 'Full-Stack Developer'}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 transition-colors shadow-md shadow-brand-600/30"
            >
              Inquire About Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
