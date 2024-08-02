import HeroSection from '@/components/hero';
import TopBar from '@/components/navbar';
import ShareComponent from '@/components/share';
import VisiComponent from '@/components/vision';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='w-full'>
        <TopBar />
        <HeroSection />
        <VisiComponent />
        <ShareComponent />
      </div>
    </>
  );
}
