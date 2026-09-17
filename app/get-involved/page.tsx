import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Get Involved" };

const tracks = [
  {
    href: "/get-involved/volunteer",
    title: "Volunteer",
    desc: "Join a planting day, a fence-repair crew, or a nursery shift on a Saturday.",
  },
  {
    href: "/get-involved/partner",
    title: "Partner with us",
    desc: "For funders, NGOs, and government agencies working on catchment protection.",
  },
  {
    href: "/get-involved#fundraise",
    title: "Fundraise for us",
    desc: "Run a birthday fundraiser, a school drive, or a community harambee.",
  },
  {
    href: "/events",
    title: "Attend an event",
    desc: "See what's coming up across all six counties.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/IMG_20260617_173723.jpg"
          alt="Volunteers at a community planting day"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Get involved</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            There&apos;s more than one way to help.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            Money matters, but so does time, land access, local knowledge, and a phone number to
            call when a fence line is cut.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 grid gap-px bg-line sm:grid-cols-2">
        {tracks.map((track) => (
          <Link key={track.href} href={track.href} className="group bg-paper p-8 hover:bg-forest-900 transition-colors">
            <p className="font-display text-2xl text-forest-900 group-hover:text-mist-50 transition-colors">
              {track.title}
            </p>
            <p className="mt-2 text-sm text-ink-soft group-hover:text-forest-300 transition-colors">
              {track.desc}
            </p>
          </Link>
        ))}
      </section>

      <section id="fundraise" className="border-t border-line bg-mist-100 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="font-display text-2xl text-forest-900">Fundraise for us</h2>
          <p className="mt-3 text-ink-soft">
            If you&apos;d like to run your own campaign — a birthday fundraiser, a school tree
            drive, a community harambee — we&apos;ll give you a toolkit with our logo, suggested
            copy, and a dedicated project page to point people to.
          </p>
          <Link href="/contact" className="mt-5 inline-block text-sm text-forest-500 underline underline-offset-4">
            Get the fundraising toolkit →
          </Link>
        </div>
      </section>
    </>
  );
}
