'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaAngleRight, FaHome, FaPalette, FaRegSnowflake, FaLeaf } from 'react-icons/fa';

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

// Gallery Item Component
const GalleryItem = ({ image, title, index }: { image: string; title: string; index: number }) => {
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

export default function BootRooms() {
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);
  
  const features = [
    {
      icon: FaHome,
      title: "Practical Entryway Design",
      description: "We create functional boot rooms that serve as the perfect transition between outdoors and indoors, with practical storage and durable surfaces designed for real life."
    },
    {
      icon: FaPalette,
      title: "Customized Aesthetic",
      description: "Your boot room is designed to complement your home's style, with customizable finishes, materials, and details that enhance the overall design scheme."
    },
    {
      icon: FaRegSnowflake,
      title: "All-Weather Solutions",
      description: "Our boot rooms incorporate features specifically designed for wet or muddy gear, including specialized storage, drainage solutions, and easy-clean surfaces."
    },
    {
      icon: FaLeaf,
      title: "Sustainable Materials",
      description: "We prioritize eco-friendly materials that are both beautiful and hardwearing, ensuring your boot room is as sustainable as it is practical."
    }
  ];
  
  const galleryImages = [
    {
      image: "/images/services/boot-rooms/gallery-1.jpg",
      title: "Classic Traditional Boot Room"
    },
    {
      image: "/images/services/boot-rooms/gallery-2.jpg",
      title: "Contemporary Entryway Design"
    },
    {
      image: "/images/services/boot-rooms/gallery-3.jpg",
      title: "Country Style Boot Room"
    },
    {
      image: "/images/services/boot-rooms/gallery-4.jpg",
      title: "Modern Minimalist Boot Room"
    },
    {
      image: "/images/services/boot-rooms/gallery-5.jpg",
      title: "Family-Friendly Boot Room"
    },
    {
      image: "/images/services/boot-rooms/gallery-6.jpg",
      title: "Compact Boot Room Solution"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/boot-rooms/hero.jpg"
            alt="Boot Room Design" 
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
              Bespoke Boot Rooms
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Practical, stylish entryway solutions that combine
              smart storage with beautiful design.
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
                Discuss Your Boot Room Project
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
              <h2 className="text-3xl font-serif text-primary mb-6">Functional Elegance for Your Entryway</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Boot rooms serve as the bridge between the outside world and your home's interior, providing a dedicated space for coats, shoes, sports equipment, and outdoor gear. More than just practical storage, a well-designed boot room can enhance your home's functionality while maintaining its aesthetic appeal.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Richard James Kitchens, we design and craft bespoke boot rooms that perfectly balance practicality with style, creating organized, beautiful spaces that work for your lifestyle and complement your home's architecture.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From traditional country-style boot rooms to sleek contemporary designs, our expert team will create a custom solution that addresses your specific storage needs while enhancing your home's value and appeal.
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
                    src="/images/services/boot-rooms/intro.jpg" 
                    alt="Bespoke Boot Room" 
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
              Boot Room Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Discover what makes our boot rooms exceptional
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
      
      {/* Design Elements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-elevated">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-primary mb-6">Custom Boot Room Elements</h2>
                <p className="text-gray-700 mb-6">
                  Our boot rooms are designed with your specific needs in mind, with each element thoughtfully considered to create a space that's both functional and beautiful. Here are some of the key components we can include in your bespoke boot room:
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <DesignElement 
                    title="Seating Area" 
                    description="Comfortable seating for putting on and removing footwear" 
                    index={0}
                  />
                  <DesignElement 
                    title="Coat Storage" 
                    description="Hooks, rails, and cupboards for outerwear" 
                    index={1}
                  />
                  <DesignElement 
                    title="Shoe Storage" 
                    description="Dedicated shoe racks, cubbies, or drawers" 
                    index={2}
                  />
                  <DesignElement 
                    title="Overhead Storage" 
                    description="Cabinets or shelving for seasonal items" 
                    index={3}
                  />
                  <DesignElement 
                    title="Durable Flooring" 
                    description="Water-resistant, easy-clean surfaces" 
                    index={4}
                  />
                  <DesignElement 
                    title="Drainage Solutions" 
                    description="For wet boots and outdoor gear" 
                    index={5}
                  />
                  <DesignElement 
                    title="Pet Accessories" 
                    description="Dog bed areas and pet care storage" 
                    index={6}
                  />
                  <DesignElement 
                    title="Charging Stations" 
                    description="For phones, keys, and essential items" 
                    index={7}
                  />
                </div>
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
                      src="/images/services/boot-rooms/design-elements.jpg" 
                      alt="Boot Room Design Elements" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
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
              Boot Room Inspiration
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Browse our gallery of boot room designs
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
          
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep 
              number="01" 
              title="Consultation & Assessment" 
              description="We discuss your needs, lifestyle, and storage requirements, then assess your space to understand the potential and limitations." 
              index={0} 
            />
            <ProcessStep 
              number="02" 
              title="Design & Development" 
              description="Our designers create detailed plans for your boot room, including layouts, materials, and finishes, collaborating closely with you throughout." 
              index={1} 
            />
            <ProcessStep 
              number="03" 
              title="Crafting & Installation" 
              description="Your boot room is expertly crafted in our workshop, then installed with precision and care by our professional team." 
              index={2} 
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
              
              <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Ready to Transform Your Entryway?</h2>
              <p className="text-white/90 mb-8 relative z-10 max-w-2xl mx-auto">
                Contact us today to discuss your boot room project and discover how we can create a practical, beautiful space for your home.
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

// Design Element Component
const DesignElement = ({ 
  title, 
  description, 
  index 
}: { 
  title: string; 
  description: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
      className="p-4 bg-primary/5 rounded-lg"
    >
      <h4 className="text-primary font-medium mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

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