import React from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import { reviews } from '../data/reviews';
import { motion } from 'framer-motion';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function Reviews() {
  return (
    <Layout>
      <PageHero 
        title="Journeys remembered." 
        subtitle="What travellers say about their Sri Lanka experience with Royal Classic Tours." 
        image="/images/hero/hero2.jpg" 
      />

      <section className="section-padding bg-royal-ivory">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="grid gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[var(--radius)] p-8 border-l-2 border-royal-gold shadow-sm"
              >
                <blockquote className="font-display text-lg md:text-xl italic text-royal-forest mb-6">
                  "{review.quote || review.text}"
                </blockquote>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-2">
                  <div>
                    <div className="font-medium text-royal-ink">{review.name}</div>
                    <div className="text-sm text-royal-muted">
                      {review.country && <span>{review.country}</span>}
                      {review.country && review.tripType && <span className="mx-2">•</span>}
                      {review.tripType && <span>{review.tripType}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-royal-sand">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-royal-forest mb-4">Share Your Experience</h2>
          <p className="text-royal-muted mb-8 text-lg">We'd love to hear about your journey with us.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={createWhatsAppLink("Hi, I recently traveled with Royal Classic Tours and would like to share my experience.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto"
            >
              Message on WhatsApp
            </a>
            <a 
              href="/contact" 
              className="btn-secondary w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}