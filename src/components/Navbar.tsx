import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumeAsHTML } from '../utils/downloadResume';
import { MaterialIcon } from './MaterialIcon';
import { GraduateLogo } from './GraduateLogo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0a0d14]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-lg sm:text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white focus:outline-none"
        >
          <GraduateLogo className="h-11 w-11 shrink-0 drop-shadow-[0_10px_20px_rgba(56,189,248,0.22)] transition-transform group-hover:scale-105" />
          <span className="flex items-baseline gap-1.5">
            <span className="text-slate-800 dark:text-slate-100 group-hover:text-cyanBrand-300 transition-colors">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanBrand-400 via-brand-400 to-indigo-400 font-extrabold">
              {PERSONAL_INFO.name.split(' ')[1]}
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-cyanBrand-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Download Resume Action */}
          <button
            onClick={downloadResumeAsHTML}
            title="Download formatted CV"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-brand-700 dark:text-brand-200 bg-cyanBrand-50 dark:bg-brand-950/60 hover:bg-cyanBrand-100 dark:hover:bg-brand-900/60 border border-cyanBrand-200 dark:border-brand-500/30 transition-all shadow-xs"
          >
            <MaterialIcon name="download" className="text-[17px] text-brand-500" />
            <span>Download CV</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
          >
            <MaterialIcon name={darkMode ? 'light_mode' : 'dark_mode'} className={`text-[18px] ${darkMode ? 'text-amber-300' : 'text-brand-500'}`} />
          </button>

          {/* Connect Button */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-cyanBrand-600 hover:from-brand-500 hover:to-cyanBrand-500 shadow-md shadow-brand-600/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>Let's Talk</span>
            <MaterialIcon name="north_east" className="text-[16px]" />
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <MaterialIcon name={darkMode ? 'light_mode' : 'dark_mode'} className={`text-[18px] ${darkMode ? 'text-amber-300' : 'text-brand-500'}`} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            aria-label="Open navigation menu"
          >
            <MaterialIcon name={mobileMenuOpen ? 'close' : 'menu'} className="text-[22px]" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-brand-600 text-white font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white hover:bg-cyanBrand-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-slate-200 dark:border-slate-800 my-1" />
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-1"
              >
                <MaterialIcon name="description" className="text-[17px]" />
                <span>Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadResumeAsHTML();
                }}
                className="py-2.5 rounded-xl text-xs font-semibold bg-cyanBrand-50 dark:bg-brand-950/60 border border-cyanBrand-200 dark:border-brand-500/30 text-brand-700 dark:text-brand-200 flex items-center justify-center gap-1"
              >
                <MaterialIcon name="download" className="text-[17px]" />
                <span>Download CV</span>
              </button>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-600 to-cyanBrand-600 text-white shadow-md shadow-brand-600/25"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
