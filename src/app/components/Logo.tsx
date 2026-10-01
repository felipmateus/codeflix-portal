import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src='/logo.svg'
      alt='Codeflix'
      width={120}
      height={27}
      priority
      className='cursor-pointer'
    />
  );
}
