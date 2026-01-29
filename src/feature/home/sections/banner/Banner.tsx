import React from "react";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

export default function Banner() {
  return (
    <div className="relative min-h-screen pt-24 lg:pt-44 pb-12 overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/home/banner_bg.png')",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <BannerLeft />
          {/* Right Column - Form */}
          <BannerRight />
        </div>
      </div>
    </div>
  );
}
