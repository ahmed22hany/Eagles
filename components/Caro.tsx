'use client'

import React from 'react'
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const clients = [
    { client: '/client1.png' },
    { client: '/client2.png' },
    { client: '/client3.png' },
    { client: '/client4.png' },
    { client: '/client5.png' },
    { client: '/client1.png' },
    { client: '/client2.png' },
    { client: '/client3.png' },
    { client: '/client4.png' },
    { client: '/client5.png' },
];


const Caro = () => {
    const slideSettings = {
        duration: 5000,
        transitionDuration: 300,
        infinite: true,
        prevArrow: (
            <div className="bg-[#1e1f1f] opacity-80 rounded-full ml-2">
                <FaAngleLeft className="h-6 w-6 text-white cursor-pointer" />
            </div>
        ),
        nextArrow: (
            <div className="bg-[#1e1f1f] opacity-80 shadow rounded-full mr-2">
                <FaAngleRight className="h-6 w-6 text-white cursor-pointer" />
            </div>
        ),
    }

    const responsiveSettings = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ];

    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} {...slideSettings}>
                {clients.map((client, index) => (
                    <div key={index} className='flexCenter'>
                        <Image
                            src={client.client}
                            alt='Clients'
                            objectFit='contain'
                            width={180}
                            height={180}
                        />
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Caro