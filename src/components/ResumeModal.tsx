import React, { useEffect } from 'react';
import { RESUME_PDF_PATH, downloadResumeAsHTML } from '../utils/downloadResume';
import { MaterialIcon } from './MaterialIcon';

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2 min-w-0">
            <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-500" />
            <h3 className="truncate text-base sm:text-lg font-display font-bold text-white">
              Udesha Rashmi CV
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_PDF_PATH}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-xl bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-700"
            >
              <MaterialIcon name="open_in_new" className="text-[18px]" />
              <span>Open</span>
            </a>
            <button
              onClick={downloadResumeAsHTML}
              className="flex items-center gap-1.5 rounded-xl bg-brand-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-brand-600/30 transition-colors hover:bg-brand-500"
            >
              <MaterialIcon name="download" className="text-[18px]" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-xl border border-slate-700 bg-slate-800 p-2 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
              aria-label="Close CV modal"
            >
              <MaterialIcon name="close" className="text-[22px]" />
            </button>
          </div>
        </div>

        <iframe
          src={RESUME_PDF_PATH}
          title="Udesha Rashmi CV"
          className="h-full w-full bg-white"
        />
      </div>
    </div>
  );
};
