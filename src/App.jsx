import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div id="top" className="min-h-screen bg-[#f4f4f4] text-[#1c1d20] relative">
      {/* Dennis Snellenberg Signature Minimal Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Cursor with dynamic light/dark response */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Navbar />

      <main>
        {/* Dennis Snellenberg Hero with transparent cutout portrait & giant marquee */}
        <Hero />

        {/* About Section with large typography & magnetic button */}
        <About />

        {/* Recent Work / Projects with floating spring cursor preview */}
        <Projects />

        {/* Skills & Capabilities Grid */}
        <Skills />
      </main>

      {/* Signature Dennis Snellenberg Dark Footer */}
      <ContactFooter />
    </div>
  );
}
