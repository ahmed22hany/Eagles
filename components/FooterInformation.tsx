import Image from 'next/image'
import React from 'react'

const FooterInformation = () => {
    return (

        <div className="max-lg:w-full w-[30%] leading-loose text-white">
            <h1 className='text-2 text-[24px]'>تواصـل معـنـا عبـر</h1>

            <div className=' leading-loose'>
                <p className='flex gap-4 my-4 items-center max-[320px]:gap-[3px]'>
                    201009406638+ / 201224244449+
                    <span>
                        <Image
                            src={'/whats.png'}
                            alt='WhatsApp'
                            width={22}
                            height={22}
                            className='object-contain'
                        />
                    </span>
                </p>
                <p className='flex gap-4 my-4 items-center max-[320px]:gap-0'>
                    966531110931+ / 966504915607+
                    <span>
                        <Image
                            src={'/whats.png'}
                            alt='WhatsApp'
                            width={22}
                            height={22}
                            className='object-contain'
                        />
                    </span>
                </p>
                <p className='flex gap-4 my-4 mr-[14px] items-center max-xs:mr-[0px] '>
                    Eaglesinternational47@gmail.com
                    <span>
                        <Image
                            src={'/letter-white.png'}
                            alt='WhatsApp'
                            width={22}
                            height={22}
                            className='object-contain'
                        />
                    </span>
                </p>
                <p className='flex gap-4 mr-[180px] my-4 items-center max-xs:mr-[160px]'>
                    EAGLES@
                    <span>
                        <Image
                            src={'/twitter.png'}
                            alt='WhatsApp'
                            width={22}
                            height={22}
                            className='object-contain'
                        />
                    </span>
                </p>
                <p className='flex gap-4 mt-[180px] mr-[54px] my-4 items-center max-xs:mr-[35px] max-lg:mt-4 max-xl:mt-[230px]'>
                    جميع الحقوق محفوظة 2023
                    <span>
                        <Image
                            src={'/copyright.png'}
                            alt='WhatsApp'
                            width={22}
                            height={22}
                            className='object-contain'
                        />
                    </span>
                </p>
            </div>
        </div>
    )
}

export default FooterInformation