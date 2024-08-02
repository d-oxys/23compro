// components/HeroSection.js
import Image from 'next/image';
import hero from '../../../public/hero/hero.png';

const HeroSection = () => {
  return (
    <div className='w-full'>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${hero.src})` }}>
        {/* Konten lain bisa ditambahkan di sini */}
      </div>
    </div>
  );
};

export default HeroSection;
