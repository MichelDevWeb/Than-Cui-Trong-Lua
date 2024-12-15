'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCards } from 'swiper/modules';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Phone, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/UI/button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Than Nhãn 1',
    category: 'than',
    image: '/images/products/than_nhan.jpg',
    isBestSeller: true
  },
  {
    id: 2,
    name: 'Than Nhãn 2',
    category: 'than',
    image: '/images/products/than-nhan.jpg',
  },
  {
    id: 3,
    name: 'Than Đước',
    category: 'than',
    image: '/images/products/than-duoc.jpg',
    isBestSeller: true
  },
  {
    id: 4,
    name: 'Than Cà Phê 1',
    category: 'than',
    image: '/images/products/than_cafe.jpg',
    isBestSeller: true
  },
  {
    id: 5,
    name: 'Than Cà Phê 2',
    category: 'than',
    image: '/images/products/than-cafe.jpg',
  },
  {
    id: 6,
    name: 'Than Muồng 1',
    category: 'than',
    image: '/images/products/than_muong.jpg',
    isBestSeller: true
  },
  {
    id: 7,
    name: 'Than Muồng 2',
    category: 'than',
    image: '/images/products/than-muong.jpg',
  },
  {
    id: 8,
    name: 'Than Đá',
    category: 'than',
    image: '/images/products/than-da.jpg',
  },
  {
    id: 9,
    name: 'Than Tổ Ong 1',
    category: 'than',
    image: '/images/products/than_toong.jpg',
    isBestSeller: true
  },
  {
    id: 10, 
    name: 'Than Tổ Ong 2',
    category: 'than',
    image: '/images/products/than-toong.jpg',
  },
  {
    id: 11,
    name: 'Bếp Than Tổ Ong 1',
    category: 'bep',
    image: '/images/products/bep_than_toong.jpg',
    isBestSeller: true
  },
  {
    id: 12,
    name: 'Bếp Than Tổ Ong 2',
    category: 'bep',
    image: '/images/products/bep_than_toong_1.jpg',
    isBestSeller: true
  },
  { 
    id: 13,
    name: 'Bếp Than Tổ Ong 3',
    category: 'bep',
    image: '/images/products/bep-than-toong.jpg',
  },
];

const productDiscounts: Record<number, number> = {
  1: 10,  // Than Nhãn 1
  3: 15,  // Than Đước
  4: 5,   // Than Cà Phê 1
  6: 10,  // Than Muồng 1
  9: 15,  // Than Tổ Ong 1
  11: 5,  // Bếp Than Tổ Ong 1
  12: 10, // Bếp Than Tổ Ong 2
};

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

  const ProductCard = ({ product }: { product: Product }) => {
    const discount = product.isBestSeller ? productDiscounts[product.id] : null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative bg-white/90 rounded-2xl 
          shadow-lg hover:shadow-xl overflow-hidden 
          border border-gray-200/50
          backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.isBestSeller && (
            <div className="absolute top-2 right-2 flex items-center gap-1.5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 
                  dark:from-yellow-400 dark:to-amber-400 
                  text-white dark:text-gray-900 px-3 py-1 rounded-full 
                  text-xs font-medium flex items-center gap-1.5 
                  shadow-lg backdrop-blur-sm
                  border border-yellow-400/20 dark:border-yellow-300/30"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 15, -15, 15, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Star className="w-3.5 h-3.5 fill-white dark:fill-gray-900" />
                </motion.div>
                <span className="font-semibold tracking-wide">Best Seller</span>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-r from-red-500 to-rose-500 
                  dark:from-red-600 dark:to-rose-600
                  text-white px-3 py-1 rounded-full 
                  text-xs font-medium
                  shadow-lg backdrop-blur-sm
                  border border-red-400/20 dark:border-red-500/30"
              >
                <span className="font-bold">-{discount}%</span>
              </motion.div>
            </div>
          )}
        </div>
        <div className="p-4 space-y-4">
          <h4 className="font-semibold text-gray-800 text-center text-lg
            hover:text-primary transition-colors duration-300">
            {product.name}
          </h4>
          <div className="space-y-3">
            <Button
              className="w-full rounded-full 
                bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black
                dark:from-black dark:to-gray-900 dark:hover:from-gray-900 dark:hover:to-black
                shadow-lg shadow-black/30 dark:shadow-black/10
                backdrop-blur-sm transition-all duration-500
                border border-gray-800/10 dark:border-gray-800/30 h-10
                font-semibold tracking-wide text-base
                text-white dark:text-white/95
                [animation:pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:animate-none"
              size="sm"
              onClick={() => window.location.href = 'tel:+84965112864'}
            >
              <Phone className="w-5 h-5 mr-2" strokeWidth={2.5} />
              <span>Gọi ngay</span>
            </Button>
            <Button
              variant="secondary"
              className="w-full rounded-full 
                bg-gradient-to-r from-[#0068FF] to-[#0068FF]/80 hover:from-[#0068FF]/80 hover:to-[#0068FF]
                dark:from-[#0068FF] dark:to-[#0068FF]/90 dark:hover:from-[#0068FF]/90 dark:hover:to-[#0068FF]
                shadow-lg shadow-[#0068FF]/30 dark:shadow-[#0068FF]/20
                backdrop-blur-sm transition-all duration-300
                border border-[#0068FF]/10 dark:border-[#0068FF]/20 h-10
                font-semibold tracking-wide text-base
                text-white dark:text-white/90"
              size="sm"
              onClick={() => window.location.href = 'https://zalo.me/0965112864'}
            >
              <ShoppingCart className="w-5 h-5 mr-2" strokeWidth={2.5} />
              <span>Đặt hàng qua Zalo</span>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="products" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/80 to-white 
      dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold 
            bg-clip-text text-transparent bg-gradient-to-r 
            from-primary to-primary/80
            drop-shadow-sm">
            Sản phẩm của chúng tôi
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Chất lượng tạo nên thương hiệu - Uy tín làm nên sự khác biệt
          </p>
        </motion.div>
        
        {/* Best Sellers Slider */}
        <div className="mb-16 relative group">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold 
              bg-clip-text text-transparent bg-gradient-to-r 
              from-primary to-primary/80
              drop-shadow-sm">
              Sản phẩm nổi bật
            </h3>
            <div className="flex gap-2">
              <button className="swiper-button-prev w-10 h-10 bg-white/80 dark:bg-gray-800/80 
                rounded-full shadow-lg flex items-center justify-center 
                hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300
                border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <ChevronLeft className="w-6 h-6 text-foreground dark:text-gray-100" />
              </button>
              <button className="swiper-button-next w-10 h-10 bg-white/80 dark:bg-gray-800/80 
                rounded-full shadow-lg flex items-center justify-center 
                hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300
                border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <ChevronRight className="w-6 h-6 text-foreground dark:text-gray-100" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation, EffectCards]}
            spaceBetween={20}
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
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="pb-12 !px-3 !py-3"
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium
                transition-all duration-300 shadow-md ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-primary/25'
                  : 'bg-white hover:bg-primary/10 text-gray-800 border border-gray-200/50'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </motion.button>
          ))}
        </div>

        {/* Filtered Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 