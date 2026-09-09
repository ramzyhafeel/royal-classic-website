import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { reviews } from '../../data/reviews';

export default function ReviewsPreview() {
  const displayReviews = reviews.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-[var(--royal-ivory)] border-b border-[var(--royal-sand)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 text-center md:text-left"
        >
          <span className="text-[#C5A35A] uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-forest)] mb-3">
            Stories from the road.
          </h2>
          <p className="text-sm sm:text-base text-[var(--royal-muted)] max-w-2xl mx-auto md:mx-0">
            Read what travellers from around the world say about their private journey with Royal Classic Tours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {displayReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[var(--royal-sand)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[var(--royal-gold)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--royal-gold)]" />
                  ))}
                </div>
                <blockquote className="mb-6">
                  <p className="font-display text-base sm:text-lg italic text-[var(--royal-forest)] leading-relaxed">
                    "{review.quote || review.text}"
                  </p>
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[var(--royal-sand)]">
                <p className="font-semibold text-sm text-[var(--royal-ink)]">{review.author || review.name}</p>
                <p className="text-xs text-[var(--royal-muted)] mt-0.5">
                  {review.country} {review.tripType ? `· ${review.tripType}` : ''}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/reviews" className="btn-secondary inline-flex">
            Read All Guest Reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
}