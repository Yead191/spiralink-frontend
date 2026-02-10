import { Card } from "antd";
import { Asterisk, BadgeCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const LimitedDataLoggin = () => {
  return (
    <div className=" relative">
      <div className="container flex flex-col md:flex-row items-center gap-20 lg:gap-32  py-8 lg:pb-16 pt-40 relative">
        {/* Right Side Content */}
        <div className="w-full ">
          <div className="relative">
            <h1 className="section-title leading-[1.1] relative z-10">
              Conditional and <br /> purpose-limited data <br /> logging (GDPR &
              HIPAA)
            </h1>
            <p className="section-subtitle whitespace-nowrap!">
              Conversations are not logged indiscriminately.
            </p>
            <Image
              src={"/assets/bg/security/logger-line.svg"}
              alt="line"
              width={600}
              height={600}
              className="absolute -right-40 -top-12 lg:right-[10%] 2xl:-right-[15%] lg:-top-[150px] 2xl:-top-[110px] w-contain h-auto lg:scale-150 z-0"
              draggable={false}
            />
          </div>

          <div className="mt-5 grid lg:grid-cols-2  gap-10 xl:gap-20 md:w-3/5 xl:w-full">
            <div className="">
              <p className="text-xl text-primary font-bold mb-7">
                When logging is enabled:
              </p>
              <ul className="flex flex-col gap-4 text-lg">
                <li className="flex items-center gap-2 ">
                  <BadgeCheck className="text-primary" /> The purpose of logging
                  is defined in advance
                </li>
                <li className="flex items-center gap-2 ">
                  <BadgeCheck className="text-primary" />
                  The scope of stored data is limited
                </li>
                <li className="flex items-center gap-2 ">
                  <BadgeCheck className="text-primary" />
                  Logging starts only after required disclosures and consent
                </li>
              </ul>
              <p className="section-subtitle mt-7">
                This supports data minimization and purpose limitation.
              </p>
            </div>

            <div className="">
              <p className="text-xl text-primary font-bold mb-7">
                If logging is not permitted:
              </p>
              <ul className="flex flex-col gap-4 text-lg">
                <li className="flex items-center gap-2 ">
                  <BadgeCheck className="text-primary" /> Data is used only in
                  real time to resolve the interaction
                </li>
                <li className="flex items-center gap-2 ">
                  <BadgeCheck className="text-primary" />
                  Conversation content is not stored
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src={"/assets/bg/security/logger-line.svg"}
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-0 right-0 hidden md:block  md:bottom-46  lg:top-18 xl:-right-92 xl:top-3/8 lg:right-0 2xl:top-10 2xl:right-32 w-contain h-auto md:scale-120 2xl:scale-150 z-0"
        draggable={false}
      /> */}
    </div>
  );
};

export default LimitedDataLoggin;
