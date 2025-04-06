'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type HeroHeadingProps = {
  title: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
};

export default function HeroHeading({
  title,
  className = '',
  delay = 0.3,
  duration = 0.5,
  staggerDelay = 0.05,
}: HeroHeadingProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const words = title.split(' ');

  // Variants for words
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * staggerDelay,
        duration,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <h1 ref={ref} className={className} aria-label={title}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={wordVariants}
          style={{ display: 'inline-block', marginRight: '0.5rem' }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
} 