import React from "react";
import BadgeHero from "@/shared/BadgeHero";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const EXAMPLES = [
  "Emotional or sensitive situations",
  "Explicit requests to speak with a human agent",
  "Ambiguous requests or edge cases",
  "Exceptions outside predefined flows",
];

export default function HumanHandover() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/collaboration/inbound-bg.svg')",
        backgroundSize: "contain",
        backgroundPosition: "calc(50% + 200px) center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative text-white py-8 lg:py-16"
    >
      <div className="container mx-auto px-4 md:px-5">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="w-fit">
              <BadgeHero label="When a human agent takes over ❤️" />
            </div>

            <h2 className="section-title lg:text-[42px]! 2xl:text-6xl!  mb-8">
              Human agents
              <br className="hidden lg:block" /> are involved when their
              judgment adds value.
            </h2>

            <p className="section-subtitle max-w-xl">
              The system is designed to recognize moments where a conversation
              moves beyond structured resolution and requires human attention.
            </p>

            <div className="space-y-6">
              <h3 className="text-purple-400 font-medium text-xl">
                Examples include:
              </h3>
              <ul className="space-y-4">
                {EXAMPLES?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg text-gray-300"
                  >
                    <BadgeCheck className="w-6 h-6 text-purple-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl pt-4">
              These moments are intentional. They are defined in advance and
              continuously refined.
            </p>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="w-full flex justify-center 2xl:justify-end">
            <div className="relative w-full max-w-[400px] 2xl:max-w-none aspect-9/16  lg:aspect-3/4 rounded-3xl  flex flex-col items-center justify-center  gap-4">
              <Image
                src="/assets/images/collaboration/phone2.png"
                alt="Human Handover"
                width={500}
                height={500}
                draggable={false}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
