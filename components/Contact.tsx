import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactProps {
  content: any;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');

    const myForm = event.currentTarget;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setFormStatus('success'))
      .catch((error) => {
        console.error(error);
        setFormStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 bg-studio-bg relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Contact Info */}
          <div className="lg:w-5/12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {content.titlePrefix} <span className="text-studio-accent">{content.titleHighlight}</span>
            </h2>
            <p className="text-studio-dim mb-12 text-lg">
              {content.desc}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-studio-card flex items-center justify-center text-studio-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{content.emailLabel}</h4>
                  <a href="mailto:contact@thez.studio" className="text-studio-dim hover:text-studio-accent transition-colors">contact@thez.studio</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-studio-card flex items-center justify-center text-studio-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{content.phoneLabel}</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+213562506102" className="text-studio-dim hover:text-studio-accent transition-colors" dir="ltr">+213 562 50 61 02</a>
                    <a
                      href="https://wa.me/213562506102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:text-white transition-colors mt-2"
                    >
                      <MessageCircle size={20} />
                      {content.whatsappBtn}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-studio-card flex items-center justify-center text-studio-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{content.locationLabel}</h4>
                  <p className="text-studio-dim whitespace-pre-line">{content.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-7/12 bg-studio-card p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-studio-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} className="text-studio-accent rtl:rotate-180" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{content.form.successTitle}</h3>
                <p className="text-studio-dim">{content.form.successDesc}</p>
                <button onClick={() => setFormStatus('idle')} className="mt-8 text-studio-accent underline hover:text-white">{content.form.resetBtn}</button>
              </div>
            ) : (
              <form
                name="contact"
                method="post"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify Hidden Input */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-studio-dim uppercase tracking-wider">{content.form.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-studio-bg border border-studio-dim/30 rounded p-3 text-white focus:border-studio-accent focus:ring-1 focus:ring-studio-accent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-studio-dim uppercase tracking-wider">{content.form.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full bg-studio-bg border border-studio-dim/30 rounded p-3 text-white focus:border-studio-accent focus:ring-1 focus:ring-studio-accent outline-none transition-all"
                      placeholder="+213 562 50 61 02"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-studio-dim uppercase tracking-wider">{content.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-studio-bg border border-studio-dim/30 rounded p-3 text-white focus:border-studio-accent focus:ring-1 focus:ring-studio-accent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-studio-dim uppercase tracking-wider">{content.form.service}</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-studio-bg border border-studio-dim/30 rounded p-3 text-white focus:border-studio-accent focus:ring-1 focus:ring-studio-accent outline-none transition-all appearance-none"
                  >
                    <option value="ecommerce">{content.form.serviceOptions.ecommerce}</option>
                    <option value="software">{content.form.serviceOptions.software}</option>
                    <option value="data">{content.form.serviceOptions.data}</option>
                    <option value="other">{content.form.serviceOptions.other}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-studio-dim uppercase tracking-wider">{content.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-studio-bg border border-studio-dim/30 rounded p-3 text-white focus:border-studio-accent focus:ring-1 focus:ring-studio-accent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-studio-accent hover:bg-white text-studio-bg font-bold uppercase tracking-wide rounded transition-all duration-300 shadow-neon flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? content.form.submitting : content.form.submit}
                  {!formStatus && <Send size={20} className="rtl:rotate-180" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;