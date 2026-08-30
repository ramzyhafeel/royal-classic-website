import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const destinations = [
  'Colombo', 'Negombo', 'Sigiriya', 'Dambulla', 'Kandy',
  'Nuwara Eliya', 'Ella', 'Yala', 'Galle', 'Mirissa',
  'Bentota', 'Trincomalee', 'Anuradhapura', 'Polonnaruwa', 'Arugam Bay'
];

export default function DestinationJourney() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--royal-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <span className="text-[var(--royal-gold)] font-semibold tracking-wider text-sm uppercase mb-4 block">
            DISCOVER THE ISLAND
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-forest)] leading-tight">
            One island.<br />
            <span className="italic text-[var(--royal-forest-dark)]">A thousand stories.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8 mb-16">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex items-baseline gap-4 border-b border-[var(--royal-muted)]/20 pb-4 cursor-default"
            >
              <span className="font-display text-lg text-[var(--royal-gold)] w-8">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-base font-semibold text-[var(--royal-forest)] group-hover:text-[var(--royal-gold)] transition-colors duration-300">
                {dest}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left"
        >
          <Link to="/packages" className="btn-secondary inline-flex">
            Explore Our Journeys
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
