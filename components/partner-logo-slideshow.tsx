"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

const LOGOS_PER_SLIDE = 5;

export default function PartnerLogoSlideshow() {
  const totalSlides = Math.ceil(PARTNER_LOGOS.length / LOGOS_PER_SLIDE);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setIsPaused(true);
    }

    if (isPaused || reducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % totalSlides);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const slideStart = currentSlide * LOGOS_PER_SLIDE;
  const visibleLogos = PARTNER_LOGOS.slice(slideStart, slideStart + LOGOS_PER_SLIDE);

  return (
    <div className="mt-10">
      <div className="soft-card overflow-hidden bg-white">
        <div className="grid h-32 grid-cols-5 gap-3 p-3 sm:p-4">
          {visibleLogos.map((logo, index) => (
            <div
              key={`${logo.file}-${currentSlide}-${index}`}
              className="relative flex h-full items-center justify-center overflow-hidden rounded-xl border border-line/70 bg-mist-50 p-2"
            >
              <Image
                src={`/logo/partners%20logo/${encodeURIComponent(logo.file)}`}
                alt={logo.label}
                fill
                sizes="(min-width: 1024px) 15vw, 40vw"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-pressed={isPaused}
          aria-label={isPaused ? "Resume partner logo rotation" : "Pause partner logo rotation"}
          title={isPaused ? "Resume rotation" : "Pause rotation"}
          className="rounded-full px-2 py-1 text-xs text-ink-soft hover:bg-mist-100"
        >
          {isPaused ? ">" : "||"}
        </button>
        {Array.from({ length: totalSlides }, (_, index) => {
          const pageStart = index * LOGOS_PER_SLIDE;
          const isActive = currentSlide === index;

          return (
            <button
              key={`slide-${pageStart}`}
              type="button"
              aria-label={`Show partners ${pageStart + 1} to ${Math.min(pageStart + LOGOS_PER_SLIDE, PARTNER_LOGOS.length)}`}
              onClick={() => setCurrentSlide(index)}
              aria-current={isActive ? "true" : undefined}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                isActive ? "bg-forest-700" : "bg-line"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
