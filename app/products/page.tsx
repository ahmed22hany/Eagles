import ContactProducts from '@/components/ContactProducts'
import InfoServices from '@/components/InfoServices'
import LiveProductImages from '@/components/LiveProductImages'
import ServiceImages from '@/components/ServiceImages'
import Swiper from '@/components/Swiper'
import React from 'react'

const Products = () => {
    return (
        <div className='bg-secondary'>
            <Swiper />
            <ServiceImages />
            <InfoServices />
            <ContactProducts />
            <LiveProductImages />
        </div>
    )
}

export default Products