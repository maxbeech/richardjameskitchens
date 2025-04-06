'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHeart, FaRulerCombined, FaRuler } from 'react-icons/fa';
import { MdOutlineHandshake } from 'react-icons/md';
import HistoricTimeline from '@/components/ui/HistoricTimeline';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function AboutPage() {
  const [valueRef, valueInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  const valueItems = [
    {
      icon: <FaRulerCombined className="h-10 w-10 text-secondary" />,
      title: 'Precision Craftsmanship',
      description: 'Every kitchen we create is built with meticulous attention to detail, ensuring a perfect fit for your space.'
    },
    {
      icon: <FaRuler className="h-10 w-10 text-secondary" />,
      title: 'Bespoke Service',
      description: 'We offer a completely personalized experience, tailoring each kitchen to your unique taste and requirements.'
    },
    {
      icon: <FaHeart className="h-10 w-10 text-secondary" />,
      title: 'Passion for Quality',
      description: 'We use only premium materials, creating kitchens that stand the test of time.'
    },
    {
      icon: <MdOutlineHandshake className="h-10 w-10 text-secondary" />,
      title: 'Client Collaboration',
      description: 'We believe in working closely with you throughout the process, ensuring your vision comes to life exactly as you imagined.'
    },
  ];

  const timelineEvents = [
    {
      year: 1,
      title: 'Consultation',
      description: 'We begin with an in-depth consultation to understand your style, preferences, and the unique requirements of your space.'
    },
    {
      year: 2,
      title: 'Design',
      description: 'From material selection to finalizing designs, we work together to create kitchens that perfectly complement your home.'
    },
    {
      year: 3,
      title: 'Crafting',
      description: 'Each kitchen is handmade with precision and care, ensuring exceptional quality in every detail.'
    },
    {
      year: 4,
      title: 'Installation',
      description: 'We handle the professional installation of your bespoke kitchen, completing the transformation of your space.'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg" 
            alt="Richard James Kitchens craftsmanship"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="About Richard James Kitchens"
              className="text-5xl font-serif text-white font-medium max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Richard James Kitchens was born from a passion for beautiful, handcrafted kitchens and a commitment to exceptional quality and personal service.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We specialize in creating bespoke kitchen solutions that transform spaces and add unique, elegant finishing touches to your home. Each kitchen is made-to-measure and handcrafted with meticulous attention to detail.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Working with clients across Surrey and London, we pride ourselves on offering a complete and personalized service, guiding you through every step of the process from initial consultation and material selection to final installation.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg"
                  alt="Richard James Kitchens Workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Richard James Kitchens, we're dedicated to exceptional craftsmanship, attention to detail, and a truly personalized service for every client.
              </p>
            </FadeIn>
          </div>
          
          <div 
            ref={valueRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valueItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={valueInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-neutral-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From the initial consultation to the final installation, we guide you through each step of creating your perfect bespoke kitchen.
              </p>
            </FadeIn>
          </div>
          
          <HistoricTimeline events={timelineEvents} />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_c655d542c4cc46e2bb444fde3a8f03ae~mv2.jpg"
                  alt="Richard James Kitchens Team"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Meet the Team</h2>
              <p className="text-lg text-gray-700 mb-4">
                Richard James Kitchens is led by a team of experienced kitchen designers and craftsmen with a passion for creating exceptional bespoke kitchens. With an eye for detail and a commitment to quality, our team has established a reputation for creating beautiful kitchen solutions that exceed client expectations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our designers bring years of expertise to every project, working closely with clients to understand their unique needs and transform their ideas into stunning, functional spaces. Meanwhile, our skilled craftsmen ensure that every kitchen is built to the highest standards using the finest materials.
              </p>
              <p className="text-lg text-gray-700">
                Together, we're dedicated to delivering a seamless experience from start to finish, guiding you through the entire process with professionalism and care.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch to discuss your project and discover how our bespoke kitchen solutions can elevate your home.
            </p>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 