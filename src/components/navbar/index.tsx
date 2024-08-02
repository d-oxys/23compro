// components/TopBar.js
import Image from 'next/image';
import logo from '../../../public/logo.png';

const TopBar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white w-full'>
      <div className='flex items-center ml-16'>
        <Image src={logo} alt='Logo' width={102} height={46} />
      </div>
      <div className='text-blue-900 font-bold mr-16'>Home</div>
    </div>
  );
};

export default TopBar;
