import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, ExternalLink, Sparkles, X } from 'lucide-react';
import { projects } from '../data/portfolioData';

// Clean inline GitHub SVG
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalProject, setModalProject] = useState(null);

  // Mouse tracking for floating preview card
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    let animId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateSmoothPos = () => {
      setSmoothPos((prev) => ({
        x: lerp(prev.x, mousePos.x, 0.16),
        y: lerp(prev.y, mousePos.y, 0.16),
      }));
      animId = requestAnimationFrame(updateSmoothPos);
    };

    animId = requestAnimationFrame(updateSmoothPos);
    return () => cancelAnimationFrame(animId);
  }, [mousePos]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="work"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="pt-8 sm:pt-10 md:pt-12 pb-28 sm:pb-36 bg-[#f4f4f4] text-[#1c1d20] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative">
        {/* Small refined Recent Work header (matching the subtle style of selected work) */}
        <div className="mb-10 sm:mb-14">
          <p className="text-xs sm:text-[13px] font-mono uppercase tracking-widest text-[#1c1d20]/50 font-medium">
            Recent Work
          </p>
        </div>

        {/* Floating Preview Card (Dennis Snellenberg Signature Cursor Preview) */}
        <div
          className={`hidden lg:block pointer-events-none absolute z-30 w-96 h-64 rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-300 border border-black/10 ${
            hoveredIndex !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transform: `translate3d(${smoothPos.x - 192}px, ${smoothPos.y - 128}px, 0)`,
            transition: 'opacity 0.25s ease, transform 0.05s linear',
          }}
        >
          {hoveredIndex !== null && (
            <div className={`w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br ${projects[hoveredIndex].gradient} text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                    {projects[hoveredIndex].category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20">
                    <GithubIcon className="w-3 h-3" /> Repo
                  </span>
                </div>
                <span className="text-xs font-mono text-white/80">
                  {projects[hoveredIndex].year}
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-display font-bold text-white tracking-tight mb-2">
                  {projects[hoveredIndex].title}
                </h4>
                <p className="text-xs text-white/80 line-clamp-2 font-light">
                  {projects[hoveredIndex].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {projects[hoveredIndex].tags.slice(0, 4).map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white/20 text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Projects List Rows */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setModalProject(proj)}
              data-cursor-text="VIEW"
              className="group relative py-12 sm:py-16 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-all duration-500 hover:px-8 hover:bg-black/[0.02]"
            >
              {/* Row Left: Title & Subtitle */}
              <div className="md:w-5/12">
                <span className="text-xs font-mono text-[#1c1d20]/40 group-hover:text-[#455ce9] transition-colors">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-bold text-[#1c1d20] group-hover:translate-x-3 transition-transform duration-500">
                  {proj.title}
                </h3>
                <p className="text-sm text-[#1c1d20]/60 mt-1 font-light group-hover:text-[#1c1d20]">
                  {proj.subtitle}
                </p>
              </div>

              {/* Row Middle: Category & Tags */}
              <div className="md:w-4/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#1c1d20]">
                    {proj.category}
                  </p>
                  <p className="text-xs font-mono text-[#1c1d20]/50 mt-1">
                    {proj.tags.slice(0, 3).join(' • ')}
                  </p>
                </div>
                <div className="text-xs font-mono text-[#1c1d20]/50">
                  {proj.year}
                </div>
              </div>

              {/* Row Right: Action Buttons (GitHub Repo + Live Demo Arrow) */}
              <div className="md:w-3/12 flex items-center gap-3 md:justify-end">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor-text="CODE"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/10 flex items-center justify-center text-[#1c1d20]/75 hover:text-white hover:bg-[#1c1d20] hover:border-[#1c1d20] transition-all duration-300 shadow-xs"
                    title={`View ${proj.title} on GitHub`}
                  >
                    <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                )}
                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor-text="LIVE"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/10 flex items-center justify-center text-[#1c1d20] hover:bg-[#1c1d20] hover:text-white group-hover:rotate-45 transition-all duration-500 shadow-xs"
                    title={`Visit ${proj.title} live demo`}
                  >
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                ) : (
                  <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/10 flex items-center justify-center text-[#1c1d20] group-hover:bg-[#1c1d20] group-hover:text-white group-hover:rotate-45 transition-all duration-500 shadow-xs">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dennis Snellenberg Project Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-3xl bg-white border border-black/10 rounded-3xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl text-[#1c1d20]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#455ce9] uppercase tracking-wider mb-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{modalProject.category} • {modalProject.year}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#1c1d20]">
                  {modalProject.title}
                </h3>
                <p className="text-base text-[#1c1d20]/60 mt-1">
                  {modalProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setModalProject(null)}
                className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#1c1d20] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1c1d20]/50 mb-2">
                  System Architecture & Overview
                </h4>
                <p className="text-[#1c1d20]/80 text-base leading-relaxed font-light">
                  {modalProject.description}
                </p>
              </div>

              {/* Resume Technical Highlights */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1c1d20]/50 mb-3">
                  Technical Implementation Details
                </h4>
                <div className="space-y-3">
                  {modalProject.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 bg-[#f8f9fa] border border-black/5 p-4 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-[#455ce9] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#1c1d20]/80 leading-relaxed font-light">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1c1d20]/50 mb-3">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {modalProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-lg bg-[#f0f0f2] text-xs font-mono text-[#1c1d20]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Live Website and GitHub Link Buttons */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {modalProject.liveUrl && (
                  <a
                    href={modalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c1d20] hover:bg-[#455ce9] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md group"
                  >
                    <span>Live Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
                {modalProject.github && (
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black/5 hover:bg-black/10 text-[#1c1d20] text-xs font-semibold uppercase tracking-wider transition-colors group"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>

              <button
                onClick={() => setModalProject(null)}
                className="px-6 py-2.5 bg-black/5 hover:bg-black/10 text-[#1c1d20] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
