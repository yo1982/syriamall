import React from 'react';
import { Truck, ShieldCheck, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Syria Mall</h3>
            <p className="text-sm text-gray-400">
              The first comprehensive electronic mall in Syria. Connecting customers with the best local stores and services.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">How to Buy</a></li>
              <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Business</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Sell on Syria Mall</a></li>
              <li><a href="#" className="hover:text-white">Advertise with us</a></li>
              <li><a href="#" className="hover:text-white">Investment Programs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin size={16} /> Damascus, Syria</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +963 11 123 4567</li>
              <li className="flex items-center gap-2"><Truck size={16} /> 24/7 Delivery Available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} Syria Mall. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <ShieldCheck size={20} className="text-green-500" />
             <span className="text-sm text-green-500">Secure Payments & COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;