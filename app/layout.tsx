import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SmoothScroll } from '@/components/smooth-scroll';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Second Brain - AI Knowledge Management',
  description: 'Your AI-powered knowledge management system. Capture, organize, and discover insights with intelligent automation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster richColors position="bottom-right" />
        </SmoothScroll>
      </body>
    </html>
  );
}
