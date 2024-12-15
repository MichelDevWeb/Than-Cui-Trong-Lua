'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const contacts = {
  phones: [
    {
      label: 'Hotline đặt hàng',
      value: '096.511.2864',
      href: 'tel:+84965112864'
    }
  ],
  address: {
    text: '78 Nguyễn Hữu Cảnh, khu phố, Thuận An, Bình Dương, Việt Nam',
    href: 'https://maps.app.goo.gl/2LYRWqLG1wA8pwTB6'
  },
  social: {
    zalo: 'https://zalo.me/0965112864',
    facebook: 'https://www.facebook.com/lua.nguyenthi.75033',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com'
  }
};

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
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✓ Chất lượng than đảm bảo, nguồn gốc rõ ràng</p>
              <p>✓ Giá cả cạnh tranh nhất thị trường</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={contacts.address.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="group-hover:text-primary transition-colors">
                    {contacts.address.text}
                  </span>
                </Link>
              </li>
              {contacts.phones.map((phone, index) => (
                <li key={index}>
                  <Link 
                    href={phone.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{phone.value} - {phone.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href={contacts.social.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Image
                    src="/zalo.png"
                    alt="Zalo icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  <span>Zalo: {contacts.phones[0].value}</span>
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
                href={contacts.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={contacts.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={contacts.social.youtube}
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
          <p>© {new Date().getFullYear()} Than Củi Trọng Lúa. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
} 