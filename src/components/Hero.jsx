import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <div className="bg-green-800 rounded-lg p-8 flex items-center">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Introducing New Ways of Medicine Delivery
                </h1>
                <p className="text-green-100 mb-6">
                  Bringing you Medicines to your door step
                </p>
                <Link 
                  to="/store"
                  className="inline-block bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-green-100 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
              <div className="flex-1">
                <img
                  src="/medicine-delivery.png"
                  alt="Medicine Delivery"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;