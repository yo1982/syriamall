import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, CreditCard, ShoppingBag } from 'lucide-react';
import { FEATURED_STORES, INITIAL_PRODUCTS, CURRENCY } from '../constants';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/403/1920/1080')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-heading">
              Syria's Premier <br/> <span className="text-yellow-400">Online Mall</span>
            </h1>
            <p className="text-lg text-indigo-100 md:max-w-lg">
              Shop from the best local stores for food, fashion, electronics, and more. 
              Fast delivery to your doorstep across all provinces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/marketplace" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-900 bg-white hover:bg-gray-50 md:text-lg transition-transform transform hover:scale-105 shadow-lg">
                Start Shopping
              </Link>
              <Link to="/vendor-dashboard" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-700 hover:bg-indigo-600 md:text-lg transition-all">
                Sell Your Products
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
             <div className="relative">
                <div className="absolute -inset-4 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <img 
                  src="https://picsum.photos/id/119/600/400" 
                  alt="Shopping" 
                  className="relative rounded-2xl shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-500"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
              <div className="p-3 bg-green-100 text-green-600 rounded-full mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery service operating day and night across the region.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                <CreditCard size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cash on Delivery</h3>
              <p className="text-gray-600">Pay conveniently with cash when your order arrives. Secure and simple.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-4">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Vendor</h3>
              <p className="text-gray-600">Access thousands of products from hundreds of trusted local businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Stores</h2>
              <p className="mt-2 text-gray-600">Top rated businesses on Syria Mall</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
              View all stores <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_STORES.map(store => (
              <div key={store.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden group">
                <div className="h-32 bg-gray-200 overflow-hidden relative">
                  <img src={store.bannerUrl} alt={store.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -bottom-8 left-4 border-4 border-white rounded-lg overflow-hidden w-16 h-16 shadow-md">
                    <img src={store.logoUrl} alt="logo" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pt-10 px-6 pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{store.description}</p>
                    </div>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-yellow-700 font-bold text-sm">
                      <Star size={14} className="fill-current mr-1" /> {store.rating}
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium transition-colors">
                    Visit Store
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Featured Products */}
       <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Products</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {INITIAL_PRODUCTS.slice(0, 4).map(product => (
               <div key={product.id} className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                 <div className="relative aspect-square overflow-hidden bg-gray-100">
                   <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                 </div>
                 <div className="p-4 flex flex-col flex-1">
                   <p className="text-xs text-gray-500 mb-1">{product.storeName}</p>
                   <h3 className="text-base font-semibold text-gray-900 line-clamp-2 mb-2">{product.name}</h3>
                   <div className="mt-auto flex items-center justify-between">
                     <span className="text-lg font-bold text-indigo-600">{product.price.toLocaleString()} {CURRENCY}</span>
                     <div className="flex items-center text-xs text-gray-400">
                       <Star size={12} className="text-yellow-400 fill-current mr-1" /> {product.rating}
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
           <div className="mt-10 text-center">
             <Link to="/marketplace" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                View All Products
             </Link>
           </div>
        </div>
      </section>

      {/* CTA Investment */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Invest with Syria Mall</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Own a business? Create your digital store today and reach customers across the entire country. 
            Earn commissions and grow your brand with our powerful platform.
          </p>
          <Link to="/vendor-dashboard" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
            Register Your Business
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;