import Image from "next/image";
import { StoryCard } from "@/components/story-card";
import { stories } from "@/lib/data/content";

export const metadata = { title: "Stories" };

export default function StoriesPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/new/pexels-rudi-chandra-1981866-37555098.jpg"
          alt="Field dispatches from the forest"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Stories</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Field dispatches, not press releases.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            Longer, slower pieces from the people doing the work — one forest, one nursery, one
            patrol at a time.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-20">
        <div className="mt-4 grid gap-12 sm:grid-cols-2">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>
    </>
  );
}

