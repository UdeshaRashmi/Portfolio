import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  MessageSquare, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

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
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-950/70 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-brand-400" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Currently open to full-time Associate Software Engineer, Frontend, and Full-Stack opportunities. Let's discuss how I can contribute to your team!
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl">
              <h3 className="text-lg font-display font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-400" />
                <span>Direct Reachout</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                Feel free to email me directly or copy my email address to your clipboard for quick correspondence.
              </p>

              {/* Copy Email Box */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-slate-800 mb-4">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mailto link */}
              <a
                href={PERSONAL_INFO.socials.email}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-600/30 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 transition-all group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Let's connect professionally</p>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/50 transition-all group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/60 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  GitHub
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">View code repositories</p>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span className="text-xs text-slate-300 font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Immediate Availability
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-2xl relative overflow-hidden">
              
              <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have a job opening, internship opportunity, or project inquiry? Drop me a message below.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white">Message sent successfully!</strong> Thank you for reaching out, I will get back to you shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer / Frontend Role Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Udesha, I would like to invite you for an interview regarding..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/40 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {status === 'submitting' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
