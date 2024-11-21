import React from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const NavLink = ({ href, children }) => {
    const isActive = pathname === href;

    return isActive ? (
      <span className='ml-6 flex items-center space-x-2 text-gray-500 cursor-not-allowed'>
        {children}
      </span>
    ) : (
      <Link href={href} className='ml-6 flex items-center space-x-2'>
        {children}
      </Link>
    );
  };

  return (
    <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
      <div className='logo'>
        <Link href='/' className='font-poppins font-bold text-4xl'>
          goodbot
        </Link>
      </div>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <NavLink href='/login'>Login</NavLink>
        <NavLink href='/dashboard'>Dashboard</NavLink>
        <NavLink href='/about'>About</NavLink>

        <ModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
