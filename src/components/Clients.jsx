import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, TrendingUp, Users, MapPin, Star, ArrowRight } from 'lucide-react';

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [progress, setProgress] = useState({
    usa: 0,
    canada: 0,
    uk: 0
  });

  const markets = [
    {
      key: 'usa',
      name: 'United States',
      target: 45,
      description: 'Leading fashion brands and retailers',
      flag: '🇺🇸',
      clients: ['Fashion Brand A', 'Retail Chain B', 'Department Store C'],
      image: '/assets/clients/client1.png'
    },
    {
      key: 'canada',
      name: 'Canada',
      target: 30,
      description: 'Premium clothing manufacturers',
      flag: '🇨🇦',
      clients: ['Canadian Brand X', 'Retail Group Y', 'Fashion House Z'],
      image: '/assets/clients/client2.png'
    },
    {
      key: 'uk',
      name: 'United Kingdom',
      target: 25,
      description: 'High-end fashion and sportswear',
      flag: '🇬🇧',
      clients: ['UK Fashion Ltd', 'Sports Brand UK', 'Luxury Retail'],
      image: '/assets/clients/client3.png'
    }
  ];

  const achievements = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: '3 major export markets across North America and Europe'
    },
    {
      icon: TrendingUp,
      title: 'Growth Rate',
      description: '25% year-over-year growth in international sales'
    },
    {
      icon: Users,
      title: 'Client Retention',
      description: '95% client retention rate with long-term partnerships'
    },
    {
      icon: Star,
      title: 'Quality Rating',
      description: '4.9/5 average client satisfaction rating'
    }
  ];

  useEffect(() => {
    if (isInView) {
      markets.forEach(market => {
        let start = 0;
        const end = market.target;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setProgress(prev => ({
            ...prev,
            [market.key]: Math.floor(start)
          }));
        }, 16);
      });
    }
  }, [isInView]);

  return (
    <section id="clients" className="section-padding bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-accent-500/20 to-primary-500/20" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Global Partners</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Global Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We proudly serve leading brands across USA, Canada, and UK, delivering 
            exceptional quality textiles that meet the highest international standards.
          </p>
        </motion.div>

        {/* Market Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-dark rounded-xl p-8 card-hover group relative overflow-hidden"
            >
              {/* Progress Background */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10 transition-all duration-300"
                style={{ 
                  clipPath: `polygon(0 0, ${progress[market.key] * 2}% 0, ${progress[market.key] * 1.5}% 100%, 0 100%)` 
                }}
              />
              
              <div className="relative z-10">
                {/* Flag and Progress */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{market.flag}</div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gradient">{progress[market.key]}%</div>
                    <div className="text-xs text-gray-400">Market Share</div>
                  </div>
                </div>

                {/* Country Info */}
                <h3 className="text-2xl font-bold text-white mb-2">{market.name}</h3>
                <p className="text-gray-300 mb-6">{market.description}</p>

                {/* Progress Bar */}
                <div className="w-full bg-dark-700 rounded-full h-2 mb-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progress[market.key]}%` } : {}}
                    transition={{ duration: 2, delay: 0.5 + index * 0.2 }}
                    className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
                  />
                </div>

                {/* Client Examples */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Clients</h4>
                  {market.clients.map((client, clientIndex) => (
                    <div key={client} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent-400" />
                      <span className="text-gray-300 text-sm">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Client <span className="text-gradient">Success Metrics</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center mx-auto mb-4 neon-glow group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            What Our <span className="text-gradient">Clients Say</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "KTL consistently delivers exceptional quality and meets our tight deadlines. Their commitment to sustainability aligns perfectly with our brand values.",
                author: "Sarah Johnson",
                company: "Fashion Brand USA",
                rating: 5
              },
              {
                quote: "The attention to detail and quality control at KTL is unmatched. They've been our trusted partner for over 5 years.",
                author: "Michael Chen",
                company: "Canadian Retail Group",
                rating: 5
              },
              {
                quote: "KTL's ability to handle complex orders while maintaining quality standards makes them our preferred manufacturing partner.",
                author: "Emma Thompson",
                company: "UK Fashion House",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="glass-dark rounded-xl p-6 card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="glass-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Join Our Global Network?</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Partner with KTL and experience world-class textile manufacturing that meets 
              the highest international standards.
            </p>
            <motion.button
              className="btn-primary flex items-center space-x-2 mx-auto focus-visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;