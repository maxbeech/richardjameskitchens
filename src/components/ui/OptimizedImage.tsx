import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  onClick?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width = 1200,
  height = 800,
  fill = false,
  priority = false,
  sizes = '100vw',
  quality = 85,
  onClick,
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      sizes={sizes}
      quality={quality}
      onClick={onClick}
    />
  );
} 