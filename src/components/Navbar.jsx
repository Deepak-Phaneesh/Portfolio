import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-4 px-6 sm:px-8 md:px-10 lg:px-12 bg-[#f4f4f4]/95 backdrop-blur-md border-b border-black/5 shadow-xs text-[#1c1d20]'
            : 'pt-7 sm:pt-8 md:pt-9 px-6 sm:px-8 md:px-10 lg:px-12 bg-transparent text-white'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo / Brand with Dennis Snellenberg signature 360° rotating © and rolling name transition */}
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 text-[15px] sm:text-[16px] font-normal tracking-[-0.01em] cursor-pointer py-1"
            title="Deepak Addala"
          >
            {/* The © rotates 360 degrees smoothly on hover */}
            <span className="inline-block select-none opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-[360deg] leading-none">
              ©
            </span>

            {/* Rolling text slot */}
            <div className="relative overflow-hidden h-[24px] min-w-[135px]">
              {/* Default text: Code by Deepak */}
              <p className="transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full leading-[24px] whitespace-nowrap">
                Code by Deepak
              </p>
              {/* Hover transition: Deepak Addala */}
              <p className={`absolute top-0 left-0 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 leading-[24px] whitespace-nowrap ${
                scrolled ? 'text-[#1c1d20]' : 'text-white'
              }`}>
                Deepak Addala
              </p>
            </div>
          </a>

          {/* Desktop Navigation - Exact Dennis Snellenberg ~26px spacing */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <MagneticButton
                key={link.label}
                as="a"
                href={link.href}
                className={`text-[15px] sm:text-[16px] font-normal tracking-[-0.01em] transition-opacity duration-300 ${
                  scrolled ? 'text-[#1c1d20] hover:opacity-65' : 'text-white hover:opacity-75'
                }`}
              >
                <span>{link.label}</span>
              </MagneticButton>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-hidden ${scrolled ? 'text-[#1c1d20]' : 'text-white'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#1c1d20] text-white flex flex-col justify-between p-8 transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-end pt-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono font-semibold">Navigation</p>
          <div className="space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-4xl font-display font-medium text-white hover:text-[#455ce9] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-neutral-400 space-y-2 font-mono">
          <p className="font-semibold text-white">Deepak Phaneesh Naidu Addala</p>
          <p>addaladp@gmail.com • +91 9553079665</p>
          <div className="flex gap-4 pt-1">
            <a href="https://www.linkedin.com/in/deepak-phaneesh-naidu-addala-8a8907290" target="_blank" rel="noreferrer" className="text-[#455ce9] hover:underline">LinkedIn ↗</a>
            <a href="https://github.com/Deepak-Phaneesh" target="_blank" rel="noreferrer" className="text-[#455ce9] hover:underline">GitHub ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}
