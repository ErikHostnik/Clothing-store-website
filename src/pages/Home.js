import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Your
                <span className="block text-yellow-300">Perfect Style</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Explore our curated collection of trendy clothing and accessories. 
                Quality fashion that fits your lifestyle and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop" className="btn btn-secondary text-lg px-8 py-4">
                  Shop Now
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/about" className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl transform rotate-3"></div>
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
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <RefreshCw size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600">
              Browse our extensive collection by category
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', link: '/shop?category=t-shirts' },
              { name: 'Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop', link: '/shop?category=jeans' },
              { name: 'Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop', link: '/shop?category=hoodies' },
              { name: 'Dresses', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop', link: '/shop?category=dresses' },
              { name: 'Jackets', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop', link: '/shop?category=jackets' },
            ].map((category, index) => (
              <Link key={index} to={category.link} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                text: "Amazing quality and fast shipping! I love my new dress from StyleHub.",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
              },
              {
                name: "Mike Chen",
                rating: 5,
                text: "Great prices and excellent customer service. Will definitely shop here again!",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              },
              {
                name: "Emily Davis",
                rating: 5,
                text: "The clothes fit perfectly and the quality is outstanding. Highly recommend!",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-6 text-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-semibold text-primary">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Style?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers and discover your perfect look today.
          </p>
          <Link to="/shop" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Start Shopping Now
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 