import React from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

export default function OperationBanner24() {
  return (
    <section className="pr-3.5 pt-4">
      <div
        className="text-white md:mr-0  md:mt-0 pt-20 contain lg:min-h-screen flex items-center relative overflow-hidden"
        style={{
          backgroundImage: `url(/assets/images/24-7/24-7-bg.png)`,

          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          // paddingTop: "40px",
        }}
      >
        <div className="container mx-auto w-full flex flex-col md:flex-row gap-5 lg:gap-0 items-end lg:grid lg:grid-cols-12 z-10 md:mb-20 lg:mb-0">
          {/* Left Content */}
          <div
            className="   space-y-4
  [&>*:first-child]:mt-0
  [&>*:last-child]:mb-0
  lg:col-span-6
  2xl:col-span-7
  md:ml-10
  lg:ml-0
  xl:ml-10
  2xl:ml-0
  ml-2
  relative "
          >
            {/* Glowing Tag */}
            <div
              style={{
                background: "#010403A6",
                backdropFilter: "blur(45px)",
                boxShadow: "-9px 11px 48px 0px #BC72F873",
              }}
              className="inline-flex items-center  gap-0.5 lg:gap-2 px-4 py-2 rounded-full border-[1.5px] border-[#6C35BE]"
            >
              <span className="text-gray-300 text-[10px] md:text-sm font-medium tracking-wide">
                Built for 24/7 Operations 🕐
              </span>
              <Zap className="lg:w-3.5 lg:h-3.5 w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>

            {/* Headline */}
            <h1
              className="
    text-[1.5rem]
    md:text-[1.75rem]
    lg:text-[2.25rem]
    2xl:text-[3.25rem]
    leading-[1.12]
    font-medium
    tracking-tight
    md:pl-10
    lg:pl-0
    xl:pl-0
    2xl:pl-0
    ml-2
    md:ml-0
  "
            >
              Designed for
              <br />
              continuous inbound
              <br />
              support, not office hours
            </h1>

            <p
              className="
    text-white tracking-wide
    text-xs leading-6
    sm:text-sm sm:leading-7
    md:text-base md:leading-8
    pl-2 md:pl-0
    w-full max-w-full md:max-w-xl
  wrap-break-word
    whitespace-normal
  "
            >
              Inbound customer support does not pause. Calls come in at night,
              during weekends, and under peak pressure. SpiraLink voicebots are
              built to operate continuously, without relying on human
              supervision or fragile setups.
            </p>

            <Image
              src={"/assets/bg/operations/left-bg.png"}
              alt="line"
              width={700}
              height={700}
              className="absolute -left-[40%] lg:-left-[40%] lg:top-[15%] top-[37%] w-contain h-auto scale-150 z-0"
              draggable={false}
            />
          </div>

          {/* Right Content */}
          <div
            className="
    flex flex-col
    md:justify-end
    pb-4
    lg:col-span-6 2xl:col-span-5
    mr-3 md:mr-0
    md:mt-0
    lg:-mb-42
  "
          >
            <Image
              src="/assets/bg/operations/star.png"
              alt="operations"
              width={20}
              height={20}
              draggable={false}
              className="w-5 h-auto"
            />

            <p
              className="
      text-purple-500 font-bold
      text-sm md:text-lg
      leading-relaxed
      max-w-full md:max-w-md
      pl-4 md:pl-6
   wrap-break-word
    "
            >
              This page explains how the system behaves when things are stable,
              when volume spikes, and when something goes wrong.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
