'use client'

import Image from 'next/image'
import React from 'react'
import Location from './Location'
import FooterInformation from './FooterInformation'


const Footer = () => {
  return (
    <div className="p-6 bg-footer flex justify-between items-start flex-wrap max-md:gap-4" dir="rtl">
      <FooterInformation />
      <Location />
    </div>
  )
}

export default Footer