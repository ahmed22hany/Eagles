import Image from 'next/image';
import React from 'react'

const productImage = [
    { source: '/product1.png' },
    { source: '/product2.png' },
    { source: '/product3.png' },
    { source: '/product4.png' },
];


const ServiceImages = () => {
    return (
        <div dir='rtl' className='p-6'>
            <h1 className='text-2 text-[20px] text-primary'>الصور للخدمة</h1>
            <div className='flex flex-wrap gap-6 py-3 flexCenter max-xl:justify-start max-lg:justify-center'>
                {productImage.map((image, index) => (
                    <div key={index} className='bg-white rounded-xl'>
                        <Image
                            src={image.source}
                            alt='Product Image'
                            width={300}
                            height={300}
                            className='object-contain'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceImages