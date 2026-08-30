import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { createWhatsAppLink, whatsappMessages } from "../../utils/whatsapp";

/**
 * MobileConversionBar — Fixed compact bottom bar on mobile.
 * Shows WhatsApp + Plan Trip buttons after scrolling past hero.
 */
export default function MobileConversionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const waHref = createWhatsAppLink(whatsappMessages.general);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#123B2A] border-t border-white/10 shadow-lg"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-stretch">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white text-sm font-semibold border-r border-white/10 active:bg-white/5 transition"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={18} />
          <span>WhatsApp</span>
        </a>
        <Link
          to="/customize-tour"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[#C5A35A] text-sm font-semibold active:bg-white/5 transition"
        >
          <span>Plan Trip</span>
          <span className="text-xs">→</span>
        </Link>
      </div>
    </div>
  );
}
