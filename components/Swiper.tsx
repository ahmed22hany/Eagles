'use client';

import React from 'react';
//These are Third party packages for smooth slideshow
import { Zoom, ZoomProps } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ReadMore from './ReadMore';
import { Text } from './Text';
import { Box, Image } from '@chakra-ui/react';

const images = [
  {
    source: '/slide1.jpg',
    title: 'CCTV كاميرات المراقبة ',
    description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها',
  },
  {
    source: '/slide2.jpg',
    title: 'CCTV كاميرات المراقبة ',
    description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها',
  },
  {
    source: '/slide3.png',
    title: 'CCTV كاميرات المراقبة ',
    description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها',
  },
];

type SlideShowProps = {
  slides?: {
    source: string;
    title: string;
    description: string;
  }[];
};
const Slideshow = ({ slides = images }: SlideShowProps) => {
  const zoomInProperties: Omit<ZoomProps, 'children'> = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    indicators: true,
    prevArrow: (
      <div className='bg-[#1e1f1f] opacity-80 rounded-full ml-8'>
        <FaAngleLeft className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
    nextArrow: (
      <div className='bg-[#1e1f1f] opacity-80 shadow rounded-full mr-8'>
        <FaAngleRight className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
  };

  return (
    <div className='relative'>
      <Zoom {...zoomInProperties}>
        {slides?.map((image, index) => (
          <Box
            key={index}
            className='flex justify-center md:items-center items-start relative h-[490]'
            height={490}
            position='relative'
          >
            <Image
              objectFit={'cover'}
              src={image.source}
              alt='security photos'
              width={'100%'}
              height='100%'
            />

            <div className='Hero-swiper_overlay'></div>
            <Text
              as='h1'
              position='absolute'
              top={{ base: '40%', md: '10', lg: '10' }}
              left={{ base: '50%', md: 'inherit', lg: 'inherit' }}
              right={{ base: '0', md: '24' }}
              transform={{
                base: 'translate(-50%, -50%)',
                md: 'translate(0, 0)',
                lg: 'translate(0, 0)',
              }}
              color='#fff'
              fontWeight={{ base: 'bold', md: 'bold' }}
              textAlign='center'
              fontSize={{ base: '2xl', md: '4xl' }}
            >
              {image.title}
              <br />
              <Text className='font-normal leading-loose' variant='subHeading'>
                {' '}
                {image.description}
              </Text>
            </Text>

            <Text className='Hero-swiper_p' variant='body'>
              {' '}
              تقوم المؤسسة بتنفيذ مشاريع وعمل المعاينات وعمل المخططات والرسومات
              <span className='leading-loose max-md:leading-none'>
                {' '}
                للمواقع ووضع التصميمات للمواقع طبقا لطبيعة واحتياج كل موقع
              </span>
            </Text>

            <ReadMore />
          </Box>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
