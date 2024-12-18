import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { BackToTop } from '@/components/UI/BackToTop';
import { Analytics } from "@vercel/analytics/react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vuathantronglua.com'),
  title: {
    default: 'Vựa Than Trọng Lúa - Cung Cấp Than Cao Cấp Tại Bình Dương',
    template: '%s | Vựa Than Trọng Lúa'
  },
  description: 'Chuyên cung cấp than củi cao cấp, than thịt nướng, than bếp nướng cho nhà hàng, quán nướng tại Bình Dương và TP.HCM. Giao hàng nhanh trong 2h, giá tốt nhất thị trường.',
  applicationName: 'Vựa Than Trọng Lúa',
  authors: [{ name: 'Vựa Than Trọng Lúa' }],
  generator: 'Next.js',
  keywords: [
    'than củi Bình Dương',
    'than củi cao cấp',
    'than thịt nướng',
    'than bếp nướng',
    'than củi nhà hàng',
    'than củi quán nướng',
    'than củi TP.HCM',
    'vựa than Trọng Lúa',
    'than nướng giá rẻ',
    'than củi giao nhanh',
    'than củi chất lượng cao',
    'than củi Thuận An'
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Vựa Than Trọng Lúa',
  publisher: 'Vựa Than Trọng Lúa',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    shortcut: '/shortcut-icon.png',
    apple: '/images/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/logo.png'
    }
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://vuathantronglua.com',
    title: 'Vựa Than Trọng Lúa - Than Củi Cao Cấp Tại Bình Dương',
    description: 'Chuyên cung cấp than củi cao cấp, than thịt nướng cho nhà hàng, quán nướng. ✓ Giao hàng nhanh 2h ✓ Giá tốt nhất ✓ Than cháy lâu, ít khói',
    siteName: 'Vựa Than Trọng Lúa',
    images: [
      {
        url: '/images/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Vựa Than Trọng Lúa - Than củi cao cấp tại Bình Dương',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vựa Than Trọng Lúa - Than Củi Cao Cấp Tại Bình Dương',
    description: 'Chuyên cung cấp than củi cao cấp, than thịt nướng cho nhà hàng, quán nướng. Giao hàng nhanh trong 2h.',
    images: ['/images/twitter-image.jpg'],
    creator: '@vuathantronglua',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  verification: {
    google: 'your-google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      me: ['vuathantronglua@gmail.com'],
    },
  },
  alternates: {
    canonical: 'https://vuathantronglua.com',
    languages: {
      'vi-VN': 'https://vuathantronglua.com',
    },
  },
  category: 'business',
  classification: 'Business & Industrial > Fuel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="vi" 
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="canonical" href="https://vuathantronglua.com" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="VN-57" />
        <meta name="geo.placename" content="Thuận An, Bình Dương" />
        <meta name="geo.position" content="10.932756;106.713459" />
        <meta name="ICBM" content="10.932756, 106.713459" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="Vựa Than Trọng Lúa" />
        <meta name="author" content="Vựa Than Trọng Lúa" />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
