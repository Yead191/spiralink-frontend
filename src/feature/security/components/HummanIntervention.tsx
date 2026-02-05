import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HummanIntervention = () => {
    return (
        <div className='container flex flex-col items-center justify-center md:flex-row  gap-20 lg:gap-10 py-8 lg:py-16 relative'>
            {/* Left Side Content */}
            <div className="w-full xl:w-1/2 z-20">
                <h1 className='section-title leading-[1.1]'>Human intervention <br />is always available</h1>
                <p className='section-subtitle whitespace-nowrap!'>The system is designed to support meaningful human involvement.</p>

                <div className="mt-5">
                    <p className='text-xl text-primary font-bold mb-7'>It is designed to:</p>
                    <ul className='flex flex-col gap-4 text-lg pr-20'>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' /> Callers can request a human agent</li>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />The system escalates automatically when uncertainty or risk is detected.</li>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Human agents receive full conversation and system context.</li>
                    </ul>
                    <p className='section-subtitle mt-7'>This supports GDPR requirements for human <br /> oversight and HIPAA expectations around <br />
accountability.</p>
                </div>
            </div>
          
            {/* Right Side Content */}
            
              <div className="relative w-full xl:w-1/3 z-20">
                <Image width={400} height={400} quality={100} src="/assets/images/security/human-intervation.png" alt="Image" className="h-full w-full scale-120 mx-auto rounded-lg shadow-lg" />

            </div>
        </div>
    )
}

export default HummanIntervention