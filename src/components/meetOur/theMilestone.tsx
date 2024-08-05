// components/Milestone.js
import Image from 'next/image';
import milestone from '../../../public/Screen Shot 2024-02-16 at 08.13 1.png';

const Milestone = () => {
  return (
    <div className='w-screen h-full bg-[#F2F1F0] md:pt-16 pt-16'>
      <h1 className='text-4xl md:text-start text-center font-black text-[#003399] ml-4 mb-4 md:ml-16'>The Milestone</h1>
      <div className='flex flex-col md:flex-row justify-start mx-4 md:w-[80%]'>
        <div className='w-full md:w-1/2 md:ml-16 md:mr-4'>
          <p className='text-justify text-xs md:text-sm font-normal text-[#003399]'>
            Perjalanan panjang Export dan Bodypack menjadi cikal bakal berdirinya PT Dua Puluh Tiga sebagai company holding kedua brand tersebut. Dan jika bercerita mengenai PT Dua Puluh Tiga, maka tak lepas dari sejarah panjang Kedua brand
            tersebut, setelah mengalami pasang surut, hingga kini terus memantapkan diri di industri fashion Indonesia. Export berdiri pada tahun 1979 sebagai brand tas yang diperuntukkan bagi remaja, mengalami pasang surut dalam dunia
            industri, mengalami beberapa kali perubahan konsep dan logo, kini Export hadir untuk menemani audience-nya untuk
          </p>
        </div>
        <div className='w-full md:w-1/2 md:mr-16 md:ml-4 mt-4 md:mt-0'>
          <p className='text-justify text-xs md:text-sm font-normal text-[#003399]'>
            mengexplorasi dan menjadikan dunia lebih berwarna. Diperkenalkan pada tahun 1996, Bodypack hair sebagai pelopor desain, produksi, serta distribusi digital case di Indonesia. Dan lebih dari 2 dekade Bodypack hadir mendukung
            aktivitas kaum urban, menjadi partner bagi berbagai komunitas. Seiring berjalannya waktu, Bodypack mengalami perubahan baik dari segi produk hingga filosofi brand. Seperti yang kita ketahui sekarang, Bodypack memantapkan tujuan
            untuk mendorong orang-orang untuk membuat perbedaan dalam hidup mereka, sebuah filosofi yang dipegang teguh hingga kini. Sejarah panjang Export dan Bodypack kemudian melahirkan PT Dua Puluh Tiga, menjaga spirit dari kedua brand
            tersebut, mewujudkan visi jangka panjang dan terus menerbakan kebaikan.
          </p>
        </div>
      </div>
      <div className='w-screen h-full md:ml-4 mt-8'>
        <Image src={milestone} alt='Hero Image 2' className='w-full md:w-auto h-20 md:h-[169px]' />
      </div>
    </div>
  );
};

export default Milestone;
