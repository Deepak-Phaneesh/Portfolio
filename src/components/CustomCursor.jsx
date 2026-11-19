import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      const interactiveEl = target.closest('a, button, [data-cursor], input, textarea');
      
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor-text');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  useEffect(() => {
    let animId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateTrailingPos = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.2),
        y: lerp(prev.y, position.y, 0.2),
      }));
      animId = requestAnimationFrame(updateTrailingPos);
    };

    animId = requestAnimationFrame(updateTrailingPos);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Center Dot */}
      <div
        className="fixed -top-1 -left-1 w-2.5 h-2.5 bg-[#1c1d20] rounded-full transition-opacity duration-200 pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: cursorText ? 0 : 1,
        }}
      />

      {/* Trailing Fluid Circle / Badge */}
      <div
        className={`fixed -top-5 -left-5 rounded-full flex items-center justify-center font-medium text-xs tracking-wider transition-all duration-300 pointer-events-none ${
          cursorText
            ? 'w-20 h-20 -top-10 -left-10 bg-[#455ce9] text-white shadow-xl scale-100 font-bold uppercase'
            : isHovered
            ? 'w-14 h-14 -top-7 -left-7 border border-[#1c1d20]/40 bg-[#1c1d20]/5 scale-100'
            : 'w-10 h-10 border border-[#1c1d20]/25 scale-75'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[11px] font-bold tracking-widest text-white">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
