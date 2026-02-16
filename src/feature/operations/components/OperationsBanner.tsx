import GlowingTag from "@/shared/GlowingTag";
import Image from "next/image";
import React from "react";

export default function OperationsBanner() {
  return (
    <section className="pr-4">
      <section
        style={{
          backgroundImage: "url('/assets/bg/operations/op-banner.png')",
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
        className="lg:min-h-screen mt-4  relative "
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 pt-36 md:pt-48 ">
          {/* left */}
          <div className="pl-6 2xl:pl-0 relative col-span-2">
            {/* Glowing Tag */}
            <GlowingTag text="Integrated into your operations⚡" />

            <h1 className="page-title my-8 relative z-10  lg:max-w-[800px]">
              Built to fit into how your support team already works.
            </h1>
            <p className="section-subtitle max-w-[600px]">
              Most voice AI projects fail because they sit next to the operation
              instead of inside it. Teams are forced to adapt their workflows,
              tools, and processes around the technology.
            </p>

            <div className="hidden xl:block absolute -left-[86.5%] 2xl:-left-[90%] top-1/4 -translate-y-1/4 xl:w-[75vw] 2xl:w-[50vw] opacity-80 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1831 605"
                fill="none"
                className="w-full h-auto xl:w-[1831px] lg:h-[540px] 2xl:h-[605px]"
              >
                <path
                  d="M-1123 588.5L828.157 560C999.99 560 986.873 286.689 820.287 286.689H665.506C502.856 286.689 505.478 16 665.506 16H999.99C1045.9 16 1070.17 50.0819 1070.17 97.2723V468.896C1070.17 522.641 1070.17 560 1137.06 560H1831"
                  stroke="url(#ops_paint0_linear_desktop_sl)"
                  strokeWidth="28"
                />
                <defs>
                  <linearGradient
                    id="ops_paint0_linear_desktop_sl"
                    x1="544.501"
                    y1="288"
                    x2="1831"
                    y2="288"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C175FC" />
                    <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* <Image
              src="/assets/lines/operations/banner-line.svg"
              alt="line"
              width={600}
              height={600}
              className="absolute -left-[44%] lg:-left-[40%] lg:top-[25%] w-contain h-auto 2xl:scale-150 z-0 hidden md:block"
              draggable={false}
            /> */}
          </div>
        </div>
        <Image
          src="/assets/lines/operations/banner-line.svg"
          alt="line"
          width={600}
          height={600}
          className="absolute bottom-4 -left-28 md:bottom-10 md:-left-50 lg:bottom-16  2xl:bottom-80  lg:-left-85 2xl:-left-44   lg:h-[380px] 2xl:h-[480px] lg:w-fit z-0 object-contain pointer-events-none scale-150 lg:scale-100 md:hidden"
          draggable={false}
        />
      </section>
    </section>
  );
}
