import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.expertise, href: '#services' },
    { name: content.lab, href: '#innovation' },
    { name: content.plugins, href: '#plugins' },
    { name: content.contact, href: '#contact' },
  ];

  const toggleLang = (l: Language) => {
    setLang(l);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-studio-bg/95 backdrop-blur-md border-b border-studio-accent/20 py-4 shadow-neon'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl border border-studio-accent/20 group-hover:border-studio-accent/50 transition-all duration-500 shadow-neon">
            <img
              src="/logos/studio-logo.png"
              alt="TheZ Studio Logo"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-studio-accent transition-colors">
            the<span className="text-studio-accent">Z</span> studio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-studio-text hover:text-studio-accent transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1 text-studio-dim hover:text-white transition-colors"
            >
              <Globe size={18} />
              <span className="uppercase font-bold text-sm">{lang}</span>
            </button>

            {isLangMenuOpen && (
              <div className="absolute top-full mt-2 w-24 bg-studio-card border border-studio-accent/20 rounded shadow-xl py-2 flex flex-col gap-1 z-50 ltr:right-0 rtl:left-0">
                <button onClick={() => toggleLang('fr')} className={`px-4 py-1 text-left rtl:text-right hover:bg-studio-accent/10 hover:text-studio-accent ${lang === 'fr' ? 'text-studio-accent font-bold' : 'text-studio-dim'}`}>FR</button>
                <button onClick={() => toggleLang('en')} className={`px-4 py-1 text-left rtl:text-right hover:bg-studio-accent/10 hover:text-studio-accent ${lang === 'en' ? 'text-studio-accent font-bold' : 'text-studio-dim'}`}>EN</button>
                <button onClick={() => toggleLang('ar')} className={`px-4 py-1 text-left rtl:text-right hover:bg-studio-accent/10 hover:text-studio-accent font-arabic ${lang === 'ar' ? 'text-studio-accent font-bold' : 'text-studio-dim'}`}>العربية</button>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="px-6 py-2 bg-transparent border border-studio-accent text-studio-accent text-sm font-bold uppercase tracking-wide hover:bg-studio-accent hover:text-studio-bg transition-all duration-300 shadow-[0_0_10px_rgba(0,230,118,0.1)] hover:shadow-neon"
          >
            {content.cta}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Lang Toggle (Simple Cycle) */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : lang === 'en' ? 'ar' : 'fr')}
            className="text-studio-dim font-bold uppercase border border-studio-dim/30 px-2 py-1 rounded text-xs"
          >
            {lang}
          </button>

          <button
            className="text-studio-text hover:text-studio-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-studio-bg border-b border-studio-accent/20 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-studio-text hover:text-studio-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 w-full text-center px-6 py-3 bg-studio-accent text-studio-bg font-bold uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {content.cta}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;