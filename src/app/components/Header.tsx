import Image from 'next/image';

export function Header() {
  return (
    <header className='fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-black/80 to-transparent px-4 py-2 transition-all lg:px-16 lg:py-4'>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Image
          src='/logo.svg'
          alt='Codeflix'
          width={120}
          height={27}
          priority
          className='cursor-pointer'
        />
      </div>
    </header>
  );
}
