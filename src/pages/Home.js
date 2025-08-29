import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-hero-dark-gradient text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-2">Revolution</h1>
              <p className="text-2xl text-secondary tracking-wide mb-6">Redefine Your Wardrobe</p>
              <p className="text-xl mb-8 text-gray-300">
                Elevated essentials and statement pieces crafted for modern lifestyles.
                Discover premium quality and refined silhouettes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/shop" className="btn btn-primary text-lg px-8 py-4">
                  Shop Now
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/about" className="btn btn-outline text-lg px-8 py-4">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white bg-opacity-5 rounded-2xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                  alt="Fashion Collection"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-400">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-400">100% secure payment processing</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <RefreshCw size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-400">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our most popular items, carefully selected for quality and style. 
              From casual wear to formal attire, we have everything you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop" className="btn btn-primary text-lg px-8 py-3">
              View All Products
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section removed for startup simplicity */}

      {/* Testimonials removed for cleaner, professional look */}

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Look?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Curated drops, timeless staples, and bold accents—shop the Revolution edit.
          </p>
          <Link to="/shop" className="btn btn-primary text-lg px-8 py-4">
            Start Shopping Now
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 