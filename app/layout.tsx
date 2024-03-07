import HandleThemeChange from '@/components/shared/HandleThemeChange';
import Navbar from '@/components/shared/Navbar';
import TransitionAnimation from '@/components/shared/TransitionAnimation';
import { Analytics } from '@vercel/analytics/react';
import '@/public/static/styles/globals.css';
import type { Metadata } from 'next';

import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hi3 ER guide',
  description: 'for feedback or issues mention .syblue in Hi3 official server',
  applicationName: 'Hi3er',
  authors: [
    { name: 'HaidarChaitoMena', url: 'https://github.com/HaidarChaitoMena' },
    { name: 'AdoriZahar', url: 'https://github.com/AdoriZahar' },
    { name: 'AquaHi3', url: 'https://github.com/AquaHi3' },
  ],
  creator: 'HaidarChaitoMena',
  publisher: 'HaidarChaitoMena',
  openGraph: {
    title: 'Hi3er',
    description: 'No longer supported with updates, builds before 7.3 still work fine',
    url: 'https://hi3er.tech',
    siteName: 'Hi3er',
    images: [
      {
        url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemU2aGN5Y3U0djd4dnZiNGdoNjcwa202aG8xNnk2aXl4b3J2OGNsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZH0RnfhNnqRiEZqq0b/giphy.gif',
        width: 200,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <HandleThemeChange>
      <body className={`${nunito.className} noscrollbars `}>
        <Navbar />
        <TransitionAnimation>
          <div className='py-16'>{children}</div>
        </TransitionAnimation>
        <Analytics />
      </body>
    </HandleThemeChange>
  );
}
