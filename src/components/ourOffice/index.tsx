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
    </div>
  );
};

export default OurOffice;
