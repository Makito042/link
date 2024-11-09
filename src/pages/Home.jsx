import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductCategories />
      <FeaturedProducts />
    </>
  );
};

export default Home;