import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export function Banner() {
  return (
    <section className='mb-10 lg:mb-20'>
      <div className='absolute left-0 top-0 -z-10 h-[65vh] w-full lg:h-[95vh]'>
        <Image
          src='/banner.jpg'
          alt='Cena de Big Buck Bunny'
          fill
          priority
          sizes='100vw'
          className='object-cover object-top'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-codeflix-black/80 via-transparent to-transparent' />
        <div className='bg-banner-fade absolute inset-x-0 bottom-0 h-2/5' />
      </div>

      <div className='flex flex-col space-y-4 py-16 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          Big Buck Bunny
        </h1>
        <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
          Um coelho gigante e de bom coração tem seu dia tranquilo interrompido
          por três roedores encrenqueiros — e decide dar o troco.
        </p>
      </div>

      <div className='flex space-x-3'>
        <button className='flex items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
          <PlayIcon className='h-6' />
          Assistir
        </button>
        <button className='flex items-center gap-x-2 rounded bg-gray-500/70 px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
          <InformationCircleIcon className='h-6' />
          Mais informações
        </button>
      </div>
    </section>
  );
}
