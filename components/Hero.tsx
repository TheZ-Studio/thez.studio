import React, { Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../translations';
import TechScene from './TechScene';

interface HeroProps {
  content: any;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-studio-accent/30 bg-studio-accent/5 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-studio-accent animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-studio-accent uppercase">{content.tag}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            {content.titleLine1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-accent to-emerald-600">
              {content.titleLine2}
            </span>
          </h1>
          
          <p className="text-lg text-studio-dim mb-8 max-w-lg leading-relaxed">
            {content.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="px-8 py-4 bg-studio-accent text-studio-bg font-bold text-center rounded-sm hover:bg-white transition-all duration-300 shadow-neon flex items-center justify-center gap-2 group"
            >
              {content.ctaPrimary}
              <ArrowRight size={20} className={`transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>
            <a 
              href="#services"
              className="px-8 py-4 border border-studio-dim text-studio-text font-bold text-center rounded-sm hover:border-studio-accent hover:text-studio-accent transition-colors duration-300"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>

        {/* 3D Tech Visual */}
        <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px] relative flex justify-center items-center">
          {/* Background Glow for 3D */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-studio-accent/10 rounded-full blur-[80px] -z-10"></div>
          
          <Suspense fallback={<div className="text-studio-accent animate-pulse">Loading Lab...</div>}>
            <TechScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;