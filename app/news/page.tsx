import Image from "next/image";
import Link from "next/link";
import { newsPosts } from "@/lib/data/content";
import { formatDate } from "@/lib/format";

export const metadata = { title: "News" };

const categoryLabel: Record<string, string> = {
  press: "Press",
  announcement: "Announcement",
  partnership: "Partnership",
  grant: "Grant",
};

export default function NewsPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/MVIMG_20260603_130627.jpg"
          alt="News from the field"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-4xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">News</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Short updates, as they happen.
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 pt-10 pb-20">
        <ul className="mt-4 divide-y divide-line border-t border-line">
        {newsPosts.map((post) => (
          <li key={post.slug} className="py-6">
            <Link href={`/news/${post.slug}`} className="group">
              <div className="flex items-center gap-3 text-xs text-ink-soft">
                <span className="px-2 py-0.5 border border-line">{categoryLabel[post.category]}</span>
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <p className="mt-2 font-display text-xl text-forest-900 group-hover:text-clay-600 transition-colors">
                {post.title}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{post.summary}</p>
            </Link>
          </li>
        ))}
        </ul>
      </section>
    </>
  );
}

