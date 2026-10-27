"use client";

import Image from "next/image";
import { useState } from "react";

const PARTNER_LOGOS = [
  { file: "CAOK.jpeg", label: "Conservation Alliance of Kenya" },
  { file: "CGA.jpeg", label: "Cereal Growers Association" },
  { file: "FAO.jpeg", label: "Food and Agriculture Organization" },
  { file: "Image (3).jpeg", label: "" },
  { file: "Image (4).jpeg", label: "" },
  { file: "Image (5).jpeg", label: "" },
  { file: "Image 1 (1).jpeg", label: "" },
  { file: "Image 1 (2).jpeg", label: "" },
  { file: "Image 1.jpeg", label: "" },
  { file: "Image 11.jpeg", label: "" },
  { file: "Image 14.jpeg", label: "" },
  { file: "Image 15.jpeg", label: "" },
  { file: "Image 18.jpeg", label: "" },
  { file: "Image 19.jpeg", label: "" },
  { file: "Image 2.jpeg", label: "" },
  { file: "Image 20.jpeg", label: "" },
  { file: "Image 4.jpeg", label: "" },
  { file: "Image 5.jpeg", label: "" },
  { file: "Image.jpeg", label: "" },
  { file: "images.jpeg", label: "" },
  { file: "SKWT.png", label: "Save Kenya Water Towers" },
];

function PartnerLogoGroup({
  logos,
  hidden = false,
  vertical = false,
}: {
  logos: typeof PARTNER_LOGOS;
  hidden?: boolean;
  vertical?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center gap-3 px-2 ${
        vertical ? "w-full flex-col" : ""
      }`}
      aria-hidden={hidden || undefined}
    >
      {logos.map((logo) => (
        <div
          key={logo.file}
          className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ${
            vertical
              ? "h-40 w-full sm:h-48"
              : "h-40 w-56 sm:h-48 sm:w-72 lg:h-56 lg:w-80"
          }`}
        >
          <Image
            src={`/logo/partners%20logo/${encodeURIComponent(logo.file)}`}
            alt={logo.label}
            fill
            sizes="(min-width: 1024px) 320px, 288px"
            className="object-contain p-1"
          />
        </div>
      ))}
    </div>
  );
}

export default function PartnerLogoSlideshow({
  direction = "left",
}: {
  direction?: "left" | "right" | "up" | "down";
}) {
  const [isPaused, setIsPaused] = useState(false);
  const isVertical = direction === "up" || direction === "down";
  const start = {
    left: "translate3d(0, 0, 0)",
    right: "translate3d(-50%, 0, 0)",
    up: "translate3d(0, 0, 0)",
    down: "translate3d(0, -50%, 0)",
  }[direction];
  const end = {
    left: "translate3d(-50%, 0, 0)",
    right: "translate3d(0, 0, 0)",
    up: "translate3d(0, -50%, 0)",
    down: "translate3d(0, 0, 0)",
  }[direction];
  const animationName = `partner-logo-scroll-${direction}`;

  return (
    <div className={`mt-10 overflow-hidden rounded-2xl bg-white py-3 ${isVertical ? "h-[28rem]" : ""}`}>
      <div className={`overflow-hidden ${isVertical ? "h-full" : ""}`}>
        <div
          className={`partner-logo-track flex ${isVertical ? "h-max w-full flex-col" : "w-max"} ${isPaused ? "is-paused" : ""}`}
        >
          <PartnerLogoGroup logos={PARTNER_LOGOS} vertical={isVertical} />
          <PartnerLogoGroup logos={PARTNER_LOGOS} vertical={isVertical} hidden />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-pressed={isPaused}
          aria-label={isPaused ? "Resume partner logo slideshow" : "Pause partner logo slideshow"}
          title={isPaused ? "Resume slideshow" : "Pause slideshow"}
          className="rounded-full px-2 py-1 text-xs text-ink-soft hover:bg-mist-100"
        >
          {isPaused ? ">" : "||"}
        </button>
      </div>

      <style>{`
        .partner-logo-track {
          animation: ${animationName} 36s linear infinite;
          will-change: transform;
        }

        .partner-logo-track.is-paused {
          animation-play-state: paused;
        }

        @keyframes ${animationName} {
          from { transform: ${start}; }
          to { transform: ${end}; }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-logo-track {
            animation: none;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
