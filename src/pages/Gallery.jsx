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

      <section className="py-12 sm:py-16 bg-[var(--royal-ivory)]">
        <div className="container-custom">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-[var(--royal-forest)] text-white shadow-sm' 
                      : 'bg-white text-[var(--royal-muted)] border border-[var(--border)] hover:border-[var(--royal-gold)] hover:text-[var(--royal-forest)]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 auto-rows-[160px] md:auto-rows-[220px]">
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
                    className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-lg transition-shadow ${
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
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white bg-black/60 p-2.5 rounded-full backdrop-blur-sm border border-white/20">
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

      {/* Bottom Inspiration CTA */}
      <section className="py-16 sm:py-20 bg-white border-t border-[var(--border)]">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <span className="text-[var(--royal-gold)] uppercase tracking-widest text-xs font-semibold block mb-2">
            START YOUR JOURNEY
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-royal-forest mb-4 font-semibold">
            Ready to experience this in person?
          </h2>
          <p className="text-royal-muted mb-8 text-base sm:text-lg">
            Every vista, landmark, and coastal haven awaits. Let's design your bespoke itinerary today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/customize-tour" 
              className="btn btn-primary w-full sm:w-auto px-8 py-3.5"
            >
              Plan My Trip
            </a>
            <a 
              href="/packages" 
              className="btn btn-secondary w-full sm:w-auto px-8 py-3.5"
            >
              View Tour Packages
            </a>
          </div>
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