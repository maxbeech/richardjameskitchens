'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaClock, FaHeart, FaRulerCombined, FaComments } from 'react-icons/fa';

// Custom components
const Testimonial = ({ quote, author, location }: { quote: string, author: string, location: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <div className="mb-4 text-primary/30">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed italic">"{quote}"</p>
      <div className="flex items-center">
        <span className="font-medium text-gray-900 mr-1">{author}</span>
        <span className="text-gray-500 text-sm">- {location}</span>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ title, description, image, link, index }: { 
  title: string; 
  description: string; 
  image: string;
  link: string;
  index: number;
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative h-80 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-300 z-10"></div>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="bg-white p-6 rounded-b-xl shadow-sm">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={link}
          className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
        >
          Learn more
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  
  const heroControls = useAnimation();
  const sectionControls = useAnimation();
  
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Images for hero slider
  const sliderImages = [
    "/images/home_hero_slider/window_curtain-1.webp",
    "/images/home_hero_slider/window_blind-2.webp",
    "/images/home_hero_slider/window_blind-4.webp",
    "/images/home_hero_slider/curtain_rail-zoom_in-1.webp"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    }
    if (servicesInView) {
      sectionControls.start('visible');
    }
  }, [heroControls, sectionControls, heroInView, servicesInView]);
  
  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image Slider */}
        <div className="absolute inset-0 overflow-hidden">
          {sliderImages.map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Bramble & Bay Interiors - Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>
        
        <motion.div 
          ref={heroRef}
          animate={heroControls}
          initial="hidden"
          variants={staggerChildren}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-medium max-w-3xl mb-4 drop-shadow-md"
          >
            Beautiful handmade <br />
            <span className="text-secondary drop-shadow-md">bespoke</span> soft furnishings
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-white/90 max-w-2xl mb-8 drop-shadow-md"
          >
            Bramble & Bay Interiors create gorgeous made-to-measure curtains, blinds and soft furnishings, designed to add unique finishing touches to your home.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/services" 
              className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Our Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                Welcome to <span className="text-primary">Bramble & Bay</span> Interiors
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We create beautiful handmade, made-to-measure curtains, blinds and soft furnishings, designed to add gorgeous and unique finishing touches to your home.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer a complete and personal service, working with clients across Surrey and Hampshire from our Horsell studio. From initial consultations to installation, our attention to detail ensures your vision becomes reality.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
              >
                Learn more about us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl z-10">
                <Image
                  src="/images/sofa-zoom_in-1.jpeg"
                  alt="Bespoke soft furnishings by Bramble & Bay"
                  width={600}
                  height={450}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-secondary/10 rounded-lg z-0"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-primary/10 rounded-lg z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of bespoke services to enhance your home with beautiful, handcrafted soft furnishings
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Bespoke Curtains" 
              description="Exquisite made-to-measure curtains tailored to your exact specifications and style preferences."
              image="/images/window_curtain-2.webp"
              link="/services/curtains"
              index={0}
            />
            <ServiceCard 
              title="Made-to-measure Blinds" 
              description="Custom blinds in a variety of styles including Roman, roller, vertical and Venetian blinds."
              image="/images/window_blind-3.webp"
              link="/services/blinds"
              index={1}
            />
            <ServiceCard 
              title="Soft Furnishings" 
              description="Beautiful cushions, throws, bedding and upholstery to complement your interiors."
              image="/images/sofa_seat-1.webp"
              link="/services/soft-furnishings"
              index={2}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-36"
          >
            <Link 
              href="/services" 
              className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-all hover:shadow-md"
            >
              View All Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-100 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we provide a complete and personal service
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaComments className="w-6 h-6 text-primary" />,
                title: "Consultation",
                description: "We begin with a detailed consultation to understand your vision, style preferences, and requirements."
              },
              {
                icon: <FaClock className="w-6 h-6 text-primary" />,
                title: "Design & Planning",
                description: "We'll help you select the perfect fabrics, styles, and finishes to complement your home."
              },
              {
                icon: <FaRulerCombined className="w-6 h-6 text-primary" />,
                title: "Crafting",
                description: "Your bespoke items are handcrafted with attention to detail in our Horsell studio."
              },
              {
                icon: <FaHeart className="w-6 h-6 text-primary" />,
                title: "Installation",
                description: "We professionally install your new furnishings, ensuring a perfect finish."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview */}
      <section className="py-20 bg-secondary/10 text-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif mb-4">Our Recent Work</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Browse a selection of our recent projects showcasing our craftsmanship and attention to detail
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/window_curtain-1.webp", alt: "Luxury curtains" },
              { src: "/images/window_blind-1.webp", alt: "Roman blinds" },
              { src: "/images/window_blind-4.webp", alt: "Venetian blinds" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-80 group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-white text-xl font-medium drop-shadow-md">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/portfolio" 
              className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-all hover:shadow-md"
            >
              View Full Portfolio
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/10 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-8"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Read what our clients have to say about their experience with Bramble & Bay Interiors
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial 
              quote="Suzy provided a bespoke service for our curtains, Roman blinds and soft furnishings. Initial meetings followed up by excellent communication. She has a real eye for detail & gave us great creative advice. We are thrilled with the results."
              author="Jessica & Phil"
              location="Horsell"
            />
            <Testimonial 
              quote="The curtains and soft furnishings created by Bramble and Bay Interiors have transformed our lounge. Suzy had an extensive range of fabrics and colours to choose from and understood what I was trying to create."
              author="Sally"
              location="Walton-on-Thames"
            />
            <Testimonial 
              quote="I would highly recommend Bramble & Bay Interiors! Suzy made some curtains and blinds for my living room. She showed me a wide range of fabrics to choose from and guided me through the whole process."
              author="Louise"
              location="Horsell"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/20 to-accent/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif mb-6 text-gray-900"
            >
              Ready to transform your space?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-700 mb-8 text-lg"
            >
              Contact us today to schedule a consultation and discover how Bramble & Bay Interiors can help create the perfect soft furnishings for your home.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-md font-medium transition-all hover:shadow-xl"
              >
                Get in Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
