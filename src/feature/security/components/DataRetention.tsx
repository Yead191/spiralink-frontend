import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DataRetention = () => {
    return (
        <div className='container flex flex-col items-center justify-center md:flex-row  gap-28 lg:gap-20 py-8 lg:py-16 relative'>
            {/* Left Side Content */}
            <div className="relative w-full xl:w-1/3 z-20">
                <Image width={400} height={400} quality={100} src="/assets/images/security/Group 2147226701.png" alt="Image" className="h-full w-full scale-180 mx-auto rounded-lg shadow-lg" />
            </div>

            {/* Right Side Content */}
            <div className="w-full xl:w-2/3 z-20">
                <h1 className='section-title leading-[1.1]'>Data retention <br /> and purpose limitation</h1>
                <p className='section-subtitle whitespace-nowrap!'>The system is designed to support meaningful human involvement.</p>

                <div className="mt-5">
                    <p className='text-xl text-primary font-bold mb-7'>Personal and health-related data is:</p>
                    <ul className='flex flex-col gap-4 text-lg pr-20'>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' /> Used only for the purpose of resolving the interaction</li>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Retained according to predefined retention policies.</li>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Not reused outside its original intent.</li>
                    </ul>
                    <p className='section-subtitle mt-7'>The voicebot does not train itself on live customer data <br /> unless explicitly configured and permitted.</p>
                </div>
            </div>
        </div>
    )
}

export default DataRetention