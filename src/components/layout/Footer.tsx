'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-6"
            >
              <div className="h-12 w-12 relative mr-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Bramble & Bay Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl">Bramble & Bay</h3>
                <p className="text-sm text-white/70">Interiors</p>
              </div>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 text-white/80"
            >
              Beautiful handmade, made-to-measure curtains, blinds and soft furnishings, designed to add gorgeous and unique finishing touches to your home.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={22} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-medium mb-5 border-b border-white/20 pb-2"
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/services/curtains" className="text-white/70 hover:text-white transition-colors">
                  Curtains
                </Link>
              </li>
              <li>
                <Link href="/services/blinds" className="text-white/70 hover:text-white transition-colors">
                  Blinds
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-medium mb-5 border-b border-white/20 pb-2"
            >
              Contact Info
            </motion.h3>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-white mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/70">Horsell Studio, Surrey</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-white mt-1 mr-3 flex-shrink-0" />
                <a href="tel:07490934251" className="text-white/70 hover:text-white transition-colors">
                  07490 934251
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-white mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:suzy@brambleandbay.co.uk" className="text-white/70 hover:text-white transition-colors">
                  suzy@brambleandbay.co.uk
                </a>
              </li>
              <li className="flex items-start">
                <FaClock className="text-white mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/70">By appointment only</span>
              </li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-medium mb-5 border-b border-white/20 pb-2"
            >
              Our Services
            </motion.h3>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <li className="text-white/70">Bespoke Curtains</li>
              <li className="text-white/70">Made-to-measure Blinds</li>
              <li className="text-white/70">Roman Blinds</li>
              <li className="text-white/70">Soft Furnishings</li>
              <li className="text-white/70">Cushions & Accessories</li>
              <li className="text-white/70">Tracks and Poles</li>
              <li className="text-white/70">Home Consultations</li>
            </motion.ul>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t border-white/10 mt-12"
      >
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Bramble & Bay Interiors. All Rights Reserved.
            </p>
            <div className="flex space-x-4 text-sm text-white/60">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span className="text-white/30">Website by <a href="#" className="text-white/60 hover:text-white transition-colors">Maxed Labs</a></span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
} 