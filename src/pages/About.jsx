import React from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import JourneyLine from '../components/ui/JourneyLine';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function About() {
  const values = [
    { num: '01', title: 'Personal', text: 'Every journey should reflect the traveller.' },
    { num: '02', title: 'Flexible', text: 'Travel at your own pace.' },
    { num: '03', title: 'Local', text: 'Experience Sri Lanka with local knowledge.' },
    { num: '04', title: 'Comfortable', text: 'Enjoy private transportation across the island.' },
    { num: '05', title: 'Clear', text: 'Know what is being arranged before confirming your trip.' }
  ];

  return (
    <Layout>
      <PageHero 
        title="Travel Sri Lanka with people who know it." 
        image="/images/hero/hero1.jpg" 
      />

      <section className="py-14 sm:py-20 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-royal-gold/30"></div>
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-royal-muted leading-relaxed"
          >
            <span className="text-[var(--royal-gold)] uppercase tracking-widest text-xs font-semibold block">
              OUR STORY & PHILOSOPHY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-royal-forest font-semibold leading-snug">
              Royal Classic Tours was created around a simple idea: travelling through Sri Lanka should feel personal, flexible and easy.
            </h2>
            <p className="text-base sm:text-lg text-[var(--royal-muted)] font-light max-w-2xl mx-auto">
              Some travellers arrive with every destination already planned. Others want a local travel company to help shape the complete journey. Royal Classic Tours is designed for both.
            </p>
            <p className="text-base text-[var(--royal-muted)] font-light max-w-2xl mx-auto">
              Whether you need reliable private transportation to move between your pre-booked stays, or a complete private tour designed specifically for you with accommodation assistance, we ensure your time in Sri Lanka is seamless, safe, and comfortable.
            </p>
          </motion.div>

          {/* Luxury Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[var(--border)]">
            <div className="p-4">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[var(--royal-forest)] mb-1">12+</div>
              <div className="text-xs uppercase tracking-wider text-[var(--royal-muted)]">Years Island Experience</div>
            </div>
            <div className="p-4">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[var(--royal-forest)] mb-1">100%</div>
              <div className="text-xs uppercase tracking-wider text-[var(--royal-muted)]">Private AC Fleet</div>
            </div>
            <div className="p-4">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[var(--royal-forest)] mb-1">4.9★</div>
              <div className="text-xs uppercase tracking-wider text-[var(--royal-muted)]">Guest Satisfaction</div>
            </div>
            <div className="p-4">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[var(--royal-forest)] mb-1">24/7</div>
              <div className="text-xs uppercase tracking-wider text-[var(--royal-muted)]">On-Trip Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[var(--royal-ivory)] border-t border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[var(--royal-gold)] uppercase tracking-widest text-xs font-semibold block mb-2">
              HOW WE OPERATE
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-royal-forest font-semibold">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={value.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white p-7 rounded-2xl shadow-sm border border-[var(--border)]/70 hover:border-[var(--royal-gold)]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[var(--royal-gold)] font-display text-2xl sm:text-3xl font-bold mb-4 opacity-75">{value.num}</div>
                  <h3 className="font-display text-lg text-royal-forest mb-2 font-semibold">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-royal-muted leading-relaxed">{value.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="container-custom text-center max-w-2xl mx-auto relative z-10">
          <span className="text-[var(--royal-gold)] uppercase tracking-widest text-xs font-semibold block mb-2">
            YOUR SRI LANKA STORY
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-royal-forest mb-4 font-semibold">Ready to explore?</h2>
          <p className="text-royal-muted mb-8 text-base sm:text-lg">
            Let's craft your perfect Sri Lankan itinerary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/customize-tour" className="btn btn-primary w-full sm:w-auto px-8 py-3.5">
              Plan My Journey
            </Link>
            <a 
              href={createWhatsAppLink(whatsappMessages.general)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}