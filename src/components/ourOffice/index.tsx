import React from 'react';
import Image from 'next/image';
import g17 from '../../../public/hero/Component 17.png';
import g18 from '../../../public/hero/Component 18.png';

export const BodyPack = () => {
  return (
    <div className='relative w-screen h-[2600px] bg-white'>
      <div className='absolute w-screen h-[2600px] -top-6 left-0 bg-[#f2f1f0]'>
        <img className='absolute w-[676px] h-[742px] top-[1714px] left-[600px] object-cover' alt='Screen shot' src='/group/Screen Shot 2024-02-26 at 06.49 1.png' />
        <div className='absolute w-[1230px] h-[1492px] top-[84px] left-[73px]'>
          <img className='absolute w-[500px] h-[500px] top-0 right-[35px] object-cover' alt='Screen shot' src='/group/Screenshot 2024-08-02 151729.png' />
          <img className='absolute w-[500px] h-[500px] top-[745px] left-0 object-cover' alt='Screen shot' src='/group/Screenshot 2024-08-02 151335.png' />
          <div className='top-[998px] left-[676px] absolute w-[498px] h-[297px] bg-[#f2f1f0]' />
          <div className='top-[249px] left-5 absolute w-[498px] h-[297px] bg-[#f2f1f0]' />
          <div className="top-[997px] left-[976px] absolute [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#003399] text-[39px] tracking-[0] leading-[normal]">Our Office</div>
          <div className="top-[210px] left-[35px] absolute [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#003399] text-[39px] tracking-[0] leading-[normal]">Our Office</div>
          <div className="absolute top-[1040px] left-[979px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#003399] text-[22px] tracking-[0] leading-[normal]">homy work space</div>
          <div className="absolute top-[253px] left-[38px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#003399] text-[22px] tracking-[0] leading-[normal]">relaxing room</div>
          <p className="absolute w-[396px] top-[1115px] left-[799px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#003399] text-xs tracking-[0] leading-[normal]">
            Sebagai perusahaan yang fokus di bidang lifestyle, dibutuhkan
            <br />
            rung kerja yang bisa menstimulus ide cemerlang. Karena
            <br />
            kreativitas sangat dibutuhkan, dan hal itulah yang kemudian
            <br />
            meniadi ide desain kantor di PT Dua Puluh Tiga.
            <br />
            Membuat kantor menjadi lebih santai dan tentu saja nyaman.
            <br />
            Karena kami percaya, bahwa kenyamanan karyawan menjadi
            <br />
            sangat penting agar mereka bisa produktif.
          </p>
          <p className="absolute top-[312px] left-[38px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#003399] text-xs tracking-[0] leading-[normal]">
            Salah satu tempat favorit disini, yaitu Relaxing Room. Tidak hanya
            <br />
            menuntut tim di PT Dua Puluh Tiga untuk selalu produktif, kami
            <br />
            juga menyiapkan ruangan yang bisa dipakai untuk melepas
            <br />
            kepenatan dan me-recharge mood dan ide.
            <br />
            Ada banyak hal yang bisa dilakukan di ruangan ini. Mulai main
            <br />
            game, nonton film, baca buku atau sekedar buat tiduran. Dan tidak
            <br />
            perlu khawatir, karena setiap tim bisa nikmatin minuman dan
            <br />
            makanan ringan vang ada disini.
          </p>
        </div>
        <div className="absolute top-[1930px] left-[187px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#003399] text-[39px] tracking-[0] leading-[normal]">Our Activity</div>
        <p className="absolute w-[396px] top-[2013px] left-[187px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#003399] text-xs tracking-[0] leading-[normal]">
          Work Life Balance!Dengan tercapainya work-life balance, tim
          <br />
          dapat lebih produktif dalam mengeksplorasi ide menjadi
          <br />
          sebuah karya. Menjadi penting untuk menyelaraskan antara
          <br />
          pekerjaan dan hobi. Hal itu bisa membuat tim lebih bahagia
          <br />
          dalam menjalani pekerjaan
          <br />
          PT Dua Puluh Tiga memfasilitasi dan mempermudah karyawan
          <br />
          yang memiliki hobby ataupun kebutuhan di bidang olah raga
          <br />
          maupun seni dengan fasilitas-fasilitas berbagai cabang olah
          <br />
          raga dan bermusik di lingkungan kantor yang sangat mudah
          <br />
          diakses. Di dalam tubuh yang sehat, terdapat jiwa yang sehat,
          <br />
          dan kami yakin karyawan perl stress release dari semua
          <br />
          rutinitasnya. Hal ini dilakukan karena bagi kami karyawan
          <br />
          adalah aset sekaligus karyawan yang harus selalu dijaga.
        </p>
      </div>
      {/* <div className='flex'>
        <div className='w-1/2'>
          <Image src={g17} alt='Hero Image 1' layout='responsive' width={500} height={500} />
        </div>
        <div className='w-1/2'>
          <Image src={g18} alt='Hero Image 2' layout='responsive' width={500} height={500} />
        </div>
      </div> */}
    </div>
  );
};
export default BodyPack;
