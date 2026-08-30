import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightbox — Accessible fullscreen image lightbox with keyboard navigation.
 */
export default function Lightbox({ images = [], activeIndex = 0, isOpen, onClose }) {
  const [current, setCurrent] = useState(activeIndex);

  useEffect(() => {
    setCurrent(activeIndex);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen || !images.length) return null;

  const image = images[current];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-5 text-white/60 text-sm font-body">
            {current + 1} / {images.length}
          </div>

          {/* Previous */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 sm:left-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Image */}
          <motion.img
            key={current}
            src={image.image || image.src || image}
            alt={image.alt || image.caption || "Gallery image"}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />

          {/* Caption */}
          {(image.caption || image.alt) && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-body text-center max-w-md px-4">
              {image.caption || image.alt}
            </div>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 sm:right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
