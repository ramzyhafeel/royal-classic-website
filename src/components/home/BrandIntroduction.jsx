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
    <section className="py-24 bg-[var(--royal-ivory)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-[#C5A35A] uppercase tracking-widest text-xs font-semibold mb-4">
            MEET ROYAL CLASSIC TOURS
          </span>
          <div className="mb-6 w-10">
            <JourneyLine orientation="horizontal" length="40px" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--royal-ink)] mb-6 leading-tight">
            <span className="block">More than a driver.</span>
            <span className="block italic font-light">More personal than a traditional tour company.</span>
          </h2>
          <div className="max-w-2xl space-y-4 text-[var(--royal-muted)]">
            <p>
              Royal Classic Tours helps international travellers experience Sri Lanka privately, comfortably and at their own pace.
            </p>
            <p>
              Choose only the transportation you need, start with one of our curated journeys, or let us help shape a complete holiday around your dates and interests.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {statements.map((stmt, idx) => (
            <motion.div
              key={stmt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-4 items-start"
            >
              <span className="text-[#C5A35A] font-display font-semibold text-lg pt-1">
                {stmt.id}
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg text-[var(--royal-ink)] mb-1">
                  {stmt.title}
                </h3>
                <p className="text-[var(--royal-muted)] text-sm">
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
          transition={{ duration: 0.6, delay: 0.4 }}
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
