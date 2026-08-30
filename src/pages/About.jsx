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

      <section className="section-padding bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-royal-gold/30"></div>
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-royal-muted leading-relaxed"
          >
            <p className="text-royal-forest font-medium text-xl">
              Royal Classic Tours was created around a simple idea: travelling through Sri Lanka should feel personal, flexible and easy.
            </p>
            <p>
              Some travellers arrive with every destination already planned. Others want a local travel company to help shape the complete journey. Royal Classic Tours is designed for both.
            </p>
            <p>
              Whether you need reliable private transportation to move between your pre-booked stays, or a complete private tour designed specifically for you with accommodation assistance, we ensure your time in Sri Lanka is seamless and comfortable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-royal-ivory">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl text-royal-forest mb-12 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-[var(--radius)] shadow-sm"
              >
                <div className="text-royal-gold font-display text-3xl mb-4 opacity-50">{value.num}</div>
                <h3 className="font-display text-xl text-royal-forest mb-2 font-semibold">{value.title}</h3>
                <p className="text-sm text-royal-muted">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom text-center max-w-2xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-4xl text-royal-forest mb-4">Ready to explore?</h2>
          <p className="text-royal-muted mb-8 text-lg">Let's craft your perfect Sri Lankan itinerary together.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/customize-tour" className="btn-primary w-full sm:w-auto">
              Plan My Journey
            </Link>
            <a 
              href={createWhatsAppLink(whatsappMessages.general)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* Optional subtle JourneyLine in background */}
        </div>
      </section>
    </Layout>
  );
}