'use client';

import React from 'react';
import FooterInformation from './FooterInformation';
import dynamic from 'next/dynamic';
import { Container } from './Container';
import { Box } from '@chakra-ui/react';

const Location = dynamic(() => import('./Location'), {
  ssr: false,
});

const AllRightsReserved = () => {
  const year = new Date().getFullYear();

  return (
    <Box className='flex justify-center items-center text-white' p={4}>
      <p>جميع الحقوق محفوظة</p>
      <p>©</p>
      <p>{year}</p>
    </Box>
  );
};

const Footer = () => {
  return (
    <div className='p-6 pb-0 bg-footer  max-md:gap-4' dir='rtl'>
      <Container
        display='flex'
        justifyContent='center'
        alignItems='flex-start'
        flexWrap='wrap'
      >
        <FooterInformation />
        <Location />
      </Container>
      <AllRightsReserved />
    </div>
  );
};

export default Footer;
