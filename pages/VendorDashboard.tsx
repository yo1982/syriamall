import React, { useState } from 'react';
import { generateProductDescription } from '../services/geminiService';
import { Category } from '../types';
import { Sparkles, Plus, Package, DollarSign, Image as ImageIcon } from 'lucide-react';

const VendorDashboard = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState<Category>(Category.Food);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleGenerateDescription = async () => {
    if (!productName) {
      alert("Please enter a product name first.");
      return;
    }
    setIsGenerating(true);
    const desc = await generateProductDescription(productName, category);
    setDescription(desc);
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(`Product "${productName}" created successfully! Check the marketplace (mock).`);
      setProductName('');
      setPrice('');
      setDescription('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 px-6 py-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">Vendor Dashboard</h2>
            <p className="mt-2 text-indigo-100">Add new products to your store on Syria Mall</p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
            {successMsg && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                <Package className="mr-2" size={20} />
                {successMsg}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Package size={18} />
                  </div>
                  <input
                    type="text"
                    required
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g. Damascus Rose Jam"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                >
                  {Object.values(Category).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (SYP)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <DollarSign size={18} />
                </div>
                <input
                  type="number"
                  required
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="25000"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <button
                  type="button"
                  onClick={handleGenerateDescription}
                  disabled={isGenerating || !productName}
                  className="flex items-center text-xs text-indigo-600 hover:text-indigo-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles size={14} className="mr-1" />
                  {isGenerating ? 'Generating...' : 'Generate with AI'}
                </button>
              </div>
              <textarea
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Detailed description of the product..."
              />
              <p className="text-xs text-gray-500 mt-1">Use our AI tool to create professional descriptions in seconds.</p>
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Product Image (Mock URL)</label>
               <div className="flex items-center gap-4">
                  <div className="h-24 w-24 bg-gray-100 rounded-lg flex items-center justify-center border border-dashed border-gray-300 text-gray-400">
                    <ImageIcon size={24} />
                  </div>
                  <div className="flex-1">
                     <input disabled type="text" className="w-full border-gray-300 rounded-md bg-gray-50 text-gray-500 italic px-3 py-2 text-sm" value="Image upload disabled in demo" />
                  </div>
               </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
              >
                {isSubmitting ? 'Adding Product...' : 'Add Product to Store'} <Plus size={18} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;