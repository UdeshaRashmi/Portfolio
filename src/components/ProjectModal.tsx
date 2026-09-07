import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop Click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#151024] border border-pink-200 dark:border-purple-800 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
        
        {/* Top Glow bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-pink-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-pink-200 dark:border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800 font-mono">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-mono">
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-1">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Overview */}
        <div className="mb-6 p-4 rounded-2xl bg-pink-50/60 dark:bg-slate-900/60 border border-pink-200/60 dark:border-purple-900/40">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-pink-500" />
            <span>Project Overview</span>
          </h4>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* In-depth Engineering Highlights */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-purple-500" />
            <span>Architecture & Key Implementation Details</span>
          </h4>
          <div className="space-y-2.5">
            {project.detailedPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-pink-50/40 dark:bg-slate-900/40 border border-pink-200/50 dark:border-purple-900/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-fuchsia-500" />
            <span>Technologies & Tools Applied</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-pink-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-pink-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-pink-100 dark:border-purple-900/40 flex-wrap gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Role: <span className="text-pink-600 dark:text-pink-400 font-bold">{project.role || 'Full-Stack Developer'}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-colors shadow-md shadow-pink-500/30"
            >
              Inquire About Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

