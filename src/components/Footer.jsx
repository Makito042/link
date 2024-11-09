import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo-white.svg" alt="PharmaLink" className="h-12 mb-4" />
            <p className="text-green-100">Your trusted partner in health and wellness.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-green-100">
              <li>123 Health Street</li>
              <li>Pharmacy City, PC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@pharmalink.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="bg-green-700 px-4 py-2 rounded-r-lg hover:bg-green-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2023 PharmaLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;