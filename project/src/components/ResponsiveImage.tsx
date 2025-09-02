import React from 'react';

type ResponsiveImageProps = {
  src: string; // path relative to public/assets or absolute URL
  alt: string;
  className?: string;
  containerClassName?: string;
  sizes?: string; // e.g., "(min-width: 1024px) 33vw, 100vw"
  width?: number; // intrinsic width (optional)
  height?: number; // intrinsic height (optional)
  fit?: 'cover' | 'contain';
  priority?: boolean; // if true, load eagerly
};

/**
 * Lightweight responsive image for Vite/React apps.
 * - Adds lazy loading + async decoding by default (similar benefits to next/image).
 * - Accepts an optional sizes prop to hint layout across breakpoints.
 * - If width/height are provided, we set attributes to reduce CLS.
 * - Resolves relative asset paths into "./assets/..." under public/.
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  sizes,
  width,
  height,
  fit = 'cover',
  priority = false,
}) => {
  const [errored, setErrored] = React.useState(false);

  const absoluteSrc = React.useMemo(() => {
    if (!src) return '';
    if (src.startsWith('http://') || src.startsWith('https://')) return src;
    if (src.startsWith('./assets/') || src.startsWith('/assets/')) return src;
    return `./assets/${src}`;
  }, [src]);

  if (errored || !absoluteSrc) return null;

  const img = (
    <img
      src={absoluteSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ objectFit: fit }}
      onError={() => setErrored(true)}
      sizes={sizes}
    />
  );

  // If no explicit dimensions, just return the image.
  if (!width || !height) return img;

  // If width/height provided, also wrap with an aspect-ratio container to avoid CLS when styled responsively.
  const aspectRatio = `${width}/${height}`;
  return (
    <div className={containerClassName} style={{ aspectRatio }}>
      {img}
    </div>
  );
};

export default ResponsiveImage;

