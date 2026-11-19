import React from 'react';
import { ArrowDownRight, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#999d9e] text-white overflow-hidden select-none">
      {/* 1. Left Side Pinned Pill (Scalable Dennis Snellenberg Hanger) */}
      <div className="absolute top-[34%] sm:top-[36%] md:top-[38%] left-0 z-30 flex items-center h-[72px] sm:h-[94px] md:h-[120px] lg:h-[126px] bg-[#1c1d20] text-white pl-4 sm:pl-7 md:pl-12 lg:pl-14 pr-3 sm:pr-4 md:pr-6 rounded-r-full shadow-2xl transition-transform hover:translate-x-1.5 cursor-default">
        <div className="text-[12px] sm:text-[14px] md:text-[17px] lg:text-[18px] font-normal leading-[1.25] pr-3 sm:pr-6 md:pr-10 tracking-tight text-white/95">
          <p>Located</p>
          <p>in the</p>
          <p className="font-semibold text-white">India</p>
        </div>
        <div className="w-11 h-11 sm:w-15 sm:h-15 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0 shadow-inner">
          <Globe className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-spin stroke-[1.25]" style={{ animationDuration: '24s' }} />
        </div>
      </div>

      {/* 2. Right Side Arrow & Role Typography (Responsive across Mobile, Tablet, Desktop) */}
      <div className="absolute top-[22%] sm:top-[24%] md:top-[26%] right-4 sm:right-8 md:right-auto md:left-[69%] lg:left-[70.5%] z-30 text-white select-none pointer-events-none text-right md:text-left">
        <div className="mb-4 sm:mb-8 md:mb-16 lg:mb-22 flex justify-end md:justify-start">
          <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white stroke-[1.35]" />
        </div>
        <h2 className="text-xl sm:text-3xl md:text-[40px] lg:text-[48px] xl:text-[52px] font-display font-medium text-white tracking-tight whitespace-nowrap flex flex-col gap-1 sm:gap-2 md:gap-3.5 leading-none">
          <span>Full Stack</span>
          <span>Developer</span>
        </h2>
      </div>

      {/* 3. Center Portrait: Natural Scale with clear headroom below Navbar */}
      <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none overflow-hidden">
        <img
          src="/photo.png"
          alt="Deepak Phaneesh Naidu Addala"
          className="h-[74vh] sm:h-[80vh] md:h-[84vh] lg:h-[86vh] max-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-95px)] md:max-h-[calc(100vh-105px)] w-auto max-w-none object-contain object-bottom pointer-events-none select-none drop-shadow-sm"
        />
      </div>

      {/* 4. Solid WHITE Sliding Marquee in the Foreground (z-20) */}
      <div className="w-full absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-0 right-0 z-20 pointer-events-none pb-0 overflow-hidden select-none">
        <div className="marquee-container">
          {/* Track 1 */}
          <div className="marquee-content flex items-center pr-12 sm:pr-20 md:pr-24 text-[12vw] sm:text-[10vw] md:text-[9.5vw] lg:text-[10vw] font-display font-medium text-white leading-none tracking-tight drop-shadow-sm">
            <span>Deepak Phaneesh Naidu Addala</span>
            <span className="mx-6 sm:mx-10 md:mx-14 font-light text-white">—</span>
            <span>Deepak Phaneesh Naidu Addala</span>
            <span className="mx-6 sm:mx-10 md:mx-14 font-light text-white">—</span>
          </div>

          {/* Track 2 (Seamless loop in lockstep) */}
          <div className="marquee-content flex items-center pr-12 sm:pr-20 md:pr-24 text-[12vw] sm:text-[10vw] md:text-[9.5vw] lg:text-[10vw] font-display font-medium text-white leading-none tracking-tight drop-shadow-sm" aria-hidden="true">
            <span>Deepak Phaneesh Naidu Addala</span>
            <span className="mx-6 sm:mx-10 md:mx-14 font-light text-white">—</span>
            <span>Deepak Phaneesh Naidu Addala</span>
            <span className="mx-6 sm:mx-10 md:mx-14 font-light text-white">—</span>
          </div>
        </div>
      </div>
    </section>
  );
}
