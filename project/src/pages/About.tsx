import React from 'react';
import ResponsiveImage from '../components/ResponsiveImage';
import { Target, Eye, Users2, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Nasreen Haque',
      position: 'Chairman',
      description: 'Visionary leader with extensive experience in textile industry development and strategic planning.',
    },
    {
      name: 'Md. Emdadul Hoque Chowdhury',
      position: 'Managing Director',
      description: 'Operations expert focused on sustainable manufacturing and international market expansion.',
    },
  ];

  const milestones = [
    { year: '2004', event: 'Company established in Chittagong' },
    { year: '2008', event: 'First international export shipment' },
    { year: '2012', event: 'Sedex certification achieved' },
    { year: '2016', event: 'Green factory initiatives launched' },
    { year: '2020', event: 'Production capacity reached 360,000 dozen/year' },
    { year: '2024', event: 'Celebrating 20 years of excellence' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-black/70 to-black/50 flex items-center"
        style={{
          backgroundImage: 'url(./assets/designer-2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-primary">Kattali Textile</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Two decades of excellence in textile manufacturing and global export operations
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-8 text-gray-900">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Established in 2004, Kattali Textile Ltd is a Chittagong-based garment manufacturer 
                  specializing in woven and knitwear exports. Over the past two decades, we have built 
                  a reputation for delivering premium quality textiles to global markets.
                </p>
                <p>
                  Our commitment to excellence, sustainable practices, and ethical manufacturing has 
                  made us a trusted partner for international brands seeking reliable textile sourcing 
                  from Bangladesh.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities, skilled workforce, and comprehensive 
                  quality control systems, we ensure every product meets the highest international standards.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ResponsiveImage
                src="designer-1.jpeg"
                alt="Textile manufacturing"
                className="rounded-2xl shadow-2xl w-full h-auto"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver excellence through sustainable and ethical garment manufacturing, 
                providing our global partners with premium quality textiles while maintaining 
                the highest standards of environmental and social responsibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a globally respected textile brand from Bangladesh, recognized for 
                innovation, quality, and sustainable practices, while contributing to the 
                economic development of our community and country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-primary">Leadership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users2 className="w-24 h-24 text-gray-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-gray-900">{leader.name}</h3>
                <h4 className="text-primary font-semibold text-lg mb-4">{leader.position}</h4>
                <p className="text-gray-700 leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-primary">Journey</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-heading font-bold text-white text-lg">{milestone.year}</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-8 text-gray-900">
                Our <span className="text-primary">Location</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Head Office & Factory</h3>
                    <p className="text-gray-700 leading-relaxed">
                      BM Heights, 8th Floor<br />
                      318 Sk. Mujib Road, Agrabad<br />
                      Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Strategically located in Chittagong, Bangladesh's commercial capital and largest port city, 
                  our facilities provide excellent access to international shipping routes and supply chains.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm">Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
