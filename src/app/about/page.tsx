import type { Metadata } from 'next';
import AboutUs from '@/components/meetOur';

export const metadata: Metadata = {
  title: 'about',
};

export default function Home() {
  return (
    <main className=''>
      {/* <MainSection /> */}
      <AboutUs />
    </main>
  );
}
