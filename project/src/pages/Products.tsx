import React from 'react';
import { ArrowRight, Shirt, Package } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      category: "Men's Wear",
      description: "Premium quality men's clothing for all occasions",
      products: [
        { name: 'T-Shirts', description: 'Cotton and blended fabric t-shirts in various styles' },
        { name: 'Polo Shirts', description: 'Professional polo shirts for business and casual wear' },
        { name: 'Pants & Trousers', description: 'Formal and casual pants in different fits' },
        { name: 'Shorts', description: 'Comfortable shorts for leisure and sports' },
      ],
      icon: Shirt,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: "Women's Wear",
      description: "Elegant and comfortable women's apparel",
      products: [
        { name: 'Dresses', description: 'Stylish dresses for various occasions' },
        { name: 'Tops & Blouses', description: 'Fashion-forward tops and blouses' },
        { name: 'Bottoms', description: 'Pants, skirts, and leggings' },
        { name: 'Activewear', description: 'Comfortable athletic and leisure wear' },
      ],
      icon: Shirt,
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: "Children's Wear",
      description: "Safe, comfortable clothing for boys and girls",
      products: [
        { name: 'Boys Clothing', description: 'T-shirts, shirts, pants, and shorts for boys' },
        { name: 'Girls Clothing', description: 'Dresses, tops, bottoms, and sets for girls' },
        { name: 'Baby Wear', description: 'Soft, safe clothing for infants and toddlers' },
        { name: 'School Uniforms', description: 'Durable uniforms for educational institutions' },
      ],
      icon: Package,
      image: 'https://images.pexels.com/photos/8148589/pexels-photo-8148589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: "Sportswear",
      description: "High-performance athletic and leisure wear",
      products: [
        { name: 'Swim Trunks', description: 'Quick-dry swimwear for men and boys' },
        { name: 'Athletic Wear', description: 'Performance clothing for sports and fitness' },
        { name: 'Activewear Sets', description: 'Coordinated athletic clothing sets' },
        { name: 'Leisure Wear', description: 'Comfortable clothing for relaxation' },
      ],
      icon: Package,
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const features = [
    'Premium Quality Fabrics',
    'Custom Design Services',
    'Bulk Order Capabilities',
    'International Standards',
    'Competitive Pricing',
    'Timely Delivery',
  ];

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
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Premium quality textiles and garments for global markets
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-900">
              Product <span className="text-primary">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in manufacturing a wide range of textile products 
              for men, women, and children across various categories.
            </p>
          </div>

          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{category.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                        <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.category}
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose Our <span className="text-primary">Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Source Premium Textiles?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a customized quote 
            for your textile sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Catalog
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;