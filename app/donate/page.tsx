import Image from "next/image";
import { DonateWidget } from "@/components/donate-widget";
import { projects } from "@/lib/data/projects";
import Link from "next/link";

export const metadata = { title: "Donate" };

export default function DonatePage() {
  const activeProjects = projects.filter((p) => p.status === "active");

  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/new/pexels-vivian-venhasque-484321734-30096041.jpg"
          alt="Restoration work in the field"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Donate</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-lg text-balance">
            Give where the need is greatest, or pick a forest.
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-20 grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <p className="mt-5 text-ink-soft max-w-lg">
            Unrestricted gifts let us move fast when a fence breaks or a spring needs urgent
            protection. If you&apos;d rather support one specific site, choose it below.
          </p>

          <ul className="mt-8 divide-y divide-line border-t border-line">
            {activeProjects.map((project) => (
              <li key={project.slug} className="flex items-center justify-between gap-4 py-4">
                <div>
                  <p className="font-medium text-forest-900">{project.name}</p>
                  <p className="text-xs text-ink-soft">
                    {Math.round((project.donationRaisedKes / project.donationGoalKes) * 100)}% of goal raised
                  </p>
                </div>
                <Link
                  href={`/donate/${project.slug}`}
                  className="text-sm text-forest-500 underline underline-offset-4 whitespace-nowrap"
                >
                  Give to this site →
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-ink-soft max-w-lg">
            Prefer to give in-kind — seedlings, fencing wire, field equipment — or as a corporate
            gift?{" "}
            <Link href="/contact" className="underline underline-offset-2">
              Get in touch
            </Link>
            .
          </p>
        </div>

        <DonateWidget />
      </section>
    </>
  );
}

