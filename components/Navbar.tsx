'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const services = [
  { service: 'كاميرات المراقبه', url: '/products/cctv' },
  { service: 'انظمه الحرائق', url: '/products/fire-systems' },
  { service: 'انظمه التتبع', url: '/products/gps-services' },
];

const links = [
  { link: 'الرئيسية', url: '/' },
  { link: 'ماذا عنا', url: '/about' },
  { link: 'خدماتنا', url: '/products' },
];

const Navbar = () => {
  return (
    <nav className='bg-primary w-full pb-1 flexBetween px-10 relative z-50'>
      <button className='customBtn gap-2 text_btn max-sm:hidden relative'>
        <a href='tel:+201009406638' className=' absolute top-0 w-full h-full' />
        <Image src={'/phone.svg'} alt='Phone Icon' width={17} height={17} />
        تواصل معنا
      </button>

      {/* Desktop view of links */}
      <ul className='flex gap-8 max-sm:hidden'>
        <li className='text-1_Nav flexCenter gap-2'>
          <Menu>
            <MenuButton
              css={{
                span: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              }}
            >
              <Box as='span' marginRight='2'>
                <Image
                  src={'/vector.svg'}
                  alt={'Arrow'}
                  width={14}
                  height={6.81}
                />
              </Box>
              <Link href={'/products'}>خدماتنا</Link>
            </MenuButton>
            <MenuList className='p-5 bg-secondary'>
              <div>
                {services.map((serv) => (
                  <MenuItem
                    className='hover:bg-white p-2 rounded-2xl text-center text-primary'
                    key={serv.service}
                  >
                    <Link href={serv.url} className='text-center w-full'>
                      {serv.service}
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </MenuList>
          </Menu>
        </li>
        <li className='text-1_Nav'>
          <Link href={'/about'}>ماذا عنا</Link>
        </li>
        <li className='text-2_Nav'>
          <Link href={'/'}>الرئيسية</Link>
        </li>
      </ul>

      {/* Mobile View of links */}
      <div className='max-sm:flex hidden'>
        <Menu>
          <MenuButton>
            <Image src='/menu.svg' alt='menu icon' width={20} height={16} />
          </MenuButton>
          <MenuList className='p-5 bg-secondary'>
            <div className='my-2'>
              {links.map((each) => (
                <MenuItem className='hover:bg-white p-2 rounded-2xl text-center text-primary'>
                  <Link href={each.url} className='text-center w-full'>
                    {each.link}
                  </Link>
                </MenuItem>
              ))}
            </div>
            <button className='customBtn gap-2 bg-secondary text_btn relative w-full h-full'>
              <a
                href='tel:+201009406638'
                className=' absolute top-0 w-full h-full'
              />
              <Image
                src={'/phone.svg'}
                alt='Phone Icon'
                width={17}
                height={17}
              />
              تواصل معنا
            </button>
          </MenuList>
        </Menu>
      </div>

      <Link href={'/'}>
        <Image
          src={'/logo.svg'}
          alt='Eagles Logo'
          width={87}
          height={72}
          className='object-contain'
        />
      </Link>
    </nav>
  );
};

export default Navbar;
