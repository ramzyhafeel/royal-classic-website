import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { packages } from '../../data/packages';

export default function FeaturedJourneys() {
  const featuredPackages = packages.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="section-padding bg-royal-ivory">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-royal-forest mb-4">
            Journeys worth taking slowly.
          </h2>
          <p className="text-royal-muted text-base sm:text-lg max-w-2xl mx-auto">
            Begin with a carefully designed Sri Lanka itinerary and make it your own.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredPackages.map((pkg) => (
            <motion.div key={pkg.id || pkg.slug} variants={itemVariants} className="group flex flex-col">
              <Link to={`/packages/${pkg.slug}`} className="block relative aspect-[4/3] rounded-[var(--radius)] overflow-hidden mb-5">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </Link>
              
              <div className="flex flex-col flex-grow">
                <div className="text-xs text-royal-gold uppercase tracking-wider font-semibold mb-3">
                  {pkg.duration} • {pkg.categories ? pkg.categories.join(' • ') : 'TOUR'}
                </div>
                
                <h3 className="font-display text-xl sm:text-2xl text-royal-forest mb-3">
                  {pkg.title}
                </h3>
                
                <div className="text-sm text-royal-muted mb-5 line-clamp-2">
                  {pkg.route ? pkg.route.join(' → ') : ''}
                </div>
                
                <div className="mt-auto">
                  <Link 
                    to={`/packages/${pkg.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-royal-forest group-hover:text-royal-gold transition-colors duration-300"
                  >
                    Explore Journey <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-16 md:mt-20 text-center"
        >
          <Link to="/packages" className="btn-secondary">
            View All Journeys
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
