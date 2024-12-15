'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Than củi Trọng Lúa Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground text-sm">
              Chuyên cung cấp than củi cao cấp cho nhà hàng, quán nướng và các đầu bếp chuyên nghiệp.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4" />
                <span>123 Đường ABC, Quận XYZ, TP.HCM</span>
              </li>
              <li>
                <Link 
                  href="tel:+84123456789"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>0123 456 789</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:info@thancuitronglua.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@thancuitronglua.com</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#overview"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link 
                  href="#products"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Than Củi Trọng Lúa. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
} 