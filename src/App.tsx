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
import { MaterialIcon } from './components/MaterialIcon';

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
    <div className="min-h-screen bg-sage-50 dark:bg-[#100d14] text-sage-900 dark:text-slate-100 font-sans selection:bg-sage-200 dark:selection:bg-roseBrand-500/25 selection:text-sage-900 dark:selection:text-roseBrand-200 relative">
      
      {/* Dynamic Background Noise / Glow Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-sage-200/70 via-sage-500/12 to-transparent dark:from-roseBrand-500/12 dark:via-brand-500/8 dark:to-transparent rounded-full blur-[160px]" />
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
            className="p-3 rounded-full bg-sage-900/90 dark:bg-slate-900/90 border border-sage-700 dark:border-slate-700 text-sage-50 dark:text-slate-300 hover:text-white hover:bg-sage-800 dark:hover:bg-slate-800 shadow-xl backdrop-blur-md transition-all hover:scale-110"
          >
            <MaterialIcon name="keyboard_arrow_up" className="text-[20px]" />
          </button>
        )}

        <button
          onClick={() => setResumeModalOpen(true)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-sage-500 to-sage-700 hover:from-sage-600 hover:to-sage-800 dark:from-roseBrand-500 dark:to-brand-600 dark:hover:from-roseBrand-600 dark:hover:to-brand-700 text-white font-semibold shadow-xl shadow-sage-600/20 dark:shadow-roseBrand-600/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          aria-label="View Resume"
        >
          <MaterialIcon name="description" className="text-[18px] text-sage-50 dark:text-roseBrand-100" />
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
