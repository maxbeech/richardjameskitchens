'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaTrophy, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import OptimizedImage from '@/components/ui/OptimizedImage';
import FadeIn from '@/components/ui/animations/FadeIn';
import HeroSlider from '@/components/ui/animations/HeroSlider';
import FoxLogo from '@/components/ui/FoxLogo';
import HeroHeading from '@/components/ui/HeroHeading';
import HistoricTimeline from '@/components/ui/HistoricTimeline';
import { motion } from 'framer-motion';

const historicEvents = [
  {
    year: 1888,
    title: 'Club Foundation',
    description: 'Bramble and Bay Tennis Club was established by local enthusiasts in the Victorian era.'
  },
  {
    year: 1902,
    title: 'First Clubhouse',
    description: 'The original clubhouse was built, becoming a center for social gatherings.'
  },
  {
    year: 1924,
    title: 'County Champions',
    description: 'Bramble and Bay members won their first county championship, establishing the club\'s competitive reputation.'
  },
  {
    year: 1968,
    title: 'Squash Addition',
    description: 'The club expanded to include squash facilities, becoming Bramble and Bay Tennis & Squash Club.'
  },
  {
    year: 2012,
    title: 'Modern Renovation',
    description: 'A complete renovation of facilities, maintaining historic charm with modern amenities.'
  }
];

export default function Home() {
  // Hero slider images
  const heroImages = [
    { src: '/images/home_hero_slider/upclose-tennis.jpg', alt: 'Close-up of tennis court' },
    { src: '/images/home_hero_slider/grafton-courts-0.jpg', alt: 'Bramble and Bay tennis courts' },
    { src: '/images/home_hero_slider/grafton-group-tennis.jpg', alt: 'Group tennis at Bramble and Bay' },
    { src: '/images/home_hero_slider/grafton-tennis-sunset.jpg', alt: 'Tennis courts at sunset' },
    { src: '/images/home_hero_slider/grafton-tennis-courts-1.jpg', alt: 'Bramble and Bay tennis facilities' },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <HeroSlider images={heroImages} interval={6000} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <FoxLogo width={70} height={70} className="mr-4" />
              <div className="h-10 w-1 bg-secondary mr-4"></div>
              <p className="text-white/90 font-serif italic">Established 1888</p>
            </div>
            
            <HeroHeading 
              title="Welcome to Bramble and Bay Tennis & Squash Club" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif"
            />
            
            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-serif">
                A premier sporting venue with over 135 years of tradition, offering exceptional facilities for tennis and squash enthusiasts of all abilities.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/membership" 
                    className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg flex items-center"
                  >
                    Join Our Club
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/contact" 
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg flex items-center"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1 h-3 bg-white/60 rounded-full"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="flex items-center mb-6">
                  <FoxLogo width={40} height={40} className="mr-3" />
                  <h2 className="text-4xl font-bold text-primary font-serif">Our Club</h2>
                </div>
                <p className="text-lg mb-6 text-gray-700">
                  Founded in 1888, Bramble and Bay Tennis and Squash Club has a rich history of providing exceptional sporting facilities to the community. Nestled in beautiful surroundings, our club combines tradition with modern amenities.
                </p>
                <p className="text-lg mb-8 text-gray-700">
                  The club's fox emblem represents our values of cunning strategy, agility, and community spirit. Whether you're a competitive player looking for match play, a beginner seeking coaching, or simply want to enjoy the social side of sport, Bramble and Bay has something for everyone.
                </p>
                <Link 
                  href="/about" 
                  className="inline-flex items-center font-medium text-secondary hover:text-secondary/80 transition-colors group"
                >
                  Learn more about our history 
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.4}>
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl transform rotate-3" />
                <div className="relative aspect-[4/3] w-full">
                  <OptimizedImage 
                    src="/images/grafton-courts-0.jpg" 
                    alt="Bramble and Bay Tennis and Squash Club clubhouse" 
                    className="object-cover rounded-2xl shadow-2xl"
                    fill
                  />
                  <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm p-4 rounded-tl-2xl rounded-br-2xl shadow-lg transform translate-y-6 -translate-x-6">
                    <p className="text-primary font-serif italic">135+ years of sporting excellence</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Historic Timeline */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <FoxLogo width={50} height={50} className="mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Our Rich History</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                For over a century, Bramble and Bay has been at the heart of tennis and squash in the region.
              </p>
            </div>
          </FadeIn>
          
          <HistoricTimeline events={historicEvents} className="mt-20" />
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <FoxLogo width={50} height={50} className="mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Our Facilities</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                Bramble and Bay offers excellent facilities for both tennis and squash players, with well-maintained courts and a welcoming clubhouse.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tennis Courts */}
            <FadeIn direction="up" delay={0.3}>
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-[4/3] relative">
                  <OptimizedImage
                    src="/images/tennis-courts.jpg"
                    alt="Tennis courts"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-serif">Tennis Courts</h3>
                  <p className="text-gray-600 mb-4">Four premium all-weather courts available for members year-round. Floodlit for evening play.</p>
                  <Link 
                    href="/tennis" 
                    className="inline-flex items-center text-secondary font-medium group"
                  >
                    Tennis at Bramble and Bay
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
            
            {/* Squash Courts */}
            <FadeIn direction="up" delay={0.4}>
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-[4/3] relative">
                  <OptimizedImage
                    src="/images/grafton-squash.jpeg"
                    alt="Squash courts"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-serif">Squash Courts</h3>
                  <p className="text-gray-600 mb-4">Three professional standard courts with viewing areas. Regular club nights and competitions.</p>
                  <Link 
                    href="/squash" 
                    className="inline-flex items-center text-secondary font-medium group"
                  >
                    Squash at Bramble and Bay
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
            
            {/* Clubhouse */}
            <FadeIn direction="up" delay={0.5}>
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-[4/3] relative">
                  <OptimizedImage
                    src="/images/grafton-group.png"
                    alt="Clubhouse"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-serif">Clubhouse</h3>
                  <p className="text-gray-600 mb-4">Comfortable lounge area, changing facilities, and a friendly bar serving refreshments after your game.</p>
                  <Link 
                    href="/social" 
                    className="inline-flex items-center text-secondary font-medium group"
                  >
                    Social Events
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 bg-primary/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform -rotate-3" />
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
                    <OptimizedImage 
                      src="/images/grafton-group-tennis-2.jpg" 
                      alt="Members enjoying the club" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <FadeIn direction="left" delay={0.3}>
                <div className="flex items-center mb-6">
                  <FoxLogo width={40} height={40} className="mr-3" />
                  <h2 className="text-4xl font-bold text-primary font-serif">Join Our Club</h2>
                </div>
                <p className="text-lg mb-6 text-gray-700">
                  Becoming a member at Bramble and Bay gives you access to our excellent facilities, coaching programs, and a vibrant community of tennis and squash enthusiasts.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaTrophy className="text-secondary text-3xl mb-3" />
                    <h3 className="text-xl font-bold text-primary mb-2">Competitive Play</h3>
                    <p className="text-gray-600">Regular tournaments and leagues for all abilities</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaUsers className="text-secondary text-3xl mb-3" />
                    <h3 className="text-xl font-bold text-primary mb-2">Social Events</h3>
                    <p className="text-gray-600">Fun events and gatherings throughout the year</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <FaCalendarAlt className="text-secondary text-3xl mb-3" />
                    <h3 className="text-xl font-bold text-primary mb-2">Coaching</h3>
                    <p className="text-gray-600">Expert coaching for all ages and abilities</p>
                  </div>
                </div>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/membership" 
                    className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg inline-flex items-center"
                  >
                    View Membership Options
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <FoxLogo width={60} height={60} className="mx-auto mb-6 text-white" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Ready to Join Bramble and Bay?</h2>
              <p className="text-xl text-white/80 mb-8">
                Whether you're a complete beginner or an experienced player, we welcome you to become part of our friendly community.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/contact" 
                    className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg inline-flex items-center"
                  >
                    Get in Touch
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/membership" 
                    className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg inline-flex items-center"
                  >
                    Join Today
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
