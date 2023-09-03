import Vision from '@/components/Vision';
import Swiper from '../components/Swiper';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const images = [
  {
    source: '/slide1.jpg',
    title: 'CCTV كاميرات المراقبة ',
    description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها',
  },
  {
    source: '/slide2.jpg',
    title: 'CCTV كاميرات المراقبة ',
    description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها',
  },
  {
    source: '/slide3.png',
    title: 'CCTV كاميرات المراقبة ',
    description: 'سواء كانت سلكى او لاسلكي IP و HD بنوعيها',
  },
];

export const metadata: Metadata = {
  title: 'شركه ايجلز انترناشونال',
  description:
    'مؤسسة ايجلز انترناشيونال بالرياض هي امددات لشركة ايجلز انترشيونال بالقاهرة حيث انها أحدي الشركات الرائدة في عالم الانظمة الامنية الالكترونية والتيار الخفيف والشبكات منذ عام ۲۰۱۷ بالقاهرة - جمهورية مصر العربية وقد حققت الشركة نجاحات ومشاريع عده بجميع القطاعات الحكومية والشرطية والقوات المسلحة خلال تلك المده واصرارا منا في تحقيق نجاحات جديدة بالمملكة العربية السعودية وقد تم مولد عملاق جديد للشركة بالرياض لتحقيق نجاحات اكثر بالمملكة امالين من الله العلي القدير ان يوفقنا ليستمر العطاء والنجاحات وان يستمر حلمنا بالانتشار والتواجد بكافة ارجاء الوطن العربي ويستمر اسم شركة ايجلز انترناشيونال خفاقا ومتربع بسماء الوطن العربي في مجال الانظمة الامنية الالكترونية والتيار الخفيف والشبكات.',
};

const Home = () => {
  return (
    <div className='bg-secondary relative'>
      <Swiper slides={images} />
      <Vision />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
