import Link from "next/link";
import type { Programme } from "@/lib/types";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Link
      href={`/programmes/${programme.slug}`}
      className="group block border border-line p-6 hover:border-forest-700 hover:bg-forest-900 transition-colors"
    >
      <h3 className="font-display text-xl text-forest-900 group-hover:text-mist-50 transition-colors">
        {programme.name}
      </h3>
      <p className="mt-2 text-sm text-ink-soft group-hover:text-forest-300 transition-colors">
        {programme.summary}
      </p>
      <span className="mt-4 inline-block text-sm text-forest-500 group-hover:text-clay-600 transition-colors">
        Read more
      </span>
    </Link>
  );
}
