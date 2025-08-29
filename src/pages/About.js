import React from 'react';
import { Users, Award, Heart, Target, CheckCircle, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="py-8 animate-fade-in">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">About Revolution</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about bringing you the latest fashion trends with quality you can trust. 
            Our mission is to make stylish clothing accessible to everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-primary">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2020, Revolution began as a small boutique with a big dream: to democratize fashion 
              and make quality clothing accessible to everyone. What started as a local store has grown 
              into a beloved online destination for fashion enthusiasts worldwide.
            </p>
            <p className="text-gray-300 mb-4">
              Our journey has been driven by a simple belief: everyone deserves to look and feel their best, 
              regardless of their budget. We carefully curate our collections, working directly with 
              manufacturers to ensure both quality and affordability.
            </p>
            <p className="text-gray-300">
              Today, we serve customers across the globe, offering everything from casual everyday wear 
              to statement pieces that help you express your unique style.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
              alt="Revolution Store"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Mission & Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're guided by core values that shape everything we do, from product selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-400">
                We never compromise on quality. Every item in our collection meets our high standards 
                for materials, construction, and design.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-400">
                Fashion should be for everyone. We work hard to keep our prices reasonable while 
                maintaining the quality our customers expect.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-400">
                We're building more than a store - we're creating a community of fashion lovers 
                who inspire and support each other.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section removed for a more minimal, professional presentation */}

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Choose Revolution?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We go above and beyond to provide the best shopping experience for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CheckCircle size={24} className="text-primary" />,
                title: "Quality Guaranteed",
                description: "Every product is carefully selected and tested to meet our high quality standards."
              },
              {
                icon: <Star size={24} className="text-primary" />,
                title: "Trending Styles",
                description: "Stay ahead of the curve with our curated collection of the latest fashion trends."
              },
              {
                icon: <Award size={24} className="text-primary" />,
                title: "Best Prices",
                description: "Get premium quality fashion at prices that won't break the bank."
              },
              {
                icon: <Heart size={24} className="text-primary" />,
                title: "Customer First",
                description: "Your satisfaction is our top priority. We're here to help you look and feel amazing."
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Experience Revolution?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Join thousands of satisfied customers and discover your perfect style today.
          </p>
          <button className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 