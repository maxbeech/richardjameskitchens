'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngleRight, FaSearch } from 'react-icons/fa';

// Gallery Item Component
const GalleryItem = ({ 
  image, 
  title, 
  collection, 
  location, 
  index, 
  delay 
}: { 
  image: string; 
  title: string; 
  collection: string;
  location: string;
  index: number;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      layout
      className="rounded-xl overflow-hidden shadow-elevated h-full"
    >
      <div className="relative aspect-[5/4] overflow-hidden group">
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <div className="p-6 w-full">
            <p className="text-white font-medium text-lg">{title}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-white/80 text-sm">{location}</p>
              <span className="text-secondary text-xs font-medium px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                {collection}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Filter Button Component
const FilterButton = ({ 
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active 
          ? 'bg-primary text-white shadow-md' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
};

export default function Gallery() {
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGallery, setFilteredGallery] = useState<GalleryItemType[]>([]);
  
  // Define collection filters
  const collectionFilters = ['All', 'Bella', 'Wilton', 'Zurfiz', 'Other'];
  
  // Gallery data
  type GalleryItemType = {
    id: number;
    image: string;
    title: string;
    collection: string;
    location: string;
    features: string[];
  };
  
  const galleryItems: GalleryItemType[] = [
    {
      id: 1,
      image: '/images/products/bella_range/Final product in kitchen example photos/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg',
      title: 'Contemporary Family Kitchen',
      collection: 'Bella',
      location: 'Surrey',
      features: ['Island', 'Open Plan', 'Integrated Appliances']
    },
    {
      id: 2,
      image: '/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg',
      title: 'Shaker Style Country Kitchen',
      collection: 'Wilton',
      location: 'London',
      features: ['Pantry', 'Traditional', 'Hand-painted']
    },
    {
      id: 3,
      image: '/images/home_hero_slider/Zurfiz Range kitchen 1.jpg',
      title: 'Modern Handleless Design',
      collection: 'Zurfiz',
      location: 'Wimbledon',
      features: ['Handleless', 'High-gloss', 'Contemporary']
    },
    {
      id: 4,
      image: '/images/products/bella_range/Final product in kitchen example photos/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg',
      title: 'Bright White Kitchen With Island',
      collection: 'Bella',
      location: 'Richmond',
      features: ['Island', 'White', 'Spacious']
    },
    {
      id: 5,
      image: '/images/products/wilton_range/Final product in kitchen example photos/Kitchen 1.jpg',
      title: 'Traditional Wilton Kitchen',
      collection: 'Wilton',
      location: 'Surrey',
      features: ['Classic', 'Wood Elements', 'Custom Storage']
    },
    {
      id: 6,
      image: '/images/products/zurfiz_range/Final product in kitchen example photos/Modern Kitchen.jpg',
      title: 'Ultra-Modern Grey Kitchen',
      collection: 'Zurfiz',
      location: 'Chelsea',
      features: ['Minimalist', 'Grey', 'Smart Technology']
    },
    {
      id: 7,
      image: '/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/modern pantry.jpg',
      title: 'Luxury Integrated Pantry',
      collection: 'Other',
      location: 'Kensington',
      features: ['Pantry', 'Storage', 'Organization']
    },
    {
      id: 8,
      image: '/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/modern boot room.jpg',
      title: 'Stylish Boot Room',
      collection: 'Other',
      location: 'Guildford',
      features: ['Boot Room', 'Storage', 'Practical']
    },
    {
      id: 9,
      image: '/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/modern home bar.jpg',
      title: 'Contemporary Home Bar',
      collection: 'Other',
      location: 'London',
      features: ['Bar', 'Entertainment', 'Luxury']
    },
    {
      id: 10,
      image: '/images/products/bella_range/Final product in kitchen example photos/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg',
      title: 'Open Plan Bella Kitchen',
      collection: 'Bella',
      location: 'Esher',
      features: ['Open Plan', 'Family Kitchen', 'Social Space']
    },
    {
      id: 11,
      image: '/images/products/wilton_range/Final product in kitchen example photos/Kitchen 2.jpg',
      title: 'Sage Green Wilton Kitchen',
      collection: 'Wilton',
      location: 'Surrey',
      features: ['Colored', 'Traditional', 'Island']
    },
    {
      id: 12,
      image: '/images/products/zurfiz_range/Final product in kitchen example photos/Black Kitchen.jpg',
      title: 'Bold Black Zurfiz Kitchen',
      collection: 'Zurfiz',
      location: 'Westminster',
      features: ['Bold', 'Contemporary', 'Statement']
    },
  ];
  
  // Filter gallery based on selected collection and search query
  useEffect(() => {
    const filtered = galleryItems.filter(item => {
      // Collection filter
      const collectionMatch = selectedCollection === 'All' || item.collection === selectedCollection;
      
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const searchMatch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower) ||
        item.features.some(feature => feature.toLowerCase().includes(searchLower));
      
      return collectionMatch && searchMatch;
    });
    
    setFilteredGallery(filtered);
  }, [selectedCollection, searchQuery]);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_2206f9c8b5a34fbfae9a79d8b8c5e9d3~mv2.jpg" 
            alt="Richard James Kitchens Gallery" 
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
              Our Project <span className="text-secondary">Gallery</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Explore our collection of beautiful kitchens, showcasing our craftsmanship and design expertise.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter and Search Controls */}
          <div className="mb-12 bg-neutral-50 rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Collection Filters */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {collectionFilters.map((filter) => (
                  <FilterButton 
                    key={filter}
                    label={filter}
                    active={selectedCollection === filter}
                    onClick={() => setSelectedCollection(filter)}
                  />
                ))}
              </div>
              
              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="mb-12">
            <AnimatePresence>
              {filteredGallery.length > 0 ? (
                <motion.div 
                  layout
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredGallery.map((item, index) => (
                    <GalleryItem 
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      collection={item.collection}
                      location={item.location}
                      index={index}
                      delay={index * 0.05}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <p className="text-gray-500 text-lg">No matching projects found. Please try a different search or filter.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Additional Information */}
          <div className="bg-primary/5 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-serif text-primary mb-6">Bespoke Design Process</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Each project in our gallery represents a collaborative journey with our clients. 
                    From initial consultation to final installation, we work closely with you to 
                    create a kitchen that perfectly reflects your style and meets your needs.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Our showroom features examples of all our kitchen collections and finishes. 
                    Visit us to see the quality of our craftsmanship in person and discuss your 
                    dream kitchen with our expert designers.
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-secondary hover:bg-secondary-600 text-white px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
                  >
                    Book a Showroom Visit
                    <FaAngleRight className="ml-2" />
                  </Link>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-elevated">
                    <Image 
                      src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg" 
                      alt="Kitchen Design Process" 
                      width={600} 
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
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
            src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg" 
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
              Ready to Create Your Dream Kitchen?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to arrange a consultation with one of our expert designers. 
              Let's transform your kitchen into a beautiful space that's perfect for your home and lifestyle.
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
                Explore Collections
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 