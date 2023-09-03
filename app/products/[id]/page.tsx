import { DataObject } from '@/app/api/products/[id]/route';
import ContactProducts from '@/components/ContactProducts';
import Footer from '@/components/Footer';
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

export async function generateMetadata({ params }: Props) {
  const data = await fetch(`http://localhost:3000/api/products/${params.id}`);

  const pageData = await data.json();

  return {
    title: pageData.title,
    description: pageData.description,
  };
}

const getData = async (context: Props) => {
  const data = await fetch(
    `http://localhost:3000/api/products/${context.params.id}`
  );

  return await data.json();
};

const Products = async (context: Props) => {
  const pageData: DataObject = await getData(context);

  return (
    <div className='bg-secondary'>
      <Swiper />
      <ServiceImages productImages={pageData.productImage} />
      <InfoServices infoText={pageData.infoText} />
      <ContactProducts />
      <LiveProductImages liveImages={pageData.liveImages} />
      <Footer />
    </div>
  );
};

export default Products;
