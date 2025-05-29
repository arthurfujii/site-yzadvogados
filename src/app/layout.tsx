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
      <body className={`${lato.variable} `}>
        <Header />
        <main className='-z-10 container mx-auto flex flex-col justify-between px-15 lg:px-20'>
          <div className='mt-15 mb-10 flex min-h-[calc(100vh-12rem)] w-full flex-col gap-10 sm:min-h-[calc(100vh-9.5rem)]'>
            <div className='hidden w-2/7 sm:block'>
              <Logo />
            </div>
            <div className='flex w-full gap-20'>
              <div className='hidden w-2/7 sm:block'>
                <Menu />
              </div>
              <div className='sm:mr-0 sm:w-5/7 xl:pr-20'>{children}</div>
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
