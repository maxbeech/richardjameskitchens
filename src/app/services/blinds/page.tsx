'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaShieldAlt, FaSun, FaLeaf } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function BlindsPage() {
  const blindStyles = [
    {
      title: 'Roman Blinds',
      description: 'Elegant fabric blinds that fold up into neat horizontal pleats when raised, creating a sophisticated look for any room.',
      image: '/images/window_blind-1.webp',
      features: [
        'Available in a wide range of fabrics and patterns',
        'Blackout lining options available',
        'Ideal for traditional and contemporary interiors',
        'Perfect for adding softness to a window treatment'
      ]
    },
    {
      title: 'Roller Blinds',
      description: 'Simple, practical blinds that roll up neatly at the top of your window, offering a clean and minimal aesthetic.',
      image: '/images/window_blind-4.webp',
      features: [
        'Available in blackout, dimout, and sheer fabrics',
        'Space-saving and easy to operate',
        'Perfect for modern interiors',
        'Optional decorative bottom bars and pulls'
      ]
    },
    {
      title: 'Venetian Blinds',
      description: 'Horizontal slat blinds that can be tilted to control light and privacy with precision.',
      image: '/images/window_blind-2.webp',
      features: [
        'Available in wood, faux wood, and aluminum',
        'Excellent light control',
        'Various slat widths available',
        'Suitable for any room including bathrooms and kitchens'
      ]
    },
    {
      title: 'Vertical Blinds',
      description: 'Vertical fabric slats that can be rotated and drawn to one or both sides, perfect for large windows and patio doors.',
      image: '/images/window_blind-3.webp',
      features: [
        'Ideal for large windows and sliding doors',
        'Excellent light control and privacy',
        'Easy to maintain and clean',
        'Available in a wide range of fabrics'
      ]
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/window_blind-zoom_in-1.webp" 
            alt="Custom Blinds by Bramble & Bay"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Custom Blinds"
              className="text-5xl font-serif text-white font-medium max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">Handcrafted Made-to-Measure Blinds</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Bramble & Bay Interiors, we design and create beautiful made-to-measure blinds that combine functionality with style. Each blind is crafted to your exact specifications, ensuring a perfect fit for your windows and a perfect match for your interior design.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're looking for practical roller blinds, elegant Roman blinds, or versatile Venetian blinds, our bespoke service ensures that you get exactly what you need for your home. We guide you through the entire process, from selecting the right style and fabric to professional installation.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits of Custom Blinds */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Benefits of Custom Blinds</h2>
              <p className="text-lg text-gray-600">
                Discover the advantages of choosing made-to-measure blinds for your home.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaLightbulb className="h-10 w-10 text-secondary" />,
                  title: 'Precise Light Control',
                  description: 'Our custom blinds allow you to control the exact amount of light entering your room, from complete blackout to softly filtered natural light.'
                },
                {
                  icon: <FaShieldAlt className="h-10 w-10 text-secondary" />,
                  title: 'Privacy Protection',
                  description: 'Enhance your privacy while still enjoying your view with blinds designed to suit the specific requirements of each room.'
                },
                {
                  icon: <FaSun className="h-10 w-10 text-secondary" />,
                  title: 'UV Protection',
                  description: 'Protect your furniture and flooring from sun damage with blinds that filter harmful UV rays while still allowing light to enter.'
                },
                {
                  icon: <FaLeaf className="h-10 w-10 text-secondary" />,
                  title: 'Energy Efficiency',
                  description: 'Keep your home cooler in summer and warmer in winter with insulating blinds that help reduce energy costs.'
                }
              ].map((benefit, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <motion.div
                    ref={ref}
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm flex items-start"
                  >
                    <div className="mr-4 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blind Styles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Blind Styles</h2>
              <p className="text-lg text-gray-600">
                We offer a range of blind styles to suit every room and requirement. Each style can be customized with your choice of fabric, pattern, and operating mechanism.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-20 max-w-6xl mx-auto">
            {blindStyles.map((style, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={style.title}
                  ref={ref}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                      <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={style.image}
                          alt={style.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className={`${isEven ? '' : 'lg:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">{style.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{style.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {style.features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                              className="flex items-start"
                            >
                              <svg className="w-5 h-5 text-secondary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-gray-600">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Customization Options</h2>
              <p className="text-lg text-gray-600">
                Personalize your blinds with these custom options and additional features.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Motorization',
                description: 'Add convenience with remote-controlled or smart home-integrated motorized blinds, ideal for hard-to-reach windows.',
              },
              {
                title: 'Child Safety Features',
                description: 'All our blinds can be fitted with child-safe options, including cordless operation and breakaway cord connectors.',
              },
              {
                title: 'Thermal & Blackout',
                description: 'Enhance energy efficiency with thermal linings or achieve complete darkness with blackout options.',
              },
              {
                title: 'Decorative Trims',
                description: 'Add personality with decorative tapes, borders, pulls, and finishes that complement your interior design.',
              },
              {
                title: 'Shaped Windows',
                description: 'Custom solutions for arched, circular, or other non-rectangular windows for a perfect fit.',
              },
              {
                title: 'Perfect Fit Frames',
                description: 'Clip-in blinds that fit perfectly within uPVC window frames, ideal for tilt-and-turn windows and doors.',
              },
            ].map((option, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-neutral-50 p-8 md:p-10 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 md:h-full w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/window_blind-1.webp"
                      alt="Customer testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="mb-6 text-primary/30">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg italic">
                    "I would highly recommend Bramble & Bay Interiors! Suzy made some curtains and blinds for my living room. She showed me a wide range of fabrics to choose from and guided me through the whole process. The whole service from initial meeting to hanging them all was personable but professional. Suzy's workmanship is of the highest quality."
                  </p>
                  <div>
                    <p className="font-medium text-gray-900">Louise</p>
                    <p className="text-gray-500">Horsell</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-white mb-6">Ready to Enhance Your Windows?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us to arrange a consultation and discover how our custom blinds can transform your space.
              </p>
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 