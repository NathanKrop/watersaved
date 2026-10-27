"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import type { CarouselPhoto } from "@/components/photo-carousel";

type SlideDirection = "left" | "right" | "up" | "down";

export function HomePhotoCarousel({
  photos,
  label,
  sizes,
  className,
  children,
  direction = "left",
  eagerFirst = false,
}: {
  photos: readonly CarouselPhoto[];
  label: string;
  sizes: string;
  className: string;
  children: ReactNode;
  direction?: SlideDirection;
  eagerFirst?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isStopped = isPaused || isFocused;

  useEffect(() => {
    if (photos.length < 2 || isStopped || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 3000);

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
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {photos.map((photo, index) => {
          const relativeIndex = (index - activeIndex + photos.length) % photos.length;
          const offset = relativeIndex > photos.length / 2 ? relativeIndex - photos.length : relativeIndex;
          const horizontalOffset = direction === "left" ? offset : -offset;
          const verticalOffset = direction === "up" ? offset : -offset;
          const transform = direction === "left" || direction === "right"
            ? `translateX(${horizontalOffset * 100}%)`
            : `translateY(${verticalOffset * 100}%)`;

          return (
          <div
            key={photo.src}
            className="absolute inset-0 transition-transform duration-500 ease-in-out motion-reduce:transition-none"
            style={{ transform }}
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
          );
        })}
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
