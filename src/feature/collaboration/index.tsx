import React from "react";
import CollaborationBanner from "./components/CollaborationBanner";
import InboundConversation from "./components/InboundConversation";
import AIResolution from "./components/AIResolution";
import HumanHandover from "./components/HumanHandover";
import ContextTransfer from "./components/ContextTransfer";

export default function CollaborationPage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/collaboration/collaboration-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen"
    >
      <CollaborationBanner />
      <InboundConversation />
      <AIResolution />
      <HumanHandover />
      <ContextTransfer />
    </section>
  );
}
