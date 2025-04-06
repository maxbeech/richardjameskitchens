'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTape, FaGem, FaPalette, FaHeart } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function SoftFurnishingsPage() {
  const furnishingTypes = [
    {
      title: 'Custom Cushions',
      description: 'Bespoke cushions in a variety of shapes, sizes, and fillings to add comfort and style to your home.',
      image: '/images/sofa_seat-1.webp',
      features: [
        'Made to your exact specifications',
        'Wide range of fabrics and trims',
        'Various filling options',
        'Custom embellishments available'
      ]
    },
    {
      title: 'Bespoke Throws & Bedspreads',
      description: 'Beautiful handmade throws and bedspreads that add texture, color, and warmth to your bedroom or living area.',
      image: '/images/sofa-zoom_in-1.jpeg',
      features: [
        'Custom sizes and designs',
        'Coordinating with other furnishings',
        'Variety of fabrics including quilted options',
        'Decorative details and edging'
      ]
    },
    {
      title: 'Chair & Stool Covers',
      description: 'Transform dining chairs, stools, and occasional furniture with made-to-measure covers that refresh your space.',
      image: '/images/chairs-1.webp',
      features: [
        'Perfect fit for any furniture piece',
        'Removable for easy cleaning',
        'Protective and decorative',
        'Coordinating with other soft furnishings'
      ]
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/sofa-zoom_in-1.jpeg" 
            alt="Bespoke Soft Furnishings by Bramble & Bay"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Soft Furnishings"
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
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">Beautiful Handmade Soft Furnishings</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Bramble & Bay Interiors, we create exquisite bespoke soft furnishings that add the perfect finishing touches to your home. From custom cushions and throws to chair covers and accessories, each piece is handcrafted to complement your interior design and reflect your personal style.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our made-to-measure soft furnishings are designed to enhance your space, adding color, texture, and comfort to every room. We work closely with you to select the perfect fabrics, trims, and designs that coordinate with your existing décor or create a completely new look.
              </p>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FaGem className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">Every piece is crafted using the finest fabrics and materials, ensuring exceptional quality and longevity.</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FaPalette className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Custom Design</h3>
                  <p className="text-gray-600">Tailored to your unique style and preferences, our soft furnishings perfectly complement your interior.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Soft Furnishing Services</h2>
              <p className="text-lg text-gray-600">
                Discover our range of bespoke soft furnishing services designed to enhance your home.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-20 max-w-6xl mx-auto">
            {furnishingTypes.map((type, index) => {
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
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Creative Process</h2>
              <p className="text-lg text-gray-600">
                From initial ideas to the final product, we guide you through every step of creating your perfect bespoke soft furnishings.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaPalette className="w-10 h-10 text-white" />,
                  title: 'Inspiration & Design',
                  description: 'We begin by discussing your ideas, preferences, and requirements, helping you envision the perfect soft furnishings for your space.'
                },
                {
                  icon: <FaTape className="w-10 h-10 text-white" />,
                  title: 'Fabric Selection',
                  description: 'Choose from our extensive range of premium fabrics, with expert guidance on textures, patterns, and colors that will best complement your interior.'
                },
                {
                  icon: <FaHeart className="w-10 h-10 text-white" />,
                  title: 'Craftsmanship',
                  description: 'Each piece is meticulously handcrafted in our Horsell studio with attention to detail, ensuring exceptional quality in every stitch.'
                },
                {
                  icon: <FaGem className="w-10 h-10 text-white" />,
                  title: 'The Perfect Finish',
                  description: 'Your bespoke soft furnishings are delivered and arranged in your home, transforming your space with beautiful, unique touches.'
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
                    className="bg-neutral-50 p-6 rounded-lg relative"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3 mt-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 md:h-full w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/sofa_seat-1.webp"
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
                    "Utterly invaluable service from Bramble and Bay. Meticulous accuracy on measuring all your bespoke requirements. Super helpful throughout the consulting process across, brands, fabric materials, design, and product care. Suzy and the team have a flair for design and a genuine caring approach when assisting you in ensuring all products sit beautifully with all aspects of your interiors."
                  </p>
                  <div>
                    <p className="font-medium text-gray-900">Holly</p>
                    <p className="text-gray-500">Horsell</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Additional Soft Furnishing Services</h2>
              <p className="text-lg text-gray-600">
                Complement your home with these additional bespoke services.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Headboards',
                description: 'Custom-made headboards in a variety of styles and fabrics to create a stunning focal point in your bedroom.',
                image: '/images/sofa-zoom_in-1.jpeg'
              },
              {
                title: 'Table Linens',
                description: 'Bespoke table runners, placemats, and napkins that add elegance to your dining space.',
                image: '/images/window_curtain-2.webp'
              },
              {
                title: 'Decorative Accessories',
                description: 'Handcrafted tiebacks, trimmings, and other decorative elements to add the finishing touches to your space.',
                image: '/images/chairs-1.webp'
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
                    <p className="text-gray-600">{service.description}</p>
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
              <h2 className="text-3xl font-serif text-white mb-6">Transform Your Space with Custom Soft Furnishings</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us to arrange a consultation and discover how our bespoke soft furnishings can add the perfect finishing touches to your home.
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