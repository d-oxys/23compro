// components/VisiComponent.js
import Image from 'next/image';
import CompanyHistori from './companyHistori';
import Milestone from './theMilestone';
import VisiMisi from './visiMisi';
import CompanyTagline from './tagline';
import SeekExcellence from './seekExcellent';
import ShareGoodness from './Share';
import Office from '../ourOffice';

const CompanyProfile = () => {
  return (
    <div className='w-screen h-full'>
      <CompanyHistori />
      <Milestone />
      <VisiMisi />
      <CompanyTagline />
      <SeekExcellence />
      <ShareGoodness />
      <Office />
    </div>
  );
};

export default CompanyProfile;
