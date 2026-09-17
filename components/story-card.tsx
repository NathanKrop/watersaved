import Link from "next/link";
import { PhotoPlaceholder } from "./photo-placeholder";
import { formatDate } from "@/lib/format";
import type { Story } from "@/lib/types";

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`} className="group block">
      <PhotoPlaceholder src={story.image} caption={story.title} tone="clay" aspect="wide" />
      <div className="pt-4">
        <p className="text-xs text-ink-soft">{formatDate(story.publishedAt)}</p>
        <h3 className="mt-1 font-display text-2xl text-forest-900 group-hover:text-clay-600 transition-colors text-balance">
          {story.title}
        </h3>
        <p className="mt-2 text-sm text-ink-soft">{story.dek}</p>
      </div>
    </Link>
  );
}

