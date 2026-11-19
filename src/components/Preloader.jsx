import React, { useEffect, useState } from 'react';

// Dennis Snellenberg signature multi-language greeting sequence
const words = [
  "Hello",        // English
  "Bonjour",      // French
  "Ciao",         // Italian
  "Olà",          // Portuguese
  "やあ",          // Japanese
  "Hallo",        // Dutch
  "Guten Tag",    // German
  "నమస్కారం",      // Telugu
  "नमस्ते",        // Hindi
  "Deepak Addala" // Name
];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Last word (Deepak Addala): hold briefly, then initiate smooth curved exit
    if (index === words.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 650);
      }, 350);
      return () => clearTimeout(exitTimer);
    }

    // Rapid, snappy multilingual cycling (~160ms per word)
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 160);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#141516] text-white transition-transform duration-650 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top minimal counter */}
      <div className="p-8 sm:p-12 flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-widest">
        <span>Portfolio 2026</span>
        <span>{index + 1} / {words.length}</span>
      </div>

      {/* Center Multilingual Greeting */}
      <div className="flex flex-col items-center justify-center my-auto px-6">
        <div className="flex items-center gap-3.5">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/80 inline-block animate-pulse" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-white select-none">
            {words[index]}
          </h1>
        </div>
      </div>

      {/* Bottom minimal progress bar */}
      <div className="p-8 sm:p-12 flex items-center justify-between text-xs font-mono text-neutral-400">
        <span className="tracking-wider">Full Stack Developer</span>
        <div className="w-20 sm:w-28 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/80 transition-all duration-150 ease-out"
            style={{ width: `${((index + 1) / words.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Signature Dennis Snellenberg curved SVG bottom apron */}
      <svg
        className="absolute top-full left-0 w-full h-[100px] pointer-events-none fill-[#141516]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
