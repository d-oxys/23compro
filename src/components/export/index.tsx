'use client';
import Image from 'next/image';
import { useState } from 'react';
import g17 from '../../../public/group/Component 9.png';
import g18 from '../../../public/group/Component 10.png';
import hoverg17 from '../../../public/hero/Component 17.png';
import hoverg18 from '../../../public/hero/Component 18.png';
import frameG from '../../../public/group/Frame 6.png';
import frame181 from '../../../public/group/Frame 181.png';
import frame184 from '../../../public/group/Frame 184.png';
import frame170 from '../../../public/group/Frame 170.svg';
import frame163 from '../../../public/group/Frame 63.svg';
import heroline from '../../../public/hero/Group 338.png';

const ExportBody = () => {
  return (
    <>
      <div className='w-screen overflow-hidden'>
        <div className=' mt-12 md:mt-16'>
          <Image src={frameG} alt='Hero Image 2' layout='responsive' width={500} height={500} />
        </div>
        <div className=''>
          <Image src={frame181} alt='Hero Image 2' layout='responsive' width={500} height={500} />
        </div>
        <div className=''>
          <Image src={frame184} alt='Hero Image 2' layout='responsive' width={500} height={500} />
        </div>
        <div className=''>
          <Image src={frame170} alt='Hero Image 2' layout='responsive' width={500} height={500} />
        </div>
        <div className=''>
          <Image src={frame163} alt='Hero Image 2' layout='responsive' width={500} height={500} />
        </div>
      </div>
      <div className='mx-8 mt-2'>
        <Image src={heroline} alt='Hero Image 2' layout='responsive' width={500} height={500} />
      </div>
    </>
  );
};

export default ExportBody;
