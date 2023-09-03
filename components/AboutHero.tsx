import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className='bg-white'>
      <Image
        src={'/aboutHero.png'}
        alt='About Hero'
        width={1440}
        height={330}
        className='object-contain'
      />
      <h1 className='text-2 pt-4 about-header'>المدير التنفيذي</h1>
      <p className='text-1 pb-4 about-text'>المهندس / هلال محمود هلال</p>
    </div>
  );
};

export default AboutHero;
