'use client';
import OurOffice from '@/components/ourOffice/';
import HeroSection from '@/components/hero';
import MeetOur from '@/components/meetOur';
import TopBar from '@/components/navbar';
import Footer from '@/components/footer';
import ShareComponent from '@/components/share';
import VisiComponent from '@/components/vision';
import ExportBody from '@/components/export/brandHover';
import BodyPack from '@/components/bodypack';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className='no-scrollbar'>
        <HeroSection />
        <VisiComponent />
        <ShareComponent />
        <ExportBody />
      </div>
    </>
  );
}
