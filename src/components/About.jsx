import React from 'react';
import MagneticButton from './MagneticButton';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 bg-[#f4f4f4] text-[#1c1d20]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          {/* Left Column: Signature Dennis Snellenberg Editorial Statement & Personal Bio */}
          <div className="w-full lg:w-[58%] xl:w-[60%] space-y-6 sm:space-y-8 md:space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] font-display font-light leading-[1.26] tracking-tight text-[#1c1d20]">
              {personalInfo.aboutHeadline || "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."}
            </h2>

            {/* Personal bio */}
            <div className="space-y-4 text-sm sm:text-base md:text-[17px] font-light leading-[1.7] text-[#1c1d20]/80 max-w-2xl">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative philosophy & elevated "Let's Connect" circular button */}
          <div className="w-full lg:w-[38%] xl:w-[35%] flex flex-col justify-between pt-2 sm:pt-4">
            <p className="text-sm sm:text-base md:text-[17px] font-light leading-[1.65] text-[#1c1d20]/80">
              {personalInfo.aboutSubText || "The combination of my passion for design, clean code & full-stack architecture positions me in a unique place in the web development world."}
            </p>

            {/* Circular button - centered on mobile, aligned on desktop */}
            <div className="pt-8 sm:pt-12 flex justify-start sm:justify-start">
              <MagneticButton
                as="a"
                href="#contact"
                strength={35}
                data-cursor-text="CONNECT"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#1c1d20] hover:bg-[#455ce9] text-white flex items-center justify-center transition-all duration-500 shadow-xl group text-sm sm:text-base font-normal tracking-wide text-center px-4"
              >
                <span>Let's Connect</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
