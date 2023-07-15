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

const slideSettings = {
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
        <div className="bg-primary opacity-60 rounded-full ml-2">
            <FaAngleLeft className="h-6 w-6 text-white cursor-pointer" />
        </div>
    ),
    nextArrow: (
        <div className="bg-primary opacity-60 shadow rounded-full mr-2">
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
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

const ClientsImages = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} {...slideSettings}>
                {clients.map((client, index) => (
                    <div key={index} className='flexCenter'>
                        <Image
                            src={client.client}
                            alt='Clients'
                            width={180}
                            height={180}
                            className='object-contain'
                        />
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default ClientsImages