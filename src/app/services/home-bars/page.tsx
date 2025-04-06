'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaAngleRight, FaWineGlassAlt, FaTools, FaPalette, FaRegLightbulb } from 'react-icons/fa';

// Feature Component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-subtle border border-gray-100"
    >
      <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-secondary">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-medium text-primary mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Design Style Component
const DesignStyle = ({ 
  title, 
  description, 
  image, 
  reverse = false,
  index
}: { 
  title: string; 
  description: string; 
  image: string; 
  reverse?: boolean;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:grid-flow-col md:auto-cols-fr' : ''}`}
    >
      <div className={reverse ? 'md:order-2' : ''}>
        <h3 className="text-2xl font-serif text-primary mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
        <Link 
          href="/contact" 
          className="text-secondary font-medium inline-flex items-center hover:text-secondary-600 transition-colors"
        >
          Discuss This Style
          <FaAngleRight className="ml-2" />
        </Link>
      </div>
      
      <div className={reverse ? 'md:order-1' : ''}>
        <div className="rounded-xl overflow-hidden shadow-elevated">
          <div className="aspect-[4/3] relative">
            <Image 
              src={image} 
              alt={title} 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Gallery Item Component
const GalleryItem = ({ 
  image, 
  title, 
  index 
}: { 
  image: string; 
  title: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden shadow-elevated"
    >
      <div className="relative aspect-[4/3] overflow-hidden group">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <p className="text-white font-medium p-6">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function HomeBars() {
  const featuresRef = useRef(null);
  const stylesRef = useRef(null);
  const galleryRef = useRef(null);
  
  const features = [
    {
      icon: FaWineGlassAlt,
      title: "Premium Materials",
      description: "We use only the highest quality materials, from exotic hardwoods to luxury stones, custom metalwork, and specialty glass to create a distinctive home bar."
    },
    {
      icon: FaTools,
      title: "Custom Storage Solutions",
      description: "Tailored storage for your specific collection, whether it's wine, spirits, glassware, or bar tools, with both display and hidden storage options."
    },
    {
      icon: FaPalette,
      title: "Personalized Design",
      description: "Each home bar is uniquely designed to reflect your personal style and complement your home's architecture and interior design."
    },
    {
      icon: FaRegLightbulb,
      title: "Integrated Technology",
      description: "Smart lighting, temperature-controlled wine storage, refrigeration, and multimedia systems seamlessly integrated into your bar design."
    }
  ];
  
  const barStyles = [
    {
      title: "Classic Pub Style",
      description: "Inspired by traditional British pubs, these bars feature rich wood tones, brass details, and classic joinery. Perfect for creating a warm, inviting atmosphere with vintage charm.",
      image: "/images/services/home-bars/classic-pub.jpg"
    },
    {
      title: "Contemporary Minimalist",
      description: "Clean lines, hidden storage, and statement lighting create a sophisticated modern bar. Ideal for urban homes and open-plan living spaces that favor an understated elegance.",
      image: "/images/services/home-bars/contemporary.jpg"
    },
    {
      title: "Luxury Entertainment Bar",
      description: "Full-featured entertainment spaces with integrated seating, multimedia systems, and comprehensive storage. Designed for hosting and making a statement in larger homes.",
      image: "/images/services/home-bars/luxury-entertainment.jpg"
    }
  ];
  
  const galleryImages = [
    {
      image: "/images/services/home-bars/gallery-1.jpg",
      title: "Walnut and Brass Cocktail Bar"
    },
    {
      image: "/images/services/home-bars/gallery-2.jpg",
      title: "Contemporary Glass Display Bar"
    },
    {
      image: "/images/services/home-bars/gallery-3.jpg",
      title: "Rustic Wine Bar"
    },
    {
      image: "/images/services/home-bars/gallery-4.jpg",
      title: "Illuminated Spirits Display"
    },
    {
      image: "/images/services/home-bars/gallery-5.jpg",
      title: "Wine Cellar with Tasting Area"
    },
    {
      image: "/images/services/home-bars/gallery-6.jpg",
      title: "Art Deco Inspired Bar"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/home-bars/hero.jpg"
            alt="Luxury Home Bar" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              className="inline-block text-secondary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              OUR SERVICES
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-6xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bespoke Home Bars
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elevate your entertainment space with a custom-designed bar
              that perfectly blends luxury, functionality, and your personal style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium"
              >
                Begin Your Home Bar Project
                <FaAngleRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-primary mb-6">The Art of Home Entertainment</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A bespoke home bar is more than just a place to store drinks—it's the centerpiece of your entertainment space, a conversation starter, and a personal retreat where you can unwind or host guests in style.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Richard James Kitchens, we design and craft luxurious, functional home bars that perfectly reflect your personal taste, entertaining style, and the architectural character of your home. Whether you're a wine connoisseur, a craft cocktail enthusiast, or simply enjoy having a dedicated space for entertaining, we create bars that are as beautiful as they are practical.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From compact built-in bars to expansive entertainment areas with seating and multimedia integration, our expert designers and craftsmen will work closely with you to create a truly bespoke bar that enhances your lifestyle and adds value to your home.
              </p>
            </motion.div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-elevated"
              >
                <div className="aspect-[4/3]">
                  <Image 
                    src="/images/services/home-bars/intro.jpg" 
                    alt="Luxury Home Bar" 
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-neutral-50" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Features & Benefits
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              What sets our home bars apart
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Styles Section */}
      <section className="py-20" ref={stylesRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Bar Design Styles
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Explore different aesthetics for your home bar
            </motion.p>
          </div>
          
          <div className="space-y-20">
            {barStyles.map((style, index) => (
              <DesignStyle 
                key={style.title}
                title={style.title}
                description={style.description}
                image={style.image}
                reverse={index % 2 !== 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-neutral-50" ref={galleryRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Home Bar Gallery
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Be inspired by our recent projects
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <GalleryItem 
                key={index}
                image={item.image}
                title={item.title}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery" 
              className="inline-flex items-center text-secondary font-medium hover:text-secondary-600 transition-colors"
            >
              View More in Our Gallery
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Our Design Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              From concept to completion, we guide you through every step
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep 
              number="01" 
              title="Consultation" 
              description="We discuss your vision, needs, and how you plan to use your home bar." 
              index={0} 
            />
            <ProcessStep 
              number="02" 
              title="Design Concept" 
              description="Our designers create detailed plans that balance aesthetics with functionality." 
              index={1} 
            />
            <ProcessStep 
              number="03" 
              title="Refinement" 
              description="We fine-tune every detail of your design until it's perfect for your needs." 
              index={2} 
            />
            <ProcessStep 
              number="04" 
              title="Installation" 
              description="Our skilled team crafts and installs your bar to the highest standards." 
              index={3} 
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary rounded-xl p-10 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Ready to Elevate Your Home?</h2>
              <p className="text-white/90 mb-8 relative z-10 max-w-2xl mx-auto">
                Contact us today to discuss your home bar project and discover how we can create a luxurious, personalized space that transforms your home.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium relative z-10"
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

// Process Step Component
const ProcessStep = ({ 
  number, 
  title, 
  description, 
  index 
}: { 
  number: string; 
  title: string; 
  description: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-xl shadow-subtle border border-gray-100 text-center"
    >
      <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white font-medium text-xl mx-auto mb-6">
        {number}
      </div>
      <h3 className="text-xl font-medium text-primary mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}; 