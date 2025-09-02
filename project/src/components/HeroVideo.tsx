import React from 'react';

type CTA = { label: string; href: string };

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ctas?: CTA[];
  height?: string; // tailwind height utility classes
};

const HeroVideo: React.FC<Props> = ({ title, subtitle, ctas = [], height = 'min-h-[70vh]' }) => {
  const [reduceMotion, setReduceMotion] = React.useState(false);
  const [showFallback, setShowFallback] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  return (
    <section
      data-testid="hero"
      className={`relative ${height} flex items-center justify-center overflow-hidden bg-black text-white`}
    >
      {!(reduceMotion || showFallback) ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="./assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="./assets/hero.jpg"
          onError={() => setShowFallback(true)}
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="./assets/hero.jpg"
          alt="Hero background"
          loading="lazy"
          decoding="async"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        {ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-colors duration-200"
              >
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroVideo;
