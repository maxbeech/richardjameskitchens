'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRuler, FaToolbox, FaRegCheckCircle, FaRegStar } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function TracksAndPolesPage() {
  const productTypes = [
    {
      title: 'Decorative Curtain Poles',
      description: 'Elegant curtain poles that make a design statement while providing sturdy support for your curtains. Available in a variety of finishes and finial designs.',
      image: '/images/curtain_rail-zoom_in-1.webp',
      features: [
        'Available in wood, metal, and brass options',
        'Extensive range of decorative finials',
        'Various diameters to suit different curtain weights',
        'Custom lengths and bay window solutions'
      ]
    },
    {
      title: 'Discreet Curtain Tracks',
      description: 'Minimalist tracks that blend seamlessly with your interior, allowing your curtains to be the focal point while ensuring smooth operation.',
      image: '/images/window_curtain-1.webp',
      features: [
        'Ceiling or wall-mounted options',
        'Corded and uncorded variants',
        'Silent glide technology',
        'Suitable for wave, pinch pleat, and pencil pleat headings'
      ]
    },
    {
      title: 'Bay Window Solutions',
      description: 'Specialized tracks and poles designed specifically for bay windows, ensuring a perfect fit and smooth curtain operation around corners.',
      image: '/images/window_curtain-2.webp',
      features: [
        'Custom bent to match your exact bay window dimensions',
        'Flexible options for all bay window shapes',
        'Seamless corner solutions',
        'Professional measuring and installation'
      ]
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/curtain_rail-zoom_in-1.webp" 
            alt="Curtain Tracks and Poles by Bramble & Bay"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Tracks & Poles"
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
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">Quality Curtain Tracks & Poles</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Bramble & Bay Interiors, we offer a comprehensive range of high-quality curtain tracks and poles to perfectly complement your window treatments. Whether you're looking for a statement decorative pole or a discreet track system, we provide bespoke solutions tailored to your exact requirements.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our tracks and poles not only provide essential functionality for your curtains and blinds but also contribute to the overall aesthetic of your room. We guide you through the selection process, helping you choose the perfect combination of style, strength, and operation to suit your needs.
              </p>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FaRuler className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Precision Measurement</h3>
                  <p className="text-gray-600">Every track and pole is precisely measured to ensure a perfect fit for your windows.</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FaToolbox className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Professional Installation</h3>
                  <p className="text-gray-600">Expert installation ensures your tracks and poles function perfectly and look beautiful.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Track & Pole Systems</h2>
              <p className="text-lg text-gray-600">
                Discover our range of high-quality track and pole systems designed to enhance your window treatments.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-20 max-w-6xl mx-auto">
            {productTypes.map((type, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={type.title}
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
                          src={type.image}
                          alt={type.title}
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
                      <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">{type.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{type.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, i) => (
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

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Installation Process</h2>
              <p className="text-lg text-gray-600">
                From initial consultation to final installation, we ensure a seamless process for fitting your tracks and poles.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaRuler className="w-10 h-10 text-white" />,
                  title: 'Precise Measurement',
                  description: 'We take accurate measurements of your windows, considering factors such as window type, wall construction, and curtain weight to ensure the perfect solution.'
                },
                {
                  icon: <FaRegStar className="w-10 h-10 text-white" />,
                  title: 'Product Selection',
                  description: 'Based on your requirements and preferences, we help you select the ideal tracks or poles that combine functionality with your desired aesthetic.'
                },
                {
                  icon: <FaToolbox className="w-10 h-10 text-white" />,
                  title: 'Professional Installation',
                  description: 'Our skilled installers ensure your tracks and poles are fitted securely and precisely, with attention to every detail for a flawless finish.'
                },
                {
                  icon: <FaRegCheckCircle className="w-10 h-10 text-white" />,
                  title: 'Final Inspection',
                  description: 'We thoroughly check every aspect of the installation, ensuring smooth operation and perfect positioning before hanging your curtains.'
                }
              ].map((step, index) => {
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
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-primary mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-primary mb-4">Why Choose Our Tracks & Poles?</h2>
                <p className="text-lg text-gray-600">
                  Our track and pole systems offer a combination of quality, functionality, and design that set them apart:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Superior Quality',
                    description: 'We use only the highest quality materials and mechanisms, ensuring longevity and smooth operation.'
                  },
                  {
                    title: 'Bespoke Solutions',
                    description: 'Custom-made to your exact requirements, including special solutions for bay windows and unusual spaces.'
                  },
                  {
                    title: 'Design Expertise',
                    description: 'Our experienced team helps you select the perfect tracks or poles to complement your window treatments and interior design.'
                  },
                  {
                    title: 'Comprehensive Service',
                    description: 'From initial consultation to professional installation, we provide a complete service for peace of mind.'
                  }
                ].map((item, index) => {
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
                      className="flex items-start"
                    >
                      <div className="mr-3 mt-1">
                        <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-lg text-gray-600 italic">
                  "The attention to detail with the curtain rail installation was impressive. Everything works perfectly and looks beautiful."
                </p>
                <p className="mt-2 font-medium text-gray-900">Sarah, Woking</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Complete Your Window Treatments</h2>
              <p className="text-lg text-gray-600">
                Combine our track and pole services with our other bespoke offerings for a complete window treatment solution.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Bespoke Curtains',
                description: 'Custom-made curtains designed to perfectly complement your chosen tracks or poles.',
                link: '/services/curtains',
                image: '/images/window_curtain-1.webp'
              },
              {
                title: 'Made-to-Measure Blinds',
                description: 'Quality blinds in a variety of styles, fabrics, and finishes to suit any interior.',
                link: '/services/blinds',
                image: '/images/window_blind-1.webp'
              },
              {
                title: 'Soft Furnishings',
                description: 'Complete your window treatments with coordinating cushions, tiebacks, and other accessories.',
                link: '/services/soft-furnishings',
                image: '/images/sofa_seat-1.webp'
              }
            ].map((service, index) => {
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
                  className="bg-neutral-50 rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="relative h-48">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-medium text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
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
              <h2 className="text-3xl font-serif text-white mb-6">Ready to Enhance Your Window Treatments?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us to arrange a consultation and discover how our quality tracks and poles can elevate your curtains and blinds.
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