'use client';

import Image from 'next/image';
import { useScroll } from '../hooks/useScroll';
import { Logo } from './Logo';

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
        <nav>
          <ul className='hidden md:flex md:space-x-4'>
            {['Início', 'Séries', 'Filmes', 'Novidades', 'Minha lista'].map(
              (link, index) => (
                <li
                  key={link}
                  className={`cursor-pointer text-sm transition hover:text-gray-300 ${
                    index === 0 ? 'font-semibold text-white' : 'text-gray-200'
                  }`}
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </nav>
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
