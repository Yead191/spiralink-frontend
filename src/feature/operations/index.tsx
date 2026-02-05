import React from "react";
import OperationsBanner from "./components/OperationsBanner";

export default function OperationPageMain() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/operations/operations-bg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen"
    >
      <OperationsBanner />
    </section>
  );
}
