import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sustainability from './components/Sustainability';
import Certifications from './components/Certifications';
import Clients from './components/Clients';
import Careers from './components/Careers';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set document title and meta description for SEO
    document.title = 'KTL - Kattali Textile Ltd | Leading Textile Manufacturer in Bangladesh';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Kattali Textile Ltd (KTL) - Bangladesh\'s premier textile manufacturer since 2004. 12 production lines, 850+ workers, ISO certified. Exporting quality knitwear, uniforms, and garments to USA, Canada, UK.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kattali Textile Ltd",
      "alternateName": "KTL",
      "url": "https://ktlbd.com",
      "logo": "/assets/logo.png",
      "description": "Leading textile manufacturer in Bangladesh specializing in knitwear, uniforms, woven garments, schoolwear, and sportswear for global markets.",
      "foundingDate": "2004",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "BM Heights, 8th Floor, 318 Sk. Mujib Road, Agrabad",
        "addressLocality": "Chittagong",
        "addressCountry": "Bangladesh"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+880-31-123456",
        "contactType": "customer service",
        "email": "info@ktlbd.com"
      },
      "sameAs": [
        "https://www.facebook.com/ktlbd",
        "https://www.linkedin.com/company/ktlbd",
        "https://www.instagram.com/ktlbd"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Sustainability />
        <Certifications />
        <Clients />
        <Careers />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;