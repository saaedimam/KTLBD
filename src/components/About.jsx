import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [counters, setCounters] = useState({
    years: 0,
    workers: 0,
    lines: 0,
    capacity: 0
  });

  const stats = [
    { 
      key: 'years',
      target: 20, 
      label: 'Years Experience', 
      icon: Award,
      suffix: '+',
      description: 'Established in 2004'
    },
    { 
      key: 'workers',
      target: 850, 
      label: 'Skilled Workers', 
      icon: Users,
      suffix: '+',
      description: 'Dedicated professionals'
    },
    { 
      key: 'lines',
      target: 12, 
      label: 'Production Lines', 
      icon: Factory,
      suffix: '',
      description: 'State-of-the-art facilities'
    },
    { 
      key: 'capacity',
      target: 2.5, 
      label: 'Million Units/Year', 
      icon: TrendingUp,
      suffix: 'M',
      description: 'Annual production capacity'
    }
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach(stat => {
        let start = 0;
        const end = stat.target;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.key]: stat.key === 'capacity' ? start.toFixed(1) : Math.floor(start)
          }));
        }, 16);
      });
    }
  }, [isInView]);

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">KTL</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Established in Chattogram, Bangladesh, we are a leading manufacturer of premium textiles, 
            producing knitwear, uniforms, woven garments, schoolwear, and sportswear for global markets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center neon-glow">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Story</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Since 2004, Kattali Textile Ltd has been at the forefront of Bangladesh's textile industry, 
                combining traditional craftsmanship with cutting-edge technology to deliver exceptional 
                quality garments to international markets.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Our commitment to excellence, sustainability, and ethical manufacturing practices has 
                established us as a trusted partner for global brands seeking reliable textile sourcing 
                from Bangladesh.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-dark rounded-lg p-4 text-center">
                  <Globe className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-400">Export Markets</div>
                  <div className="font-bold text-white">USA, Canada, UK</div>
                </div>
                <div className="glass-dark rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-400">Certifications</div>
                  <div className="font-bold text-white">ISO, OEKO-TEX</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden neon-glow">
              <img 
                src="/assets/about-factory.png" 
                alt="Aerial view of KTL garment factory"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-bold text-white mb-2">Modern Manufacturing Facility</h4>
                <p className="text-gray-300 text-sm">
                  State-of-the-art production facility in Chattogram, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass-dark rounded-xl p-8 text-center card-hover group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center mx-auto mb-4 neon-glow group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-counter">
                {counters[stat.key]}{stat.suffix}
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="glass-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To deliver world-class textile manufacturing services while maintaining the highest 
              standards of quality, sustainability, and ethical business practices. We are committed 
              to fostering long-term partnerships with our global clients and contributing to the 
              economic development of Bangladesh.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;