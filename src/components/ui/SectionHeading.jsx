import { motion } from "framer-motion";
import JourneyLine from "./JourneyLine";

/**
 * SectionHeading — Reusable editorial section heading with optional eyebrow,
 * journey line accent, and section number.
 */
export default function SectionHeading({
  eyebrow,
  children,
  subtitle,
  number,
  align = "left",
  light = false,
  className = "",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignment} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Eyebrow + optional number */}
      {(eyebrow || number) && (
        <div className="flex items-center gap-3">
          {number && (
            <span
              className={`text-xs font-body tracking-widest font-medium ${
                light ? "text-[#C5A35A]" : "text-[#C5A35A]"
              }`}
            >
              {number}
            </span>
          )}
          {number && <JourneyLine direction="horizontal" width={24} animate={false} />}
          {eyebrow && (
            <span
              className={`text-xs tracking-[0.2em] uppercase font-medium font-body ${
                light ? "text-[#C5A35A]" : "text-[#C5A35A]"
              }`}
            >
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {/* Main heading (passed as children for flexible markup) */}
      <div
        className={`font-display font-semibold leading-[1.15] tracking-tight ${
          light ? "text-white" : "text-[#123B2A]"
        }`}
      >
        {children}
      </div>

      {/* Journey line accent */}
      {align === "left" && (
        <JourneyLine direction="horizontal" width={48} className="mt-1" />
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`max-w-2xl text-base sm:text-lg leading-relaxed font-body ${
            light ? "text-white/75" : "text-[#5F6963]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
