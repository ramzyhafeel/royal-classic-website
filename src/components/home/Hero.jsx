import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { createWhatsAppLink, whatsappMessages } from '../../utils/whatsapp';
import Container from '../layout/Container';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero/hero.jpg',
    badge: 'PRIVATE JOURNEYS ACROSS SRI LANKA',
    titleMain: 'Discover Sri Lanka.',
    titleItalic: 'Travel Your Way.',
    description: 'Private tours, professional drivers, airport transfers and tailor-made journeys across Sri Lanka.',
    location: 'SIGIRIYA • CENTRAL PROVINCE',
    primaryBtn: { text: 'Explore Private Tours', link: '/packages' },
    secondaryBtn: { text: 'Book Transport Only', link: '/transportation' },
  },
  {
    id: 2,
    image: '/images/hero/hero1.jpg',
    badge: 'LUXURY & TAILOR-MADE ITINERARIES',
    titleMain: 'Timeless Tea Hills &',
    titleItalic: 'Misty Mountain Escapes.',
    description: 'Scenic train journeys, boutique tea estates and misty mountain panoramas crafted exclusively for you.',
    location: 'ELLA & NUWARA ELIYA • HILL COUNTRY',
    primaryBtn: { text: 'View Hill Country Tours', link: '/packages' },
    secondaryBtn: { text: 'Customize Your Trip', link: '/customize-tour' },
  },
  {
    id: 3,
    image: '/images/hero/hero2.jpg',
    badge: 'WILDLIFE SAFARIS & COASTAL SERENITY',
    titleMain: 'Wild Safaris &',
    titleItalic: 'Golden Coastlines.',
    description: 'Witness leopards in Yala, gentle giants in Udawalawe and unwind along the tropical southern coast.',
    location: 'YALA & MIRISSA • SOUTHERN COAST',
    primaryBtn: { text: 'Explore Wildlife Tours', link: '/packages' },
    secondaryBtn: { text: 'Plan With An Expert', link: '/contact' },
  },
  {
    id: 4,
    image: '/images/hero/hero3.jpg',
    badge: 'ANCIENT HERITAGE & SACRED CITIES',
    titleMain: 'Ancient Wonders &',
    titleItalic: 'Cultural Treasures.',
    description: 'Explore UNESCO World Heritage wonders, royal citadel ruins and sacred temples with trusted local guides.',
    location: 'KANDY & ANURADHAPURA • CULTURAL TRIANGLE',
    primaryBtn: { text: 'Discover Heritage Tours', link: '/packages' },
    secondaryBtn: { text: 'Browse Vehicles', link: '/transportation' },
  },
  {
    id: 5,
    image: '/images/hero/hero4.jpg',
    badge: 'EXCLUSIVE PRIVATE CHAUFFEUR SERVICE',
    titleMain: 'Comfort & Elegance.',
    titleItalic: 'Every Mile Of The Way.',
    description: 'Premium private fleet with dedicated English-speaking drivers ensuring safe and comfortable exploration.',
    location: 'ISLAND-WIDE • SRI LANKA',
    primaryBtn: { text: 'Book Private Driver', link: '/transportation' },
    secondaryBtn: { text: 'Plan My Custom Trip', link: '/customize-tour' },
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic slide rotation every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with smooth fade & Ken Burns effect */}
      <div className="absolute inset-0 z-0 bg-[#0D2C20]">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.2, ease: 'easeInOut' },
              scale: { duration: 8, ease: 'easeOut' }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slide.image}
              alt={slide.titleMain}
              className="w-full h-full object-cover"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlays for optimal readability and depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D2C20]/90 via-[#0D2C20]/45 to-[#0D2C20]/75" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D2C20]/80 via-[#0D2C20]/30 to-transparent" />

      {/* Content Container */}
      <Container className="relative z-20 flex-1 flex flex-col justify-end min-h-[calc(100vh-10rem)] pb-12 lg:pb-20">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <div className="mb-4">
                <span className="inline-block text-[#C5A35A] uppercase tracking-[0.2em] text-[11px] sm:text-xs font-semibold bg-[#123B2A]/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A35A]/25">
                  {slide.badge}
                </span>
              </div>

              {/* Dynamic Main Heading */}
              <div className="mb-5 space-y-1.5">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white font-semibold leading-[1.1] tracking-tight">
                  <span className="block">{slide.titleMain}</span>
                  <span className="block italic font-light text-[#EFE7D8]">{slide.titleItalic}</span>
                </h1>
              </div>

              {/* Dynamic Description */}
              <div className="mb-8 max-w-xl">
                <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-body">
                  {slide.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 mb-6">
                <Link to={slide.primaryBtn.link} className="btn-hero-primary px-7 py-3.5 text-center text-xs sm:text-sm tracking-wider uppercase">
                  {slide.primaryBtn.text}
                </Link>
                <Link to={slide.secondaryBtn.link} className="btn-hero-secondary px-7 py-3.5 text-center text-xs sm:text-sm tracking-wider uppercase">
                  {slide.secondaryBtn.text}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* WhatsApp Quick Link */}
          <div className="mb-8">
            <a 
              href={createWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs sm:text-sm transition-colors group"
            >
              <FaWhatsapp className="text-lg sm:text-xl text-[#25D366]" />
              <span className="border-b border-transparent group-hover:border-white/50 transition-colors">
                Or plan your journey with us on WhatsApp &rarr;
              </span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="hidden md:flex flex-wrap items-center gap-3 text-xs text-white/60 font-medium tracking-wide">
            <span>Private Journeys</span>
            <span className="text-[#C5A35A]">&bull;</span>
            <span>Professional Drivers</span>
            <span className="text-[#C5A35A]">&bull;</span>
            <span>Flexible Itineraries</span>
            <span className="text-[#C5A35A]">&bull;</span>
            <span>Island-Wide Travel</span>
          </div>
        </div>

        {/* Slide Progress & Navigation Controls */}
        <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2 ${
                  currentSlide === idx 
                    ? 'w-8 bg-[#C5A35A]' 
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Location & Prev/Next Controls */}
          <div className="flex items-center gap-4">
            <AnimatePresence mode="wait">
              <motion.span 
                key={`loc-${slide.id}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="hidden sm:inline-block text-[11px] sm:text-xs text-white/60 uppercase tracking-widest font-medium font-body"
              >
                {slide.location}
              </motion.span>
            </AnimatePresence>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-black/40 transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-black/40 transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;