import React from "react";
import VoicebotBanner from "./components/VoicebotBanner";
import VoicebotSteps from "./components/voicebot-steps";
import TalkToSpira from "./components/TalkToSpira";
import ProcessDelivers from "./components/ProcessDelivers";

export default function VoicebotPage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/voicebot/voicebot-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen overflow-hidden "
    >
      <VoicebotBanner />
      <VoicebotSteps />
      <TalkToSpira />
      <ProcessDelivers />
    </section>
  );
}
