// components/RelaxingRoom.js
import Image from 'next/image';
import hero from '../../../public/group/Screenshot 2024-08-02 151729.png';

const RelaxingRoom = () => {
  return (
    <div className='w-screen h-full py-8'>
      <div className='flex flex-col md:flex-row justify-evenly items-center mt-8 md:mt-16'>
        <div className='w-full md:w-[40%] md:mx-16 mx-4'>
          <div className='mx-4 md:mx-0'>
            <h2 className='text-3xl md:text-4xl font-semibold text-[#003399] mt-8'>Our Office</h2>
            <h2 className='text-base text-[#003399]'>Relaxing Room</h2>
            <p className='font-normal text-sm text-[#003399] mt-8 text-justify'>
              Salah satu tempat favorit disini, yaitu Relaxing Room. Tidak hanya menuntut tim di PT Dua Puluh Tiga untuk selalu produktif, kami juga menyiapkan ruangan yang bisa dipakai untuk melepas kepenatan dan me-recharge mood dan ide.
              Ada banyak hal yang bisa dilakukan di ruangan ini. Mulai main game, nonton film, baca buku atau sekedar buat tiduran. Dan tidak perlu khawatir, karena setiap tim bisa nikmatin minuman dan makanan ringan yang ada disini.
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

export default RelaxingRoom;
