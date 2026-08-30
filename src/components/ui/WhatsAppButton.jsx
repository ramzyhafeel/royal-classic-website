import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaTripadvisor, 
  FaInstagram, 
  FaFacebookF, 
  FaTimes
} from "react-icons/fa";
import { siteConfig } from "../../data/site";
import { createWhatsAppLink, whatsappMessages } from "../../utils/whatsapp";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const whatsappUrl = createWhatsAppLink(whatsappMessages.general);
  const phoneUrl = `tel:${siteConfig.contact.phone || '+94770000000'}`;
  const emailUrl = `mailto:${siteConfig.contact.email || 'hello@royalclassictours.lk'}`;
  const tripadvisorUrl = "https://www.tripadvisor.com/";
  const instagramUrl = siteConfig.social?.instagram || "https://instagram.com/";
  const facebookUrl = siteConfig.social?.facebook || "https://facebook.com/";

  return (
    <div 
      ref={menuRef}
      className="fixed bottom-18 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50 flex flex-col items-end"
    >
      {/* Floating Menu Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 w-[280px] sm:w-[300px] bg-[#163E2D] border border-white/15 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-4 sm:p-5 text-white overflow-hidden backdrop-blur-md"
          >
            {/* Header */}
            <div className="text-center pb-3 border-b border-white/10 mb-3.5">
              <h3 className="text-[#E5A93C] font-bold uppercase tracking-wider text-xs sm:text-[13px]">
                Instant Travel Assistance
              </h3>
            </div>

            {/* Action Buttons List */}
            <div className="flex flex-col gap-2.5">
              {/* 1. WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-[#22C55E] hover:bg-[#1EAB52] text-white rounded-2xl font-bold text-sm shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaWhatsapp className="text-xl shrink-0" />
                <span>WhatsApp Us</span>
              </a>

              {/* 2. Call Directly */}
              <a
                href={phoneUrl}
                className="flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-[#194D39] hover:bg-[#1E5D45] text-white rounded-2xl font-bold text-sm shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaPhoneAlt className="text-lg shrink-0" />
                <span>Call Directly</span>
              </a>

              {/* 3. Email Us */}
              <a
                href={emailUrl}
                className="flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-[#DCA444] hover:bg-[#C99238] text-[#123B2A] rounded-2xl font-bold text-sm shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaEnvelope className="text-lg shrink-0 text-[#123B2A]" />
                <span>Email Us</span>
              </a>

              {/* 4. TripAdvisor */}
              <a
                href={tripadvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-[#26C786] hover:bg-[#20B075] text-[#123B2A] rounded-2xl font-bold text-sm shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaTripadvisor className="text-xl shrink-0 text-[#123B2A]" />
                <span>TripAdvisor</span>
              </a>

              {/* 5. Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 text-white rounded-2xl font-bold text-sm shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaInstagram className="text-xl shrink-0" />
                <span>Instagram</span>
              </a>

              {/* 6. Facebook */}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-2xl font-bold text-sm shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaFacebookF className="text-lg shrink-0" />
                <span>Facebook</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button with Ripple & Effects */}
      <div className="relative flex items-center justify-center">
        {/* Radar Pulse Wave (active when menu is closed) */}
        {!isOpen && (
          <>
            <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />
            <span className="absolute -inset-3 rounded-full bg-[#25D366]/15 animate-pulse pointer-events-none" />
          </>
        )}

        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.08 }}
          aria-label={isOpen ? "Close travel assistance menu" : "Open instant travel assistance"}
          aria-expanded={isOpen}
          className="relative z-10 w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-[#008952] to-[#25D366] text-white flex items-center justify-center shadow-[0_10px_35px_rgba(0,137,82,0.5)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-shadow duration-300 focus:outline-none"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <FaTimes className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ 
                  rotate: [0, -12, 12, -8, 8, 0],
                  scale: [1, 1.08, 1, 1.05, 1],
                  opacity: 1 
                }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ 
                  rotate: { repeat: Infinity, repeatDelay: 3, duration: 0.9, ease: "easeInOut" },
                  scale: { repeat: Infinity, repeatDelay: 3, duration: 0.9, ease: "easeInOut" },
                  opacity: { duration: 0.2 }
                }}
              >
                <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-md" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Live Online Indicator Dot (when closed) */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5 pointer-events-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-80" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-[#163E2D]" />
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
