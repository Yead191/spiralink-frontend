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
            {/* Top Left SVG Line */}
            <svg
              className="absolute -left-[44%] lg:-left-[386%] 2xl:-left-[473%] h-[274px] lg:h-[300px]  lg:top-[190px] 2xl:top-[150px] z-0 hidden lg:block pointer-events-none 2xl:scale-150"
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
