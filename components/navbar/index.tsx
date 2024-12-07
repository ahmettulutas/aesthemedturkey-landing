'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { RevealLinks } from '../flip-texts';
import { PageContainer } from '../page-container';
const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { when: 'beforeChildren', duration: 0.3, ease: [0.33, 1, 0.68, 1] },
  },
  closed: {
    opacity: 0,
    x: '100%',
    transition: { when: 'afterChildren', duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 right-10 p-4'>
      <PageContainer>
        <button
          onClick={() => setIsOpen((pv) => !pv)}
          data-state={isOpen}
          className='text-black z-50 cursor-pointer relative data-[state=true]:text-white bg-white data-[state=true]:bg-black data-[state=true]:border border-white right-2'
        >
          {/* Hamburger Icon */}
          <svg width='24' height='24' fill='none' stroke='currentColor' strokeWidth='2'>
            <path d='M3 12h18M3 6h18M3 18h18' />
          </svg>
        </button>
      </PageContainer>
      {/* Fullscreen Menu */}
      <motion.div
        className='fixed bg-black text-white z-40 top-0 bottom-0 inset-4 transition-all duration-300'
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <motion.ul>
          <RevealLinks />
        </motion.ul>
      </motion.div>
    </nav>
  );
}
