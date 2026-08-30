import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';
import { siteConfig } from '../../data/site';
import { createWhatsAppLink, whatsappMessages } from '../../utils/whatsapp';
import Container from './Container';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#123B2A] text-white pt-20 pb-8 border-t border-white/10">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <div className="flex flex-col gap-3">
              <Link to="/" className="inline-flex group" aria-label="Royal Classic Tours Home">
                <Logo isDark={true} size="md" />
              </Link>
              <p className="text-[#C5A35A] font-medium tracking-wide text-sm mt-1">
                Discover Sri Lanka. Travel Your Way.
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Private journeys, professional drivers and tailor-made holidays across Sri Lanka.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-display text-[#C5A35A] text-xl mb-6">Explore</h3>
            <ul className="flex flex-col gap-4">
              {['Home', 'Packages', 'Transportation', 'Hotels', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display text-[#C5A35A] text-xl mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              {['About', 'Reviews', 'Contact', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'FAQs' ? '/contact' : `/${item.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display text-[#C5A35A] text-xl mb-6">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href={createWhatsAppLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#C5A35A] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{siteConfig.contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="group flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-[#C5A35A] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:hello@royalclassictours.lk`}
                  className="group flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-[#C5A35A] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>hello@royalclassictours.lk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="w-5 h-5 text-[#C5A35A] shrink-0 mt-0.5" />
                  <span>Sri Lanka</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Row */}
        <div className="flex justify-center md:justify-start items-center gap-4 py-8 border-t border-white/10">
          <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C5A35A] hover:text-[#123B2A] transition-all duration-300">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C5A35A] hover:text-[#123B2A] transition-all duration-300">
            <FaFacebook className="w-4 h-4" />
          </a>
          <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C5A35A] hover:text-[#123B2A] transition-all duration-300">
            <FaTiktok className="w-4 h-4" />
          </a>
          <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C5A35A] hover:text-[#123B2A] transition-all duration-300">
            <FaYoutube className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="text-sm text-white/50 text-center md:text-left">
            <p className="mb-2">© {currentYear} Royal Classic Tours. All Rights Reserved.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link to="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <span>|</span>
              <Link to="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-sm text-white/50">
              Designed & Developed by <a href="https://ramzyhafeel.me" target="_blank" rel="noopener noreferrer" className="text-[#C5A35A] hover:text-white transition-colors duration-300">Mohamed Ramzy</a>
            </p>
            
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#C5A35A] hover:text-[#123B2A] transition-all duration-300 focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;