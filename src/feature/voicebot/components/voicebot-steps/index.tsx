import React from "react";
import InfoSection from "./InfoSection";
import Step1Marquee from "./Step1Marquee";
import {
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
} from "@/constants/voicebotData";
import Image from "next/image";
import StepLine from "./StepLine";

export default function VoicebotSteps() {
  return (
    <div className="pb-8">
      <div className="md:max-w-6xl  mx-auto md:px-4 -mt-10">
        {/* step1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 relative ">
          <InfoSection {...step1} />
          <div className="flex justify-center items-center">
            <Step1Marquee />
          </div>
          <StepLine
            src="/assets/lines/voicebot/steps/step1.png"
            alt="step1"
            className=" top-0 -left-[32%]"
          />
        </div>
        {/* step2 */}
        <div className="flex flex-col-reverse md:flex-row lg:gap-8 pt-12:pt-0 relative">
          <div className="flex justify-center items-center lg:w-2/6 px-4 lg:px-0">
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
          <StepLine
            src="/assets/lines/voicebot/steps/step2.png"
            alt="step2"
            className=" -top-2 left-[13%]"
          />
        </div>
      </div>
      {/* step3 */}
      <div className="flex flex-col-reverse md:flex-row lg:gap-8 pt-8 lg:pt-0 items-center  justify-end relative">
        <div className="flex justify-center items-center lg:w-1/5 px-4 lg:px-0">
          <Image
            src="/assets/images/voicebot/steps/step3.png"
            alt="step2"
            width={1000}
            height={800}
            draggable={false}
            className="w-fit lg:h-[550px] object-contain"
          />
        </div>
        <div className="lg:w-3/8">
          <InfoSection {...step3} />
        </div>
        <StepLine
          src="/assets/lines/voicebot/steps/step3.png"
          alt="step3"
          className=" -top-3.5 right-[36.5%] "
        />
      </div>
      <div className="md:max-w-7xl  mx-auto md:px-4">
        {/* step4 */}
        <div className="flex flex-col-reverse md:flex-row lg:gap-8 pt-12 lg:pt-0 relative ">
          <div className="flex justify-center items-center lg:w-2/7 px-4 lg:px-0">
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
          <StepLine
            src="/assets/lines/voicebot/steps/step4.png"
            alt="step4"
            className=" -top-5 left-[14.5%] "
          />
        </div>
        {/* step5 */}
        <div className="flex flex-col md:flex-row lg:gap-8 relative">
          <div className="lg:w-fit">
            <InfoSection {...step5} />
          </div>
          <div className="flex justify-center items-center lg:w-fit relative px-4 lg:px-0">
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
              className="absolute top-20 lg:top-4/7 right-24  max-w-[220px] p-4 border border-white/10 rounded-2xl"
            >
              <h5 className="text-xl mb-2">SpiraLink AI</h5>
              <p className="text-white/50">
                Getting data and training session from knowledge base.
              </p>
            </div>
          </div>
          <StepLine
            src="/assets/lines/voicebot/steps/step5.png"
            alt="step5"
            className=" -top-6.5 left-0 "
          />
        </div>
        {/* step6 */}
        <div className="flex flex-col-reverse md:flex-row lg:gap-8 pt-36 lg:pt-0 relative ">
          <div className="flex justify-center items-center lg:w-2/5 px-4 lg:px-0 ">
            <Image
              src="/assets/images/voicebot/steps/step6.png"
              alt="step6"
              width={1000}
              height={800}
              className="w-fit lg:h-[600px] object-contain hidden md:block"
              draggable={false}
            />
            <Image
              src="/assets/images/voicebot/steps/step6m.png"
              alt="step6"
              width={1000}
              height={800}
              className="w-fit lg:h-full object-contain md:hidden "
              draggable={false}
            />
          </div>
          <div className="lg:w-3/4 ">
            <InfoSection {...step6} />
          </div>
          <StepLine
            src="/assets/lines/voicebot/steps/step6.png"
            alt="step6"
            className=" -top-8.5 left-0 "
          />
        </div>
        {/* step7 */}
        <div className="flex flex-col md:flex-row lg:gap-8 pt-16 lg:pt-10 relative ">
          <div className="md:w-1/2">
            <InfoSection {...step7} />
          </div>
          <div className="flex justify-center items-center md:w-1/2 px-4 lg:px-0">
            <Image
              src="/assets/images/voicebot/steps/step7.png"
              alt="step7"
              width={1000}
              height={800}
              className="w-fit lg:h-[600px] object-contain "
              draggable={false}
            />
          </div>
          <StepLine
            src="/assets/lines/voicebot/steps/step7.png"
            alt="step7"
            className=" -top-9 left-[27.8%] "
          />
        </div>
      </div>
      {/* step8 */}
      <div className="flex flex-col md:flex-row lg:gap-8 pt-16 lg:pt-4  lg:w-4/6 ml-auto justify-end items-center relative  ">
        <div className="md:w-1/2">
          <InfoSection {...step8} />
        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <Image
            src="/assets/images/voicebot/steps/step8.png"
            alt="step8"
            width={1000}
            height={800}
            className="w-fit lg:h-[600px] object-contain  lg:scale-150 lg:-mr-20 2xl:-mr-42"
            draggable={false}
          />
        </div>
        <StepLine
          src="/assets/lines/voicebot/steps/step8.png"
          alt="step8"
          className=" -top-35 -left-4 "
        />
        <StepLine
          src="/assets/lines/voicebot/steps/final-line.png"
          alt="step8"
          className=" -bottom-40 -left-4 w-fit! h-fit!"
        />
      </div>
    </div>
  );
}
