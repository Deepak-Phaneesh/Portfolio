import React from 'react';
import { ArrowDownRight, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#999d9e] text-white overflow-hidden select-none">
      {/* 1. Left Side Pinned Pill (Exact Dennis Snellenberg Full-Scale Hanger) */}
      <div className="absolute top-[36%] sm:top-[38%] left-0 z-30 flex items-center h-[104px] sm:h-[118px] md:h-[126px] bg-[#1c1d20] text-white pl-9 sm:pl-12 md:pl-14 pr-5 sm:pr-6 md:pr-7 rounded-r-full shadow-2xl transition-transform hover:translate-x-1.5 cursor-default">
        <div className="text-[15px] sm:text-[17px] md:text-[18px] font-normal leading-[1.28] pr-7 sm:pr-10 md:pr-12 tracking-tight text-white/95">
          <p>Located</p>
          <p>in the</p>
          <p className="font-semibold text-white">India</p>
        </div>
        <div className="w-18 h-18 sm:w-21 sm:h-21 md:w-24 md:h-24 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0 shadow-inner">
          <Globe className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-spin stroke-[1.25]" style={{ animationDuration: '24s' }} />
        </div>
      </div>

      {/* 2. Right Side Arrow & Role Typography (Prominent editorial scale, bold & perfectly spaced) */}
      <div className="absolute top-[24%] sm:top-[25%] md:top-[26%] left-[65%] sm:left-[67%] md:left-[69%] lg:left-[70%] z-30 text-white select-none pointer-events-none">
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-22">
          <ArrowDownRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white stroke-[1.35]" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[52px] font-display font-medium text-white tracking-tight whitespace-nowrap flex flex-col gap-2 sm:gap-3 md:gap-3.5 leading-none">
          <span>Full Stack</span>
          <span>Developer</span>
        </h2>
      </div>

      {/* 3. Center Portrait: Natural Scale with clear headroom below Navbar */}
      <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none overflow-hidden">
        <img
          src="/photo.png"
          alt="Deepak Phaneesh Naidu Addala"
          className="h-[80vh] sm:h-[83vh] md:h-[86vh] max-h-[calc(100vh-105px)] w-auto max-w-none object-contain object-bottom pointer-events-none select-none drop-shadow-sm"
        />
      </div>

      {/* 4. Solid WHITE Sliding Marquee in the Foreground (z-20) - Scaled Smaller & Moved Up */}
      <div className="w-full absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-20 pointer-events-none pb-0 overflow-hidden select-none">
        <div className="marquee-container">
          {/* Track 1 */}
          <div className="marquee-content flex items-center pr-16 sm:pr-24 text-[8vw] sm:text-[9.5vw] md:text-[10.5vw] font-display font-medium text-white leading-none tracking-tight drop-shadow-sm">
            <span>Deepak Phaneesh Naidu Addala</span>
            <span className="mx-8 sm:mx-14 font-light text-white">—</span>
            <span>Deepak Phaneesh Naidu Addala</span>
            <span className="mx-8 sm:mx-14 font-light text-white">—</span>
          </div>

          {/* Track 2 (Seamless loop in lockstep) */}
          <div className="marquee-content flex items-center pr-16 sm:pr-24 text-[8vw] sm:text-[9.5vw] md:text-[10.5vw] font-display font-medium text-white leading-none tracking-tight drop-shadow-sm" aria-hidden="true">
            <span>Deepak Phaneesh Naidu Addala</span>
            <span className="mx-8 sm:mx-14 font-light text-white">—</span>
            <span>Deepak Phaneesh Naidu Addala</span>
            <span className="mx-8 sm:mx-14 font-light text-white">—</span>
          </div>
        </div>
      </div>
    </section>
  );
}
