import type { PageDocument } from "@/lib/types";
import type { CarouselPhoto } from "./photo-carousel";
import { PhotoCarousel } from "./photo-carousel";

export function SanityPageContent({
  page,
  fallbackPhotos,
  galleryTitle,
  galleryLabel,
  includeCopy = true,
  includeGallery = true,
}: {
  page?: PageDocument;
  fallbackPhotos?: readonly CarouselPhoto[];
  galleryTitle?: string;
  galleryLabel?: string;
  includeCopy?: boolean;
  includeGallery?: boolean;
}) {
  const body = page?.body?.filter(Boolean) ?? [];
  const gallery = page?.gallery?.map((src, index) => ({
    src,
    alt: `${page?.title ?? "Page"} photo ${index + 1}`,
  }));

  return (
    <>
      {includeCopy && (page?.summary || body.length > 0) && (
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="max-w-3xl space-y-4 text-ink-soft">
            {page?.summary && <p className="text-lg leading-relaxed">{page.summary}</p>}
            {body.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </section>
      )}
      {includeGallery && (gallery?.length || fallbackPhotos?.length) && (
        <section className="border-t border-line bg-mist-100">
          <div className="mx-auto max-w-6xl px-5 py-12">
            {galleryTitle && <h2 className="font-display text-3xl text-forest-900">{galleryTitle}</h2>}
            <PhotoCarousel
              photos={gallery?.length ? gallery : fallbackPhotos ?? []}
              label={galleryLabel}
            />
          </div>
        </section>
      )}
    </>
  );
}
