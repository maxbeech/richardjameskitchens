'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
};

export default function FadeIn({
  children,
  delay = 0.2,
  duration = 0.5,
  direction = 'up',
  className = '',
  once = true,
}: FadeInProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  // Set initial and animation variants based on direction
  const getVariants = () => {
    let initial: any = { opacity: 0 };
    
    switch (direction) {
      case 'up':
        initial = { ...initial, y: 40 };
        break;
      case 'down':
        initial = { ...initial, y: -40 };
        break;
      case 'left':
        initial = { ...initial, x: 40 };
        break;
      case 'right':
        initial = { ...initial, x: -40 };
        break;
      default:
        break;
    }
    
    return {
      hidden: initial,
      visible: { 
        opacity: 1,
        y: 0,
        x: 0,
        transition: { 
          duration, 
          delay,
          ease: 'easeOut',
        }
      }
    };
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
} 