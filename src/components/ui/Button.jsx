import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

/**
 * Button — Reusable branded button component.
 * Supports primary, secondary, gold, hero-primary, hero-secondary variants.
 */
export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  children,
  className = "",
  icon,
  iconRight,
  ...props
}) {
  const variants = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    gold: "btn btn-gold",
    "hero-primary": "btn btn-hero-primary",
    "hero-secondary": "btn btn-hero-secondary",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  const classes = cn(variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  // Internal route link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  // Button element
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
