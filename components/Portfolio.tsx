import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { Language } from '../translations';

interface PortfolioProps {
  content: any;
  lang: Language;
}

const Portfolio: React.FC<PortfolioProps> = ({ content, lang }) => {
  // Placeholder images that fit the tech theme
  const images = [
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // E-commerce
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Dashboard
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Mobile/App
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#001c17] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.titlePrefix}<span className="text-studio-accent">{content.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-studio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item: any, index: number) => (
            <div key={index} className="group relative rounded-xl overflow-hidden bg-studio-card border border-white/5 hover:border-studio-accent transition-all duration-500">
              
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-studio-bg/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <img 
                  src={images[index]} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-studio-accent uppercase tracking-wider mb-2 block">{item.category}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-studio-accent transition-colors">{item.title}</h3>
                  </div>
                  <div className="p-2 bg-studio-bg rounded-full text-studio-dim group-hover:text-white group-hover:bg-studio-accent/20 transition-all">
                    <ExternalLink size={18} />
                  </div>
                </div>
                
                <p className="text-studio-dim text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-xs text-studio-dim/70">
                   <Layers size={14} />
                   <span>Full Stack Delivery</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;