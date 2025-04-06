'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Define portfolio projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'Elegant Living Room Transformation',
      location: 'Woking, Surrey',
      description: 'A complete soft furnishing transformation of this elegant Surrey living room, including made-to-measure curtains in a luxurious ivory fabric and coordinating cushions.',
      categories: ['curtains', 'soft-furnishings'],
      image: '/images/window_curtain-1.webp',
      testimonial: 'The curtains and soft furnishings created by Bramble and Bay Interiors have transformed our lounge. Suzy had an extensive range of fabrics and colours to choose from and understood what I was trying to create.',
      client: 'Sally, Walton-on-Thames'
    },
    {
      id: 2,
      title: 'Modern Roman Blinds',
      location: 'Horsell, Surrey',
      description: 'Custom-made Roman blinds created for this contemporary home office, providing both style and functionality with a modern floral pattern.',
      categories: ['blinds'],
      image: '/images/window_blind-1.webp',
      testimonial: 'I would highly recommend Bramble & Bay Interiors! Suzy made some curtains and blinds for my living room. She showed me a wide range of fabrics to choose from and guided me through the whole process.',
      client: 'Louise, Horsell'
    },
    {
      id: 3,
      title: 'Bespoke Bedroom Curtains',
      location: 'Hampshire',
      description: 'Luxurious floor-to-ceiling bedroom curtains with blackout lining, creating a peaceful sanctuary with elegant draping and premium fabrics.',
      categories: ['curtains'],
      image: '/images/window_curtain-2.webp',
      testimonial: 'The bedroom curtains are absolutely beautiful and the craftsmanship is impeccable. They hang perfectly and have completely transformed the space.',
      client: 'Emma, Hampshire'
    },
    {
      id: 4,
      title: 'Custom Venetian Blinds',
      location: 'Hook Heath',
      description: 'Tailor-made Venetian blinds providing precise light control for this modern kitchen, combining both functionality and style.',
      categories: ['blinds'],
      image: '/images/window_blind-2.webp',
      testimonial: 'I would thoroughly recommend Suzy and Bramble & Bay Interiors; fantastic service from start to finish. Suzy provided professional help and guidance helping us to choose fabrics that complimented the style of the room.',
      client: 'Davina, Hook Heath'
    },
    {
      id: 5,
      title: 'Decorative Cushions Collection',
      location: 'Horsell, Surrey',
      description: 'A collection of handmade decorative cushions created to complement existing décor, adding color and texture to this family living space.',
      categories: ['soft-furnishings'],
      image: '/images/sofa_seat-1.webp',
      testimonial: 'Utterly invaluable service from Bramble and Bay. Meticulous accuracy on measuring all your bespoke requirements. Suzy and the team have a flair for design and a genuine caring approach.',
      client: 'Holly, Horsell'
    },
    {
      id: 6,
      title: 'Contemporary Vertical Blinds',
      location: 'Surrey',
      description: 'Made-to-measure vertical blinds designed for these large windows, offering precise light control while maintaining a clean, contemporary aesthetic.',
      categories: ['blinds'],
      image: '/images/window_blind-3.webp',
      testimonial: 'The vertical blinds are perfect for our large windows and provide exactly the light control we were looking for. The quality is exceptional.',
      client: 'James, Surrey'
    },
    {
      id: 7,
      title: 'Premium Curtain Rails Installation',
      location: 'Woking',
      description: 'Installation of premium curtain rails and poles, providing both functionality and an elegant finishing touch to complement the custom curtains.',
      categories: ['tracks-and-poles'],
      image: '/images/curtain_rail-zoom_in-1.webp',
      testimonial: 'The attention to detail with the curtain rail installation was impressive. Everything works perfectly and looks beautiful.',
      client: 'Sarah, Woking'
    },
    {
      id: 8,
      title: 'Roller Blinds for Home Office',
      location: 'Hampshire',
      description: 'Functional roller blinds designed for this home office space, offering light control while maintaining a professional appearance.',
      categories: ['blinds'],
      image: '/images/window_blind-4.webp',
      testimonial: 'The roller blinds Suzy made for my home office are perfect - they look great and function exactly as I needed.',
      client: 'Robert, Hampshire'
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.categories.includes(selectedCategory))
    : projects;
    
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'curtains', name: 'Curtains' },
    { id: 'blinds', name: 'Blinds' },
    { id: 'soft-furnishings', name: 'Soft Furnishings' },
    { id: 'tracks-and-poles', name: 'Tracks & Poles' }
  ];
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId === 'all' ? null : categoryId);
  };
  
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/blind-zoom_in-1.jpeg" 
            alt="Bramble & Bay Portfolio"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Our Portfolio"
              className="text-5xl font-serif text-white font-medium max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Our Craftsmanship</h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore our portfolio of bespoke curtains, blinds, and soft furnishings. Each project showcases our commitment to quality craftsmanship and attention to detail, with pieces made-to-measure for our clients across Surrey and Hampshire.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="mb-12">
            <FadeIn>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      (category.id === 'all' && selectedCategory === null) || 
                      category.id === selectedCategory
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <motion.div
                    ref={ref}
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    layout
                    className="group cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <p className="font-medium">{project.title}</p>
                            <p className="text-sm text-white/80">{project.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{project.location}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.categories.map(category => {
                            const categoryName = categories.find(c => c.id === category)?.name || category;
                            return (
                              <span 
                                key={category} 
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {categoryName}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <FadeIn>
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No projects found for this category.</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              className="bg-white rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <button 
                    onClick={closeProjectModal}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  
                  <h2 className="text-2xl font-serif text-primary mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-600 mb-4">{selectedProject.location}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.categories.map(category => {
                      const categoryName = categories.find(c => c.id === category)?.name || category;
                      return (
                        <span 
                          key={category} 
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {categoryName}
                        </span>
                      );
                    })}
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Project Details</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                  
                  {selectedProject.testimonial && (
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <div className="mb-2 text-primary/30">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 italic mb-2">{selectedProject.testimonial}</p>
                      <p className="text-sm font-medium text-gray-900">{selectedProject.client}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-white mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us to discuss how we can create beautiful bespoke curtains, blinds, and soft furnishings for your home.
              </p>
              <a 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Get in Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

// Project type definition
interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  categories: string[];
  image: string;
  testimonial?: string;
  client?: string;
} 