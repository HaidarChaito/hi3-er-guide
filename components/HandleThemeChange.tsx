'use client';
import '@/public/static/styles/globals.css';
import useGlobalStore, { useStore } from '@/store/mode';

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
