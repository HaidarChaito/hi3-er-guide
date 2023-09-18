'use client';
import { useStore } from '@/helpers/functions';
import '@/public/static/styles/globals.css';
import useGlobalStore from '@/store/mode';

export default function HandleThemeChange({ children }: { children: React.ReactNode }) {
  const store = useStore(useGlobalStore, (state) => state);
  if (store === undefined)
    return (
      <html>
        <body></body>
      </html>
    );

  return (
    <html lang='en' data-theme={store?.theme}>
      {children}
    </html>
  );
}
