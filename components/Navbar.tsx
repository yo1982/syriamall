import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Store, Home, Menu, X, UserCircle, Search } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-indigo-600 font-bold" : "text-gray-600 hover:text-indigo-600";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Syria Mall</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`flex items-center gap-1 ${isActive('/')}`}>
              <Home size={18} /> Home
            </Link>
            <Link to="/marketplace" className={`flex items-center gap-1 ${isActive('/marketplace')}`}>
              <Search size={18} /> Marketplace
            </Link>
            <Link to="/vendor-dashboard" className={`flex items-center gap-1 ${isActive('/vendor-dashboard')}`}>
              <Store size={18} /> For Businesses
            </Link>
          </div>

          <div className="flex items-center gap-4">
             <Link to="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600">
              <ShoppingBag size={24} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 border-l pl-4 border-gray-300">
               <UserCircle size={20} />
               <span>Login</span>
            </div>
            
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 space-y-1 sm:px-3 flex flex-col">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/marketplace" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Marketplace</Link>
            <Link to="/vendor-dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Vendor Dashboard</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;