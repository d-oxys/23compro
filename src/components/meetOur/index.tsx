// components/VisiComponent.js
import Image from 'next/image';
import CompanyHistori from './companyHistori';
import Milestone from './theMilestone';
import VisiMisi from './visiMisi';
import CompanyTagline from './tagline';
import SeekExcellence from './seekExcellent';
import ShareGoodness from './Share';

const CompanyProfile = () => {
  return (
    <div className='w-screen h-full'>
      <CompanyHistori />
      <Milestone />
      <VisiMisi />
      <CompanyTagline />
      <SeekExcellence />
      <ShareGoodness />
    </div>
  );
};

export default CompanyProfile;
