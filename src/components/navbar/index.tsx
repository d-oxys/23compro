// components/TopBar.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../../public/logo.png';
import { useState, useEffect, useRef } from 'react';

const TopBar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className='flex justify-between z-50 fixed items-center p-4 bg-white w-full shadow-md'>
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
        <div className='relative' ref={dropdownRef}>
          <div onClick={toggleDropdown} className={pathname === '/brand' ? 'text-blue-900 cursor-pointer' : 'text-black cursor-pointer'}>
            Brand
          </div>
          {isDropdownOpen && (
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-24 md:w-28 bg-white border border-gray-200 shadow-lg rounded-md'>
              <Link href='/brand/#export'>
                <div className='px-4 py-2 hover:bg-gray-100 md:text-base text-sm rounded-t-md' onClick={handleMenuClick}>
                  Export
                </div>
              </Link>
              <Link href='/brand/#bodypack'>
                <div className='px-4 py-2 hover:bg-gray-100 md:text-base text-sm rounded-b-md' onClick={handleMenuClick}>
                  Bodypack
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
