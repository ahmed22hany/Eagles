'use client'
import Image from 'next/image'
export const revalidate = 0;
const LiveProductImages = ({ data }: any) => {
    return (
        <div dir='rtl'>
            <h1 className='text-2 text-primary pt-4 px-4 text-[20px]'>صور حية للخدمة</h1>
            <div className='p-8'>
                {data.test.pageData.liveImages.map((images: any, index: any) => (
                    <div key={index} className='my-5'>
                        <Image
                            src={images.source}
                            alt='live image'
                            width={1343}
                            height={487}
                            className='object-contain rounded-2xl'
                        />
                    </div>
                ))}
            </div>
            <p className='text-1 text-primary text-center pb-4'>جميع الحقوق محفوظة 2023 &copy;</p>
        </div>
    )
}

export default LiveProductImages