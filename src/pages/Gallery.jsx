import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import { gallery, galleryCategories } from '../data/gallery';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/ui/Lightbox';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      <PageHero 
        title="Sri Lanka, through our lens." 
        subtitle="Moments from journeys across the island." 
        image="/images/hero/hero7.jpg" 
      />

      <section className="section-padding bg-royal-ivory">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-sm md:text-base pb-1 relative transition-colors ${
                  activeCategory === category.id 
                    ? 'text-royal-forest font-medium' 
                    : 'text-royal-muted hover:text-royal-forest'
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-gold"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[150px] md:auto-rows-[200px]">
            <AnimatePresence>
              {filteredGallery.map((item, index) => {
                const isTall = index % 5 === 0;
                const isWide = index % 7 === 0 && !isTall;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className={`relative overflow-hidden rounded-[var(--radius-sm)] cursor-pointer group ${
                      isTall ? 'row-span-2' : ''
                    } ${isWide ? 'col-span-2' : ''}`}
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title || 'Sri Lanka'} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white bg-black/50 p-2 rounded-full backdrop-blur-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        images={filteredGallery.map(item => item.image)} 
        initialIndex={lightboxIndex} 
      />
    </Layout>
  );
}