'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let latestX = -100;
    let latestY = -100;

    const updatePosition = () => {
      setPosition({ x: latestX, y: latestY });
      rafId.current = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updatePosition);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive-hover'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleHoverStart, { passive: true });

    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleHoverStart);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Hardware-Accelerated Primary Cursor Dot */}
      <div
        className="pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-blue-500 transition-transform duration-75 ease-out"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isHovered ? 2.5 : 1})`,
          willChange: 'transform',
        }}
      />
      {/* Outer Ring */}
      <div
        className="pointer-events-none fixed z-40 h-8 w-8 rounded-full border border-blue-400/40 transition-all duration-200 ease-out"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isHovered ? 1.6 : 1})`,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          willChange: 'transform',
        }}
      />
    </>
  );
}
