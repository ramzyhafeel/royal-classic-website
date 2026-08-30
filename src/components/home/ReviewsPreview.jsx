import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { reviews } from '../../data/reviews';

export default function ReviewsPreview() {
  const displayReviews = reviews.slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-[var(--royal-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-forest)] mb-4">
            Stories from the road.
          </h2>
          <p className="text-base text-[var(--royal-muted)] max-w-2xl mx-auto md:mx-0">
            What our guests say about their Sri Lanka journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {displayReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-[var(--radius)] border-l-2 border-[var(--royal-gold)] shadow-sm"
            >
              <blockquote className="mb-6">
                <p className="font-display text-base sm:text-lg italic text-[var(--royal-forest)] leading-relaxed">
                  "{review.quote || review.text}"
                </p>
              </blockquote>
              <div>
                <p className="font-semibold text-sm text-[var(--royal-ink)]">{review.author}</p>
                <p className="text-xs text-[var(--royal-muted)] mt-1">
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
            Read All Reviews
          </Link>
        </motion.div>

      </div>
    </section>
  );
}