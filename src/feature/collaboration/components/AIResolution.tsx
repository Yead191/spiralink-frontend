import React from "react";
import BadgeHero from "@/shared/BadgeHero";
import { BadgeCheck, MoveUpRight } from "lucide-react";
import Image from "next/image";
import PrimaryButton from "@/shared/PrimaryButton";
import Link from "next/link";

const RESOLUTION_POINTS = [
  "High-volume inbound inquiries",
  "Information retrieval and status checks",
  "Repetitive support questions",
  "Guided support flows with clear outcomes",
  "Multilingual conversations and language switching",
];

export default function AIResolution() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/collaboration/ai-bg.svg')",
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="relative text-white my-16 pt-8"
    >
      <div className="container relative ">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-20 ">
          {/* Left Column - Badge & Text */}
          <div className="relative z-20 pt-10 lg:pt-0 text-center md:text-left">
            <div className="mt-4 lg:mt-32 space-y-8">
              <div className="w-full mb-8">
                <BadgeHero label="What the AI resolves on its own ⚡" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-normal leading-tight text-white/90">
                The AI voice agent is responsible for handling inbound
                conversations that are structured, repeatable, and clearly
                defined.
              </h2>

              <div className="relative hidden md:block">
                <div className="lg:w-[300px] lg:h-[200px] w-[200px] h-[150px] rounded-3xl overflow-hidden border border-white/10 relative">
                  <Image
                    src="/assets/images/collaboration/person2.jpg"
                    alt="AI Agent"
                    width={300}
                    height={200}
                    draggable={false}
                    className="object-cover w-full h-full object-top"
                  />
                </div>
                {/* Chat Bubble */}
                <div
                  style={{
                    backdropFilter: "blur(25px)",
                    background:
                      "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                  }}
                  className="absolute lg:-bottom-10 lg:left-60 left-28 -bottom-20 ml-4 border border-white/10 p-4 lg:p-5 rounded-2xl w-56 lg:w-[280px] shadow-2xl"
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your AI voice agent is ready to take responsibility when
                    you're not available to answer!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Title & List & Floating Images */}
          <div className="relative z-10 pt-0 lg:pt-32">
            <h2 className="section-title tracking-wider! md:tracking-normal! mb-8">
              This includes the <br className="hidden md:block" />
              majority of daily call <br className="hidden md:block" />
              volume.
            </h2>

            <div className="mb-8">
              <h3 className="text-purple-400 font-medium text-xl mb-6">
                AI resolves:
              </h3>
              <ul className="space-y-4">
                {RESOLUTION_POINTS.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg text-gray-300"
                  >
                    <BadgeCheck className="w-6 h-6 text-purple-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating Image 2 (Man) - Desktop Position */}
            <div className="hidden md:block absolute -top-40 right-0 w-[400px]">
              <div className="relative">
                {/* Chat Bubble Left */}
                <div
                  style={{
                    backdropFilter: "blur(25px)",
                    background:
                      "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                  }}
                  className="absolute top-18 md:-left-10 lg:-left-30 border border-white/10 p-5 rounded-2xl md:max-w-[300px] lg:max-w-xs z-20 shadow-2xl"
                >
                  <p className="text-white/90 text-xs lg:text-sm leading-relaxed">
                    Hi David, My boss is busy in assisting the clients will get
                    back to you soon. Meanwhile, I'm here to answer your queries
                    :)
                  </p>
                </div>

                <div className="ml-auto md:w-48 lg:w-64 md:h-32 lg:h-40 rounded-3xl overflow-hidden border border-white/10 relative">
                  <Image
                    src="/assets/images/collaboration/person1.jpg"
                    alt="Customer"
                    width={300}
                    height={200}
                    draggable={false}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
                </div>
              </div>
            </div>

            {/* Floating Image 1 (Woman) - Desktop Position (Bottom Left relative to this column or absolute in section) */}
            {/* Based on screenshot, the woman image is on the left side, below the text description.  */}
          </div>
        </div>
        <div className="relative md:hidden">
          <div className="lg:w-[300px] lg:h-[200px] w-[200px] h-[150px] rounded-3xl overflow-hidden border border-white/10 relative">
            <Image
              src="/assets/images/collaboration/person2.jpg"
              alt="AI Agent"
              width={300}
              height={200}
              draggable={false}
              className="object-cover w-full h-full object-top"
            />
          </div>
          {/* Chat Bubble */}
          <div
            style={{
              backdropFilter: "blur(25px)",
              background:
                "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
            }}
            className="absolute lg:-bottom-10 lg:left-60 left-28 -bottom-20 ml-4 border border-white/10 p-4 lg:p-5 rounded-2xl w-[200px] lg:w-[280px] shadow-2xl"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Your AI voice agent is ready to take responsibility when you're
              not available to answer!
            </p>
          </div>
        </div>
        <div className="md:hidden  w-full flex justify-end mt-24 relative">
          {/* Chat Bubble Left */}
          <div
            style={{
              backdropFilter: "blur(25px)",
              background:
                "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
            }}
            className="absolute top-26 right-40  border border-white/10 p-4 rounded-2xl max-w-[220px] z-20 shadow-2xl"
          >
            <p className="text-white/90 text-xs lg:text-sm leading-relaxed">
              Hi David, My boss is busy in assisting the clients will get back
              to you soon. Meanwhile, I'm here to answer your queries :)
            </p>
          </div>
          <div className="relative flex justify-end">
            <div className="mr-auto w-[220px] h-[150px] md:h-32 lg:h-40 rounded-3xl overflow-hidden border border-white/10 relative flex justify-end">
              <Image
                src="/assets/images/collaboration/person1.jpg"
                alt="Customer"
                width={300}
                height={200}
                draggable={false}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
            </div>
          </div>
        </div>
        <div className="mt-24 lg:mt-32 text-center relative z-20">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-4 bg-[#C175FC]"></span>
            <span className="text-[#C175FC] font-medium lg:font-semibold text-xl lg:text-2xl">
              AI is not guessing.
            </span>
          </div>

          <p className="text-xl text-white/90 lg:text-3xl leading-relaxed mb-10">
            It operates within predefined flows and boundaries set by the
            operation. These interactions are completed end to end without human
            involvement, reducing queue pressure and stabilizing operations.
          </p>

          <Link href="/demo">
            <PrimaryButton
              label="Request free tailored demo"
              className="bg-linear-to-b from-[#7D3BB7] to-[#2C4C91] text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
