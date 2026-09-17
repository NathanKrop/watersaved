import { formatDateTime } from "@/lib/format";
import type { EventItem } from "@/lib/types";

export function EventCard({ event }: { event: EventItem }) {
  const date = new Date(event.startsAt);
  const day = new Intl.DateTimeFormat("en-KE", { day: "2-digit" }).format(date);
  const month = new Intl.DateTimeFormat("en-KE", { month: "short" }).format(date);

  return (
    <article className="flex gap-5 border-t border-line py-6">
      <div className="shrink-0 w-16 text-center">
        <p className="font-display text-3xl text-forest-900">{day}</p>
        <p className="text-xs uppercase text-ink-soft">{month}</p>
      </div>
      <div>
        <h3 className="font-display text-xl text-forest-900">{event.title}</h3>
        <p className="mt-1 text-sm text-ink-soft">
          {formatDateTime(event.startsAt)} · {event.isVirtual ? "Online" : event.locationText}
        </p>
        <p className="mt-2 text-sm text-ink-soft">{event.description}</p>
      </div>
    </article>
  );
}

