import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';
import { ArrowDown, ArrowUpRight, Check, Copy, Globe, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Clean inline LinkedIn SVG
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

export default function ContactFooter({ photoUrl }) {
  const [copiedType, setCopiedType] = useState(null);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <footer id="contact" className="relative bg-[#1c1d20] text-white pt-20 sm:pt-28 pb-10 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Footer Main Call to Action */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 sm:mb-24 space-y-6 sm:space-y-8">
          {/* Avatar / Portrait thumbnail */}
          <div className="relative group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-[#9ea2a3] flex items-center justify-center">
              <img
                src="/photo.png"
                alt={personalInfo.name}
                className="w-full h-full object-contain object-bottom pt-1"
              />
            </div>
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-2 border-[#1c1d20]" />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Have an ambitious vision or role in mind?
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[0.98]">
              Let's work <br />
              <span className="text-neutral-400">
                together.
              </span>
            </h2>
          </div>

          {/* Signature Magnetic CTA Button pointing below to contact channels */}
          <div className="pt-2 sm:pt-4">
            <MagneticButton
              as="a"
              href={`mailto:${personalInfo.email}`}
              strength={40}
              data-cursor-text="CONTACT"
              className="inline-flex items-center gap-3 px-8 py-4 sm:px-12 sm:py-5 md:px-14 md:py-6 rounded-full bg-[#455ce9] hover:bg-[#384ecc] text-white font-medium text-base sm:text-lg md:text-xl shadow-2xl shadow-[#455ce9]/40 transition-all group"
            >
              <span>You can contact me here</span>
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1.5 transition-transform duration-300" />
            </MagneticButton>
          </div>

          {/* Email & Phone Pills */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono text-neutral-200 transition-all hover:border-white/25 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#455ce9]" />
              <span>{personalInfo.email}</span>
              {copiedType === 'email' ? (
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-sans">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
              )}
            </button>

            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono text-neutral-200 transition-all hover:border-white/25 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#455ce9]" />
              <span>{personalInfo.phone}</span>
              {copiedType === 'phone' ? (
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-sans">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
              )}
            </button>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono text-neutral-200 transition-all hover:border-white/25"
            >
              <LinkedinIcon className="w-4 h-4 text-[#455ce9]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          <div className="flex flex-wrap items-center gap-6">
            <span>VERSION 2026 © EDITION</span>
            <span className="text-neutral-600">•</span>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <span>LOCAL TIME: {localTime || '01:00 AM'} IST</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#top"
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
