'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import { Phone, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/UI/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallOrder = () => {
    window.location.href = 'tel:+84123456789';
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent py-2'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Than củi Trọng Lúa Logo"
              width={180}
              height={40}
              className="h-10 transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#overview"
              className="text-foreground/90 hover:text-foreground transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Giới thiệu
            </Link>
            <Link
              href="#products"
              className="text-foreground/90 hover:text-foreground transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Sản phẩm
            </Link>
            <Link
              href="#contact"
              className="text-foreground/90 hover:text-foreground transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Liên hệ
            </Link>
            <Button
              variant="default"
              onClick={handleCallOrder}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 rounded-full px-6"
            >
              <Phone className="h-4 w-4" />
              Đặt hàng ngay
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-0.5 rounded-full"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="font-medium">Giỏ hàng</span>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="default"
              size="sm"
              onClick={handleCallOrder}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
            >
              <Phone className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Đặt hàng</span>
            </Button>
            <ThemeToggle />
            <button
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Mở menu</span>
              <svg
                className="h-6 w-6 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-t dark:border-gray-800 shadow-lg md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-2 py-4 space-y-1">
              <Link
                href="#overview"
                className="block px-4 py-3 rounded-lg hover:bg-muted text-foreground/90 hover:text-foreground transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Giới thiệu
              </Link>
              <Link
                href="#products"
                className="block px-4 py-3 rounded-lg hover:bg-muted text-foreground/90 hover:text-foreground transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sản phẩm
              </Link>
              <Link
                href="#contact"
                className="block px-4 py-3 rounded-lg hover:bg-muted text-foreground/90 hover:text-foreground transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </Link>
              <div className="px-4 py-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 hover:bg-primary/10 transition-all duration-300"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="font-medium">Giỏ hàng</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 