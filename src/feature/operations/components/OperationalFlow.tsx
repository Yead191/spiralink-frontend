import Image from "next/image";
import React from "react";

export default function OperationalFlow() {
  return (
    <section className="py-8 lg:py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="relative">
          <h2
            className="text-[48px] md:text-5xl leading-[0.9] md:leading-none lg:text-[100px] font-semibold tracking-tight md:tracking-normal relative z-10"
            style={{ letterSpacing: "-6%" }}
          >
            One operational flow for AI and human agents.
          </h2>

          <svg
            className="absolute -right-[44%] lg:-right-[530%] lg:top-[150px] h-[274px] z-0 hidden lg:block pointer-events-none"
            viewBox="0 0 5000 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10H310.876C397.427 10 390.82 147.66 306.912 147.66H228.95C147.024 147.66 148.345 284 228.95 284H397.427C420.551 284 432.774 266.834 432.774 243.065V55.8868C432.774 28.8169 432.774 10 466.469 10H5000"
              stroke="url(#paint0_linear_4712_1646)"
              stroke-width="20"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4712_1646"
                x1="-31"
                y1="147"
                x2="300"
                y2="147"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6C35BE" stop-opacity="0" />
                <stop offset="1" stop-color="#C175FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 pl-12 md:pl-0 relative z-10">
            <p className="text-white/75 text-[16px] lg:text-lg 2xl:text-xl leading-relaxed">
              AI and human agents work inside the same operational structure.
              Calls are routed, handled, and escalated using the same logic and
              rules that already exist within the organization.
            </p>
            <p className="text-white/75 text-[16px] lg:text-lg 2xl:text-xl leading-relaxed">
              When a human agent takes over, they remain inside their familiar
              tools and interfaces. This keeps daily operations consistent and
              predictable.
            </p>
          </div>

          <svg
            className="absolute -left-[44%] lg:-left-[540%] h-[274px] lg:bottom-[115px] 2xl:bottom-[70px] z-0 hidden lg:block pointer-events-none"
            viewBox="-4163 0 5000 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
              stroke="url(#paint0_linear_4784_2849)"
              stroke-width="20"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4784_2849"
                x1="189.215"
                y1="147"
                x2="837"
                y2="147"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C175FC" />
                <stop offset="1" stop-color="#6C35BE" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <svg
        className="absolute bottom-12 -left-28 z-0 object-contain pointer-events-none scale-150 md:hidden"
        width="1616"
        height="699"
        viewBox="0 0 1616 699"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M89.8278 689H364.103C578.61 689 562.236 347.864 354.278 347.864H161.058C-41.9856 347.864 -38.7128 10 161.058 10H578.61C635.921 10 666.215 52.5398 666.215 111.441V575.288C666.215 642.37 666.215 689 749.725 689H1616"
          stroke="url(#paint0_linear_4886_4271)"
          stroke-width="20"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4886_4271"
            x1="10"
            y1="349.5"
            x2="1616"
            y2="349.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C175FC" />
            <stop offset="1" stop-color="#6C35BE" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
