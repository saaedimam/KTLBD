import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Factory Floor', 'Products', 'Workers', 'CSR Activities'];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/7148448/pexels-photo-7148448.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Factory Floor',
      title: 'Modern Manufacturing Facility',
      description: 'State-of-the-art production floor with advanced machinery'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/7148457/pexels-photo-7148457.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workers',
      title: 'Skilled Operators at Work',
      description: 'Our experienced team ensuring quality production'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Products',
      title: 'Premium Men\'s Wear',
      description: 'High-quality garments ready for export'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Products',
      title: 'Women\'s Fashion Collection',
      description: 'Elegant designs for international markets'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8148589/pexels-photo-8148589.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Products',
      title: 'Children\'s Clothing Line',
      description: 'Safe and comfortable clothing for kids'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Factory Floor',
      title: 'Quality Control Department',
      description: 'Rigorous quality checking processes'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Products',
      title: 'Sportswear Collection',
      description: 'Athletic wear and swim trunks'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workers',
      title: 'Team Collaboration',
      description: 'Coordinated teamwork for efficient production'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/6984992/pexels-photo-6984992.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'CSR Activities',
      title: 'Community Outreach Program',
      description: 'Supporting local community development'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/7148448/pexels-photo-7148448.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Factory Floor',
      title: 'Cutting Department',
      description: 'Precision cutting for optimal fabric utilization'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/6303750/pexels-photo-6303750.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'CSR Activities',
      title: 'Environmental Initiative',
      description: 'Green practices and sustainability efforts'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workers',
      title: 'Training Session',
      description: 'Continuous skill development programs'
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
          backgroundImage: 'url(https://images.pexels.com/photos/7148448/pexels-photo-7148448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
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
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
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
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
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