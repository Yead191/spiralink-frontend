import GlowingTag from "@/shared/GlowingTag";
import { MoveUpRight, Asterisk } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CollaborationBanner() {
  return (
    <section className="text-white pt-6 lg:pt-24 lg:py-20 relative overflow-hidden pb-8">
      {/* 1st section */}
      <div className="container mx-auto w-full flex flex-col md:flex-row gap-5 z-10 pt-20 2xl:pt-28 relative ">
        {/* left */}
        <div className="flex-1 text-center md:text-left">
          {/* Glowing Tag */}

          <GlowingTag text="AI + Human Collaboration 👋" />

          <h1 className="section-title mt-6 text-4xl! lg:text-[60px]! leading-[1.1] max-w-[600px]">
            Built for the reality of inbound customer support.
          </h1>
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-16">
            <button
              style={{
                background: "linear-gradient(135deg, #7D3BB7 0%, #2C4C91 100%)",
              }}
              className="flex items-center justify-center gap-2  text-white px-6 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors group cursor-pointer w-full md:w-auto text-center"
            >
              Request free tailored demo
              <MoveUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="px-6 py-3.5 rounded-full font-semibold bg-[#1A1A1A] text-white border border-white/10 hover:bg-[#252525] transition-colors cursor-pointer w-full md:w-auto text-center">
              Listen to samples
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 flex justify-end relative">
          <div className="relative">
            <Image
              draggable={false}
              src={"/assets/images/collaboration/collab-banner.png"}
              alt="collaboration"
              width={1000}
              height={800}
              className="w-fit lg:h-[723px] 2xl:h-[900px] lg:-mt-10 relative z-10"
            />
            <Image
              src={"/assets/lines/collab/line-up.svg"}
              alt="line"
              width={600}
              height={600}
              className="absolute  lg:-top-20  lg:-right-76  2xl:-right-110 w-contain h-auto lg:scale-150 z-0 hidden md:block 2xl:hidden"
              draggable={false}
            />
            <svg
              className="absolute -right-[44%] lg:right-[80%] 2xl:-right-[735%] bottom-0 lg:bottom-0 2xl:-top-[60px] h-[274px] z-0  2xl:block pointer-events-none hidden transform scale-y-[-1]"
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
                  x1="-31"
                  y1="147"
                  x2="300"
                  y2="147"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6C35BE" stopOpacity="0" />
                  <stop offset="1" stopColor="#C175FC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* SpiraLink Reality Section */}
      <div className="container mx-auto relative z-10  lg:-mt-72">
        {/* Inbound Info Block */}
        <div className="max-w-md mb-8 lg:mb-16">
          <div className="flex flex-col md:flex-row md:ap-3">
            <Asterisk className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-medium mb-3">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
                Inbound customer support is
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
                unpredictable by nature.
              </span>
            </h3>
          </div>
          <p className="section-subtitle text-sm! md:pl-10.5 lg:pl-8">
            Some calls are straightforward and repeatable. Others require
            judgment, empathy, or experience.
          </p>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 md:pl-8">
          SpiraLink is built <br />
          around this reality.
        </h2>
        <div className="flex md:pl-60 relative z-10">
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Instead of forcing full automation or relying entirely on humans, we
            design one continuous support flow where AI and human agents each
            handle what they are best at. This collaboration is intentional,
            controlled, and designed for real call center operations.
          </p>
        </div>
        <Image
          src="/assets/lines/collab/inbound.svg"
          alt="line"
          width={600}
          height={600}
          className="absolute -left-[44%] lg:-left-[28%] 2xl:-left-[30%] lg:top-10 lg:scale-120 w-contain h-auto z-0 hidden md:block 2xl:hidden"
          draggable={false}
        />
        {/* Top Left SVG Line */}
        <svg
          className="absolute -left-[44%] lg:-left-[453%] h-[274px] lg:h-[300px]  lg:top-[-150px] 2xl:top-[120px] z-0 hidden 2xl:block pointer-events-none scale-150"
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
      {/* lines */}
      {/* <Image
        src={"/assets/lines/collab/line-up.svg"}
        alt="line"
        width={600}
        height={600}
        className="absolute  lg:top-28  lg:-right-96  2xl:-right-30 w-contain h-auto lg:scale-150 z-0 hidden md:block"
        draggable={false}
      /> */}
      <Image
        src="/assets/lines/collab/inbound.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-226 -left-49  lg:bottom-45  lg:-left-85 2xl:-left-15 h-auto 2xl:scale-125 z-0 pointer-events-none md:hidden"
        draggable={false}
      />
    </section>
  );
}
