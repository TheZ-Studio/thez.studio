import React from 'react';
import { Github, Linkedin, Send, Facebook } from 'lucide-react';

interface FooterProps {
  content: any;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-[#001c17] py-8 border-t border-studio-accent/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-studio-accent/20">
            <img src="/logos/studio-logo.png" alt="Z" className="w-full h-full object-cover" />
          </div>
          <span className="text-studio-dim text-sm">{content.copyright}</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/TheZ-Studio" target="_blank" rel="noopener noreferrer" className="text-studio-dim hover:text-studio-accent transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/company/thzstudio" target="_blank" rel="noopener noreferrer" className="text-studio-dim hover:text-studio-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://facebook.com/thezstudio" target="_blank" rel="noopener noreferrer" className="text-studio-dim hover:text-studio-accent transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://t.me/thzstudio" target="_blank" rel="noopener noreferrer" className="text-studio-dim hover:text-studio-accent transition-colors" aria-label="Telegram">
            <Send size={20} className="-rotate-45 translate-y-[2px] translate-x-[-2px] rtl:rotate-[135deg]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;