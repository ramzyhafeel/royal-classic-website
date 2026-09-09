import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import JourneyLine from '../ui/JourneyLine';

const BrandIntroduction = () => {
  const statements = [
    {
      id: "01",
      title: "Already planned everything?",
      text: "We can provide the transportation."
    },
    {
      id: "02",
      title: "Need your route planned?",
      text: "We can help shape your itinerary."
    },
    {
      id: "03",
      title: "Need accommodation?",
      text: "Suitable hotel options can be included."
    },
    {
      id: "04",
      title: "Want something completely personal?",
      text: "Create a tailor-made journey."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[var(--royal-ivory)] border-b border-[var(--royal-sand)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <span className="text-[#C5A35A] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            THE ROYAL CLASSIC STANDARD
          </span>
          <div className="mb-4 w-12">
            <JourneyLine orientation="horizontal" length="48px" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-ink)] mb-4 max-w-3xl leading-tight">
            <span>More than a driver.</span>{' '}
            <span className="italic font-light text-[var(--royal-forest)]">Your personal Sri Lanka island host.</span>
          </h2>
          <p className="text-[var(--royal-muted)] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Royal Classic Tours helps international travellers experience Sri Lanka privately, comfortably, and entirely at their own rhythm.
          </p>
        </motion.div>

        {/* 4 Trust Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { metric: '100%', label: 'Private Fleet & Chauffeur', desc: 'No shared buses or fixed crowds' },
            { metric: '12+', label: 'Years Island Expertise', desc: 'Curating bespoke travel since 2014' },
            { metric: '4.9★', label: 'Guest Review Rating', desc: 'Hundreds of verified reviews' },
            { metric: '24/7', label: 'Dedicated Support', desc: 'Instant WhatsApp assistance' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-[var(--royal-sand)] shadow-sm text-center flex flex-col justify-center"
            >
              <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--royal-gold)] mb-1">
                {item.metric}
              </span>
              <span className="font-display font-semibold text-sm sm:text-base text-[var(--royal-forest)] mb-0.5">
                {item.label}
              </span>
              <span className="text-[11px] sm:text-xs text-[var(--royal-muted)]">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 4 Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {statements.map((stmt, idx) => (
            <motion.div
              key={stmt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl border border-[var(--royal-sand)] shadow-sm hover:shadow-md hover:border-[var(--royal-gold)]/40 transition-all flex gap-4 items-start group"
            >
              <span className="text-[var(--royal-gold)] font-display font-bold text-xl pt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                {stmt.id}
              </span>
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--royal-ink)] mb-1 group-hover:text-[var(--royal-forest)] transition-colors">
                  {stmt.title}
                </h3>
                <p className="text-[var(--royal-muted)] text-sm leading-relaxed">
                  {stmt.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/about" className="btn-secondary">
            Discover Royal Classic Tours
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIntroduction;
