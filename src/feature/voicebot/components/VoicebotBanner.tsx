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
            <div
              style={{
                background: "#010403A6",
                backdropFilter: "blur(45px)",
                boxShadow: "-9px 11px 48px 0px #BC72F873",
              }}
              className="inline-flex items-center gap-0.5 lg:gap-2 px-4 py-2 rounded-full border-[1.5px] border-[#6C35BE]"
            >
              <span className="text-gray-300 text-[10px] md:text-sm font-medium tracking-wide">
                Voicebot Manufacturing 🎤
              </span>
            </div>
            <h1 className="section-title mt-6 text-4xl! lg:text-[60px]! leading-[1.1] max-w-[600px]">
              How a voice agent is built for a specific support operation.
            </h1>
            <Image
              src="/assets/lines/voicebot/line-top.svg"
              alt="line"
              width={600}
              height={600}
              className="absolute -left-[44%] lg:-left-[64%] 2xl:-left-[70%] lg:-top-[25%] w-contain h-auto lg:scale-150 z-0 hidden md:block"
              draggable={false}
            />
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

        <p className="section-subtitle max-w-[494px] mx-auto  md:mt-12 lg:mt-16">
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
          className="absolute -right-[44%] lg:-right-[220px] lg:-bottom-[280px] w-contain h-auto lg:scale-150 z-0 hidden md:block"
          draggable={false}
        />
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
