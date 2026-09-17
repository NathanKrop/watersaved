import Image from "next/image";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { TeamMemberCard } from "@/components/team-member-card";
import { CtaLink } from "@/components/cta-link";
import { teamMembers } from "@/lib/data/content";

export const metadata = { title: "Who We Are" };

const timeline = [
  { year: "2010", text: "Founded with a mandate to protect and restore highland forest catchments in Kenya's Rift Valley." },
  { year: "2014", text: "First protected spring catchments logged across our initial counties of operation." },
  { year: "2019", text: "Joined the Kenya Climate Change Working Group (KCCWG)." },
  { year: "2022", text: "Work extended into Baringo, West Pokot and Trans Nzoia counties." },
  { year: "2026", text: "Sixth county added: work begins in the Mau-adjacent highlands of Nakuru." },
];

export default function WhoWeArePage() {
  return (
    <>
      <section className="relative bg-forest-900 text-mist-50 overflow-hidden">
        <Image
          src="/img/MVIMG_20260617_104556.jpg"
          alt="Field team in the forest"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 lg:pt-28 lg:pb-32 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm text-forest-300">Who we are</p>
            <h1 className="mt-2 font-display text-4xl text-mist-50 text-balance">
              A field organisation first, a headquarters second.
            </h1>
            <p className="mt-5 text-forest-300">
              Save Kenya Water Towers was founded in 2010 to protect and restore the forest catchments
              of Kenya&apos;s Rift Valley &mdash; the &quot;water towers&quot; whose highland rain feeds rivers
              that most of the country downstream depends on. We work directly with the communities who
              farm the forest edge, because no fence outlasts a community that doesn&apos;t see the point of it.
            </p>
            <p className="mt-4 text-forest-300">
              Today we operate across six counties in Kenya&apos;s Rift Valley and are a member of the
              Kenya Climate Change Working Group (KCCWG). We are an independent, registered NGO &mdash;
              not affiliated with the former Kenya Water Towers Agency, a government body dissolved in
              December 2024.
            </p>
          </div>
          <PhotoPlaceholder
            src="/img/new/pexels-kashyapps-27580861.jpg"
            alt="Community nursery work"
            caption="Community nursery — where restoration begins"
            tone="forest"
            aspect="portrait"
          />
        </div>
      </section>

      <section className="border-t border-line bg-mist-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl text-forest-900">How we got here</h2>
          <div className="mt-8 divide-y divide-line">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 py-5">
                <p className="w-16 shrink-0 font-display text-xl text-clay-600">{item.year}</p>
                <p className="text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-clay-700">Life in the field</p>
            <h2 className="mt-3 font-display text-3xl text-forest-900">The work is built alongside communities.</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/img/new/pexels-samarmourya-27459539.jpg"
                alt="Community members taking part in restoration work"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/img/new/pexels-ian-panelo-33229639.jpg"
                alt="A community gathering during a field visit"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mist-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm uppercase tracking-[0.18em] text-clay-700">How we work</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-forest-900">Restoration is more than tree planting.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Ecology first", "Restore indigenous vegetation, water sources and soils using the intervention that fits each landscape."],
              ["Community leadership", "Work with the people who know and depend on the landscape, from planning through long-term stewardship."],
              ["Resilient livelihoods", "Connect restoration with nurseries, agroforestry, coffee, beekeeping and other nature-positive income."],
              ["Accountable governance", "Support plans, monitoring and evidence-informed decisions that help restoration last."],
            ].map(([title, body]) => (
              <div key={title} className="border-t-2 border-forest-700 pt-4">
                <h3 className="font-display text-xl text-forest-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl text-forest-900">Team & board</h2>
        <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-forest-900 text-mist-50">
        <div className="mx-auto max-w-6xl px-5 py-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Our accountability</h2>
            <p className="mt-4 text-forest-300">
              We are a registered NGO in Kenya and a member of the Kenya Climate Change Working
              Group. Annual reports include full financials and hectare-by-hectare progress,
              independently reviewed before publication.
            </p>
            <div className="mt-6">
              <CtaLink href="/impact" variant="secondary" className="border-forest-300 text-mist-50 hover:bg-mist-50 hover:text-forest-900">
                Read our impact & annual reports
              </CtaLink>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl">Safeguarding</h2>
            <p className="mt-4 text-forest-300">
              We work in and around schools and community groups, including with children and
              young people. Our safeguarding policy sets out how we protect the people we work
              with and how to report a concern.
            </p>
            <div className="mt-6">
              <CtaLink href="/legal/safeguarding-policy" variant="secondary" className="border-forest-300 text-mist-50 hover:bg-mist-50 hover:text-forest-900">
                Read the safeguarding policy
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

