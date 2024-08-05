// components/SeekExcellence.js
import Image from 'next/image';
import hero from '../../../public/group/Screen Shot 2024-02-26 at 06.25 1.png';

const SeekExcellence = () => {
  return (
    <div className='w-screen h-full bg-[#F2F1F0] pt-8'>
      <div className='flex flex-col-reverse md:flex-row justify-evenly items-center'>
        <div className='w-full md:w-[60%] justify-start flex'>
          <Image src={hero} alt='Hero Image 2' className='w-[300px] h-[300px] md:w-[625px] md:h-[650px]' />
        </div>
        <div className='w-full md:w-[40%] md:mx-16 mx-4 mt-4 md:mt-0'>
          <div className='mx-4 md:mx-0'>
            <h2 className='text-3xl md:text-4xl font-semibold text-[#003399]'>
              Seek <span className='md:block inline text-center md:text-start'>Excellence</span>
            </h2>
            <p className='font-normal text-justify text-xs md:text-base text-[#003399] mt-4 md:mt-8'>
              Merupakan sebuah aspirasi untuk membawa dampak positif bagi internal dan eksternal. Komitmen penuh dari kami untuk bekerja secara profesional dengan memberikan upaya terbaik baik secara individu ataupun tim guna mendukung
              aktivitas konsumen dan menjadikan kerjasama tim dan gotong royong sebagai landasan dalam bekerja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeekExcellence;
