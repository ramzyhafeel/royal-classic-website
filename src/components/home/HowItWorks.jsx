import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: 'Tell us about your trip',
    desc: 'Share your dates, party size, and experiences that inspire you.'
  },
  {
    num: '02',
    title: 'Choose how you want to travel',
    desc: 'Select private chauffeur vehicle hire or an all-inclusive bespoke tour.'
  },
  {
    num: '03',
    title: 'Receive your personalized plan',
    desc: 'Our local specialists prepare your route, curated hotels, and a transparent quote.'
  },
  {
    num: '04',
    title: 'Discover Sri Lanka in private luxury',
    desc: 'Travel stress-free with your dedicated, licensed English-speaking chauffeur guide.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 bg-[#123B2A] text-white border-b border-[var(--royal-gold)]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[var(--royal-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
            SEAMLESS PLANNING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl mx-auto">
            Your Sri Lanka journey in four simple steps.
          </h2>
          <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto mt-3">
            From your first message to your flight home, we handle every kilometre with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 relative hover:border-[var(--royal-gold)]/40 transition-all group"
            >
              <div className="font-display text-3xl font-bold text-[var(--royal-gold)] mb-3 group-hover:scale-105 transition-transform">
                {step.num}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link 
            to="/customize-tour" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[var(--royal-gold)] hover:bg-[#D4B36A] text-[#0D2C20] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            Start Planning Your Journey
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
