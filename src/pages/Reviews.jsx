import React from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import { reviews } from '../data/reviews';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaWhatsapp, FaShieldAlt } from 'react-icons/fa';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function Reviews() {
  return (
    <Layout>
      <PageHero 
        title="Journeys remembered." 
        subtitle="What travellers say about their Sri Lanka experience with Royal Classic Tours." 
        image="/images/hero/hero2.jpg" 
      />

      <section className="py-14 sm:py-20 bg-[var(--royal-ivory)]">
        <div className="container-custom max-w-4xl mx-auto">
          
          {/* Trust Score Header Banner */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[var(--border)] shadow-sm mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[var(--royal-forest)] text-white flex flex-col items-center justify-center shrink-0">
                <span className="font-display text-2xl font-bold leading-none">4.9</span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--royal-gold)] mt-0.5">out of 5</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[var(--royal-gold)] text-sm mb-1 justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h3 className="font-display font-semibold text-lg text-[var(--royal-forest)]">
                  Exceptional Guest Experiences
                </h3>
                <p className="text-xs text-[var(--royal-muted)]">
                  Based on verified reviews from UK, Europe, Australia & Middle East
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--royal-forest)] bg-[var(--royal-ivory)] px-4 py-2.5 rounded-full border border-[var(--border)] shrink-0">
              <FaShieldAlt className="text-[var(--royal-gold)]" />
              <span>100% Verified Travellers</span>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[var(--border)]/70 shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[var(--royal-gold)] text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  {review.tripType && (
                    <span className="text-[11px] font-medium text-[var(--royal-forest)] bg-[var(--royal-ivory)] border border-[var(--border)] px-3 py-1 rounded-full uppercase tracking-wider">
                      {review.tripType}
                    </span>
                  )}
                </div>

                <blockquote className="font-display text-lg sm:text-xl italic text-royal-forest mb-6 leading-relaxed">
                  "{review.quote || review.text}"
                </blockquote>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--royal-forest)]/10 text-[var(--royal-forest)] font-display font-bold flex items-center justify-center text-sm">
                      {review.name ? review.name.charAt(0) : 'T'}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[var(--royal-ink)]">{review.name}</div>
                      <div className="text-xs text-[var(--royal-muted)]">
                        {review.country && <span>{review.country}</span>}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--royal-gold)] font-medium hidden sm:inline-block">
                    Verified Journey
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-t border-[var(--border)]">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <span className="text-[var(--royal-gold)] uppercase tracking-widest text-xs font-semibold block mb-2">
            FEEDBACK & REVIEWS
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-royal-forest mb-4 font-semibold">Share Your Experience</h2>
          <p className="text-royal-muted mb-8 text-base sm:text-lg">
            We value your feedback and would love to hear about your journey with Royal Classic Tours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={createWhatsAppLink("Hi, I recently traveled with Royal Classic Tours and would like to share my experience.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={18} />
              Message on WhatsApp
            </a>
            <Link 
              to="/contact" 
              className="btn btn-secondary w-full sm:w-auto px-8 py-3.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}