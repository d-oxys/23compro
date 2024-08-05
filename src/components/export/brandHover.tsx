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
  const [imageSrc1, setImageSrc1] = useState(g17);
  const [imageSrc2, setImageSrc2] = useState(g18);
  return (
    <>
      <div className='w-screen'>
        <div className='md:flex block'>
          <div className='md:h-full md:w-1/2' onMouseEnter={() => setImageSrc1(hoverg17)} onMouseLeave={() => setImageSrc1(g17)}>
            <Image src={imageSrc1} alt='Hero Image 1' layout='responsive' width={500} height={500} className='transition duration-500 ease-in-out' />
          </div>
          <div className='md:h-full md:w-1/2' onMouseEnter={() => setImageSrc2(hoverg18)} onMouseLeave={() => setImageSrc2(g18)}>
            <Image src={imageSrc2} alt='Hero Image 2' layout='responsive' width={500} height={500} className='transition duration-500 ease-in-out' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExportBody;
