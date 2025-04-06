'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaClipboardCheck, FaRuler, FaPencilRuler, FaPalette, FaAngleRight } from 'react-icons/fa';

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
  title, 
  description, 
  image,
  index 
}: { 
  title: string; 
  description: string; 
  image: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-8 items-center"
    >
      <div className="md:w-1/3">
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-elevated">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-2xl font-serif text-primary mb-4">{index + 1}. {title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default function DesignConsultation() {
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  
  const features = [
    {
      icon: FaClipboardCheck,
      title: "Personalized Assessment",
      description: "We conduct a thorough assessment of your space, needs, and lifestyle to create a kitchen design that works perfectly for you."
    },
    {
      icon: FaRuler,
      title: "Detailed Measurements",
      description: "Our designers take precise measurements of your space to ensure your new kitchen fits perfectly and makes the most of available space."
    },
    {
      icon: FaPencilRuler,
      title: "Professional Design",
      description: "Our experienced designers create detailed 2D plans and stunning 3D visualizations to help you see your new kitchen before it's built."
    },
    {
      icon: FaPalette,
      title: "Material Selection",
      description: "We guide you through our extensive range of materials, finishes, and hardware options to help you choose the perfect combination for your kitchen."
    }
  ];
  
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "The design journey begins with a conversation about your vision, preferences, and requirements for your new kitchen. We discuss your cooking habits, storage needs, aesthetic preferences, and budget considerations to establish a clear foundation for the design process.",
      image: "/images/services/design-consultation/consultation.jpg"
    },
    {
      title: "Site Visit & Measurements",
      description: "Our design team visits your home to take detailed measurements of your space and assess any structural considerations. We examine plumbing and electrical layouts, window and door positions, and other architectural features that will influence the design.",
      image: "/images/services/design-consultation/measurement.jpg"
    },
    {
      title: "Concept Development",
      description: "Based on our discussions and site assessment, we develop initial design concepts for your kitchen. This includes proposed layouts, material selections, and preliminary 3D visualizations to help you envision the space.",
      image: "/images/services/design-consultation/concept.jpg"
    },
    {
      title: "Design Refinement",
      description: "We collaborate with you to refine the initial concepts, incorporating your feedback and making adjustments to ensure the design perfectly aligns with your vision and functional requirements.",
      image: "/images/services/design-consultation/refinement.jpg"
    },
    {
      title: "Final Design Presentation",
      description: "Once the design is finalized, we present you with detailed plans, 3D visualizations, material samples, and a comprehensive quote. This gives you a complete understanding of how your new kitchen will look, feel, and function.",
      image: "/images/services/design-consultation/presentation.jpg"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/design-consultation/hero.jpg"
            alt="Kitchen Design Consultation" 
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
              Design Consultation
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert guidance and creative vision to bring your dream kitchen to life,
              from initial concept to final design.
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
                Book a Consultation
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
              <h2 className="text-3xl font-serif text-primary mb-6">Creating Your Perfect Kitchen</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Richard James Kitchens, our design consultation service is the essential first step in creating your perfect kitchen. We believe that a well-designed kitchen should be both beautiful and functional, reflecting your personal style while meeting your practical needs.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our experienced design team works closely with you to understand your vision, lifestyle, and requirements, guiding you through every aspect of the design process from initial concept to final plans.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're planning a complete kitchen renovation or updating an existing space, our design consultation service provides the expert guidance and creative vision you need to make informed decisions and achieve exceptional results.
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
                    src="/images/services/design-consultation/designer-with-client.jpg" 
                    alt="Kitchen Design Consultation" 
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
              Our Design Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              Comprehensive design solutions tailored to your vision
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-primary mb-4"
            >
              Our Design Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700"
            >
              A collaborative journey from concept to creation
            </motion.p>
          </div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={step.title}
                title={step.title}
                description={step.description}
                image={step.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Visualization Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-elevated"
              >
                <div className="aspect-square">
                  <Image 
                    src="/images/services/design-consultation/3d-visualization.jpg" 
                    alt="Kitchen 3D Visualization" 
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-primary mb-6">3D Visualization</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our state-of-the-art 3D visualization technology allows you to see your new kitchen in stunning detail before construction begins. This immersive experience helps you understand how your kitchen will look, feel, and function, allowing for refinements at the design stage.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                You'll be able to explore different design options, material combinations, and layout configurations to ensure your final kitchen design perfectly aligns with your vision.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This powerful visualization tool eliminates uncertainty and gives you complete confidence in your design decisions, ensuring a smooth transition from concept to construction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary rounded-xl p-10 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-3xl font-serif text-white mb-6">Ready to Start Your Design Journey?</h2>
                  <p className="text-white/90 mb-8 leading-relaxed">
                    Book a consultation with our design team to discuss your kitchen project. Our expert designers will guide you through the process, from initial concept to final design.
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium"
                  >
                    Schedule a Consultation
                    <FaAngleRight className="ml-2" />
                  </Link>
                </div>
                
                <div className="hidden md:block">
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src="/images/services/design-consultation/designer-working.jpg" 
                      alt="Kitchen Designer Working" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 