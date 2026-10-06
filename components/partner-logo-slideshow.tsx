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
}: {
  logos: typeof PARTNER_LOGOS;
  hidden?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-2" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <div
          key={logo.file}
          className="relative flex h-32 w-48 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line/70 bg-mist-50 p-2 sm:w-64 lg:w-72"
        >
          <Image
            src={`/logo/partners%20logo/${encodeURIComponent(logo.file)}`}
            alt={logo.label}
            fill
            sizes="(min-width: 1024px) 22vw, 50vw"
            className="object-contain p-2"
          />
        </div>
      ))}
    </div>
  );
}

export default function PartnerLogoSlideshow() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="mt-10 overflow-hidden rounded-2xl bg-white py-3 soft-card">
      <div className="overflow-hidden">
        <div className={`partner-logo-track flex w-max ${isPaused ? "is-paused" : ""}`}>
          <PartnerLogoGroup logos={PARTNER_LOGOS} />
          <PartnerLogoGroup logos={PARTNER_LOGOS} hidden />
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
          animation: partner-logo-scroll 28s linear infinite;
          will-change: transform;
        }

        .partner-logo-track.is-paused {
          animation-play-state: paused;
        }

        @keyframes partner-logo-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
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
