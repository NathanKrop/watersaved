import Link from "next/link";
import { PartnerForm } from "@/components/partner-form";

export const metadata = { title: "Partner With Us" };

export default function PartnerPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 pt-16 pb-20">
      <p className="text-sm text-forest-500">Get involved / Partner with us</p>
      <h1 className="mt-2 font-display text-4xl text-forest-900 max-w-xl text-balance">
        For funders, NGOs, and government agencies.
      </h1>
      <p className="mt-5 text-ink-soft max-w-xl">
        Protecting Kenya&apos;s water towers takes cooperation across communities, public institutions,
        research, finance and conservation. Partners may contribute technical expertise, research,
        funding, policy support, restoration materials, infrastructure coordination and local knowledge.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          ["Fund restoration", "Back community nurseries, agroforestry plots, riverbank restoration, clean energy or long-term monitoring."],
          ["Bring technical expertise", "Collaborate on landscape planning, research, forest governance, water systems or climate-smart agriculture."],
          ["Strengthen local capacity", "Support producer groups, women and youth enterprises, training and community-led monitoring."],
          ["Coordinate for scale", "Align policy, data, safeguards and implementation across connected landscapes."],
        ].map(([title, body]) => (
          <div key={title} className="border border-line bg-mist-100 p-5">
            <h2 className="font-display text-xl text-forest-900">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <PartnerForm />
      </div>

      <p className="mt-5 max-w-2xl text-xs leading-relaxed text-ink-soft">Partner relationships vary by project and may include funding, technical assistance, research, policy coordination, implementation and community mobilisation. Roles and acknowledgements are confirmed for each collaboration.</p>

      <div className="mt-14 border-t border-line pt-8">
        <p className="font-display text-xl text-forest-900">Already a partner?</p>
        <p className="mt-2 text-sm text-ink-soft max-w-md">
          Funders and partner organisations can log in to submit and review project progress
          reports.
        </p>
        {/* Backend: gate this route with Supabase Auth + partner_users role check */}
        <Link href="/portal" className="mt-3 inline-block text-sm text-forest-500 underline underline-offset-4">
          Go to the partner portal →
        </Link>
      </div>
    </section>
  );
}
