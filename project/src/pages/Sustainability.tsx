import React from 'react';
import { Droplets, Zap, Users, Leaf, Award, Recycle, Heart, Globe } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: Droplets,
      title: 'Wastewater Recycling',
      description: 'Advanced water treatment systems that recycle and purify wastewater, reducing environmental impact and conserving precious water resources.',
    },
    {
      icon: Zap,
      title: 'Energy-Efficient Machinery',
      description: 'Investment in modern, energy-efficient equipment that reduces power consumption while maintaining high production standards.',
    },
    {
      icon: Users,
      title: 'Women-Led Operations',
      description: 'Empowering women in the workplace with 750+ female operators leading our production lines and promoting gender equality.',
    },
    {
      icon: Heart,
      title: 'Ethical Labor Policies',
      description: 'Fair wages, safe working conditions, and comprehensive benefits ensuring the wellbeing of all our employees.',
    },
  ];

  const certifications = [
    {
      name: 'Sedex Certification',
      description: 'Ethical trade certification ensuring responsible business practices',
      icon: Award,
    },
    {
      name: 'Green Factory Initiative',
      description: 'Environmental compliance and sustainable manufacturing practices',
      icon: Leaf,
    },
    {
      name: 'BGMEA Membership',
      description: 'Member of Bangladesh Garment Manufacturers and Exporters Association',
      icon: Globe,
    },
  ];

  const environmentalGoals = [
    { goal: 'Reduce water consumption by 30%', progress: 75, year: '2025' },
    { goal: 'Achieve 50% renewable energy usage', progress: 40, year: '2026' },
    { goal: 'Zero waste to landfill', progress: 60, year: '2025' },
    { goal: 'Carbon neutral operations', progress: 35, year: '2030' },
  ];

  const socialImpact = [
    { metric: '1,200+', label: 'Employees Supported', description: 'Direct employment opportunities' },
    { metric: '75%', label: 'Female Workforce', description: 'Women empowerment in operations' },
    { metric: '20+', label: 'Community Programs', description: 'Local development initiatives' },
    { metric: '5,000+', label: 'Families Impacted', description: 'Through various CSR activities' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-black/70 to-black/50 flex items-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Sustainability & <span className="text-primary">Ethics</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Committed to responsible manufacturing practices that protect our planet and empower our people
            </p>
          </div>
        </div>
      </section>

      {/* Eco Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Our Eco <span className="text-primary">Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in manufacturing excellence that doesn't compromise environmental responsibility. 
              Our initiatives focus on reducing our ecological footprint while maintaining quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">{initiative.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Goals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Environmental <span className="text-primary">Goals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to sustainability is measured through concrete goals and continuous progress tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentalGoals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-900">{goal.goal}</h3>
                  <span className="text-primary font-bold">Target: {goal.year}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className="bg-primary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600">{goal.progress}% Complete</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Our <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition of our commitment to ethical practices and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">{cert.name}</h3>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Social <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond environmental responsibility, we're committed to creating positive social impact 
              in our community and among our workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialImpact.map((impact, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl font-heading font-bold text-primary mb-2">{impact.metric}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{impact.label}</h3>
                <p className="text-gray-600 text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-8 text-gray-900">
                Our Sustainability <span className="text-primary">Journey</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Since our establishment in 2004, sustainability has been at the core of our operations. 
                  We recognize that responsible manufacturing is not just good for business, but essential 
                  for the future of our planet and communities.
                </p>
                <p>
                  Our journey towards sustainable practices includes continuous investment in cleaner 
                  technologies, employee welfare programs, and community development initiatives that 
                  create lasting positive impact.
                </p>
                <p>
                  We're proud to be part of the global movement towards more sustainable fashion and 
                  textiles, setting standards that inspire others in the industry to follow suit.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center space-x-4 text-primary">
                  <Recycle className="w-6 h-6" />
                  <span className="font-semibold">Circular Economy Practices</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7148457/pexels-photo-7148457.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable manufacturing"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Partner with a Sustainable Future
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in our commitment to responsible manufacturing. Together, we can create 
            quality products while protecting our planet for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Sustainability Report
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;