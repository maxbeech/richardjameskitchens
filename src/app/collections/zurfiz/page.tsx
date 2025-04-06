'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngleRight, FaStar, FaLeaf, FaTools, FaLightbulb } from 'react-icons/fa';

// Color Variant Selector Component
const ColorVariant = ({ 
  name, 
  color, 
  description, 
  image,
  active, 
  onClick 
}: { 
  name: string; 
  color: string;
  description: string; 
  image: string;
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <motion.div 
      className={`cursor-pointer transition-all duration-300 rounded-lg overflow-hidden ${
        active ? 'ring-2 ring-secondary scale-105 shadow-lg' : 'ring-1 ring-gray-200 hover:shadow-md'
      }`}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 m-3 h-6 w-6 rounded-full border-2 border-white" style={{ backgroundColor: color }}></div>
      </div>
      <div className="p-4">
        <h4 className={`font-medium mb-1 ${active ? 'text-secondary' : 'text-primary'}`}>
          {name}
        </h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

// Feature Component
const FeatureItem = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      className="bg-white p-6 rounded-xl shadow-subtle border border-gray-100"
    >
      <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 text-secondary">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-medium text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Gallery Item Component
const GalleryItem = ({ image, title, index }: { image: string; title: string; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="rounded-xl overflow-hidden shadow-elevated"
    >
      <div className="relative aspect-[4/3] overflow-hidden group">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between">
          <p className="text-white font-medium p-6">{title}</p>
          <div className="p-4">
            <Link 
              href="/gallery" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <FaAngleRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ZurfizRange() {
  const [selectedColor, setSelectedColor] = useState('Ultra Gloss White');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const colorVariants = [
    { 
      name: 'Ultra Gloss White', 
      color: '#FFFFFF',
      description: 'Clean, modern and bright finish', 
      image: '/images/products/zurfiz_range/Product images/Ultra Gloss White.jpg' 
    },
    { 
      name: 'Ultra Gloss Black', 
      color: '#000000',
      description: 'Bold, dramatic statement piece', 
      image: '/images/products/zurfiz_range/Product images/Ultra Gloss Black.jpg' 
    },
    { 
      name: 'Ultra Gloss Light Grey', 
      color: '#D0D0D0',
      description: 'Subtle contemporary neutral', 
      image: '/images/products/zurfiz_range/Product images/Ultra Gloss Light Grey.jpg' 
    },
    { 
      name: 'Ultra Gloss Metallic Blue', 
      color: '#214B8C',
      description: 'Vibrant modern color option', 
      image: '/images/products/zurfiz_range/Product images/Ultra Gloss Metallic Blue.jpg' 
    },
    { 
      name: 'Ultra Matt Graphite', 
      color: '#333333',
      description: 'Sophisticated matte dark finish', 
      image: '/images/products/zurfiz_range/Product images/Ultra Matt Graphite.jpg' 
    },
    { 
      name: 'Metallic Champagne', 
      color: '#D9C8A7',
      description: 'Luxurious metallic warm tone', 
      image: '/images/products/zurfiz_range/Product images/Metallic Champagne.jpg' 
    },
  ];
  
  const galleryImages = [
    { 
      image: '/images/home_hero_slider/Zurfiz Range kitchen 1.jpg', 
      title: 'Contemporary Open Plan Kitchen' 
    },
    { 
      image: '/images/products/zurfiz_range/Final product in kitchen example photos/Modern Kitchen.jpg', 
      title: 'Sleek Modern Design' 
    },
    { 
      image: '/images/products/zurfiz_range/Final product in kitchen example photos/Black Kitchen.jpg', 
      title: 'Bold Black Zurfiz Kitchen' 
    },
    { 
      image: '/images/products/zurfiz_range/Final product in kitchen example photos/White Kitchen.jpg', 
      title: 'Minimalist White Handleless Kitchen' 
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/home_hero_slider/Zurfiz Range kitchen 1.jpg"
            alt="Zurfiz Range Kitchen" 
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
              ULTRA-MODERN KITCHENS
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-7xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Zurfiz Range
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sleek, contemporary, and minimalist designs featuring high-gloss finishes and handleless
              functionality for the modern home.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                Request a Design
                <FaAngleRight className="ml-2" />
              </Link>
              <Link 
                href="/gallery" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                View Gallery
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 bg-white" ref={containerRef}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-secondary uppercase tracking-wider font-medium">CONTEMPORARY LUXURY</span>
                <h2 className="text-4xl font-serif text-primary mb-6 mt-2">The Future of <span className="text-secondary">Kitchen Design</span></h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Zurfiz Range represents the cutting edge of kitchen design, offering ultra-modern 
                  aesthetics with clean lines and minimalist details. These handleless kitchens create a 
                  sleek, uninterrupted look that's perfect for contemporary homes.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Available in high-gloss and ultra-matt finishes, the Zurfiz collection combines 
                  sophisticated style with practical functionality, creating spaces that are both 
                  beautiful and highly usable.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Ultra-modern handleless design",
                    "High-gloss and ultra-matt finishes",
                    "Integrated grip profiles",
                    "Premium materials and construction",
                    "Streamlined aesthetic",
                    "Effortless functionality"
                  ].map((feature, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ y }}
            >
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-elevated">
                  <Image 
                    src="/images/products/zurfiz_range/Final product in kitchen example photos/Modern Kitchen.jpg" 
                    alt="Zurfiz Range Kitchen" 
                    width={600} 
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-secondary/10 rounded-full -z-10 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Color Variants */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Style Variants</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our range of stunning finish options for the Zurfiz collection.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {colorVariants.map((variant) => (
              <ColorVariant 
                key={variant.name}
                name={variant.name}
                color={variant.color}
                description={variant.description}
                image={variant.image}
                active={selectedColor === variant.name}
                onClick={() => setSelectedColor(variant.name)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Premium Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the exceptional qualities that set the Zurfiz Range apart.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureItem 
              icon={FaStar}
              title="Superior Finishes" 
              description="Our high-gloss and ultra-matt finishes are applied using advanced technology to ensure a flawless, long-lasting surface that's easy to maintain."
            />
            <FeatureItem 
              icon={FaLeaf}
              title="Eco-Friendly Materials" 
              description="We use sustainable materials and environmentally responsible manufacturing processes to minimize our ecological footprint."
            />
            <FeatureItem 
              icon={FaTools}
              title="Precision Engineering" 
              description="Every component is precisely engineered for perfect alignment and smooth operation, ensuring your kitchen functions flawlessly."
            />
          </div>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-elevated">
                  <Image 
                    src="/images/products/zurfiz_range/Final product in kitchen example photos/Black Kitchen.jpg" 
                    alt="Handleless Design" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4">Handleless Innovation</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Zurfiz Range features our innovative handleless design, with integrated grip profiles 
                  that create clean, uninterrupted lines while providing easy access to cabinets and drawers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This design eliminates the need for traditional handles, creating a sleek, minimalist 
                  aesthetic while also making cleaning easier and preventing accidental catches on clothing.
                </p>
                
                <div className="mt-6 flex gap-2">
                  <span className="inline-block bg-primary/10 px-3 py-1 rounded-full text-xs text-primary">Modern</span>
                  <span className="inline-block bg-primary/10 px-3 py-1 rounded-full text-xs text-primary">Minimalist</span>
                  <span className="inline-block bg-primary/10 px-3 py-1 rounded-full text-xs text-primary">Functional</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Inspiration Gallery</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our showcase of stunning Zurfiz kitchens to inspire your own design.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((item, index) => (
              <GalleryItem 
                key={index}
                image={item.image}
                title={item.title}
                index={index}
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/gallery" 
              className="bg-transparent border-2 border-primary/30 hover:border-primary text-primary px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
            >
              View Complete Gallery
              <FaAngleRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Smart Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 p-8 md:p-12 rounded-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 text-secondary">
                    <FaLightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-serif text-primary">Smart Kitchen Integration</h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Zurfiz Range is designed with modern living in mind, with options for seamless integration 
                  of smart home technology and appliances. From integrated lighting systems to automated 
                  storage solutions, we can help you create a truly connected kitchen.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Integrated LED lighting systems",
                    "Hidden charging stations for devices",
                    "Smart appliance integration",
                    "Motion-sensor activated features",
                    "Voice-controlled options available"
                  ].map((feature, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <FaAngleRight className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className="bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium text-sm"
                >
                  Discuss Smart Options
                  <FaAngleRight className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-elevated">
                  <Image 
                    src="/images/products/zurfiz_range/Final product in kitchen example photos/White Kitchen.jpg" 
                    alt="Smart Kitchen" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
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
            src="/images/home_hero_slider/Zurfiz Range kitchen 1.jpg" 
            alt="Zurfiz Range Background" 
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
              Design Your Ultra-Modern Kitchen
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to schedule a design consultation and start creating 
              your perfect contemporary kitchen with the Zurfiz Range.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                Request a Consultation
                <FaAngleRight className="ml-2" />
              </Link>
              <Link 
                href="/collections" 
                className="bg-transparent text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                View All Collections
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 