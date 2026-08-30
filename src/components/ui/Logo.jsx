import React from 'react';
import { cn } from '../../utils/cn';

const Logo = ({ 
  isDark = false, 
  size = 'nav', // 'nav' | 'sm' | 'md' | 'lg'
  className = '',
}) => {
  // Height sizing tailored for crisp proportions across all devices
  const sizeClasses = {
    nav: 'h-11 sm:h-12 md:h-14 lg:h-15 xl:h-16',
    sm: 'h-8 sm:h-9 md:h-10',
    md: 'h-12 sm:h-14 md:h-16',
    lg: 'h-16 sm:h-20 md:h-24',
  };

  const currentHeight = sizeClasses[size] || sizeClasses.nav;
  const logoSrc = isDark ? '/images/logo/logo-web-white.png' : '/images/logo/logo-web.png';

  return (
    <div className={cn("inline-flex items-center select-none shrink-0", className)}>
      <img 
        src={logoSrc} 
        alt="Royal Classic Tours" 
        className={cn(
          "w-auto object-contain transition-all duration-300 group-hover:scale-105",
          currentHeight
        )}
        loading="eager"
      />
    </div>
  );
};

export default Logo;
