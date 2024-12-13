'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Flame, Shield, Timer, Star } from 'lucide-react';
import { Button } from '@/components/UI/button';

export default function Overview() {
  const features = [
    {
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      title: 'Chất lượng cao',
      description: 'Than củi tự nhiên 100%, không chất phụ gia, cháy bền lâu',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'An toàn & Vệ sinh',
      description: 'Đạt tiêu chuẩn vệ sinh an toàn thực phẩm HACCP',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: <Timer className="h-6 w-6 text-blue-500" />,
      title: 'Giao hàng nhanh',
      description: 'Giao hàng trong 2h tại TP.HCM và các tỉnh lân cận',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
  ];

  return (
    <section id="overview" className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Thương hiệu uy tín hàng đầu
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400">
                Than Củi Cao Cấp<br />
                <span className="text-primary">Cho Nhà Hàng</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Trải nghiệm hương vị đặc trưng của món nướng than củi với sản phẩm chất lượng cao.
                Lựa chọn hoàn hảo cho nhà hàng, quán nướng và các đầu bếp chuyên nghiệp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 rounded-full"
                onClick={() => window.location.href = 'tel:+84123456789'}
              >
                Đặt hàng ngay
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-0.5 rounded-full"
              >
                Xem sản phẩm
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col items-center text-center p-6 rounded-2xl ${feature.bgColor} backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-default`}
                >
                  <div className="p-3 rounded-xl bg-background shadow-md mb-4 ring-1 ring-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/banner.jpg"
                alt="Than củi cao cấp - Hình ảnh sản phẩm"
                width={600}
                height={400}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg"
            >
              <span className="font-semibold">Giao hàng miễn phí</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12"
            >
              <span className="font-medium text-sm">Giảm 20%</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 