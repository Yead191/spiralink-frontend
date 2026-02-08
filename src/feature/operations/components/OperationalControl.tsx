import React from "react";
import { Asterisk, BadgeCheck, Sparkle } from "lucide-react";

export default function OperationalControl() {
  const operationsTeamsDefine = [
    "When AI handles calls",
    "What data is accessed and shared",
    "When humans are involved",
    "How escalations work",
  ];

  const noNeedForAgents = [
    "Monitor AI behavior manually",
    "Manage exceptions outside normal processes",
    "Fix broken conversations",
  ];

  const teamsGain = [
    "Faster call resolution without process changes",
    "Easier onboarding for agents",
    "Consistent handling across AI and humans",
    "Fewer operational edge cases",
  ];

  return (
    <section className="py-8 lg:py-16 pb-16 lg:pb-32 ">
      <div className="container">
        <div className="flex flex-col gap-6">
          {/* Top Card */}
          <div
            style={{
              background:
                "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
              backdropFilter: "blur(45px)",
            }}
            className="border border-[#1A1D1C] rounded-[40px] p-8 lg:p-16 flex flex-col lg:flex-row justify-between gap-12"
          >
            <div className="flex-1">
              <h2 className="section-title leading-tight tracking-tight">
                Designed for <br /> operational control
              </h2>
              <div className="space-y-6 mt-12">
                <h4 className="text-[#BC72F8] text-xl font-medium">
                  Operations teams define:
                </h4>
                <div className="space-y-4">
                  {operationsTeamsDefine.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-[#BC72F8]">
                        <BadgeCheck className="w-6 h-6" />
                      </div>
                      <span className="text-white text-lg font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:max-w-md mt-auto">
              <div className="text-[#BC72F8] mb-4">
                <Asterisk className="w-8 h-8 fill-[#BC72F8]" />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Nothing is hardcoded or opaque.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                The system is configured around your support rules, not generic
                assumptions. This ensures AI supports the operation instead of
                overriding it.
              </p>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* No extra workload Card */}
            <div
              style={{
                background:
                  "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                backdropFilter: "blur(45px)",
              }}
              className="border border-[#1A1D1C] rounded-[40px] p-8 lg:p-12 flex flex-col"
            >
              <h2 className="section-title mb-8!">
                No extra workload for your team
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                AI does not introduce new operational overhead.
              </p>

              <div className="mt-auto pt-12 space-y-6">
                <h4 className="text-[#BC72F8] text-xl font-medium">
                  There is no need for agents to:
                </h4>
                <div className="space-y-4 mb-8">
                  {noNeedForAgents.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-[#BC72F8]">
                        <BadgeCheck className="w-6 h-6" />
                      </div>
                      <span className="text-white text-lg font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  The system is designed to run within existing workflows,
                  reducing complexity rather than adding to it.
                </p>
              </div>
            </div>

            {/* Daily Operations Card */}
            <div
              style={{
                background:
                  "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                backdropFilter: "blur(45px)",
              }}
              className="border border-[#1A1D1C] rounded-[40px] p-8 lg:p-12 flex flex-col"
            >
              <h2 className="section-title mb-8!">
                What this means for daily operations
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Integrated AI changes how inbound support scales.
              </p>

              <div className="mt-auto pt-12 space-y-6">
                <h4 className="text-[#BC72F8] text-xl font-medium">
                  Teams gain:
                </h4>
                <div className="space-y-4 mb-8">
                  {teamsGain.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-[#BC72F8]">
                        <BadgeCheck className="w-6 h-6" />
                      </div>
                      <span className="text-white text-lg font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Support leaders maintain visibility and control, while the
                  operation remains stable as volume increases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
