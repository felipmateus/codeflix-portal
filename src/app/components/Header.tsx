'use client';

import Image from 'next/image';
import { useScroll } from '../hooks/useScroll';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-2 transition-colors duration-300 lg:px-16 lg:py-4 ${
        isScrolled
          ? 'bg-codeflix-black'
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NavLinks />
      </div>
      <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed text-sm lg:inline'>Infantil</p>
        <Image
          src='/profile.svg'
          alt='Perfil'
          width={32}
          height={32}
          className='cursor-pointer rounded'
        />
      </div>
    </header>
  );
}
