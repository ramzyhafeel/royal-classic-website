import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { faqs } from '../../data/faqs';
import { createWhatsAppLink, whatsappMessages } from '../../utils/whatsapp';

function Accordion({ item, isOpen, onToggle }) {
  const question = item.question || item.q;
  const answer = item.answer || item.a;

  return (
    <div className="border-b border-[var(--royal-forest)]/15 last:border-b-0 transition-colors duration-300">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 sm:py-6 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-display font-medium text-[var(--royal-forest)] group-hover:text-[var(--royal-gold)] transition-colors duration-300 pr-6">
          {question}
        </span>
        <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen 
            ? 'bg-[var(--royal-gold)] border-[var(--royal-gold)] text-[var(--royal-forest)] rotate-180' 
            : 'border-[var(--royal-forest)]/20 text-[var(--royal-forest)] group-hover:border-[var(--royal-gold)] group-hover:text-[var(--royal-gold)]'
        }`}>
          <FaChevronDown className="w-3.5 h-3.5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm sm:text-base text-[var(--royal-muted)] leading-relaxed font-body">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // open first FAQ by default
  const whatsappUrl = createWhatsAppLink(whatsappMessages.general);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[var(--royal-ivory)] border-t border-[var(--royal-sand)]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-[var(--royal-gold)] font-semibold tracking-widest text-xs uppercase mb-3 block">
            NEED ASSISTANCE?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--royal-forest)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[var(--royal-muted)] max-w-xl mx-auto font-body">
            Everything you need to know about planning and travelling privately with Royal Classic Tours.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-[var(--royal-sand)] mb-12"
        >
          {faqs.map((faq, idx) => (
            <Accordion 
              key={faq.id || idx} 
              item={faq} 
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </motion.div>

        {/* WhatsApp Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[var(--radius)] bg-[var(--royal-forest)] text-white hover:bg-[var(--royal-forest-dark)] transition-all duration-300 shadow-sm hover:shadow-md text-sm font-semibold tracking-wide group"
          >
            <FaWhatsapp className="text-xl text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>Still have questions? Chat with us on WhatsApp &rarr;</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}