import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { packages } from '../data/packages';
import { packageSeo } from '../utils/seoHelpers';

const Packages = () => {
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const durations = ['All', '4 Days', '5 Days', '6 Days', '7 Days', '8 Days', '9 Days'];
  const categories = ['All', 'Culture', 'Wildlife', 'Beach', 'Hill Country', 'Wellness', 'Adventure', 'Family', 'Honeymoon'];

  const filteredPackages = packages.filter(pkg => {
    const matchesDuration = selectedDuration === 'All' || pkg.duration === selectedDuration;
    const matchesCategory = selectedCategory === 'All' || pkg.categories.includes(selectedCategory);
    return matchesDuration && matchesCategory;
  });

  return (
    <Layout>
      <Seo title="Find your Sri Lanka journey." description="Choose by duration or travel style, then personalize the journey around you." />
      <PageHero
        title="Find your Sri Lanka journey."
        subtitle="Choose by duration or travel style, then personalize the journey around you."
        image="/images/hero/hero4.jpg"
      />

      {/* Filters */}
      <section className="py-8 bg-[var(--royal-ivory)] border-b border-[var(--royal-sand)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[var(--royal-muted)] text-sm font-medium uppercase tracking-wider">Duration:</span>
              <div className="flex flex-wrap gap-4">
                {durations.map(duration => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`text-sm pb-1 transition-colors duration-300 ${
                      selectedDuration === duration
                        ? 'text-[var(--royal-gold)] border-b-2 border-[var(--royal-gold)] font-semibold'
                        : 'text-[var(--royal-muted)] hover:text-[var(--royal-forest)]'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[var(--royal-muted)] text-sm font-medium uppercase tracking-wider">Style:</span>
              <div className="flex flex-wrap gap-4">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm pb-1 transition-colors duration-300 ${
                      selectedCategory === category
                        ? 'text-[var(--royal-gold)] border-b-2 border-[var(--royal-gold)] font-semibold'
                        : 'text-[var(--royal-muted)] hover:text-[var(--royal-forest)]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Grid */}
      <section className="py-16 md:py-24 bg-[var(--royal-white)]">
        <div className="container mx-auto px-4 max-w-7xl">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col bg-[var(--royal-white)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--royal-sand)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3 text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold">
                      {pkg.duration} • {pkg.categories.join(' • ')}
                    </div>
                    <h3 className="font-display text-xl text-[var(--royal-forest)] mb-2 group-hover:text-[var(--royal-gold)] transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-[var(--royal-muted)] mb-4 pb-4 border-b border-[var(--royal-sand)]">
                      {pkg.route.join(' → ')}
                    </p>
                    <p className="text-sm text-[var(--royal-muted)] line-clamp-2 mb-6 flex-grow">
                      {pkg.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        to={`/packages/${pkg.slug}`}
                        className="text-sm font-semibold text-[var(--royal-forest)] hover:text-[var(--royal-gold)] transition-colors duration-300 flex items-center group/link"
                      >
                        Explore Journey
                        <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                      <Link
                        to={`/customize-tour`}
                        className="text-xs font-medium text-[var(--royal-muted)] hover:text-[var(--royal-gold)] transition-colors duration-300"
                      >
                        Customize
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-display text-2xl text-[var(--royal-forest)] mb-4">No journeys found</h3>
              <p className="text-[var(--royal-muted)] mb-8">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => {
                  setSelectedDuration('All');
                  setSelectedCategory('All');
                }}
                className="px-6 py-2 border border-[var(--royal-forest)] text-[var(--royal-forest)] hover:bg-[var(--royal-forest)] hover:text-white transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Packages;