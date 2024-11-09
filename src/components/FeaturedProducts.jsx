import React from 'react';

const products = [
  {
    name: 'Paracetamol',
    image: '/products/paracetamol.jpg',
    description: 'It is used to treat mild to moderate pain.',
    price: 5
  },
  {
    name: 'Aspirin',
    image: '/products/aspirin.jpg',
    description: 'It is used for pain reliever, and fever reducer.',
    price: 3
  },
  {
    name: 'Azithromycin',
    image: '/products/azithromycin.jpg',
    description: 'It is used for bacterial infections.',
    price: 5
  },
  {
    name: 'Omeprazole',
    image: '/products/omeprazole.jpg',
    description: 'It is used to reduces stomach acid production.',
    price: 10
  }
];

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-800 font-bold">${product.price}</span>
                  <button className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;