'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Flame, Shield, Timer, Star, ChevronLeft, ChevronRight, MapPin, Phone, Receipt, Youtube } from 'lucide-react';
import { Button } from '@/components/UI/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { useState } from 'react';
import { useSwiper } from 'swiper/react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/UI/dialog";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// First, create a type for banner images
type BannerImage = {
  src: string;
  alt: string;
  priority?: boolean;
};

// Create a separate Banner component
const BannerSlide = ({ src, alt, priority = false }: BannerImage) => (
  <div className="relative w-full h-full">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority={priority}
    />
  </div>
);

// Update the Swiper implementation
const BannerSwiper = () => {
  const bannerImages: BannerImage[] = [
    { src: '/images/banner.jpg', alt: 'Banner', priority: true },
    { src: '/images/banner_1.jpg', alt: 'Banner 1'},
    { src: '/images/banner_2.jpg', alt: 'Banner 2' },
    { src: '/images/banner_3.jpg', alt: 'Banner 3' },
    { src: '/images/banner_4.jpg', alt: 'Banner 4' },
    { src: '/images/banner_5.jpg', alt: 'Banner 5' },
  ];

  return (
    <div className="relative group">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[450px] aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={image.src}>
            <BannerSlide {...image} />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

// Create a custom navigation component
const SwiperNavButtons = () => {
  const swiper = useSwiper();
  
  return (
    <>
      <button 
        onClick={() => swiper.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button 
        onClick={() => swiper.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
};

export default function Overview() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl] = useState('https://www.youtube.com/embed/YOUR_VIDEO_ID'); // Replace YOUR_VIDEO_ID with actual YouTube video ID
  
  const phoneNumbers = [
    { number: '0965 112 864', label: 'Hotline 1' },
    { number: '0365 420 225', label: 'Hotline 2' },
    { number: '0909 678 646', label: 'Hotline 3' },
  ];

  const features = [
    {
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      title: 'Chất lượng cao',
      description: 'Than củi tự nhiên 100%, cháy bền lâu',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    },
    {
      icon: <Receipt className="h-6 w-6 text-green-500" />,
      title: 'Giá cả hợp lý',
      description: 'Cam kết giá tốt nhất trên thị trường',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: <Timer className="h-6 w-6 text-blue-500" />,
      title: 'Giao hàng nhanh',
      description: 'Giao hàng trong 2h tại Bình Dương và TP.HCM',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
  ];

  return (
    <section id="overview" className="min-h-screen flex items-center pt-16 sm:pt-24 pb-8 sm:pb-16 overflow-hidden w-full">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2 w-full"
        >
          <div className="space-y-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Thương hiệu uy tín hàng đầu
                </span>
              </div>
              
              <div className="flex items-center gap-2 bg-primary/10 hover:bg-primary/15 px-3 sm:px-4 py-2 rounded-full transition-all duration-1000 animate-pulse hover:animate-none cursor-pointer shadow-lg hover:shadow-xl border border-primary/20"
                   onClick={() => window.location.href = 'tel:+84965112864'}>
                <div className="relative">
                  <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-bounce" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-primary">
                    Hotline: 0965 112 864
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-primary/80">
                    Hỗ trợ 24/7
                  </span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold !leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400">
              <span className="text-primary">Than Củi Cao Cấp Cho Nhà Hàng, Quán Nướng, Tạp Hoá</span>
            </h3>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start md:items-center pt-6 sm:pt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
                Trải nghiệm hương vị đặc trưng của món nướng than củi với sản phẩm chất lượng cao.
                Lựa chọn hoàn hảo cho nhà hàng, quán nướng và các đầu bếp chuyên nghiệp.
              </p>

              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 rounded-full">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium">
                  Giao hàng tại địa phận <span className="font-bold">Bình Dương</span> và <span className="font-bold">TP.HCM</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="default"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 rounded-full w-full sm:w-auto"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Đặt hàng ngay
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {phoneNumbers.map((phone, index) => (
                    <DropdownMenuItem
                      key={phone.number}
                      className="flex items-center gap-2 py-3 cursor-pointer"
                      onClick={() => window.location.href = `tel:+84${phone.number.substring(1)}`}
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <div className="flex flex-col">
                        <span className="font-medium">{phone.label}</span>
                        <span className="text-sm text-muted-foreground">{phone.number}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                size="default"
                variant="outline"
                className="group hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-0.5 rounded-full w-full sm:w-auto"
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Xem sản phẩm
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="default"
                    variant="outline"
                    className="group bg-red-500 hover:bg-red-600 text-white transition-all duration-300 transform hover:-translate-y-0.5 rounded-full w-full sm:w-auto"
                  >
                    <Youtube className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-base sm:text-lg">Tại sao chọn chúng tôi?</h4>
              <div className="grid gap-2 sm:gap-3">
                <div className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-background/50 border">
                  <Star className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs sm:text-sm">Nhiều nhà hàng, quán ăn, tạp hoá tin dùng.</span>
                </div>
                <div className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-background/50 border">
                  <Receipt className="h-4 sm:h-5 w-4 sm:w-5 text-green-500" />
                  <span className="text-xs sm:text-sm">Có hỗ trợ xuất hoá đơn đỏ.</span>
                </div>
                <div className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-background/50 border">
                  <Timer className="h-4 sm:h-5 w-4 sm:w-5 text-blue-500" />
                  <span className="text-xs sm:text-sm">Làm việc tất cả các ngày trong tuần. Hỗ trợ tư vấn 24/7.</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group order-first md:order-last w-full"
          >
            <BannerSwiper />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute 
                top-2 -right-1
                sm:top-3 sm:-right-3 
                md:top-4 md:-right-4 
                bg-gradient-to-r from-primary to-primary/90 
                text-primary-foreground 
                px-2 py-1
                sm:px-4 sm:py-2 
                md:px-6 md:py-3 
                rounded-full shadow-lg backdrop-blur-sm 
                border border-white/10 z-20 
                hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Timer className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap">
                  Giao hàng miễn phí
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute 
                top-12 -right-1
                sm:top-16 sm:-right-3 
                md:top-20 md:-right-4 
                bg-gradient-to-r from-orange-500 to-orange-400 
                text-white 
                px-2 py-1
                sm:px-4 sm:py-2 
                md:px-6 md:py-3 
                rounded-full shadow-lg transform rotate-12 z-20 
                hover:rotate-0 transition-all duration-300 
                border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Flame className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
                  Giảm 20%
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col items-center text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl ${feature.bgColor} 
                backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-default
                border border-primary/10 dark:border-primary/20
                hover:border-primary/30 dark:hover:border-primary/40
                hover:scale-[1.02]`}
            >
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-background/80 shadow-md mb-3 sm:mb-4 
                ring-1 ring-primary/10 dark:bg-background/20 dark:ring-primary/20
                group-hover:shadow-lg group-hover:scale-110 transition-all duration-300
                dark:backdrop-blur-xl">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 
                text-gray-900 dark:text-gray-100
                transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground/90 dark:text-gray-400
                group-hover:text-muted-foreground dark:group-hover:text-gray-300
                transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 