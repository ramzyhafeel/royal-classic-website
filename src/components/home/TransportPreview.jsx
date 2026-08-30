import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import JourneyLine from '../ui/JourneyLine';
import { createWhatsAppLink, whatsappMessages } from '../../utils/whatsapp';

export default function TransportPreview() {
  const whatsappUrl = createWhatsAppLink(whatsappMessages.transportation);

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full bg-[#123B2A] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        
        <div className="h-[400px] lg:h-auto lg:w-full">
          <img
            src="/images/transport/scenic-road-sri-lanka.jpg"
            alt="Scenic road in Sri Lanka"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
        
        <motion.div 
          className="p-10 lg:p-16 xl:p-20 flex flex-col justify-center"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-royal-gold text-sm uppercase tracking-widest font-semibold mb-6">
            TRAVEL AT YOUR OWN PACE
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <JourneyLine className="w-[40px]" />
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl leading-tight mb-8">
            <div>Your route.</div>
            <div>Your schedule.</div>
            <div className="italic text-royal-gold">Your private driver.</div>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-white/80 text-base sm:text-lg mb-10 max-w-lg">
            If your hotels and itinerary are already arranged, Royal Classic Tours can simply provide the private transportation.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link to="/transportation" className="btn-hero-primary text-center">
              Explore Our Vehicles
            </Link>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary text-center"
            >
              Request Transport Quote
            </a>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
