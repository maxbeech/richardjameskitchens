'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaAngleRight, FaLeaf, FaUtensils, FaRegLightbulb } from 'react-icons/fa';

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

// Design Option Component
const DesignOption = ({ 
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
      className="bg-white rounded-xl overflow-hidden shadow-elevated"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-primary mb-3">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// Gallery Item Component
const GalleryItem = ({ image, index }: { image: string; index: number }) => {
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
      <div className="relative aspect-square overflow-hidden">
        <Image 
          src={image} 
          alt="Pantry Design" 
          fill 
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </motion.div>
  );
};

export default function Pantries() {
  const featuresRef = useRef(null);
  const designsRef = useRef(null);
  const galleryRef = useRef(null);
  
  const features = [
    {
      icon: FaUtensils,
      title: "Optimized Storage",
      description: "Our pantry designs maximize storage space with adjustable shelving, pull-out drawers, and specialized compartments for different types of food and kitchen items."
    },
    {
      icon: FaLeaf,
      title: "Sustainable Materials",
      description: "We use environmentally friendly materials and finishes that are both durable and beautiful, ensuring your pantry is as sustainable as it is functional."
    },
    {
      icon: FaRegLightbulb,
      title: "Intelligent Lighting",
      description: "Integrated lighting solutions illuminate your pantry space effectively, with options including motion sensors, LED strips, and adjustable brightness."
    }
  ];
  
  const designOptions = [
    {
      title: "Walk-In Pantry",
      description: "A dedicated room adjacent to your kitchen, providing ample storage space for food, small appliances, and kitchenware. Walk-in pantries offer maximum storage capacity and can be customized with various shelving, drawer, and storage solutions.",
      image: "/images/services/pantries/walk-in.jpg"
    },
    {
      title: "Butler's Pantry",
      description: "A transitional space between kitchen and dining area, functioning as both a storage and preparation area. Butler's pantries typically include countertops, cabinets, and sometimes a sink or small appliances, perfect for entertaining.",
      image: "/images/services/pantries/butlers.jpg"
    },
    {
      title: "Pull-Out Pantry",
      description: "A space-efficient solution for smaller kitchens, featuring tall, narrow cabinets with pull-out shelves or drawers. These clever designs maximize storage capacity while minimizing the footprint in your kitchen.",
      image: "/images/services/pantries/pull-out.jpg"
    },
    {
      title: "Larder Cabinet",
      description: "A freestanding or built-in cabinet with specialized storage features for food items and kitchen essentials. Traditional larder cabinets often combine open shelving, drawers, and door storage in one elegant unit.",
      image: "/images/services/pantries/larder.jpg"
    }
  ];
  
  const galleryImages = [
    "/images/services/pantries/gallery-1.jpg",
    "/images/services/pantries/gallery-2.jpg",
    "/images/services/pantries/gallery-3.jpg",
    "/images/services/pantries/gallery-4.jpg",
    "/images/services/pantries/gallery-5.jpg",
    "/images/services/pantries/gallery-6.jpg"
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/pantries/hero.jpg"
            alt="Bespoke Pantry Design" 
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
              Bespoke Pantries
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elegant, functional storage solutions that combine
              practicality with beautiful design for the modern home.
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
                Discuss Your Pantry Project
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
              <h2 className="text-3xl font-serif text-primary mb-6">Pantry Design & Installation</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A well-designed pantry is more than just additional storage—it's an essential element of a functional, organized kitchen that enhances both the aesthetic appeal and practicality of your home.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Richard James Kitchens, we design and create bespoke pantries that perfectly complement your kitchen and lifestyle, with tailored storage solutions that keep essentials organized, accessible, and beautifully displayed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're looking for a walk-in pantry with extensive storage, a traditional butler's pantry, or a space-saving pull-out pantry solution, our expert team will craft a design that maximizes functionality while enhancing the style of your home.
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
                    src="/images/services/pantries/intro.jpg" 
                    alt="Bespoke Pantry" 
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
              Pantry Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Our pantries combine smart design with premium craftsmanship
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
          
          <div className="mt-16">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-elevated">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-serif text-primary mb-6">Customized Storage Solutions</h3>
                  <p className="text-gray-700 mb-6">
                    Every pantry we design is tailored to your specific storage needs and available space. We consider what you'll be storing, how frequently you'll access different items, and the overall workflow of your kitchen.
                  </p>
                  <ul className="space-y-3">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-gray-700">Adjustable shelving for flexibility</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-gray-700">Deep drawers for bulky items</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-gray-700">Pull-out basket systems</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-gray-700">Specialized compartments for bottles and jars</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-gray-700">Door-mounted rack solutions</span>
                    </motion.li>
                  </ul>
                </motion.div>
                
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative rounded-xl overflow-hidden"
                  >
                    <div className="aspect-square">
                      <Image 
                        src="/images/services/pantries/storage-solutions.jpg" 
                        alt="Pantry Storage Solutions" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Options Section */}
      <section className="py-20" ref={designsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Pantry Design Options
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Explore the different types of pantries we can create for your home
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {designOptions.map((option, index) => (
              <DesignOption 
                key={option.title}
                title={option.title}
                description={option.description}
                image={option.image}
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
              Pantry Inspiration Gallery
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Browse examples of our custom pantry designs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <GalleryItem 
                key={index}
                image={image}
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
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-elevated">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-serif text-primary mb-4">Our Pantry Design Process</h2>
                <p className="text-gray-700">
                  A collaborative approach to creating your perfect pantry
                </p>
              </motion.div>
              
              <div className="space-y-8">
                <ProcessStep 
                  number="01"
                  title="Consultation & Assessment"
                  description="We begin with a thorough discussion of your storage needs, lifestyle, and design preferences, followed by an assessment of the available space in your home."
                  index={0}
                />
                
                <ProcessStep 
                  number="02"
                  title="Design Development"
                  description="Our designers create detailed plans for your pantry, including layout, storage solutions, materials, and finishes, working closely with you to refine the design."
                  index={1}
                />
                
                <ProcessStep 
                  number="03"
                  title="Crafting & Installation"
                  description="Your pantry is expertly crafted using premium materials and installed with meticulous attention to detail, ensuring exceptional quality and functionality."
                  index={2}
                />
              </div>
            </div>
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
              
              <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Transform Your Storage Space</h2>
              <p className="text-white/90 mb-8 relative z-10 max-w-2xl mx-auto">
                Contact us today to discuss your pantry project and discover how we can create a beautiful, functional storage solution for your home.
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-6 items-start"
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary flex items-center justify-center text-white font-medium text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-medium text-primary mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}; 