import Image from "next/image";
import { events } from "@/lib/data/content";
import { EventCard } from "@/components/event-card";

export const metadata = { title: "Events" };

export default function EventsPage() {
  const upcoming = events.filter((e) => new Date(e.startsAt) >= new Date());
  const past = events.filter((e) => new Date(e.startsAt) < new Date());

  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/IMG_20260617_173639.jpg"
          alt="Community planting day"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-4xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Events</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Planting days, briefings, and forums.
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 pt-10 pb-20">

      <h2 className="mt-12 font-display text-2xl text-forest-900">Upcoming</h2>
      {upcoming.length > 0 ? (
        <div>
          {upcoming.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-ink-soft">Nothing scheduled right now — check back soon.</p>
      )}

      {past.length > 0 && (
        <>
          <h2 className="mt-14 font-display text-2xl text-forest-900">Past</h2>
          <div className="opacity-70">
            {past.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </>
      )}
      </section>
    </>
  );
}
