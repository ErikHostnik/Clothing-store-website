import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const shippingCost = getCartTotal() > 50 ? 0 : 5.99;
  const tax = getCartTotal() * 0.08; // 8% tax
  const total = getCartTotal() + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="py-12 animate-fade-in">
        <div className="container">
          <div className="text-center">
            <div className="text-gray-400 mb-6">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/shop" className="btn btn-primary text-lg px-8 py-3">
              Start Shopping
              <ArrowLeft size={20} className="ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 animate-fade-in">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {items.length} item{items.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {item.selectedSize && `Size: ${item.selectedSize}`}
                          {item.selectedColor && ` • Color: ${item.selectedColor}`}
                        </p>
                        <p className="text-primary font-semibold">
                          ${item.price}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="btn btn-outline px-4">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full btn btn-primary text-lg py-4 mb-4 flex items-center justify-center">
                <CreditCard size={20} className="mr-2" />
                Proceed to Checkout
              </button>

              {/* Security Notice */}
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Lock size={16} className="mr-2" />
                Secure checkout
              </div>

              {/* Continue Shopping */}
              <div className="mt-6 pt-6 border-t">
                <Link
                  to="/shop"
                  className="flex items-center justify-center text-primary hover:text-primary-hover"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would typically show recommended products */}
            <div className="card p-4 text-center">
              <p className="text-gray-500">Recommended products would appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 