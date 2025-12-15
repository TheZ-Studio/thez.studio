import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Innovation from './components/Innovation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const content = translations[lang];

  useEffect(() => {
    // SEO & Document Settings Logic
    document.title = content.meta.title;
    
    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', content.meta.description);
    }
    
    // Update Open Graph Description if it exists
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', content.meta.description);
    }

    // Handle RTL/LTR Direction
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    
    // Switch Font based on language
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }

  }, [lang, content]);

  return (
    <div className={`flex flex-col min-h-screen bg-circuit overflow-x-hidden ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      <main className="flex-grow">
        <Hero content={content.hero} lang={lang} />
        <Stats content={content} />
        <Services content={content.services} />
        <Innovation content={content.innovation} />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
      <WhatsAppFloat label={content.contact.whatsappFloat} />
    </div>
  );
};

export default App;