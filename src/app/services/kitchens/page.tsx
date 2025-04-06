'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';

// Style Variant Component
const StyleVariant = ({ 
  title, 
  description, 
  image, 
  index 
}: { 
  title: string; 
  description: string; 
  image: string; 
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
      className="flex flex-col"
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 shadow-elevated">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-medium text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

// Feature Highlight Component
const FeatureHighlight = ({ 
  title, 
  description, 
  image, 
  isReversed,
  index 
}: { 
  title: string; 
  description: string; 
  image: string; 
  isReversed?: boolean;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={isReversed ? 'md:order-2' : 'md:order-1'}>
        <h3 className="text-2xl font-serif text-primary mb-4">{title}</h3>
        <p className="text-gray-700 mb-0 leading-relaxed">{description}</p>
      </div>
      
      <div className={isReversed ? 'md:order-1' : 'md:order-2'}>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

// Testimonial Component
const Testimonial = ({ 
  quote, 
  author,
  location,
  index 
}: { 
  quote: string; 
  author: string;
  location: string;
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
      className="bg-white p-6 md:p-8 rounded-lg shadow-elevated border border-gray-100"
    >
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-medium text-primary">{author}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </motion.div>
  );
};

export default function Kitchens() {
  const stylesRef = useRef(null);
  const processRef = useRef(null);
  
  const kitchenStyles = [
    {
      title: "Contemporary",
      description: "Sleek, minimalist designs with clean lines and handleless cabinets",
      image: "/images/services/kitchens/contemporary.jpg"
    },
    {
      title: "Traditional",
      description: "Classic styling with detailed cabinetry and timeless features",
      image: "/images/services/kitchens/traditional.jpg"
    },
    {
      title: "Shaker",
      description: "Simple, elegant designs with framed doors and practical functionality",
      image: "/images/services/kitchens/shaker.jpg"
    },
    {
      title: "Handleless",
      description: "Ultra-modern kitchens with integrated handles for a streamlined look",
      image: "/images/services/kitchens/handleless.jpg"
    },
    {
      title: "Industrial",
      description: "Raw, urban aesthetic with metal accents and exposed materials",
      image: "/images/services/kitchens/industrial.jpg"
    },
    {
      title: "Rustic",
      description: "Warm, natural designs with wood finishes and traditional details",
      image: "/images/services/kitchens/rustic.jpg"
    }
  ];
  
  const testimonials = [
    {
      quote: "Our new kitchen has transformed not just how our home looks, but how we live in it. Richard James Kitchens delivered exactly what we wanted and more.",
      author: "Emma & James Thompson",
      location: "Surrey"
    },
    {
      quote: "The attention to detail and quality of craftsmanship in our kitchen is exceptional. It's become the heart of our home where everyone gathers.",
      author: "Michael Davies",
      location: "Kent"
    },
    {
      quote: "From design to installation, the team was professional, creative, and responsive. Our kitchen is both beautiful and incredibly functional.",
      author: "Sarah Johnson",
      location: "London"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/kitchens/hero.jpg"
            alt="Richard James Kitchens" 
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
              Bespoke Kitchens
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Handcrafted kitchen designs that combine exceptional craftsmanship,
              innovative functionality, and timeless style.
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
                Request a Design Consultation
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
              <h2 className="text-3xl font-serif text-primary mb-6">Exceptional Kitchens, Expertly Crafted</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Richard James Kitchens, we believe that a great kitchen is more than just a functional space—it's the heart of your home, where families gather, memories are made, and culinary creativity flourishes.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our bespoke kitchen service provides thoughtfully designed, expertly crafted kitchens that perfectly balance aesthetics with functionality, reflecting your unique style and meeting your practical needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From contemporary to traditional, minimalist to ornate, our team of skilled designers and craftspeople work closely with you to create a kitchen that's as individual as you are, using the finest materials and latest innovations.
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
                    src="/images/services/kitchens/intro.jpg" 
                    alt="Richard James Kitchen" 
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Styles Section */}
      <section className="py-20 bg-neutral-50" ref={stylesRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Kitchen Styles
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Explore our range of kitchen styles, each offering unique aesthetics and features
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {kitchenStyles.map((style, index) => (
              <StyleVariant 
                key={style.title}
                title={style.title}
                description={style.description}
                image={style.image}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery" 
              className="inline-flex items-center text-secondary font-medium hover:text-secondary-600 transition-colors"
            >
              View Our Kitchen Gallery
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
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
              Kitchen Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Discover the exceptional features that set our kitchens apart
            </motion.p>
          </div>
          
          <div className="space-y-16">
            <FeatureHighlight 
              title="Premium Materials" 
              description="We use only the finest materials in our kitchens, from solid hardwoods and high-quality veneers to premium stone worktops and innovative composite surfaces. Each material is carefully selected for its beauty, durability, and functionality, ensuring your kitchen not only looks exceptional but stands the test of time."
              image="/images/services/kitchens/feature-materials.jpg"
              index={0}
            />
            
            <FeatureHighlight 
              title="Innovative Storage Solutions" 
              description="Our kitchens incorporate smart storage solutions that maximize space and improve functionality. From corner carousel units and pull-out larders to custom drawer dividers and specialized compartments, we design storage that works around your specific needs, making your kitchen more organized and efficient."
              image="/images/services/kitchens/feature-storage.jpg"
              isReversed
              index={1}
            />
            
            <FeatureHighlight 
              title="Integrated Technology" 
              description="Modern kitchens demand modern technology, which is why we seamlessly integrate the latest innovations into our designs. From smart appliances and automated lighting to discreet charging stations and audio systems, we ensure technology enhances your kitchen experience without compromising on style."
              image="/images/services/kitchens/feature-technology.jpg"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-neutral-50" ref={processRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Our Kitchen Design Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              A collaborative approach from concept to completion
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <ProcessStep 
              number="01" 
              title="Design Consultation" 
              description="We begin with a detailed consultation to understand your vision, requirements, and lifestyle, followed by a site visit to assess your space."
              index={0}
            />
            <ProcessStep 
              number="02" 
              title="Design Development" 
              description="Our designers create detailed plans and 3D visualizations of your kitchen, working with you to refine the design until it's perfect."
              index={1}
            />
            <ProcessStep 
              number="03" 
              title="Crafting & Installation" 
              description="Your kitchen is handcrafted in our workshop, then expertly installed by our professional team, ensuring exceptional quality at every stage."
              index={2}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services/design-consultation" 
              className="inline-flex items-center text-secondary font-medium hover:text-secondary-600 transition-colors"
            >
              Learn More About Our Design Process
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
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
              What Our Clients Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Testimonials from our satisfied kitchen clients
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Collections Link Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-elevated"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image 
                    src="/images/services/kitchens/collections-link.jpg" 
                    alt="Kitchen Collections" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-serif text-primary mb-4">Explore Our Kitchen Collections</h2>
                  <p className="text-gray-700 mb-8">
                    Discover our three distinctive kitchen collections: Bella, Wilton, and Zurfiz. Each collection offers unique aesthetics and features, designed to suit different tastes and lifestyles.
                  </p>
                  <Link 
                    href="/collections" 
                    className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium self-start"
                  >
                    View Collections
                    <FaAngleRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
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
              
              <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Ready to Create Your Dream Kitchen?</h2>
              <p className="text-white/90 mb-8 relative z-10 max-w-2xl mx-auto">
                Contact us today to schedule a design consultation with our expert team and start your journey towards a beautiful, functional kitchen that's perfectly tailored to your needs.
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
      className="bg-white p-8 rounded-xl shadow-subtle border border-gray-100"
    >
      <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white font-medium text-xl mx-auto mb-6">
        {number}
      </div>
      <h3 className="text-xl font-medium text-primary mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}; 