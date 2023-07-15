import Vision from '@/components/Vision'
import Swiper from '../components/Swiper'
import Clients from '@/components/Clients'
import Footer from '@/components/Footer'


const Home = () => {
  return (
    <div className='bg-secondary relative'>
      <Swiper />
      <Vision />
      <Clients />
      <Footer />
    </div>
  )
}

export default Home
