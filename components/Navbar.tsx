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
      <div className='fixed top-0 z-50 w-screen bg-primary text-white'>
        <div className='relative mx-auto'>
          <div className='flex w-full items-center justify-between px-5 py-6 xl:px-12'>
            <ul className='font-heading mx-auto flex space-x-12 px-4 font-semibold'>
              <li className={`hover:text-redprimary ${isLinkActive('/')}`}>
                <Link href='/'>Home</Link>
              </li>
              <li className={`hover:text-redprimary ${isLinkActive('/info')}`}>
                <Link href='/info'>Info</Link>
              </li>
              <li className={`hover:text-redprimary ${isLinkActive('/faq')}`}>
                <Link href='/faq'>FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
