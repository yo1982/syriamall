import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import VendorDashboard from './pages/VendorDashboard';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AIChatAssistant from './components/AIChatAssistant';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/vendor-dashboard" element={<VendorDashboard />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
          <AIChatAssistant />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;