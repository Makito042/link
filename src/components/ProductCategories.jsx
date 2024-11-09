import React from 'react';

const categories = [
  {
    title: 'Pain Relief',
    image: '/categories/pain-relief.jpg',
    description: 'Medications for various types of pain'
  },
  {
    title: 'Cold & Flu',
    image: '/categories/cold-flu.jpg',
    description: 'Relief from cold and flu symptoms'
  },
  {
    title: 'Skincare',
    image: '/categories/skincare.jpg',
    description: 'Products for skin health'
  },
  {
    title: 'Vitamins',
    image: '/categories/vitamins.jpg',
    description: 'Supplements and vitamins'
  }
];

const ProductCategories = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-800 to-transparent p-4">
                <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                <p className="text-green-100 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;