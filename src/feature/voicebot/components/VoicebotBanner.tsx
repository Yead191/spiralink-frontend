import GlowingTag from "@/shared/GlowingTag";
import { Asterisk } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function VoicebotBanner() {
  return (
    <section className="pt-32 md:pt-40 2xl:pt-48   pb-8 lg:pb-16 relative ">
      <div className="container relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-end pl-4 md:pl-0">
          {/* left */}
          <div className="relative lg:pl-6 2xl:pl-0">
            <GlowingTag text="Voicebot Manufacturing 🎤" />
            <h1 className="section-title mt-6 text-4xl! lg:text-[60px]! leading-[1.1] max-w-[600px]">
              How a voice agent is built for a specific support operation.
            </h1>
            <Image
              src="/assets/lines/voicebot/line-top.svg"
              alt="line"
              width={600}
              height={600}
              className="absolute -left-[44%] lg:-left-[64%] 2xl:-left-[70%] lg:-top-[25%] w-contain h-auto lg:scale-150 z-0 hidden md:block 2xl:hidden"
              draggable={false}
            />
            <svg
              className="absolute -left-[44%] lg:-left-[386%] 2xl:-left-[943%] h-[274px] lg:h-[300px]  lg:top-[190px] 2xl:top-[50px] z-0 hidden 2xl:block pointer-events-none 2xl:scale-150"
              viewBox="-4163 0 5000 294"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
                stroke="url(#home_line_gradient_1)"
                strokeWidth="20"
              />
              <defs>
                <linearGradient
                  id="home_line_gradient_1"
                  x1="189.215"
                  y1="147"
                  x2="837"
                  y2="147"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C175FC" />
                  <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* right */}
          <div className="flex justify-end relative">
            <div className=" mb-8 lg:mb-16">
              <div className="flex flex-col md:flex-row md:gap-3 ">
                <Asterisk className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-3 max-w-xs lg:max-w-md">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                    From intake to live deployment, the manufacturing process
                    typically takes between 1 and 5 weeks, depending on
                    operational complexity.
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <p className="section-subtitle max-w-[494px] mx-auto  md:mt-12 lg:mt-16 relative z-10">
          A production voice agent is not activated with a switch. It is built
          through a structured process that combines operational input, system
          analysis, call logic design, and controlled AI behavior.
          <br /> <br />
          Each voice agent is manufactured for one specific inbound customer
          support environment.
        </p>
        <Image
          src="/assets/lines/voicebot/line-bottom.svg"
          alt="line"
          width={600}
          height={600}
          className="absolute -right-[44%] lg:-right-[220px] lg:-bottom-[280px] w-contain h-auto lg:scale-150 z-0 hidden md:block 2xl:hidden"
          draggable={false}
        />
        <svg
          className="absolute -right-[44%] lg:right-[80%] 2xl:-right-[410%] bottom-0 lg:bottom-0 2xl:-bottom-[150px] h-[274px] z-0  2xl:block pointer-events-none hidden transform scale-150"
          viewBox="0 0 5000 294"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10H310.876C397.427 10 390.82 147.66 306.912 147.66H228.95C147.024 147.66 148.345 284 228.95 284H397.427C420.551 284 432.774 266.834 432.774 243.065V55.8868C432.774 28.8169 432.774 10 466.469 10H5000"
            stroke="url(#techteam_line_gradient_2)"
            strokeWidth="20"
          />
          <defs>
            <linearGradient
              id="techteam_line_gradient_2"
              x1="31"
              y1="107"
              x2="500"
              y2="147"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6C35BE" stopOpacity="0" />
              <stop offset="1" stopColor="#C175FC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* lines */}
      <Image
        src="/assets/lines/voicebot/line-top.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute top-21 -left-52   lg:top-42  lg:-left-89 2xl:-left-24 h-auto 2xl:scale-125 z-0 pointer-events-none md:hidden"
        draggable={false}
      />

      <Image
        src="/assets/lines/voicebot/line-bottom.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-226 -right-49  lg:-bottom-35.5  lg:-right-24 2xl:right-24 h-auto 2xl:scale-125 z-0 pointer-events-none md:hidden"
        draggable={false}
      />
    </section>
  );
}
