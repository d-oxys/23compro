import BodyPack from '@/components/ourOffice';
import HeroSection from '@/components/hero';
import MeetOur from '@/components/meetOur';
import TopBar from '@/components/navbar';
import ShareComponent from '@/components/share';
import VisiComponent from '@/components/vision';
import Footer from '@/components/footer';
import ExportBody from '@/components/export';

export default function Home() {
  return (
    <>
      <div className='absolute w-screen no-scrollbar'>
        <TopBar />
        <HeroSection />
        <VisiComponent />
        <ShareComponent />
        <MeetOur />
        <BodyPack />
        <ExportBody />
      </div>
    </>
  );
}
