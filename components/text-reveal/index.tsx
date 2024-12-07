'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef, ReactNode } from 'react';

interface ParagraphProps {
  paragraph: string;
}

export function RevealText({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'start 0.2'],
  });

  const words = paragraph.split(' ');

  return (
    <p
      ref={container}
      className='flex flex-wrap text-lg md:text-2xl lg:text-6xl leading-none p-10 max-w-[1280px] text-black'
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: any; // Framer Motion's scrollYProgress
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className='relative mr-3 mt-3'>
      {children.split('').map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface CharProps {
  children: ReactNode;
  progress: any; // Framer Motion's scrollYProgress
  range: [number, number];
}

const Char = ({ children, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className='relative'>
      {/* Shadow behind the character */}
      <span className='absolute opacity-0'>{children}</span>
      {/* The actual character */}
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
