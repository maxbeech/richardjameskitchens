'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRulerCombined, FaPencilRuler, FaHammer, FaRegHandshake, FaAngleRight } from 'react-icons/fa';

const HeroImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/home_hero_slider/Zurfiz Range kitchen 1.jpg',
    '/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg',
    '/images/home_hero_slider/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg',
    '/images/home_hero_slider/b6b4cf_c9c16089888546dc83bb7b4406d99d8d~mv2 (1).jpg',
    '/images/home_hero_slider/b6b4cf_2206f9c8b5a34fbfae9a79d8b8c5e9d3~mv2.jpg',
  ];

  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = 'none';
      progressBarRef.current.style.width = '0%';
      
      setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transition = 'width 6000ms linear';
          progressBarRef.current.style.width = '100%';
        }
      }, 10);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.div 
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.1,
          }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 7, ease: "easeInOut" }
          }}
        >
          <Image 
            src={image} 
            alt={`Richard James Kitchens - ${index + 1}`} 
            fill 
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      ))}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60"></div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          ref={progressBarRef}
          className="h-full bg-secondary"
        ></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Bespoke Luxury <span className="text-secondary">Kitchens</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Handmade with exceptional craftsmanship, designed to transform your home
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link 
              href="/collections" 
              className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
            >
              Explore Collections
              <FaAngleRight className="ml-2" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CollectionCard = ({ title, description, image, link }: { 
  title: string; 
  description: string; 
  image: string;
  link: string;
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
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] }}
      className="group relative overflow-hidden rounded-xl shadow-elevated h-full flex flex-col bg-white"
    >
      <div className="relative h-60 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8 pb-10 flex-grow">
        <h3 className="text-2xl font-medium text-primary mb-3 font-serif">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link 
          href={link}
          className="inline-flex items-center text-secondary font-medium hover:text-secondary-700 transition-colors mt-auto"
        >
          View Collection
          <FaAngleRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServiceFeature = ({ icon: Icon, title, description }: { 
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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-5 text-primary">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-medium text-primary mb-3 font-serif">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Testimonial = ({ quote, author, location }: { quote: string, author: string, location: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className="bg-white p-8 rounded-xl shadow-subtle"
    >
      <div className="mb-6 text-secondary/50">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">{quote}</p>
      <div className="flex items-center">
        <div className="ml-1">
          <span className="font-medium text-primary block">{author}</span>
          <span className="text-gray-500 text-sm">{location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleHeader = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  
  return (
    <>
      {/* Hero Section */}
      <HeroImageSlider />
      
      {/* About Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl font-serif text-primary mb-6">Craftsmanship & <span className="text-secondary">Innovation</span></h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                At Richard James Kitchens, we combine traditional craftsmanship with innovative design to create 
                bespoke kitchens that are both functional and beautiful. Every kitchen we create is handmade 
                with meticulous attention to detail.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Our skilled team of designers and craftsmen work closely with you throughout the entire process, 
                from initial concept to final installation, ensuring your kitchen perfectly reflects your style and meets your needs.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-secondary font-medium hover:text-secondary-700 transition-colors text-lg"
              >
                Learn more about us
                <FaAngleRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-elevated">
                <Image 
                  src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg" 
                  alt="Kitchen craftsmanship" 
                  width={600} 
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Collections Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Our Kitchen Collections</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore our range of bespoke kitchen collections, each offering unique style and exceptional quality.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CollectionCard 
              title="Bella Range" 
              description="A modern yet timeless design featuring clean lines and a variety of finishes to suit contemporary homes."
              image="/images/products/bella_range/Final product in kitchen example photos/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg" 
              link="/collections/bella"
            />
            <CollectionCard 
              title="Wilton Range" 
              description="Classic shaker style with a modern twist, offering elegant simplicity and versatile design options."
              image="/images/home_hero_slider/Wilton Range final product in kitchen example 2.jpg" 
              link="/collections/wilton"
            />
            <CollectionCard 
              title="Zurfiz Range" 
              description="Ultra-modern and sleek, featuring high-gloss finishes and innovative materials for the contemporary home."
              image="/images/home_hero_slider/Zurfiz Range kitchen 1.jpg" 
              link="/collections/zurfiz"
            />
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/gallery" 
              className="bg-transparent border-2 border-primary/30 hover:border-primary text-primary px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
            >
              View Our Gallery
              <FaAngleRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From consultation to installation, we provide a comprehensive service to create your perfect kitchen.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <ServiceFeature 
              icon={FaPencilRuler}
              title="Design" 
              description="Our experienced designers work with you to create a kitchen that's perfectly tailored to your needs and style."
            />
            <ServiceFeature 
              icon={FaRulerCombined}
              title="Craftsmanship" 
              description="Every kitchen is handmade by skilled craftsmen using the finest materials and attention to detail."
            />
            <ServiceFeature 
              icon={FaHammer}
              title="Installation" 
              description="Our professional installation team ensures your kitchen is fitted to the highest standards."
            />
            <ServiceFeature 
              icon={FaRegHandshake}
              title="Aftercare" 
              description="We provide excellent aftercare service to ensure your kitchen remains perfect for years to come."
            />
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-subtle text-center">
              <Image 
                src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/modern pantry.jpg" 
                alt="Luxury Pantry" 
                width={300} 
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-medium text-primary mb-2 font-serif">Pantries</h3>
              <p className="text-gray-600 mb-4">Elegant storage solutions to complement your kitchen</p>
              <Link href="/services/pantries" className="text-secondary hover:text-secondary-700 font-medium">Learn more</Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-subtle text-center">
              <Image 
                src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/modern boot room.jpg" 
                alt="Boot Room" 
                width={300} 
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-medium text-primary mb-2 font-serif">Boot Rooms</h3>
              <p className="text-gray-600 mb-4">Stylish and practical storage spaces for busy homes</p>
              <Link href="/services/boot-rooms" className="text-secondary hover:text-secondary-700 font-medium">Learn more</Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-subtle text-center">
              <Image 
                src="/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/modern home bar.jpg" 
                alt="Home Bar" 
                width={300} 
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-medium text-primary mb-2 font-serif">Home Bars</h3>
              <p className="text-gray-600 mb-4">Luxurious entertainment spaces for your home</p>
              <Link href="/services/home-bars" className="text-secondary hover:text-secondary-700 font-medium">Learn more</Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-primary mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Don't just take our word for it. Here's what our clients have to say about their experience with Richard James Kitchens.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial 
              quote="Richard James Kitchens transformed our home with a beautiful handcrafted kitchen that exceeds all our expectations. The craftsmanship is exceptional."
              author="Sarah Johnson"
              location="Surrey"
            />
            <Testimonial 
              quote="Working with the team was an absolute pleasure. They listened to our ideas and created a kitchen that's perfect for our family and entertaining."
              author="James Wilson"
              location="London"
            />
            <Testimonial 
              quote="The attention to detail and quality of the materials used is outstanding. Our kitchen is not just functional but a stunning feature of our home."
              author="Emma Thompson"
              location="Wimbledon"
            />
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/testimonials" 
              className="bg-transparent border-2 border-primary/30 hover:border-primary text-primary px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
            >
              Read More Testimonials
              <FaAngleRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
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
            >
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-10 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                Get in Touch
                <FaAngleRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
