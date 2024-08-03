'use client';
import Image from 'next/image';
import { useState } from 'react';
import bannerTop from '../../../public/hero/image 1.png';
import brand from '../../../public/hero/Frame 1261158642.svg';
import brandPeople from '../../../public/hero/image 4.png';
import image5 from '../../../public/hero/image 5.svg';
import pack7 from '../../../public/pack/image 7.svg';
import pack10 from '../../../public/pack/image 10.svg';
import pack11 from '../../../public/pack/image 11.svg';

const BodyPack = () => {
  return (
    <>
      <div className=''>
        <Image src={bannerTop} alt='Hero Image 2' layout='responsive' width={500} height={500} />
      </div>
      <div className='flex mx-10 px-2'>
        <div className='w-1/2 px-2'>
          <p className='text-[45px] font-bold'>It all started with a 3x2m2 shop, two sewing machines, and courage.</p>
        </div>
        <div className='w-1/2 px-2'>
          <p className='text-justify text-xl'>
            The legacy of Bodypack began in 1953, long before its conception. Coming all the way from Jakarta, Lukman Lukito and his wife opened up a bag shop business inside a 3 m2 shop at Jalan ABC no. 3, Bandung. The shop eventually is
            handed to his son, Ronny Lukito. Fueled with curiosity and courage, he set out on a journey to find the secret behind quality design.
          </p>
        </div>
      </div>
      <div className='lg:my-20 my-8 lg:mx-14 mx-4'>
        <Image src={brand} alt='Hero Image 2' layout='responsive' width={500} height={500} />
      </div>
      <div className='flex mx-10 px-2'>
        <div className='w-1/2 px-2'>
          <p className='text-justify text-xl'>
            Our journey officially started in 1996, when we crafted solutions in the form of bags for the community around us. Throughout the years, we’ve grown to adapt to the changing lifestyle. From adopting the street design for the
            streetwear scene, serving minimalist silhouettes for the urban professional, going for a more dynamic with utility and stylish looks, and experimenting with techwear.
          </p>
        </div>
        <div className='w-1/2 px-2'>
          <p className='text-justify text-xl'>
            We continuously redefine ourselves through the years. We did it because we wanted to learn how to serve the market better. Through all the transformation, we realize it is easy to get lost and question ourselves, "Who are we,
            really?"
          </p>
        </div>
      </div>
      <div className='lg:my-20 my-8 lg:mx-14 mx-4'>
        <Image src={brandPeople} alt='Hero Image 2' layout='responsive' width={500} height={500} />
      </div>
      <div className='lg:my-28 my-8 lg:mx-10 mx-4'>
        <p className='text-center text-[50px] leading-none font-semibold'>
          We evaluate the current and the past, then{' '}
          <span className='block'>
            start work on it in different ways. All for{' '}
            <span className='block'>
              gaining optimum usefulness, and a better <span className='block'>impact for all.</span>
            </span>{' '}
          </span>
        </p>
      </div>
      <div className='lg:my-20 my-8'>
        <Image src={image5} alt='Hero Image 2' layout='responsive' width={500} height={500} />
      </div>
      <div className='lg:my-20 my-8 lg:mx-14 mx-4'>
        <p className='text-center text-[50px] leading-none font-semibold'>
          In the process of refining ourselves, we{' '}
          <span className='block'>
            discover that our core is to enable people <span className='block'>to make a difference in their lives.</span>{' '}
          </span>
        </p>
        <p className='text-center text-sm mt-16'>
          We aspire to inspire ourselves and others around us to keep moving in their own way, to find their own idea of{' '}
          <span className='block'>
            making a difference{' '}
            <span className='block'>
              We believe that every difference matters; from the life-changing improvement to the little joy sparked by daily <span className='block'>creativity.</span>
            </span>
          </span>
        </p>
      </div>
      <div className='flex mx-10 px-2 space-x-16 mb-24'>
        <div className='w-1/2 px-2 flex items-center'>
          <Image src={pack7} alt='Hero Image 1' layout='responsive' width={500} height={500} className='transition duration-500 ease-in-out' />
        </div>
        <div className='w-1/2 px-2 flex items-center'>
          <div>
            <h1 className='text-6xl leading-none font-semibold mb-2'>Improving the Essentials</h1>
            <p className='text-lg mt-4 text-justify'>
              Visions inspire people, but we are defined by our actions.{' '}
              <span className='block mt-3 '>
                To improve the essentials is to continuously learn about the progressing society. Urban life is known for rapid changes, and we must stay relevant by balancing style, utility, and trend. We refine the essential gears to
                support people in moving forward.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex mx-10 px-2 space-x-16 mb-24'>
        <div className='w-1/2 px-2 flex items-center'>
          <Image src={pack10} alt='Hero Image 1' layout='responsive' width={500} height={500} className='transition duration-500 ease-in-out' />
        </div>
        <div className='w-1/2 px-2 flex items-center'>
          <div>
            <h1 className='text-6xl leading-none font-semibold mb-2'>Aesthetics Meets Function</h1>
            <p className='text-lg mt-4 text-justify'>
              Bodypack is about timelessness, versatility, daily aesthetics, and practicality.{' '}
              <span className='block mt-3 '>With two times good design awards, our designers merge aesthetic, innovation, and function. We seeks to discover new stories and silhouettes to build distinctive yet timeless products.</span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex mx-10 px-2 space-x-16 mb-24'>
        <div className='w-1/2 px-2 flex items-center'>
          <Image src={pack11} alt='Hero Image 1' layout='responsive' width={500} height={500} className='transition duration-500 ease-in-out' />
        </div>
        <div className='w-1/2 px-2 flex items-center'>
          <div>
            <h1 className='text-6xl leading-none font-semibold mb-2'>More Than a Bag Company</h1>
            <p className='text-lg mt-4 text-justify'>
              Today, our expansion goes beyond being simply the leading manufacturer of bags in the country. Our collection is now completed with lineups of apparel that provide both utility and style.{' '}
              <span className='block mt-3 '>Bodypack is now a part of both work and pleasure; still providing high utility, top quality products, but also emotionally engaging and fashionable.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyPack;
