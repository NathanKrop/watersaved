import { notFound } from "next/navigation";
import Link from "next/link";
import { newsPosts } from "@/lib/data/content";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return newsPosts.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = newsPosts.find((n) => n.slug === slug);
  return { title: post?.title ?? "News" };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = newsPosts.find((n) => n.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 pt-16 pb-20">
      <Link href="/news" className="text-sm text-forest-500 underline underline-offset-4">
        ← All news
      </Link>
      <p className="mt-6 text-sm text-ink-soft">{formatDate(post.publishedAt)}</p>
      <h1 className="mt-2 font-display text-4xl text-forest-900 text-balance">{post.title}</h1>
      <p className="mt-6 text-lg text-ink-soft max-w-[65ch]">{post.summary}</p>
      <p className="mt-6 text-sm text-ink-soft">
        Full write-up coming from the CMS — this placeholder shows the summary the admin dashboard
        editor produces before the full body is filled in.
      </p>
    </article>
  );
}
