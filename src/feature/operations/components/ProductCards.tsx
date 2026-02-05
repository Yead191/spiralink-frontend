import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { productCardsData } from "./productData";

export default function ProductCards() {
  const { cards } = productCardsData;

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={card.id}
                className={`
                  relative
                  border border-gray-500/30
                  rounded-2xl
                  text-white
                  overflow-hidden
                  ${isFirst ? "lg:col-span-3 py-6" : ""}
                `}
                style={{
                  background:
                    "linear-gradient(135deg, #0b0b12 0%, #131325 60%, #1a1a2e 100%)",
                }}
              >
                {/* FIRST CARD (IMAGE STYLE) */}
                {isFirst ? (
                  <div className="flex flex-col lg:flex-row gap-8 p-6 sm:p-8 lg:p-12">
                    {/* Left */}
                    <div className="lg:w-2/3">
                      <h2 className="font-bold leading-tight text-2xl sm:text-3xl lg:text-4xl mb-6">
                        {card.title.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </h2>

                      {card.description && (
                        <p className=" text-sm sm:text-base max-w-xl text-purple-500">
                          {card.description}
                        </p>
                      )}
                    </div>

                    {/* Right */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-2 mb-4 text-purple-400">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Instead, it:
                        </span>
                      </div>

                      <div className="space-y-3">
                        {card.points.map((point) => (
                          <div
                            key={point}
                            className="flex gap-3 items-start"
                          >
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* NORMAL CARDS */
                  <div className="p-6 sm:p-7 lg:p-8 flex flex-col h-full">
                    <h3 className="font-bold text-xl mb-4 leading-snug">
                      {card.title.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </h3>

                    {card.description && (
                      <p className="text-gray-400 text-sm mb-4 text-purple-500">
                        {card.description}
                      </p>
                    )}

                    <div className="space-y-2 flex-1">
                      {card.points.map((point) => (
                        <div
                          key={point}
                          className="flex gap-2 items-start"
                        >
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    {card.note && (
                      <p className="text-gray-400 text-xs italic mt-4">
                        {card.note}
                      </p>
                    )}

                    {card.footer && (
                      <p className="text-gray-400 text-sm mt-4">
                        {card.footer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
