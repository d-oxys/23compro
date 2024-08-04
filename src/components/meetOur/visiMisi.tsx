// components/VisiComponent.js
import Image from 'next/image';
import grup78 from '../../../public/group/Group-78.png';
import grup79 from '../../../public/group/Group-79.png';
import bluebar from '../../../public/huruf/blue.svg';
import yellowbar from '../../../public/huruf/yellow.svg';

const VisiMisi = () => {
  return (
    <div className='w-screen h-full bg-white md:pt-16 pt-8 mt-8'>
      <div className='flex justify-center'>
        <div className='w-[40%]'>
          <h1 className='text-4xl font-black text-[#003399] mb-8 md:mb-16 md:ml-16 mx-4 '>
            Vision <span className='block'> and Mision</span>
          </h1>
          <div>
            <div className='justify-start flex flex-col space-y-1 my-8'>
              <Image src={bluebar} alt='Hero Image 2' width={26} height={195} />
              <Image src={yellowbar} alt='Hero Image 2' width={26} height={195} />
            </div>
          </div>
        </div>
        <div className='w-[60%] mx-4 md:mr-16 ml-4'>
          <div className='flex justify-between items-end text-[#003399]'>
            <div className='w-[40%]'>
              <p>our vision</p>
              <h1 className='text-2xl font-semibold mb-2'>To be blessing Company in Lifestyles Business</h1>
              <p className='text-justify'>Menjadi perusahaan yang memberkati di dalam bisnis gaya hidup</p>
            </div>
            <div className='w-[60%] justify-end flex mr-3'>
              <Image src={grup78} alt='Hero Image 2' width={385} height={385} />
            </div>
          </div>

          <div className='flex justify-between items-end text-[#003399] my-4'>
            <div className='w-[40%]'>
              <p>our mision</p>
              <h1 className='text-2xl font-semibold mb-2'>With the Spirit of Sustainability we provide experential customer satisfaction in lifestyle business</h1>
              <p className='text-justify'>Dengan semangat terhadap keberlanjutan. Kami menyajikan kepuasan penuh pengalaman bagi pelanggan dalam bisnis gaya hidup.</p>
            </div>
            <div className='w-[60%] justify-end flex'>
              <Image src={grup79} alt='Hero Image 2' width={385} height={385} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
