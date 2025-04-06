'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaTools, FaUserCog, FaShieldAlt, FaCheckCircle, FaAngleRight } from 'react-icons/fa';

// Feature Component
const FeatureCard = ({ 
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
      className="flex gap-6 items-start"
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary flex items-center justify-center text-white font-medium text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-medium text-primary mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// FAQItem Component
const FAQItem = ({ 
  question, 
  answer, 
  index 
}: { 
  question: string; 
  answer: string; 
  index: number; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:mb-0 last:pb-0"
    >
      <h4 className="text-lg font-medium text-primary mb-3">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </motion.div>
  );
};

export default function Installation() {
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  
  const features = [
    {
      icon: FaTools,
      title: "Expert Installation",
      description: "Our skilled installation team has years of experience installing kitchens of all sizes and styles, ensuring flawless execution of your design."
    },
    {
      icon: FaUserCog,
      title: "Project Management",
      description: "A dedicated project manager oversees every aspect of your installation, coordinating tradespeople and ensuring timely completion."
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assurance",
      description: "We maintain the highest standards throughout the installation process, with quality checks at each stage to ensure exceptional results."
    },
    {
      icon: FaCheckCircle,
      title: "Complete Service",
      description: "From preparation to final clean-up, we handle every aspect of your kitchen installation for a stress-free experience."
    }
  ];
  
  const processSteps = [
    {
      number: "1",
      title: "Pre-Installation Preparation",
      description: "We prepare your space for installation, including any necessary demolition, plumbing or electrical work, and ensuring the area is ready for your new kitchen."
    },
    {
      number: "2",
      title: "Cabinet Installation",
      description: "Our skilled installers carefully position and secure your cabinets according to your design plan, ensuring perfect alignment and stability."
    },
    {
      number: "3",
      title: "Worktop Fitting",
      description: "We precisely measure, cut, and install your chosen worktops, creating perfect joins and ensuring proper sealing around sinks and appliances."
    },
    {
      number: "4",
      title: "Appliance Installation",
      description: "We safely install and connect all your kitchen appliances, ensuring they are properly integrated with your cabinetry and functioning correctly."
    },
    {
      number: "5",
      title: "Finishing Touches",
      description: "We complete your kitchen with all finishing elements, including handles, lighting, backsplashes, and any decorative features specified in your design."
    },
    {
      number: "6",
      title: "Final Inspection & Handover",
      description: "We conduct a thorough inspection of your completed kitchen and walk you through the space, explaining features and providing maintenance advice."
    }
  ];
  
  const faqs = [
    {
      question: "How long does a typical kitchen installation take?",
      answer: "The duration of a kitchen installation depends on the size and complexity of your project. A standard kitchen typically takes 1-2 weeks for installation, while more complex projects may take 3-4 weeks. Your project manager will provide a detailed timeline specific to your kitchen."
    },
    {
      question: "Do I need to empty my existing kitchen before installation begins?",
      answer: "Yes, we recommend clearing all items from your existing kitchen before our team arrives. This includes emptying cabinets, removing small appliances, and clearing countertops. This helps protect your belongings and allows our team to work efficiently."
    },
    {
      question: "Will I be without a kitchen during the installation?",
      answer: "Yes, during the installation process, you will have limited or no access to your kitchen. We recommend setting up a temporary kitchen area elsewhere in your home. Many clients use a combination of microwave, kettle, and small appliances during this period."
    },
    {
      question: "Do you handle plumbing and electrical work?",
      answer: "Yes, our installation service includes coordination of all necessary plumbing and electrical work. We work with qualified professionals to ensure all aspects of your kitchen installation comply with building regulations and safety standards."
    },
    {
      question: "What happens if there are issues during installation?",
      answer: "Your dedicated project manager will promptly address any issues that arise during installation. Our team is experienced in problem-solving and will work efficiently to resolve any unexpected challenges while keeping you informed throughout the process."
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/installation/hero.jpg"
            alt="Kitchen Installation" 
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
              OUR SERVICES
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-6xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Installation
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert installation services to bring your kitchen design to life
              with precision, care, and attention to detail.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium"
              >
                Schedule Your Installation
                <FaAngleRight className="ml-2" />
              </Link>
            </motion.div>
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
              <h2 className="text-3xl font-serif text-primary mb-6">Expert Kitchen Installation</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Richard James Kitchens, we understand that proper installation is crucial to the success of your kitchen project. Our professional installation service ensures that your beautifully designed kitchen is brought to life with the same attention to detail and quality craftsmanship that went into its design.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our experienced installation team works with precision and care, handling every aspect of your kitchen installation from preparation and demolition to fitting, finishing, and final clean-up.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We coordinate all necessary trades, including plumbing, electrical, and tiling, to provide a seamless, stress-free experience, transforming your kitchen space efficiently and with minimal disruption to your home.
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
                    src="/images/services/installation/installation-team.jpg" 
                    alt="Kitchen Installation Team" 
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-neutral-50" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Our Installation Service
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Professional installation with attention to every detail
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20" ref={processRef}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-serif text-primary mb-6"
              >
                Our Installation Process
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-10"
              >
                A structured approach to bringing your kitchen design to life
              </motion.p>
              
              <div className="space-y-10">
                {processSteps.slice(0, 3).map((step, index) => (
                  <ProcessStep 
                    key={step.title}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <div className="h-24 md:block hidden"></div>
              <div className="space-y-10">
                {processSteps.slice(3).map((step, index) => (
                  <ProcessStep 
                    key={step.title}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    index={index + 3}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
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
              Our Installation Gallery
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              See examples of our professional installation work
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GalleryItem 
              image="/images/services/installation/gallery-1.jpg" 
              title="Cabinet Installation" 
              index={0}
            />
            <GalleryItem 
              image="/images/services/installation/gallery-2.jpg" 
              title="Worktop Fitting" 
              index={1}
            />
            <GalleryItem 
              image="/images/services/installation/gallery-3.jpg" 
              title="Appliance Integration" 
              index={2}
            />
            <GalleryItem 
              image="/images/services/installation/gallery-4.jpg" 
              title="Finishing Details" 
              index={3}
            />
            <GalleryItem 
              image="/images/services/installation/gallery-5.jpg" 
              title="Complete Kitchen" 
              index={4}
            />
            <GalleryItem 
              image="/images/services/installation/gallery-6.jpg" 
              title="Island Installation" 
              index={5}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery" 
              className="inline-flex items-center text-secondary font-medium hover:text-secondary-600 transition-colors"
            >
              View More in Our Gallery
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20" ref={faqRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-6 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 text-center mb-12"
            >
              Common questions about our installation service
            </motion.p>
            
            <div className="bg-white rounded-xl p-8 shadow-subtle">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
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
              
              <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Ready to Install Your Dream Kitchen?</h2>
              <p className="text-white/90 mb-8 relative z-10 max-w-2xl mx-auto">
                Contact us today to discuss your kitchen project and learn more about our professional installation services.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium relative z-10"
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

// Gallery Item Component
const GalleryItem = ({ image, title, index }: { image: string; title: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden shadow-elevated"
    >
      <div className="relative aspect-[4/3] overflow-hidden group">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <p className="text-white font-medium p-6">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}; 