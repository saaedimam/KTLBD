import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Shirt } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-footer text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shirt className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Kattali Textile Ltd</h3>
                <p className="text-sm text-gray-300">Since 2004</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bangladesh's leading eco-friendly textile exporter with over 20 years of experience 
              in manufacturing premium woven and knit garments for global markets.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">
                  BM Heights, 8th Floor, 318 Sk. Mujib Road, Agrabad, Chittagong, Bangladesh
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">+880 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">info@ktlbd.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="font-heading font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Certifications</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Sedex Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Green Factory Initiative</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>BGMEA Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Kattali Textile Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;