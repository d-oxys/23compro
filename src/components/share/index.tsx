// components/ShareComponent.js
import Image from 'next/image';
import servanthoodIcon from '../../../public/share/design belakang warna 1.svg';
import harmonyIcon from '../../../public/share/design belakang warna 14.svg';
import agileIcon from '../../../public/share/design belakang warna 18.svg';
import respectIcon from '../../../public/share/design belakang warna 22.svg';
import empowermentIcon from '../../../public/share/design belakang warna 26.svg';
import { useState } from 'react';

const ShareComponent = () => {
  const values = [
    { name: 'Servanthood', icon: servanthoodIcon, description: 'Brief description of servanthood' },
    { name: 'Harmony', icon: harmonyIcon, description: 'Brief description of harmony' },
    { name: 'Agile', icon: agileIcon, description: 'Brief description of agile' },
    { name: 'Respect', icon: respectIcon, description: 'Brief description of respect' },
    { name: 'Empowerment', icon: empowermentIcon, description: 'Brief description of empowerment' },
  ];

  const letters = [
    { letter: 'S', text: 'Servant-based', cardText: 'Melayani sesama dengan sepenuh hati, rendah hati, penguasaan, rela berkorban', logo: servanthoodIcon },
    { letter: 'H', text: 'Harmony', cardText: 'Saling menciptakan dan menjaga keselarasan untuk mencapai tujuan bersama. Saling terbuka membantu saling percaya.', logo: harmonyIcon },
    { letter: 'A', text: 'Agile', cardText: 'Cerdas, adaptasi dan solutif dalam segala situasi dan kondisi berpikir cerdas, selalu belajar, selalu berinovasi', logo: agileIcon },
    { letter: 'R', text: 'Respect', cardText: 'Menghormati dan menggargai sesama dan lingkungan mengutamakan kepentingan bersama', logo: respectIcon },
    { letter: 'E', text: 'Empowerment', cardText: 'Melakukan pemberdayaan untuk menciptakan pemimpin- pemimpin dan menumbun kembangkan', logo: empowermentIcon },
  ];

  return (
    <div className='bg-white w-full h-screen relative'>
      <div className='w-full'>
        <div className='w-screen max-w-full h-[331px] bg-[#003399] rounded-b-[32px]'>{/* Add your content here */}</div>
      </div>
      <div className='absolute w-[977px] h-[498px] bg-white rounded-[28px] shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex justify-center items-center h-full'>
          <div className='flex space-x-4'>
            {letters.map((item, index) => (
              <div key={index} className='p-2 cursor-pointer flex flex-col items-center group'>
                <svg width='74' height='84' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg' className='group-hover:text-[#003399]'>
                  <text x='50%' y='50%' dominantBaseline='middle' textAnchor='middle' fontSize='60' fontWeight='bold' fill='white' stroke='#003399' strokeWidth='1' className='group-hover:fill-[#003399]'>
                    {item.letter}
                  </text>
                </svg>
                <div className='text-center text-lg font-bold text-gray-700 group-hover:text-[#003399]'>{item.text}</div>
                <div
                  className={`mt-2 w-[152px] h-[268px] bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between p-4 ${item.letter === 'H' || item.letter === 'R' ? 'group-hover:bg-blue-500' : 'group-hover:bg-yellow-500'}`}
                >
                  <p className={`text-xs text-gray-500 ${item.letter === 'H' || item.letter === 'R' ? 'group-hover:text-white' : 'group-hover:text-[#003399] '}`}>{item.cardText}</p>
                  <Image src={item.logo} alt={item.cardText} width={102} height={116} className='filter grayscale group-hover:filter-none group-hover:fill-red-500' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareComponent;
