import React from 'react';
import { Users, Award, Heart, Target, CheckCircle, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="py-8 animate-fade-in">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About StyleHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the latest fashion trends with quality you can trust. 
            Our mission is to make stylish clothing accessible to everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, StyleHub began as a small boutique with a big dream: to democratize fashion 
              and make quality clothing accessible to everyone. What started as a local store has grown 
              into a beloved online destination for fashion enthusiasts worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey has been driven by a simple belief: everyone deserves to look and feel their best, 
              regardless of their budget. We carefully curate our collections, working directly with 
              manufacturers to ensure both quality and affordability.
            </p>
            <p className="text-gray-600">
              Today, we serve customers across the globe, offering everything from casual everyday wear 
              to statement pieces that help you express your unique style.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
              alt="StyleHub Store"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're guided by core values that shape everything we do, from product selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every item in our collection meets our high standards 
                for materials, construction, and design.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Fashion should be for everyone. We work hard to keep our prices reasonable while 
                maintaining the quality our customers expect.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We're building more than a store - we're creating a community of fashion lovers 
                who inspire and support each other.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team works tirelessly to bring you the best fashion experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
                bio: "Fashion enthusiast with 15+ years in retail. Passionate about making quality fashion accessible."
              },
              {
                name: "Mike Chen",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
                bio: "Creative director with a keen eye for trends and a commitment to timeless style."
              },
              {
                name: "Emily Davis",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
                bio: "Dedicated to ensuring every customer has an exceptional shopping experience."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose StyleHub?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to provide the best shopping experience for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CheckCircle size={24} className="text-green-500" />,
                title: "Quality Guaranteed",
                description: "Every product is carefully selected and tested to meet our high quality standards."
              },
              {
                icon: <Star size={24} className="text-yellow-500" />,
                title: "Trending Styles",
                description: "Stay ahead of the curve with our curated collection of the latest fashion trends."
              },
              {
                icon: <Award size={24} className="text-blue-500" />,
                title: "Best Prices",
                description: "Get premium quality fashion at prices that won't break the bank."
              },
              {
                icon: <Heart size={24} className="text-red-500" />,
                title: "Customer First",
                description: "Your satisfaction is our top priority. We're here to help you look and feel amazing."
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience StyleHub?</h2>
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