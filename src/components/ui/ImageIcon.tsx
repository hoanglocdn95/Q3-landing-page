import Image from 'next/image';
import React, { useMemo } from 'react';

interface IImageIconProps {
  icon: string;
  alt: string;
  size: 'sm' | 'md' | 'lg';
  width?: number;
  height?: number;
  className?: string;
}

const sizeMap = {
  sm: { height: 20, width: 20 },
  md: { height: 24, width: 24 },
  lg: { height: 32, width: 32 },
};

const ImageIcon = ({
  icon,
  alt,
  size,
  height,
  width,
  ...props
}: IImageIconProps) => {
  const src = `/icons/${icon}.svg`;

  const sizeIcon = useMemo(() => {
    if (height && width) {
      return { height, width };
    }

    return sizeMap[size];
  }, [height, width, size]);

  return (
    <Image src={src} alt={alt || 'icon'} {...sizeIcon} {...props} priority />
  );
};

export { ImageIcon };
