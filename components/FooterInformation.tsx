import Image from 'next/image';
import React from 'react';

const footerItems = [
  {
    title: '201009406638+ / 201224244449+',
    icon: '/whats.png',
    onClick: () => {
      window.open('https://wa.me/201009406638');
    },
  },
  {
    title: '966531110931+ / 966504915607+',
    icon: '/whats.png',
    onClick: () => {
      window.open('https://wa.me/966531110931');
    },
  },
  {
    title: 'Eaglesinternational46@gmail.com',
    icon: '/letter-white.png',
    onClick: () => {
      window.open('mailto:Eaglesinternational46@gmail.com');
    },
  },
];

const FooterInformation = () => {
  return (
    <div className='max-lg:w-full w-[30%] leading-loose text-white'>
      <h1 className='text-2 text-[24px]'>تواصـل معـنـا عبـر</h1>

      <div className=' leading-loose'>
        {footerItems.map((item) => (
          <p
            className='flex gap-4 my-4 items-center max-[320px]:gap-[3px]'
            onClick={() => item.onClick?.()}
          >
            <span>
              <Image
                src={item.icon}
                alt='WhatsApp'
                width={22}
                height={22}
                className='object-contain'
              />
            </span>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterInformation;
