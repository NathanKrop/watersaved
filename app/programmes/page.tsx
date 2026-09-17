import Image from "next/image";
import { ProgrammeCard } from "@/components/programme-card";
import { programmes } from "@/lib/data/programmes";

export const metadata = { title: "Programmes" };

export default function ProgrammesPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/IMG_20260617_173643.jpg"
          alt="Agroforestry and reforestation work"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16">
          <p className="text-sm text-forest-300">Programmes</p>
          <h1 className="mt-2 font-display text-4xl text-mist-50 max-w-2xl text-balance">
            Six ways we protect a catchment.
          </h1>
          <p className="mt-5 text-forest-300 max-w-2xl">
            Every project we run is built from one or more of these. None of them works alone — a
            protected spring needs a fenced buffer, a fenced buffer needs a community that sees the
            point of it.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-20">
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </section>
    </>
  );
}
