"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import type { CarouselPhoto } from "@/components/photo-carousel";

export function HomePhotoCarousel({
  photos,
  label,
  sizes,
  className,
  children,
  eagerFirst = false,
}: {
  photos: readonly CarouselPhoto[];
  label: string;
  sizes: string;
  className: string;
  children: ReactNode;
  eagerFirst?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isStopped = isPaused || isHovered || isFocused;

  useEffect(() => {
    if (photos.length < 2 || isStopped || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isStopped, photos.length]);

  function move(direction: -1 | 1) {
    setActiveIndex((index) => (index + direction + photos.length) % photos.length);
  }

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
    >
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className="relative h-full w-full shrink-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${photos.length}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={sizes}
              loading={eagerFirst && index === 0 ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {children}

      {photos.length > 1 && (
        <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={`Previous ${label.toLowerCase()}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/50 bg-forest-900/55 text-paper backdrop-blur transition hover:bg-forest-900"
          >
            ←
          </button>
          <span className="rounded-full bg-forest-900/55 px-3 py-2 text-xs tabular-nums text-paper backdrop-blur" aria-hidden="true">
            {activeIndex + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? `Play ${label.toLowerCase()}` : `Pause ${label.toLowerCase()}`}
            aria-pressed={isPaused}
            className="rounded-full border border-paper/50 bg-forest-900/55 px-3 py-2 text-xs text-paper backdrop-blur transition hover:bg-forest-900"
          >
            {isPaused ? "Play" : "Pause"}
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={`Next ${label.toLowerCase()}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/50 bg-forest-900/55 text-paper backdrop-blur transition hover:bg-forest-900"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
