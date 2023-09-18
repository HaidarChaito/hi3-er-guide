'use client';
import { IoIosColorPalette } from 'react-icons/io';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Toggle from './Toggle';
import useGlobalStore, { useStore } from '@/store/mode';

export default function Navbar() {
  const store = useStore(useGlobalStore, (state) => state);

  const pathname = usePathname();

  return (
    <>
      <div className='navbar fixed top-0 z-50 h-16 bg-neutral p-0'>
        <div className='relative mx-auto w-full'>
          <div className='flex w-full items-center justify-around py-6 sm:justify-between xl:px-12'>
            <ul className='flex w-full justify-around space-x-1 font-semibold text-neutral-content sm:justify-center sm:space-x-4'>
              <li
                onClick={store?.isFaqOpen ? store.toggleFaq : undefined}
                className={pathname === '/' && store?.isFaqOpen === false ? 'text-primary' : ''}
              >
                <Link className='btn btn-ghost text-lg normal-case' href='/'>
                  Home
                </Link>
              </li>
              <li className={store?.isFaqOpen ? 'text-primary' : ''}>
                <div onClick={store?.toggleFaq} className='btn btn-ghost text-lg normal-case'>
                  FAQ
                </div>
              </li>
              <li>
                <Toggle onChange={store?.toggleTheme}>
                  <IoIosColorPalette className='swap-on h-10 w-10 fill-primary' />
                  <IoIosColorPalette className='swap-off h-10 w-10  fill-primary' />
                </Toggle>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
