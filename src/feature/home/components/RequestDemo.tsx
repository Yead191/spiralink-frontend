import React from "react";
import {
  MoveUpRight,
  Zap,
  Map,
  AudioLines,
  Network,
  Smartphone,
} from "lucide-react";
import BadgeHero from "@/shared/BadgeHero";
import PrimaryButton from "@/shared/PrimaryButton";

export default function RequestDemo() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/home/request-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-24  text-white overflow-hidden relative"
    >
      <div className="container flex flex-col  relative z-10">
        {/* Header Section */}
        <div className="flex flex-col justify-between items-start gap-8">
          <div className="relative">
            {/* Tag */}
            <BadgeHero
              label="Request a demo"
              icon={<span className="text-lg">🔥</span>}
            />
            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-[6rem] leading-[1.2] font-semibold tracking-tight mt-8">
              Request your <br />
              <span className="text-[#C175FC]">FREE</span> tailored demo
            </h2>
            <p className="text-[#FFFFFF]/80 text-xl leading-relaxed hidden lg:block absolute top-24 -right-8 max-w-[250px]">
              Let us manufacture a custom demo using your script and your
              workflow.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:max-w-xs">
            <p className="text-[#FFFFFF]/80 text-xl leading-relaxed lg:hidden">
              Let us manufacture a custom demo using your script and your
              workflow.
            </p>

            {/* CTA Button Desktop */}
            <PrimaryButton
              label="Request free tailored demo today"
              className="text-nowrap w-fit bg-linear-to-r from-[#7D3BB7] to-[#2C4C91] text-white border-2 border-[#6C35BE]"
            />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex lg:grid  md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-32 pt-16">
          <FeatureCard
            icon={<Map className="w-8 h-8 text-white" />}
            title="Discovery"
            description="Map your operations"
          />
          <FeatureCard
            icon={<AudioLines className="w-8 h-8 text-white" />}
            title="Manufacture"
            description="Build voicebot in your language / accent"
          />
          {/* Active/Highlighted Card */}
          <div
            style={{
              backdropFilter: "blur(45px)",
              boxShadow: "-9px 11px 48px 0px #BC72F873",
            }}
            className="bg-[#050507] min-w-72 md:min-w-auto border border-[#C175FC]/60 rounded-[32px] p-8 flex flex-col items-center text-center gap-6  relative group"
          >
            <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
              <Network className="w-10 h-10 text-[#A855F7]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Integration</h3>
              <p className="text-gray-500 text-sm">
                Link to systems for real workflow.
              </p>
            </div>
          </div>

          <FeatureCard
            icon={<Smartphone className="w-8 h-8 text-white" />}
            title="Live access"
            description="Test with team & analytics"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(304.65deg, rgba(1, 4, 3, 0.05) 13.81%, rgba(1, 4, 3, 0.0332332) 33.55%, rgba(1, 4, 3, 0.0125) 81.13%)",
        backdropFilter: "blur(45px)",
      }}
      className="border border-[#FFFFFF]/20 rounded-[32px] p-8 flex flex-col items-center text-center gap-6 hover:border-[#333] transition-colors group min-w-72 md:min-w-auto w-full"
    >
      <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300 text-gray-300">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
