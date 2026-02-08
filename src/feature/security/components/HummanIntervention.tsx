import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HummanIntervention = () => {
    return (
        <div className='container flex flex-col items-center justify-center md:flex-row  gap-5 lg:gap-10 py-8 lg:py-16 relative'>
            {/* Left Side Content */}
            <div className="w-full  md:w-2/3 xl:w-1/2 z-20">
                <h1 className='section-title leading-[1.1]'>Human intervention <br />is always available</h1>
                <p className='section-subtitle lg:whitespace-nowrap!'>The system is designed to support meaningful human involvement.</p>

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

            {/* ---------- Desktop view--- */}
            <div className="relative w-full hidden lg:block xl:w-1/3 z-20">
                <Image width={400} height={400} quality={100} src="/assets/images/security/human-intervation.png" alt="Image" className="h-full w-full scale-120 mx-auto rounded-lg shadow-lg" />
            </div>

        {/* ---------- Tab view--- */}
            <div className="relative hidden md:block md:w-1/3 lg:hidden xl:w-1/3 z-20 top-20 right-10">
                <Image width={500} height={400} quality={100} src="/assets/images/security/human-intervation2.png" alt="Image" className="h-full w-full object-cover rounded-lg shadow-lg" />
                  {/* Glow */}
                <div
                    className="absolute -top-1/2 inset-0 -z-10 blur-xl opacity-70 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                    style={{ backgroundColor: "#BC72F873" }}
                />
            </div>

            {/* ---------- Mobile view--- */}
            <div className="relative w-full md:hidden z-20 top-20 ">
                <Image width={500} height={400} quality={100} src="/assets/images/security/human-intervation3.png" alt="Image" className="h-full w-full object-cover rounded-lg shadow-lg" />

            </div>
        </div>
    )
}

export default HummanIntervention