"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface ParallaxContextProps {
  scrollY: number;
}

const ParallaxContext = createContext<ParallaxContextProps>({ scrollY: 0 });

export const useParallax = () => {
  return useContext(ParallaxContext);
};

export const ParallaxProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxContext.Provider value={{ scrollY }}>
      {children}
    </ParallaxContext.Provider>
  );
};
