import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { siteConfig } from '../../data/site';
import { createWhatsAppLink, whatsappMessages } from '../../utils/whatsapp';
import { cn } from '../../utils/cn';
import Container from './Container';
import Logo from '../ui/Logo';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
  { name: 'Services', path: '/services' },
  { name: 'Transportation', path: '/transportation' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();

  // Scroll listener for hiding/showing and background color changes
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Make solid when scrolling down past 50px
        if (currentScrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const whatsappUrl = createWhatsAppLink(whatsappMessages.general);

  // We want to force solid navbar if we're not at the top of the page,
  // or maybe on certain pages, but relying on isScrolled handles the dynamic part well.
  const isSolid = isScrolled || isMobileMenuOpen;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isSolid 
            ? "bg-[#F8F5EE] text-[#123B2A] border-b border-[rgba(18,59,42,0.08)] shadow-[0_1px_2px_rgba(0,0,0,0.02)]" 
            : "bg-transparent text-white"
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-[76px] sm:h-22 md:h-24 lg:h-28">
            
            {/* Logo */}
            <Link to="/" className="flex items-center group z-50 py-1 shrink-0" aria-label="Royal Classic Tours Home">
              <Logo isDark={!isSolid} size="nav" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "text-[11px] xl:text-xs font-medium tracking-[0.12em] uppercase transition-all duration-200 relative py-2 whitespace-nowrap",
                    isSolid 
                      ? "text-[var(--royal-ink)] hover:text-[var(--royal-forest)]" 
                      : "text-white/90 hover:text-white",
                    isActive && "text-[var(--royal-gold)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--royal-gold)]"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA & Social */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={cn(
                  "p-2 transition-colors duration-200",
                  isSolid ? "text-[var(--royal-forest)] hover:text-[var(--royal-gold)]" : "text-white hover:text-[var(--royal-gold)]"
                )}
              >
                <FaWhatsapp className="w-5 h-5 xl:w-5.5 xl:h-5.5" />
              </a>
              <Link 
                to="/customize-tour" 
                className={cn(
                  "btn text-[11px] xl:text-xs tracking-wider uppercase px-5 py-2 xl:px-6 xl:py-2.5 transition-all duration-300 whitespace-nowrap",
                  isSolid 
                    ? "bg-[var(--royal-forest)] text-white hover:bg-[var(--royal-forest-dark)] border border-transparent rounded-[var(--radius)]" 
                    : "bg-transparent text-white border border-white hover:bg-white hover:text-[var(--royal-forest)] rounded-[var(--radius)]"
                )}
              >
                Plan My Trip
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-3 z-50">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={cn(
                  "p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-200",
                  isSolid ? "text-[var(--royal-forest)]" : "text-white"
                )}
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-200",
                  isSolid ? "text-[var(--royal-forest)]" : "text-white"
                )}
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </Container>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#F8F5EE] lg:hidden overflow-y-auto flex flex-col pt-24 pb-12 px-6"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "text-2xl font-display font-medium tracking-wide border-b border-[rgba(18,59,42,0.08)] pb-4",
                    isActive ? "text-[var(--royal-gold)]" : "text-[var(--royal-forest)]"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            
            <div className="mt-12 flex flex-col gap-6">
              <Link 
                to="/customize-tour" 
                className="w-full bg-[var(--royal-forest)] text-white text-center py-4 uppercase tracking-wider text-sm font-medium rounded-[var(--radius)]"
              >
                Plan My Trip
              </Link>
              
              <div className="flex items-center justify-center gap-2 text-[var(--royal-forest)] font-medium">
                <FaWhatsapp className="w-6 h-6" />
                <a href={whatsappUrl} className="text-lg">+94 (0) XX XXX XXXX</a> 
                {/* Note: Update phone number from site config if desired, otherwise generic placeholder */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;