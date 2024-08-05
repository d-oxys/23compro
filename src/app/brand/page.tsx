import type { Metadata } from 'next';
import ExportBody from '@/components/export';
import BodyPack from '@/components/bodypack';

export const metadata: Metadata = {
  title: 'brand',
};

export default function Home() {
  return (
    <main className=''>
      {/* <MainSection /> */}
      <ExportBody />
      <BodyPack />
    </main>
  );
}
