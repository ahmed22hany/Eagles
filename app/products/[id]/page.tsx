import ContactProducts from '@/components/ContactProducts';
import InfoServices from '@/components/InfoServices';
import LiveProductImages from '@/components/LiveProductImages';
import ServiceImages from '@/components/ServiceImages';
import Swiper from '@/components/Swiper';

export const revalidate = 0;

type Props = {
  params: {
    id: string;
  };
};

const getData = async (context: Props) => {
  const data = await fetch(
    `http://localhost:3000/api/products/${context.params.id}`
  );

  return await data.json();
};

const Products = async (context: Props) => {
  const test = await getData(context);
  console.log('🚀 ~ file: page.tsx:24 ~ Products ~ test:', test);

  return (
    <div className='bg-secondary'>
      <Swiper />
      <ServiceImages data={{ test }} />
      <InfoServices data={{ test }} />
      <ContactProducts />
      <LiveProductImages data={{ test }} />
    </div>
  );
};

export default Products;
