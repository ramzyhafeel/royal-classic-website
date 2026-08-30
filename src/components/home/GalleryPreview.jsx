import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gallery } from '../../data/gallery';

export default function GalleryPreview() {
  const displayImages = gallery.slice(0, 6);

  return (
    <section className="py-24 sm:py-32 bg-[var(--royal-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-forest)]">
            Sri Lanka, remembered.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 auto-rows-[150px] md:auto-rows-[200px]">
          {displayImages.map((img, index) => {
            // Asymmetric layout
            const isLarge = index === 0;
            return (
              <motion.div
                key={img.id || index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-[var(--radius-sm)] ${
                  isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt || 'Sri Lanka'}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/gallery" className="btn-secondary inline-flex">
            Explore Gallery
          </Link>
        </motion.div>

      </div>
    </section>
  );
}