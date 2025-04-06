'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngleRight, FaCheck } from 'react-icons/fa';

// Door Style Component
const DoorStyle = ({ 
  name, 
  description, 
  image, 
  active, 
  onClick 
}: { 
  name: string; 
  description: string; 
  image: string; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <div 
      className={`cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ${
        active ? 'ring-2 ring-secondary shadow-elevated' : 'ring-1 ring-gray-200 hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className={`text-lg font-medium mb-1 ${active ? 'text-secondary' : 'text-primary'}`}>
          {name}
        </h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Color Swatch Component
const ColorSwatch = ({ 
  color, 
  name, 
  active, 
  onClick 
}: { 
  color: string; 
  name: string; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <div 
      className={`cursor-pointer transition-all duration-300 ${
        active ? 'scale-110 shadow-elevated' : 'hover:scale-105'
      }`}
      onClick={onClick}
    >
      <div 
        className={`h-16 w-16 rounded-full border-2 ${active ? 'border-secondary' : 'border-transparent'} relative`}
        style={{ backgroundColor: color }}
      >
        {active && (
          <div className="absolute inset-0 flex items-center justify-center">
            <FaCheck className={`text-white ${color === '#FFFFFF' || color === '#F5F5F5' ? 'opacity-0' : ''}`} />
          </div>
        )}
      </div>
      <p className="text-xs text-center mt-2 text-gray-700">{name}</p>
    </div>
  );
};

// Gallery Item Component
const GalleryItem = ({ image, title }: { image: string; title: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="rounded-xl overflow-hidden shadow-elevated"
    >
      <div className="relative aspect-square overflow-hidden group">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <p className="text-white font-medium p-6">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Feature Item Component
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
      className="flex flex-col bg-white p-6 rounded-xl shadow-subtle"
    >
      <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 text-secondary">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-medium text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default function BellaRange() {
  const [selectedDoor, setSelectedDoor] = useState('Standard');
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  
  const doorStyles = [
    { 
      name: 'Standard', 
      description: 'Clean, simple lines with a classic feel', 
      image: '/images/products/bella_range/Product images/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg' 
    },
    { 
      name: 'Beaded', 
      description: 'Elegantly detailed with decorative beading', 
      image: '/images/products/bella_range/Final product in kitchen example photos/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg' 
    },
    { 
      name: 'Grooved', 
      description: 'Contemporary styling with vertical grooves', 
      image: '/images/products/bella_range/Final product in kitchen example photos/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg' 
    },
    { 
      name: 'Inset', 
      description: 'Sophisticated raised panel with inset detail', 
      image: '/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_766fb14efa064c56bfcadfc3a941153d~mv2.jpg' 
    },
  ];
  
  const colors = [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Off White', hex: '#F5F5F5' },
    { name: 'Sage Green', hex: '#9CAF88' },
    { name: 'Navy Blue', hex: '#394C6A' },
    { name: 'Charcoal', hex: '#36454F' },
    { name: 'Burgundy', hex: '#800020' },
    { name: 'Dove Grey', hex: '#B8B8B8' },
    { name: 'Black', hex: '#212121' },
  ];
  
  const galleryImages = [
    { 
      image: '/images/products/bella_range/Final product in kitchen example photos/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg', 
      title: 'Contemporary Kitchen with Island' 
    },
    { 
      image: '/images/products/bella_range/Final product in kitchen example photos/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg', 
      title: 'Elegant White Bella Range Kitchen' 
    },
    { 
      image: '/images/products/bella_range/Final product in kitchen example photos/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg', 
      title: 'Open Plan Kitchen Design' 
    },
    { 
      image: '/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_c655d542c4cc46e2bb444fde3a8f03ae~mv2.jpg', 
      title: 'Bella Range with Integrated Appliances' 
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/products/bella_range/Final product in kitchen example photos/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg"
            alt="Bella Range Kitchen" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-serif text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bella Range
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A perfect blend of traditional craftsmanship and contemporary design
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                Request a Quote
                <FaAngleRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-primary mb-6">The <span className="text-secondary">Bella</span> Collection</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Bella Range combines timeless design elements with modern functionality, creating 
                kitchens that are both elegant and practical. Each kitchen in this collection is 
                crafted with meticulous attention to detail, using the finest materials to ensure 
                exceptional quality and durability.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Available in a variety of door styles and finishes, the Bella Range offers endless 
                customization possibilities to create a kitchen that perfectly reflects your style 
                and meets your needs.
              </p>
              <ul className="space-y-2 mb-8">
                <motion.li 
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-secondary mr-2">•</span>
                  <span>Available in over 30 colors and finishes</span>
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-secondary mr-2">•</span>
                  <span>Solid wood construction with premium detailing</span>
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-secondary mr-2">•</span>
                  <span>Soft-close drawers and doors as standard</span>
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-secondary mr-2">•</span>
                  <span>10-year quality guarantee</span>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-elevated">
                <Image 
                  src="/images/products/bella_range/Final product in kitchen example photos/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg" 
                  alt="Bella Range Kitchen" 
                  width={600} 
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Door Styles */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Door Styles</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our range of elegant door styles to create your perfect Bella kitchen.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {doorStyles.map((door) => (
              <DoorStyle 
                key={door.name}
                name={door.name}
                description={door.description}
                image={door.image}
                active={selectedDoor === door.name}
                onClick={() => setSelectedDoor(door.name)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Color Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Color Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Customize your kitchen with our range of beautiful colors and finishes.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {colors.map((color) => (
              <ColorSwatch 
                key={color.name}
                color={color.hex}
                name={color.name}
                active={selectedColor === color.hex}
                onClick={() => setSelectedColor(color.hex)}
              />
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            * Colors shown are representative. Please visit our showroom to see actual samples.
          </p>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Every kitchen in our Bella Range comes with premium features as standard.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureItem 
              icon={FaCheck}
              title="Premium Materials" 
              description="Crafted from the finest solid wood and high-quality materials for exceptional durability and beauty."
            />
            <FeatureItem 
              icon={FaCheck}
              title="Custom Storage Solutions" 
              description="Tailored storage options to maximize space and organization in your kitchen."
            />
            <FeatureItem 
              icon={FaCheck}
              title="Soft-Close Hardware" 
              description="Premium soft-close hinges and drawer runners for quiet, smooth operation."
            />
            <FeatureItem 
              icon={FaCheck}
              title="Hand-Painted Finishes" 
              description="Expert hand-painting available for a truly bespoke and premium finish."
            />
            <FeatureItem 
              icon={FaCheck}
              title="Integrated Lighting" 
              description="Optional integrated LED lighting to enhance both functionality and ambiance."
            />
            <FeatureItem 
              icon={FaCheck}
              title="10-Year Guarantee" 
              description="Our kitchens are built to last, backed by our comprehensive 10-year guarantee."
            />
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Bella Range Gallery</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our showcase of beautiful Bella Range kitchens.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <GalleryItem 
                key={index}
                image={item.image}
                title={item.title}
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
              View Full Gallery
              <FaAngleRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/products/bella_range/Final product in kitchen example photos/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg" 
            alt="Bella Range Background" 
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
              Create Your Dream Bella Kitchen
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to arrange a consultation and start designing your perfect kitchen.
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