import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-12" src="/logo.svg" alt="PharmaLink" />
              </Link>
            </div>
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                  placeholder="What are you looking for?"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-green-600 rounded-r-lg">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/login" className="flex items-center space-x-2 hover:text-green-200">
              <UserIcon className="h-6 w-6" />
              <span>Login | Register</span>
            </Link>
            <div className="flex items-center space-x-2">
              <span>Currency</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCartIcon className="h-6 w-6" />
              <span>Cart</span>
            </div>
          </div>
        </div>

        <div className="py-3">
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/about" className="hover:text-green-200">About us</Link>
            <Link to="/privacy" className="hover:text-green-200">Privacy policy</Link>
            <Link to="/terms" className="hover:text-green-200">Terms & conditions</Link>
            <Link to="/refund" className="hover:text-green-200">Refund policy</Link>
            <Link to="/contact" className="hover:text-green-200">Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;