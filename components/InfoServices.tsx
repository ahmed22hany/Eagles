'use client';

type Props = {
  infoText: { title: string; desc: string | string[] }[];
};
const InfoServices = ({ infoText }: Props) => {
  return (
    <div dir='rtl'>
      {infoText?.map((info: any, index: any) => (
        <div key={index} className=' leading-loose p-6'>
          <h1 className='text-2 text-primary'>{info.title}</h1>
          <p
            className='whitespace-pre-wrap max-w-[1000px] text-1 text-primary'
            dangerouslySetInnerHTML={{ __html: info.desc }}
          />
        </div>
      ))}
    </div>
  );
};

export default InfoServices;
