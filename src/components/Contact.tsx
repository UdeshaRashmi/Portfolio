import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MaterialIcon } from './MaterialIcon';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-pink-500/10 dark:bg-pink-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/80 dark:bg-pink-950/70 border border-pink-300 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MaterialIcon name="mail" className="text-[17px] text-roseBrand-500" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Currently open to Associate Software Engineer, Frontend, and Full-Stack opportunities. Let's create something wonderful together!
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-roseBrand-200/80 dark:border-roseBrand-500/20 backdrop-blur-md shadow-xl">
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MaterialIcon name="alternate_email" className="text-[19px] text-roseBrand-500" />
                <span>Direct Contact</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                Feel free to email me directly or copy my email address to your clipboard for quick correspondence.
              </p>

              {/* Copy Email Box */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-pink-50/80 dark:bg-slate-950/80 border border-pink-200 dark:border-purple-900 mb-4">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <MaterialIcon name="mail" className="text-[18px] text-roseBrand-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 truncate font-semibold">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-purple-900 text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-slate-700 transition-colors shrink-0 shadow-xs"
                >
                  {copied ? (
                    <>
                      <MaterialIcon name="check" className="text-[17px] text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <MaterialIcon name="content_copy" className="text-[17px] text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mailto link */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md shadow-pink-500/30 transition-all hover:scale-[1.02]"
              >
                <MaterialIcon name="mail" className="text-[18px]" />
                <span>Open in Email App</span>
                <MaterialIcon name="north_east" className="text-[18px]" />
              </a>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/udesha-rashmi-944894331"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-roseBrand-200/80 dark:border-roseBrand-500/20 hover:border-purple-400 dark:hover:border-purple-500 transition-all group backdrop-blur-md shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                  <MaterialIcon name="work" className="text-[24px]" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Let's connect</p>
              </a>

              <a
                href="https://github.com/UdeshaRashmi"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-roseBrand-200/80 dark:border-roseBrand-500/20 hover:border-pink-400 dark:hover:border-pink-500 transition-all group backdrop-blur-md shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-3 group-hover:scale-110 transition-transform">
                  <MaterialIcon name="code" className="text-[24px]" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
                  GitHub
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Code repos</p>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-[#17121d]/40 border border-roseBrand-200/70 dark:border-roseBrand-500/20 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <MaterialIcon name="location_on" className="text-[18px] text-rose-500" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-pink-600 dark:text-pink-400 font-bold">
                <MaterialIcon name="check_circle" className="text-[17px] text-roseBrand-500" filled />
                Immediate Availability
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#17121d]/90 border border-roseBrand-200/90 dark:border-roseBrand-500/20 backdrop-blur-md shadow-2xl relative overflow-hidden">
              
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MaterialIcon name="chat" className="text-[19px] text-roseBrand-500" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Have a job opening, internship opportunity, or project inquiry? Drop me a message below.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-pink-50 dark:bg-emerald-950/80 border border-pink-300 dark:border-emerald-500/50 text-pink-800 dark:text-emerald-200 flex items-center gap-3 animate-in fade-in">
                  <MaterialIcon name="check_circle" className="text-[22px] text-emerald-500 shrink-0" filled />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-slate-900 dark:text-white">Message sent successfully!</strong> Thank you for reaching out, I will get back to you shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amanda Perera"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-slate-950/80 border border-pink-200 dark:border-purple-900 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-slate-950/80 border border-pink-200 dark:border-purple-900 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer / Frontend Role Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-slate-950/80 border border-pink-200 dark:border-purple-900 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Udesha, we love your portfolio and would like to invite you for an interview..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-pink-50/50 dark:bg-slate-950/80 border border-pink-200 dark:border-purple-900 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {status === 'submitting' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <MaterialIcon name="send" className="text-[18px]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
