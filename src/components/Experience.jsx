import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-32 relative bg-[#141516] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              <span className="w-8 h-[1px] bg-neutral-600" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs font-light">
            Hands-on internships building production-grade web systems and training machine learning models.
          </p>
        </div>

        {/* Experience Accordion / Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#1c1d20] border-white/20 shadow-2xl'
                    : 'bg-[#17181a] border-white/5 hover:border-white/10'
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#455ce9]/20 text-[#6a7fff] border border-[#455ce9]/30">
                        {exp.company}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white pt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                      <Calendar className="w-4 h-4 text-neutral-400" />
                      <span>{exp.period}</span>
                    </div>

                    <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-white/10' : 'bg-transparent'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-white/10 pt-6 space-y-6 animate-fade-in">
                    <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2.5">
                      <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                        Key Responsibilities & Deliverables:
                      </p>
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#455ce9] mt-2 shrink-0" />
                          <p className="text-sm text-neutral-300 font-light leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                        Technologies & Methodologies:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
