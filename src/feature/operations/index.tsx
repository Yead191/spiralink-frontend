import React from "react";
import OperationsBanner from "./components/OperationsBanner";
import OppositeWay from "./components/OppositeWay";

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
      <OppositeWay />
    </section>
  );
}
