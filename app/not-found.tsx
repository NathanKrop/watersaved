import Link from "next/link";
import { ContourLines } from "@/components/contour-lines";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 pt-24 pb-24 text-center">
      <ContourLines className="mx-auto w-40 h-10 text-forest-500" />
      <h1 className="mt-6 font-display text-3xl text-forest-900">This trail doesn&apos;t lead anywhere yet.</h1>
      <p className="mt-3 text-ink-soft">The page you&apos;re looking for may have moved or doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block text-sm text-forest-500 underline underline-offset-4">
        Back to the homepage
      </Link>
    </section>
  );
}
