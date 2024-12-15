'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/UI/button';
import 'swiper/css';
import 'swiper/css/navigation';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Than Nhãn',
    category: 'than',
    price: 180000,
    image: '/images/products/than-nhan.jpg',
    isBestSeller: true
  },
  {
    id: 2,
    name: 'Than Cà Phê',
    category: 'than',
    price: 160000,
    image: '/images/products/than-cafe.jpg',
    isBestSeller: true
  },
  {
    id: 3,
    name: 'Than Muồng',
    category: 'than',
    price: 160000,
    image: '/images/products/than-muong.jpg',
    isBestSeller: true
  },
  {
    id: 4,
    name: 'Than Đá',
    category: 'than',
    price: 160000,
    image: '/images/products/than-da.jpg',
    isBestSeller: true
  },
  {
    id: 5,
    name: 'Than Tổ Ong',
    category: 'than',
    price: 160000,
    image: '/images/products/than-toong.jpg',
    isBestSeller: true
  },
  {
    id: 6,
    name: 'Bếp Than Tổ Ong',
    category: 'bep',
    price: 450000,
    image: '/images/products/bep-than-toong.jpg',
    isBestSeller: true
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'than', 'bep'];
  
  const categoryLabels = {
    all: 'Tất cả',
    than: 'Loại than',
    bep: 'Bếp than'
  };

  const filteredProducts = activeCategory === 'all' 
    ? products
    : products.filter(product => product.category === activeCategory);

  const bestSellers = products.filter(product => product.isBestSeller);

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isBestSeller && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Best Seller
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold mb-2">{product.name}</h4>
        <p className="text-primary font-bold">
          {product.price.toLocaleString('vi-VN')}đ
        </p>
        <Button
          className="w-full mt-4 rounded-full"
          size="sm"
        >
          Đặt hàng
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Sản phẩm của chúng tôi</h2>
        
        {/* Best Sellers Slider */}
        <div className="mb-16 relative group">
          <h3 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h3>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full shadow-md flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </motion.button>
          ))}
        </div>

        {/* Filtered Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
} 