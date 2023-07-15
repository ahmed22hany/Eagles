'use client'

import Image from 'next/image'
import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

const Location = () => {
    return (
        <div className="max-lg:w-full w-[60%] text-right text-white leading-loose">
            <h1 className='text-2 text-[24px] '>مـوقـعـنـا</h1>
            <p className='text-1 text-[20px] flex gap-4 max-xl:justify-start max-xl:items-baseline'>

                <Image
                    src={'/flag1.png'}
                    alt='Egypt Flag'
                    width={22}
                    height={22}
                    className='object-contain'
                />

                القاهرة - مدينة نصر - زهراء مدينة نصر - عمارة ۲۰۷۳ - شقة ٤ بعمارات ضباط القوات المسلحة
            </p>
            <p className='text-1 text-[20px] flex justify-start items-baseline gap-4'>
                <Image
                    src={'/flag2.png'}
                    alt='Saudi Flag'
                    width={25}
                    height={25}
                    className='object-contain'
                />
                الرياض - طريق الملك عبد العزيز الفرعي - حي العارض - شمال طريق الملك سلمان ۲٥۲۹ - ٦٥١۳ - ١٣٣٤٥ / مكتب ٥
            </p>
            <div>
                <MapContainer className=' mt-4 w-[593px] h-[282px] max-md:!w-[350px] max-xs:!w-[250px] rounded-lg' center={[30.0528718, 31.399776]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[30.0528718, 31.399776]} icon={new Icon({ iconUrl: '/location.png', iconSize: [41, 41], iconAnchor: [12, 41] })} />
                </MapContainer>
            </div>
        </div>
    )
}

export default Location