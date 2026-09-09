import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { createWhatsAppLink } from '../../utils/whatsapp';

export default function FinalCta() {
  const whatsappUrl = createWhatsAppLink('Hello Royal Classic Tours, I would like to start planning my Sri Lanka journey!');

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[var(--royal-ink)]">
      
      {/* Background Image with Parallax/Ken Burns feel */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero/hero9.jpg"
          alt="Sri Lanka Journey"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-ink)] via-transparent to-transparent opacity-80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-white)] mb-6">
            Your Sri Lanka story starts here.
          </h2>
          <p className="text-base sm:text-lg text-[var(--royal-white)]/80 mb-10 max-w-2xl mx-auto">
            Choose a private journey, customize your itinerary, or simply book your vehicle and driver.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/customize-tour" className="btn-hero-primary w-full sm:w-auto">
              Plan My Sri Lanka Trip
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Royal Classic Tours
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
