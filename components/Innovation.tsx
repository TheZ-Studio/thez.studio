import React from 'react';
import { FlaskConical } from 'lucide-react';

interface InnovationProps {
  content: any;
}

const Innovation: React.FC<InnovationProps> = ({ content }) => {
  return (
    <section id="innovation" className="py-20 container mx-auto px-6">
      <div className="bg-gradient-to-r from-studio-card to-[#004d40] rounded-2xl p-10 md:p-16 border border-studio-accent/30 relative overflow-hidden">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#00e676 1px, transparent 1px), linear-gradient(90deg, #00e676 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center md:justify-start">
             <div className="w-24 h-24 bg-studio-bg rounded-full flex items-center justify-center border-4 border-studio-accent shadow-[0_0_30px_rgba(0,230,118,0.4)]">
                <FlaskConical size={40} className="text-studio-accent" />
             </div>
          </div>
          
          <div className="md:w-2/3 text-center md:text-left rtl:md:text-right">
            <h2 className="text-3xl font-bold text-white mb-2">{content.title}</h2>
            <p className="text-studio-accent font-mono text-sm mb-4 tracking-widest uppercase">{content.subtitle}</p>
            <p className="text-studio-text text-lg max-w-2xl">
              {content.desc}
            </p>
            
            {/* Modular Slot for Future Content */}
            <div className="mt-8 p-4 border border-dashed border-studio-dim rounded bg-studio-bg/30 text-studio-dim text-sm italic dir-ltr">
               {content.module}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;