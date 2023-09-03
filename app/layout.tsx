import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { FloatingWhatsapp } from '@/components/FloatingWhatsapp';

export const metadata: Metadata = {
  title: 'شركه ايجلز انترناشونال',
  description:
    'مؤسسة ايجلز انترناشيونال بالرياض هي امددات لشركة ايجلز انترشيونال بالقاهرة حيث انها أحدي الشركات الرائدة في عالم الانظمة الامنية الالكترونية والتيار الخفيف والشبكات منذ عام ۲۰۱۷ بالقاهرة - جمهورية مصر العربية وقد حققت الشركة نجاحات ومشاريع عده بجميع القطاعات الحكومية والشرطية والقوات المسلحة خلال تلك المده واصرارا منا في تحقيق نجاحات جديدة بالمملكة العربية السعودية وقد تم مولد عملاق جديد للشركة بالرياض لتحقيق نجاحات اكثر بالمملكة امالين من الله العلي القدير ان يوفقنا ليستمر العطاء والنجاحات وان يستمر حلمنا بالانتشار والتواجد بكافة ارجاء الوطن العربي ويستمر اسم شركة ايجلز انترناشيونال خفاقا ومتربع بسماء الوطن العربي في مجال الانظمة الامنية الالكترونية والتيار الخفيف والشبكات.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ar'>
      <body>
        <Providers>
          <Navbar />
          {children}
          <FloatingWhatsapp />
        </Providers>
      </body>
    </html>
  );
}
