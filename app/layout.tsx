// 主布局文件 
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lightning PDF Converter - Online Image to PDF Tool',
  description: 'Free online tool to convert JPG/PNG/WEBP and other image formats to PDF, with batch processing and smart sorting while preserving original quality',
  keywords: 'image to pdf, jpg to pdf, png to pdf, convert images, online converter, free pdf tool',
  openGraph: {
    title: 'Lightning PDF Converter - Online Image to PDF Tool',
    description: 'Free online tool to convert JPG/PNG/WEBP and other image formats to PDF, with batch processing and smart sorting while preserving original quality',
    url: 'https://jpg-to-pdf-converter.vercel.app',
    siteName: 'Lightning PDF Converter',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="py-6 text-center">
          <p className="text-sm text-gray-400 mb-2">
            © {new Date().getFullYear()} Lightning PDF Converter. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-400">
            <Link 
              href="/privacy-policy" 
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link 
              href="/terms-of-service" 
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
} 
