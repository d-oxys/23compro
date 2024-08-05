// components/VisiComponent.js
import Image from 'next/image';
import hero from '../../../public/group/Screen Shot 2024-02-26 at 06.30 1.png';

const ShareGoodness = () => {
  return (
    <div className='w-screen h-full bg-[#F2F1F0] py-8'>
      <div className='flex justify-between items-center'>
        <div className='w-[40%] md:mx-16 mx-4'>
          <h2 className='text-4xl font-semibold text-[#003399] mt-8'>
            Share <span className='block'>Goodness</span>
          </h2>
          <p className='font-normal text-sm text-[#003399] mt-8 text-justify'>
            Menjadi pengingat bagi kami untuk terus saling berbagi hal-hal baik dan positif baik di dalam internal kami PT. Dua Puluh Tiga maupun kepada sesama baik kami sebagai karyawan PT. Dua Puluh Tiga maupun sebagai individu di dalam
            masyarakat pada umumnya. Siapapun kami sebagai individu, pada posisi apapun kami sebagai karvawan dan di masyarakat kami vakin menebar hal-hal baik dan positif akan membawa kebahagiaan di dalam keberagaman.
          </p>
        </div>
        <div className='w-[60%] justify-start flex'>
          <Image src={hero} alt='Hero Image 2' width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default ShareGoodness;
