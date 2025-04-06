'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

interface HistoricTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export default function HistoricTimeline({ events, className = '' }: HistoricTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Line */}
      <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-primary/20 rounded-full"></div>
      
      <div className="grid grid-cols-1 gap-10">
        {events.map((event, index) => (
          <TimelineItem 
            key={event.year} 
            event={event} 
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ event, index, isLeft }: { event: TimelineEvent, index: number, isLeft: boolean }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  
  const variants = {
    hidden: { opacity: 0, x: isLeft ? -30 : 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.2 * index,
        ease: "easeOut" 
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`relative flex items-center ${isLeft ? 'justify-end md:flex-row-reverse' : 'justify-start'}`}
    >
      {/* Circle on timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary"></div>
      
      {/* Content */}
      <div className={`w-5/12 md:w-5/12 ${isLeft ? 'mr-8 md:ml-8 md:mr-0 text-right' : 'ml-8'}`}>
        <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-2">
          {event.year}
        </span>
        <h3 className="text-xl font-bold text-primary mb-1 font-serif">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </motion.div>
  );
} 