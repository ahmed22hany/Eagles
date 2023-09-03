'use client';
import Image from 'next/image';
import { Container } from './Container';

type Props = {
  liveImages: { source: string }[];
};
const LiveProductImages = ({ liveImages }: Props) => {
  return (
    <div dir='rtl'>
      <Container>
        <h1 className='text-2 text-primary pt-4 px-4 text-[20px]'>
          صور حية للخدمة
        </h1>
        <div className='p-8'>
          {liveImages?.map((images: any, index: any) => (
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
      </Container>
    </div>
  );
};

export default LiveProductImages;
