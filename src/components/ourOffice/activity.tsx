// components/VisiComponent.js
import Image from 'next/image';
import hero from '../../../public/group/Screen Shot 2024-02-26 at 06.49 1.png';

const OurActivity = () => {
  return (
    <div className='w-screen h-full bg-[#F2F1F0] pt-8 mt-8'>
      <div className='flex justify-evenly items-center'>
        <div className='w-[40%] md:mx-16 mx-4'>
          <h1 className='text-4xl font-semibold text-[#003399] mb-4'>Our Activity</h1>
          <p className='font-normal text-justify text-sm text-[#003399] mt-8'>
            Work Life Balance!Dengan tercapainya work-life balance, tim dapat lebih produktif dalam mengeksplorasi ide menjadi sebuah karya. Menjadi penting untuk menyelaraskan antara pekerjaan{' '}
            <span className='block'>
              dan hobi. Hal itu bisa membuat tim lebih bahagia dalam menjalani pekerjaan PT Dua Puluh Tiga memfasilitasi dan mempermudah karyawan yang memiliki hobby ataupun kebutuhan di bidang olah raga maupun seni dengan
              fasilitas-fasilitas berbagai cabang olah raga dan bermusik di lingkungan kantor yang sangat mudah diakses. Di dalam tubuh yang sehat, terdapat jiwa yang sehat, dan kami yakin karyawan perl stress release dari semua
              rutinitasnya. Hal ini dilakukan karena bagi kami karyawan adalah aset sekaligus karyawan yang harus selalu dijaga.
            </span>
          </p>
        </div>
        <div className='w-[60%] justify-end flex'>
          <Image src={hero} alt='Hero Image 2' width={625} height={625} />
        </div>
      </div>
    </div>
  );
};

export default OurActivity;
