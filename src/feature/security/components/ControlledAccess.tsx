import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ControlledAccess = () => {
    return (
        <div className='container flex flex-col items-center justify-center md:flex-row  gap-20 lg:gap-28 py-8 lg:py-16 relative'>
            {/* Left Side Content */}
            <div className="relative w-full xl:w-1/2 z-20">
                <Image width={400} height={400} quality={100} src="/assets/images/security/controll-img.png" alt="Image" className="h-full w-3/5 mx-auto rounded-lg shadow-lg" />

                {/* Glow */}
                <div
                    className="absolute h-full w-full scale-100 top-0 left-0 inset-0 blur-xl opacity-70 rounded-full group-hover:opacity-30 transition-opacity duration-500 -z-10"
                    style={{ backgroundColor: "#BC72F873" }}
                />
            </div>
            {/* Right Side Content */}
            <div className="w-full md:w-1/2 z-20">
                <h1 className='section-title leading-[1.1]'>Controlled access <br /> to sensitive and <br /> health-related data</h1>
                <p className='section-subtitle whitespace-nowrap!'>The voicebot communicates clearly throughout the interaction.</p>

                <div className="mt-5">
                    <p className='text-xl text-primary font-bold mb-7'>It can only:</p>
                    <ul className='flex flex-col gap-4 text-lg'>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' /> Access data required for the specific request</li>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Retrieve or update information within approved boundaries.</li>
                        <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Perform actions explicitly allowed by the organization.</li>
                    </ul>
                    <p className='section-subtitle mt-7'>For healthcare use cases, access to Protected Health Information (PHI) is strictly limited to what is necessary to support the interaction, in line with HIPAA’s minimum
                        necessary standard.</p>
                </div>
            </div>
        </div>
    )
}

export default ControlledAccess