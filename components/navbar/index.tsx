'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { RevealLinks } from '../flip-texts';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Animations
  // const opacity = useSpring(isOpen ? 1 : 0, { stiffness: 200, damping: 20 });
  // const translateX = useSpring(isOpen ? 0 : 100, {
  //   stiffness: 200,
  //   damping: 20,
  // });

  return (
    <nav className='fixed top-0 right-10 p-4'>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        data-state={isOpen}
        className='text-black z-50 cursor-pointer relative data-[state=true]:text-white bg-white data-[state=true]:bg-black data-[state=true]:border border-white right-2'
      >
        {/* Hamburger Icon */}
        <svg width='24' height='24' fill='none' stroke='currentColor' strokeWidth='2'>
          <path d='M3 12h18M3 6h18M3 18h18' />
        </svg>
      </button>

      {/* Fullscreen Menu */}
      <motion.div
        className='fixed bg-black text-white z-40 top-0 bottom-0 inset-4 transition-all duration-300'
        style={{
          opacity: isOpen ? 1 : 0,
          translateX: isOpen ? 0 : '100%',
        }}
      >
        <RevealLinks />
      </motion.div>
    </nav>
  );
}
