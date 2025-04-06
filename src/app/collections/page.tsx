'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngleRight } from 'react-icons/fa';

// Component for each collection
const CollectionFeature = ({ 
  title, 
  description, 
  features,
  image, 
  link,
  index 
}: { 
  title: string; 
  description: string;
  features: string[];
  image: string;
  link: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-serif text-primary mb-4">{title}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
          
          <ul className="mb-8 space-y-2">
            {features.map((feature, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="flex items-start"
              >
                <span className="text-secondary mr-2 mt-1">•</span>
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              href={link} 
              className="inline-flex items-center text-secondary font-medium hover:text-secondary-700 transition-colors text-lg"
            >
              Explore {title}
              <FaAngleRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: isEven ? 50 : -50 }}
          animate={inView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl shadow-elevated"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl group">
            <Image 
              src={image} 
              alt={title} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Collections() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, 50]);
  
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const parallaxRef = useRef(null);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_2206f9c8b5a34fbfae9a79d8b8c5e9d3~mv2.jpg" 
            alt="Richard James Kitchens Collections" 
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
            style={{ opacity, y }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Our Kitchen <span className="text-secondary">Collections</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Explore our range of handcrafted kitchen collections, each designed 
              with exceptional attention to detail and quality craftsmanship.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={introRef}
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-primary mb-6">Bespoke Luxury for Your Home</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Richard James Kitchens, we offer three distinctive kitchen collections, 
              each with its own unique character and style. Every kitchen is crafted using 
              the finest materials and traditional techniques, combined with innovative design 
              to create spaces that are both beautiful and functional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you prefer classic elegance, contemporary chic, or sleek modern aesthetics, 
              our collections offer endless possibilities for customization to create your 
              perfect kitchen.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Collections */}
      <section className="py-16 bg-neutral-50" ref={parallaxRef}>
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            <CollectionFeature 
              title="Bella Range" 
              description="The Bella Range combines classic design elements with modern functionality, creating kitchens that are both timeless and practical."
              features={[
                "Available in over 30 colors and finishes",
                "Solid wood construction with premium detailing",
                "Soft-close drawers and doors as standard",
                "Customizable storage solutions",
                "10-year quality guarantee"
              ]}
              image="/images/products/bella_range/Final product in kitchen example photos/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg"
              link="/collections/bella"
              index={0}
            />
            
            <CollectionFeature 
              title="Wilton Range" 
              description="Our Wilton Range offers elegant shaker-style kitchens with a contemporary twist, perfect for creating a warm and inviting heart of the home."
              features={[
                "Traditional shaker design with modern enhancements",
                "Hand-painted finish options available",
                "Integrated lighting solutions",
                "Island and peninsula configurations",
                "Extensive hardware options"
              ]}
              image="/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg"
              link="/collections/wilton"
              index={1}
            />
            
            <CollectionFeature 
              title="Zurfiz Range" 
              description="The Zurfiz Range represents modern luxury with its sleek handleless design, high-gloss finishes, and minimalist aesthetic."
              features={[
                "Ultra-modern handleless design",
                "High-gloss and ultra-matt finishes",
                "Cutting-edge storage technology",
                "Integrated appliance solutions",
                "Contemporary color palette"
              ]}
              image="/images/home_hero_slider/Zurfiz Range kitchen 1.jpg"
              link="/collections/zurfiz"
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-secondary/10 rounded-full"></div>
            <div className="absolute -left-16 -top-16 w-48 h-48 bg-primary/10 rounded-full"></div>
            
            <div className="relative z-10 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Ready to Transform Your Kitchen?</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Book a design consultation with our experts or visit our showroom to see our 
                  collections in person and discuss how we can create your dream kitchen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
                  >
                    Request Consultation
                    <FaAngleRight className="ml-2" />
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="bg-transparent border-2 border-primary/30 hover:border-primary text-primary px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
                  >
                    Explore Gallery
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 