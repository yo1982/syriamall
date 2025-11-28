import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { INITIAL_PRODUCTS, CURRENCY } from '../constants';
import { Category, Product } from '../types';
import { Filter, Search, ShoppingCart, Star } from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { addToCart } = useCart();
  const [notification, setNotification] = useState<string | null>(null);

  const categories = ['All', ...Object.values(Category)];

  const filteredProducts = INITIAL_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {notification && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in-down">
          {notification}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-grow md:w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <div className="relative min-w-[150px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
              <div className="aspect-square bg-gray-100 relative group">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold hover:bg-indigo-50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-yellow-500 font-bold">
                     <Star size={12} fill="currentColor" /> {product.rating}
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-grow">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-indigo-700">
                    {product.price.toLocaleString()} <span className="text-xs font-normal text-gray-500">{CURRENCY}</span>
                  </span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-900">No products found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;