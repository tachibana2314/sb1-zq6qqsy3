import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TSUMUGITE',
  description: '理想の暮らしをデザインする',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className="pt-12 md:pt-14">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}