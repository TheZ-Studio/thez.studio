import React from 'react';
import { ShoppingCart, Terminal, BarChart3, ChevronRight } from 'lucide-react';

interface ServicesProps {
  content: any;
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const icons = [
    <ShoppingCart size={32} key="1" />,
    <Terminal size={32} key="2" />,
    <BarChart3 size={32} key="3" />
  ];

  return (
    <section id="services" className="py-24 bg-studio-bg relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-studio-accent/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.titlePrefix}<span className="text-studio-accent">{content.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-studio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((service: any, index: number) => (
            <div 
              key={index} 
              className="group bg-studio-card p-8 rounded-xl border border-white/5 hover:border-studio-accent transition-all duration-300 hover:shadow-neon-strong relative overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-studio-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="w-16 h-16 bg-studio-bg rounded-lg flex items-center justify-center text-studio-accent mb-6 group-hover:scale-110 transition-transform duration-300 border border-studio-accent/20">
                {icons[index]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
              <p className="text-studio-dim leading-relaxed mb-6 relative z-10">
                {service.desc}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-studio-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {content.readMore} <ChevronRight size={16} className="mx-1 rtl:rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;