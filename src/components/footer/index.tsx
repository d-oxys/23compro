'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Dialog from './dialog';
import { RiInstagramLine, RiLinkedinBoxLine, RiMailAddLine, RiMapPinLine } from 'react-icons/ri';
import { ErrorMessage, SuccessMessage } from './message';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const [close, setClose] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [statusMessage, setStatusMessage] = useState('');

  const handleClose = () => {
    setClose(!close);
    setStatusMessage('');
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmitEmail = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatusMessage('Masukkan alamat email yang valid');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          subject,
          message,
        }),
      });

      if (res.ok) {
        setEmail('');
        setName('');
        setSubject('');
        setMessage('');
      }

      const data = await res.json();

      console.log(data);
      console.log(data.message);

      if (data.message === 'Success Send Message Email') {
        setStatusMessage('Pesan berhasil dikirim');
      }

      if (data.errors.includes('email is required')) {
        setStatusMessage('Masukin alamat email');
      } else if (data.errors.includes('name is required')) {
        setStatusMessage('Masukin nama anda');
      } else if (data.errors.includes('subject is required')) {
        setStatusMessage('Masukin subject');
      } else if (data.errors.includes('message is required')) {
        setStatusMessage('Masukin pesan anda');
      }
    } catch (error) {
      console.log(error);
      setMessage('Pesan gagal dikirim');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='w-screen'>
      <Dialog
        title='Hubungi Kami'
        subtitle='Beri kami tanggapan Anda dan bantu kami meningkatkan layanan kami'
        submitText='Kirim'
        cancelText='Batal'
        onCancel={handleClose}
        onClose={handleClose}
        isLoading={isLoading}
        onSubmit={handleSubmitEmail}
        icon={<RiMailAddLine />}
        className={`${close ? 'hidden' : ''}`}
      >
        <form className='mb-2 mt-6'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='flex flex-col gap-3'>
              <div className='flex w-full flex-col items-start gap-1'>
                <label className='font-medium'>Email</label>
                <input type='email' className='focus:border-primary outline-primary w-full rounded-lg border border-gray-300 bg-gray-50 p-2' required onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className='flex w-full flex-col items-start gap-1'>
                <label className='font-medium'>Nama</label>
                <input type='text' className='focus:border-primary outline-primary w-full rounded-lg border  border-gray-300 bg-gray-50 p-2' required onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className='flex w-full flex-col items-start gap-1'>
                <label className='font-medium'>Subjek</label>
                <input type='email' className='focus:border-primary outline-primary w-full rounded-lg border  border-gray-300 bg-gray-50 p-2' required onChange={(e) => setSubject(e.target.value)} value={subject} />
              </div>
            </div>
            <div className='flex w-full flex-col items-start gap-1'>
              <label className='font-medium'>Pesan</label>
              <textarea
                name='message'
                className='focus:border-primary outline-primary max-row h-full w-full  resize-none rounded-lg border border-gray-300 bg-gray-50 p-2'
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
          </div>
        </form>

        <div className='mt-6'>{statusMessage ? statusMessage === 'Pesan berhasil dikirim' ? <SuccessMessage title={statusMessage} /> : <ErrorMessage title={statusMessage} /> : ''}</div>
      </Dialog>
      <footer className='bg-[#003399] text-white mt-1'>
        <div className='mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 py-6 md:flex-row'>
          <div>
            <h1 className='text-2xl md:text-3xl text-[#FFC700] font-semibold'>PT DUA PULUH TIGA</h1>
            <div className='flex items-center'>
              <RiMapPinLine className='text-[#FFC700] mr-2 w-[30px] h-[38px]' />
              <div className='mt-6 max-w-md flex items-center'>
                <p className='text-xs md:text-base'>Jl. Kopo Bihbul Raya No.68, Sayati, Kec. Margahayu, Kabupaten Bandung, Jawa Barat, Indonesia 40228</p>
              </div>
            </div>
          </div>
          <div className=''>
            <h1 className='text-xl text-[#FFC700] font-semibold'>Get in Touch with us</h1>
            <div className='flex mt-6'>
              <input type='text' className='text-black border border-gray-300 py-1 px-8 md:px-16 rounded-full mr-2 focus:outline-none focus:border-transparent' />
              <button className='bg-transparent border-2 border-[#FFC700] text-[#FFC700] py-1 px-4 md:px-8 rounded-full  hover:text-white hover:border-white'>Send</button>
            </div>
            <div className='flex mt-4 space-x-2'>
              <RiInstagramLine className='text-white w-5 h-5' />
              <FaTiktok className='text-white w-5 h-5' />
              <RiLinkedinBoxLine className='text-white w-5 h-5' />
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl text-center'>
          <div className='h-[1px] w-full bg-white'></div>
          <p className='mt-6 pb-5 text-xs md:text-base'>© 2024 PT Dua Puluh Tiga. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
