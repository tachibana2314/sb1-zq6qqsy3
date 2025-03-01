import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

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
      <body className="font-meiryo">
        <Header />
        <div className="pt-24 md:pt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}