import React from 'react';
import { cn } from '../../utils/cn';

const Logo = ({ 
  isDark = false, 
  size = 'nav', // 'nav' | 'sm' | 'md' | 'lg'
  className = '',
}) => {
  // Height sizing tailored for bold, crisp visibility across all screen sizes
  const sizeClasses = {
    nav: 'h-[54px] sm:h-[62px] md:h-[68px] lg:h-[76px] xl:h-[84px]',
    sm: 'h-8 sm:h-10 md:h-12',
    md: 'h-12 sm:h-16 md:h-20',
    lg: 'h-16 sm:h-22 md:h-28',
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
