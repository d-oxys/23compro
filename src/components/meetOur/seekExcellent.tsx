// components/VisiComponent.js
import Image from 'next/image';
import hero from '../../../public/group/Screen Shot 2024-02-26 at 06.25 1.png';

const SeekExcellence = () => {
  return (
    <div className='w-screen h-full bg-[#F2F1F0] pt-8'>
      <div className='flex justify-evenly items-center'>
        <div className='w-[60%] justify-start flex'>
          <Image src={hero} alt='Hero Image 2' width={625} height={650} />
        </div>
        <div className='w-[40%] md:mx-16 mx-4'>
          <h2 className='text-4xl font-semibold text-[#003399] mt-8'>
            Seek <span className='block'>Excellence</span>
          </h2>
          <p className='font-normal text-justify text-sm text-[#003399] mt-8'>
            Merupakan sebuah aspirasi untuk membawa dampak positif bagi internal dan eksternal. Komitmen penuh dari kami untuk bekerja secara profesional dengan memberikan upaya terbaik baik secara individu ataupun tim guna mendukung
            aktivitas konsumen dan menjadikan kerjasama tim dan gotong royong sebagai landasan dalam bekerja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeekExcellence;
