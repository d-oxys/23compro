// components/ShareGoodness.js
import Image from 'next/image';
import hero from '../../../public/group/Screen Shot 2024-02-26 at 06.30 1.png';

const ShareGoodness = () => {
  return (
    <div className='w-screen h-full bg-[#F2F1F0] py-8'>
      <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <div className='w-full md:w-[40%] md:mx-16 mx-4'>
          <div className='mx-4'>
            <h2 className='text-3xl md:text-4xl text-start font-semibold text-[#003399] mt-8'>
              Share <span className='md:block inline'>Goodness</span>
            </h2>
            <p className='font-normal text-sm text-[#003399] mt-8 text-justify'>
              Menjadi pengingat bagi kami untuk terus saling berbagi hal-hal baik dan positif baik di dalam internal kami PT. Dua Puluh Tiga maupun kepada sesama baik kami sebagai karyawan PT. Dua Puluh Tiga maupun sebagai individu di dalam
              masyarakat pada umumnya. Siapapun kami sebagai individu, pada posisi apapun kami sebagai karvawan dan di masyarakat kami vakin menebar hal-hal baik dan positif akan membawa kebahagiaan di dalam keberagaman.
            </p>
          </div>
        </div>
        <div className='w-full md:w-[60%] justify-center md:justify-end flex mt-4 md:mt-0'>
          <Image src={hero} alt='Hero Image 2' className='w-[300px] h-[300px] md:w-[600px] md:h-[600px]' />
        </div>
      </div>
    </div>
  );
};

export default ShareGoodness;
