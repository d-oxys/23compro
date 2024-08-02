import Image from 'next/image';
import g17 from '../../../public/hero/Component 17.png';
import g18 from '../../../public/hero/Component 18.png';
import frameG from '../../../public/group/Frame 6.png';
import frame181 from '../../../public/group/Frame 181.png';
import frame184 from '../../../public/group/Frame 184.png';

const ExportBody = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-1/2'>
          <Image src={g17} alt='Hero Image 1' layout='responsive' width={500} height={500} />
        </div>
        <div className='w-1/2'>
          <Image src={g18} alt='Hero Image 2' layout='responsive' width={500} height={500} />
        </div>
      </div>
      <div className='w-screen'>
        <Image src={frameG} alt='Hero Image 2' layout='responsive' width={500} height={500} />
      </div>
      <div className='w-screen'>
        <Image src={frame181} alt='Hero Image 2' layout='responsive' width={500} height={500} />
      </div>
      <div className='w-screen'>
        <Image src={frame184} alt='Hero Image 2' layout='responsive' width={500} height={500} />
      </div>
    </>
  );
};

export default ExportBody;
