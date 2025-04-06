'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaAngleRight, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Team Member Component
const TeamMember = ({ 
  name, 
  role, 
  bio, 
  image, 
  linkedin = '',
  email = '',
  index 
}: { 
  name: string; 
  role: string; 
  bio: string; 
  image: string; 
  linkedin?: string;
  email?: string;
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
      className="rounded-xl overflow-hidden bg-white shadow-subtle border border-gray-100"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-primary mb-1">{name}</h3>
        <p className="text-secondary mb-4">{role}</p>
        <p className="text-gray-600 mb-5 leading-relaxed">{bio}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            >
              <FaLinkedin />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`}
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            >
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Value Component
const Value = ({ 
  title, 
  description, 
  icon: Icon, 
  index 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
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
      className="p-6 bg-white rounded-xl shadow-subtle border border-gray-100"
    >
      <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-secondary mb-6">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-medium text-primary mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "Richard James",
      role: "Founder & Design Director",
      bio: "With over 25 years in luxury kitchen design, Richard founded Richard James Kitchens to bring his vision of exceptional craftsmanship and personalized design to discerning clients.",
      image: "/images/about/team/richard-james.jpg",
      linkedin: "https://linkedin.com/in/richardjames",
      email: "richard@richardjameskitchens.co.uk"
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Designer",
      bio: "Sarah combines her background in interior architecture with a passion for innovative kitchen design to create spaces that are both beautiful and supremely functional.",
      image: "/images/about/team/sarah-mitchell.jpg",
      linkedin: "https://linkedin.com/in/sarahmitchell",
      email: "sarah@richardjameskitchens.co.uk"
    },
    {
      name: "James Wilson",
      role: "Head of Installation",
      bio: "James leads our installation team with an unwavering commitment to precision and craftsmanship, ensuring every project is executed to the highest standard.",
      image: "/images/about/team/james-wilson.jpg",
      email: "james@richardjameskitchens.co.uk"
    },
    {
      name: "Emily Thompson",
      role: "Client Relationship Manager",
      bio: "Emily ensures a seamless experience from initial consultation to final installation, providing exceptional communication and support throughout your journey with us.",
      image: "/images/about/team/emily-thompson.jpg",
      email: "emily@richardjameskitchens.co.uk"
    },
    {
      name: "Michael Davis",
      role: "Technical Designer",
      bio: "Michael's expertise in technical design and cutting-edge kitchen technology ensures that our designs are as innovative and functional as they are beautiful.",
      image: "/images/about/team/michael-davis.jpg",
      linkedin: "https://linkedin.com/in/michaeldavis",
      email: "michael@richardjameskitchens.co.uk"
    },
    {
      name: "Catherine Brown",
      role: "Materials Specialist",
      bio: "Catherine's deep knowledge of materials, finishes, and sustainable practices helps our clients make informed choices that align with their aesthetic preferences and values.",
      image: "/images/about/team/catherine-brown.jpg",
      email: "catherine@richardjameskitchens.co.uk"
    }
  ];
  
  // Import icons
  const { FaTools, FaRegHandshake, FaGem, FaLeaf } = require('react-icons/fa');
  
  const values = [
    {
      title: "Master Craftsmanship",
      description: "We uphold the traditions of exceptional craftsmanship while embracing innovative techniques to create kitchens of enduring quality and beauty.",
      icon: FaTools
    },
    {
      title: "Client-Centered Approach",
      description: "We listen carefully to understand your unique needs and preferences, ensuring that every element of your kitchen reflects your lifestyle and vision.",
      icon: FaRegHandshake
    },
    {
      title: "Uncompromising Quality",
      description: "From the finest materials to the smallest details, we maintain the highest standards of quality in every aspect of our design and installation process.",
      icon: FaGem
    },
    {
      title: "Sustainable Practices",
      description: "We are committed to environmentally responsible practices, sourcing sustainable materials and minimizing waste in our manufacturing process.",
      icon: FaLeaf
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about/team/hero.jpg"
            alt="Our Team" 
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
              Meet Our Team
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The passionate experts behind Richard James Kitchens, dedicated to bringing 
              your dream spaces to life with skill, creativity, and exceptional care.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl font-serif text-primary mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              A Team of Dedicated Professionals
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Richard James Kitchens, our team brings together decades of experience in kitchen design, 
              craftsmanship, and installation. Each member contributes unique expertise and shares a common 
              passion for creating exceptional spaces that transform how our clients live and entertain.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Team Grid Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                linkedin={member.linkedin}
                email={member.email}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl font-serif text-primary mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              These principles guide everything we do, from our design process to our client relationships.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Value 
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-10 md:p-16 text-center shadow-elevated border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <h2 className="text-3xl font-serif text-primary mb-6 relative z-10">Join Our Team</h2>
              <p className="text-gray-700 mb-8 relative z-10 max-w-2xl mx-auto leading-relaxed">
                We're always looking for talented individuals who share our passion for exceptional design and craftsmanship. 
                If you're interested in joining the Richard James Kitchens team, we'd love to hear from you.
              </p>
              <Link 
                href="/careers" 
                className="bg-secondary text-white hover:bg-secondary-600 px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center justify-center font-medium relative z-10"
              >
                View Open Positions
                <FaAngleRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20">
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
              
              <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Ready to Work With Our Team?</h2>
              <p className="text-white/90 mb-8 relative z-10 max-w-2xl mx-auto">
                Contact us today to schedule a consultation and discover how our expert team can bring your vision to life.
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