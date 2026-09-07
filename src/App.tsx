import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FileText, ArrowUp } from 'lucide-react';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 font-sans selection:bg-brand-500/30 selection:text-brand-300 relative">
      
      {/* Dynamic Background Noise / Glow Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-600/10 via-cyan-500/5 to-transparent rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          onOpenResume={() => setResumeModalOpen(true)} 
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenResume={() => setResumeModalOpen(true)} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certificates />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Action Button for Quick Resume on Mobile / Desktop */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 print:hidden">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 shadow-xl backdrop-blur-md transition-all hover:scale-110"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => setResumeModalOpen(true)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold shadow-xl shadow-brand-600/30 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          aria-label="View Resume"
        >
          <FileText className="w-4 h-4 text-brand-200 group-hover:rotate-12 transition-transform" />
          <span className="text-xs sm:text-sm">Resume</span>
        </button>
      </div>

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}

export default App;
