// pages/index.js
import type { Metadata } from 'next';
import ExportBody from '@/components/export';
import BodyPack from '@/components/bodypack';

export const metadata: Metadata = {
  title: 'brand',
};

export default function Home() {
  return (
    <main className=''>
      <section id='export'>
        <ExportBody />
      </section>
      <section id='bodypack'>
        <BodyPack />
      </section>
    </main>
  );
}
