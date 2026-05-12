import React from 'react';
import { ShoppingBag, Layout, Code2, CheckCircle2, ChevronRight, Star } from 'lucide-react';

interface PackageItem {
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

interface PackagesProps {
    content: {
        titlePrefix: string;
        titleHighlight: string;
        subtitle: string;
        items: PackageItem[];
    };
    lang: string;
}

const Packages: React.FC<PackagesProps> = ({ content, lang }) => {
    const icons = [
        <ShoppingBag size={32} key="ecommerce" />,
        <Layout size={32} key="vitrine" />,
        <Code2 size={32} key="custom" />
    ];

    return (
        <section id="packages" className="relative py-24 bg-studio-bg overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#00F5FF_0%,transparent_50%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-accent/10 border border-studio-accent/20 text-studio-accent mb-6">
                        <Star size={14} className="fill-studio-accent" />
                        <span className="text-xs font-semibold tracking-wider uppercase">Solutions Hub</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        {content.titlePrefix}
                        <span className="text-studio-accent italic">{content.titleHighlight}</span>
                    </h2>
                    <p className="text-studio-dim text-lg md:text-xl leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {content.items.map((pkg, idx) => (
                        <div
                            key={pkg.id}
                            className={`group relative flex flex-col h-full bg-studio-card/40 backdrop-blur-xl border ${idx === 0 ? 'border-studio-accent/50 shadow-2xl shadow-studio-accent/10' : 'border-white/5'} rounded-3xl overflow-hidden hover:border-studio-accent/30 transition-all duration-500`}
                        >
                            {idx === 0 && (
                                <div className="absolute top-0 right-0 px-4 py-1 bg-studio-accent text-studio-bg text-xs font-bold rounded-bl-xl z-20">
                                    {lang === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
                                </div>
                            )}

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="w-14 h-14 bg-studio-accent/10 rounded-2xl flex items-center justify-center text-studio-accent mb-6 border border-studio-accent/20">
                                    {icons[idx]}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{pkg.title}</h3>
                                <p className="text-studio-dim mb-8 flex-grow">
                                    {pkg.desc}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {pkg.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3 text-studio-text/80">
                                            <CheckCircle2 size={18} className="text-studio-accent" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/5 mt-auto">
                                    <div className="flex flex-col mb-6">
                                        <span className="text-studio-dim text-sm">{lang === 'ar' ? 'الاستثمار' : 'Investment'}</span>
                                        <span className="text-2xl font-bold text-white">{pkg.price}</span>
                                    </div>

                                    <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${idx === 0 ? 'bg-studio-accent text-studio-bg hover:bg-white' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                                        {pkg.cta}
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
