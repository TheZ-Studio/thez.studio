import React, { useState, useEffect } from 'react';
import { Package, ExternalLink, CheckCircle2, Zap, X, Info, ShieldCheck, ChevronRight } from 'lucide-react';

interface PluginItem {
    id: string;
    title: string;
    tag: string;
    desc: string;
    features: string[];
    price: string;
    cta: string;
    longDesc: string;
    detailedFeatures: string[];
}

interface PluginsProps {
    content: {
        titlePrefix: string;
        titleHighlight: string;
        subtitle: string;
        items: PluginItem[];
    };
    lang: string;
}

const Plugins: React.FC<PluginsProps> = ({ content, lang }) => {
    const [selectedPlugin, setSelectedPlugin] = useState<PluginItem | null>(null);

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedPlugin) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPlugin]);

    const closeBtnLabel = lang === 'ar' ? 'إغلاق' : lang === 'en' ? 'Close' : 'Fermer';

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
                                            onClick={() => setSelectedPlugin(plugin)}
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

            {/* Modal Overlay */}
            {selectedPlugin && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(12px)' }}
                    onClick={() => setSelectedPlugin(null)}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-studio-bg border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPlugin(null)}
                            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10"
                        >
                            <X size={20} />
                        </button>

                        {/* Left Side: Visual & Summary */}
                        <div className="w-full md:w-1/3 p-8 bg-gradient-to-b from-studio-card/80 to-studio-bg border-r border-white/5 flex flex-col items-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-studio-card rounded-2xl border border-studio-accent/30 shadow-2xl shadow-studio-accent/10 mb-6 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/logos/alv-logo.png"
                                    alt={selectedPlugin.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-center text-white mb-2">{selectedPlugin.title}</h3>
                            <span className="px-3 py-1 bg-studio-accent/10 border border-studio-accent/20 text-studio-accent text-xs font-bold rounded-full mb-6">
                                {selectedPlugin.tag}
                            </span>
                            <div className="w-full space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 text-studio-accent mb-1">
                                        <ShieldCheck size={16} />
                                        <span className="text-xs font-bold uppercase tracking-wider">Licence Premium</span>
                                    </div>
                                    <p className="text-xl font-bold text-white">{selectedPlugin.price}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Detailed Content */}
                        <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                            <div className="max-w-xl">
                                <div className="flex items-center gap-2 text-studio-accent mb-4">
                                    <Info size={18} />
                                    <span className="text-sm font-semibold uppercase tracking-widest">À propos du plugin</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    {lang === 'ar' ? 'حل هندسي متكامل' : lang === 'en' ? 'Complete Engineering Solution' : 'Solution d\'Ingénierie Complète'}
                                </h4>
                                <p className="text-studio-dim text-lg leading-relaxed mb-8">
                                    {selectedPlugin.longDesc}
                                </p>

                                <div className="space-y-4">
                                    {selectedPlugin.detailedFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-studio-accent/20 transition-all group/feat">
                                            <div className="mt-1 p-2 rounded-lg bg-studio-accent/10 text-studio-accent group-hover/feat:bg-studio-accent group-hover/feat:text-studio-bg transition-all">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <p className="text-studio-text/90 leading-tight py-1">{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 flex justify-end">
                                    <button
                                        onClick={() => setSelectedPlugin(null)}
                                        className="px-8 py-3 rounded-xl border border-white/10 text-studio-dim hover:text-white hover:bg-white/5 transition-all"
                                    >
                                        {closeBtnLabel}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Plugins;
