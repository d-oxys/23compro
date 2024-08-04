// components/VisiComponent.js
import Image from 'next/image';
import hero from '../../../public/group/Screenshot 2024-08-02 151335.png';

const WorkSpace = () => {
  return (
    <div className='w-screen h-full py-8'>
      <div className='flex justify-center items-center mt-8 md:mt-16'>
        <div className='w-[40%] justify-start flex'>
          <Image src={hero} alt='Hero Image 2' width={500} height={500} />
        </div>
        <div className='w-[40%] md:mx-16 mx-4'>
          <h2 className='text-4xl font-semibold text-[#003399] mt-8'>Our Office</h2>
          <h2 className='text-base text-[#003399]'>homy work space</h2>
          <p className='font-normal text-sm text-[#003399] mt-8 text-justify'>
            Sebagai perusahaan yang fokus di bidang lifestyle, dibutuhkan rung kerja yang bisa menstimulus ide cemerlang. Karena kreativitas sangat dibutuhkan, dan hal itulah yang kemudian meniadi ide desain kantor di PT Dua Puluh Tiga.
            Membuat kantor menjadi lebih santai dan tentu saja nyaman. Karena kami percaya, bahwa kenyamanan karyawan menjadi sangat penting agar mereka bisa produktif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
