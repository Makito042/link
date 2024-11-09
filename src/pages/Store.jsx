import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 1,
    name: 'Paracetamol',
    image: '/products/paracetamol.jpg',
    description: 'It is used to treat mild to moderate pain.',
    price: 5,
    category: 'Pain Relief'
  },
  {
    id: 2,
    name: 'Aspirin',
    image: '/products/aspirin.jpg',
    description: 'It is used for pain reliever, and fever reducer.',
    price: 3,
    category: 'Pain Relief'
  },
  {
    id: 3,
    name: 'Azithromycin',
    image: '/products/azithromycin.jpg',
    description: 'It is used for bacterial infections.',
    price: 5,
    category: 'Antibiotics'
  },
  {
    id: 4,
    name: 'Omeprazole',
    image: '/products/omeprazole.jpg',
    description: 'It is used to reduces stomach acid production.',
    price: 10,
    category: 'Digestive Health'
  },
  {
    id: 5,
    name: 'Vitamin C',
    image: '/products/vitamin-c.jpg',
    description: 'Supports immune system health.',
    price: 8,
    category: 'Vitamins'
  },
  {
    id: 6,
    name: 'Ibuprofen',
    image: '/products/ibuprofen.jpg',
    description: 'Anti-inflammatory pain reliever.',
    price: 6,
    category: 'Pain Relief'
  }
];

const Store = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
        <div className="flex space-x-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
            <option>All Categories</option>
            <option>Pain Relief</option>
            <option>Antibiotics</option>
            <option>Digestive Health</option>
            <option>Vitamins</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Name: A to Z</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-green-800 font-medium">{product.category}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-green-800">${product.price}</span>
                <button className="flex items-center space-x-1 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;