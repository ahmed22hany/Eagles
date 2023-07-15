
import AboutHero from '@/components/AboutHero'
import AboutMain from '@/components/AboutMain'
import Footer from '@/components/Footer'
import React from 'react'

const About = () => {
    return (
        <div className='bg-secondary'>
            <AboutHero />
            <AboutMain />
            <Footer />
        </div>
    )
}

export default About