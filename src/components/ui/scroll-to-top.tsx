'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import { Button } from './button';

interface ScrollToTopProps {
  className?: string;
  threshold?: number;
}

export function ScrollToTop({ className, threshold = 300 }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="icon"
      size="icon"
      className={cn(
        'bg-primary hover:bg-primary-hover invisible fixed right-6 bottom-6 z-50 translate-y-4 rounded-full text-white opacity-0 shadow-lg transition-all duration-300 hover:scale-110',
        isVisible && 'visible translate-y-0 opacity-100',
        className,
      )}
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
}
