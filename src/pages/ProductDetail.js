import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, Truck, Shield, RefreshCw, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/shop" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }
    
    const productWithOptions = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };
    
    addToCart(productWithOptions);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="py-8 animate-fade-in">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/shop" className="text-gray-500 hover:text-primary flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Shop
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart size={20} className="text-gray-600" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
                <span className="text-sm text-gray-500 capitalize">
                  {product.category.replace('-', ' ')}
                </span>
              </div>
              <p className="text-3xl font-bold text-primary">${product.price}</p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedColor === color
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || !selectedSize || !selectedColor}
                className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Truck size={20} className="text-primary" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield size={20} className="text-primary" />
                  <span className="text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw size={20} className="text-primary" />
                  <span className="text-sm">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would typically show related products from the same category */}
            <div className="card p-4 text-center">
              <p className="text-gray-500">Related products would appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 