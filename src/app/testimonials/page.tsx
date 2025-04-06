'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngleRight, FaStar, FaQuoteLeft, FaPlay, FaMapMarkerAlt } from 'react-icons/fa';

// Testimonial Card Component
const TestimonialCard = ({ 
  quote, 
  author, 
  location, 
  date, 
  rating, 
  image,
  index 
}: { 
  quote: string; 
  author: string; 
  location: string; 
  date: string;
  rating: number;
  image?: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const staggerDelay = 0.1 * index;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: staggerDelay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl shadow-subtle overflow-hidden h-full flex flex-col"
    >
      <div className="p-8 flex-grow">
        <div className="text-secondary/60 mb-4">
          <FaQuoteLeft className="w-8 h-8" />
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed italic">{quote}</p>
        
        <div className="flex items-center mt-auto">
          {image ? (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative flex-shrink-0">
              <Image 
                src={image} 
                alt={author} 
                fill 
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
              {author.split(' ').map(name => name[0]).join('')}
            </div>
          )}
          
          <div>
            <p className="font-medium text-primary">{author}</p>
            <div className="flex items-center text-sm text-gray-500">
              <FaMapMarkerAlt className="w-3 h-3 mr-1" />
              <span>{location}</span>
              <span className="mx-2">•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-8 pb-6">
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} 
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">{rating}.0</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Video Testimonial Card Component
const VideoTestimonialCard = ({ 
  thumbnail, 
  author, 
  title,
  duration,
  index
}: { 
  thumbnail: string; 
  author: string; 
  title: string;
  duration: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const staggerDelay = 0.1 * index;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: staggerDelay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl shadow-subtle overflow-hidden"
    >
      <div className="relative aspect-video group">
        <Image 
          src={thumbnail} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
            <FaPlay className="w-5 h-5 ml-1" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-medium text-primary mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
      </div>
    </motion.div>
  );
};

// Review Statistics Component
const StatItem = ({ 
  label, 
  value, 
  percentage, 
  delay 
}: { 
  label: string; 
  value: string; 
  percentage: number;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay }}
      className="text-center"
    >
      <motion.p 
        className="text-4xl md:text-5xl font-serif text-primary mb-1"
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.p>
      <p className="text-gray-600">{label}</p>
      
      <div className="mt-3 h-1 bg-gray-200 rounded-full w-full">
        <motion.div 
          className="h-full bg-secondary rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.3, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Testimonial Data
  const testimonials = [
    {
      quote: "Richard James Kitchens transformed our home with a beautiful handcrafted kitchen that exceeds all our expectations. The craftsmanship is exceptional, and the attention to detail is remarkable.",
      author: "Sarah Johnson",
      location: "Surrey",
      date: "March 2023",
      rating: 5,
      category: "Bella",
    },
    {
      quote: "Working with the team was an absolute pleasure. They listened to our ideas and created a kitchen that's perfect for our family and entertaining. The installation process was smooth and efficient.",
      author: "James Wilson",
      location: "London",
      date: "January 2023",
      rating: 5,
      category: "Wilton",
    },
    {
      quote: "The attention to detail and quality of the materials used is outstanding. Our kitchen is not just functional but a stunning feature of our home that we're proud to show off to friends and family.",
      author: "Emma Thompson",
      location: "Wimbledon",
      date: "December 2022",
      rating: 5,
      category: "Zurfiz",
    },
    {
      quote: "From the initial design consultation to the final installation, Richard James Kitchens provided exceptional service. Their expertise and creativity helped us maximize our space without compromising on style.",
      author: "Robert Clark",
      location: "Richmond",
      date: "November 2022",
      rating: 4,
      category: "Bella",
    },
    {
      quote: "We couldn't be happier with our new kitchen. The quality of the craftsmanship is evident in every detail, and the team's professionalism made the whole process so much easier than we anticipated.",
      author: "Jennifer Adams",
      location: "Kingston",
      date: "October 2022",
      rating: 5,
      category: "Zurfiz",
    },
    {
      quote: "The boot room Richard James Kitchens designed and installed for us has been a game-changer. It's beautiful, practical, and has transformed how we use our home's entrance. The attention to detail is fantastic.",
      author: "Michael Peters",
      location: "Guildford",
      date: "September 2022",
      rating: 5,
      category: "Other",
    },
  ];
  
  // Video Testimonials
  const videoTestimonials = [
    {
      thumbnail: "/images/products/bella_range/Final product in kitchen example photos/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg",
      author: "David & Claire Robinson",
      title: "Our Contemporary Kitchen Journey",
      duration: "2:45",
    },
    {
      thumbnail: "/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg",
      author: "The Wilson Family",
      title: "Transforming Our Home's Heart",
      duration: "3:12",
    },
    {
      thumbnail: "/images/products/zurfiz_range/Final product in kitchen example photos/Black Kitchen.jpg",
      author: "Sarah Thompson",
      title: "My Modern Kitchen Experience",
      duration: "1:58",
    },
  ];
  
  // Filter testimonials based on active filter
  const filteredTestimonials = activeFilter === 'All' 
    ? testimonials 
    : testimonials.filter(item => item.category === activeFilter);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg" 
            alt="Richard James Kitchens Testimonials" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Client <span className="text-secondary">Testimonials</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Hear what our clients have to say about their experience working with Richard James Kitchens.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-neutral-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-serif text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Client Satisfaction
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We pride ourselves on delivering exceptional service and quality, reflected in our client reviews.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <StatItem 
                label="Client Satisfaction" 
                value="98%" 
                percentage={98}
                delay={0}
              />
              <StatItem 
                label="Projects Completed" 
                value="250+" 
                percentage={85}
                delay={0.2}
              />
              <StatItem 
                label="5-Star Reviews" 
                value="92%" 
                percentage={92}
                delay={0.4}
              />
              <StatItem 
                label="Repeat Clients" 
                value="45%" 
                percentage={45}
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Written Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Read the experiences of homeowners who have transformed their kitchens with Richard James Kitchens.
            </p>
          </motion.div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['All', 'Bella', 'Wilton', 'Zurfiz', 'Other'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                date={testimonial.date}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Testimonials */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Video Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Watch our clients share their experiences with Richard James Kitchens.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <VideoTestimonialCard 
                key={index}
                thumbnail={video.thumbnail}
                author={video.author}
                title={video.title}
                duration={video.duration}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-primary mb-6">Why Clients Choose Us</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At Richard James Kitchens, we believe that our commitment to quality craftsmanship, 
                  attention to detail, and exceptional customer service sets us apart. Our clients 
                  consistently highlight these qualities in their testimonials.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  From the initial design consultation to the final installation, we're dedicated to 
                  making the process as smooth and enjoyable as possible, resulting in a kitchen 
                  that exceeds your expectations.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Expert design consultation tailored to your needs",
                    "Premium quality materials and craftsmanship",
                    "Professional installation by skilled craftsmen",
                    "Excellent aftercare service",
                    "10-year guarantee on all our kitchens"
                  ].map((feature, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <FaAngleRight className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-subtle"
              >
                <div className="mb-8 text-center">
                  <div className="flex items-center justify-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="w-8 h-8 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold text-primary">4.9 / 5</p>
                  <p className="text-gray-500">Based on 150+ reviews</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 border border-gray-100 rounded-lg">
                    <Image 
                      src="/images/trustpilot-logo.png" 
                      alt="Trustpilot" 
                      width={120} 
                      height={30}
                      className="mx-auto mb-2"
                    />
                    <p className="text-lg font-bold text-primary">4.8 / 5</p>
                  </div>
                  <div className="text-center p-4 border border-gray-100 rounded-lg">
                    <Image 
                      src="/images/houzz-logo.png" 
                      alt="Houzz" 
                      width={120} 
                      height={30}
                      className="mx-auto mb-2"
                    />
                    <p className="text-lg font-bold text-primary">4.9 / 5</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg" 
            alt="Kitchen background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Join Our Satisfied Clients
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to transform your kitchen? Contact us today to arrange a consultation with one of our expert designers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                Get in Touch
                <FaAngleRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 