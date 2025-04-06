'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import FoxLogo from '@/components/ui/FoxLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FoxLogo width={40} height={40} className="text-white mr-3" />
              <div>
                <h3 className="text-xl font-bold">Bramble and Bay</h3>
                <p className="text-sm text-white/70">Established 1888</p>
              </div>
            </div>
            <p className="mb-4 text-white/80">
              A premier sporting venue with over 135 years of tradition, offering exceptional facilities for tennis and squash enthusiasts of all abilities.
            </p>
            <div className="flex space-x-4">
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
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={22} />
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
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tennis" className="text-white/70 hover:text-white transition-colors">
                  Tennis
                </Link>
              </li>
              <li>
                <Link href="/squash" className="text-white/70 hover:text-white transition-colors">
                  Squash
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-white/70 hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/70 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-white/20 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/70">123 Bramble Lane, Baytown, BT1 2CD</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/70">+44 (0) 1234 567890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@brambleandbay.com" className="text-white/70 hover:text-white transition-colors">
                  info@brambleandbay.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-white/20 pb-2">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-white/70">Monday - Friday</span>
                <span className="text-white">7:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Saturday</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Sunday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Bramble and Bay Tennis & Squash Club. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-white/60">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 