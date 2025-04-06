'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  variant?: 'heading' | 'paragraph';
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
};

export default function AnimatedText({
  text,
  variant = 'paragraph',
  className = '',
  color = 'inherit',
  delay = 0.2,
  duration = 0.05,
  once = true,
  element = 'p',
}: AnimatedTextProps) {
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

  // Split text into words and characters for animation
  const words = text.split(' ');

  // Variants for words in paragraph mode
  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * duration,
        duration: 0.4,
      },
    }),
  };

  // Variants for each character in heading mode
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * duration,
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9], // Custom ease
      },
    }),
  };

  // Choose which variant to use based on the selected mode
  const selectedVariant = variant === 'heading' ? headingVariants : paragraphVariants;

  // Create the element based on the element prop
  const CustomTag = element;

  return (
    <CustomTag
      ref={ref}
      className={className}
      style={{ color, overflow: 'hidden' }}
      aria-label={text}
    >
      {variant === 'heading'
        ? // For headings, animate each character
          words.map((word, wordI) => (
            <React.Fragment key={wordI}>
              {wordI > 0 && ' '}
              {Array.from(word).map((char, charI) => (
                <motion.span
                  key={`${wordI}-${charI}`}
                  custom={(wordI * 10) + charI} // Ensure unique delay based on word and character position
                  initial="hidden"
                  animate={controls}
                  variants={selectedVariant}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </React.Fragment>
          ))
        : // For paragraphs, animate each word
          words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={selectedVariant}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
    </CustomTag>
  );
} 