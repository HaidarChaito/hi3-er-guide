import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/public/static/styles/globals.css';
import type { Metadata } from 'next';

import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hi3 ER guide',
  description: 'Honkai impact 3rd ER guide by HaidarChaitoMena',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-theme='dracula'>
      <body className={`${nunito.className} `}>
        <Navbar />
        <div className='py-16'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
