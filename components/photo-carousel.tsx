"use client";

import Image from "next/image";
import { useRef } from "react";

export type CarouselPhoto = { src: string; alt: string };

export function PhotoCarousel({
  photos,
  label = "Field photographs",
}: {
  photos: readonly CarouselPhoto[];
  label?: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const element = track.current;
    if (!element) return;
    const firstCard = element.querySelector<HTMLElement>("[data-photo-card]");
    element.scrollBy({
      left: direction * ((firstCard?.offsetWidth ?? 300) + 16),
      behavior: "smooth",
    });
  }

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-ink-soft">{photos.length} moments from the field</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label.toLowerCase()}`} className="rounded-full border border-line bg-paper px-4 py-2 text-forest-900 transition hover:bg-forest-900 hover:text-paper">←</button>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${label.toLowerCase()}`} className="rounded-full border border-line bg-paper px-4 py-2 text-forest-900 transition hover:bg-forest-900 hover:text-paper">→</button>
        </div>
      </div>
      <div ref={track} aria-label={label} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3">
        {photos.map((photo) => (
          <figure key={photo.src} data-photo-card className="relative aspect-[4/3] w-[82vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-mist-100 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33.333%_-_0.75rem)]">
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 82vw" className="object-cover transition duration-700 hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-900/80 to-transparent p-4 pt-12 text-sm text-paper">{photo.alt}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
