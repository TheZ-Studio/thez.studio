import React from 'react';
import { Package, CheckCircle2, ChevronRight } from 'lucide-react';
import { View } from '../App';

interface PluginItem {
    id: string;
    title: string;
    tag: string;
    desc: string;
    features: string[];
    price: string;
    cta: string;
}

interface PluginsProps {
    content: {
        titlePrefix: string;
        titleHighlight: string;
        subtitle: string;
        items: PluginItem[];
    };
    lang: string;
    setView: (view: View) => void;
}

const Plugins: React.FC<PluginsProps> = ({ content, lang, setView }) => {
    return (
        <section id="plugins" className="relative py-24 bg-studio-bg overflow-hidden border-t border-studio-accent/10">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-studio-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-studio-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-accent/10 border border-studio-accent/20 text-studio-accent mb-6">
                        <Package size={14} />
                        <span className="text-xs font-semibold tracking-wider uppercase">WooCommerce Factory</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        {content.titlePrefix}
                        <span className="text-studio-accent italic">{content.titleHighlight}</span>
                    </h2>
                    <p className="text-studio-dim text-lg md:text-xl leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                    {content.items.map((plugin) => (
                        <div
                            key={plugin.id}
                            className="group relative bg-studio-card/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-studio-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-studio-accent/5"
                        >
                            <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12">
                                {/* Left side: Visual representation */}
                                <div className="w-full md:w-2/5 flex flex-col justify-center items-center bg-black/40 rounded-2xl p-4 border border-white/5 relative overflow-hidden group-hover:bg-studio-accent/5 transition-colors duration-500">
                                    <div className="absolute inset-0 opacity-20 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                                    <div className="relative z-10 w-full aspect-square bg-studio-card rounded-2xl flex items-center justify-center overflow-hidden border border-studio-accent/20 shadow-lg shadow-studio-accent/10 transform transition-transform duration-700 group-hover:scale-105">
                                        <img
                                            src="/logos/alv-logo.png"
                                            alt={plugin.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-6 text-center">
                                        <span className="text-xs font-bold text-studio-accent uppercase tracking-[0.2em]">{plugin.tag}</span>
                                        <h3 className="text-2xl font-bold mt-2 leading-tight text-white">{plugin.title}</h3>
                                    </div>
                                </div>

                                {/* Right side: Info */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="h-px flex-1 bg-white/10" />
                                            <span className="text-studio-accent font-mono text-sm uppercase">{plugin.price}</span>
                                        </div>

                                        <p className="text-studio-text/80 text-lg mb-8 leading-relaxed">
                                            {plugin.desc}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                            {plugin.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-studio-dim group/item">
                                                    <CheckCircle2 size={18} className="text-studio-accent/70 group-hover/item:text-studio-accent transition-colors" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-6">
                                        <button
                                            onClick={() => setView('plugin-alv')}
                                            className="px-8 py-4 bg-studio-accent text-studio-bg font-bold rounded-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-studio-accent/20 flex items-center gap-2"
                                        >
                                            {plugin.cta}
                                            <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plugins;
