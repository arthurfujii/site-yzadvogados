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
          <div className='mt-25 flex h-full w-full flex-col gap-10'>
            <div className='w-2/7'>
              <Logo />
            </div>
            <div className='flex w-full gap-10'>
              <div className='w-2/7'>
                <Menu />
              </div>
              <div className='w-5/7'>{children}</div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
