import React from "react";
import BadgeHero from "@/shared/BadgeHero";
import { Asterisk } from "lucide-react";
import Image from "next/image";

const STEPS = [
  {
    step: "Step 1",
    title: "Before the transfer",
    description:
      "The AI gathers context throughout the conversation. Intent, answers, and relevant details are captured as the call progresses.",
    image: "/assets/images/collaboration/steps/step1.png",
  },
  {
    step: "Step 2",
    title: "During the transfer",
    description:
      "When a handover is triggered, the call is transferred instantly. There is no interruption and no restart.",
    image: "/assets/images/collaboration/steps/step2.png",
  },
  {
    step: "Step 3",
    title: "After the transfer",
    description:
      "The human agent receives the full conversation context. They see what was discussed, why the transfer happened, and where to continue.",
    image: "/assets/images/collaboration/steps/step3.png",
  },
];

export default function ContextTransfer() {
  return (
    <section className="relative text-white py-8 lg:py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="mb-8">
            <BadgeHero label="How it works ✨" />
          </div>
          <h2 className="section-title">
            How context is transferred <br />
            without breaking the call
          </h2>
          <p className="section-subtitle">
            We design, integrate, and run custom voice AI so your{" "}
            <br className="hidden md:block" /> team can focus on growth, not
            technology.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS?.map((step, index) => (
            <div
              style={{
                background:
                  "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                backdropFilter: "blur(45px)",
                // padding: index === 1 ? "0 24px 24px 24px" : "24px 24px 0 24px",
              }}
              key={index}
              className={` overflow-hidden  rounded-4xl  border border-white/10 flex h-full justify-between ${
                index === 1
                  ? "flex-col-reverse"
                  : index === 2
                    ? "flex-col md:col-span-2 md:flex-row md:items-center md:gap-8 lg:col-span-1 lg:flex-col lg:items-stretch lg:gap-0"
                    : "flex-col "
              }`}
            >
              <div
                className={`p-6 ${
                  index === 2 ? "w-full md:w-1/2 lg:w-full" : "w-full"
                }`}
              >
                <span className="text-primary font-semibold mb-4 block text-sm tracking-wide uppercase">
                  {step.step}
                </span>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm lg:text-base">
                  {step.description}
                </p>
              </div>

              {/* Image Placeholder */}
              <div
                className={` ${index === 1 ? "bg-linear-to-t" : "bg-linear-to-b"} from-transparent via-transparent to-[#724895] relative w-full  flex flex-col items-center justify-center text-center  
                `}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={800}
                  height={800}
                  className={`w-full!  object-cover object-top h-[350px] 
                ${index === 1 ? "mb-8 -mr-12 pt-6" : "-mb-4"}
                ${index === 2 ? "-mr-12 md:pt-6 lg:pt-0" : ""}

                    `}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Key Points */}
        <div className="mt-6 lg:mt-12 flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-16">
          <div className="flex items-center gap-3">
            <Asterisk className="w-6 h-6 text-purple-400 shrink-0" />
            <span className="text-lg lg:text-xl font-medium text-white/90">
              The customer does not repeat themselves.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Asterisk className="w-6 h-6 text-purple-400 shrink-0" />
            <span className="text-lg lg:text-xl font-medium text-white/90">
              The agent does not start blind.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
