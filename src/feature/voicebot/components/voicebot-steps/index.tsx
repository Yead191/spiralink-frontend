import React from "react";
import InfoSection from "./InfoSection";
import Step1Marquee from "./Step1Marquee";
import { step1, step2, step3, step4, step5 } from "@/constants/voicebotData";
import Image from "next/image";

export default function VoicebotSteps() {
  return (
    <div className="py-8 lg:py-16">
      <div className="container">
        {/* step1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 2xl:pt-12">
          <InfoSection {...step1} />
          <div className="flex justify-center items-center">
            <Step1Marquee />
          </div>
        </div>
        {/* step2 */}
        <div className="flex flex-col md:flex-row lg:gap-8 2xl:pt-16 ">
          <div className="flex justify-center items-center lg:w-2/6">
            <Image
              src="/assets/images/voicebot/steps/step2.png"
              alt="step2"
              width={500}
              height={500}
              className="w-full h-auto"
              draggable={false}
            />
          </div>
          <div className="lg:w-3/5">
            <InfoSection {...step2} />
          </div>
        </div>
      </div>
      {/* step3 */}
      <div className="flex flex-col md:flex-row lg:gap-8 2xl:pt-48 items-center  justify-end">
        <div className="flex justify-center items-center w-1/5">
          <Image
            src="/assets/images/voicebot/steps/step3.png"
            alt="step2"
            width={1000}
            height={1000}
            draggable={false}
            className="w-fit lg:h-full object-contain"
          />
        </div>
        <div className="w-3/8">
          <InfoSection {...step3} />
        </div>
      </div>
      <div className="container">
        {/* step4 */}
        <div className="flex flex-col md:flex-row lg:gap-8 2xl:pt-40 ">
          <div className="flex justify-center items-center lg:w-2/7">
            <Image
              src="/assets/images/voicebot/steps/step4.png"
              alt="step4"
              width={800}
              height={800}
              className="w-full h-fit object-contain"
              draggable={false}
            />
          </div>
          <div className="lg:w-3/5">
            <InfoSection {...step4} />
          </div>
        </div>
        {/* step5 */}
        <div className="flex flex-col md:flex-row lg:gap-8 2xl:pt-40 ">
          <div className="lg:w-fit">
            <InfoSection {...step5} />
          </div>
          <div className="flex justify-center items-center lg:w-fit relative">
            <Image
              src="/assets/images/voicebot/steps/step5.png"
              alt="step5"
              width={1000}
              height={800}
              className="lg:w-[800px] h-fit object-contain"
              draggable={false}
            />
            <div
              style={{
                background:
                  "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                backdropFilter: "blur(45px)",
              }}
              className="absolute top-4/7 right-24  max-w-[220px] p-4 border border-white/10 rounded-2xl"
            >
              <h5 className="text-xl mb-2">SpiraLink AI</h5>
              <p className="text-white/50">
                Getting data and training session from knowledge base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
