import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Shield, CheckCircle, Star, Globe, Zap } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const certifications = [
    {
      name: 'OEKO-TEX Standard 100',
      description: 'Ensures textiles are free from harmful substances',
      image: '/assets/certifications/oeko-tex.png',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      features: ['Chemical Safety', 'Human Health', 'Environmental Protection']
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality management system certification',
      image: '/assets/certifications/iso-9001.png',
      icon: Award,
      color: 'from-blue-500 to-indigo-600',
      features: ['Quality Assurance', 'Process Excellence', 'Customer Satisfaction']
    },
    {
      name: 'BSCI Compliance',
      description: 'Business Social Compliance Initiative certified',
      image: '/assets/certifications/bsci.png',
      icon: Globe,
      color: 'from-purple-500 to-violet-600',
      features: ['Social Standards', 'Worker Rights', 'Ethical Manufacturing']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage'
    },
    {
      icon: Shield,
      title: 'Safety Standards',
      description: 'Products meet international safety requirements'
    },
    {
      icon: Star,
      title: 'Excellence Recognition',
      description: 'Industry-leading certifications and awards'
    },
    {
      icon: Zap,
      title: 'Continuous Improvement',
      description: 'Regular audits and process optimization'
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Quality Excellence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We maintain the highest international standards through rigorous certifications 
            that ensure quality, safety, and ethical manufacturing practices.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-dark rounded-xl p-8 card-hover group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-6 neon-glow group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-10 h-10 text-white" />
                </div>

                {/* Certification Image */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">{cert.name}</h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">{cert.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {cert.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Why Our <span className="text-gradient">Certifications</span> Matter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center mx-auto mb-4 neon-glow group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '100%', label: 'Quality Compliance', description: 'All products meet international standards' },
            { number: '24/7', label: 'Quality Monitoring', description: 'Continuous quality assurance processes' },
            { number: '0', label: 'Tolerance for Defects', description: 'Zero-defect manufacturing approach' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="glass-dark rounded-xl p-8 text-center card-hover"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;