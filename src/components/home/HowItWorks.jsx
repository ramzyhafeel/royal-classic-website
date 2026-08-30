import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

// In case JourneyLine isn't fully implemented in ui/JourneyLine, we build the visual inline.
// But we still adhere to the requested structure if needed.

const steps = [
  {
    num: '01',
    title: 'Tell us about your trip',
    desc: 'Dates, travellers and what interests you.'
  },
  {
    num: '02',
    title: 'Choose how you want to travel',
    desc: 'Transportation only or complete tour.'
  },
  {
    num: '03',
    title: 'Receive your personalized plan',
    desc: 'We prepare your route and quotation.'
  },
  {
    num: '04',
    title: 'Discover Sri Lanka',
    desc: 'Travel privately with your Royal Classic Tours driver.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--royal-sand)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-forest)] max-w-3xl mx-auto">
            Your Sri Lanka journey in four simple steps.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Royal Journey Line (Vertical) */}
          <div className="absolute left-[28px] sm:left-[38px] top-4 bottom-12 w-[1px] bg-[var(--royal-gold)]/30" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-20 sm:pl-28"
              >
                {/* Node */}
                <div className="absolute left-[24px] sm:left-[34px] top-1 w-[9px] h-[9px] rounded-full bg-[var(--royal-gold)] shadow-[0_0_0_4px_var(--royal-sand)]" />
                
                <div className="absolute left-0 top-0 font-display text-2xl text-[var(--royal-gold)] w-12 text-right">
                  {step.num}
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--royal-forest)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--royal-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Link to="/customize-tour" className="btn-primary inline-flex">
            Start Planning
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
