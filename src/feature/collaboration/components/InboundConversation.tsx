import { Asterisk } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function InboundConversation() {
  return (
    <section className="py-8 lg:py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image Placeholder */}
        <div
          style={{
            backgroundImage: "url('/assets/bg/collaboration/inbound-bg.svg')",
            backgroundSize: "contain",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full lg:w-2/4 flex justify-center lg:justify-end overflow-x-visible h-[600px] lg:h-[500px] 2xl:h-[750px]"
        >
          <Image
            draggable={false}
            src={"/assets/images/collaboration/phone.png"}
            alt="inbound-conversation"
            width={1200}
            height={900}
            className="w-fit h-full object-contain"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-3/4 lg:pl-10">
          <h2 className="text-[32px] lg:text-[40px] 2xl:text-6xl font-semibold tracking-tight mb-8 leading-[0.9]">
            One inbound <br />
            conversation, shared <br />
            between AI and humans
          </h2>

          <div className="space-y-4 2xl:space-y-8 section-subtitle leading-relaxed max-w-xl">
            <p>
              Every inbound call starts with the AI voice agent handling the
              conversation end to end. It listens, understands intent, asks
              follow-up questions, and works toward resolution.
            </p>

            <p>
              At predefined moments, the system evaluates whether the
              conversation should remain with AI or be passed to a human agent.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Asterisk className="w-6 h-6 text-purple-400 shrink-0" />
                <span className="text-xl md:text-2xl font-medium text-purple-400">
                  There is no restart.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Asterisk className="w-6 h-6 text-purple-400 shrink-0" />
                <span className="text-xl md:text-2xl font-medium text-purple-400">
                  There is no second system.
                </span>
              </div>
            </div>

            <p>
              The conversation simply continues with the right party in control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
