import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { CURRENCY } from '../constants';
import { CheckCircle, Truck, MapPin, Banknote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 4000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-gray-500 mb-6">
            Thank you for shopping with Syria Mall. Your order will be delivered within 24 hours.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-left">
            <p className="flex justify-between mb-2"><span>Payment Method:</span> <span className="font-bold">Cash on Delivery</span></p>
            <p className="flex justify-between"><span>Total Amount:</span> <span className="font-bold">{cartTotal.toLocaleString()} {CURRENCY}</span></p>
          </div>
          <p className="text-xs text-gray-400">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Shipping Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <MapPin className="text-indigo-600" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Delivery Address</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" required className="w-full border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" required className="w-full border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="+963 ..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select className="w-full border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Damascus</option>
                  <option>Aleppo</option>
                  <option>Homs</option>
                  <option>Lattakia</option>
                  <option>Tartus</option>
                  <option>Hama</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Address</label>
                <textarea required rows={2} className="w-full border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Street, Building, Floor..." />
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <Truck className="text-indigo-600" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Delivery Options</h2>
            </div>
            
            <div className="border rounded-lg p-4 flex justify-between items-center border-indigo-200 bg-indigo-50">
              <div className="flex items-center gap-3">
                <input type="radio" checked readOnly className="h-5 w-5 text-indigo-600 focus:ring-indigo-500" />
                <div>
                  <span className="block text-sm font-bold text-gray-900">Standard Delivery (24 Hours)</span>
                  <span className="block text-xs text-gray-500">Available for all provinces</span>
                </div>
              </div>
              <span className="font-bold text-green-600">Free</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <Banknote className="text-indigo-600" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
            </div>
            
            <div className="space-y-4">
               <div className="border rounded-lg p-4 flex items-center gap-3 border-indigo-200 bg-indigo-50 cursor-pointer">
                <input type="radio" name="payment" checked readOnly className="h-5 w-5 text-indigo-600 focus:ring-indigo-500" />
                <div>
                  <span className="block text-sm font-bold text-gray-900">Cash on Delivery (COD)</span>
                  <span className="block text-xs text-gray-500">Pay when you receive your order</span>
                </div>
              </div>
              <div className="border rounded-lg p-4 flex items-center gap-3 opacity-60 cursor-not-allowed">
                <input type="radio" name="payment" disabled className="h-5 w-5 text-gray-400" />
                <div>
                  <span className="block text-sm font-bold text-gray-900">Electronic Payment (Coming Soon)</span>
                  <span className="block text-xs text-gray-500">Credit cards and local bank transfers</span>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-indigo-700 transition-colors">
            Place Order ({cartTotal.toLocaleString()} {CURRENCY})
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;