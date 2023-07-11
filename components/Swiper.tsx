'use client'

import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Image from "next/image";


const Slideshow = () => {
  //Array of Images
  const images = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
  ];

  //These are custom properties for zoom effect while slide-show
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
    <div className=" relative z-0">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center md:items-center items-start relative">
            <Image
              className="object-contain"
              src={each}
              alt='security photos'
              width={1473}
              height={490.93}
            />
            <div className=" absolute bg-[#181818] opacity-50 w-full h-full"></div>
            <h1 className="absolute md:top-10 md:right-24 right-15 top-5 z-1 md:text-4xl text-[22px] font-bold text-right text-white">CCTV كاميرات المراقبة <br /><span className="font-normal leading-loose"> سواء كانت سلكى او لاسلكي IP و HD بنوعيها
            </span></h1>
            <p className="absolute md:top-40 top-20 md:right-24 right-15 z-1 md:max-w-4xl md:text-2xl max-lg:hidden leading-loose text-right text-white"> تقوم المؤسسة بتنفيذ مشاريع وعمل المعاينات وعمل المخططات والرسومات <span className="leading-loose max-md:leading-none"> للمواقع ووضع التصميمات للمواقع طبقا لطبيعة واحتياج كل موقع </span></p>
            <button className="absolute lg:top-[310px] md:top-60 top-[100px] md:right-24 right-15 z-1 customBtn gap-2 text_btn">
              <Image src={'/phone.svg'} alt="Phone Icon" width={17} height={17} />
              تواصل معنا
            </button>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;