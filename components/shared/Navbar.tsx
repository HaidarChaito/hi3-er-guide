'use client';
import { AiFillCloseCircle } from 'react-icons/ai';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useGlobalStore, { availableThemes } from '@/store/mode';
import { useStore } from '@/helpers/functions';
import useNonPersistentStore from '@/store/valk';

export default function Navbar() {
  const store = useStore(useGlobalStore, (state) => state);
  const valkStore = useStore(useNonPersistentStore, (state) => state);

  const pathname = usePathname();

  return (
    <>
      <div className='navbar fixed top-0 z-50 h-16 bg-neutral p-0'>
        <div className='relative mx-auto w-full'>
          <div className='flex w-full items-center justify-around py-6 sm:justify-between xl:px-12'>
            <ul className='flex w-full justify-around space-x-1 font-semibold text-neutral-content sm:justify-center sm:space-x-4'>
              {valkStore?.selectedValk && (
                <li onClick={() => valkStore?.setSelectedValk(undefined)}>
                  <Link
                    onClick={() => valkStore?.setSelectedValk(undefined)}
                    className='btn btn-ghost text-lg normal-case'
                    href='/'
                  >
                    <AiFillCloseCircle />
                  </Link>
                </li>
              )}
              <li
                onClick={store?.isFaqOpen ? store.toggleFaq : undefined}
                className={pathname === '/' && store?.isFaqOpen === false ? 'text-primary' : ''}
              >
                <Link
                  onClick={() => valkStore?.setSelectedValk(undefined)}
                  className='btn btn-ghost text-lg normal-case'
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li className={store?.isFaqOpen ? 'text-primary' : ''}>
                <div onClick={store?.toggleFaq} className='btn btn-ghost text-lg normal-case'>
                  FAQ
                </div>
              </li>
              <li>
                <div className='dropdown bg-neutral'>
                  <div tabIndex={0} role='button' className='btn btn-primary m-1'>
                    Theme
                    <svg
                      width='12px'
                      height='12px'
                      className='inline-block h-2 w-2 fill-current opacity-60'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 2048 2048'
                    >
                      <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
                    </svg>
                  </div>
                  <ul className='dropdown-content rounded-box z-[1] w-52 bg-neutral p-2 shadow-2xl'>
                    {availableThemes != undefined &&
                      availableThemes.map((theme, index) => (
                        <li key={index}>
                          <input
                            onClick={() => store?.theme !== theme && store?.selectTheme(theme)}
                            type='radio'
                            checked={store?.theme === theme}
                            name='theme-dropdown'
                            className='btn btn-ghost btn-sm w-full justify-start text-center'
                            value={theme}
                            aria-label={theme}
                          />
                        </li>
                      ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
