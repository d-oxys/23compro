// components/ShareComponent.js
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import servanthoodIcon from '../../../public/share/design belakang warna 1.svg';
import harmonyIcon from '../../../public/share/design belakang warna 14.svg';
import agileIcon from '../../../public/share/design belakang warna 18.svg';
import respectIcon from '../../../public/share/design belakang warna 22.svg';
import empowermentIcon from '../../../public/share/design belakang warna 26.svg';
import g47 from '../../../public/group/Group 47.svg';
import tendo from '../../../public/tellus/tendo.png';
import iwj from '../../../public/tellus/iwj.png';
import lkt from '../../../public/tellus/lkt.png';
import { useState } from 'react';

const ShareComponent = () => {
  const cardsData = [
    {
      image: tendo.src,
      text: '"Dream big, learn more, pray often and be the difference you wish to see in the world."',
      name: 'Andreant Tendo',
      date: 'Director',
    },
    {
      image: iwj.src,
      text: '"Dream big, learn more, pray often and be the difference you wish to see in the world."',
      name: 'Imanuel Wirajaya',
      date: 'Head of Bodypack',
    },
    {
      image: lkt.src,
      text: '"Always learn, re-learn, and un-learn."',
      name: 'Angel Lukito',
      date: 'Head of Exsport',
    },
  ];

  const letters = [
    { letter: 'S', text: 'Servant-based', cardText: 'Melayani sesama dengan sepenuh hati, rendah hati, penguasaan, rela berkorban', logo: servanthoodIcon },
    { letter: 'H', text: 'Harmony', cardText: 'Saling menciptakan dan menjaga keselarasan untuk mencapai tujuan bersama. Saling terbuka membantu saling percaya.', logo: harmonyIcon },
    { letter: 'A', text: 'Agile', cardText: 'Cerdas, adaptasi dan solutif dalam segala situasi dan kondisi berpikir cerdas, selalu belajar, selalu berinovasi', logo: agileIcon },
    { letter: 'R', text: 'Respect', cardText: 'Menghormati dan menggargai sesama dan lingkungan mengutamakan kepentingan bersama', logo: respectIcon },
    { letter: 'E', text: 'Empowerment', cardText: 'Melakukan pemberdayaan untuk menciptakan pemimpin- pemimpin dan menumbun kembangkan', logo: empowermentIcon },
  ];

  return (
    <>
      <div className='bg-white w-full h-screen relative mt-16'>
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
                    className={`mt-2 w-[152px] h-[268px] bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between p-4 ${
                      item.letter === 'H' || item.letter === 'R' ? 'group-hover:bg-[#003399]' : 'group-hover:bg-yellow-500'
                    }`}
                  >
                    <p className={`text-xs text-gray-800 ${item.letter === 'H' || item.letter === 'R' ? 'group-hover:text-gray-300' : 'group-hover:text-[#003399] '}`}>{item.cardText}</p>
                    <Image src={item.logo} alt={item.cardText} width={102} height={116} className='filter grayscale group-hover:filter-none group-hover:fill-red-500' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Marquee speed={50} gradient={false}>
          <Image src={g47} alt='Hero Image 2' width={2000} height={2000} />
        </Marquee>
      </div>

      <div className='flex flex-wrap w-full mb-28 mt-14'>
        {cardsData.map((card, index) => (
          <div key={index} className='w-full lg:w-1/3 p-2'>
            <div className='max-w-sm w-full lg:max-w-full lg:flex'>
              <div className='h-48 lg:h-56 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l lg:rounded-bl-[8rem] text-center overflow-hidden' style={{ backgroundImage: `url(${card.image})` }} title='tendo'></div>
              <div className='lg:h-56 w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-gray-100 rounded-b lg:rounded-tr-[8rem] lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                <div className='text-sm w-44 px-2'>
                  <div className='mb-8'>
                    <p className='md:h-32 mr-2 text-[#003399] font-semibold'>{card.text}</p>
                  </div>
                  <div className='flex items-center'>
                    <div className='text-sm'>
                      <p className='leading-none text-[#003399] font-semibold'>{card.name}</p>
                      <p className='text-gray-600'>{card.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShareComponent;
