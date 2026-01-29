import Image from "next/image";
import React from "react";

export default async function Banner() {
  return (
    <div
      id="banner"
      style={{
        backgroundImage: "url('/assets/images/home/banner_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-32 md:pt-0  md:min-h-screen flex flex-col items-center justify-end"
    ></div>
  );
}
