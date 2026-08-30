import { motion } from "framer-motion";

/**
 * JourneyLine — The Royal Journey Line signature visual element.
 * A thin, elegant route-inspired line used as a decorative motif.
 *
 * @param {"vertical"|"horizontal"} direction
 * @param {string} className — Additional classes
 * @param {boolean} animate — Whether to animate the line drawing
 * @param {number} height — Height in px for vertical lines
 * @param {number} width — Width in px for horizontal lines
 */
export default function JourneyLine({
  direction = "vertical",
  className = "",
  animate = true,
  height,
  width,
  style = {},
}) {
  const isVertical = direction === "vertical";

  const lineStyle = {
    ...style,
    ...(isVertical
      ? { width: "2px", height: height || 60 }
      : { height: "2px", width: width || 60 }),
  };

  if (animate) {
    return (
      <motion.div
        className={`${isVertical ? "journey-line" : "journey-line-h"} ${className}`}
        style={lineStyle}
        initial={{ scaleY: isVertical ? 0 : 1, scaleX: isVertical ? 1 : 0, opacity: 0 }}
        whileInView={{ scaleY: 1, scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`${isVertical ? "journey-line" : "journey-line-h"} ${className}`}
      style={lineStyle}
      aria-hidden="true"
    />
  );
}
