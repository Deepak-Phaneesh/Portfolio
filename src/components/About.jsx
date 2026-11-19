import React from 'react';
import MagneticButton from './MagneticButton';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="pt-24 sm:pt-32 md:pt-36 pb-10 sm:pb-14 md:pb-16 bg-[#f4f4f4] text-[#1c1d20]">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Left Column: Signature Dennis Snellenberg Editorial Statement & Personal Bio */}
          <div className="lg:w-[58%] xl:w-[60%] space-y-8 sm:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[46px] font-display font-light leading-[1.26] tracking-tight text-[#1c1d20]">
              {personalInfo.aboutHeadline || "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."}
            </h2>

            {/* Personal bio moved to the left column */}
            <div className="space-y-4 text-base sm:text-[17px] font-light leading-[1.72] text-[#1c1d20]/80 max-w-2xl">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative philosophy & elevated "Let's Connect" circular button */}
          <div className="lg:w-[38%] xl:w-[35%] flex flex-col justify-between pt-2 sm:pt-3">
            <p className="text-base sm:text-[17px] md:text-lg font-light leading-[1.65] text-[#1c1d20]/80">
              {personalInfo.aboutSubText || "The combination of my passion for design, clean code & full-stack architecture positions me in a unique place in the web development world."}
            </p>

            {/* Shifted up directly under the narrative */}
            <div className="pt-10 sm:pt-14">
              <MagneticButton
                as="a"
                href="#contact"
                strength={35}
                data-cursor-text="CONNECT"
                className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-[#1c1d20] hover:bg-[#455ce9] text-white flex items-center justify-center transition-all duration-500 shadow-xl group text-base font-normal tracking-wide text-center px-4"
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
