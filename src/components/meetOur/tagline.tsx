// components/VisiComponent.js
import Image from 'next/image';
import hero from '../../../public/group/Screen Shot 2024-02-16 at 08.21 1.png';

const CompanyTagline = () => {
  return (
    <div className='w-screen h-full bg-[#F2F1F0] pt-8 mt-8'>
      <div className='flex justify-evenly items-center'>
        <div className='w-[40%] md:mx-16 mx-4'>
          <h1 className='text-4xl font-semibold text-[#003399] mb-4'>COMPANY TAGLINE</h1>
          <h2 className='text-4xl font-semibold text-[#003399] mt-8'>
            Bring <span className='block'>Impact</span>
          </h2>
          <p className='font-normal text-sm text-[#003399] mt-8'>
            • Menggambarkan komitmen kami dalam mendukung internal dan eksternal customer bukan hanya untuk melangkah, namun juga berani untuk bereskpresi dan menunjukkan jari diri, dan memenuhi kebutuhan sera keinginan mereka (customer
            journey).{' '}
            <span className='block'>
              • Digitalisasi sebagai respoin seta alternatif dalam menjawab tantangan pasar.{' '}
              <span className='block'>• Dengan ini PT. Dua Puluh Tiga mendorong kedua brand untuk Go Global serta menjadi aspirasi bersama untuk tumbuh dan meng- harumkan nama bangsa.</span>
            </span>
          </p>
        </div>
        <div className='w-[60%] justify-end flex'>
          <Image src={hero} alt='Hero Image 2' width={625} height={625} />
        </div>
      </div>
    </div>
  );
};

export default CompanyTagline;
