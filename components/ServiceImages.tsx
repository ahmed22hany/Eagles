'use client';

import Image from 'next/image';

const ServiceImages = ({ data }: any) => {
  return (
    <div dir='rtl' className='p-6'>
      <h1 className='text-2 text-[20px] text-primary'>الصور للخدمة</h1>
      <div className='flex flex-wrap gap-6 py-3 flexCenter max-xl:justify-start max-lg:justify-center'>
        {data.test.pageData.productImage.map((image: any, index: any) => (
          <div key={index} className='bg-white rounded-xl w-[300px] h-[300px]'>
            <Image
              src={image.source}
              alt='Product Image'
              width={300}
              height={300}
              className='object-cover'
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceImages;
