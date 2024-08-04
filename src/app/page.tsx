import OurOffice from '@/components/ourOffice/';
import HeroSection from '@/components/hero';
import MeetOur from '@/components/meetOur';
import TopBar from '@/components/navbar';
import ShareComponent from '@/components/share';
import VisiComponent from '@/components/vision';
import Footer from '@/components/footer';
import ExportBody from '@/components/export';
import BodyPack from '@/components/bodypack';

export default function Home() {
  return (
    <>
      <div className='no-scrollbar'>
        <TopBar />
        <HeroSection />
        <VisiComponent />
        <ShareComponent />
        <MeetOur />
        <OurOffice />
        <ExportBody />
        <BodyPack />
        <Footer />
      </div>
    </>
  );
}
