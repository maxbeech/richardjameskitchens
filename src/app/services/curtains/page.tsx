'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRuler, FaSwatchbook, FaRegHandshake, FaTools } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function CurtainsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/window_curtain-1.webp" 
            alt="Bespoke Curtains by Bramble & Bay"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Bespoke Curtains"
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
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 text-center">Beautiful Handmade Curtains</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Bramble & Bay Interiors, we create exquisite bespoke curtains tailored to your exact specifications. Each pair is handcrafted with precision and care in our Horsell studio, using premium fabrics and expert techniques to ensure a perfect fit and finish.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our made-to-measure curtains are designed to transform your space, adding warmth, texture, and style to any room. Whether you're looking for simple, elegant designs or something more elaborate, we work closely with you to create curtains that perfectly complement your interior design scheme.
              </p>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FaSwatchbook className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Premium Fabrics</h3>
                  <p className="text-gray-600">Access to an extensive range of high-quality fabrics, from luxurious silks and velvets to practical cottons and linens.</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <FaRuler className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Perfect Fit</h3>
                  <p className="text-gray-600">Precise measurements and expert craftsmanship ensure your curtains fit perfectly and hang beautifully.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Options & Styles */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Curtain Styles & Options</h2>
              <p className="text-lg text-gray-600">
                We offer a variety of curtain styles, headings, and customization options to perfectly suit your space and personal taste.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: 'Heading Types',
                  image: '/images/curtain-zoom_in-1.jpeg',
                  options: [
                    'Pencil Pleat',
                    'Pinch Pleat',
                    'Wave',
                    'Goblet',
                    'Eyelet',
                    'Tab Top'
                  ]
                },
                {
                  title: 'Lining Options',
                  image: '/images/window_curtain-2.webp',
                  options: [
                    'Standard Lining',
                    'Blackout Lining',
                    'Thermal Lining',
                    'Interlining',
                    'Acoustic Lining',
                    'Self-Lined (for sheers)'
                  ]
                }
              ].map((section, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <FadeIn key={section.title} delay={index * 0.2}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-64">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-serif text-primary mb-4">{section.title}</h3>
                        <ul ref={ref} className="space-y-2">
                          {section.options.map((option, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: 0.1 * i, duration: 0.4 }}
                              className="flex items-start"
                            >
                              <svg className="w-5 h-5 text-secondary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-gray-600">{option}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">The Curtain Making Process</h2>
              <p className="text-lg text-gray-600">
                From consultation to installation, we guide you through every step of creating your perfect bespoke curtains.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaRegHandshake className="w-10 h-10 text-white" />,
                  title: 'Consultation & Measurement',
                  description: 'We begin with an in-depth consultation to understand your style preferences and requirements. Precise measurements are taken to ensure a perfect fit for your windows.'
                },
                {
                  icon: <FaSwatchbook className="w-10 h-10 text-white" />,
                  title: 'Fabric Selection & Design',
                  description: "Choose from our extensive range of premium fabrics, with expert guidance on textures, patterns, and colors that will best suit your space. We'll help you select the perfect heading style and lining options."
                },
                {
                  icon: <FaTools className="w-10 h-10 text-white" />,
                  title: 'Handcrafted Production',
                  description: 'Each pair of curtains is expertly handcrafted in our Horsell studio with meticulous attention to detail, from cutting and sewing to pressing and finishing.'
                },
                {
                  icon: <FaRuler className="w-10 h-10 text-white" />,
                  title: 'Professional Installation',
                  description: 'We offer complete installation services to ensure your new curtains hang perfectly, including fitting tracks and poles if required. The final look is carefully dressed for that perfect finish.'
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

      {/* Testimonial */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 md:h-full w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/window_curtain-1.webp"
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
                    "The curtains created by Bramble and Bay Interiors have transformed our lounge. Suzy had an extensive range of fabrics and colours to choose from and understood what I was trying to create. The workmanship, speed of communication and attention to detail were all exemplary."
                  </p>
                  <div>
                    <p className="font-medium text-gray-900">Sally</p>
                    <p className="text-gray-500">Walton-on-Thames</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about our bespoke curtain making process and services.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How much fabric will I need for my curtains?",
                answer: "The amount of fabric needed depends on several factors including window size, heading style, pattern repeat, and the fullness you desire. We'll take accurate measurements of your windows and calculate the precise fabric requirements for you."
              },
              {
                question: "How long does it take to make bespoke curtains?",
                answer: "The timeline for bespoke curtains varies depending on the complexity of the design, fabric availability, and our current workload. Typically, the process takes 3-5 weeks from measurement to installation. We'll provide you with a more accurate timeframe during your consultation."
              },
              {
                question: "Do you offer fabric samples?",
                answer: "Yes, we can provide fabric samples to help you make your decision. This allows you to see how different fabrics look in your own home, under your lighting conditions, and alongside your existing décor."
              },
              {
                question: "What heading styles do you offer?",
                answer: "We offer a variety of heading styles including pencil pleat, pinch pleat, wave, goblet, eyelet, and tab top. During your consultation, we can discuss which style would best suit your windows and interior design preferences."
              }
            ].map((faq, index) => {
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
                  className="bg-neutral-50 rounded-lg p-6"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
              <h2 className="text-3xl font-serif text-white mb-6">Ready to Transform Your Windows?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us to arrange a consultation and discover how our bespoke curtains can elevate your home.
              </p>
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Request a Consultation
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