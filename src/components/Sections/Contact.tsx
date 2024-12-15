'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/UI/button';
import Image from 'next/image';

const contacts = [
  {
    type: 'phone',
    label: 'Hotline tư vấn 1',
    value: '0965 112 864',
    href: 'tel:+84965112864'
  },
  {
    type: 'phone',
    label: 'Hotline tư vấn 2',
    value: '0365 420 225',
    href: 'tel:+840365420225'
  },
  {
    type: 'zalo',
    label: 'Zalo đặt hàng 1',
    value: '0965 112 864',
    href: 'https://zalo.me/0965112864'
  },
  {
    type: 'zalo',
    label: 'Zalo tư vấn 2',
    value: '0365 420 225',
    href: 'https://zalo.me/0365420225'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 
      dark:from-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold 
            bg-clip-text drop-shadow-sm !text-black">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base font-medium">
            Đặt hàng ngay hôm nay - Nhận ngay ưu đãi đặc biệt!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 text-lg">
                  {contact.type === 'phone' ? (
                    <Phone className="w-6 h-6 !text-black" />
                  ) : (
                    <Image
                      src="/zalo.png"
                      alt="Zalo icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div>
                    <p className="font-semibold !text-black">{contact.label}:</p>
                    <a 
                      href={contact.href}
                      target={contact.type === 'zalo' ? '_blank' : undefined}
                      rel={contact.type === 'zalo' ? 'noopener noreferrer' : undefined}
                      className={`hover:underline transition-all ${
                        contact.type === 'phone' ? '!text-black' : 'text-[#0068FF]'
                      }`}
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
              
              <div className="flex items-start space-x-4 text-lg">
                <MapPin className="w-6 h-6 !text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black">Địa chỉ:</p>
                  <a 
                    href="https://maps.app.goo.gl/2LYRWqLG1wA8pwTB6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:!text-black transition-colors"
                  >
                    78 Nguyễn Hữu Cảnh, khu phố, Thuận An, Bình Dương, Việt Nam
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Tại sao chọn chúng tôi?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Chất lượng than đảm bảo, nguồn gốc rõ ràng</li>
                <li>✓ Giá cả cạnh tranh nhất thị trường</li>
                <li>✓ Giao hàng nhanh chóng, đúng hẹn</li>
                <li>✓ Tư vấn nhiệt tình, chuyên nghiệp</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                className="w-full rounded-full 
                  !bg-black
                  shadow-lg shadow-primary/30
                  text-white font-semibold
                  transition-all duration-300"
                size="lg"
                onClick={() => window.location.href = 'tel:+84965112864'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Gọi Ngay
              </Button>
              <Button
                className="w-full rounded-full 
                  bg-gradient-to-r from-[#0068FF] to-[#0068FF]/80
                  hover:from-[#0068FF]/80 hover:to-[#0068FF]
                  shadow-lg shadow-[#0068FF]/30
                  text-white font-semibold
                  transition-all duration-300
                  group"
                size="lg"
                onClick={() => window.location.href = 'https://zalo.me/0965112864'}
              >
                <Image
                  src="/zalo.png"
                  alt="Zalo icon"
                  width={16}
                  height={16}
                  className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110"
                />
                Chat Zalo
              </Button>
            </div>
          </div>

          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.3585711965538!2d106.70155763219978!3d10.925331953493176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d775e17dd0cb%3A0x7360850132533573!2zVuG7sWEgdGhhbiBUcuG7jW5nIEzDumE!5e0!3m2!1svi!2s!4v1734250742670!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 