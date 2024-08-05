'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import visi from '../../../public/visi.png';
import misi from '../../../public/misi.png';

const VisiComponent = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-col md:flex-row justify-between items-center p-4 bg-white w-full'>
        <div className='text-[#003399] font-bold text-[24px] md:text-[39px] ml-0 md:ml-20 mb-4 md:mb-0' data-aos='fade-up'>
          Vision <span className='md:block inline'>and Mission</span>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4'>
          <Image className='mt-6 md:mt-6 w-64 h-64 md:w-[387px] md:h-[386px]' src={visi} alt='Visi' data-aos='fade-right' />
          <Image className='w-64 h-64 md:w-[387px] md:h-[386px]' src={misi} alt='Misi' data-aos='fade-left' />
        </div>
      </div>
    </div>
  );
};

export default VisiComponent;
