// components/CompanyHistori.js
import Image from 'next/image';
import babeh from '../../../public/company/babeh.svg';

const CompanyHistori = () => {
  return (
    <div className='w-screen h-full bg-[#D9D9D9]'>
      <div className='flex flex-col md:flex-row justify-evenly items-center '>
        <div className='w-full md:w-[40%] md:mx-16 mx-4 mt-8 md:mt-0 '>
          <div className='mx-4 md:mx-0 '>
            <h1 className='md:text-4xl text-2xl font-black text-[#003399] mt-12 mb-4'>COMPANY HISTORY</h1>
            <p className='text-justify font-normal text-xs md:text-sm text-black'>
              PT Dua Puluh Tiga memiliki sejarah unik pada perjalanannya hingga kini. PT Dua Puluh Tiga menaungi brand Exsport dan Bodypack yang telah lahir jauh sebelum induk perusahaan ini dibuat. Kedua brand tersebut sebelumnya berada di
              bawah naungan PT Eigerindo MPI. Keputusan besar dibuat oleh dewan direksi, dengan melahirkan PT Dua Puluh Tiga pada 14 September 2020 untuk menaungi Exsport dan Bodypack, yang fokus di bidang lifestyle. Meski telah berpisah
              secara korporasi, baik PT Eigerindo MPI dan PT Dua Puluh Tiga tetap berada di bawah naungan B&B inc sebagai holding group perusahaan.
            </p>
          </div>
        </div>
        <div className='w-full md:w-[60%] justify-end flex mt-4 md:mt-0 mx-0'>
          <Image src={babeh} alt='Hero Image 2' width={649} height={720} />
        </div>
      </div>
    </div>
  );
};

export default CompanyHistori;
