import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  label: string;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ label }) => {
  return (
    <a 
      href="https://wa.me/213562506102"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex items-center gap-2 group cursor-pointer"
      aria-label="Contact via WhatsApp"
    >
      <div className="bg-studio-bg text-studio-text text-xs font-bold py-1 px-3 rounded shadow-lg border border-studio-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {label}
      </div>
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-neon-strong hover:scale-110 transition-transform duration-300">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        <MessageCircle size={32} className="text-white relative z-10" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;