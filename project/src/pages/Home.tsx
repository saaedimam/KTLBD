import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Settings, Calendar, Award, Shirt, Package, Globe } from 'lucide-react';
import HeroVideo from '../components/HeroVideo';

const Home = () => {
  const stats = [
    { icon: Calendar, title: '20+ Years', subtitle: 'of Experience', description: 'Established since 2004' },
    { icon: Settings, title: '680 Machines', subtitle: 'Advanced Equipment', description: 'State-of-the-art technology' },
    { icon: Users, title: '1,200+', subtitle: 'Employees', description: 'Skilled workforce' },
    { icon: Package, title: '360,000', subtitle: 'Dozen Annual Capacity', description: 'High production volume' },
  ];

  const products = [
    { name: 'T-Shirts', icon: Shirt, description: 'Premium quality cotton and blended t-shirts' },
    { name: 'Polo Shirts', icon: Shirt, description: 'Professional polo shirts for all occasions' },
    { name: 'Bottoms', icon: Package, description: 'Comfortable pants, shorts, and trousers' },
    { name: 'Dresses', icon: Shirt, description: 'Elegant dresses for women and children' },
    { name: 'Swim Trunks', icon: Package, description: 'High-quality swimwear and activewear' },
  ];

  const certifications = [
    { name: 'Sedex', description: 'Ethical trade certification' },
    { name: 'Green Certified', description: 'Environmental compliance' },
    { name: 'BGMEA', description: 'Bangladesh Garment Manufacturers' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroVideo
        title={
          <>
            Bangladesh's Eco-Friendly
            <br />
            <span className="text-primary">Textile Exporter</span> – Since 2004
          </>
        }
        subtitle={
          'Kattali Textile Ltd is a fully compliant manufacturer of woven and knit garments with global export operations.'
        }
        ctas={[{ label: 'Explore More', href: '/about' }]}
      />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose <span className="text-primary">Kattali Textile</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-primary font-semibold mb-2">{stat.subtitle}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 flex items-center justify-center space-x-4">
              <span className="flex items-center">
                <Award className="w-5 h-5 text-primary mr-2" />
                Sedex Certified
              </span>
              <span className="flex items-center">
                <Globe className="w-5 h-5 text-primary mr-2" />
                Green Factory Initiatives
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-center mb-3 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-center text-sm">{product.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200 group"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-primary">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready for Global Apparel Sourcing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us for premium quality textiles, ethical manufacturing, 
            and reliable global delivery.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
