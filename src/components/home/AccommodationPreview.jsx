import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

const accommodations = [
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium resorts and boutique properties.',
    image: '/images/hotels/luxury-resort-sri-lanka.jpg',
  },
  {
    id: 'comfort',
    name: 'Comfort',
    description: 'Quality hotels with modern facilities.',
    image: '/images/hotels/comfort-hotel-sri-lanka.jpg',
  },
  {
    id: 'budget',
    name: 'Budget',
    description: 'Clean, comfortable guesthouses and homestays.',
    image: '/images/hotels/budget-guesthouse-sri-lanka.jpg',
  }
];

export default function AccommodationPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section className="section-padding bg-[#EEE7DA]">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-royal-forest mb-4">
            Stay your way.
          </h2>
          <p className="text-royal-muted text-base sm:text-lg max-w-2xl mx-auto">
            From relaxed guesthouses to luxury resorts, accommodation options can be included according to your preferred travel style and budget.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {accommodations.map((acc) => (
            <motion.div key={acc.id} variants={itemVariants} className="group flex flex-col">
              <Link to="/hotels" className="block relative aspect-[3/4] rounded-[var(--radius)] overflow-hidden mb-5">
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </Link>
              
              <div className="flex flex-col flex-grow text-center">
                <h3 className="font-display text-xl text-royal-forest mb-2">
                  {acc.name}
                </h3>
                
                <p className="text-sm text-royal-muted mb-4">
                  {acc.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to="/hotels"
                    className="inline-flex items-center text-sm font-semibold text-royal-gold hover:text-royal-forest transition-colors duration-300"
                  >
                    Ask About This Stay <span className="ml-1">→</span>
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
          <Link to="/hotels" className="btn-secondary">
            Explore Accommodation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
