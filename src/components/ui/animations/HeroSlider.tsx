'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface HeroSliderProps {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
}

export default function HeroSlider({ 
  images, 
  interval = 5000, 
  className = '' 
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);
  
  if (images.length === 0) {
    return null;
  }
  
  if (images.length === 1) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <OptimizedImage
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }
  
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 1.5, ease: 'easeInOut' }
          }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.5, ease: 'easeInOut' }
          }}
          className="absolute inset-0"
        >
          <OptimizedImage
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Optional indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 