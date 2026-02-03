import React from "react";
import HomeBanner from "./components/HomeBanner";
import HumanlikeQuality from "./components/HumanlikeQuality";

export default function HomePage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/home/home_bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen"
    >
      <HomeBanner />
      <HumanlikeQuality />
    </section>
  );
}
