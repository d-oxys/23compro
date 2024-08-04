// components/VisiComponent.js
import Image from 'next/image';
import RelaxingRoom from './relaxingRoom';
import WorkSpace from './workSpace';
import OurActivity from './activity';

const OurOffice = () => {
  return (
    <div className='w-screen h-full pb-16 bg-[#F2F1F0]'>
      <RelaxingRoom />
      <WorkSpace />
      <OurActivity />
      <h1 className='text-center text-4xl text-[#003399] mt-24 font-bold'>OUR BRAND</h1>
    </div>
  );
};

export default OurOffice;
