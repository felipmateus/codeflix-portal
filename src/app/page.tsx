import { Banner } from './components/Banner';
import { Header } from './components/Header';

export default function Home() {
  return (
    <div className='relative pb-8'>
      <Header />
      <main className='relative min-h-screen pl-4 lg:pl-16'>
        <Banner />
      </main>
    </div>
  );
}
