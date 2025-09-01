import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const newsArticles = [
    {
      id: 1,
      title: 'KTL Launches New Sustainability Initiative',
      excerpt: 'We are proud to announce our latest eco-friendly production processes that will reduce our environmental impact by 40%.',
      image: '/assets/news/news1.png',
      date: '2024-01-15',
      readTime: '3 min read',
      category: 'Sustainability',
      author: 'Environmental Team',
      featured: true
    },
    {
      id: 2,
      title: 'Production Capacity Expansion Complete',
      excerpt: 'Our new production lines are now operational, increasing our annual capacity to 2.5 million units while maintaining quality standards.',
      image: '/assets/news/news2.png',
      date: '2024-01-10',
      readTime: '4 min read',
      category: 'Manufacturing',
      author: 'Operations Team',
      featured: false
    },
    {
      id: 3,
      title: 'International Partnership Agreement Signed',
      excerpt: 'Strategic alliance with leading European fashion brands opens new markets and opportunities for growth.',
      image: '/assets/news/news3.png',
      date: '2024-01-05',
      readTime: '2 min read',
      category: 'Business',
      author: 'Business Development',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: 12, active: true },
    { name: 'Sustainability', count: 4, active: false },
    { name: 'Manufacturing', count: 5, active: false },
    { name: 'Business', count: 3, active: false }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Sustainability': 'from-green-500 to-emerald-600',
      'Manufacturing': 'from-blue-500 to-indigo-600',
      'Business': 'from-purple-500 to-violet-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="news" className="section-padding bg-gradient-to-br from-dark-800 to-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            News & <span className="text-gradient">Updates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest developments, achievements, and industry insights 
            as we continue to lead in textile manufacturing excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus-visible ${
                category.active
                  ? 'bg-gradient-to-r from-accent-500 to-primary-600 text-white neon-glow'
                  : 'glass-dark text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Article */}
        {newsArticles.filter(article => article.featured).map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-dark rounded-2xl overflow-hidden mb-12 card-hover"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <motion.button
                    className="flex items-center space-x-2 text-accent-400 hover:text-accent-300 font-semibold focus-visible"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {newsArticles.filter(article => !article.featured).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass-dark rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.date)}</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-accent-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <motion.button
                    className="flex items-center space-x-1 text-accent-400 hover:text-accent-300 font-semibold text-sm focus-visible"
                    whileHover={{ x: 3 }}
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter to receive the latest news, updates, and insights 
              from the world of textile manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
              />
              <motion.button
                className="btn-primary whitespace-nowrap focus-visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;