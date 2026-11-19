import React from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-32 sm:py-40 bg-[#f4f4f4] text-[#1c1d20] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1c1d20]/50 mb-3">
              Capabilities
            </p>
            <h2 className="text-4xl sm:text-7xl font-display font-bold tracking-tight text-[#1c1d20]">
              Skills & Stack
            </h2>
          </div>
          <p className="text-[#1c1d20]/60 text-sm max-w-xs font-light">
            Engineered across distributed queues, graph databases, reactive canvas interfaces, and high-dimensional vectors.
          </p>
        </div>

        {/* 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-black/10 hover:border-black/30 transition-all duration-500 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#1c1d20]/40 mb-6 pb-4 border-b border-black/5">
                  <span className="group-hover:text-[#455ce9] transition-colors font-bold text-sm">
                    0{idx + 1}
                  </span>
                  <span className="uppercase tracking-wider">DOMAIN</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-[#1c1d20] group-hover:text-[#455ce9] transition-colors mb-2">
                  {cat.category}
                </h3>
                <p className="text-xs text-[#1c1d20]/60 font-light mb-6">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1.5 rounded-lg bg-[#f4f4f6] group-hover:bg-[#ebedf0] text-xs font-mono text-[#1c1d20] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-center gap-2 text-[11px] font-mono text-[#1c1d20]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Production Architecture</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
