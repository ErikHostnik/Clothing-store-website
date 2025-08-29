import React, { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allowedCategories = ['hoodies', 'jackets'];

  const filteredProducts = useMemo(() => {
    let base = products.filter(p => allowedCategories.includes(p.category));
    if (selectedCategory !== 'all') {
      base = base.filter(p => p.category === selectedCategory);
    }
    return base;
  }, [selectedCategory]);

  return (
    <div className="py-8 animate-fade-in">
      <div className="container">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-2">Shop</h1>
          <p className="text-secondary">Curated Hoodies and Jackets</p>
        </div>

        {/* Simple Category Tabs */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {['all', 'hoodies', 'jackets'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No products available</h3>
            <p className="text-gray-600">Please check back soon for new drops.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop; 