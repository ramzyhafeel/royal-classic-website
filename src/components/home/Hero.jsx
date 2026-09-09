import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { createWhatsAppLink } from '../../utils/whatsapp';
import Container from '../layout/Container';

// Verified destination images from /public/images/destinations/famous/
const HERO_DESTINATIONS = [
  {
    id: 'sigiriya',
    number: '01',
    eyebrow: 'ROYAL CLASSIC JOURNEYS',
    name: 'Sigiriya',
    subtitle: 'The Ancient Lion Rock Citadel',
    description: "Rise above Sri Lanka's ancient kingdom and discover one of the world's most breathtaking UNESCO World Heritage fortresses, towering 200 meters above lush emerald plains.",
    image: '/images/destinations/famous/sigiriya-rock-fortress.jpg',
    tag: 'Ancient Wonder',
    badge: 'UNESCO World Heritage',
    link: '/packages'
  },
  {
    id: 'ella',
    number: '02',
    eyebrow: 'MISTY HIGHLAND ESCAPES',
    name: 'Ella',
    subtitle: 'Cloud Forests & Nine Arch Viaduct',
    description: "Escape into cloud-kissed mountain peaks, verdant Ceylon tea plantations, and legendary scenic railway journeys crossing the iconic colonial Nine Arch Bridge.",
    image: '/images/destinations/famous/ella-nine-arch-bridge.jpg',
    tag: 'Scenic Highlands',
    badge: 'Hill Country Sanctuary',
    link: '/packages'
  },
  {
    id: 'kandy',
    number: '03',
    eyebrow: 'SACRED CULTURAL HEART',
    name: 'Kandy',
    subtitle: 'Sri Dalada Maligawa & Serene Lake',
    description: "Discover Sri Lanka's cultural soul, home to sacred royal traditions, mist-draped hills, and the venerated golden-roofed Temple of the Sacred Tooth Relic.",
    image: '/images/destinations/famous/kandy-dalada-maligawa.jpg',
    tag: 'Sacred Heritage',
    badge: 'Historic Royal Capital',
    link: '/packages'
  },
  {
    id: 'galle',
    number: '04',
    eyebrow: 'COASTAL LIVING HERITAGE',
    name: 'Galle',
    subtitle: '17th-Century Dutch Fort & Lighthouse',
    description: "Walk through centuries of living maritime history inside the majestic stone ramparts of Galle Fort, surrounded by charming cobblestone lanes and the Indian Ocean.",
    image: '/images/destinations/famous/galle-fort-lighthouse.jpg',
    tag: 'Ocean Fortress',
    badge: 'Colonial Ocean Gem',
    link: '/packages'
  },
  {
    id: 'yala',
    number: '05',
    eyebrow: 'WILD SAFARI EXPEDITION',
    name: 'Yala',
    subtitle: 'Kingdom of the Sri Lankan Leopard',
    description: "Venture into the wild coastal savanna for thrilling private jeep safaris, home to the world's highest density of wild leopards, gentle elephant herds, and exotic fauna.",
    image: '/images/destinations/famous/yala-leopard-safari.jpg',
    tag: 'Wild Safari',
    badge: 'Premier Wildlife Safari',
    link: '/packages'
  },
  {
    id: 'nuwara-eliya',
    number: '06',
    eyebrow: 'CEYLON TEA HIGHLANDS',
    name: 'Nuwara Eliya',
    subtitle: 'Little England & Rolling Tea Valleys',
    description: "Breathe the cool mountain air amidst emerald tea estates, colonial-era manors, and shimmering lakes nestled in the highest reaches of the central highlands.",
    image: '/images/destinations/famous/nuwara-eliya-tea.jpg',
    tag: 'Tea Country',
    badge: 'Highland Retreat',
    link: '/packages'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = HERO_DESTINATIONS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index % total);
  }, [total]);

  // Autoplay timer (5 seconds)
  const SLIDE_DURATION_SEC = 5;
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_DURATION_SEC * 1000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Preload next destination images in background
  useEffect(() => {
    const next1 = HERO_DESTINATIONS[(currentIndex + 1) % total].image;
    const next2 = HERO_DESTINATIONS[(currentIndex + 2) % total].image;
    [next1, next2].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [currentIndex, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  const activeDestination = HERO_DESTINATIONS[currentIndex];

  // Get the visible cards starting from current index - ONLY 3 CARDS
  const visibleCards = [0, 1, 2].map((offset) => {
    const index = (currentIndex + offset) % total;
    return {
      ...HERO_DESTINATIONS[index],
      positionIndex: offset,
      actualIndex: index
    };
  });

  return (
    <section 
      className="relative min-h-screen lg:min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden select-none bg-[#07130E]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Royal Classic Tours Cinematic Hero"
    >
      {/* ── 1. CINEMATIC FULLSCREEN BACKGROUND WITH CROSSFADE & KEN BURNS ── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#07130E]">
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${activeDestination.id}`}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.9, ease: 'easeInOut' },
              scale: { duration: 7.5, ease: 'easeOut' }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeDestination.image}
              alt={activeDestination.name}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-stop Cinematic Dark Gradient Overlay for Maximum Readability */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.88) 40%, rgba(5,5,5,0.45) 75%, rgba(5,5,5,0.60) 100%)'
          }}
        />

        {/* Top/Bottom Subtle Gradient Fades for Seamless Navbar & Section Continuity */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-[#0D2C20]/95 pointer-events-none" />
      </div>

      {/* ── 2. HERO CONTENT COMPOSITION: 12-COLUMN GRID ENSURES ZERO OVERLAP ── */}
      <Container className="relative z-20 flex-1 flex flex-col justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center w-full">
          
          {/* ═════════════════════════════════════════════════════════════
              LEFT CONTENT (lg:col-span-5): TEXT ENTERS FROM THE LEFT EDGE
              ═════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center min-w-0 pr-0 lg:pr-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-content-${activeDestination.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {/* 1. Eyebrow Badge */}
                <motion.div
                  initial={{ x: -140, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -70, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="flex items-center gap-2 mb-2.5 sm:mb-3"
                >
                  <span className="w-7 h-[1.5px] bg-[var(--royal-gold)] shrink-0" />
                  <span className="text-[var(--royal-gold)] uppercase tracking-[0.2em] text-[11px] sm:text-xs font-semibold">
                    {activeDestination.eyebrow}
                  </span>
                </motion.div>

                {/* 2. Destination Heading */}
                <motion.div
                  initial={{ x: -160, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                  className="mb-2"
                >
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white font-bold leading-[1.0] tracking-tight uppercase drop-shadow-md break-words">
                    {activeDestination.name}
                  </h1>
                </motion.div>

                {/* 3. Subtitle */}
                <motion.div
                  initial={{ x: -130, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -65, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                  className="mb-3.5"
                >
                  <p className="font-display italic text-base sm:text-lg lg:text-xl text-[#EFE7D8] font-light leading-snug">
                    {activeDestination.subtitle}
                  </p>
                </motion.div>

                {/* 4. Description */}
                <motion.div
                  initial={{ x: -120, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -60, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
                  className="mb-6 sm:mb-7 max-w-md"
                >
                  <p className="text-xs sm:text-sm lg:text-[15px] text-white/85 leading-relaxed font-body font-light">
                    {activeDestination.description}
                  </p>
                </motion.div>

                {/* 5. CTA Buttons & WhatsApp Link */}
                <motion.div
                  initial={{ x: -110, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.30 }}
                  className="space-y-3.5"
                >
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <Link
                      to={activeDestination.link}
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[var(--royal-gold)] hover:bg-[#D4B36A] text-[#0D2C20] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md shadow-[var(--royal-gold)]/20 hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
                    >
                      <span>Explore {activeDestination.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <Link
                      to="/customize-tour"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-full border border-white/30 hover:border-white text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/10 cursor-pointer"
                    >
                      Plan Custom Trip
                    </Link>
                  </div>

                  {/* WhatsApp Quick Chat */}
                  <div>
                    <a
                      href={createWhatsAppLink(`Hello Royal Classic Tours,\n\nI am interested in exploring ${activeDestination.name}. Please provide a private tour itinerary and quotation.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm transition-colors group cursor-pointer"
                    >
                      <FaWhatsapp className="text-base sm:text-lg text-[#25D366] shrink-0" />
                      <span className="border-b border-transparent group-hover:border-white/40 transition-colors">
                        Inquire on WhatsApp &rarr;
                      </span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              RIGHT VISUAL AREA (lg:col-span-7): ONLY 3 CARDS AT A TIME
              ═════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-start lg:justify-end overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none w-full">
            <div className="flex items-end gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5 justify-start lg:justify-end shrink-0">
              <AnimatePresence mode="popLayout">
                {visibleCards.map((card) => {
                  const isFeatured = card.positionIndex === 0;
                  const isNext = card.positionIndex === 1;
                  const isUpcoming = card.positionIndex === 2;

                  // 3-Card Sizing Hierarchy (Featured -> Next -> Upcoming)
                  let cardClasses = '';
                  if (isFeatured) {
                    cardClasses = 'w-[68vw] sm:w-[250px] lg:w-[260px] xl:w-[280px] h-[340px] sm:h-[380px] lg:h-[400px] xl:h-[430px] z-30 opacity-100 ring-2 ring-[var(--royal-gold)] shadow-[0_20px_50px_rgba(0,0,0,0.65)]';
                  } else if (isNext) {
                    cardClasses = 'w-[42vw] sm:w-[190px] lg:w-[195px] xl:w-[215px] h-[270px] sm:h-[305px] lg:h-[320px] xl:h-[345px] z-20 opacity-85 hover:opacity-100 hover:scale-[1.02] shadow-[0_15px_35px_rgba(0,0,0,0.45)]';
                  } else if (isUpcoming) {
                    cardClasses = 'w-[28vw] sm:w-[145px] lg:w-[150px] xl:w-[165px] h-[210px] sm:h-[240px] lg:h-[255px] xl:h-[275px] z-10 opacity-60 hover:opacity-90 hover:scale-[1.02] shadow-[0_10px_25px_rgba(0,0,0,0.35)]';
                  }

                  return (
                    <motion.div
                      layout
                      key={card.id}
                      initial={{ opacity: 0, x: 70, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -70, scale: 0.85 }}
                      transition={{
                        layout: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.5 },
                        x: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
                      }}
                      onClick={() => goToSlide(card.actualIndex)}
                      className={`relative rounded-[20px] sm:rounded-[24px] overflow-hidden shrink-0 cursor-pointer transition-all duration-300 group ${cardClasses}`}
                    >
                      {/* Destination Image with Zoom on Hover */}
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading={isFeatured ? 'eager' : 'lazy'}
                      />

                      {/* Vignette Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="font-display text-[10px] sm:text-[11px] font-bold text-white bg-black/55 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                          #{card.number}
                        </span>

                        {isFeatured ? (
                          <span className="text-[9px] sm:text-[10px] font-semibold text-[var(--royal-gold)] bg-[#0D2C20]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-[var(--royal-gold)]/40 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 shrink-0" />
                            <span>Active</span>
                          </span>
                        ) : (
                          <span className="text-[9px] font-medium text-white/80 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded-full">
                            {isNext ? 'Next up' : card.tag}
                          </span>
                        )}
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                        <div className="flex items-center gap-1 text-[var(--royal-gold)] text-[10px] sm:text-[11px] font-medium uppercase tracking-wider mb-0.5">
                          <MapPin className="w-2.5 h-2.5 shrink-0" />
                          <span>Sri Lanka</span>
                        </div>

                        <h3 className={`font-display font-bold text-white drop-shadow-md leading-tight group-hover:text-[var(--royal-gold)] transition-colors duration-300 ${
                          isFeatured 
                            ? 'text-lg sm:text-xl md:text-2xl' 
                            : isNext 
                              ? 'text-sm sm:text-base md:text-lg' 
                              : 'text-xs sm:text-sm'
                        }`}>
                          {card.name}
                        </h3>

                        {isFeatured && (
                          <p className="text-[10px] sm:text-[11px] text-[#EFE7D8]/80 font-light mt-0.5 line-clamp-1">
                            {card.subtitle}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </Container>

      {/* ── 3. BOTTOM CONTROLS & SYNCHRONIZED PROGRESS LINE ── */}
      <Container className="relative z-20 w-full pt-6 sm:pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/15">
          
          {/* Trust Highlights */}
          <div className="hidden sm:flex items-center gap-3 text-xs text-white/70 font-medium tracking-wide">
            <span className="text-[var(--royal-gold)] font-display text-sm tracking-wider">ROYAL CLASSIC</span>
            <span className="text-white/30">•</span>
            <span>Private Chauffeur Fleet</span>
            <span className="text-white/30">•</span>
            <span>Island-Wide Custom Tours</span>
          </div>

          {/* Pagination Counter & Animated Progress Bar */}
          <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">
            {/* Number counter */}
            <div className="flex items-baseline gap-1.5 font-display text-white shrink-0">
              <span className="text-xl sm:text-2xl text-[var(--royal-gold)] font-bold">
                {activeDestination.number}
              </span>
              <span className="text-white/40 text-xs">
                / {String(total).padStart(2, '0')}
              </span>
            </div>

            {/* 5-Second Autoplay Progress Line */}
            <div className="w-24 sm:w-36 md:w-48 h-[2px] bg-white/20 rounded-full overflow-hidden relative shrink-0">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: isPaused ? '0%' : '100%' }}
                transition={{ duration: SLIDE_DURATION_SEC, ease: 'linear' }}
                className="h-full bg-[var(--royal-gold)] rounded-full"
              />
            </div>

            {/* Prev / Next Manual Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={prevSlide}
                aria-label="Previous destination"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:border-[var(--royal-gold)] hover:bg-[var(--royal-gold)]/20 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next destination"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:border-[var(--royal-gold)] hover:bg-[var(--royal-gold)]/20 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;