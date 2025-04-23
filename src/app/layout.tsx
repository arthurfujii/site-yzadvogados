import type { Metadata } from 'next';
import './globals.css';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Lato } from 'next/font/google';
import Header from './components/Header';
import { Logo } from './components/Logo';

export const metadata: Metadata = {
  title: 'Yen & Zanetti Advogados',
  description: 'Yen & Zanetti Advogados',
};

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lato',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/icon.svg' sizes='any' />
        <link
          rel='preload'
          href='https://use.typekit.net/dfa2brg.css'
          as='style'
        />
        <link rel='stylesheet' href='https://use.typekit.net/dfa2brg.css' />
      </head>
      <body className={`${lato.variable}`}>
        <div className='w-full px-5 pt-10 sm:hidden'>
          <Header />
        </div>
        <main className='-z-10'>
          <div className='container mx-auto flex h-full flex-col justify-between px-10'>
            <div className='mt-40 mb-25 flex h-full min-h-[800px] w-full flex-col gap-10'>
              <div className='hidden w-2/7 sm:block'>
                <Logo />
              </div>
              <div className='flex w-full gap-10'>
                <div className='hidden w-2/7 sm:block'>
                  <Menu />
                </div>
                <div className='mx-auto w-5/7 sm:mr-0'>{children}</div>
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
