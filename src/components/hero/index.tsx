// components/HeroSection.js
import Image from 'next/image';
import hero from '../../../public/hero/hero.png';

const HeroSection = () => {
  return (
    <div className='w-full'>
      <div
        className='relative h-96
       bg-cover bg-center sm:h-96 md:h-screen'
        style={{ backgroundImage: `url(${hero.src})`, backgroundPosition: 'center' }}
      >
        {/* Konten lain bisa ditambahkan di sini */}
      </div>
    </div>
  );
};

export default HeroSection;
