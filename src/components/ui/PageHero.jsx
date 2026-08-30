import { motion } from "framer-motion";

/**
 * PageHero — Reusable inner-page hero banner with editorial serif typography.
 */
export default function PageHero({
  title,
  subtitle,
  image,
  eyebrow,
}) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-end overflow-hidden bg-[#123B2A]">
      {/* Background image */}
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
          aria-hidden="true"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#123B2A] via-[#123B2A]/60 to-[#123B2A]/30"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-max relative z-10 pb-12 sm:pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="text-[#C5A35A] text-xs uppercase tracking-[0.2em] font-medium font-body mb-3 block">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.15] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-white/75 font-body max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}