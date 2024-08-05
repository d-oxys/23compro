// components/TopBar.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../../public/logo.png';

const TopBar = () => {
  const pathname = usePathname();

  return (
    <div className='flex justify-between items-center p-4 bg-white w-full'>
      <div className='flex items-center mx-4 md:ml-16 md:w-[102px] md:h-[46px] w-[60px] h-[30px]'>
        <Image src={logo} alt='Logo' width={102} height={46} />
      </div>
      <div className='flex space-x-4 text-blue-900 font-bold mx-4 md:mr-16 text-sm md:text-base'>
        <Link href='/'>
          <div className={pathname === '/' ? 'text-blue-900' : 'text-black'}>Home</div>
        </Link>
        <Link href='/about'>
          <div className={pathname === '/about' ? 'text-blue-900' : 'text-black'}>About Us</div>
        </Link>
        <Link href='/brand'>
          <div className={pathname === '/brand' ? 'text-blue-900' : 'text-black'}>Brand</div>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
