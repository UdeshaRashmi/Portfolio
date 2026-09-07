import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MaterialIcon } from './MaterialIcon';
import { GraduateLogo } from './GraduateLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950/90 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <GraduateLogo className="h-9 w-9 shrink-0" />
              <span className="text-xl font-display font-bold text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Final-Year Information Technology Undergraduate at SLIIT. Building modern, scalable, and responsive web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-brand-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-brand-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-brand-300 transition-colors">Skills</a>
            <a href="#certificates" className="hover:text-brand-300 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-brand-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-500/50 transition-colors"
            >
              <MaterialIcon name="code" className="text-[18px]" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
            >
              <MaterialIcon name="work" className="text-[18px]" />
            </a>
            <a
              href={PERSONAL_INFO.socials.email}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-rose-500/50 transition-colors"
            >
              <MaterialIcon name="mail" className="text-[18px]" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-xl bg-brand-900/60 border border-brand-500/40 text-brand-300 hover:text-white hover:bg-brand-600 transition-all hover:scale-105"
            >
              <MaterialIcon name="keyboard_arrow_up" className="text-[20px]" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1.5">
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
