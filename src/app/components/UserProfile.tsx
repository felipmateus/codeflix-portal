import Image from 'next/image';

export function UserProfile() {
  return (
    <div className='flex items-center space-x-4'>
      <p className='hidden cursor-not-allowed text-sm lg:inline'>Kids</p>
      <Image
        src='/profile.svg'
        alt='Profile'
        width={32}
        height={32}
        className='cursor-pointer rounded'
      />
    </div>
  );
}
