import Image from "next/image";
import React from "react";

interface StepLineProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function StepLine({
  src,
  alt,
  width = 500,
  height = 900,
  className = "",
}: StepLineProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      draggable={false}
      className={`w-fit lg:h-full absolute object-contain ${className} hidden lg:block`}
    />
  );
}
