'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaAngleRight, 
  FaRegComments, 
  FaPencilRuler, 
  FaRulerCombined, 
  FaTruck, 
  FaTools, 
  FaRegSmile 
} from 'react-icons/fa';

// Process Step Component
const ProcessStep = ({ 
  icon: Icon, 
  title, 
  description, 
  number, 
  image, 
  isLast = false 
}: { 
  icon: React.ElementType;
  title: string; 
  description: string; 
  number: string; 
  image: string;
  isLast?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`md:order-1`}
        >
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-secondary">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-1">Step {number}</span>
              <h3 className="text-2xl font-serif text-primary">{title}</h3>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            {description}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`md:order-2`}
        >
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-elevated">
              <Image 
                src={image} 
                alt={title} 
                width={600} 
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </motion.div>
      </div>
      
      {!isLast && (
        <motion.div 
          className="absolute left-7 top-14 bottom-0 w-0.5 bg-gray-200"
          initial={{ height: 0 }}
          animate={inView ? { height: '100%' } : { height: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ marginLeft: '-1px' }}
        ></motion.div>
      )}
    </motion.div>
  );
};

// FAQ Item Component
const FAQItem = ({ 
  question, 
  answer,
  index
}: { 
  question: string; 
  answer: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <h3 className="text-lg font-medium text-primary mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </motion.div>
  );
};

export default function DesignProcess() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, 50]);
  
  const parallaxRef = useRef(null);
  
  const processSteps = [
    {
      icon: FaRegComments,
      title: "Initial Consultation",
      description: "Our journey together begins with a detailed consultation. We listen to your ideas, explore your style preferences, and understand how you use your kitchen. Whether in our showroom or at your home, this crucial step lays the foundation for a kitchen that perfectly reflects your needs and vision.",
      number: "01",
      image: "/images/general_photos_of_doors_in_kitchens_to_be_used_throughout/b6b4cf_fd9a4e77bd4c4e22a8a18eb3f25e50c5~mv2.jpg"
    },
    {
      icon: FaPencilRuler,
      title: "Design & Planning",
      description: "Our expert designers create detailed plans for your kitchen, including layouts, material choices, and finishes. We use state-of-the-art visualization tools to bring your kitchen to life before production begins. This collaborative process ensures every detail is perfect, from cabinet placement to lighting.",
      number: "02",
      image: "/images/products/bella_range/Final product in kitchen example photos/b6b4cf_a4902be5d6324dd894f48768287c0740~mv2.jpg"
    },
    {
      icon: FaRulerCombined,
      title: "Technical Survey",
      description: "Once the design is approved, our technical team conducts a detailed site survey, taking precise measurements and noting any structural considerations. This meticulous approach ensures a perfect fit for your bespoke kitchen, avoiding any surprises during installation.",
      number: "03",
      image: "/images/products/wilton_range/Final product in kitchen example photos/Kitchen 1.jpg"
    },
    {
      icon: FaTruck,
      title: "Manufacturing",
      description: "With designs finalized and measurements confirmed, our skilled craftsmen begin the manufacturing process. Each component is carefully crafted using traditional techniques combined with modern technology. We maintain the highest standards of quality control throughout production to ensure exceptional results.",
      number: "04",
      image: "/images/products/zurfiz_range/Final product in kitchen example photos/Modern Kitchen.jpg"
    },
    {
      icon: FaTools,
      title: "Professional Installation",
      description: "Our experienced installation team works efficiently to bring your kitchen to life. We coordinate all aspects of the installation, from plumbing and electrical work to the final fitting of cabinetry and appliances. Our attention to detail ensures that every element is perfectly installed.",
      number: "05",
      image: "/images/products/bella_range/Final product in kitchen example photos/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg"
    },
    {
      icon: FaRegSmile,
      title: "Completion & Aftercare",
      description: "Once installation is complete, we conduct a thorough inspection with you to ensure everything meets our high standards. We provide detailed information on caring for your new kitchen and remain available for any future questions or needs. Our commitment to quality extends well beyond installation.",
      number: "06",
      image: "/images/home_hero_slider/Zurfiz Range kitchen 1.jpg",
      isLast: true
    }
  ];
  
  const faqs = [
    {
      question: "How long does the entire process take from initial consultation to completion?",
      answer: "The timeline varies depending on the complexity of your project, but typically ranges from 8-12 weeks. During your consultation, we'll provide a more accurate timeline based on your specific requirements."
    },
    {
      question: "Can you work with my own architect or interior designer?",
      answer: "Absolutely. We're happy to collaborate with your chosen professionals to ensure a seamless integration of your kitchen with the overall design of your home."
    },
    {
      question: "Do you handle all aspects of the kitchen installation, including plumbing and electrical work?",
      answer: "Yes, we provide a comprehensive service that includes all aspects of installation. Our team coordinates plumbing, electrical work, and any other specialized services required for your project."
    },
    {
      question: "What happens if I need to make changes to the design after approval?",
      answer: "We understand that changes sometimes need to be made. Minor adjustments can often be accommodated without significant impact on timeline or budget. For more substantial changes, we'll discuss the implications and work with you to find the best solution."
    },
    {
      question: "Is there a warranty on your kitchens?",
      answer: "Yes, all our kitchens come with a comprehensive 10-year guarantee on cabinetry and workmanship, providing you with complete peace of mind."
    }
  ];
  
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/products/wilton_range/Final product in kitchen example photos/Kitchen 1.jpg" 
            alt="Richard James Kitchens Design Process" 
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, y }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Our Design <span className="text-secondary">Process</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From initial concept to final installation, we guide you through every step of creating your dream kitchen.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={introRef}
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-primary mb-6">
              A Seamless Journey to Your Dream Kitchen
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Richard James Kitchens, we believe that creating your perfect kitchen should be an enjoyable and 
              stress-free experience. Our proven six-step process is designed to guide you smoothly from initial 
              inspiration to final installation, ensuring exceptional results every time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of expert designers, craftsmen, and installers work together seamlessly, maintaining 
              clear communication throughout to ensure your vision is brought to life exactly as you imagined.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Process Timeline */}
      <section className="py-16 bg-neutral-50" ref={parallaxRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                number={step.number}
                image={step.image}
                isLast={step.isLast}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Answers to common questions about our design and installation process.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
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
      
      {/* Testimonial Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-xl shadow-elevated relative"
            >
              <div className="absolute -top-6 -left-6 text-secondary opacity-30 scale-150">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                "The entire process with Richard James Kitchens was seamless from start to finish. Their structured approach 
                meant we always knew what was happening and what to expect next. The design team's attention to detail 
                was impressive, and the installation team worked with precision and care. We're absolutely delighted 
                with our new kitchen."
              </p>
              
              <div className="flex items-center">
                <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary">
                    EM
                  </div>
                </div>
                <div>
                  <p className="font-medium text-primary">Emma & Mark Davidson</p>
                  <p className="text-gray-500 text-sm">Wilton Range Kitchen, Surrey</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/products/bella_range/Final product in kitchen example photos/b6b4cf_3e6faaf740fd40e8a290f6e412781b1c~mv2.jpg" 
            alt="Kitchen Background" 
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
              Ready to Begin Your Kitchen Journey?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/80 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to arrange a consultation with one of our expert designers 
              and take the first step toward your dream kitchen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                Book a Consultation
                <FaAngleRight className="ml-2" />
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium tracking-wide"
              >
                About Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 