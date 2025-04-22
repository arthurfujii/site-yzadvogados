import type { Metadata } from 'next';
import './globals.css';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
import { Lato } from 'next/font/google';

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
        <div className='container mx-auto flex h-full flex-col justify-between'>
          <div className='my-25 flex h-full min-h-[800px] w-full flex-col gap-10'>
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
      </body>
    </html>
  );
}
