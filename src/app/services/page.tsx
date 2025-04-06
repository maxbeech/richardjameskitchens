'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';
import AnimatedText from '@/components/ui/animations/AnimatedText';

export default function ServicesPage() {
  const services = [
    {
      title: 'Bespoke Curtains',
      description: 'Custom-made curtains tailored to your exact specifications, crafted using premium fabrics and expert techniques for a perfect fit and finish.',
      image: '/images/window_curtain-1.webp',
      link: '/services/curtains',
      highlights: [
        'Made-to-measure for a perfect fit',
        'Extensive fabric selection',
        'Professional installation available',
        'Various heading styles and accessories'
      ]
    },
    {
      title: 'Custom Blinds',
      description: 'Handcrafted blinds in a variety of styles, from Roman and roller to Venetian and vertical, designed to complement your interior and provide precise light control.',
      image: '/images/window_blind-1.webp',
      link: '/services/blinds',
      highlights: [
        'Multiple blind styles available',
        'Blackout and light-filtering options',
        'Child-safe mechanisms',
        'Motorized solutions available'
      ]
    },
    {
      title: 'Soft Furnishings',
      description: 'Complete your interior design with our beautiful range of soft furnishings, including cushions, throws, and upholstery, all made to your specifications.',
      image: '/images/sofa_seat-1.webp',
      link: '/services/soft-furnishings',
      highlights: [
        'Bespoke cushions and covers',
        'Coordinating accessories',
        'Reupholstery services',
        'Custom bedding and throws'
      ]
    },
    {
      title: 'Tracks & Poles',
      description: 'High-quality curtain tracks and poles to complement your window treatments, from discreet tracks to statement finials and everything in between.',
      image: '/images/curtain_rail-zoom_in-1.webp',
      link: '/services/tracks-and-poles',
      highlights: [
        'Professional measurement and installation',
        'Bespoke bay window solutions',
        'Silent glide track systems',
        'Decorative and functional options'
      ]
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/window_curtain-2.webp" 
            alt="Bramble & Bay Services"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Our Services"
              className="text-5xl font-serif text-white font-medium max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                <AnimatedText text="Beautiful Handmade Soft Furnishings" />
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Bramble & Bay Interiors, we specialize in creating bespoke soft furnishings that add the perfect finishing touch to your home. From made-to-measure curtains and blinds to custom cushions and upholstery, every piece is handcrafted with care and precision in our Horsell studio.
              </p>
              <p className="text-lg text-gray-600">
                We offer a complete and personal service, working with clients across Surrey and Hampshire to create beautiful, functional, and unique window treatments and soft furnishings that perfectly complement your interior design.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                const isEven = index % 2 === 0;
                
                return (
                  <FadeIn key={service.title} delay={index * 0.1}>
                    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      <div className={`${isEven ? '' : 'lg:order-2'}`}>
                        <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6">
                              <Link 
                                href={service.link}
                                className="px-5 py-2.5 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md inline-flex items-center"
                              >
                                Learn More
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`${isEven ? '' : 'lg:order-1'}`}>
                        <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                        
                        <div className="mb-8">
                          <h4 className="text-lg font-medium text-gray-900 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.highlights.map((highlight, i) => (
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
                                <span className="text-gray-600">{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <Link 
                          href={service.link}
                          className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
                        >
                          Discover More
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Bespoke Process</h2>
              <p className="text-lg text-gray-600">
                From initial consultation to final installation, we guide you through each step of creating your perfect custom soft furnishings.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Consultation',
                  description: 'We begin with an in-depth discussion about your needs, preferences, and the specific requirements of your space.'
                },
                {
                  step: 2,
                  title: 'Design & Selection',
                  description: 'Choose from our extensive range of premium fabrics and finishes, with expert guidance to help you make the perfect selection.'
                },
                {
                  step: 3,
                  title: 'Crafting',
                  description: 'Each piece is handmade in our studio with meticulous attention to detail, ensuring exceptional quality in every stitch.'
                },
                {
                  step: 4,
                  title: 'Installation',
                  description: 'We carefully install your bespoke creations, ensuring a perfect fit and finish to complete the transformation of your space.'
                }
              ].map((step, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <motion.div
                    ref={ref}
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-neutral-50 p-6 rounded-lg relative"
                  >
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3 mt-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">
                We take pride in our craft and the satisfaction of our clients. Here's what some of them have to say about their experience with Bramble & Bay Interiors.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Suzy provided a bespoke service for our curtains, Roman blinds and soft furnishings. Initial meetings followed up by excellent communication. She has a real eye for detail & gave us great creative advice.",
                author: "Jessica & Phil",
                location: "Horsell"
              },
              {
                quote: "The curtains and soft furnishings created by Bramble and Bay Interiors have transformed our lounge. The workmanship, speed of communication and attention to detail were all exemplary.",
                author: "Sally",
                location: "Walton-on-Thames"
              },
              {
                quote: "I would thoroughly recommend Suzy and Bramble & Bay Interiors; fantastic service from start to finish. Suzy provided professional help and guidance helping us to choose fabrics that complimented the style of the room.",
                author: "Davina",
                location: "Hook Heath"
              }
            ].map((testimonial, index) => {
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
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="mb-4 text-primary/30">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900">{testimonial.author}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500">{testimonial.location}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-white mb-6">Ready to Transform Your Space?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us to discuss your project and discover how our bespoke soft furnishings can elevate your home.
              </p>
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Get in Touch
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