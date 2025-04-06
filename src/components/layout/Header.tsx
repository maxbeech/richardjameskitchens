'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    path: '/about',
  },
  { 
    name: 'Services', 
    path: '/services',
    subItems: [
      { name: 'Our Services', path: '/services' },
      { name: 'Curtains', path: '/services/curtains' },
      { name: 'Blinds', path: '/services/blinds' },
      { name: 'Soft Furnishings', path: '/services/soft-furnishings' },
      { name: 'Tracks and Poles', path: '/services/tracks-and-poles' },
    ] 
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header 
      ref={ref}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-black/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <div className="h-16 w-16 relative">
                <Image 
                  src="/images/logo.png" 
                  alt="Bramble & Bay Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-secondary 
                        ${pathname?.startsWith(item.path) ? 'text-secondary' : scrolled ? 'text-gray-800' : 'text-white'}`}
                    >
                      {item.name}
                      <span className="ml-1 text-xs">▼</span>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className={`block px-4 py-3 text-sm transition-colors hover:bg-gray-50 hover:text-secondary 
                                  ${pathname === subItem.path ? 'text-secondary font-medium bg-gray-50' : 'text-gray-800'}`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-secondary
                      ${pathname === item.path ? 'text-secondary' : scrolled ? 'text-gray-800' : 'text-white'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="ml-2 px-5 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md"
              >
                Get a Quote
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-800 hover:text-secondary focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Top contact bar - moved to bottom of header */}
      <div className={`hidden md:block bg-primary/90 text-white transition-all duration-300 mt-2 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-end items-center space-x-6 text-sm">
            <a href="tel:07490934251" className="flex items-center hover:text-gray-200 transition-colors">
              <FaPhone className="h-3 w-3 mr-2" />
              <span>07490 934251</span>
            </a>
            <a href="mailto:suzy@brambleandbay.co.uk" className="flex items-center hover:text-gray-200 transition-colors">
              <FaEnvelope className="h-3 w-3 mr-2" />
              <span>suzy@brambleandbay.co.uk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 bg-white z-40 pt-20"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1 border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`w-full text-left px-3 py-3 rounded-md text-base font-medium flex justify-between items-center
                          ${pathname?.startsWith(item.path) ? 'text-secondary' : 'text-gray-800'}`}
                      >
                        {item.name}
                        <span className="ml-1 text-xs">▼</span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.path}
                                className={`block px-3 py-3 rounded-md text-base font-medium border-l-2 border-gray-200
                                  ${pathname === subItem.path ? 'text-secondary border-secondary' : 'text-gray-700'}`}
                                onClick={toggleMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block px-3 py-3 rounded-md text-base font-medium
                        ${pathname === item.path ? 'text-secondary' : 'text-gray-800'}`}
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 