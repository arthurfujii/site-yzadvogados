import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yen & Zanetti Advogados',
  description: 'Yen & Zanetti Advogados',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='container mx-auto flex h-screen flex-col justify-between bg-amber-100'>
          <div className='grid grid-cols-12 grid-rows-2'>
            <div className='col-span-3 col-start-1 row-start-1'>
              <Logo />
            </div>
            <div className='col-span-3 col-start-1 row-start-2'>
              <Menu />
            </div>
            <div className='col-span-8 col-start-5 row-start-2'>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
