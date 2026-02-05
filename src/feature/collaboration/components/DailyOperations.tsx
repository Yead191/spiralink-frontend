import React from "react";
import BadgeHero from "@/shared/BadgeHero";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const BENEFITS = [
  "Handles volume without increasing pressure",
  "Scales without fragmenting the customer experience",
  "Reduces repetitive workload for agents",
  "Maintains service quality across peak moments",
];

export default function DailyOperations() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/collaboration/ai-bg.svg')",
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="relative text-white pt-8 pb-16 lg:pt-16 lg:pb-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="w-fit">
              <BadgeHero label="What this means for daily operations 🌟" />
            </div>

            <h2 className="section-title mb-0">
              AI absorbs the bulk of <br className="hidden lg:block" />
              incoming demand.
            </h2>

            <p className="section-subtitle max-w-2xl">
              This collaboration model changes how inbound support teams
              operate.
            </p>

            <div className="space-y-6">
              <h3 className="text-primary font-medium text-xl">
                The result is an operation that:
              </h3>
              <ul className="space-y-4">
                {BENEFITS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg text-gray-300"
                  >
                    <BadgeCheck className="w-6 h-6 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div
              style={{
                background:
                  "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                backdropFilter: "blur(10px)",
              }}
              className="relative w-full max-w-[420px] p-10 rounded-[2.5rem] border border-white/10 space-y-6 z-10"
            >
              <p className="text-xl lg:text-2xl font-medium leading-normal text-white/90">
                AI and humans are <br />
                not competing for control.
              </p>
              <p className="text-xl lg:text-2xl font-medium leading-normal text-white/90">
                They are coordinated within <br />
                one operational system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/lines/collab/daily.svg"}
        alt="daily-operations"
        width={700}
        height={500}
        className="absolute bottom-0 lg:bottom-20 2xl:bottom-30 lg:-right-40 2xl:right-0 z-0 w-fit object-contain h-[400px] 2xl:h-[500px] opacity-70 "
      />
    </section>
  );
}
