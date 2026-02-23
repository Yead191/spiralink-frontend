import React from "react";
import { MoveUpRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlowingTag from "@/shared/GlowingTag";

export default function HomeBanner() {
  return (
    <section className="text-white pt-24 lg:py-20 md:min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto w-full flex flex-col lg:flex-row gap-5 lg:gap-0 items-end lg:grid lg:grid-cols-12 z-10 ">
        {/* Left Content */}
        <div className=" space-y-8 lg:col-span-6 2xl:col-span-7 relative lg:pl-6 2xl:pl-0">
          {/* Glowing Tag */}

          <GlowingTag text="You focus on the calls. We handle the technology.⚡" />

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-[6rem] leading-[0.9] font-medium tracking-tighter">
            Humanlike AI Voicebots built exclusively <br className="" /> for
            call centers.
          </h1>
          <Image
            src={"/assets/bg/home/home-line2.svg"}
            alt="line"
            width={600}
            height={600}
            className="absolute top-[2%]  -right-41 w-contain h-auto md:hidden"
            draggable={false}
          />
          <Image
            src={"/assets/bg/home/home-line.svg"}
            alt="line"
            width={600}
            height={600}
            className="absolute  -left-[44%] md:-left-[40%]  lg:-left-[40%]  lg:top-[34%] xl:top-[30%] w-contain h-auto 2xl:scale-150 z-0 hidden md:block 2xl:hidden"
            draggable={false}
          />

          {/* Top Left SVG Line */}
          <svg
            className="absolute -left-[44%] lg:-left-[810%] h-[274px] lg:h-[300px]  lg:top-[-150px] 2xl:top-[120px] z-0 hidden 2xl:block pointer-events-none scale-150"
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

        {/* Right Content */}
        <div className=" flex flex-col justify-end  pb-4 space-y-8  lg:col-span-6 2xl:col-span-5">
          <p className="text-gray-400 text-lg leading-relaxed max-w-md relative">
            We are your dedicated AI engineering division. We manufacture the
            intelligence, integrate the workflows, and help you scale your
            operations.
            <Image
              src={"/assets/bg/home/home-line.svg"}
              alt="line"
              width={600}
              height={600}
              className="absolute md:hidden -bottom-4 -left-43.5"
              draggable={false}
            />
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/demo" className="w-full md:w-auto relative z-10">
              <button className="flex items-center justify-center gap-2 bg-white text-[#050507] px-6 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors group cursor-pointer w-full md:w-auto text-center">
                Request free tailored demo
                <MoveUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
            <button className="px-6 py-3.5 rounded-full font-semibold bg-[#1A1A1A] text-white border border-white/10 hover:bg-[#252525] transition-colors cursor-pointer w-full md:w-auto text-center">
              Listen to samples
            </button>
          </div>
        </div>
      </div>
      {/* <Image
        src={"/assets/bg/home/home-line.svg"}
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-0 md:top-18 md:-right-92 lg:top-3/8 2xl:top-2/5 -left-38.5 lg:-left-60  2xl:left-0 w-contain h-auto 2xl:scale-150 z-0"
        draggable={false}
      /> */}
    </section>
  );
}
