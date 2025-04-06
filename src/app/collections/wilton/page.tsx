'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngleRight, FaCheck, FaRulerCombined, FaPalette, FaCog } from 'react-icons/fa';

// Color and Finish Selection Component
const ColorFinishSelector = ({ 
  options, 
  selected, 
  onSelect 
}: { 
  options: { name: string; image: string; description: string }[]; 
  selected: string; 
  onSelect: (name: string) => void;
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {options.map((option) => (
        <div 
          key={option.name}
          className={`cursor-pointer transition-all duration-300 rounded-lg overflow-hidden ${
            selected === option.name ? 'ring-2 ring-secondary scale-105' : 'ring-1 ring-gray-200 hover:shadow-md'
          }`}
          onClick={() => onSelect(option.name)}
        >
          <div className="relative h-32 overflow-hidden">
            <Image
              src={option.image}
              alt={option.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h4 className={`font-medium mb-1 ${selected === option.name ? 'text-secondary' : 'text-primary'}`}>
              {option.name}
            </h4>
            <p className="text-xs text-gray-600">{option.description}</p>
          </div>
        </div>
      ))}
    </div>
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
      className="flex items-start p-6 bg-white rounded-xl shadow-subtle"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mr-4 text-secondary">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-primary mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
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

export default function WiltonRange() {
  const [selectedFinish, setSelectedFinish] = useState('Classic White');
  
  const finishOptions = [
    { 
      name: 'Classic White', 
      image: '/images/products/wilton_range/Product images/Classic White.jpg', 
      description: 'Timeless white finish with a subtle sheen' 
    },
    { 
      name: 'Stone Grey', 
      image: '/images/products/wilton_range/Product images/Stone Grey.jpg', 
      description: 'Sophisticated warm grey tone' 
    },
    { 
      name: 'Sage Green', 
      image: '/images/products/wilton_range/Product images/Sage Green.jpg', 
      description: 'Muted green inspired by nature' 
    },
    { 
      name: 'Midnight Blue', 
      image: '/images/products/wilton_range/Product images/Midnight Blue.jpg', 
      description: 'Deep, sophisticated navy blue' 
    },
    { 
      name: 'Anthracite', 
      image: '/images/products/wilton_range/Product images/Anthracite.jpg', 
      description: 'Bold and modern deep grey' 
    },
    { 
      name: 'Bespoke Color', 
      image: '/images/products/wilton_range/Product images/Bespoke Color.jpg', 
      description: 'Custom color matched to your specification' 
    },
    { 
      name: 'Natural Oak', 
      image: '/images/products/wilton_range/Product images/Natural Oak.jpg', 
      description: 'Warm oak with visible natural grain' 
    },
    { 
      name: 'Walnut', 
      image: '/images/products/wilton_range/Product images/Walnut.jpg', 
      description: 'Rich, dark wood finish' 
    },
  ];
  
  const galleryImages = [
    { 
      image: '/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg', 
      title: 'Wilton Range Island Kitchen' 
    },
    { 
      image: '/images/products/wilton_range/Final product in kitchen example photos/Kitchen 1.jpg', 
      title: 'Traditional Shaker Style Kitchen' 
    },
    { 
      image: '/images/products/wilton_range/Final product in kitchen example photos/Kitchen 2.jpg', 
      title: 'Contemporary Wilton Design' 
    },
    { 
      image: '/images/products/wilton_range/Final product in kitchen example photos/Kitchen 3.jpg', 
      title: 'Elegant Sage Green Kitchen' 
    },
    { 
      image: '/images/products/wilton_range/Final product in kitchen example photos/Kitchen 4.jpg', 
      title: 'Classic White Wilton Kitchen' 
    },
    { 
      image: '/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg', 
      title: 'Wilton Range with Custom Island' 
    },
  ];
  
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg"
            alt="Wilton Range Kitchen" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Wilton <span className="text-secondary">Range</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Classic shaker style with a modern twist, offering elegant simplicity 
              and versatile design options for your dream kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                Request a Quote
                <FaAngleRight className="ml-2" />
              </Link>
              <Link 
                href="/gallery" 
                className="bg-transparent text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, x: -50 }}
              animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-4xl font-serif text-primary mb-6">Timeless <span className="text-secondary">Elegance</span></h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Wilton Range showcases the timeless beauty of shaker-style kitchens, 
                reimagined for the modern home. With its clean lines, subtle detailing, and 
                exceptional craftsmanship, this collection offers a perfect balance of 
                traditional charm and contemporary functionality.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Each Wilton kitchen is expertly crafted using traditional joinery techniques
                and the finest materials, ensuring a kitchen that not only looks beautiful 
                but stands the test of time.
              </p>
              
              <ul className="mb-6 space-y-3">
                {[
                  "In-frame and lay-on door options available",
                  "Hand-painted or natural wood finishes",
                  "Dovetail jointed solid wood drawers",
                  "Premium quality hinges and runners",
                  "Customizable internal storage solutions"
                ].map((feature, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  >
                    <FaCheck className="text-secondary mr-2 mt-1 flex-shrink-0" />
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
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-elevated">
                  <Image 
                    src="/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg" 
                    alt="Wilton Range Kitchen" 
                    width={600} 
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/10 rounded-full -z-10"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Distinctive Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the exquisite details and premium features that make the Wilton Range special.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureItem 
              icon={FaRulerCombined}
              title="Classic Shaker Design" 
              description="Featuring the distinctive five-piece door construction with a recessed center panel, creating a timeless look that complements any home."
            />
            <FeatureItem 
              icon={FaPalette}
              title="Hand-Painted Finish" 
              description="Each kitchen can be hand-painted in your choice of color, with the option to repaint in the future for a completely refreshed look."
            />
            <FeatureItem 
              icon={FaCog}
              title="Premium Hardware" 
              description="Equipped with the highest quality hinges, drawer runners, and handles for smooth operation and lasting performance."
            />
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-subtle">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-serif text-primary mb-4">Customize Your Kitchen</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The Wilton Range offers extensive customization options, allowing you to create 
                    a kitchen that perfectly matches your style and requirements. Choose from our 
                    selection of finishes, or opt for a bespoke color to create something truly unique.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our expert designers will work with you to select the perfect combination of cabinets, 
                    worktops, handles, and accessories to bring your vision to life.
                  </p>
                </motion.div>
              </div>
              
              <div>
                <motion.h4
                  className="text-lg font-medium text-primary mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Finish Options
                </motion.h4>
                <ColorFinishSelector 
                  options={finishOptions.slice(0, 4)} 
                  selected={selectedFinish}
                  onSelect={setSelectedFinish}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Wilton Range Gallery</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our showcase of beautiful Wilton Range kitchens to inspire your own design.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      
      {/* Testimonial Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-xl shadow-elevated relative"
            >
              <div className="absolute -top-6 -left-6 text-secondary opacity-30 scale-150">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                "We're absolutely thrilled with our new Wilton kitchen. The craftsmanship is exceptional, and the 
                attention to detail is remarkable. The team at Richard James Kitchens provided outstanding service 
                from initial design to final installation. Our kitchen has become the heart of our home, and we 
                couldn't be happier with the result."
              </p>
              
              <div className="flex items-center">
                <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary">
                    JD
                  </div>
                </div>
                <div>
                  <p className="font-medium text-primary">James Davidson</p>
                  <p className="text-gray-500 text-sm">Surrey</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg" 
            alt="Wilton Range Background" 
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
              Design Your Perfect Wilton Kitchen
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our expert designers are ready to help you create the kitchen of your dreams. 
              Book a consultation today to start your journey.
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
                Book a Consultation
                <FaAngleRight className="ml-2" />
              </Link>
              <Link 
                href="/collections" 
                className="bg-transparent text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                Explore Collections
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 