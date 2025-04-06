'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <FaPhone className="h-5 w-5 text-secondary" />,
      title: 'Phone',
      value: '07490 934251',
      link: 'tel:07490934251'
    },
    {
      icon: <FaEnvelope className="h-5 w-5 text-secondary" />,
      title: 'Email',
      value: 'suzy@brambleandbay.co.uk',
      link: 'mailto:suzy@brambleandbay.co.uk'
    },
    {
      icon: <FaMapMarkerAlt className="h-5 w-5 text-secondary" />,
      title: 'Studio Location',
      value: 'Horsell, Surrey, UK',
      link: 'https://maps.google.com/?q=Horsell,Surrey,UK'
    },
    {
      icon: <FaInstagram className="h-5 w-5 text-secondary" />,
      title: 'Instagram',
      value: '@brambleandbay',
      link: 'https://instagram.com/brambleandbay'
    },
    {
      icon: <FaFacebookF className="h-5 w-5 text-secondary" />,
      title: 'Facebook',
      value: 'Bramble & Bay Interiors',
      link: 'https://facebook.com/brambleandbay'
    }
  ];

  const services = [
    { value: '', label: 'Select a service' },
    { value: 'curtains', label: 'Curtains' },
    { value: 'blinds', label: 'Blinds' },
    { value: 'soft-furnishings', label: 'Soft Furnishings' },
    { value: 'tracks-and-poles', label: 'Tracks and Poles' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/window_curtain-1.webp" 
            alt="Contact Bramble & Bay Interiors"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Contact Us"
              className="text-5xl font-serif text-white font-medium max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
                <h2 className="text-3xl font-serif text-primary mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Ready to transform your space with beautiful handmade soft furnishings? Fill out the form below to discuss your project or request a consultation.
                </p>
                
                {submitSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6"
                  >
                    <p>Thank you for your message! We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : submitError ? (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
                    <p>Something went wrong. Please try again or contact us directly.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interest*
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      >
                        {services.map(service => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
            
            {/* Contact Information */}
            <div>
              <FadeIn delay={0.2}>
                <div className="mb-10">
                  <h2 className="text-3xl font-serif text-primary mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    We're based in Horsell, Surrey, and serve clients throughout Surrey and Hampshire. Get in touch using any of the following methods:
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <a 
                        key={index} 
                        href={item.link}
                        target={item.title === 'Studio Location' || item.title === 'Instagram' || item.title === 'Facebook' ? '_blank' : undefined}
                        rel={item.title === 'Studio Location' || item.title === 'Instagram' || item.title === 'Facebook' ? 'noopener noreferrer' : undefined}
                        className="flex items-start hover:text-primary transition-colors"
                      >
                        <div className="mr-4 mt-1 bg-primary/10 rounded-full p-2">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                          <p className="text-gray-600">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19987.275367245693!2d-0.6003235870086626!3d51.329177233693115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767334159a9e3d%3A0xc85ea225a8af7ebd!2sHorsell%2C%20Woking!5e0!3m2!1sen!2suk!4v1712410064863!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bramble & Bay Location"
                  ></iframe>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-primary mb-6">Studio Hours</h2>
              <p className="text-gray-600 mb-8">
                We're available for consultations by appointment at the following times:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto text-left">
                <div>
                  <h3 className="font-medium text-gray-900">Monday - Friday</h3>
                  <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Saturday</h3>
                  <p className="text-gray-600">By Appointment</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Sunday</h3>
                  <p className="text-gray-600">Closed</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Bank Holidays</h3>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Evening and weekend appointments may be available upon request.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 