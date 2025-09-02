import React, { useState } from 'react';
import ResponsiveImage from '../components/ResponsiveImage';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Factory Floor', 'Products', 'Workers', 'CSR Activities'];

  const images = [
    {
      id: 1,
      src: 'hero.jpeg',
      category: 'Factory Floor',
      title: 'Hero Manufacturing Facility',
      description: 'Our state-of-the-art production facility showcasing modern manufacturing capabilities'
    },
    {
      id: 2,
      src: 'designer-1.jpeg',
      category: 'Products',
      title: 'Premium Textile Products',
      description: 'High-quality garments and textiles ready for international markets'
    },
    {
      id: 3,
      src: 'designer-2.jpeg',
      category: 'Factory Floor',
      title: 'Advanced Manufacturing Equipment',
      description: 'Cutting-edge machinery and production lines for efficient manufacturing'
    },
    {
      id: 4,
      src: 'hero.jpg',
      category: 'Products',
      title: 'Textile Excellence',
      description: 'Superior quality textiles and finished products'
    },
    {
      id: 5,
      src: 'designer-1.jpeg',
      category: 'Workers',
      title: 'Skilled Workforce',
      description: 'Our experienced team ensuring quality production standards'
    },
    {
      id: 6,
      src: 'designer-2.jpeg',
      category: 'Factory Floor',
      title: 'Quality Control Department',
      description: 'Rigorous quality checking processes and standards'
    },
    {
      id: 7,
      src: 'hero.jpeg',
      category: 'Products',
      title: 'Sustainable Textiles',
      description: 'Eco-friendly and sustainable textile manufacturing'
    },
    {
      id: 8,
      src: 'designer-1.jpeg',
      category: 'Workers',
      title: 'Team Collaboration',
      description: 'Coordinated teamwork for efficient production processes'
    },
    {
      id: 9,
      src: 'designer-2.jpeg',
      category: 'CSR Activities',
      title: 'Community Development',
      description: 'Supporting local community and social responsibility initiatives'
    },
    {
      id: 10,
      src: 'hero.jpg',
      category: 'Factory Floor',
      title: 'Production Excellence',
      description: 'Advanced production techniques and quality assurance'
    },
    {
      id: 11,
      src: 'designer-1.jpeg',
      category: 'CSR Activities',
      title: 'Environmental Sustainability',
      description: 'Green practices and environmental protection efforts'
    },
    {
      id: 12,
      src: 'designer-2.jpeg',
      category: 'Workers',
      title: 'Professional Development',
      description: 'Continuous training and skill development programs'
    },
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentImages = filteredImages;
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : currentImages.length - 1);
    } else {
      setSelectedImage(selectedImage < currentImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-r from-black/70 to-black/50 flex items-center"
        style={{
          backgroundImage: 'url(./assets/hero.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our facilities, products, team, and community impact through images
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-8 text-gray-900">
              Discover Our <span className="text-primary">World</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <ResponsiveImage
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  fit="cover"
                  sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <ResponsiveImage
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              fit="contain"
              priority
              sizes="100vw"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-black/70 p-4 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-white/80">{filteredImages[selectedImage].description}</p>
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                  {filteredImages[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
