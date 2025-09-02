import React, { useState } from 'react';

type Props = {
  src: string; // relative to /assets (e.g., 'designer-1.jpeg')
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

const ImageX: React.FC<Props> = ({ src, alt, className, width, height }) => {
  const [errored, setErrored] = useState(false);

  // Build absolute path to public assets
  const absoluteSrc = React.useMemo(() => {
    if (!src) return '';
    // If already absolute or starts with /assets, use as-is
    if (src.startsWith('http://') || src.startsWith('https://')) return src;
    if (src.startsWith('./assets/') || src.startsWith('/assets/')) return src;
    return `./assets/${src}`;
  }, [src]);

  if (errored || !absoluteSrc) {
    // Simple fallback: render nothing to keep it lightweight
    return null;
  }

  return (
    <img
      src={absoluteSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      onError={() => setErrored(true)}
    />
  );
};

export default ImageX;

