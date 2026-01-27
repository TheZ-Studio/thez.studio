import React from 'react';
import { Zap, Link, Target, Cpu, CheckCircle2, ArrowRight, Code } from 'lucide-react';

interface PluginALVDetailsProps {
    content: any;
    lang: string;
}

const PluginALVDetails: React.FC<PluginALVDetailsProps> = ({ content, lang }) => {
    return (
        <div className="pt-20">
            {/* Detail Hero Section */}
            <section className="relative py-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-studio-bg">
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-studio-accent/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-accent/10 border border-studio-accent/20 text-studio-accent mb-6 animate-pulse">
                                <Zap size={14} />
                                <span className="text-xs font-bold uppercase tracking-widest">Enterprise Edition</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
                                {content.heroTitle.split(' ').slice(0, -1).join(' ')} <br />
                                <span className="text-studio-accent italic">{content.heroTitle.split(' ').slice(-1)}</span>
                            </h1>
                            <p className="text-studio-dim text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
                                {content.heroSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-studio-accent text-studio-bg font-bold rounded-xl hover:bg-white transition-all shadow-neon hover:shadow-neon-strong">
                                    {content.ctaBtn}
                                </button>
                                <div className="flex items-center gap-4 px-6 text-studio-dim">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-studio-bg bg-studio-card flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm border-l border-white/10 pl-4">+500 Stores active</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-studio-card/30 backdrop-blur-3xl shadow-2xl">
                                <div className="bg-white/5 border-b border-white/5 p-4 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="ml-4 px-3 py-1 bg-black/20 rounded-lg text-[10px] text-white/30 font-mono">wp-admin / plugins / linked-variations / engine.php</div>
                                </div>
                                <div className="p-8 aspect-video flex items-center justify-center bg-black/40">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <img src="/logos/alv-logo.png" className="w-48 h-48 drop-shadow-[0_0_30px_rgba(0,230,118,0.2)]" alt="ALV Engine" />
                                        {/* Animated data particles */}
                                        <div className="absolute inset-0 overflow-hidden opacity-20">
                                            <div className="absolute top-10 left-10 w-2 h-2 bg-studio-accent rounded-full animate-ping"></div>
                                            <div className="absolute bottom-20 right-10 w-2 h-2 bg-studio-accent rounded-full animate-ping delay-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-studio-accent/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-studio-bg/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">{content.featuresTitle}</h2>
                        <p className="text-studio-dim max-w-2xl mx-auto">{content.featuresSubtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-studio-card/40 border border-white/5 hover:border-studio-accent/20 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-studio-accent/10 flex items-center justify-center text-studio-accent mb-6 group-hover:bg-studio-accent group-hover:text-studio-bg transition-colors">
                                <Target size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{content.feature1Title}</h3>
                            <p className="text-studio-dim leading-relaxed">{content.feature1Desc}</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-studio-card/40 border border-white/5 hover:border-studio-accent/20 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-studio-accent/10 flex items-center justify-center text-studio-accent mb-6 group-hover:bg-studio-accent group-hover:text-studio-bg transition-colors">
                                <Link size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{content.feature2Title}</h3>
                            <p className="text-studio-dim leading-relaxed">{content.feature2Desc}</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-studio-card border border-studio-accent/20 shadow-neon group">
                            <div className="w-12 h-12 rounded-2xl bg-studio-accent flex items-center justify-center text-studio-bg mb-6">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{content.feature3Title}</h3>
                            <p className="text-studio-text leading-relaxed">{content.feature3Desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Auto-Grouper Showcase */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-studio-accent font-mono text-sm tracking-widest uppercase mb-4 block">Engine Innovation</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                                {content.autoGrouperTitle.split(' ').slice(0, -1).join(' ')} <span className="text-studio-accent">{content.autoGrouperTitle.split(' ').slice(-1)}</span>
                            </h2>
                            <p className="text-studio-dim text-lg leading-relaxed mb-8">
                                {content.autoGrouperDesc}
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-studio-accent font-mono text-sm mb-3">{content.skuPatterns}</p>
                                    <div className="flex flex-col gap-2">
                                        <code className="text-studio-text/60 bg-black/40 p-2 rounded border border-white/5 text-sm">NIKE-AIR-RED-42</code>
                                        <code className="text-studio-text/60 bg-black/40 p-2 rounded border border-white/5 text-sm">NIKE-AIR-BLUE-44</code>
                                    </div>
                                    <div className="py-2 flex justify-center text-studio-accent">
                                        <ArrowRight size={20} className="rotate-90" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-studio-dim uppercase mb-1">{content.skuResult}</p>
                                        <div className="flex items-center gap-2 bg-studio-accent/10 p-3 rounded-xl border border-studio-accent/20">
                                            <CheckCircle2 size={16} className="text-studio-accent" />
                                            <span className="text-white font-bold">NIKE-AIR</span>
                                            <span className="text-[10px] bg-studio-accent text-studio-bg px-2 py-0.5 rounded-full font-bold ml-auto">{content.skuSuccess}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                            <div className="col-span-2 p-6 rounded-2xl bg-studio-card border border-white/5">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-bold text-white">Advanced Pattern Matching</h4>
                                    <div className="w-3 h-3 rounded-full bg-studio-accent animate-pulse"></div>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: "Prefix Mode", val: true },
                                        { label: "Separator Parsing", val: true },
                                        { label: "Regex Extraction", val: false },
                                        { label: "Metadata Matching", val: true }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                            <span className="text-studio-dim text-sm">{item.label}</span>
                                            <div className={`w-10 h-5 rounded-full relative transition-all ${item.val ? 'bg-studio-accent' : 'bg-white/10'}`}>
                                                <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${item.val ? 'right-1' : 'left-1'}`}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
                                <span className="text-3xl font-bold text-white mb-1">99%</span>
                                <span className="text-[10px] text-studio-dim uppercase tracking-wider text-center">Auto-Group Accuracy</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
                                <Code size={24} className="text-studio-accent mb-2" />
                                <span className="text-[10px] text-studio-dim uppercase tracking-wider text-center">Production Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-studio-accent">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-studio-bg mb-6">
                        {content.ctaTitle}
                    </h2>
                    <p className="text-studio-bg/70 text-lg mb-10 max-w-2xl mx-auto">
                        {content.ctaSubtitle}
                    </p>
                    <button className="px-12 py-5 bg-studio-bg text-studio-accent text-xl font-bold rounded-2xl shadow-2xl hover:bg-studio-card transition-all transform hover:scale-105">
                        {content.ctaBtn}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PluginALVDetails;
