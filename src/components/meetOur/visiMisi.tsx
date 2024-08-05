// components/VisiMisi.js
import Image from 'next/image';
import grup78 from '../../../public/group/Group-78.png';
import grup79 from '../../../public/group/Group-79.png';
import bluebar from '../../../public/huruf/blue.svg';
import yellowbar from '../../../public/huruf/yellow.svg';

const VisiMisi = () => {
  return (
    <div className='w-screen h-full md:pt-16 pt-8 mt-8 overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='w-full md:w-[40%]'>
          <h1 className='text-3xl md:text-4xl font-black text-[#003399] mb-8 md:mb-16 md:ml-16 mx-4 text-center md:text-start'>
            Vision <span className='md:block inline'> and Mision</span>
          </h1>
          <div className='hidden md:flex justify-start flex-col space-y-1 my-8'>
            <Image src={bluebar} alt='Hero Image 2' width={26} height={195} />
            <Image src={yellowbar} alt='Hero Image 2' width={26} height={195} />
          </div>
        </div>
        <div className='w-full md:w-[60%] mx-4 md:mr-16 '>
          <div className='flex md:flex-row justify-between items-center md:items-end text-[#003399]'>
            <div className='w-[50%] md:w-[40%] '>
              <p>our vision</p>
              <h1 className='text-base md:text-2xl font-semibold mb-2'>To be blessing Company in Lifestyles Business</h1>
              <p className='text-justify text-xs md:text-base'>Menjadi perusahaan yang memberkati di dalam bisnis gaya hidup</p>
            </div>
            <div className='w-[50%] md:w-[60%] md:justify-end flex ml-4 md:ml-0 md:mr-3 mt-4 md:mt-0'>
              <Image src={grup78} alt='Hero Image 2' width={200} height={200} className='md:w-[385px] md:h-[385px]' />
            </div>
          </div>

          <div className='flex md:flex-row justify-between items-center md:items-end text-[#003399] my-4'>
            <div className='w-[50%] md:w-[40%]'>
              <p>our mision</p>
              <h1 className='text-base md:text-2xl font-semibold mb-2'>With the Spirit of Sustainability we provide experential customer satisfaction in lifestyle business</h1>
              <p className='text-justify text-xs md:text-base'>Dengan semangat terhadap keberlanjutan. Kami menyajikan kepuasan penuh pengalaman bagi pelanggan dalam bisnis gaya hidup.</p>
            </div>
            <div className='w-[50%] md:w-[60%] md:justify-end flex ml-4 md:ml-0 mt-4 md:mt-0'>
              <Image src={grup79} alt='Hero Image 2' width={200} height={200} className='md:w-[385px] md:h-[385px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
