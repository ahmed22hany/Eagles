import AboutHero from '@/components/AboutHero';
import AboutMain from '@/components/AboutMain';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata = {
  title: 'شركه ايجلز انترناشونال - من نحن',
};

const About = () => {
  return (
    <div className='bg-secondary'>
      <AboutHero />
      <AboutMain />
      <Footer />
    </div>
  );
};

export default About;
