'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'lump', 'briquettes', 'accessories'];
  
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Best Sellers Slider */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Best Sellers</h3>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {/* Add your product slides here */}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 