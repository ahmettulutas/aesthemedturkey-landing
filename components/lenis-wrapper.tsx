'use client';
import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
export function LenisWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return children;
}
