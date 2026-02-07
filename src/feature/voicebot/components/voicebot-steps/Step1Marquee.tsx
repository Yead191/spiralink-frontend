import React from "react";
import Marquee from "react-fast-marquee";
import { step1MarqueeTags } from "@/constants/voicebotData";

export default function Step1Marquee() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-10 overflow-hidden">
      {/* Desktop View: Static Asymmetrical Grid */}
      <div className="hidden lg:flex flex-wrap gap-6 w-full max-w-3xl relative">
        <TagItem item={step1MarqueeTags[0]} />
        <TagItem item={step1MarqueeTags[1]} />
        <TagItem item={step1MarqueeTags[2]} />
        <TagItem item={step1MarqueeTags[3]} />
        <TagItem item={step1MarqueeTags[4]} />
        <TagItem item={step1MarqueeTags[5]} />
      </div>

      {/* Mobile View: Dual Row Marquee */}
      <div className="lg:hidden flex flex-col gap-6 w-full">
        <Marquee speed={40} gradient={false} pauseOnHover>
          <div className="flex gap-4 pr-4">
            {step1MarqueeTags.slice(0, 3).map((item, idx) => (
              <TagItem key={idx} item={item} />
            ))}
          </div>
        </Marquee>
        <Marquee speed={35} gradient={false} direction="right" pauseOnHover>
          <div className="flex gap-4 pr-4">
            {step1MarqueeTags.slice(3, 6).map((item, idx) => (
              <TagItem key={idx} item={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

function TagItem({ item }: { item: any }) {
  const Icon = item.icon;
  return (
    <div
      style={{
        background:
          "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
        backdropFilter: "blur(45px)",
      }}
      className="flex items-center gap-3 border border-white/5 px-6 py-4 rounded-full whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-primary/40 transition-all duration-500 group relative overflow-hidden w-fit"
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Icon className="text-primary text-2xl group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all duration-300" />
      <span className="text-white/90 font-medium text-lg lg:text-xl group-hover:text-white transition-colors duration-300">
        {item.label}
      </span>
    </div>
  );
}
