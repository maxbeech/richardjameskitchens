'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  width?: number;
  height?: number;
  fill?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.3,
  direction = 'down',
  width,
  height,
  fill = false,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  // Apply the parallax effect based on scroll position
  const factor = direction === 'up' ? -speed * 100 : speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], [0, factor]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
    >
      <motion.div 
        className="w-full h-full"
        style={{ y }}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
} 