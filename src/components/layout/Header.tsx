'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Tennis', 
    path: '/tennis',
    subItems: [
      { name: 'Playing', path: '/tennis/playing' },
      { name: 'Coaching', path: '/tennis/coaching' },
      { name: 'Booking Rules', path: '/tennis/booking-rules' },
    ] 
  },
  { 
    name: 'Squash', 
    path: '/squash',
    subItems: [
      { name: 'Playing', path: '/squash/playing' },
      { name: 'Coaching', path: '/squash/coaching' },
    ] 
  },
  { name: 'Social', path: '/social' },
  { name: 'Membership', path: '/membership' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
  { name: 'MYCOURTS', path: 'https://brambleandbay.mycourts.co.uk/', external: true }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center h-16">
              <div className="h-12 w-12 relative mr-3">
                <Image 
                  src="/images/fox-logo.svg" 
                  alt="Bramble and Bay Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-primary font-bold text-xl leading-tight">Bramble and Bay</span>
                <span className="text-sm text-gray-600 leading-tight">Est. 1888</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-secondary hover:bg-gray-100 
                        ${pathname?.startsWith(item.path) ? 'text-secondary' : 'text-gray-800'}`}
                    >
                      {item.name}
                      <span className="ml-1">▼</span>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className={`block px-4 py-2 text-sm hover:bg-gray-100 
                                ${pathname === subItem.path ? 'text-secondary font-medium' : 'text-gray-800'}`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-secondary hover:bg-gray-100 
                      ${
                        item.name === 'MYCOURTS' 
                          ? 'bg-primary text-white hover:bg-primary/90 hover:text-white' 
                          : pathname === item.path 
                            ? 'text-secondary' 
                            : 'text-gray-800'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
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

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`w-full text-left px-3 py-2 rounded-md text-base font-medium 
                        ${pathname?.startsWith(item.path) ? 'text-secondary' : 'text-gray-800'}`}
                    >
                      {item.name}
                      <span className="ml-1">▼</span>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className={`block px-3 py-2 rounded-md text-base font-medium 
                              ${pathname === subItem.path ? 'text-secondary' : 'text-gray-700'}`}
                            onClick={toggleMobileMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`block px-3 py-2 rounded-md text-base font-medium 
                      ${
                        item.name === 'MYCOURTS' 
                          ? 'bg-primary text-white' 
                          : pathname === item.path 
                            ? 'text-secondary' 
                            : 'text-gray-800'
                      }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 