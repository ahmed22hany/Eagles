'use client';

import React from 'react';
import FooterInformation from './FooterInformation';
import dynamic from 'next/dynamic';

const Location = dynamic(() => import('./Location'), {
  ssr: false,
});

const Footer = () => {
  return (
    <div
      className='p-6 bg-footer flex justify-between items-start flex-wrap max-md:gap-4'
      dir='rtl'
    >
      <FooterInformation />
      <Location />
    </div>
  );
};

export default Footer;
