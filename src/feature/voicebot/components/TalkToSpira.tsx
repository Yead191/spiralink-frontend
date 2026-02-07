import PrimaryButton from "@/shared/PrimaryButton";
import Image from "next/image";
import React from "react";
import { LuAudioLines, LuMoveUpRight } from "react-icons/lu";

export default function TalkToSpira() {
  return (
    <div className="container relative py-8  lg:py-16 overflow-hidden">
      {/* Background/Top Image Section */}
      <div className="flex justify-center items-center opacity-60">
        <Image
          src="/assets/bg/Spiralink.png"
          alt="line"
          width={1400}
          height={800}
          draggable={false}
          className="w-full h-fit object-contain"
        />
      </div>

      {/* Card Section - Positioned to overlap/follow the image */}
      <div className="mt-[-10%] md:mt-[-40px] lg:mt-[-170px] flex justify-center px-4 relative z-10 ">
        <div
          className="w-full max-w-[1100px] bg-[#050507] rounded-[40px] md:rounded-[60px] p-4 md:p-16 lg:p-24 border-12 border-[#0e0e12] flex flex-col items-center text-center shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at top, rgba(131, 58, 180, 0.05), transparent 70%), #050505",
            backdropFilter: "blur(45px)",
          }}
        >
          {/* Decorative element */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#833ab4]/10 blur-[100px] rounded-full"></div>

          {/* Assistant Icon Section */}
          <div className="relative mb-10 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
            {/* Outer soft glow rings */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-125"></div>

            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#22D3EE] via-[#8B5CF6] to-[#D946EF] p-[5px] shadow-[0_0_60px_rgba(139,92,246,0.25)]">
              <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
                {/* Inner Purple Circle */}
                <div className="w-[72%] h-[72%] rounded-full bg-linear-to-br from-[#4D4AB5] to-[#3B3891] flex items-center justify-center shadow-inner">
                  <LuAudioLines size={40} className="text-white md:scale-125" />
                </div>
              </div>
            </div>

            {/* Inner small pulses */}
            <div className="absolute inset-0 border border-primary/30 rounded-full animate-[ping_3s_linear_infinite] opacity-30"></div>
          </div>

          {/* Text Content */}
          <h2 className="text-xl md:text-3xl lg:text-4xl text-white/90 font-medium mb-12 max-w-4xl leading-snug md:leading-relaxed">
            Hi there, I’m Spira, Available to answer your queries. Please ask
            via chat or voice what you need to now about my owner’s services.
          </h2>

          {/* Interactive Button */}
          <div className="relative group">
            <PrimaryButton
              label="Talk to Spira AI agent"
              className="bg-linear-to-b from-[#7D3BB7] to-[#2C4C91] border-2! border-[#C175FC]! text-white!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
