import Image from "next/image";
import React from "react";

export default function OperationalFlow() {
  return (
    <section className="py-8 lg:py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="relative ">
          <h1
            style={{
              letterSpacing: "-6%",
            }}
            className="text-[46px] md:text-5xl leading-[0.9] md:leading-none lg:text-[100px] font-semibold tracking-tight md:tracking-normal relative z-10"
          >
            One operational flow for AI and human agents.
          </h1>
          <Image
            src="/assets/lines/home/line-down.svg"
            alt="line"
            width={600}
            height={600}
            className="absolute -right-[44%] lg:-right-[55%] lg:top-[205px] w-contain h-auto lg:scale-150 z-0 hidden md:block"
            draggable={false}
          />
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 pl-4 md:pl-0 relative z-10">
            <p className="section-subtitle">
              AI and human agents work inside the same operational structure.
              Calls are routed, handled, and escalated using the same logic and
              rules that already exist within the organization.
            </p>
            <p className="section-subtitle">
              When a human agent takes over, they remain inside their familiar
              tools and interfaces. This keeps daily operations consistent and
              predictable.
            </p>
          </div>
          <Image
            src="/assets/lines/home/line-up.svg"
            alt="line"
            width={600}
            height={600}
            className="absolute -left-[44%] lg:-left-[55%] lg:bottom-[115px] 2xl:bottom-[155px] w-contain h-auto lg:scale-150 z-0 hidden md:block"
            draggable={false}
          />
        </div>
      </div>
      <Image
        src="/assets/lines/home/line-up.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-10 -left-48  lg:bottom-32 lg:-left-52 2xl:bottom-54 2xl:left-0 h-auto scale-150 z-0 pointer-events-none md:hidden"
        draggable={false}
      />
      <Image
        src="/assets/lines/home/line-down.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-4 -right-40 lg:bottom-40  lg:-right-42 2xl:top-67 2xl:right-0 h-auto 2xl:scale-150 z-0 pointer-events-none hidden md:hidden"
        draggable={false}
      />
    </section>
  );
}
