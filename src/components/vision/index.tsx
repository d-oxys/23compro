// components/VisiComponent.js
import Image from 'next/image';
import visi from '../../../public/visi.png';
import misi from '../../../public/misi.png';

const VisiComponent = () => {
  return (
    <div className='mt-12'>
      <div className='flex justify-between items-center p-4 bg-white w-full'>
        <div className='text-[#003399] font-bold text-[39px] ml-20'>
          Vision <span className='block'>and Mission</span>
        </div>
        <div className='flex items-center justify-center space-x-4'>
          <Image className='mt-6' src={visi} alt='Visi' width={387} height={386} />
          <Image src={misi} alt='Misi' width={387} height={386} />
        </div>
      </div>
    </div>
  );
};

export default VisiComponent;
