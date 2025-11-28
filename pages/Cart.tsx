import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CURRENCY } from '../constants';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
           <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full mb-6">
             <Trash2 size={40} />
           </div>
           <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
           <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
           <Link to="/marketplace" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
             Start Shopping
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.storeName}</p>
                  <p className="text-lg font-bold text-indigo-600 mt-1">{item.price.toLocaleString()} {CURRENCY}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 text-gray-600"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 text-gray-600"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{cartTotal.toLocaleString()} {CURRENCY}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery (Estimated)</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-indigo-600">{cartTotal.toLocaleString()} {CURRENCY}</span>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-bold shadow-lg shadow-indigo-200"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                Secure checkout provided by Syria Mall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;