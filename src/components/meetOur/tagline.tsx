// components/CompanyTagline.js
import Image from 'next/image';
import hero from '../../../public/group/Screen Shot 2024-02-16 at 08.21 1.png';

const CompanyTagline = () => {
  return (
    <div className='w-screen h-full bg-[#F2F1F0] pt-8 mt-8'>
      <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <div className='w-full md:w-[40%] md:mx-16 mx-4'>
          <div className='mx-4 md:mx-0 text-justify'>
            <h1 className='md:text-4xl text-3xl font-semibold text-[#003399] mb-0 md:mb-4'>COMPANY TAGLINE</h1>
            <h2 className='md:text-4xl text-xl font-normal md:font-semibold text-[#003399] mt-0 md:mt-8'>
              Bring <span className='md:block inline-block'>Impact</span>
            </h2>
            <p className='mb-2 font-normal text-xs md:text-sm text-[#003399] mt-8'>
              • Menggambarkan komitmen kami dalam mendukung internal dan eksternal customer bukan hanya untuk melangkah, namun juga berani untuk bereskpresi dan menunjukkan jari diri, dan memenuhi kebutuhan serta keinginan mereka (customer
              journey).{' '}
              <span className='mb-2 block'>
                • Digitalisasi sebagai respon serta alternatif dalam menjawab tantangan pasar.{' '}
                <span className='mb-2 block'>• Dengan ini PT. Dua Puluh Tiga mendorong kedua brand untuk Go Global serta menjadi aspirasi bersama untuk tumbuh dan mengharumkan nama bangsa.</span>
              </span>
            </p>
          </div>
        </div>
        <div className='w-full md:w-[60%] justify-end md:justify-end flex mt-4 md:mt-0'>
          <Image src={hero} alt='Hero Image 2' className='w-[300px] h-[300px] md:w-[625px] md:h-[625px]' />
        </div>
      </div>
    </div>
  );
};

export default CompanyTagline;
