// components/WorkSpace.js
import Image from 'next/image';
import hero from '../../../public/group/Screenshot 2024-08-02 151335.png';

const WorkSpace = () => {
  return (
    <div className='w-screen h-full py-8'>
      <div className='flex flex-col md:flex-row justify-evenly items-center mt-8 md:mt-16'>
        <div className='w-full md:w-[40%] md:mx-16 mx-4'>
          <div className='mx-4 md:mx-0'>
            <h2 className='text-3xl md:text-4xl font-semibold text-[#003399] mt-8'>Our Office</h2>
            <h2 className='text-base text-[#003399]'>homy work space</h2>
            <p className='font-normal text-sm text-[#003399] mt-8 text-justify'>
              Sebagai perusahaan yang fokus di bidang lifestyle, dibutuhkan rung kerja yang bisa menstimulus ide cemerlang. Karena kreativitas sangat dibutuhkan, dan hal itulah yang kemudian meniadi ide desain kantor di PT Dua Puluh Tiga.
              Membuat kantor menjadi lebih santai dan tentu saja nyaman. Karena kami percaya, bahwa kenyamanan karyawan menjadi sangat penting agar mereka bisa produktif.
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

export default WorkSpace;
