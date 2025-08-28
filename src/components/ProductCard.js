import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="card overflow-hidden group">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          
          {/* Quick Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary-hover"
          >
            <ShoppingCart size={20} />
          </button>

          {/* Stock Badge */}
          {!product.inStock && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
              Out of Stock
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-primary group-hover:text-primary-hover transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            
            {/* Rating */}
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-1">
                ({product.reviews})
              </span>
            </div>
          </div>

          {/* Category */}
          <p className="text-sm text-gray-500 capitalize mb-2">
            {product.category.replace('-', ' ')}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full mt-4 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 