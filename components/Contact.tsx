import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

interface ContactProps {
  content: any;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-24 bg-studio-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#00F5FF_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Contact Info */}
          <div className="lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              {content.titlePrefix} <span className="text-studio-accent italic">{content.titleHighlight}</span>
            </h2>
            <p className="text-studio-dim mb-12 text-lg leading-relaxed max-w-xl">
              {content.desc}
            </p>

            <div className="space-y-10">
              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-studio-card border border-white/10 flex items-center justify-center text-studio-accent shrink-0 group-hover:border-studio-accent/50 transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{content.phoneLabel}</h4>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+213562506102" className="text-studio-dim hover:text-white text-xl transition-colors font-mono" dir="ltr">+213 562 50 61 02</a>
                    <a
                      href="https://wa.me/213562506102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] rounded-xl font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300 w-fit"
                    >
                      <MessageCircle size={20} />
                      {content.whatsappBtn}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-studio-card border border-white/10 flex items-center justify-center text-studio-accent shrink-0 group-hover:border-studio-accent/50 transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{content.locationLabel}</h4>
                  <p className="text-studio-dim text-lg whitespace-pre-line leading-relaxed">{content.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mailto CTA Card */}
          <div className="lg:w-7/12 w-full">
            <div className="relative group p-1 rounded-[32px] bg-gradient-to-br from-studio-accent/20 to-transparent hover:from-studio-accent/40 transition-all duration-500 shadow-2xl">
              <div className="bg-studio-card rounded-[30px] p-10 md:p-16 border border-white/5 relative overflow-hidden text-center">
                {/* Decorative circle */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-studio-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-studio-accent/5 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-studio-bg rounded-3xl border border-studio-accent/30 flex items-center justify-center text-studio-accent mb-8 shadow-xl shadow-studio-accent/10 group-hover:scale-110 transition-transform duration-500">
                    <Mail size={48} />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {content.ctaTitle}
                  </h3>
                  
                  <p className="text-studio-dim text-lg md:text-xl mb-12 max-w-md mx-auto">
                    {content.ctaDesc}
                  </p>

                  <a 
                    href={`mailto:${content.ctaMail}`}
                    className="group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-studio-accent text-studio-bg font-bold text-xl rounded-2xl hover:bg-white transition-all duration-300 shadow-neon hover:shadow-neon-strong transform hover:-translate-y-1"
                  >
                    <span>{content.ctaMail}</span>
                    <ExternalLink size={24} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>

                  <div className="mt-12 flex items-center gap-2 text-studio-dim/50 text-sm font-medium uppercase tracking-[0.2em]">
                    <div className="w-8 h-px bg-white/10" />
                    <span>Response under 24h</span>
                    <div className="w-8 h-px bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;