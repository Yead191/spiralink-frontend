import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AudibilitySecurity = () => {
    return (
        <div className='container mx-auto pt-60 md:pt-16 px-4 lg:px-0 xl:-mb-24'>
            <div className="grid  gap-12 md:gap-20 pb-8 xl:pb-32 lg:grid lg:grid-cols-2  xl:gap-20 overflow-x-auto lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 items-center relative">
                {/* Left Content */}
                <div
                    style={{
                        backdropFilter: "blur(25px)",
                        background:
                            "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                    }}
                    className={`border border-white/10 px-10 py-18 rounded-2xl min-w-[280px] lg:min-w-0 snap-center flex flex-col gap-4 min-h-[350px] lg:min-h-auto lg:row-span-2 lg:h-full`}
                >
                    <h1 className="section-title leading-[1.1]">Audibility
                        and compliance readiness</h1>

                    <div className="mt-auto">
                        <div className="">
                            <p className='text-xl text-primary font-bold mb-7'>When logging is enabled:</p>
                            <ul className='flex flex-col gap-2 text-lg'>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' /> The purpose of logging is defined in advance</li>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />The scope of stored data is limited</li>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Logging starts only after required disclosures and consent</li>
                            </ul>
                            <p className='section-subtitle mt-7'>This supports data minimization and purpose limitation.</p>
                        </div>
                    </div>
                </div>
                {/* Right Content */}
                <div
                    style={{
                        backdropFilter: "blur(25px)",
                        background:
                            "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                    }}
                    className={`border border-white/10 px-10 py-18 rounded-2xl min-w-[280px] lg:min-w-0 snap-center flex flex-col gap-4 min-h-[350px] lg:min-h-auto lg:row-span-2 lg:h-full`}
                >
                    <div >
                        <h1 className="section-title leading-[1.1]">Security and compliance as operational behavior</h1>
                        <p className='section-subtitle'>GDPR and HIPAA compliance are enforced through how the system behaves in real time.</p>
                    </div>

                    <div className="lg:mt-20">
                        <div className="">
                            <p className='text-xl text-primary font-bold mb-7'>The voicebot is designed to:</p>
                            <ul className='flex flex-col gap-2 text-lg'>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' /> Request consent when required</li>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Limit processing when boundaries are reached</li>
                                <li className='flex items-center gap-2 '><BadgeCheck className='text-primary' />Escalate safely when compliance conditions are not met</li>
                            </ul>
                            <p className='section-subtitle mt-7'>Security and compliance are treated as operational requirements, not configuration checkboxes.</p>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute top-1/3 w-80! h-80! left-3/5! md:hidden inset-0 z-10 blur-xl opacity-70 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                    style={{ backgroundColor: "#BC72F873" }}
                />
            </div>
            <Image
                src="/assets/bg/Spiralink.png"
                alt="line"
                width={1400}
                height={800}
                draggable={false}
                className="w-full h-fit object-contain container "
            />
        </div>
    )
}

export default AudibilitySecurity