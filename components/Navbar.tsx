'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Define a function to determine if a link is active
  const isLinkActive = (href: string) => {
    return pathname === href ? 'text-redprimary' : '';
  };

  return (
    <>
      <div className='navbar fixed top-0 z-50 h-16 bg-neutral p-0'>
        <div className='relative mx-auto'>
          <div className='flex w-full items-center justify-between px-5 py-6 xl:px-12'>
            <ul className='font-heading mx-auto flex space-x-12 px-4 font-semibold'>
              <li className={` ${isLinkActive('/')}`}>
                <Link className='btn btn-ghost text-xl normal-case' href='/'>
                  Home
                </Link>
              </li>
              <li className={` ${isLinkActive('/info')}`}>
                <Link className='btn btn-ghost text-xl normal-case' href='/info'>
                  Info
                </Link>
              </li>
              <li className={` ${isLinkActive('/faq')}`}>
                <Link className='btn btn-ghost text-xl normal-case' href='/faq'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
