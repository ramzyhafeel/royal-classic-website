import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Accordion — Elegant expandable content panel.
 */
export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="divide-y divide-[rgba(18,59,42,0.1)]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const question = item.q || item.question || item.title;
        const answer = item.a || item.answer || item.content;

        return (
          <div key={i} className="group">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between py-5 text-left transition-colors"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${i}`}
            >
              <span className="font-body font-semibold text-[#123B2A] text-base pr-6 group-hover:text-[#C5A35A] transition-colors">
                {question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-[#C5A35A]"
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${i}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-[#5F6963] leading-relaxed font-body max-w-2xl">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}