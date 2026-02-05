import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MARQUEE_IMAGES = [
  "/assets/images/operations/opposite/img1.jpg",
  "/assets/images/operations/opposite/img2.png",
  "/assets/images/operations/opposite/img3.png",
  //   "/assets/images/operations/opposite/img4.png",
];

export default function OppositeWay() {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden mt-12 lg:mt-0">
      <div className="container mb-12 lg:mb-20">
        <div className="flex flex-col lg:flex-row  justify-center items-center gap-8">
          <div className="lg:max-w-[800px] max-w-full mx-auto text-center lg:text-start ">
            <h2 className="text-5xl lg:text-[100px] font-semibold leading-[0.9] tracking-tighter">
              SpiraLink works <br />
              the opposite <br />
              way.
            </h2>
          </div>
          <div className="max-w-[400px] mx-auto text-center lg:text-start lg:absolute lg:top-65 lg:right-2/5 lg:translate-x-1/2 ">
            <p className="section-subtitle">
              Our voice AI is designed to integrate directly into existing
              customer support operations, without disrupting how teams already
              work.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative pt-8 lg:pt-16">
        <Marquee
          speed={50}
          pauseOnHover={false}
          gradient={false}
          className="overflow-visible"
        >
          {MARQUEE_IMAGES.map((img, index) => (
            <div
              key={index}
              className="mx-4 h-[300px] lg:h-[500px]  relative rounded-4xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`Opposite way ${index + 1}`}
                width={1000}
                height={1000}
                className="object-contain w-fit h-full"
                draggable={false}
              />
            </div>
          ))}
          {/* Duplicate for seamless effect if needed, though react-fast-marquee handles it */}
        </Marquee>
      </div>
    </section>
  );
}
