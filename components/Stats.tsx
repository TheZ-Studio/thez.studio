import React from 'react';
import { ShieldCheck, Zap, Clock, Code2 } from 'lucide-react';

interface StatsProps {
  content: any;
}

const Stats: React.FC<StatsProps> = ({ content }) => {
  const stats = [
    {
      icon: <Clock size={28} />,
      title: content.stats.support,
      desc: content.stats.supportDesc
    },
    {
      icon: <Code2 size={28} />,
      title: content.stats.tech,
      desc: content.stats.techDesc
    },
    {
      icon: <Zap size={28} />,
      title: content.stats.agile,
      desc: content.stats.agileDesc
    },
    {
      icon: <ShieldCheck size={28} />,
      title: content.stats.security,
      desc: content.stats.securityDesc
    }
  ];

  return (
    <section className="py-12 bg-studio-card/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-3 bg-studio-bg rounded-lg text-studio-dim group-hover:text-studio-accent group-hover:scale-110 transition-all duration-300 border border-white/5 shadow-lg">
                {stat.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{stat.title}</h3>
              <p className="text-studio-dim text-xs uppercase tracking-wide">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;