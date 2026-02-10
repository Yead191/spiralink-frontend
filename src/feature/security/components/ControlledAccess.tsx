import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const glassStyle = {
  backdropFilter: "blur(25px)",
  background:
    "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
};

const logos = [
  "/assets/images/security/secure-logo.png",
  "/assets/images/security/hipaa-logo.png",
  "/assets/images/security/aicpa-logo.png",
];

const ControlledAccess = () => {
  return (
    <div className="container flex flex-col-reverse items-center justify-center md:flex-row  gap-10 xl:gap-28 py-8 lg:py-16 relative">
      {/* Left Side Content */}
      <div className="relative z-20 container grid grid-cols-3 md:grid-cols-1 md:w-3/5 xl:w-1/3 gap-5 xl:gap-10 items-center">
        {logos.map((src, index) => (
          <div
            key={index}
            style={glassStyle}
            className="relative w-full h-20 md:h-32 xl:h-36 p-5 border-3 border-gray-700/30 rounded-xl"
          >
            <Image
              src={src}
              alt="Security Logo"
              fill
              quality={100}
              className="object-contain p-5"
            />
          </div>
        ))}

        {/* Glow */}
        <div
          className="absolute inset-0 -z-10 blur-xl opacity-70 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
          style={{ backgroundColor: "#BC72F873" }}
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full xl:w-1/2 z-20">
        <h1 className="section-title leading-[1.1]">
          Controlled access <br /> to sensitive and <br /> health-related data
        </h1>
        <p className="section-subtitle xl:whitespace-nowrap!">
          The voicebot communicates clearly throughout the interaction.
        </p>

        <div className="mt-5">
          <p className="text-xl text-primary font-bold mb-7">It can only:</p>
          <ul className="flex flex-col gap-4 text-lg">
            <li className="flex items-center gap-2 ">
              <BadgeCheck className="text-primary" /> Access data required for
              the specific request
            </li>
            <li className="flex items-center gap-2 ">
              <BadgeCheck className="text-primary" />
              Retrieve or update information within approved boundaries.
            </li>
            <li className="flex items-center gap-2 ">
              <BadgeCheck className="text-primary" />
              Perform actions explicitly allowed by the organization.
            </li>
          </ul>
          <p className="section-subtitle mt-7">
            For healthcare use cases, access to Protected Health Information
            (PHI) is strictly limited to what is necessary to support the
            interaction, in line with HIPAA’s minimum necessary standard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlledAccess;
