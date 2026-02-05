import Image from "next/image";
import React from "react";

export default function OperationsBanner() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/operations/op-banner.png')",
        backgroundSize: "contain",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:min-h-screen mt-4 mr-4 relative  "
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 pt-36 md:pt-48 ">
        {/* left */}
        <div className="pl-6 2xl:pl-0">
          {/* Glowing Tag */}
          <div
            style={{
              background: "#010403A6",
              backdropFilter: "blur(45px)",
              boxShadow: "-9px 11px 48px 0px #BC72F873",
            }}
            className="inline-flex items-center gap-0.5 lg:gap-2 px-4 py-2 rounded-full border-[1.5px] border-[#6C35BE] "
          >
            <span className="text-gray-300 text-[10px] md:text-sm font-medium tracking-wide">
              Integrated into your operations ⚡
            </span>
          </div>

          <h1 className="section-title my-8">
            Built to fit into how your support team already works.
          </h1>
          <p className="section-subtitle">
            Most voice AI projects fail because they sit next to the operation
            instead of inside it. Teams are forced to adapt their workflows,
            tools, and processes around the technology.
          </p>
        </div>
      </div>
      <Image
        src="/assets/lines/operations/banner-line.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-4 -left-28 md:bottom-10 md:-left-50 lg:bottom-16  2xl:bottom-80  lg:-left-85 2xl:-left-44   lg:h-[380px] 2xl:h-[480px] lg:w-fit z-0 object-contain pointer-events-none scale-150 lg:scale-100"
        draggable={false}
      />
    </section>
  );
}
