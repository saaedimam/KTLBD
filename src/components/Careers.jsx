import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Heart, TrendingUp, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Comprehensive medical coverage for employees and families',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous training programs and skill development opportunities',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and leadership development programs',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Market-competitive compensation with performance bonuses',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const openPositions = [
    {
      title: 'Production Manager',
      department: 'Manufacturing',
      type: 'Full-time',
      location: 'Chittagong, Bangladesh',
      experience: '5+ years',
      description: 'Lead production operations and ensure quality standards across manufacturing lines.',
      requirements: ['5+ years in textile manufacturing', 'Leadership experience', 'Quality control expertise'],
      urgent: true
    },
    {
      title: 'Quality Control Specialist',
      department: 'Quality Assurance',
      type: 'Full-time',
      location: 'Chittagong, Bangladesh',
      experience: '3+ years',
      description: 'Implement and monitor quality assurance processes to maintain our high standards.',
      requirements: ['3+ years in quality control', 'Knowledge of ISO standards', 'Attention to detail'],
      urgent: false
    },
    {
      title: 'Export Coordinator',
      department: 'International Trade',
      type: 'Full-time',
      location: 'Chittagong, Bangladesh',
      experience: '2+ years',
      description: 'Coordinate international shipments and manage export documentation.',
      requirements: ['Experience in export operations', 'Knowledge of international trade', 'Strong communication skills'],
      urgent: false
    },
    {
      title: 'Sustainability Officer',
      department: 'Environmental',
      type: 'Full-time',
      location: 'Chittagong, Bangladesh',
      experience: '4+ years',
      description: 'Develop and implement sustainability initiatives across all operations.',
      requirements: ['Environmental science background', 'Sustainability experience', 'Project management skills'],
      urgent: true
    }
  ];

  const stats = [
    { number: '850+', label: 'Team Members', description: 'Skilled professionals' },
    { number: '75%', label: 'Female Workforce', description: 'Women empowerment' },
    { number: '95%', label: 'Employee Satisfaction', description: 'Happy workplace' },
    { number: '20+', label: 'Years Average Tenure', description: 'Long-term commitment' }
  ];

  return (
    <section id="careers" className="section-padding bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/assets/career.png" 
          alt="Career background"
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
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">Join Our Team</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Build Your <span className="text-gradient">Career</span> With Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join a dynamic team of 850+ professionals in Bangladesh's leading textile manufacturing company. 
            We offer growth opportunities, competitive benefits, and a chance to make a global impact.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-dark rounded-xl p-6 text-center card-hover"
            >
              <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Why Work <span className="text-gradient">With Us</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-dark rounded-xl p-6 card-hover group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 neon-glow group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 text-center">{benefit.title}</h4>
                <p className="text-gray-300 text-sm text-center leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Open <span className="text-gradient">Positions</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-dark rounded-xl p-6 card-hover relative overflow-hidden"
              >
                {position.urgent && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Urgent
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">{position.title}</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h5>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="w-full btn-primary focus-visible"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="glass-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Don't See Your Role?</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="btn-primary focus-visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Resume
              </motion.button>
              <motion.button
                className="btn-outline focus-visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact HR
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;