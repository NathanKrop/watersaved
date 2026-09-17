import { ContourLines } from "./contour-lines";
import Image from "next/image";

type PhotoPlaceholderProps = {
  src?: string;
  alt?: string;
  caption: string;
  tone?: "forest" | "clay" | "mist";
  className?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
};

const toneClasses: Record<NonNullable<PhotoPlaceholderProps["tone"]>, string> = {
  forest: "bg-forest-700 text-forest-300",
  clay: "bg-clay-700 text-clay-100",
  mist: "bg-mist-100 text-forest-500",
};

const aspectClasses: Record<NonNullable<PhotoPlaceholderProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * Stands in for real field photography. Replace with next/image once real,
 * licensed photographs from the field team are available — every usage
 * site is a straightforward swap (see component call sites).
 */
export function PhotoPlaceholder({
  src,
  alt = "",
  caption,
  tone = "forest",
  className = "",
  aspect = "video",
}: PhotoPlaceholderProps) {
  return (
    <figure className={`relative overflow-hidden ${aspectClasses[aspect]} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
      ) : (
        <div className={`absolute inset-0 ${toneClasses[tone]}`}>
          <ContourLines className="absolute bottom-0 left-0 w-full h-1/2 opacity-40" />
        </div>
      )}
      <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs font-display italic text-paper/90 bg-gradient-to-t from-black/50 to-transparent">
        {caption}
      </figcaption>
    </figure>
  );
}
