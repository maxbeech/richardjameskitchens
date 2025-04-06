'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaPinterest, FaHouzz, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="relative h-16 w-40">
              <Image 
                src="/images/logo.svg" 
                alt="Richard James Kitchens Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-300 mt-4">
              Richard James Kitchens specializes in crafting bespoke, handmade luxury kitchens, 
              combining traditional craftsmanship with innovative design for homes in Surrey, 
              London and beyond.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaPinterest className="w-5 h-5" />
              </a>
              <a href="https://houzz.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaHouzz className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 border-b border-gray-700 pb-2">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/collections" className="text-gray-300 hover:text-white transition-colors text-sm">Collections</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 border-b border-gray-700 pb-2">Our Collections</h3>
            <ul className="space-y-2">
              <li><Link href="/collections/bella" className="text-gray-300 hover:text-white transition-colors text-sm">Bella Range</Link></li>
              <li><Link href="/collections/wilton" className="text-gray-300 hover:text-white transition-colors text-sm">Wilton Range</Link></li>
              <li><Link href="/collections/zurfiz" className="text-gray-300 hover:text-white transition-colors text-sm">Zurfiz Range</Link></li>
              <li><Link href="/services/pantries" className="text-gray-300 hover:text-white transition-colors text-sm">Pantries</Link></li>
              <li><Link href="/services/boot-rooms" className="text-gray-300 hover:text-white transition-colors text-sm">Boot Rooms</Link></li>
              <li><Link href="/services/home-bars" className="text-gray-300 hover:text-white transition-colors text-sm">Home Bars</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 text-secondary mr-3 mt-1" />
                <span className="text-sm text-gray-300">Richard James Kitchens<br />123 Kitchen Street<br />Surrey, UK</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-4 h-4 text-secondary mr-3" />
                <a href="tel:07000123456" className="text-sm text-gray-300 hover:text-white transition-colors">
                  07000 123456
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-4 h-4 text-secondary mr-3" />
                <a href="mailto:info@richardjameskitchens.co.uk" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@richardjameskitchens.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Policies and Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-gray-400 mb-4 md:mb-0"
          >
            &copy; {new Date().getFullYear()} Richard James Kitchens. All rights reserved.
          </motion.p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-xs text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 