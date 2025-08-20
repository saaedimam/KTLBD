import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Droplets, Recycle, Sun, Heart, Users, Target, TrendingUp } from 'lucide-react';

const Sustainability = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [progress, setProgress] = useState({
    water: 0,
    energy: 0,
    waste: 0,
    carbon: 0
  });

  const initiatives = [
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Advanced water recycling systems reduce consumption by 40%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Solar panels provide 30% of our facility\'s energy needs',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Recycle,
      title: 'Waste Reduction',
      description: 'Zero-waste manufacturing with 95% material recycling',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Worker Welfare',
      description: 'Comprehensive healthcare and education programs',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const goals = [
    { key: 'water', target: 75, label: 'Water Reduction', current: 'Reduce water consumption by 50%' },
    { key: 'energy', target: 60, label: 'Clean Energy', current: 'Achieve 60% renewable energy' },
    { key: 'waste', target: 90, label: 'Waste Reduction', current: 'Zero waste to landfill' },
    { key: 'carbon', target: 45, label: 'Carbon Neutral', current: 'Carbon neutral by 2030' }
  ];

  useEffect(() => {
    if (isInView) {
      goals.forEach(goal => {
        let start = 0;
        const end = goal.target;
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
            [goal.key]: Math.floor(start)
          }));
        }, 16);
      });
    }
  }, [isInView]);

  return (
    <section id="sustainability" className="section-padding bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/assets/sustainability.png" 
          alt="Sustainability background"
          className="w-full h-full object-cover"
        />
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
            <Leaf className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white">Sustainable Future</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Sustainability</span> First
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're committed to responsible manufacturing that protects our planet while 
            empowering our communities and ensuring a sustainable future for generations to come.
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-xl p-6 card-hover group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${initiative.color} flex items-center justify-center mx-auto mb-4 neon-glow group-hover:scale-110 transition-transform duration-300`}>
                <initiative.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{initiative.title}</h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">{initiative.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our <span className="text-gradient">2030 Goals</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-dark rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">{goal.label}</h4>
                  <span className="text-2xl font-bold text-accent-400">{progress[goal.key]}%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-3 mb-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progress[goal.key]}%` } : {}}
                    transition={{ duration: 2, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
                  />
                </div>
                <p className="text-gray-400 text-sm">{goal.current}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { icon: Users, number: '850+', label: 'Workers Employed', description: 'Direct employment opportunities' },
            { icon: Target, number: '75%', label: 'Female Workforce', description: 'Women empowerment focus' },
            { icon: TrendingUp, number: '40%', label: 'Water Saved', description: 'Through recycling systems' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="glass-dark rounded-xl p-8 text-center card-hover"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 neon-glow">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="glass-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Join Our Sustainable Journey</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Partner with us to create a more sustainable future. Together, we can make a positive 
              impact on our planet while delivering exceptional quality products.
            </p>
            <motion.button
              className="btn-secondary focus-visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More About Our Initiatives
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;