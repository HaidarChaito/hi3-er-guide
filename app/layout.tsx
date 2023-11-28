import HandleThemeChange from '@/components/shared/HandleThemeChange';
import Navbar from '@/components/shared/Navbar';
import TransitionAnimation from '@/components/shared/TransitionAnimation';
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
    description: 'for feedback or issues mention .syblue in Hi3 official server',
    url: 'https://hi3er.tech',
    siteName: 'Hi3er',
    images: [
      {
        url: 'https://images-ext-2.discordapp.net/external/fXsDf50jW_ShXu1Vf7OTbqW3jslN3ZqoTp_nijtD11o/https/cdn.discordapp.com/emojis/1134456907134926931.gif',
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
      </body>
    </HandleThemeChange>
  );
}
