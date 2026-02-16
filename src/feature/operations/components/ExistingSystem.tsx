import React from "react";
import Marquee from "react-fast-marquee";
import { Sparkle } from "lucide-react";

export default function ExistingSystem() {
  const marqueeItems = [
    "There is no separate AI environment to manage.",
    "No duplicate workflows.",
    "No manual syncing between tools.",
  ];

  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/operations/existing-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-24 my-8 lg:my-16 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col max-w-[700px] mx-auto  text-center mb-16 ">
          <h1 className="section-title ">
            Connected to your existing systems, not running in parallel
          </h1>
          <p className="section-subtitle">
            The voice agent operates as part of your current support stack. It
            connects to the systems your agents already rely on to resolve
            inbound calls.
          </p>
        </div>
      </div>
      <div className="relative border-t border-[#ffffff1a] lg:py-12  overflow-hidden">
        <Marquee
          speed={80}
          gradient={false}
          pauseOnHover={false}
          autoFill
          className="overflow-hidden"
        >
          {marqueeItems?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mx-8 whitespace-nowrap pb-2"
            >
              <Sparkle className="w-8 h-8 text-[#BC72F8] fill-[#BC72F8]" />
              <span className="text-xl lg:text-4xl font-semibold text-white tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
