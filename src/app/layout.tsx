import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import TopBar from '@/components/navbar';
import Footer from '@/components/footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'PT. Dua Puluh Tiga',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
