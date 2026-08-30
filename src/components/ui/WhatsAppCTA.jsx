import { FaWhatsapp } from "react-icons/fa";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { cn } from "../../utils/cn";

/**
 * WhatsAppCTA — Reusable WhatsApp call-to-action button.
 */
export default function WhatsAppCTA({
  message = "",
  label = "WhatsApp Us",
  variant = "default",
  className = "",
  size = "md",
}) {
  const href = createWhatsAppLink(message);

  const variants = {
    default:
      "bg-[#123B2A] text-white hover:bg-[#0D2C20]",
    light:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    outline:
      "bg-transparent text-[#123B2A] border border-[#123B2A] hover:bg-[#123B2A] hover:text-white",
    green:
      "bg-[#25D366] text-white hover:bg-[#20BD5A]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-sm",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300",
        "rounded-[var(--radius)]",
        variants[variant],
        sizes[size],
        className
      )}
      aria-label={`Chat with Royal Classic Tours on WhatsApp — ${label}`}
    >
      <FaWhatsapp size={size === "sm" ? 14 : 18} />
      <span>{label}</span>
    </a>
  );
}
