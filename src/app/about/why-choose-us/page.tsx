'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaAngleRight, FaAward, FaHandshake, FaTools, FaGem, FaRegLightbulb, FaUsers } from 'react-icons/fa';

// Reason Component
const Reason = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-subtle border border-gray-100"
    >
      <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-secondary">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-medium text-primary mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Testimonial Component
const Testimonial = ({ 
  quote, 
  author, 
  location, 
  project,
  image, 
  index 
}: { 
  quote: string; 
  author: string; 
  location: string; 
  project: string;
  image: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-subtle border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={image} 
          alt={`${author}'s Project`} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-8">
        <p className="text-gray-700 mb-6 leading-relaxed italic">"{quote}"</p>
        <div>
          <p className="font-medium text-primary">{author}</p>
          <p className="text-gray-500 text-sm">{location}</p>
          <p className="text-secondary text-sm mt-1">{project}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Stat Component
const Stat = ({ 
  value, 
  label,
  index
}: { 
  value: string; 
  label: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-serif text-primary mb-3">{value}</p>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: FaAward,
      title: "Award-Winning Design",
      description: "Our designs have received recognition for their innovation, functionality, and aesthetic excellence, reflecting our commitment to superior kitchen design."
    },
    {
      icon: FaTools,
      title: "Master Craftsmanship",
      description: "Every kitchen we create is built with exceptional attention to detail by our skilled craftsmen, ensuring longevity and quality that stands the test of time."
    },
    {
      icon: FaRegLightbulb,
      title: "Bespoke Solutions",
      description: "We create truly custom kitchens tailored to your specific needs, preferences, and lifestyle, rather than offering modified standard designs."
    },
    {
      icon: FaHandshake,
      title: "End-to-End Service",
      description: "From initial consultation to final installation, we provide a comprehensive, stress-free service that handles every aspect of your project."
    },
    {
      icon: FaGem,
      title: "Premium Materials",
      description: "We source only the finest materials, hardware, and appliances, ensuring your kitchen is not only beautiful but durable and functional."
    },
    {
      icon: FaUsers,
      title: "Client-Centered Approach",
      description: "We listen carefully to your needs and preferences, ensuring that your personality and lifestyle are reflected in every aspect of your new kitchen."
    }
  ];
  
  const testimonials = [
    {
      quote: "Richard James Kitchens transformed our outdated kitchen into a stunning, functional space that has become the heart of our home. Their attention to detail and craftsmanship is exceptional.",
      author: "Sarah & David Thompson",
      location: "Surrey",
      project: "Contemporary Open-Plan Kitchen",
      image: "/images/about/why-choose-us/testimonial-1.jpg"
    },
    {
      quote: "Working with the team was a pleasure from start to finish. They listened to our needs and created a design that perfectly suited our period property while incorporating modern functionality.",
      author: "James Wilson",
      location: "Berkshire",
      project: "Traditional Country Kitchen",
      image: "/images/about/why-choose-us/testimonial-2.jpg"
    },
    {
      quote: "The attention to detail and quality of craftsmanship in our kitchen is outstanding. Richard James Kitchens exceeded our expectations and delivered a space that we love spending time in.",
      author: "Emma & Michael Davis",
      location: "Hampshire",
      project: "Luxury Modern Kitchen",
      image: "/images/about/why-choose-us/testimonial-3.jpg"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about/why-choose-us/hero.jpg"
            alt="Why Choose Richard James Kitchens" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              className="inline-block text-secondary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT US
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-6xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why Choose Us
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover what sets Richard James Kitchens apart and why 
              discerning homeowners trust us with their kitchen projects.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-primary mb-6">Our Commitment to Excellence</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Richard James Kitchens, we understand that your kitchen is more than just a functional space—it's the heart of your home, a reflection of your lifestyle, and a significant investment in your property.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                That's why we approach every project with an unwavering commitment to excellence, from the initial design consultation through to the final installation and beyond. We combine superior craftsmanship with innovative design to create kitchens that are not only beautiful but perfectly tailored to how you live and entertain.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When you choose Richard James Kitchens, you're choosing a partner who will listen carefully to your needs, respect your home, and deliver a kitchen that exceeds your expectations in both form and function.
              </p>
            </motion.div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-elevated"
              >
                <div className="aspect-[4/3]">
                  <Image 
                    src="/images/about/why-choose-us/intro.jpg" 
                    alt="Richard James Kitchens Craftsmanship" 
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reasons Grid Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Six Reasons to Choose Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              What makes Richard James Kitchens different from other kitchen companies
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Reason 
                key={reason.title}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-serif text-white mb-4"
              >
                By the Numbers
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-white/90"
              >
                Our commitment to excellence in numbers
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              <Stat value="25+" label="Years of Experience" index={0} />
              <Stat value="500+" label="Kitchens Installed" index={1} />
              <Stat value="98%" label="Client Satisfaction" index={2} />
              <Stat value="15" label="Design Awards" index={3} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Our Proven Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              A streamlined approach that ensures exceptional results
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep 
              number="01" 
              title="Initial Consultation" 
              description="We meet to discuss your vision, needs, and budget, getting a clear understanding of what you want to achieve." 
              index={0} 
            />
            <ProcessStep 
              number="02" 
              title="Design & Planning" 
              description="Our designers create detailed concepts and plans, collaborating closely with you to refine the perfect design." 
              index={1} 
            />
            <ProcessStep 
              number="03" 
              title="Crafting & Preparation" 
              description="Your kitchen is expertly crafted in our workshop, with every component made to precise specifications." 
              index={2} 
            />
            <ProcessStep 
              number="04" 
              title="Installation & Completion" 
              description="Our skilled installation team brings your design to life, ensuring a perfect finish and attention to every detail." 
              index={3} 
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Don't just take our word for it—hear from our satisfied clients
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                project={testimonial.project}
                image={testimonial.image}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery" 
              className="inline-flex items-center text-secondary font-medium hover:text-secondary-600 transition-colors"
            >
              Browse Our Project Gallery
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary rounded-xl p-10 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Ready to Start Your Journey?</h2>
              <p className="text-white/90 mb-8 relative z-10 max-w-2xl mx-auto">
                Contact us today to schedule a consultation and discover how Richard James Kitchens can transform your home with a bespoke kitchen designed specifically for you.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium relative z-10"
              >
                Book a Consultation
                <FaAngleRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// Process Step Component
const ProcessStep = ({ 
  number, 
  title, 
  description, 
  index 
}: { 
  number: string; 
  title: string; 
  description: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-xl shadow-subtle border border-gray-100 text-center"
    >
      <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white font-medium text-xl mx-auto mb-6">
        {number}
      </div>
      <h3 className="text-xl font-medium text-primary mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}; 