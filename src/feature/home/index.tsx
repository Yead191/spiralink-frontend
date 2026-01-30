import React from "react";
import Banner from "./sections/banner/Banner";

export default async function HomePage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/layout-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Banner />
    </section>
  );
}
