'use client'

import React, { useState } from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Image from "next/image";
import ReadMore from "./ReadMore";


const images = [
  { source: '/slide1.jpg', title: 'CCTV كاميرات المراقبة ', description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها' },
  { source: '/slide2.jpg', title: 'CCTV كاميرات المراقبة ', description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها' },
  { source: '/slide3.png', title: 'CCTV كاميرات المراقبة ', description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها' },
];

const Slideshow = () => {



  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="bg-[#1e1f1f] opacity-80 rounded-full ml-2">
        <FaAngleLeft className="h-6 w-6 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="bg-[#1e1f1f] opacity-80 shadow rounded-full mr-2">
        <FaAngleRight className="h-6 w-6 text-white cursor-pointer" />
      </div>
    ),
  };
  return (
    <div className="relative">
      <Zoom {...zoomInProperties}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center md:items-center items-start relative">
            <Image
              className="object-contain"
              src={image.source}
              alt='security photos'
              width={1473}
              height={490.93}
            />

            <div className="Hero-swiper_overlay"></div>
            <h1 className="Hero-swiper_h1">{image.title}<br /><span className="font-normal leading-loose"> {image.description}
            </span></h1>

            <p className="Hero-swiper_p"> تقوم المؤسسة بتنفيذ مشاريع وعمل المعاينات وعمل المخططات والرسومات
              <span className="leading-loose max-md:leading-none"> للمواقع ووضع التصميمات للمواقع طبقا لطبيعة واحتياج كل موقع
              </span>
            </p>

            <ReadMore />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;