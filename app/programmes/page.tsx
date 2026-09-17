import Image from "next/image";
import Link from "next/link";
import { programmes } from "@/lib/data/programmes";

export const metadata = { title: "Programmes" };

const programmeImages: Record<string, string> = {
  "agroforestry-reforestation": "/img/new/pexels-blitzboy-1106428.jpg",
  "water-source-protection": "/img/new/pexels-eduraw-20927485.jpg",
  "education-awareness": "/img/new/pexels-imsogabriel-31163138.jpg",
  "regenerative-agriculture": "/img/new/pexels-fasevarc-39489237.jpg",
  "gender-intergenerational-equity": "/img/new/pexels-csilla-katus-2159553586-36129199.jpg",
  "wildlife-biodiversity": "/img/new/pexels-franckfrommada-37270569.jpg",
};

export default function ProgrammesPage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/new/pexels-timon-cornelissen-241844481-14078245.jpg"
          alt="Forest canopy and restoration landscape"
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
            Every project we run is built from one or more of these. None of them works alone &mdash; a
            protected spring needs a fenced buffer, a fenced buffer needs a community that sees the
            point of it, and a community needs livelihoods that don&apos;t depend on clearing the forest.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-10 pb-20">
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => {
            const img = programmeImages[programme.slug];
            return (
              <Link
                key={programme.slug}
                href={`/programmes/${programme.slug}`}
                className="group block border border-line hover:border-forest-700 transition-colors overflow-hidden"
              >
                {img && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={img}
                      alt={programme.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-xl text-forest-900 group-hover:text-clay-600 transition-colors">
                    {programme.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {programme.summary}
                  </p>
                  <span className="mt-4 inline-block text-sm text-forest-500 group-hover:text-clay-600 transition-colors">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* How programmes connect */}
        <div className="mt-16 border-t border-line pt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">How they connect</p>
            <h2 className="mt-3 font-display text-3xl text-forest-900">Restoration is more than tree planting.</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Forests hold and regulate water. Vegetation stabilises soils. Communities steward the landscape.
              Livelihoods reduce pressure on forests. Evidence-based policy helps restoration last.
            </p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Each programme is designed to reinforce the others. A community nursery supplies seedlings for
              agroforestry plots. Agroforestry reduces the need to clear forest for farmland. Reduced clearing
              protects water sources. Protected water sources sustain the communities who run the nurseries.
            </p>
          </div>
          <div className="relative aspect-video lg:aspect-auto overflow-hidden">
            <Image
              src="/img/new/pexels-marcelo-mora-203572590-37543995.jpg"
              alt="Agroforestry and community restoration"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

