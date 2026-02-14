import React from "react";
import { Asterisk, BadgeCheck, CheckCircle2 } from "lucide-react";
import { productCardsData, CardContent } from "./productData";
import Image from "next/image";

const PointList = ({
  points,
  subheader,
}: {
  points?: string[];
  subheader?: string;
}) => (
  <div className="space-y-4">
    {subheader && (
      <h4 className="text-primary text-xl lg:text-2xl font-medium">
        {subheader}
      </h4>
    )}
    <div className="space-y-3">
      {points?.map((point) => (
        <div key={point} className="flex gap-3 items-center">
          <BadgeCheck className="w-6 h-6 text-purple-500 shrink-0" />
          <span className="text-white text-lg lg:text-xl leading-relaxed font-medium">
            {point}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Section = ({
  section,
}: {
  section?: NonNullable<CardContent["leftSection"]>;
}) => {
  if (!section) return null;
  return (
    <div className="flex flex-col gap-4">
      {section.asterisk && (
        <Asterisk className="w-8 h-8 text-purple-400 mb-2" />
      )}
      {section.header && (
        <h4 className="text-primary text-xl lg:text-2xl font-medium leading-snug">
          {section.header}
        </h4>
      )}
      {section.description && (
        <p className="text-white/65 text-[16px] lg:text-lg leading-relaxed max-w-md">
          {section.description}
        </p>
      )}
      <PointList points={section.points} subheader={section.subheader} />
    </div>
  );
};

export default function ProductCards() {
  const { cards } = productCardsData;

  return (
    <section className="container mx-auto my-8 lg:my-16 bg-transparent mb-16 lg:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {cards?.map((card) => (
          <div
            key={card.id}
            className={`
                relative z-10
                border border-[#999999]/15
                rounded-[24px]
                text-white
                p-8 md:p-10
                flex flex-col
                ${card.isLarge ? "md:col-span-2" : "md:col-span-1"}
              `}
            style={{
              background:
                "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
              backdropFilter: "blur(45px)",
            }}
          >
            {/* Title Section */}
            <h2
              className={`
                font-semibold lg:font-bold leading-tight mb-8 
                ${card.isLarge ? "text-[28px] md:text-4xl max-w-2xl" : "text-[28px] lg:text-4xl"}
              `}
            >
              {Array.isArray(card.title)
                ? card.title.map((line, i) => <div key={i}>{line}</div>)
                : card.title}
            </h2>

            {/* Description (for normal cards) */}
            {card.description && (
              <p className="section-subtitle lg:text-lg! mb-8!">
                {card.description}
              </p>
            )}

            {/* Content Section */}
            {card.isLarge ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-auto">
                <Section section={card.leftSection} />
                <Section section={card.rightSection} />
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <PointList points={card.points} subheader={card.subheader} />

                {card.footer && (
                  <div className="mt-8 pt-8">
                    <p className="section-subtitle text-[16px]!">
                      {card.footer}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <Image
          src="/assets/lines/24-7/line-left.png"
          alt="operations"
          width={200}
          height={200}
          draggable={false}
          className="absolute left-0 top-[40%] lg:-left-[25%] w-fit h-fit scale-150 z-0 object-contain hidden lg:block"
        />
        <Image
          src="/assets/lines/24-7/line-right.png"
          alt="operations"
          width={200}
          height={200}
          draggable={false}
          className="absolute right-0 top-[10%] lg:-right-[25.8%] w-fit h-fit scale-150 z-0 object-contain hidden lg:block"
        />
      </div>
    </section>
  );
}
