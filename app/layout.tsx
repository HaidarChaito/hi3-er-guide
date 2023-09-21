import Footer from '@/components/shared/Footer';
import HandleThemeChange from '@/components/shared/HandleThemeChange';
import Navbar from '@/components/shared/Navbar';
import TransitionAnimation from '@/components/shared/TransitionAnimation';
import '@/public/static/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hi3 ER guide',
  description: 'Honkai impact 3rd ER guide by HaidarChaitoMena',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <HandleThemeChange>
      <body className={`${nunito.className} noscrollbars `}>
        <Navbar />
        <TransitionAnimation>
          <div className='py-16'>{children}</div>
        </TransitionAnimation>
        <Footer />
        <Analytics />
      </body>
    </HandleThemeChange>
  );
}
